const { Router } = require('express');
const { validateAuthenticated } = require('../middlewares/validate-session');
const { login, logout } = require('../controllers/auth');

const router = Router();

router.post('/login', login);
router.post('/logout', validateAuthenticated, logout);

module.exports = router;