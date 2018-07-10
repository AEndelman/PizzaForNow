// import the api

var queryURL = "https://www.themealdb.com/api/json/v1/1/random.php";
$.ajax({
   url: queryURL,
   method: "GET"
}).then(function (response) {
   var meal = response.meals[0];
   var currentMeal = meal.strMeal;
   var mealInstructions = meal.strInstructions;
   var mealPic = meal.strMealThumb;
   var mealIngredients = [];

   // for (var key in response.meals[0]){
   //     var ingredientString = JSON.stringify(response.meals[0].strIngredient1 + i);
   //     var ingredient = JSON.parse(ingredientString);
   //     console.log(ingredient);
   //     var currentIngredient = JSON.stringify(ingredient);
   //     mealIngredients.push(currentIngredient);

   //     if(response.meals.strIngredient + i ===""){
   //         break;
   //     }
   // }

   mealIngredients.push(meal.strIngredient1);
   mealIngredients.push(meal.strIngredient2);
   mealIngredients.push(meal.strIngredient3);
   mealIngredients.push(meal.strIngredient4);
   mealIngredients.push(meal.strIngredient5);
   mealIngredients.push(meal.strIngredient6);
   mealIngredients.push(meal.strIngredient7);
   mealIngredients.push(meal.strIngredient8);
   mealIngredients.push(meal.strIngredient9);
   mealIngredients.push(meal.strIngredient10);
   mealIngredients.push(meal.strIngredient11);
   mealIngredients.push(meal.strIngredient12);
   mealIngredients.push(meal.strIngredient13);
   mealIngredients.push(meal.strIngredient14);
   mealIngredients.push(meal.strIngredient15);
   mealIngredients.push(meal.strIngredient16);
   mealIngredients.push(meal.strIngredient17);
   mealIngredients.push(meal.strIngredient18);
   mealIngredients.push(meal.strIngredient19);
   mealIngredients.push(meal.strIngredient20);

   for (i = 0; i<mealIngredients.length; i++){
       if (mealIngredients[i]===""){
           mealIngredients.splice(mealIngredients[i]);
       }
   }

   console.log(meal);
   console.log(currentMeal);
   console.log(mealInstructions);
   console.log(mealPic);
   console.log(mealIngredients);
   
});

// use .notation







// get the ingredients 1-20
//  get the measurment 1-20
// catagory
// str meal
// youtube
// instructions
// meal thumbnail