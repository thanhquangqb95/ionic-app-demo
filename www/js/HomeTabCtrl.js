food.controller('HomeTabCtrl', function($scope) {
  console.log('HomeTabCtrl')


  $scope.buttons = [
   { id: 1, name: 'Phở Gà Hà Nội', href:'#/tab/PhoGaHaNoi' , image:'img/MonAn/PhoGaHaNoi/Pho_Ga_Ha_Noi_5.jpg'},
  { id: 2 , name :'Phở Bò Hà Nội', href:'#/tab/PhoBoHaNoi' , image:'img/MonAn/PhoBoHaNoi/PhoBoHaNoi2.jpg'}
   ];
   

});
