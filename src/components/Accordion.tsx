import { useState } from 'react';

interface AccordionProps {
	title: string;
	children: React.ReactNode;
}

const Accordion = ({ title, children }: AccordionProps) => {
	const [show, setShow] = useState(false);
	return (
		<div>
			<h3>{title}</h3>
			<button onClick={() => setShow(!show)}>{show ? 'Hide' : 'Show'}</button>
			{show ? <div>{children}</div> : null}
		</div>
	);
};

export default Accordion;
