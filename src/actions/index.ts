"use server";

export async function getCategories() {
	try {
		const response = await fetch(
			"https://www.themealdb.com/api/json/v1/1/categories.php"
		);
		const data = await response.json();
		return data.categories;
	} catch (error) {
		console.log(error);
	}
}

export async function getCategoryDetails(categoryName: string) {
	try {
		const response = await fetch(
			`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
		);
		const data = await response.json();
		return data.meals;
	} catch (error) {
		console.log(error);
	}
}

export async function getMealDetails(mealId: string) {
	try {
		const response = await fetch(
			`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
		);
		const data = await response.json();
		return data.meals[0];
	} catch (error) {
		console.log(error);
	}
}
