<script lang="ts">
	import type { Accessory } from '$lib/types';
	import { usedIn, byName } from '$data/index';
	import { tierById } from '$data/tiers';
	import { accentColor, accentStyle, slotLabel, sourceAccent, sourceLabel, sourceSprite } from '$lib/utils/accents';
	import { bestSource, grindLabel, grindLevel } from '$lib/utils/format';
	import { buildTree, collectLeaves, craftSteps, treeDepth } from '$lib/utils/tree';
	import { hoverCard } from '$lib/state/hover.svelte';
	import { namesCreatures } from '$lib/utils/mobs';
	import SourceText from './SourceText.svelte';
	import PixelIcon from '$components/ui/PixelIcon.svelte';
	import Badge from '$components/ui/Badge.svelte';
	import CraftTree from './CraftTree.svelte';

	interface Props {
		item: Accessory;
	}

	let { item }: Props = $props();

	const tier = $derived(tierById.get(item.tier));
	const accent = $derived(tier?.accent ?? 'arcane');
	const feeds = $derived(usedIn.get(item.id) ?? []);

	const tree = $derived(buildTree(item));
	const depth = $derived(treeDepth(tree));
	const leaves = $derived(collectLeaves(tree));
	const steps = $derived(craftSteps(tree));
	const grind = $derived(grindLevel(item));

	function idFor(name: string): string | undefined {
		return byName.get(name.toLowerCase())?.id;
	}
</script>

<article class="space-y-4" style={accentStyle(accent)}>
	<!-- name and stuff -->
	<header class="pixel-frame texture-weave bg-surface/80 p-4 sm:p-5">
		<div class="flex items-start gap-4">
			<div class="pixel-frame shrink-0 bg-inset p-2">
				<PixelIcon name={item.sprite} size={44} />
			</div>

			<div class="min-w-0 flex-1">
				<div class="flex flex-wrap items-baseline gap-x-2 gap-y-1">
					<h2 class="font-pixel text-[15px] leading-relaxed text-parchment">{item.name}</h2>
					{#if item.expertOnly}
						<Badge accent="blood" title="Expert and Master worlds only">Expert</Badge>
					{/if}
					{#if item.desktopOnly}
						<Badge accent="abyss" title="Desktop, Console and Mobile only">1.4.5</Badge>
					{/if}
				</div>

				<div class="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1.5">
					{#if tier}
						<span class="label-xs flex items-center gap-1.5" style:color={accentColor[accent]}>
							<span class="block h-2.5 w-2.5" style:background={accentColor[accent]}></span>
							{tier.name}
						</span>
					{/if}
					{#each item.slots as slot (slot)}
						<span class="label-xs text-faint">{slotLabel[slot]}</span>
					{/each}
					<span class="label-xs flex items-center gap-1 text-ghost" title="How much farming">
						{#each [1, 2, 3, 4, 5] as pip (pip)}
							<span
								class="block h-2 w-1.5"
								style:background={pip <= grind ? 'var(--color-blood-400)' : 'var(--color-edge)'}
							></span>
						{/each}
						{grindLabel[grind]}
					</span>
				</div>

				<p class="mt-3 text-sm leading-relaxed text-parchment">{item.effect}</p>
			</div>
		</div>

		{#if item.note}
			<p class="mt-3 border-t border-edge-soft pt-3 text-xs leading-relaxed text-faint">
				{item.note}
			</p>
		{/if}
	</header>

	<!-- the tree -->
	{#if item.recipes?.length}
		<section class="pixel-frame bg-surface/80">
			<header class="flex items-center justify-between gap-3 border-b border-edge-soft px-4 py-2.5">
				<h3 class="label-sm text-parchment">Crafting tree</h3>
				<span class="label-xs text-ghost tabular-nums">
					{depth} {depth === 1 ? 'step' : 'steps'} deep
				</span>
			</header>

			<CraftTree root={tree} />

			{#if item.recipes.length > 1}
				<div class="border-t border-edge-soft px-4 py-3">
					<p class="label-xs text-faint">
						{item.recipes.length} ways to make it
					</p>
					<ul class="mt-2 space-y-1.5">
						{#each item.recipes as recipe, i (i)}
							<li class="text-xs leading-relaxed">
								<span class="label-xs mr-1 text-ghost tabular-nums">{i + 1}</span>
								{#each recipe.needs as need, n (n)}
									{#if n > 0}<span class="text-ghost"> + </span>{/if}
									{#if need.qty}<span class="tabular-nums text-faint">{need.qty}× </span>{/if}
									{#if idFor(need.item)}
										<a
											href="#{idFor(need.item)}"
											use:hoverCard={idFor(need.item)}
											class="text-arcane-200 underline decoration-arcane-700 decoration-dotted underline-offset-2 hover:text-arcane-50"
										>{need.item}</a>
									{:else}
										<span class="text-parchment">{need.item}</span>
									{/if}
								{/each}
								{#if recipe.note}
									<span class="text-faint"> — {recipe.note}</span>
								{/if}
							</li>
						{/each}
					</ul>
				</div>
			{/if}
		</section>

	{/if}

	<!-- where u get it -->
	<section class="pixel-frame bg-surface/80">
		<header class="border-b border-edge-soft px-4 py-2.5">
			<h3 class="label-sm text-parchment">Where to get it</h3>
		</header>
		<ul class="divide-y divide-edge-soft">
			{#each item.sources as source, i (i)}
				<li class="flex items-start gap-3 px-4 py-3">
					<PixelIcon name={sourceSprite[source.kind]} size={18} class="mt-0.5" />
					<div class="min-w-0 flex-1">
						<p
							class="label-xs"
							style:color={accentColor[sourceAccent[source.kind]]}
						>
							{sourceLabel[source.kind]}
						</p>
						<p class="mt-0.5 text-sm text-parchment">
							<SourceText text={source.from} linkMobs={namesCreatures(source)} />
						</p>
						{#if source.note}
							<p class="mt-1 text-xs leading-snug text-faint">{source.note}</p>
						{/if}
					</div>

					<div class="shrink-0 text-right">
						{#if source.chance}
							<p class="font-pixel text-[13px] tabular-nums text-gold-300">{source.chance}</p>
							<p class="label-xs text-ghost">classic</p>
						{:else if source.cost}
							<p class="font-pixel text-[13px] text-moss-300">{source.cost}</p>
						{/if}
						{#if source.expert}
							<p class="label-xs mt-1 tabular-nums text-blood-300">{source.expert} expert</p>
						{/if}
					</div>
				</li>
			{/each}
		</ul>
	</section>

	{#if item.recipes?.length}
		<!-- flat list, this is what u actually want -->
		{#if leaves.length > 0}
			<section class="pixel-frame bg-surface/80">
				<header class="flex items-center justify-between gap-3 border-b border-edge-soft px-4 py-2.5">
					<h3 class="label-sm text-parchment">Everything you have to gather</h3>
					<span class="label-xs text-ghost tabular-nums">{leaves.length}</span>
				</header>
				<ul class="divide-y divide-edge-soft">
					{#each leaves as leaf (leaf.label)}
						{@const source = leaf.item ? bestSource(leaf.item) : undefined}
						<li class="flex items-center gap-3 px-4 py-2.5">
							{#if leaf.qty > 1}
								<span class="label-xs w-8 shrink-0 tabular-nums text-gold-300">{leaf.qty}×</span>
							{:else}
								<span class="w-8 shrink-0"></span>
							{/if}

							<div class="min-w-0 flex-1">
								{#if leaf.item}
									<a
										href="#{leaf.item.id}"
										use:hoverCard={leaf.item.id}
										class="flex items-center gap-2 text-xs font-semibold text-parchment hover:text-arcane-200"
									>
										<PixelIcon name={leaf.item.sprite} size={14} />
										{leaf.label}
									</a>
								{:else}
									<span class="text-xs text-muted">{leaf.label}</span>
								{/if}
							</div>

							<div class="shrink-0 text-right">
								{#if source}
									<p class="text-xs text-muted">
										<SourceText text={source.from} linkMobs={namesCreatures(source)} />
									</p>
									{#if source.chance}
										<p class="label-xs tabular-nums text-gold-300">{source.chance}</p>
									{:else if source.cost}
										<p class="label-xs text-moss-300">{source.cost}</p>
									{/if}
								{:else}
									<p class="label-xs text-ghost">raw material</p>
								{/if}
							</div>
						</li>
					{/each}
				</ul>
			</section>
		{/if}

		{#if steps.length > 1}
			<section class="pixel-frame bg-surface/80">
				<header class="border-b border-edge-soft px-4 py-2.5">
					<h3 class="label-sm text-parchment">Craft in this order</h3>
				</header>
				<ol class="divide-y divide-edge-soft">
					{#each steps as step, i (i)}
						<li class="flex items-baseline gap-3 px-4 py-2.5">
							<span class="label-xs w-5 shrink-0 tabular-nums text-ghost">{i + 1}</span>
							<div class="min-w-0 flex-1">
								<p class="text-xs font-semibold text-parchment">{step.label}</p>
								<p class="label-xs mt-0.5 text-faint">
									{step.children.map((c) => c.label).join(' + ')}
								</p>
							</div>
							{#if step.station}
								<span class="label-xs shrink-0 text-arcane-300">{step.station}</span>
							{/if}
						</li>
					{/each}
				</ol>
			</section>
		{/if}
	{/if}

	<!-- shimmer + upgrades next to each other if theres room -->
	<div class="grid gap-4 {item.shimmer && feeds.length ? 'sm:grid-cols-2' : ''}">
		{#if item.shimmer}
			<section class="pixel-frame bg-surface/80">
				<header class="flex items-center gap-2 border-b border-edge-soft px-4 py-2.5">
					<PixelIcon name="shimmer" size={16} />
					<h3 class="label-sm text-parchment">Shimmer</h3>
				</header>
				<div class="space-y-2 p-4 text-xs leading-relaxed">
					{#if item.shimmer.to}
						<p>
							<span class="label-xs text-arcane-300">throw in, get</span>
							{#if idFor(item.shimmer.to)}
								<a href="#{idFor(item.shimmer.to)}" use:hoverCard={idFor(item.shimmer.to)} class="ml-1 text-parchment underline decoration-edge decoration-dotted underline-offset-2 hover:text-arcane-200">{item.shimmer.to}</a>
							{:else}
								<span class="ml-1 text-parchment">{item.shimmer.to}</span>
							{/if}
						</p>
					{/if}
					{#if item.shimmer.from}
						<p>
							<span class="label-xs text-gold-300">get one by shimmering</span>
							{#if idFor(item.shimmer.from)}
								<a href="#{idFor(item.shimmer.from)}" use:hoverCard={idFor(item.shimmer.from)} class="ml-1 text-parchment underline decoration-edge decoration-dotted underline-offset-2 hover:text-gold-300">{item.shimmer.from}</a>
							{:else}
								<span class="ml-1 text-parchment">{item.shimmer.from}</span>
							{/if}
						</p>
					{/if}
					{#if item.shimmer.decraft}
						<p class="text-muted">Decrafts back into its ingredients.</p>
					{/if}
					{#if item.shimmer.note}
						<p class="text-faint">{item.shimmer.note}</p>
					{/if}
				</div>
			</section>
		{/if}

		{#if feeds.length > 0}
			<section class="pixel-frame bg-surface/80">
				<header class="border-b border-edge-soft px-4 py-2.5">
					<h3 class="label-sm text-parchment">Upgrades into</h3>
				</header>
				<ul class="divide-y divide-edge-soft">
					{#each feeds as target (target.id)}
						<li>
							<a
								href="#{target.id}"
								use:hoverCard={target.id}
								class="flex items-center gap-2 px-4 py-2.5 transition-colors hover:bg-raised"
							>
								<PixelIcon name={target.sprite} size={16} />
								<span class="min-w-0 flex-1 truncate text-xs font-semibold text-moss-300">
									{target.name}
								</span>
								<span class="label-xs shrink-0 text-ghost">
									{tierById.get(target.tier)?.name}
								</span>
							</a>
						</li>
					{/each}
				</ul>
			</section>
		{/if}
	</div>
</article>
