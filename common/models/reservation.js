'use strict';

module.exports = function(Reservation) {
 Reservation.validate('startDate', dateValidatorFn, {message: 'endDate should be after startDate'});
  function dateValidatorFn(err) {
    if (this.startDate >= this.endDate) {
      err();
    }
  }
};
