import { getCategoryDetails } from "@/actions";
import React from "react";
import MealCard from "./MealCard";
import Link from "next/link";
import { PiHouseFill, PiCaretRight } from "react-icons/pi";

type Meal = {
	strMeal: string;
	strMealThumb: string;
	idMeal: string;
};

export default async function MealsList({
	categoryName,
}: {
	categoryName: string;
}) {
	await new Promise((resolve) => setTimeout(resolve, 500));

	const meals = await getCategoryDetails(categoryName);

	return (
		<div className="flex items-center justify-center flex-col p-6">
			<div className="max-w-5xl w-full grid sm:grid-cols-3 md:grid-cols-4 grid-cols-2 gap-4">
				{meals.map((meal: Meal) => (
					<MealCard key={meal.idMeal} meal={meal} />
				))}
			</div>
		</div>
	);
}
