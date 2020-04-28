'use strict';

module.exports = function(Campground) {
  Campground.validatesLengthOf('name', {max: 20, message: {max: 'Name is too long'}});
};
