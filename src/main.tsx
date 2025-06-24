import React from "react";
import ReactDOM from "react-dom/client";
import { HeroUIProvider } from "@heroui/react";
import App from "./App.tsx";
import "./index.css";
import MainRoutes from "./MainRoutes.tsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<BrowserRouter>
			<HeroUIProvider>
				<main className="text-foreground bg-background">
					<MainRoutes />
				</main>
			</HeroUIProvider>
		</BrowserRouter>
	</React.StrictMode>
);
