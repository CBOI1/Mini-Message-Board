function getIndex(messages) {
    //provide the views
    return (req, res, next) => {
        res.render('index', {messages});
    }
}

module.exports = getIndex;