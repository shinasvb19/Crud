const User = require("../model/userModel");

module.exports.createUser = async (req, res) => {
  try {
    const dob = new Date(req.body.dob);

    // console.log(dob);
    const { name, city, state, pincode, gender } = req.body;
    if (!name || !city || !state || !pincode || !dob || !gender) {
      return res.status(404).json("All fields are required");
    }
    const user = new User({ name, city, state, pincode, dob, gender });
    await user.save();
    res.status(200).json("successfully created");
  } catch (error) {
    res.status(500);
  }
};

module.exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json("server error: " + error.message);
  }
};

module.exports.editUser = async (req, res) => {
  const id = req.params.id;
  const dob = new Date(req.body.dob);
  const { name, city, state, pincode, gender } = req.body;
  if (isNaN(pincode)) res.status(403).json("picode is not correct");
  try {
    await User.findByIdAndUpdate(id, {
      name: name,
      city: city,
      state: state,
      pincode: pincode,
      gender: gender,
      dob: dob,
    });
    res.status(200).json("succesfully updated");
  } catch (error) {
    res.status(500).json("server error");
  }
};

module.exports.deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    await User.findByIdAndDelete(id);
    res.status(200).json("succesfully deleted");
  } catch (error) {
    res.status(500).json("server error");
  }
};
