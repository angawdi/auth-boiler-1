module.exports = function(req, res, next){
  if(!req.user){
    req.flash('error', 'You gotta log in to look at this page. It\'s got permissions!');
    res.redirect('/auth/login');
  }
  else {
    next();
  }
}
