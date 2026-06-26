const jwt = require("jsonwebtoken")



const checkRequest = (req, res, next) => {
  if (req.headers.authorization) {

    const token = req.headers.authorization.split(" ")[1];
    
    if (token !== undefined) {
        const decode = jwt.verify(token,"abhi@cutie")
        req.user = decode
      next();
    } else {
      res.send("No token provided");
    }
  }else{
    res.send("No bearer provided")
  }
};

module.exports = checkRequest;
