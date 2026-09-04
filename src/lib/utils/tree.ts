import type { Accessory } from '$lib/types';
import { byName } from '$data/index';

export interface TreeNode {
	/** set if this ingredient is a accessory we know */
	item?: Accessory;
	label: string;
	qty?: number;
	/** station that make this out of the childs */
	station?: string;
	children: TreeNode[];
	/** the other recipes we didnt follow */
	alternates: number;
	/** seen it already above. stop or it loop forever */
	cyclic?: boolean;
}

/**
 * open the whole craft tree, first recipe every time. some accessory craft into
 * each other (band of starpower / panic necklace) so we keep a seen set
 */
export function buildTree(item: Accessory, seen: Set<string> = new Set()): TreeNode {
	const recipe = item.recipes?.[0];
	const node: TreeNode = {
		item,
		label: item.name,
		station: recipe?.at,
		children: [],
		alternates: Math.max((item.recipes?.length ?? 0) - 1, 0)
	};

	// leaf. nothing make it, or we did it already above
	if (!recipe || seen.has(item.id)) {
		if (recipe) node.cyclic = true;
		node.station = undefined;
		return node;
	}

	const nextSeen = new Set(seen).add(item.id);

	node.children = recipe.needs.map((need) => {
		const child = byName.get(need.item.toLowerCase());
		if (child) {
			const sub = buildTree(child, nextSeen);
			sub.qty = need.qty;
			return sub;
		}
		return { label: need.item, qty: need.qty, children: [], alternates: 0 };
	});

	return node;
}

export interface Leaf {
	label: string;
	qty: number;
	item?: Accessory;
	/** raw material, not a accessory */
	raw: boolean;
}

/** all the tips of the tree, same ones added up. this is what u go farm */
export function collectLeaves(node: TreeNode): Leaf[] {
	const totals = new Map<string, Leaf>();

	function walk(current: TreeNode, multiplier: number) {
		const qty = (current.qty ?? 1) * multiplier;

		if (current.children.length === 0) {
			const existing = totals.get(current.label);
			if (existing) existing.qty += qty;
			else
				totals.set(current.label, {
					label: current.label,
					qty,
					item: current.item,
					raw: !current.item
				});
			return;
		}

		for (const child of current.children) walk(child, qty);
	}

	for (const child of node.children) walk(child, 1);
	return [...totals.values()].sort(
		(a, b) => Number(a.raw) - Number(b.raw) || a.label.localeCompare(b.label)
	);
}

/** how deep the tree go */
export function treeDepth(node: TreeNode): number {
	if (node.children.length === 0) return 0;
	return 1 + Math.max(...node.children.map(treeDepth));
}

/** every thing u craft on the way, in order */
export function craftSteps(node: TreeNode): TreeNode[] {
	const steps: TreeNode[] = [];
	function walk(current: TreeNode) {
		for (const child of current.children) walk(child);
		if (current.children.length > 0) steps.push(current);
	}
	walk(node);
	return steps;
}
