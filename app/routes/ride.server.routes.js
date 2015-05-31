'use strict';
var ride = require('./../controllers/rides.server.controller');

module.exports = function (app) {
  app.routes('/ride/add').get(ride.addRide);
  app.route('/ride/:rideId').get(ride.getUnigueRide);
  app.route('/ride/:rideId/update').put(ride.editRide);
  app.route('/ride/:rideId/delete').delete(ride.deleteRide);
  app.route('/ride/:userId').get(ride.getRideByUser);
  app.routes('/rides').get(ride.getRides);
};