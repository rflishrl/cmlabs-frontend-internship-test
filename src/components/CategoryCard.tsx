import Image from "next/image";
import Link from "next/link";

type Category = {
	idCategory: string;
	strCategory: string;
	strCategoryThumb: string;
	strCategoryDescription: string;
};

type CategoryCardProps = {
	category: Category;
};

export default function CategoryCard({ category }: CategoryCardProps) {
	const { strCategory, strCategoryThumb } = category;

	return (
		<Link
			href={`/${strCategory}`}
			className="relative flex items-center rounded-3xl justify-center overflow-hidden h-32 w-full group"
		>
			<Image
				src={strCategoryThumb}
				width={150}
				height={150}
				alt={`thumbnail picture of ${strCategory} category`}
				className="group-hover:scale-110 duration-200"
				style={{ width: "auto", height: "auto" }}
			/>
			<div className="absolute text-center w-full h-full flex items-center justify-center duration-200 group-hover:bg-opacity-45 bg-opacity-30 bg-black text-white font-bold">
				<h1>{strCategory}</h1>
			</div>
		</Link>
	);
}
