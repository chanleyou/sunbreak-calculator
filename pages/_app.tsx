import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Header } from "../components";
import { useState } from "react";
import { Model } from "../model";
import { Weapons } from "../data";

function MyApp({ Component, pageProps }: AppProps) {
	const [model, setModel] = useState<Model>(Model.new(Weapons[0]));

	return (
		<>
			<Header />
			<main className="p-2 gap-2 flex flex-col md:flex-row md:justify-center">
				<Component {...pageProps} model={model} setModel={setModel} />
			</main>
		</>
	);
}

export default MyApp;
