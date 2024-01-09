import { render, screen } from '@testing-library/react';
import Accordion from './Accordion';

describe('Accordion', () => {
	it('should show the accordion component', () => {
		render(
			<Accordion title='Hello'>
				<p>My Title</p>
			</Accordion>,
		);
		expect(screen.getByText('Hello')).toBeDefined();
	});
});
