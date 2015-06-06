'use strict';
var ride = require('./../controllers/rides.server.controller');

module.exports = function (app) {
  app.route('/ride')
    .post(ride.addRide)
    .get(ride.getRides);

  app.route('/ride/:rideId')
    .get(ride.getUnigueRide)
    .put(ride.editRide)
    .delete(ride.deleteRide);
    
  app.route('/ride/user/:userId').get(ride.getRideByUser);
};