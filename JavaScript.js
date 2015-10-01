var app = angular.module('MainApp', [
    'ngMaterial',
    'ngRoute',
    'ngResource'
]);

app.config(function ($mdThemingProvider){
    $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .accentPalette('pink');
});

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        title: "Taiwei Tuan's Home",
        templateUrl: 'pages/home.html',
        reloadOnSearch: false,
    });
    $routeProvider.when('/experience', {
        title: "Experience",
        templateUrl: "pages/experience.html",
        reloadOnSearch: false,
    });
    $routeProvider.when('/skills', {
        title: 'Skill',
        templateUrl: "pages/skills.html",
        reloadOnSearch: false,
    });
    $routeProvider.when('/profolios', {
        title: 'Profolio',
        templateUrl: "pages/profolios.html",
        reloadOnSearch: false,
    });
}]);

app.run(['$rootScope', function ($rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.$$route.title;
    });
}]);

app.factory('Page', function () {
    var title = 'Taiwei Tuan';
    return {
        title: function () { return title; },
        setTitle: function (newTitle) { title = newTitle; }
    };
});

// Main Controller
app.controller('AppCtrl', ['$scope', '$mdSidenav', 'Page', '$rootScope', function ($scope, $mdSidenav, Page, $rootScope) {

    // toggle show/hide navigation menu
    $scope.toggleSidenav = function (menuId) {
        $mdSidenav(menuId).toggle();
    };

    // Main menu 
    $scope.menu = [{
        link: '#/',
        title: 'Home',
        name: 'Home'
    }, {
        link: '#/experience',
        title: 'Experience',
        name: 'Experience',
    }, {
        link: '#/skills',
        title: 'Skills',
        name: 'Skills'
    }, {
        link: '#/profolios',
        title: 'Profolios',
        name: 'Profolios'
    }];

    // bottom menu of sidebar
    $scope.admin = [{
        link: '',
        title: 'Trash',
        name: 'delete'
    }, {
        link: 'showListBottomSheet($event)',
        title: 'Settings',
        name: 'settings'
    }];

    // set style of selected tab for side-menu
    $scope.selected = null;
    $scope.selectSidemenu = function (item) {
        console.log(item);
        $scope.selected = item;
        $scope.toggleSidenav('left');
    };


}]);
