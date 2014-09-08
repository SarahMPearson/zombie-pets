(function(){
  'use strict';

  angular.module('zombie-pets', [])
  .controller('MainController', ['$scope', function($scope){
    $scope.title = 'Zombie Pets';

    $scope.weapon = {};
    $scope.weapons = [];
    $scope.pet = {health:100, isZombie:false};
    $scope.pets = [];

    $scope.player1 = null;
    $scope.player2 = null;

    $scope.addWeapon = function(){
      $scope.weapons.push($scope.weapon);
      $scope.weapon = {};
      $('#name').focus();
    };

    $scope.addPet = function(){
      var index = $scope.pet.weapon * 1;
      $scope.pet.weapon = $scope.weapons[index];
      $scope.pets.push($scope.pet);
      $scope.pet = {health:100, isZombie:false};
    };

    $scope.setPlayer = function(num){
      $scope['player' + num] = this.p;
    };

    $scope.fight = function(){
      var x    = Math.floor(Math.random() * 2) + 1,
          dam1 = Math.random() * $scope.player1.weapon.damage,
          dam2 = Math.random() * $scope.player2.weapon.damage;
      if(x === 1){
        $scope.player1.health -= parseInt(dam1).toFixed(2);
        $scope.player2.health -= parseInt(dam2).toFixed(2);
      }else{
        $scope.player2.health -= dam2;
        $scope.player1.health -= dam1;
      }
    };

    $scope.toggleWeapon = function(){
      $scope.hideWeapon = !!!$scope.hideWeapon;
    };

    $scope.togglePet = function(){
      $scope.hidePet = !!!$scope.hidePet;
    };
  }]);
})();

