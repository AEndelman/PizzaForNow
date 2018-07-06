// import the api 

var queryURL = "https://www.themealdb.com/api/json/v1/1/random.php";
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);
    console.log(response.meals.catagory);
    
});

// use .notation




// need to make 2 empty arry to get the items 
// make the 22 arrays match
// get the catagory of each food
// get the youtube video to make the dish 
// get the picture of the dish



// get the ingredients 1-20
//  get the measurment 1-20
// catagory
// str meal
// youtube
// instructions
// meal thumbnail
