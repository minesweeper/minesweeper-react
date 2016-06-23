import React from 'react';
import Digit from '.';
import styles from './styles.css';

describe('Digit', () => {
	it('should render as a Digit element with a class matching the digit', () => {
		styles.lcd = 'lcd';
		styles.n1 = 'n1';

		const tree = sd.shallowRender(<Digit digit="1"/>);

		expect(tree.getRenderOutput()).toEqualJSX(
			<div className={'lcd n1'}>
			</div>
		);
	});
});
