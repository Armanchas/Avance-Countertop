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
		res = await fetch("http://localhost:3000/recipes");
	} catch (err) {
		console.error("Failed to fetch recipes", err);
		return [];
	}

	if (!res.ok) {
		console.error("Failed to fetch recipes", res.status, res.statusText);
		return [];
	}

	return await res.json();
}

/**
 * @param {number} recipeId
 * @returns {Promise<Recipe>}
 */
export async function getRecipeById(recipeId) {
	const res = await fetch(`http://localhost:3000/recipes/${recipeId}`);

	if (!res.ok) {
		throw new Error("Failed to fetch recipe");
	}

	return await res.json();
}

/**
 *
 * @param {number} userId
 * @returns {Promise<Recipe[]>}
 */
export async function getRecipesByUserId(userId) {
	const res = await fetch(`http://localhost:3000/recipes?user_id=${userId}`);

	if (!res.ok) {
		throw new Error("Failed to fetch recipes");
	}

	return await res.json();
}
