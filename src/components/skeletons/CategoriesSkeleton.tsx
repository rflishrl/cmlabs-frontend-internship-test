export default function CategoriesSkeleton() {
	const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

	return (
		<div className="flex justify-center p-6">
			<div className="max-w-5xl w-full grid sm:grid-cols-3 md:grid-cols-4 grid-cols-2 gap-4">
				{array.map((number: number) => (
					<div
						key={number}
						className="relative flex items-center rounded-3xl justify-center overflow-hidden h-32 w-full  animate-pulse"
					>
						<div className="absolute w-full h-full flex items-center justify-center bg-gray-300 text-white font-bold"></div>
					</div>
				))}
			</div>
		</div>
	);
}
