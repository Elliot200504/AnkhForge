<script lang="ts">
	import type { Slot, Tier } from '$lib/types';
	import { page } from '$app/state';
	import { goto } from '$app/navigation';
	import { accessories, allSlots, byId, searchText } from '$data/index';
	import { tiers } from '$data/tiers';
	import { accentColor, slotLabel, slotSprite } from '$lib/utils/accents';
	import AccessoryDetail from '$components/accessories/AccessoryDetail.svelte';
	import AccessoryRow from '$components/accessories/AccessoryRow.svelte';
	import PixelIcon from '$components/ui/PixelIcon.svelte';

	let query = $state('');
	let slot = $state<'all' | Slot>('all');
	let tier = $state<'all' | Tier>('all');
	let craftedOnly = $state(false);
	let shimmerOnly = $state(false);
	let listEl = $state<HTMLElement | null>(null);
	let searchEl = $state<HTMLInputElement | null>(null);

	const matches = $derived.by(() => {
		const needle = query.trim().toLowerCase();
		return accessories.filter((item) => {
			if (craftedOnly && !item.recipes?.length) return false;
			if (shimmerOnly && !item.shimmer) return false;
			if (slot !== 'all' && !item.slots.includes(slot)) return false;
			if (tier !== 'all' && item.tier !== tier) return false;
			if (!needle) return true;
			return (searchText.get(item.id) ?? '').includes(needle);
		});
	});

	// the hash decide whats open, nothing else
	const selectedId = $derived(decodeURIComponent(page.url.hash.slice(1)));
	const selected = $derived(byId.get(selectedId));

	/** on phone the list and the detail take turns */
	const showingDetail = $derived(Boolean(selected));

	function clearSelection() {
		goto('/', { noScroll: true, keepFocus: true, replaceState: true });
	}

	// keep the open row in view but dont yank the page
	$effect(() => {
		if (!selectedId || !listEl) return;
		const row = listEl.querySelector(`[data-row="${CSS.escape(selectedId)}"]`);
		row?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
	});

	function onKeydown(event: KeyboardEvent) {
		const target = event.target as HTMLElement | null;
		const typing = target?.tagName === 'INPUT' || target?.tagName === 'TEXTAREA';

		if (event.key === '/' && !typing) {
			event.preventDefault();
			searchEl?.focus();
			return;
		}
		if (event.key === 'Escape' && typing) {
			searchEl?.blur();
			return;
		}
		if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') return;
		if (matches.length === 0) return;

		event.preventDefault();
		const current = matches.findIndex((m) => m.id === selectedId);
		const step = event.key === 'ArrowDown' ? 1 : -1;
		const next = current === -1 ? 0 : (current + step + matches.length) % matches.length;
		goto(`#${matches[next].id}`, { noScroll: true, keepFocus: true });
	}

	const slotOptions = $derived(
		allSlots
			.filter((s) => accessories.some((a) => a.slots.includes(s)))
			.map((s) => ({
				id: s,
				label: slotLabel[s],
				sprite: slotSprite[s],
				count: matches.filter((a) => a.slots.includes(s)).length
			}))
	);

	const filtersOn = $derived(
		query.trim() !== '' || slot !== 'all' || tier !== 'all' || craftedOnly || shimmerOnly
	);

	function resetFilters() {
		query = '';
		slot = 'all';
		tier = 'all';
		craftedOnly = false;
		shimmerOnly = false;
	}
</script>

<svelte:head>
	<title>{selected ? `${selected.name} — AnkhForge` : 'Accessories — AnkhForge'}</title>
</svelte:head>

<svelte:window onkeydown={onKeydown} />

<div class="grid gap-4 lg:grid-cols-[19rem_1fr] xl:grid-cols-[21rem_1fr]" data-sveltekit-noscroll>
	<!-- left side, the list -->
	<div class="min-w-0 space-y-3 {showingDetail ? 'hidden lg:block' : ''}">
		<div class="relative">
			<span
				class="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2"
				aria-hidden="true"
			>
				<svg viewBox="0 0 12 12" class="crisp" width="12" height="12">
					<path
						d="M2 1h6v1h1v4H8v1H7v1H6V7H2V6H1V2h1V1zm1 1v1H2v3h1v1h4V6h1V3H7V2H3zm5 6h1v1h1v1h1v1H9v-1H8V9H7V8h1z"
						fill="var(--color-ghost)"
					/>
				</svg>
			</span>
			<input
				bind:this={searchEl}
				type="search"
				bind:value={query}
				placeholder="Search accessories…"
				aria-label="Search accessories"
				class="pixel-frame w-full bg-inset py-2.5 pl-8 pr-3 text-sm text-parchment placeholder:text-ghost focus:border-arcane-400"
			/>
		</div>

		<!-- tier as numbers so it fit one row -->
		<div
			class="scroll-none flex gap-1 overflow-x-auto pb-1"
			role="tablist"
			aria-label="Progression tier"
		>
			<button
				type="button"
				role="tab"
				aria-selected={tier === 'all'}
				onclick={() => (tier = 'all')}
				class="pixel-frame label-xs shrink-0 px-2 py-1.5 transition-colors"
				class:bg-raised={tier === 'all'}
				class:bg-inset={tier !== 'all'}
				style:color={tier === 'all' ? 'var(--color-parchment)' : 'var(--color-faint)'}
			>
				All tiers
			</button>
			{#each tiers as t (t.id)}
				{@const active = tier === t.id}
				<button
					type="button"
					role="tab"
					aria-selected={active}
					onclick={() => (tier = active ? 'all' : t.id)}
					title="{t.name} — {t.tagline}"
					class="pixel-frame label-xs shrink-0 px-2.5 py-1.5 transition-colors"
					class:bg-raised={active}
					class:bg-inset={!active}
					style:border-color={active ? accentColor[t.accent] : undefined}
					style:color={active ? accentColor[t.accent] : 'var(--color-faint)'}
				>
					{t.glyph}
				</button>
			{/each}
		</div>

		<!-- categorys + the 2 toggles -->
		<div class="flex flex-wrap gap-1">
			<button
				type="button"
				onclick={() => (slot = 'all')}
				class="pixel-frame label-xs px-2 py-1 transition-colors"
				class:bg-raised={slot === 'all'}
				class:bg-inset={slot !== 'all'}
				style:color={slot === 'all' ? 'var(--color-parchment)' : 'var(--color-faint)'}
			>
				All
			</button>
			{#each slotOptions as option (option.id)}
				{@const active = slot === option.id}
				<button
					type="button"
					onclick={() => (slot = active ? 'all' : option.id)}
					class="pixel-frame label-xs flex items-center gap-1 px-2 py-1 transition-colors"
					class:bg-raised={active}
					class:bg-inset={!active}
					style:border-color={active ? 'var(--color-arcane-500)' : undefined}
					style:color={active ? 'var(--color-arcane-200)' : 'var(--color-faint)'}
				>
					<PixelIcon name={option.sprite} size={11} muted={!active} />
					{option.label}
				</button>
			{/each}

			<button
				type="button"
				role="switch"
				aria-checked={craftedOnly}
				onclick={() => (craftedOnly = !craftedOnly)}
				class="pixel-frame label-xs flex items-center gap-1 px-2 py-1 transition-colors"
				class:bg-raised={craftedOnly}
				class:bg-inset={!craftedOnly}
				style:border-color={craftedOnly ? 'var(--color-arcane-500)' : undefined}
				style:color={craftedOnly ? 'var(--color-arcane-200)' : 'var(--color-faint)'}
			>
				<PixelIcon name="anvil" size={11} muted={!craftedOnly} />
				Craftable
			</button>
			<button
				type="button"
				role="switch"
				aria-checked={shimmerOnly}
				onclick={() => (shimmerOnly = !shimmerOnly)}
				class="pixel-frame label-xs flex items-center gap-1 px-2 py-1 transition-colors"
				class:bg-raised={shimmerOnly}
				class:bg-inset={!shimmerOnly}
				style:border-color={shimmerOnly ? 'var(--color-gold-500)' : undefined}
				style:color={shimmerOnly ? 'var(--color-gold-300)' : 'var(--color-faint)'}
			>
				<PixelIcon name="shimmer" size={11} muted={!shimmerOnly} />
				Shimmer
			</button>
		</div>

		<div class="pixel-frame bg-surface/80">
			<header class="flex items-center justify-between gap-2 border-b border-edge-soft px-3 py-2">
				<span class="label-xs text-faint tabular-nums">
					{matches.length} of {accessories.length}
				</span>
				{#if filtersOn}
					<button
						type="button"
						onclick={resetFilters}
						class="label-xs text-arcane-300 hover:text-arcane-200"
					>
						clear
					</button>
				{/if}
			</header>

			{#if matches.length > 0}
				<div bind:this={listEl} class="max-h-[70dvh] overflow-y-auto lg:max-h-[calc(100dvh-18rem)]">
					<ul class="divide-y divide-edge-soft/60">
						{#each matches as item (item.id)}
							<li><AccessoryRow {item} selected={item.id === selectedId} /></li>
						{/each}
					</ul>
				</div>
			{:else}
				<p class="px-3 py-6 text-center text-xs text-muted">Nothing matches that.</p>
			{/if}
		</div>

		<p class="label-xs hidden text-ghost lg:block">
			<kbd class="text-faint">/</kbd> to search · <kbd class="text-faint">↑ ↓</kbd> to move
		</p>
	</div>

	<!-- right side, the detail -->
	<div class="min-w-0 {showingDetail ? '' : 'hidden lg:block'}">
		{#if selected}
			<button
				type="button"
				onclick={clearSelection}
				class="pixel-frame label-xs mb-3 flex items-center gap-2 bg-inset px-2.5 py-2 text-faint lg:hidden"
			>
				← Back to the list
			</button>

			<AccessoryDetail item={selected} />
		{:else}
			<!-- nothing open, show something instead of a empty box -->
			<div
				class="pixel-frame texture-weave flex min-h-[24rem] flex-col items-center justify-center gap-5 bg-surface/60 p-8 text-center"
			>
				<PixelIcon name="ankh" size={48} />
				<div>
					<h2 class="font-pixel text-[13px] text-parchment">Pick an accessory</h2>
					<p class="mx-auto mt-3 max-w-sm text-xs leading-relaxed text-muted">
						Search on the left, or filter by category and tier. Open one and you get its full
						crafting tree, every source with its exact drop rate, the list of everything you have to
						gather, what Shimmer turns it into, and what it upgrades into.
					</p>
				</div>
				<div class="flex flex-wrap justify-center gap-1.5">
					{#each ['terraspark-boots', 'ankh-shield', 'celestial-shell', 'papyrus-scarab', 'cell-phone'] as id (id)}
						{@const example = byId.get(id)}
						{#if example}
							<a
								href="#{example.id}"
								class="pixel-frame label-xs flex items-center gap-1.5 bg-inset px-2 py-1.5 text-muted transition-colors hover:text-parchment"
							>
								<PixelIcon name={example.sprite} size={12} />
								{example.name}
							</a>
						{/if}
					{/each}
				</div>
			</div>
		{/if}
	</div>
</div>
