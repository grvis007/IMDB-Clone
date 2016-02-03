/**
 * Created by Goswami on 11/27/2015.
 */
function imdbControll($scope,factory,$state) {

    $scope.home = "IMDB";
    $scope.celebItem = factory.getCelebItem();
    $scope.MoviesItem = factory.getMoviesItem();
    $scope.newsItem = factory.getNewsItem();
    $scope.watchlistItem = factory.getWatchListItem();

    $scope.loadPage = function(route){
        //$scope.contentUrl = route.templateUrl;
        $state.go(route.routeName);
    }


}

app.controller('imdbCtrl',['$scope','factory','$state',imdbControll]);