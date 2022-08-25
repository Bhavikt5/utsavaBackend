// This is function for Asysc ----- try and catch ---- were resole is try and catch next
module.exports = (theFunc) => (req, res, next) => {
  Promise.resolve(theFunc(req, res, next)).catch(next);
};
