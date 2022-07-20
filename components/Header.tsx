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
		<div className="sticky top-0 w-full bg drop-shadow flex z-50">
			<div className="flex-1" />
			<div className="flex flex-1 gap-2 justify-center">
				<Link href="/">
					<a className={router.pathname === "/" ? activeClassName : ""}>Build</a>
				</Link>
				<Link href="/attacks">
					<a className={router.pathname === "/attacks" ? activeClassName : ""}>Moves</a>
				</Link>
				<Link href="/export">
					<a className={router.pathname === "/export" ? activeClassName : ""}>Export</a>
				</Link>
			</div>
			<div className="flex flex-1 place-items-center justify-end">
				<div
					className="cursor-pointer flex-row flex gap-2 p-2 text-slate-500 place-items-center dark:text-midnight-400 active:text-black dark:active:text-white"
					onClick={() => setDarkMode(!darkMode)}
				>
					<p className="text-sm hidden md:block">Theme</p>
					{darkMode ? (
						<svg
							className="w-4 h-4"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
							/>
						</svg>
					) : (
						<svg
							className="w-4 h-4"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
							/>
						</svg>
					)}
				</div>
			</div>
		</div>
	);
};

export default Header;
