const router = require('express').Router();
const { signupRoute } = require('../../public/src/utils/APIRoutes');

router.post('/signup', signupRoute );

module.exports = router;