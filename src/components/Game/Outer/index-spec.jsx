import React from 'react';
import Outer from './index.jsx';
import Top from './top';
import Bottom from './bottom';
import styles from './styles.css';

describe('Outer', () => {
	it('should render as an outer element with two children Top and Bottom', () => {
		styles.outer = 'outer';

		const tree = sd.shallowRender(
			<Outer />
		);
		const vdom = tree.getRenderOutput();

		expect(vdom).toEqualJSX(
			<div className={'outer'}>
				<Top />
				<Bottom />
			</div>
		);
	});
});
