//import authInterceptor from './auth.interceptor'
function AppConfig($httpProvider, $stateProvider, $locationProvider, $urlRouterProvider, $qProvider) {
  'ngInject';
    
    
//    $httpProvider.interceptors.push(authInterceptor);

  /*
    If you don't want hashbang routing, uncomment this line.
    Our tutorial will be using hashbang routing though :)
  */
  // $locationProvider.html5Mode(true);

  $stateProvider
  .state('app', {
    abstract: true,
    templateUrl: 'layout/app-view.html'
  });

  $urlRouterProvider.otherwise('/');
    
  $qProvider.errorOnUnhandledRejections(false);    
}

export default AppConfig;
