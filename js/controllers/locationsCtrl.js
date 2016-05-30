angular.module('devmtnTravel').controller('locationsCtrl', function($scope, mainSrv) {
var vm = this;

vm.locations = mainSrv.travelInfo;


})
