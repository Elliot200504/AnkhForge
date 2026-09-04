import type { TreeNode } from './tree';

export const NODE_W = 152;
export const NODE_H = 56;
export const GAP_X = 14;
export const GAP_Y = 46;

export interface PlacedNode {
	node: TreeNode;
	/** middle of the box */
	x: number;
	y: number;
	depth: number;
}

export interface Edge {
	/** the line. down, across, down */
	d: string;
}

export interface LaidOutTree {
	nodes: PlacedNode[];
	edges: Edge[];
	width: number;
	height: number;
}

/**
 * layered tree. leafs go left to right, parent sit in the middle of his childs.
 * plain pixels so the nodes stay normal html and the lines go in one svg behind
 */
export function layoutTree(root: TreeNode): LaidOutTree {
	const nodes: PlacedNode[] = [];
	const edges: Edge[] = [];
	let cursor = 0;
	let maxDepth = 0;

	const rowY = (depth: number) => depth * (NODE_H + GAP_Y);

	function place(node: TreeNode, depth: number): number {
		maxDepth = Math.max(maxDepth, depth);
		const y = rowY(depth);

		if (node.children.length === 0) {
			const x = cursor + NODE_W / 2;
			cursor += NODE_W + GAP_X;
			nodes.push({ node, x, y, depth });
			return x;
		}

		const childCentres = node.children.map((child) => place(child, depth + 1));
		const x = (Math.min(...childCentres) + Math.max(...childCentres)) / 2;
		nodes.push({ node, x, y, depth });

		const fromY = y + NODE_H;
		const midY = fromY + GAP_Y / 2;
		for (const cx of childCentres) {
			const toY = rowY(depth + 1);
			edges.push({
				d:
					cx === x
						? `M ${x} ${fromY} V ${toY}`
						: `M ${x} ${fromY} V ${midY} H ${cx} V ${toY}`
			});
		}

		return x;
	}

	place(root, 0);

	return {
		nodes,
		edges,
		width: Math.max(cursor - GAP_X, NODE_W),
		height: rowY(maxDepth) + NODE_H
	};
}
