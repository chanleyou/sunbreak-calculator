import type { AppProps } from "next/app";
import Head from "next/head";
import { Header } from "../components";
import { useState } from "react";
import { Model, Weapons } from "../data";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
	const [model, setModel] = useState<Model>(Model.new(Weapons[0]));

	return (
		<>
			<Head>
				<title>MHR Calculator</title>
				<link rel="icon" href="/logo.ico" />
			</Head>
			<Header />
			<main className="p-2 gap-2 flex flex-col md:flex-row md:justify-center">
				<Component {...pageProps} model={model} setModel={setModel} />
			</main>
		</>
	);
}

export default MyApp;
