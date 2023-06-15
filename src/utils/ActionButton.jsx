import React from 'react';
import './ActionButton.styles.css';

function ActionButton({ content, type, onMode }) {
	return (
		<button className={`action_button ${type}`} onClick={onMode}>
			<a href="#">{content}</a>
		</button>
	);
}

export default ActionButton;
