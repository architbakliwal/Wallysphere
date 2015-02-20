angular.module('ionicApp', ['ionic'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)

        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})

.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('eventmenu', {
            url: "/event",
            abstract: true,
            templateUrl: "templates/event-menu.html"
        })
        .state('eventmenu.home', {
            url: "/home",
            views: {
                'menuContent': {
                    templateUrl: "templates/home.html"
                }
            }
        })
        .state('eventmenu.checkin', {
            url: "/settings",
            views: {
                'menuContent': {
                    templateUrl: "templates/settings.html",
                    controller: "SettingsCtrl"
                }
            }
        });

    $urlRouterProvider.otherwise("/event/home");
})

.controller('MainCtrl', function($scope, $ionicSideMenuDelegate) {
    $scope.settings = {
        frequency: 'FW',
        network: 'NW',
        onoff: true
    };

    $scope.toggleLeft = function() {
        $ionicSideMenuDelegate.toggleLeft();
    };
})

.controller('SettingsCtrl', function($scope) {
    $scope.showForm = true;

    $scope.frequencies = [{
        text: 'Every Day',
        value: 'FD'
    }, {
        text: 'Every Sunday',
        value: 'FW'
    }, {
        text: 'Every Alternate Sunday',
        value: 'FWA'
    }, {
        text: 'First Day of Every Month',
        value: 'FM'
    }];

    $scope.networks = [{
        text: 'Wifi and Mobile Data',
        value: 'NM'
    }, {
        text: 'Wifi Only',
        value: 'NW'
    }];

    $scope.change = function() {
        console.log(JSON.stringify($scope.settings));
    };
    $scope.onoff = function() {
        if (!$scope.settings.onoff) {
            $scope.showForm = false;
        } else {
            $scope.showForm = true;
        }
        console.log(JSON.stringify($scope.settings));
    };
});
