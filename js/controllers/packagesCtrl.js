angular.module('devmtnTravel').controller('packagesCtrl', function($scope, mainSrv) {
var vm = this;
// vm.test = 'This is a test';
vm.packages = mainSrv.travelInfo;

})
