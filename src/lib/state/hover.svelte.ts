export type HoverKind = 'accessory' | 'mob';

interface HoverState {
	kind: HoverKind | null;
	/** accessory id or mob name. the card look up the rest */
	id: string | null;
	/**
	 * where the hovered thing is, plain numbers. a real DOMRect keep its values
	 * on the prototype and the state proxy eat them
	 */
	anchor: { top: number; left: number; right: number; bottom: number } | null;
	/** hovered long enough, card stay now */
	pinned: boolean;
}

/**
 * only primitives in here, never the object. $state proxy everything deep so
 * what u read back is not the same reference and === always fail
 */
export const hoverState: HoverState = $state({
	kind: null,
	id: null,
	anchor: null,
	pinned: false
});

const OPEN_DELAY = 110;
/** hold still this long and it stick */
export const PIN_DELAY = 2000;

export function dismissCard() {
	hoverState.kind = null;
	hoverState.id = null;
	hoverState.anchor = null;
	hoverState.pinned = false;
}

/** what a click do */
type ClickAction = 'dismiss' | 'pin';

function attach(
	node: HTMLElement,
	kind: HoverKind,
	id: string | undefined,
	clickAction: ClickAction
) {
	let current = id;
	let openTimer: ReturnType<typeof setTimeout> | undefined;
	let pinTimer: ReturnType<typeof setTimeout> | undefined;

	function clearTimers() {
		clearTimeout(openTimer);
		clearTimeout(pinTimer);
	}

	/** is this the one showing right now */
	function owns() {
		return current !== undefined && hoverState.kind === kind && hoverState.id === current;
	}

	function show() {
		// pinned card own the screen till u close it
		if (!current || hoverState.pinned) return;
		clearTimers();

		openTimer = setTimeout(() => {
			const box = node.getBoundingClientRect();
			hoverState.kind = kind;
			hoverState.id = current ?? null;
			hoverState.anchor = {
				top: box.top,
				left: box.left,
				right: box.right,
				bottom: box.bottom
			};
			hoverState.pinned = false;
		}, OPEN_DELAY);

		pinTimer = setTimeout(() => {
			if (owns()) hoverState.pinned = true;
		}, PIN_DELAY);
	}

	function hide() {
		clearTimers();
		if (hoverState.pinned) return;
		if (owns()) {
			hoverState.kind = null;
			hoverState.id = null;
			hoverState.anchor = null;
		}
	}

	function openPinned() {
		const box = node.getBoundingClientRect();
		hoverState.kind = kind;
		hoverState.id = current ?? null;
		hoverState.anchor = {
			top: box.top,
			left: box.left,
			right: box.right,
			bottom: box.bottom
		};
		hoverState.pinned = true;
	}

	function onClick() {
		clearTimers();
		if (clickAction === 'dismiss') {
			// the click go somewhere else so move the card out the way
			if (owns()) dismissCard();
			return;
		}
		// nothing to click to so click mean "show me". also the only way on
		// phone, hover dont exist there
		if (owns() && hoverState.pinned) dismissCard();
		else openPinned();
	}

	node.addEventListener('mouseenter', show);
	node.addEventListener('mouseleave', hide);
	node.addEventListener('focus', show);
	node.addEventListener('blur', hide);
	node.addEventListener('click', onClick);

	return {
		update(next: string | undefined) {
			current = next;
		},
		destroy() {
			clearTimers();
			hide();
			node.removeEventListener('mouseenter', show);
			node.removeEventListener('mouseleave', hide);
			node.removeEventListener('focus', show);
			node.removeEventListener('blur', hide);
			node.removeEventListener('click', onClick);
		}
	};
}

/** put on anything that mean a accessory. row, tree node, ingredient link */
export function hoverCard(node: HTMLElement, id: string | undefined) {
	return attach(node, 'accessory', id, 'dismiss');
}

/** put on a mob name in the drop text */
export function hoverMob(node: HTMLElement, name: string | undefined) {
	return attach(node, 'mob', name, 'pin');
}
