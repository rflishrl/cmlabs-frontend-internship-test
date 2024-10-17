import { getMealDetails } from "@/actions";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PiCaretRight, PiHouseFill } from "react-icons/pi";

export default async function page({
	params,
}: {
	params: { category: string; mealId: string };
}) {
	const meal = await getMealDetails(params.mealId);

	const { strMeal, idMeal, strMealThumb, strInstructions } = meal;

	const instruction = strInstructions
		.split(".")
		.slice(0, -1)
		.map((step: string, i: number) => (
			<li key={step} className="flex gap-3 items-center">
				<div className="w-8 h-8 aspect-square rounded-xl bg-orange-400 text-white font-bold flex items-center justify-center">
					{i + 1}
				</div>
				<p>{step}.</p>
			</li>
		));

	return (
		<main className="text-gray-600">
			<div className="w-full flex justify-center px-4">
				<div className="max-w-5xl flex-col gap-6 w-full flex py-24 ">
					<div className="flex gap-2 text-sm ">
						<Link href="/" className="flex gap-2 items-center">
							<PiHouseFill /> Home
						</Link>
						<Link
							href={`/${params.category}`}
							className="flex gap-2 items-center"
						>
							<PiCaretRight /> {params.category}
						</Link>
						<Link
							href={`/${params.category}/${idMeal}`}
							className="flex gap-2 items-center"
						>
							<PiCaretRight /> {strMeal}
						</Link>
					</div>

					<h1 className="text-4xl font-bold border-b pb-6">{strMeal}</h1>

					<div className="flex justify-center">
						<Image
							src={strMealThumb}
							width={500}
							height={500}
							alt={`picture of ${strMeal}`}
							className="sm:w-1/2 rounded-xl aspect-square"
						/>
					</div>

					<div className="">
						<h2 className="text-2xl font-medium border-b pb-4 mb-4">
							How to cook
						</h2>
						<ul className="gap-6 flex flex-col">{instruction}</ul>
					</div>
				</div>
			</div>
		</main>
	);
}
