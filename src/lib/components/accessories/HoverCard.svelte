<script lang="ts">
	import { dismissCard, hoverState, PIN_DELAY } from '$lib/state/hover.svelte';
	import { tierById } from '$data/tiers';
	import { byId, usedIn } from '$data/index';
	import {
		accentColor,
		slotLabel,
		sourceAccent,
		sourceLabel,
		sourceSprite
	} from '$lib/utils/accents';
	import { grindLabel, grindLevel } from '$lib/utils/format';
	import PixelIcon from '$components/ui/PixelIcon.svelte';
	import MobCardBody from './MobCardBody.svelte';
	import { mobByName } from '$lib/utils/mobs';

	const WIDTH = 300;
	const PAD = 12;

	let height = $state(0);
	let viewport = $state({ w: 0, h: 0 });
	let cardEl = $state<HTMLElement | null>(null);

	const pinned = $derived(hoverState.pinned);

	function onKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape' && pinned) dismissCard();
	}

	// click outside close it so u never get stuck
	function onPointerDown(event: MouseEvent) {
		if (!pinned) return;
		if (cardEl && event.target instanceof Node && cardEl.contains(event.target)) return;
		dismissCard();
	}

	const item = $derived(
		hoverState.kind === 'accessory' && hoverState.id ? byId.get(hoverState.id) : undefined
	);
	const mob = $derived(
		hoverState.kind === 'mob' && hoverState.id
			? mobByName.get(hoverState.id.toLowerCase())
			: undefined
	);
	const subject = $derived(item ?? mob);
	const tier = $derived(item ? tierById.get(item.tier) : undefined);
	const accent = $derived(mob ? 'blood' : (tier?.accent ?? 'arcane'));
	const feeds = $derived(item ? (usedIn.get(item.id) ?? []) : []);
	const grind = $derived(item ? grindLevel(item) : 0);

	/** put it right of the thing, flip left if no room */
	const position = $derived.by(() => {
		const rect = hoverState.anchor;
		if (!rect || !viewport.w) return { left: -9999, top: -9999 };

		let left = rect.right + PAD;
		if (left + WIDTH > viewport.w - PAD) left = rect.left - WIDTH - PAD;
		left = Math.max(PAD, Math.min(left, viewport.w - WIDTH - PAD));

		let top = rect.top - 8;
		if (height && top + height > viewport.h - PAD) top = viewport.h - height - PAD;
		top = Math.max(PAD, top);

		return { left, top };
	});
</script>

<svelte:window
	bind:innerWidth={viewport.w}
	bind:innerHeight={viewport.h}
	onkeydown={onKeydown}
	onmousedown={onPointerDown}
/>

{#if subject}
	<!-- not pinned = cant click it, so it never eat its own hover -->
	<div
		role={pinned ? 'dialog' : 'tooltip'}
		aria-label={subject.name}
		bind:this={cardEl}
		bind:clientHeight={height}
		class="pixel-frame texture-weave anim-rise fixed z-60 bg-deep/97 shadow-2xl backdrop-blur-sm"
		class:pointer-events-none={!pinned}
		style="left:{position.left}px; top:{position.top}px; width:{WIDTH}px;
			--af-accent:{accentColor[accent]}"
		style:border-color={pinned
			? `color-mix(in srgb, ${accentColor[accent]} 40%, var(--color-edge))`
			: undefined}
	>
		{#if pinned}
			<button
				type="button"
				onclick={dismissCard}
				aria-label="Close {subject.name}"
				class="absolute -right-1.5 -top-1.5 z-10 flex h-5 w-5 items-center justify-center border border-edge bg-surface text-[11px] leading-none text-faint transition-colors hover:text-parchment"
			>
				×
			</button>
		{:else}
			<!-- fill up while u hover so u see the stick coming -->
			{#key hoverState.kind + ':' + hoverState.id}
				<span
					class="af-dwell absolute inset-x-0 top-0 h-px origin-left"
					style="background:{accentColor[accent]}; animation-duration:{PIN_DELAY - 110}ms"
					aria-hidden="true"
				></span>
			{/key}
		{/if}
		{#if mob}
			<MobCardBody {mob} />
		{:else if item}
		<!-- name and stuff -->
		<div class="flex items-start gap-2.5 border-b border-edge-soft px-3 py-2.5">
			<PixelIcon name={item.sprite} size={26} class="mt-0.5" />
			<div class="min-w-0 flex-1">
				<p class="text-xs font-semibold leading-tight text-parchment">{item.name}</p>
				<p class="label-xs mt-1 flex flex-wrap items-center gap-x-2 text-ghost">
					<span style:color={accentColor[accent]}>{tier?.name}</span>
					{#each item.slots as slot (slot)}
						<span>{slotLabel[slot]}</span>
					{/each}
				</p>
			</div>
			{#if item.expertOnly}
				<span class="label-xs shrink-0 text-blood-400" title="Expert only">EXP</span>
			{/if}
		</div>

		<p class="px-3 py-2.5 text-[11px] leading-relaxed text-muted">{item.effect}</p>

		<!-- the important part, who drop it and how often -->
		<div class="border-t border-edge-soft">
			<p class="label-xs px-3 pt-2.5 text-faint">
				{item.sources.some((s) => s.kind === 'drop' || s.kind === 'boss')
					? 'Dropped by'
					: 'Where from'}
			</p>
			<ul class="space-y-1.5 px-3 pb-2.5 pt-1.5">
				{#each item.sources as source, i (i)}
					<li class="flex items-start gap-2">
						<PixelIcon name={sourceSprite[source.kind]} size={12} class="mt-0.5" />
						<div class="min-w-0 flex-1">
							<p class="text-[11px] leading-snug text-parchment">{source.from}</p>
							<p class="label-xs mt-0.5 flex flex-wrap gap-x-2">
								<span style:color={accentColor[sourceAccent[source.kind]]}>
									{sourceLabel[source.kind]}
								</span>
								{#if source.chance}
									<span class="tabular-nums text-gold-300">{source.chance}</span>
								{/if}
								{#if source.expert}
									<span class="tabular-nums text-blood-300">exp {source.expert}</span>
								{/if}
								{#if source.cost}
									<span class="text-moss-300">{source.cost}</span>
								{/if}
							</p>
						</div>
					</li>
				{/each}
			</ul>
		</div>

		<!-- shimmer + how much farming -->
		<div class="flex items-center justify-between gap-3 border-t border-edge-soft px-3 py-2">
			<span class="label-xs flex items-center gap-1 text-ghost">
				{#each [1, 2, 3, 4, 5] as pip (pip)}
					<span
						class="block h-1.5 w-1"
						style:background={pip <= grind ? 'var(--color-blood-400)' : 'var(--color-edge)'}
					></span>
				{/each}
				{grindLabel[grind]}
			</span>
			{#if item.recipes?.length}
				<span class="label-xs flex items-center gap-1 text-arcane-300">
					<PixelIcon name="anvil" size={11} />
					craftable
				</span>
			{/if}
		</div>

		{#if item.shimmer?.to || item.shimmer?.from}
			<p
				class="label-xs flex items-center gap-1.5 border-t border-edge-soft px-3 py-2 text-gold-300"
			>
				<PixelIcon name="shimmer" size={11} />
				{#if item.shimmer.to}shimmers to {item.shimmer.to}{:else}from {item.shimmer.from}{/if}
			</p>
		{/if}

		{#if feeds.length > 0}
			<p class="label-xs border-t border-edge-soft px-3 py-2 text-moss-300">
				→ {feeds.map((f) => f.name).join(', ')}
			</p>
		{/if}
		{/if}
	</div>
{/if}
