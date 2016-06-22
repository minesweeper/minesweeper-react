import React from 'react';
import Title from './index.jsx';
import styles from './styles.css';

describe('Title', () => {
	it('should render as a title element with two children left and right', () => {
		styles.title = 'title';
		styles.left = 'left';
		styles.right = 'right';

		const tree = sd.shallowRender(
			<Title />
		);
		const vdom = tree.getRenderOutput();

		expect(vdom).toEqualJSX(
			<div className={'title'}>
				<span className={'left'} />
				<span className={'right'} />
			</div>
		);
	});
});
