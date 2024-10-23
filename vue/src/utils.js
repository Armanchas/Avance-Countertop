/**
 * @param {import("@/api/client").Ingredient} ingredient
 * @returns {string}
 */
export function formatIngredientToString(ingredient) {
	if (!ingredient.measurement) {
		return `${ingredient.amount} ${ingredient.name}${ingredient.amount > 1 ? "s" : ""}`;
	}

	return `${ingredient.amount} ${ingredient.measurement}${ingredient.amount > 1 ? "s" : ""} of ${ingredient.name}`;
}

/**
 * @param {Function} func
 * @param {number} wait
 * @returns {Function}
 */
export function debounce(func, wait) {
	let timer;
	return function (...args) {
		if (timer) {
			clearTimeout(timer);
		}
		const context = this;
		timer = setTimeout(() => {
			func.apply(context, args);
		}, wait);
	};
}
