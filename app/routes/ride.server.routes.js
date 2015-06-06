'use strict';
var ride = require('./../controllers/rides.server.controller');

module.exports = function (app) {
  app.route('/rides')
    .post(ride.create)
    .get(ride.get);

  app.route('/rides/:rideId')
    .get(ride.getUnigueRide)
    .put(ride.edit)
    .delete(ride.delete);
    
  app.route('/rides/user/:userId').get(ride.getRideByUser);
};