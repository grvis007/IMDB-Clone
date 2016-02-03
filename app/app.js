/**
 * Created by Goswami on 11/27/2015.
 */

var app = angular.module('Imdb',['ui.router']);

function configFn(urlRouterProvider,stateProvider){

    urlRouterProvider.otherwise("/");
    /*var homeObj = {
        //name:'home',
        templateUrl:'template/Home.html',
        url:"/"
    };*/
    var comedyObj = {
        //name:'home',
        templateUrl:'template/movies/comedy.html',
        url:"/comedymovies"
    };
    var actionObj = {
        // name:'about',
        templateUrl:'template/movies/action.html',
        url:"/actionmovies"
    };
    var horrorObj = {
        //name:'contact',
        templateUrl:'template/movies/horror.html',
        url:"/horrormovies"
    };
    var thrillerObj = {

        templateUrl:'template/celebraties/thriller.html',
        url:"/thrillermovies"
    };
    var akshayObj = {
        //name:'contact',
        templateUrl:'template/celebraties/akshay.html',
        url:"/akshay"
    };
    var amirObj = {

        templateUrl:'template/celebraties/amir.html',
        url:"/amir"
    };
    var deepikaObj = {
        //name:'contact',
        templateUrl:'template/celebraties/deepika.html',
        url:"/deepika"
    };
    var katObj = {

        templateUrl:'template/celebraties/kat.html',
        url:"/katrina"
    };
    var srkObj = {

        templateUrl:'template/celebraties/srk.html',
        url:"/sharukh"
    };
    var celebritynewsObj = {

        templateUrl:'template/News/CelebratyNews.html',
        url:"/celebratynews"
    };

    var tvnewObj = {

        templateUrl:'template/News/TVNews.html',
        url:"/tvnews"
    };
    var recentMoviesObj = {

        templateUrl:'template/Watchlist/recentMovies.html',
        url:"/RecentMovies"
    };
    var recentStarsObj = {

        templateUrl:'template/Watchlist/recentStar.html',
        url:"/RecentStar"
    };




    //stateProvider.state('home',homeObj);
    stateProvider.state('action',actionObj);z
    stateProvider.state('horror',horrorObj);
    stateProvider.state('thriller',thrillerObj);
    stateProvider.state('comedy',comedyObj);
    stateProvider.state('Akshay',akshayObj);
    stateProvider.state('Amir',amirObj);
    stateProvider.state('Deepika',deepikaObj);
    stateProvider.state('Katrina',katObj);
    stateProvider.state('Shahrukh',srkObj);
    stateProvider.state('CelebratyNews',celebritynewsObj);
    stateProvider.state('TVNews',tvnewObj);
    stateProvider.state('RecentMovies',recentMoviesObj);
    stateProvider.state('RecentStars',recentStarsObj);
}

app.config(['$urlRouterProvider','$stateProvider',configFn]);






