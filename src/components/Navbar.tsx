import Link from "next/link";
import React from "react";

export default function Navbar() {
	return (
		<nav className="flex bg-orange-400 text-white justify-center items-center p-6">
			<Link href="/" className="font-semibold text-xl">
				mealapp
			</Link>
		</nav>
	);
}
