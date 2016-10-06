// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var food =angular.module('app', ['ngCordova','LocalStorageModule']);

food.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
food.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/login');

  $stateProvider
  
.state('login',{
  url:'/login',
  templateUrl:'templateUrl/login.html',
  controller:'LoginCtrl'

}) 
.state('tabs', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tab.html"
    })

  
.state('tabs.home', {
      url: "/home",
      views: {
        'tab-home': {
          templateUrl: "templates/home.html",
          controller: 'HomeTabCtrl'
        }
      }
        })
.state('tabs.PhoGaHaNoi', {
      url: "/PhoGaHaNoi",
      views: {
        'tab-home': {
          templateUrl: "templates/PhoGaHaNoi.html"
        }
      }
    })
.state('tabs.PhoBoHaNoi', {
      url: "/PhoBoHaNoi",
      views: {
        'tab-home': {
          templateUrl: "templates/PhoBoHaNoi.html"
        }
      }
    })
.state('tabs.about', {
      url: "/about",
      views: {
        'tab-home':
         {
          templateUrl: "templates/about.html"
        }
      }
   
        })

.state('tabs.QuanAn', {
      url: "/QuanAn",
      views: {
        'tab-QuanAn': {
          templateUrl: "templates/QuanAn.html",
          
        }
      }
       })

.state('tabs.Haruni', {
      url: "/Haruni",
      views: {
        'tab-QuanAn': {
          templateUrl: "templates/Haruni.html"
        }
      }
    })


    
 
})



