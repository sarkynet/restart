//  const bcrypt = require('bcrypt');
//  const Joi = require('joi');
//  const { json } = require('stream/consumers');
const Admin = require('./admin.model');
//const JSON = JSON;


// const adminSchema = Joi.object({
//   fullname: Joi.string().required(),
//   email: Joi.string().email(),
//   mobileNumber: Joi.string().regex(/^[1-9][0-9]{9}$/),
//   password: Joi.string().required(),
//   repeatPassword: Joi.string().required().valid(Joi.ref('password'))
// })

module.exports = {
  insert,
  read,
  update,
  deleteU
}

async function insert(admin) {
  // admin = await Joi.validate(admin, adminSchema, { abortEarly: false });
   admin.hashedPassword = admin.password;
  delete admin.password;
  await new Admin(admin).save().then(data => {
            console.log('user data added'+data);
            // return { message: 'success '+data };
            return JSON.parse(data);
        })
        .catch(err => {
            console.error(err);
            return err;
        });
}

async function read(admin, req, res) {
  //   admin = await Joi.validate(admin, adminSchema, { abortEarly: false });
  //   admin.hashedPassword = bcrypt.hashSync(admin.password, 10);
  //   delete admin.password;
     await Admin.find().then(data => {
      console.log(data);
      return JSON.parse(data);
  })
  .catch(err => {
      console.error(err);
      return err;
  });
  }

  async function update(admin, req, res) {
    //   admin = await Joi.validate(admin, adminSchema, { abortEarly: false });
    //   admin.hashedPassword = bcrypt.hashSync(admin.password, 10);
    //   delete admin.password;
    //   return await new Admin(admin).save();
    }

    async function deleteU(admin, req, res) {
      //   admin = await Joi.validate(admin, adminSchema, { abortEarly: false });
      //   admin.hashedPassword = bcrypt.hashSync(admin.password, 10);
      //   delete admin.password;
      //   return await new Admin(admin).save();
      return 'ADMIN DELETE FUNCTION CALLED...!';
      }
