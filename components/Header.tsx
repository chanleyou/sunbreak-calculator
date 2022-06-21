import Link from "next/link";
import React from "react";

export const Header = () => {
	return (
		<div className="w-full bg-white py-1 text-neutral-600 drop-shadow flex items-center justify-center">
			<div className="gap-2 flex cursor-pointer select-none">
				<Link href="/">
					<a>Builder</a>
				</Link>
				<Link href="/attacks" className="p-2 hover:bg-neutral-500">
					<a>Attacks</a>
				</Link>
				<Link href="/export" className="p-2 pr-4 hover:bg-neutral-500">
					<a>Export</a>
				</Link>
			</div>
		</div>
	);
};

export default Header;
