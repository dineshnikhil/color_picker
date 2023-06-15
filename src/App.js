import './App.css';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Home from './pages/Home';

function App() {
	return (
		<div className="App">
			<Nav />
			<main>
				<Home />
			</main>
			<Footer />
		</div>
	);
}

export default App;
