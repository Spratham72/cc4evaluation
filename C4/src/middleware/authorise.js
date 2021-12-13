module.exports = function (permittedRoles) {
    return function (req, res, next) {
      user = req.user.user;
      console.log(user)
      console.log(permittedRoles)
      isAllowed = false;
  
      permittedRoles.map((role) => {
        if (user.includes(role)) {
          isAllowed = true;
        }
      });
  
      if (!isAllowed)
        return res.status(401).json({
          status: "failed",
          message: " You are not allowed to access this",
        });
  
      next();
    };
  };