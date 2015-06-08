'use strict';
var booking = require('./../controllers/bookings.server.controller');

module.exports = function (app) {
  app.route('/bookings')
    .post(booking.create)
    .get(booking.get);

  app.route('/bookings/:bookingId')
    .get(booking.getUnigueBooking)
    .put(booking.edit)
    .delete(booking.delete);
    
  app.route('/bookings/user/:userId').get(booking.getBookingByUser);
  app.route('/bookings/ride/:rideId').get(booking.getRideBooking);
};