export interface NavItem {
	href: string;
	label: string;
	sprite: string;
	/** short label for phone */
	short: string;
}

export const navItems: NavItem[] = [
	{ href: '/', label: 'Accessories', short: 'All', sprite: 'ankh' },
	{ href: '/shimmer', label: 'Shimmer', short: 'Shimmer', sprite: 'shimmer' },
	{ href: '/drops', label: 'Drop Rates', short: 'Drops', sprite: 'skull' }
];

// active check, dont care about the last slash
export function isActive(current: string, href: string): boolean {
	const normalise = (value: string) => (value.length > 1 ? value.replace(/\/$/, '') : value);
	return normalise(current) === normalise(href);
}
