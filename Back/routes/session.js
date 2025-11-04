const { Router } = require('express');
const { validateAuthenticated } = require('../middlewares/validate-session');
const { session } = require('../controllers/session');

const router = Router();

router.get('/', validateAuthenticated, session);

module.exports = router;