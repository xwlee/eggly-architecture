angular.module('categories', [
    'eggly.models.categories'
])
    .config(function($stateProvider) {
        $stateProvider
            .state('eggly.categories', {
                url: '/',
                // templateUrl, template and templateProvider will be ignored when view is defined
                views: {
                    // Target the ui-view named 'categories' in ROOT state (eggly) named 'categories'
                    'categories@': {
                        templateUrl: 'app/categories/categories.tmpl.html',
                        controller: 'CategoriesListCtrl as categoriesListCtrl'
                    },
                    // Target the ui-view named 'bookmarks' in ROOT state (eggly) named bookmarks
                    // To show all bookmarks for all categories
                    'bookmarks@': {
                        templateUrl: 'app/categories/bookmarks/bookmarks.tmpl.html',
                        controller: 'BookmarksListCtrl as bookmarksListCtrl'
                    }
                }
            })
        ;
    })
    .controller('CategoriesListCtrl', function CategoriesCtrl(CategoriesModel) {
        var categoriesListCtrl = this;
        CategoriesModel.getCategories()
            .then(function(result) {
                categoriesListCtrl.categories = result;
            })
        ;

        categoriesListCtrl.isCurrentCategory = CategoriesModel.isCurrentCategory;
    })
;
