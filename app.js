//putting 'ui.router' in the array param of the angular module will set up routing for you. Then .config after the parameters. Make sure you also included the script tag for your ui-routes in your index.html file.

angular.module("assessment", ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: './views/home.html'
      })

      .state('about', {
        url: '/about',
        templateUrl: './views/about.html'
      })

      .state('blog', {
        url: '/blog',
        templateUrl: './views/blog.html'
      })

      .state('shop', {
        url: '/shop',
        templateUrl: './views/shop.html',
        controller: 'shopCtrl'
      })

      .state('details', {
        url: '/product-details/:id',
        templateUrl: './views/product-details.html',
        controller: 'productDetailsCtrl'
      });
  });
