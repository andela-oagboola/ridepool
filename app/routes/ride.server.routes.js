'use strict';
var ride = require('./../controllers/rides.server.controller');

module.exports = function (app) {
  app.route('/ride')
    .post(ride.create)
    .get(ride.get);

  app.route('/ride/:rideId')
    .get(ride.getUnigueRide)
    .put(ride.edit)
    .delete(ride.delete);
    
  app.route('/ride/user/:userId').get(ride.getRideByUser);
};