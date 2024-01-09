import { render, screen } from '@testing-library/react';
import Accordion from './Accordion';

describe('Accordion', () => {
	it('renders the title', () => {
		render(
			<Accordion title='Hello'>
				<p>My Title</p>
			</Accordion>,
		);
		expect(screen.getByText('Hello')).toBeDefined();
	});
});
