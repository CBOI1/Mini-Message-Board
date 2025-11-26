function buildForm(req, res, next) {
    res.render('form');
}
function createMessage(messages) {
    return (req, res, next) => {
        messages.push({user: req.body.user, text: req.body.text, added: new Date()});
        res.redirect('..');
    }
}

function open(req, res, next) {
    res.render('open', {user: req.query.user, text: req.query.text});
}

module.exports = {
    buildForm,
    createMessage,
    open
};