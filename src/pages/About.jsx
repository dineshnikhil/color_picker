import React from 'react';
import './About.styles.css';
import ActionButton from '../utils/ActionButton';
import { Link } from 'react-router-dom';

function About() {
	return (
		<div className="about_div">
			<h1>About the Project Color Pick</h1>
			<h2>
				Are you a front-end developer on a quest for the perfect hues to bring
				your personal projects to life? Look no further than ColorPickr, your
				ultimate color companion! We understand that choosing the right colors
				is the key to crafting stunning designs, and that's why we've created
				the ultimate color picker tool exclusively for you.
			</h2>
			<h2>
				ColorPickr is your gateway to an endless spectrum of inspiration. Say
				goodbye to those tedious hours spent scouring the web for color palettes
				that match your vision. With our intuitive and user-friendly interface,
				you'll effortlessly explore a universe of vibrant shades, exquisite
				gradients, and harmonious combinations. Let your imagination run wild as
				you dive into our vast library of colors that spans the entire rainbow.
			</h2>
			<h2>
				With ColorPickr, the world of color is at your fingertips. Revolutionize
				your front-end development workflow and elevate your projects to new
				heights. Start harnessing the true potential of color today and watch as
				your designs come alive with brilliance and style.
			</h2>
			<p>
				Join the ColorPickr revolution and embark on an adventure of limitless
				creativity. Get ready to paint your digital canvas with the colors of
				your dreams. Your masterpiece awaits!
			</p>
			<div>
				<Link to="/">
					<ActionButton content="Home" type="small" />
				</Link>
				<Link to="/">
					<ActionButton content="Home" type="small" />
				</Link>
			</div>
		</div>
	);
}

export default About;
