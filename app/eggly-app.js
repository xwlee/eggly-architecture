angular.module('Eggly', [
    'ngAnimate',
    'ui.router',
    'categories',
    'categories.bookmarks'
])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            // Abstract state serves as a PLACEHOLDER or NAMESPACE for application
            .state('eggly', {
                url: '',
                abstract: true
            })
        ;

        $urlRouterProvider.otherwise('/');
    })
;
