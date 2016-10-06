food.controller('LoginCtrl', function ($scope, $state, $cordovaOauth, 
                                   UserService, Config, $ionicPlatform,
                                   $ionicLoading, $cordovaPush) {
  if (UserService.current()) {
    $state.go('tabs.home');
  }
  $scope.twitter = function () {
    $ionicPlatform.ready(function () {
      $cordovaOauth.twitter(Config.twitterKey, Config.twitterSecret)
        .then(function (result) {
          $ionicLoading.show({
            template: 'Loading...'
          });
          UserService.login(result).then(function (user) {
            if (user.deviceToken) {
              $ionicLoading.hide();
              $state.go('tabs.home');
              return;
            }

            $ionicPlatform.ready(function () {
              $cordovaPush.register({
                badge: true,
                sound: true,
                alert: true
              }).then(function (result) {
                UserService.registerDevice({
                  user: user, 
                  token: result
                }).then(function () {
                  $ionicLoading.hide();
                  $state.go('tabs.home');
                }, function (err) {
                  console.log(err);
                });
              }, function (err) {
                console.log('reg device error', err);
              });
            });
          });
        }, function (error) {
          console.log('error', error);
        });
    });
  };
})
food.controller('HomeTabCtrl', function ($scope, NewsService, $ionicLoading) {
  $ionicLoading.show({
    template: 'Loading...'
  });
  NewsService.all().then(function (news) {
    $scope.news = news;
    $ionicLoading.hide();
  });

  $scope.refresh = function () {
    NewsService.all().then(function (news) {
      $scope.news = news;
      $scope.$broadcast('scroll.refreshComplete');
    });
  };

  $scope.buttons = [
   { id: 1, name: 'Phở Gà Hà Nội', href:'#/tab/PhoGaHaNoi' , image:'img/MonAn/PhoGaHaNoi/Pho_Ga_Ha_Noi_5.jpg'},
  { id: 2 , name :'Phở Bò Hà Nội', href:'#/tab/PhoBoHaNoi' , image:'img/MonAn/PhoBoHaNoi/PhoBoHaNoi2.jpg'}
   ];
   
})
