var queryURL = "https://www.themealdb.com/api/json/v1/1/random.php";
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    var meals = response.meals[0];

    console.log(response)

    console.log(meals);

    console.log(meals.strMeal);

    for (var i = 1; i < 20; i++) {
        console.log(meals.strIngredient[i]);
    }
    

});
