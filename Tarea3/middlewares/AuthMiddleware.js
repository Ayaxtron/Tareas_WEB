exports.isAuth = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(401).json({ msg: 'You are not authorized to view this resource' });
  }
}

exports.isAuthUser = (req, res, next) => {
  if (req.user.role == 'User') {
    next();
  } else {
    res.status(403).json('ERROR 403 Forbidden! You are not authorized to view this resource');
  }
}
exports.isAuthAdmin = (req, res, next) => {
  if (req.user.role == 'Admin') {
    next();
  } else {
    res.status(403).json('ERROR 403 Forbidden! You are not authorized to view this resource');
  }
}