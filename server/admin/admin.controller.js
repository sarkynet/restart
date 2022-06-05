// const bcrypt = require('bcrypt');
// const Joi = require('joi');
const Admin = require('./admin.model');

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

async function insert(req, res) {
//   admin = await Joi.validate(admin, adminSchema, { abortEarly: false });
//   admin.hashedPassword = bcrypt.hashSync(admin.password, 10);
//   delete admin.password;
//   return await new Admin(admin).save();
return 'ADMIN INSERT FUNCTION CALLED...!';
}

async function read(admin, req, res) {
  //   admin = await Joi.validate(admin, adminSchema, { abortEarly: false });
  //   admin.hashedPassword = bcrypt.hashSync(admin.password, 10);
  //   delete admin.password;
  //   return await new Admin(admin).save();
  return 'ADMIN READ FUNCTION CALLED...!';
  }

  async function update(admin, req, res) {
    //   admin = await Joi.validate(admin, adminSchema, { abortEarly: false });
    //   admin.hashedPassword = bcrypt.hashSync(admin.password, 10);
    //   delete admin.password;
    //   return await new Admin(admin).save();
    return 'ADMIN UPDATE FUNCTION CALLED...!';
    }

    async function deleteU(admin, req, res) {
      //   admin = await Joi.validate(admin, adminSchema, { abortEarly: false });
      //   admin.hashedPassword = bcrypt.hashSync(admin.password, 10);
      //   delete admin.password;
      //   return await new Admin(admin).save();
      return 'ADMIN DELETE FUNCTION CALLED...!';
      }
