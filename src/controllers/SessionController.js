const User = require('../models/User')

const SessionController = {
  async store(req, res){
    const { email, password } = req.body;
    let user = await User.findOne({email});

    if(!user){
      user = await User.create({email, password});
    }
    return res.json(user)
  }
};

module.exports = SessionController;