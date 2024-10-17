import CategoriesList from "@/components/CategoriesList";
import CategoriesSkeleton from "@/components/skeletons/CategoriesSkeleton";
import Link from "next/link";
import { Suspense } from "react";

export default async function Home() {
	return (
		<main className="text-gray-600">
			<div className="bg-gray-100 w-full flex justify-center px-4">
				<div className="max-w-5xl w-full flex justify-center flex-col items-center  font-bold py-24 gap-6">
					<h1 className="text-4xl text-center">Welcome</h1>
					<p className="text-xl font-normal">
						Browse your favorite food based on category
					</p>
				</div>
			</div>

			<Suspense fallback={<CategoriesSkeleton />}>
				<CategoriesList />
			</Suspense>
		</main>
	);
}
