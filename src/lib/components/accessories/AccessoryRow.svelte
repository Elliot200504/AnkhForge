<script lang="ts">
	import type { Accessory } from '$lib/types';
	import { tierById } from '$data/tiers';
	import { accentColor } from '$lib/utils/accents';
	import { bestSource, sourceSummary } from '$lib/utils/format';
	import { hoverCard } from '$lib/state/hover.svelte';
	import PixelIcon from '$components/ui/PixelIcon.svelte';

	interface Props {
		item: Accessory;
		selected: boolean;
	}

	let { item, selected }: Props = $props();

	const tier = $derived(tierById.get(item.tier));
	const accent = $derived(tier?.accent ?? 'arcane');
	const source = $derived(bestSource(item));
</script>

<a
	href="#{item.id}"
	aria-current={selected ? 'true' : undefined}
	data-row={item.id}
	use:hoverCard={item.id}
	class="flex items-center gap-2.5 border-l-[3px] px-3 py-2 transition-colors"
	class:bg-raised={selected}
	class:hover:bg-raised={!selected}
	style:border-left-color={selected ? accentColor[accent] : 'transparent'}
>
	<PixelIcon name={item.sprite} size={18} muted={!selected} />

	<span class="min-w-0 flex-1">
		<span class="flex items-baseline gap-1.5">
			<span
				class="truncate text-xs font-semibold"
				class:text-parchment={selected}
				class:text-muted={!selected}
			>
				{item.name}
			</span>
			{#if item.expertOnly}
				<span class="label-xs shrink-0 text-blood-400" title="Expert only">E</span>
			{/if}
		</span>
		{#if source}
			<span class="label-xs mt-0.5 block truncate text-ghost">{sourceSummary(source)}</span>
		{/if}
	</span>

	{#if item.recipes?.length}
		<PixelIcon name="anvil" size={12} class="shrink-0" title="Craftable" />
	{/if}
	{#if item.shimmer}
		<PixelIcon name="shimmer" size={12} class="shrink-0" title="Has a shimmer swap" />
	{/if}
</a>
