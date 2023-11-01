exports.renderMain = async (req, res, next) => {
    try {
        res.render('main', { title: '시작' });
    } catch (error) {
        console.error(error);
        next(error);
    }
}

exports.renderChat = async (req, res, next) => {
    try {
        req.session.user = req.body.username;
        res.render('chat', { title: '채팅방', color: req.session.color, username: req.session.user });
    } catch (error) {
        console.error(error);
        next(error);
    }
};