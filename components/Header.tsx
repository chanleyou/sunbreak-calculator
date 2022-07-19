import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export const Header = () => {
	const [darkMode, setDarkMode] = useState(true);

	useEffect(() => {
		console.log("toggling:", darkMode);
		if (darkMode) document.querySelector("html")?.classList.add("dark");
		else document.querySelector("html")?.classList.remove("dark");
	}, [darkMode]);

	const router = useRouter();

	const activeClassName = "text-black dark:text-white";

	return (
		<div className="sticky top-0 w-full bg text-slate-500 drop-shadow flex items-center z-50 justify-center gap-2">
			<Link href="/">
				<a className={router.pathname === "/" ? activeClassName : ""}>Build</a>
			</Link>
			<Link href="/attacks">
				<a className={router.pathname === "/attacks" ? activeClassName : ""}>Moves</a>
			</Link>
			<Link href="/export">
				<a className={router.pathname === "/export" ? activeClassName : ""}>Export</a>
			</Link>
			<div className="cursor-pointer select-none" onClick={() => setDarkMode(!darkMode)}>
				{darkMode ? "☀️" : "🌙"}
			</div>
		</div>
	);
};

export default Header;
