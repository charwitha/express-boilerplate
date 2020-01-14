module.exports = function(app) {
    // var session = require('express-session');
    // var mongoStoreFactory = require('connect-mongo');
    // const MongoStore = mongoStoreFactory(session);

    // var saltKey = 'randomKey';

    // session.Session.prototype.login = function (user) {
    //     const req = this.req;
    //     const res = this.res;

    //     req.session.regenerate(function(err){
    //        if(err) {
    //            res.status(500).send('Error');
    //        }
    //     });
    //     req.session.userInfo = user;
    // };

    // session.Session.prototype.logout = function (user){
    //     delete this.req.session;
    //     this.req.sessionStore.destroy(this.id, user);
    //     return this;
    // };

    // For creating session in mongoDB
    // app.use(session({
    //     store: new MongoStore({
    //         url: 'mongodb://127.0.0.1:27017/mm-generator',
    //         ttl: (1 * 10 * 60)
    //     }),
    //     // secret: bcrypt.hashSync(saltKey, 10),
    //     saveUninitialized: false,
    //     resave: false,
    //     cookie: {
    //         path: '/',
    //         httpOnly: false,
    //         secure: false,
    //         maxAge: 1*10*60*1000
    //     },
    //     name: 'id'
    // }));
}
