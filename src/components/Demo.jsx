import React from 'react';
import './Demo.styles.css';
import ShadesBox from './ShadesBox';

function Demo() {
	const diff_shades = [
		{
			name: 'red',
			shades: [
				'e01e37',
				'da1e37',
				'c71f37',
				'bd1f36',
				'b21e35',
				'a71e34',
				'a11d33',
				'85182a',
				'6e1423',
				'641220',
				'bf0603',
				'8d0801',
			],
		},
		{
			name: 'orange',
			shades: [
				'ff4800',
				'ff5400',
				'ff6000',
				'ff6d00',
				'ff7900',
				'ff8500',
				'ff9100',
				'ff9e00',
				'ffaa00',
				'ffb600',
				'ff8811',
				'fc2f00',
			],
		},
		{
			name: 'yellow',
			shades: [
				'ffea00',
				'ffdd00',
				'ffd000',
				'ffc300',
				'ffb700',
				'ffaa00',
				'ffa200',
				'ff9500',
				'ff8800',
				'ff7b00',
				'ffbd00',
				'fdc500',
			],
		},
		{
			name: 'green',
			shades: [
				'004b23',
				'006400',
				'007200',
				'008000',
				'38b000',
				'70e000',
				'9ef01a',
				'ccff33',
				'081c15',
				'1b4332',
				'1b4332',
				'40916c',
			],
		},
		{
			name: 'blue',
			shades: [
				'03045e',
				'023e8a',
				'0077b6',
				'0096c7',
				'00b4d8',
				'48cae4',
				'90e0ef',
				'ade8f4',
				'ade8f4',
				'4361ee',
				'4895ef',
				'21004b',
			],
		},
		{
			name: 'indigo',
			shades: [
				'21004b',
				'4b0082',
				'7e21d4',
				'7630ff',
				'9683ec',
				'9d4edd',
				'3c096c',
				'5a189a',
				'7b2cbf',
				'9f86c0',
				'240046',
				'610f7f',
			],
		},
		{
			name: 'violet',
			shades: [
				'10002b',
				'240046',
				'3c096c',
				'5a189a',
				'7b2cbf',
				'9d4edd',
				'c77dff',
				'e0aaff',
				'6247aa',
				'7251b5',
				'815ac0',
				'9163cb',
			],
		},
	];

	return (
		<>
			{diff_shades.map((shade) => {
				return <ShadesBox shade={shade} />;
			})}
		</>
	);
}

export default Demo;
