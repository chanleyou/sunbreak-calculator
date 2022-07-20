import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import IonIcon from "@reacticons/ionicons";

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
					{darkMode ? <IonIcon name="moon" /> : <IonIcon name="sunny" />}
				</div>
			</div>
		</div>
	);
};

export default Header;
