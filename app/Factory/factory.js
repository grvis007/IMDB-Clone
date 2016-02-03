/**
 * Created by Goswami on 11/27/2015.
 */
function imdbFactory(){

    var celebItem = [
        {
            itemName:"Shahrukh",
            routeName:"Shahrukh"
        },
        {
            itemName:"Amir",
            routeName:"Amir"
        },
        {
            itemName:"Katrina",
            routeName:"Katrina"
        },
        {
            itemName:"Akshay",
            routeName:"Akshay"
        },
        {
            itemName:"Deepika",
            routeName:"Deepika"
        }
    ];

    var newsItem = [
        {
            itemName:"TV News",
            routeName:"TVNews"
        },
        {
            itemName:"Celebrity News",
            routeName:"CelebratyNews"
        }
    ];

    var watchlistItem = [
        {
            itemName:"Recent Stars",
            routeName:"RecentStars"
        },
        {
            itemName:"Recent Movies",
            routeName:"RecentMovies"
        }
    ];


    var MoviesItem = [
        {
            itemName:"Comedy Movie",
            routeName:"comedy"
        },
        {
            itemName:"Horror Movie",
            routeName:"horror"
        },
        {
            itemName:"Thriller Movie",
            routeName:"thriller"

        },
        {
            itemName:"Action Movies",
            routeName:"action"
        }

    ];
    return {
        getCelebItem:function(){
            return celebItem;
        },
        getMoviesItem:function(){
            return MoviesItem;
        },
        getNewsItem:function(){
            return newsItem;
        },
        getWatchListItem:function(){
            return watchlistItem;
        }

    }

}




app.factory('factory',imdbFactory);
