import React from 'react';
import './Demo.styles.css';
import ShadeCard from './ShadeCard';

function ShadesBox({ shade }) {
	return (
		<div className="shades_div" id={shade.name}>
			<h2>Felling {shade.name.toUpperCase()}</h2>
			{shade.shades.map((shade) => {
				const shade_hex = '#' + shade;
				const my_style = {
					backgroundColor: shade_hex,
				};
				return <ShadeCard my_style={my_style} shade_hex={shade_hex} />;
			})}
		</div>
	);
}

export default ShadesBox;
