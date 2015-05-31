'use strict';
var ride = require('./../controllers/rides.server.controller');

module.exports = function (app) {
  app.route('/ride/add').post(ride.addRide);
  app.route('/ride/:rideId').get(ride.getUnigueRide);
  app.route('/ride/:rideId/update').put(ride.editRide);
  app.route('/ride/:rideId/delete').delete(ride.deleteRide);
  app.route('/ride/user/:userId').get(ride.getRideByUser);
  app.route('/rides').get(ride.getRides);
};