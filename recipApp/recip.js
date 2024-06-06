const recipeContainer = document.querySelector('.recipe-container'); // Corrected selector
const searchBox = document.querySelector('.searchbox');
const searchBtn = document.querySelector('.searchBtn');

const fetchRecipes = async (query) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
  const response = await fetch(url);
  const recipes = await response.json();
  displayRecipes(recipes);
};


const displayRecipes = (recipes) => {

  const recipeList = document.querySelector('.recipe-container');
  recipeList.innerHTML = '';

  recipes.meals.forEach(meal => {
    const recipeDiv = document.createElement('div');
    recipeDiv.classList.add('recipe');
    recipeDiv.innerHTML = `
    <div class="card crd-dr" style="width: 20rem;">
  <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${meal.strMeal}</h5>
    <p class="card-text">${meal.strArea}</p>
    <p>${meal.strCategory}</p>
  </div>
</div>`

    recipeContainer.appendChild(recipeDiv)
  });
}
/*const displayRecipes = (recipes) => {
  const recipeList = document.querySelector('.recipe-container');
  recipeList.innerHTML = '';
  
  recipes.meals.forEach((recipe) => {
    const recipeElement = document.createElement('div');
    recipeElement.classList.add('recipe');
    recipeElement.innerHTML = `
      <h2>${recipe.strMeal}</h2>
      <img src="${recipe.strMealThumb}" alt="${recipe.strMeal}">
    `;
    recipeList.appendChild(recipeElement);
  });
};*/

searchBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const searchInput = searchBox.value.trim();

  fetchRecipes(searchInput);
  //   console.log("Search initiated...");
});