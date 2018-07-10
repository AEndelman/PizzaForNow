// import the api

var queryURL = "https://www.themealdb.com/api/json/v1/1/random.php";
$.ajax({
   url: queryURL,
   method: "GET"
}).then(function (response) {
   var meal = response.meals[0];
   var currentMeal = meal.strMeal;
   var currentMealString = JSON.stringify(currentMeal);
   var mealInstructions = meal.strInstructions;
   var mealPic = meal.strMealThumb;
   var mealIngredients = [];
   var mealMeasures = [];
   var totalIngredientMeasures = [];

   //Does a For in through the meal object and assigns to array based on key for ingredients

   for (var key in meal) {

       if (key.includes("Ingredient") && meal[key]) {
           var currentIngredient = meal[key];
           mealIngredients.push(currentIngredient);
       }
   }

   //Does a For in through the meal object and assigns to array based on key for measure

   for (var key in meal) {

       if (key.includes("Measure") && meal[key]) {
           var currentMeasure = meal[key];
           mealMeasures.push(currentMeasure);
       }
   }

   //Runs a for loop through the total ingredients length and combines with the measure as a string
   for (i = 0; i < mealIngredients.length; i++) {
       var totalIngredientMeasure = (mealIngredients[i] + " " + mealMeasures[i]);
       totalIngredientMeasures.push(totalIngredientMeasure);
   }

   console.log(meal);
   console.log(currentMeal);
   console.log(mealIngredients);
   console.log(mealMeasures);
   console.log(totalIngredientMeasures);
   console.log(mealInstructions);
   console.log(mealPic);

   function renderVid(){

       var title = JSON.stringify(meal.strMeal);
       var queryURL = "https://www.googleapis.com/youtube/v3/search?q=" + title + "&maxResults=25&part=snippet&key=AIzaSyAUM3sEZdx4h4h-1_fm6YTxAEXTwfAiYIw";
       $.ajax({
           url: queryURL,
           method: "GET"
       }).then(function (response) {
           console.log(response);
           var videoURL = "https://www.youtube.com/watch?v=" + response.items[0].id.videoId;
           console.log(videoURL);
       });
   }

   renderVid();
});