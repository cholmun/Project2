// just for some basic
const recipes = [
    {
        title: "Spaghetti Carbonara",
        description: "A classic Italian pasta dish with a creamy sauce.",
        ingredients: ["Spaghetti", "Eggs", "Parmesan cheese", "Pancetta"],
        instructions: "Cook pasta. Mix eggs and cheese. Combine with cooked pancetta."
    },
    {
        title: "Chicken Tikka Masala",
        description: "A flavorful chicken curry dish.",
        ingredients: ["Chicken", "Yogurt", "Spices", "Tomato sauce"],
        instructions: "Marinate chicken, cook with spices, and add tomato sauce."
    }
];

// DOM elements
const recipeContainer = document.getElementById("recipeContainer");
const searchBar = document.getElementById("searchBar");
const recipeModal = document.getElementById("recipeModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalIngredients = document.getElementById("modalIngredients");
const modalInstructions = document.getElementById("modalInstructions");

// Display all recipes on load
function displayRecipes(recipes) {
    recipeContainer.innerHTML = "";
    recipes.forEach((recipe, index) => {
        const card = document.createElement("div");
        card.classList.add("recipe-card");
        card.innerHTML = `<h3>${recipe.title}</h3><p>${recipe.description}</p>`;
        card.onclick = () => openModal(index);
        recipeContainer.appendChild(card);
    });
}

// Open modal with recipe details
function openModal(index) {
    const recipe = recipes[index];
    modalTitle.textContent = recipe.title;
    modalDescription.textContent = recipe.description;
    modalIngredients.innerHTML = recipe.ingredients.map(ing => `<li>${ing}</li>`).join("");
    modalInstructions.textContent = recipe.instructions;
    recipeModal.style.display = "flex";
}

// Close modal
function closeModal() {
    recipeModal.style.display = "none";
}

// Filter recipes based on search input
searchBar.addEventListener("input", () => {
    const searchText = searchBar.value.toLowerCase();
    const filteredRecipes = recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(searchText) ||
        recipe.description.toLowerCase().includes(searchText)
    );
    displayRecipes(filteredRecipes);
});

// Initial display
displayRecipes(recipes);

// Close modal when clicking outside of it
window.onclick = function(event) {
    if (event.target === recipeModal) {
        closeModal();
    }
};