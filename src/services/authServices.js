const User = require('../models/user');

exports.loginUser = async (googleProfile) => {
  const [user] = await User.findOrCreate({
    where: { googleId: googleProfile.id },
    defaults: {
      email: googleProfile.emails[0].value,
      name: googleProfile.displayName,
    },
  });
  return user;
};
