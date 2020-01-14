var mongoose = require('mongoose');
var moment = require('moment');

var loginSchema = new mongoose.Schema({
    identityKey: {type: String, required: true},
    failedAttempts: {type: Number, required: true, default: 0},
    timeout: {type: Date, required: true, default: new Date()},
    inProgress: {type: Boolean}
});

loginSchema.static('canAuthenticate', async function (key) {
    await this.findOne({'identityKey': key})
    .then(async (login) => {
        if(!login || login.failedAttempts < 3) {
            return true;
        }
        var loginTime = moment(new Date())
        var attemptTime = moment(login.timeout)
        var timeout = loginTime - moment(attemptTime).add(2, 'minutes');

        console.log(timeout);
        if(timeout >= 0) {
            await login.remove();
            return true;
        }
        return false;
    }).catch(err => {
        res.status(500).send({
            status: 'error',
            message: err.message
        });
    })
});

loginSchema.static('failedLoginAttempts', async function(key) {
    const query = {'identityKey': key};
    const update = {$inc: {failedAttempts: 1}, timeout: new Date(), inProgress: false};
    const options = {setDefaultOnInsert: true, upsert: true};
    return await this.findOneAndUpdate(query, update, options).exec();
});

loginSchema.static('successfulLoginAttempt', async function(key) {
    await this.findOne({'identityKey': key})
    .then(async (login) => {
        if(login) {
            return await login.remove();
        }
    }).catch(err => {
        res.status(500).send({
            status: 'error',
            message: err.message
        });
    })
});

loginSchema.static('inProgress', async function(key) {
    const login = await this.findOne({'identityKey': key});
    const query = {identityKey: key};
    const update = {inProgress: true};
    const options = {setDefaultOnInsert: true, upsert: true};
    await this.findOneAndUpdate(query, update, options).exec();
    return (login && login.inProgress);
});

var LoginSchema = mongoose.model('LoginSchema', loginSchema, 'loginschema');
module.exports = LoginSchema
