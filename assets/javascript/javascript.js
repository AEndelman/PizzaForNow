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








// get the ingredients 1-20
//  get the measurment 1-20
// catagory
// str meal
// youtube
// instructions
// meal thumbnail
