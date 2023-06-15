import React from 'react';
import './Demo.styles.css';
import { useState } from 'react';

function ShadeCard({ my_style, shade_hex }) {
	const [copied, setCopied] = useState(false);
	const handleClick = (event) => {
		const textToCopy = event.target.querySelector('.text-to-copy').textContent;
		navigator.clipboard
			.writeText(textToCopy)
			.then(() => {
				console.log('Text copied to clipboard:', textToCopy);
				// You can show a success message or perform other actions here
				setCopied(true);

				setTimeout(() => {
					setCopied(false);
				}, 500);
			})
			.catch((error) => {
				console.error('Error copying text to clipboard:', error);
				// Handle the error condition
			});
	};
	return (
		<div style={my_style} className="shade_div" onClick={handleClick}>
			<h3 className="text-to-copy">{copied ? '✅ Copied' : shade_hex}</h3>
		</div>
	);
}

export default ShadeCard;
