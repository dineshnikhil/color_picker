import './App.css';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';

function App() {
	return (
		<div className="App">
			<Nav />
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
}

export default App;
