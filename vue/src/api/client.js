import bcrypt from "bcryptjs";
import { useUserStore } from "@/stores/userStore";

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

/**
 * @param {Recipe} recipe
 * @returns {Promise<Recipe>}
 */
export async function postRecipe(recipe) {
	
	const lastID = (await getAllRecipes()).toSorted((a, b) => b.id - a.id)[0]?.id ?? 0;
	console.log(lastID);
	recipe.id = Number(lastID) + 1;
	recipe.id = recipe.id.toString();
	const res = await fetch(`${import.meta.env.VITE_API_URL}/recipes`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(recipe),
	});

	if (!res.ok) {
		console.error("Failed to post recipe", res.status, res.statusText);
		return null;
	}

	const data = await res.json();

	return data;
}

export async function uploadFile(file) {


	const res = await fetch(`${import.meta.env.VITE_IMAGE_API_URL}/upload`, {
		method: "POST",
		body: file,
		headers: {
			authorization: `Bearer ${import.meta.env.VITE_DEPLOYER_API_KEY}`,
		}
	});

	if (!res.ok) {
		console.error("Failed to upload file", res.status, res.statusText);
		return null;
	}

	const data = await res.json();

	return `${import.meta.env.VITE_IMAGE_API_URL}/${data.id}`;

}

/**
 * @param {Recipe} recipe
 * @returns {Promise<Recipe>}
 */
export async function deleteRecipe(recipeId) {
	const res = await fetch(
		`${import.meta.env.VITE_API_URL}/recipes/${recipeId}`,
		{
			method: "DELETE",
		},
	);

	if (!res.ok) {
		console.error("Failed to delete recipe", res.status, res.statusText);
		return false;
	}

	return true;
}

/**
 * @param {User} user
 * @returns {Promise<User>}
 */
export async function createUser(user) {

	const lastID = (await getAllUsers()).toSorted((a, b) => b.id - a.id)[0]?.id ?? 0;
	console.log(lastID);
	user.id = Number(lastID) + 1;
	user.id = user.id.toString();

	if (user.password !== user.confirmed_password) {
		console.error("Passwords do not match");
		return null;
	}	

	user.hashed_password = bcrypt.hashSync(user.password, 10);

	delete user.password;
	delete user.confirmed_password;

	const res = await fetch(`${import.meta.env.VITE_API_URL}/users`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(user),
	});

	if (!res.ok) {
		console.error("Failed to create user", res.status, res.statusText);
		return null;
	}

	const data = await res.json();

	return data;
}

/**
 * @returns {Promise<User[]>}
 */
export async function getAllUsers() {
	let res;
	try {
		res = await fetch(`${import.meta.env.VITE_API_URL}/users`);
	} catch (err) {
		console.error("Failed to fetch users", err);
		return [];
	}

	if (!res.ok) {
		console.error("Failed to fetch users", res.status, res.statusText);
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
 * @param {string} username
 * @returns {Promise<User>}
 */
export async function getUserByUsername(username) {
	let res;
	try {
		res = await fetch(
			`${import.meta.env.VITE_API_URL}/users?username=${username}`,
		);
	} catch (err) {
		console.error("Failed to fetch user", err);
		return null;
	}

	if (!res.ok) {
		console.error("Failed to fetch user", res.status, res.statusText);
		return null;
	}

	let data;
	try {
		data = await res.json();
	} catch (err) {
		console.error("Failed to receive and parse JSON", err);
		return null;
	}
	console.log(data);

	return data[0];
}


export async function loginUser(username, password) {

	const user = await getUserByUsername(username);

	if (!user) {
		console.error("User not found");
		return null;
	}

	if (!bcrypt.compareSync(password, user.hashed_password)) {
		console.error("Password is incorrect");
		return null;
	}
	
	const userStore = useUserStore();
	userStore.$patch({
		id: user.id,
		username: user.username,
		email: user.email
	})

	localStorage.setItem('userStore', JSON.stringify({
		id: user.id,
		username: user.username,
		email: user.email
	}))

	return true;
}

export async function logoutUser() {
	const userStore = useUserStore();
	userStore.$patch({
		id: null,
		username: null,
		email: null
	})

	localStorage.removeItem('userStore');
}

export async function getUserById(userId) {
	let res;
	try {
		res = await fetch(
			`${import.meta.env.VITE_API_URL}/users/${userId}`,
		);
	} catch (err) {
		console.error("Failed to fetch user", err);
		return null;
	}

	if (!res.ok) {
		console.error("Failed to fetch user", res.status, res.statusText);
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

export async function deleteUser(userId) {
	const res = await fetch(
		`${import.meta.env.VITE_API_URL}/users/${userId}`,
		{
			method: "DELETE",
		},
	);

	if (!res.ok) {
		console.error("Failed to delete user", res.status, res.statusText);
		return false;
	}

	return true;
}