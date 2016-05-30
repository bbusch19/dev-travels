angular.module('devmtnTravel').controller('bookedCtrl', function($scope, mainSrv, $state) {
var vm = this;

vm.getTrip = function() {
var trips = mainSrv.travelInfo;
for (var i = 0; i < trips.length; i++) {
    if (trips[i].id == $state.params.id) {
        vm.bookedTrip = trips[i];
    }
}
}
vm.getTrip()

})
