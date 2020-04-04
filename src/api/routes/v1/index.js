/* eslint-disable no-inner-declarations */
const express = require('express');
const userRoutes = require('../../domain/User/user.route');
const authRoutes = require('../../domain/Auth/auth.route');
// const SMS_API = require('../../services/sms');
const sms = require('../../services/sms/smsProvider');

const router = express.Router();

/**
 * GET v1/status
 */
router.get('/status', (req, res) => res.send('OK'));

/**
 * GET v1/docs
 */
router.use('/docs', express.static('docs'));


// TEST API
// TODO: Remove

router.get('/test', async (req, res, next) => {
  try {
    // const token = '12345';
    // function cb(response, status) {
    //   res.json({
    //     response,
    //     status,
    //   });
    // }
    const test = await sms.SendVerify('09122526777', '9000000');
    res.json({
      test,
    });
  } catch (err) {
    next(err);
  }
});

router.use('/users', userRoutes);
router.use('/auth', authRoutes);

module.exports = router;
