import React from 'react';
import './ColorButton.styles.css';

function ColorButton({ content, myStyle }) {
	return (
		<button style={myStyle} className="color_button">
			<a href={`#${content}`}>{content.toUpperCase()}</a>
		</button>
	);
}

export default ColorButton;
