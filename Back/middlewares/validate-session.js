

const validateAuthenticated = (req, res, next) => {
    // Lógica para validar la sesión del usuario
    const auth = req.headers.authorization;
    if (!auth) return res.status(401).json({ message: 'No autorizado' });

    const token = auth.split(' ')[1];
    const session = getSession(token);

    if (!session) return res.status(401).json({ message: 'Sesión inválida o expirada' });

    req.user = session.username;
    next();
};

module.exports = { validateAuthenticated };