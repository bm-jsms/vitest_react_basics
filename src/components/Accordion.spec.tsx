import { render, screen, fireEvent } from '@testing-library/react';
import Accordion from './Accordion';

describe('Accordion', () => {
	beforeEach(() => {
		render(
			<Accordion title='Hello'>
				<p>My Title</p>
			</Accordion>,
		);
	});

	it('should show title allways', () => {
		expect(screen.getByText('Hello')).toBeDefined();
	});
	it('should not show the content al the start', () => {
		expect(screen.queryByText(/Title/i)).toBeNull();
	});
	it('should show the content when the button is clicked', () => {
		const button = screen.getByText(/Show/i);
		fireEvent.click(button);
		expect(screen.queryByText(/Title/i)).toBeDefined();
	});
});
