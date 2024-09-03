const logger = (request, repsonse, next) => {
  console.log("logger");
  next();
};

module.exports ={ logger};
