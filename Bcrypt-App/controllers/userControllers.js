const User = require("../modals/userModal");
const abhinav = require("bcrypt");
const jwt = require("jsonwebtoken");

const validatePassword = async (upass, user) => {
  //upass - user entered password
  //user - user object with db data
  return await abhinav.compare(upass, user.password);
  //this function will return true or false
};

const register = async (req, res) => {
  try {
    const { username, email, npassword } = req.body;
    const checkMail = await User.findOne({email})

    if(checkMail){
        return res.status(409).json({message:"arey halwa,User already exists with given, mail"})
    }

    const password = await abhinav.hash(npassword, 12);
    //console.log(npassword,password)
    await User.create({ username, email, password });

    res.status(201).json({ message: "User Registered Successfully" });
  } catch (err) {
    console.error("User creation error: ", err);
  }
};

const getProfile = async (req, res) => {
  const user = await User.findById(req.user.id);
  console.log(user);
  res.send("Request reached controller");
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    console.log(user);
    return res.status(404).json({ message: "User not found" });
  } else {
    const isPass = await validatePassword(password, user);
    if (isPass) {
      const token = await jwt.sign({ id: user._id }, "abhi@cutie");
      console.log(token);
      return res.json({
        message: "Credentials Verified this is your login token ",
        Btoken: token,
        user:{id:user._id,email:user.email}
      });
    } else {
      return res
        .status(401)
        .json({ message: "Arey you gave wrong credentials" });
    }
  }
  console.log(user);
  return res.send("Processed");
};

module.exports = { register, loginUser, getProfile };
