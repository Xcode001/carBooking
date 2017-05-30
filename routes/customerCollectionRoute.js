const router = require('express').Router();


/*** Routes exports ***/
//you can simulate post,delete and patch requests with the "postman" software. https://www.getpostman.com/


module.exports = (customerDetail) => {
  router.use(function (req,res,next) {
      console.log("/" + req.method);
      next();
  });

  router.get('/', (request, response) => {

      customerDetail.find({},(err, customers) => {
          if(err)
              console.log(err);
          response.send(customers);
      })
  });

  return router;
}