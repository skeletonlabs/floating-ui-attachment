import { computePosition, flip, offset } from '@floating-ui/dom';

interface PopoverOptions {
	/** Set the target [data-floating] value. */
	target: string;
	/** @default false Set the open state of the popover. */
	open?: boolean;
}

export function setPopover(options: PopoverOptions) {
	return (elemTrigger: HTMLButtonElement) => {
		// State
		let isOpen: boolean = options.open || false;
		const elemPopover: HTMLDivElement | null = document.querySelector(
			`[data-floating="${options.target}"]`
		);

		// Update Floating Element
		const update = () => {
			if (!elemTrigger || !elemPopover) return;

			// Run Floating UI Compute Position
			computePosition(elemTrigger, elemPopover, {
				placement: 'bottom-start',
				middleware: [flip(), offset(8)]
			}).then(({ x, y }) => {
				// Style Popover
				Object.assign(elemPopover.style, {
					left: `${x}px`,
					top: `${y}px`,
					display: isOpen ? 'block' : 'none'
				});
			});
		};

		$effect(() => {
			// Update once on init
			update();

			// Change state on button click
			elemTrigger.addEventListener('click', () => {
				isOpen = !isOpen;
				update();
			});
		});
	};
}
