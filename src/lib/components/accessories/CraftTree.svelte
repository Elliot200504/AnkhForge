<script lang="ts">
	import type { TreeNode } from '$lib/utils/tree';
	import { layoutTree, NODE_H, NODE_W } from '$lib/utils/layout';
	import { accentColor, sourceAccent, sourceSprite } from '$lib/utils/accents';
	import { bestSource } from '$lib/utils/format';
	import { hoverCard } from '$lib/state/hover.svelte';
	import PixelIcon from '$components/ui/PixelIcon.svelte';

	interface Props {
		root: TreeNode;
	}

	let { root }: Props = $props();

	const laid = $derived(layoutTree(root));

	let boxWidth = $state(0);
	/** null = auto, true/false = user picked */
	let userFit = $state<boolean | null>(null);

	const inner = $derived(Math.max(boxWidth - 32, 0));
	const autoScale = $derived(inner ? Math.min(1, inner / laid.width) : 1);
	// under ~60% u cant read the labels so big trees just scroll
	const fit = $derived(userFit ?? autoScale >= 0.6);
	const scale = $derived(fit ? autoScale : 1);
	const overflows = $derived(inner > 0 && laid.width > inner);
</script>

{#snippet face(node: TreeNode, isRoot: boolean)}
	{@const item = node.item}
	{@const source = item ? bestSource(item) : undefined}
	{@const made = node.children.length > 0}

	<span class="flex items-center gap-1.5">
		{#if node.qty && node.qty > 1}
			<span class="label-xs shrink-0 tabular-nums text-gold-300">{node.qty}×</span>
		{/if}
		<PixelIcon name={item?.sprite} size={14} class="shrink-0" />
		<span
			class="truncate text-[11px] font-semibold leading-tight"
			class:text-parchment={Boolean(item)}
			class:text-muted={!item}
			title={node.label}
		>
			{node.label}
		</span>
	</span>

	<span class="flex items-center gap-1 overflow-hidden">
		{#if made}
			<PixelIcon name="anvil" size={10} class="shrink-0" />
			<span class="label-xs truncate text-arcane-300">
				{isRoot ? 'the goal' : 'craft'}
			</span>
		{:else if source}
			<PixelIcon name={sourceSprite[source.kind]} size={10} class="shrink-0" />
			<span
				class="label-xs truncate"
				style:color={accentColor[sourceAccent[source.kind]]}
				title={source.from}
			>
				{source.chance ?? source.cost ?? source.from}
			</span>
		{:else}
			<span class="label-xs truncate text-ghost">raw material</span>
		{/if}
	</span>

	{#if node.cyclic}
		<span class="label-xs text-faint">loops back</span>
	{/if}
{/snippet}

{#if overflows}
	<div class="flex items-center justify-end gap-1.5 border-b border-edge-soft px-4 py-2">
		<span class="label-xs mr-auto text-ghost tabular-nums">
			{Math.round(scale * 100)}%
		</span>
		<button
			type="button"
			onclick={() => (userFit = true)}
			aria-pressed={fit}
			class="pixel-frame label-xs px-2 py-1 transition-colors"
			class:bg-raised={fit}
			class:bg-inset={!fit}
			style:color={fit ? 'var(--color-arcane-200)' : 'var(--color-faint)'}
		>
			Fit
		</button>
		<button
			type="button"
			onclick={() => (userFit = false)}
			aria-pressed={!fit}
			class="pixel-frame label-xs px-2 py-1 transition-colors"
			class:bg-raised={!fit}
			class:bg-inset={fit}
			style:color={!fit ? 'var(--color-arcane-200)' : 'var(--color-faint)'}
		>
			Full size
		</button>
	</div>
{/if}

<div bind:clientWidth={boxWidth} class="p-4 {fit ? 'overflow-hidden' : 'overflow-x-auto'}">
	<div class={overflows ? '' : 'flex justify-center'} style="height:{laid.height * scale}px">
		<div
			class="relative origin-top-left"
			style="width:{laid.width}px; height:{laid.height}px; transform:scale({scale})"
		>
		<!-- lines behind the boxes so the joins look clean -->
		<svg
			class="pointer-events-none absolute inset-0"
			width={laid.width}
			height={laid.height}
			aria-hidden="true"
		>
			{#each laid.edges as edge, i (i)}
				<path d={edge.d} fill="none" stroke="var(--color-edge)" stroke-width="1" />
			{/each}
		</svg>

		{#each laid.nodes as placed (placed.node.label + placed.depth + placed.x)}
			{@const node = placed.node}
			{@const item = node.item}
			{@const isRoot = placed.depth === 0}

			<div
				class="absolute"
				style="left:{placed.x - NODE_W / 2}px; top:{placed.y}px; width:{NODE_W}px; height:{NODE_H}px"
			>
				{#if item && !isRoot}
					<a
						href="#{item.id}"
						use:hoverCard={item?.id}
						class="pixel-frame flex h-full w-full flex-col justify-center gap-0.5 bg-surface px-2 py-1.5 transition-colors hover:bg-raised"
					>
						{@render face(node, false)}
					</a>
				{:else}
					<div
						use:hoverCard={item?.id}
						class="pixel-frame flex h-full w-full flex-col justify-center gap-0.5 px-2 py-1.5"
						class:bg-raised={isRoot}
						class:bg-inset={!isRoot}
						style:border-color={isRoot ? 'var(--af-accent)' : undefined}
					>
						{@render face(node, isRoot)}
					</div>
				{/if}

				{#if node.alternates > 0}
					<span
						class="label-xs absolute -right-1 -top-1 border border-edge bg-deep px-1 text-faint"
						title="{node.alternates} other {node.alternates === 1 ? 'recipe' : 'recipes'}"
					>
						+{node.alternates}
					</span>
				{/if}
				</div>
			{/each}
		</div>
	</div>
</div>

<div class="flex flex-wrap items-center gap-x-4 gap-y-1.5 border-t border-edge-soft px-4 py-2.5">
	<span class="label-xs flex items-center gap-1.5 text-faint">
		<PixelIcon name="anvil" size={11} /> crafted
	</span>
	<span class="label-xs flex items-center gap-1.5 text-faint">
		<PixelIcon name="skull" size={11} /> farm it
	</span>
	<span class="label-xs flex items-center gap-1.5 text-faint">
		<PixelIcon name="chest" size={11} /> chest or crate
	</span>
	<span class="label-xs text-ghost">hover any box for its drop sources</span>
</div>
