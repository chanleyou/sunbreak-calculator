import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export const Header = () => {
	const router = useRouter();

	const className = "text-black";

	return (
		<div className="sticky top-0 w-full bg-white text-slate-400 drop-shadow flex items-center justify-center gap-2">
			<Link href="/">
				<a className={router.pathname === "/" ? className : ""}>Builder</a>
			</Link>
			<Link href="/attacks">
				<a className={router.pathname === "/attacks" ? className : ""}>Attacks</a>
			</Link>
			<Link href="/export">
				<a className={router.pathname === "/export" ? className : ""}>Export</a>
			</Link>
		</div>
	);
};

export default Header;
