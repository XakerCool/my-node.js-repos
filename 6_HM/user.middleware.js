const checkAge = (req, res, next) => {
    const user = req.user;
    if (user.age < 18) {
        return;
    }
    res.status(200).json({ message: 'Возраст подходит' })
    next();
}