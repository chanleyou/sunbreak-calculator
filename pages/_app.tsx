import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";

import { Header } from "../components";
import "../styles/globals.css";
import { useModel } from "../model";

function MyApp({ Component, pageProps }: AppProps) {
	const model = useModel();

	return (
		<>
			<Head>
				<title>MHR Calculator</title>
				<link rel="icon" href="/logo.ico" />
			</Head>
			<Header />
			<main className="p-2 gap-2 flex flex-col md:flex-row md:justify-center">
				<Component {...pageProps} model={model} />
			</main>
			<Script src="https://unpkg.com/ionicons@5.0.0/dist/ionicons.js" />
		</>
	);
}

export default MyApp;
