exports.renderChat = async (req, res, next) => {
    try {
        res.render('chat', { title: '채팅방', color: req.session.color });
    } catch (error) {
        console.error(error);
        next(error);
    }
};