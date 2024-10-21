/**
 * @typedef {Object} User
 * @property {number} id
 * @property {string} email
 * @property {string} hashed_password
 */

/**
 * @typedef {Object} MainImage
 * @property {string} url
 * @property {string} alt
 */

/**
 * @typedef {Object} ThumbnailImage
 * @property {string} url
 * @property {string} alt
 */

/**
 * @typedef {Object} Images
 * @property {MainImage} main
 * @property {ThumbnailImage} thumbnail
 */

/**
 * @typedef {Object} Ingredient
 * @property {string} name
 * @property {number} amount
 * @property {string} measurement
 */

/**
 * @typedef {Object} Instruction
 * @property {number} order
 * @property {string} description
 */

/**
 * @typedef {Object} Recipe
 * @property {number} id
 * @property {number} user_id
 * @property {string} title
 * @property {Images} images
 * @property {string[]} categories
 * @property {number} cook_time_minutes
 * @property {Ingredient[]} ingredients
 * @property {Instruction[]} instructions
 */

/**
 * @returns {Promise<Recipe[]>}
 */
export async function getAllRecipes() {
	let res;
	try {
		res = await fetch(`${import.meta.env.VITE_API_URL}/recipes`);
	} catch (err) {
		console.error("Failed to fetch recipes", err);
		return [];
	}

	if (!res.ok) {
		console.error("Failed to fetch recipes", res.status, res.statusText);
		return [];
	}

	let data;
	try {
		data = await res.json();
	} catch (err) {
		console.error("Failed to receive and parse JSON", err);
		return [];
	}

	return data;
}

/**
 * @param {number} recipeId
 * @returns {Promise<Recipe>}
 */
export async function getRecipeById(recipeId) {
	let res;
	try {
		res = await fetch(
			`${import.meta.env.VITE_API_URL}/recipes/${recipeId}`,
		);
	} catch (err) {
		console.error("Failed to fetch recipe", err);
		return null;
	}

	if (!res.ok) {
		console.error("Failed to fetch recipe", res.status, res.statusText);
		return null;
	}

	let data;
	try {
		data = await res.json();
	} catch (err) {
		console.error("Failed to receive and parse JSON", err);
		return null;
	}

	return data;
}

/**
 *
 * @param {number} userId
 * @returns {Promise<Recipe[]>}
 */
export async function getRecipesByUserId(userId) {
	let res;
	try {
		res = await fetch(
			`${import.meta.env.VITE_API_URL}/recipes?user_id=${userId}`,
		);
	} catch (err) {
		console.error("Failed to fetch recipes", err);
		return [];
	}

	if (!res.ok) {
		console.error("Failed to fetch recipes", res.status, res.statusText);
		return [];
	}

	let data;
	try {
		data = await res.json();
	} catch (err) {
		console.error("Failed to receive and parse JSON", err);
		return [];
	}

	return data;
}

/**
 * @param {string} query
 * @param {string[]} categories
 */
export async function searchRecipes(query, categories) {
	const recipes = await getAllRecipes();

	const filtered = recipes.filter((recipe) => {
		const hasQuery = recipe.title
			.toLowerCase()
			.includes(query.toLowerCase());
		const hasCategories =
			categories.length !== 0
				? categories.every((category) =>
						recipe.categories.includes(category),
					)
				: true;

		return hasQuery && hasCategories;
	});

	console.log(filtered)

	return filtered;
}
