import { Suspense, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { Skills } from "./pages/Skills";
import { FirstLoader } from "./components/FirstLoader";
import Experiences from "./pages/Experiences";

function App() {
	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);

	return (
		<>
			<Suspense
				fallback={
					<div className="loader__className">
						<FirstLoader />
					</div>
				}
			>
				<Navbar />
				<Home />
				<About />
				<Skills />
				<Projects />
				<Experiences />
				<Contact />
				<Footer />
			</Suspense>
		</>
	);
}

export default App;
