'use strict';
const Customer = require('../models/customer');
module.exports = function(Reservation) {

  Reservation.validate('startDate', dateValidatorFn, {
    message: 'endDate should be after startDate',
  });
  function dateValidatorFn(err) {
    if (this.startDate >= this.endDate) {
      err();
    }
  }
  Reservation.observe('after save', function(context, next) {
    Reservation.app.models.Campground.findById(context.instance.campgroundId,
      function(err, campground) {
        Reservation.app.models.Customer.findById(context.instance.userId, function(err, userData) {
          Reservation.app.models.Email.send({
            to: userData.email,
            from: 'Example2@gmail.com',
            subject: 'Thank you for resveration at ' + campground.name,
            html: '<p>We confirm your reservation for <strong>' + campground.name + '</strong></p>'
          }, function(err, mail) {
            console.log("Error Is::", err);
            console.log('email sent!');
          });
        });
      });
    next();
  });
};
