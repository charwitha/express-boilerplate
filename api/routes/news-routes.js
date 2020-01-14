// Sample code for routes

module.exports = function(app) {
    // app.get('/api/get/news', (req,res) => {
    //     News.find()
    //     .populate({ path: 'user', select: ['avatar', 'username'] })
    //     .populate({ path: 'post', populate: [
    //         {path: 'createdFor', select: ['title']}, 
    //         {path: 'createdBy', select: ['avatar']}, 
    //         {path: 'comments'}] })
    //     .then(async (news) => {
    //         await res.send({
    //             data: news,
    //             status: 'Success',
    //             message: 'Data has been retrieved'
    //         });
    //     }).catch(err => {
    //         res.status(500).send({
    //             status: 'error',
    //             message: err.message
    //         });
    //     });
    // });

    // app.post('/api/update/news/', (req,res) => {
    //     var newText = new News(req.body)

    //     newText.save()
    //     .then(async (newText) => {
    //         await res.status(200).send({
    //             status: 'Success',
    //             message: 'News added.'
    //         })
    //     }).catch(err => {
    //         res.status(500).send({
    //             status: 'error',
    //             message: err.message
    //         });
    //     })
    // });
}