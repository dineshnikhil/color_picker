import React from 'react';
import { useState } from 'react';
import './Nav.styles.css';
import ActionButton from '../utils/ActionButton';

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function Nav() {
	const [mode, setmode] = useState(true);
	const [icon, seticon] = useState(faSun);

	const mode_handler = () => {
		if (mode) {
			console.log('its dark');
			document.documentElement.setAttribute('data-theme', 'light');
			seticon(faMoon);
			setmode(!mode);
		} else {
			console.log('its light');
			document.documentElement.setAttribute('data-theme', 'dark');
			seticon(faSun);
			setmode(!mode);
		}
	};

	return (
		<div className="nav_div">
			<div className="nav_child_div">
				<h2>🌈 Color Pick</h2>
			</div>
			<div className="nav_child_div">
				<ActionButton
					content={<FontAwesomeIcon icon={icon} />}
					type="small"
					onMode={mode_handler}
				/>
				<ActionButton content="Login" type="default" />
				<a href="https://github.com/dineshnikhil">
					<ActionButton
						content={<FontAwesomeIcon icon={faGithub} />}
						type="small"
					/>
				</a>
				<Link to="/about">
					<ActionButton
						content={<FontAwesomeIcon icon={faCircleInfo} />}
						type="small"
					/>
				</Link>
			</div>
		</div>
	);
}

export default Nav;
