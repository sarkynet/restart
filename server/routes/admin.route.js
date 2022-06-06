const express = require('express');
const adminCtrl = require('../admin/admin.controller');

const router = express.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('ADMIN ROUTES OK')
  
);
const admin = {
  firstname: 'Jude',
  lastname: 'Ejeziem',
  email: 'sarkynet@yahoo.com',
  mobileNumber: '07061081701',
  password: 'wisdom',
  repeatPassword: 'wisdom'
};

router.get('/insert', (req, res) =>{
  let response = adminCtrl.insert(admin);
  res.send(response);
});

router.get('/read', (req, res) =>{
  let response = adminCtrl.read()
  res.send(response);
});

router.get('/update', (req, res) =>{
  let response = adminCtrl.update()
  res.send(response);
});

router.get('/delete', (req, res) =>{
  let response = adminCtrl.deleteU()
  res.send(response);
});

module.exports = router;
