const express = require('express');
 const adminRoutes = require('./admin.route');
 const authRoutes = require('./auth.route');
 const staffRoutes = require('./staff.route');
 const studentRoutes = require('./student.route');
 const sessionRoutes = require('./session.route');
 const gradeLevelRoutes = require('./gradeLevel.route');

const router = express.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);

 router.use('/auth', authRoutes);
 router.use('/admin', adminRoutes);
 router.use('/staff', staffRoutes);
 router.use('/student', studentRoutes);
 router.use('/session', sessionRoutes);
 router.use('/gradeLevel', gradeLevelRoutes);

module.exports = router;
