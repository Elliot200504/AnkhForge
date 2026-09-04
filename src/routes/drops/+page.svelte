<script lang="ts">
	import type { SourceKind } from '$lib/types';
	import { chanceValue, dropRows } from '$data/index';
	import { accentColor, sourceAccent, sourceLabel, sourceSprite } from '$lib/utils/accents';
	import Panel from '$components/ui/Panel.svelte';
	import PixelIcon from '$components/ui/PixelIcon.svelte';
	import { hoverCard } from '$lib/state/hover.svelte';
	import { namesCreatures } from '$lib/utils/mobs';
	import SourceText from '$components/accessories/SourceText.svelte';

	type Sort = 'rarest' | 'commonest' | 'name';

	let query = $state('');
	let kind = $state<'all' | SourceKind>('all');
	let sort = $state<Sort>('rarest');

	const kinds: SourceKind[] = ['drop', 'boss', 'bag', 'chest', 'crate', 'quest', 'buy', 'gather'];

	const present = $derived(kinds.filter((k) => dropRows.some((r) => r.source.kind === k)));

	const rows = $derived.by(() => {
		const needle = query.trim().toLowerCase();
		const list = dropRows.filter((row) => {
			if (kind !== 'all' && row.source.kind !== kind) return false;
			if (!needle) return true;
			return (
				row.accessory.name.toLowerCase().includes(needle) ||
				row.source.from.toLowerCase().includes(needle)
			);
		});

		return [...list].sort((a, b) => {
			if (sort === 'name') return a.accessory.name.localeCompare(b.accessory.name);
			const av = chanceValue(a.source.chance) ?? 0;
			const bv = chanceValue(b.source.chance) ?? 0;
			return sort === 'rarest' ? av - bv : bv - av;
		});
	});

	const sorts: { id: Sort; label: string }[] = [
		{ id: 'rarest', label: 'Rarest first' },
		{ id: 'commonest', label: 'Commonest first' },
		{ id: 'name', label: 'A–Z' }
	];
</script>

<svelte:head>
	<title>Drop Rates — AnkhForge</title>
</svelte:head>

<div class="mx-auto max-w-5xl space-y-6">
	<header>
		<p class="label-xs text-blood-400">Farming reference</p>
		<h1 class="font-pixel mt-2.5 text-lg text-parchment">Drop Rates</h1>
		<p class="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
			Every accessory source that carries a chance, in one sortable list. Sort by rarest to see what
			is going to cost you an evening, and search an enemy or chest name to see everything it can
			give you.
		</p>
	</header>

	<div class="flex flex-col gap-3 sm:flex-row sm:items-center">
		<input
			type="search"
			bind:value={query}
			placeholder="Search an accessory, enemy or chest…"
			aria-label="Search drops"
			class="pixel-frame flex-1 bg-inset px-3 py-2 text-sm text-parchment placeholder:text-ghost focus:border-arcane-400"
		/>
		<div class="scroll-none flex gap-1.5 overflow-x-auto">
			{#each sorts as option (option.id)}
				{@const active = sort === option.id}
				<button
					type="button"
					onclick={() => (sort = option.id)}
					aria-pressed={active}
					class="pixel-frame label-xs shrink-0 px-2.5 py-2 transition-colors"
					class:bg-raised={active}
					class:bg-inset={!active}
					style:border-color={active ? 'var(--color-arcane-500)' : undefined}
					style:color={active ? 'var(--color-arcane-200)' : 'var(--color-faint)'}
				>
					{option.label}
				</button>
			{/each}
		</div>
	</div>

	<div class="scroll-none flex gap-1.5 overflow-x-auto pb-1" role="tablist" aria-label="Source kind">
		{#each [{ id: 'all' as const, label: 'All' }, ...present.map((k) => ({ id: k, label: sourceLabel[k] }))] as option (option.id)}
			{@const active = kind === option.id}
			<button
				type="button"
				role="tab"
				aria-selected={active}
				onclick={() => (kind = option.id)}
				class="pixel-frame label-xs shrink-0 px-2.5 py-1.5 transition-colors"
				class:bg-raised={active}
				class:bg-inset={!active}
				style:border-color={active ? 'var(--color-arcane-500)' : undefined}
				style:color={active ? 'var(--color-arcane-200)' : 'var(--color-faint)'}
			>
				{option.label}
				<span class="ml-1 text-ghost tabular-nums">
					{option.id === 'all'
						? dropRows.length
						: dropRows.filter((r) => r.source.kind === option.id).length}
				</span>
			</button>
		{/each}
	</div>

	<Panel padded={false} accent="blood">
		{#if rows.length > 0}
			<div class="overflow-x-auto">
				<table class="w-full min-w-[42rem] border-collapse text-left">
					<thead>
						<tr class="border-b border-edge-soft">
							<th class="label-xs px-4 py-2.5 text-faint">Accessory</th>
							<th class="label-xs px-4 py-2.5 text-faint">Source</th>
							<th class="label-xs px-4 py-2.5 text-right text-faint">Classic</th>
							<th class="label-xs px-4 py-2.5 text-right text-faint">Expert</th>
						</tr>
					</thead>
					<tbody>
						{#each rows as row, i (row.accessory.id + i)}
							<tr class="border-b border-edge-soft/60 transition-colors hover:bg-raised/60">
								<td class="px-4 py-2.5">
									<a
										href="/#{row.accessory.id}"
										use:hoverCard={row.accessory.id}
										class="flex items-center gap-2 text-xs font-semibold text-parchment hover:text-arcane-200"
									>
										<PixelIcon name={row.accessory.sprite} size={16} />
										{row.accessory.name}
									</a>
								</td>
								<td class="px-4 py-2.5">
									<div class="flex items-start gap-2">
										<PixelIcon name={sourceSprite[row.source.kind]} size={14} class="mt-0.5" />
										<div class="min-w-0">
											<p class="text-xs text-muted">
											<SourceText text={row.source.from} linkMobs={namesCreatures(row.source)} />
										</p>
											<p
												class="label-xs mt-0.5"
												style:color={accentColor[sourceAccent[row.source.kind]]}
											>
												{sourceLabel[row.source.kind]}
											</p>
										</div>
									</div>
								</td>
								<td class="px-4 py-2.5 text-right">
									<span class="label-xs tabular-nums text-gold-300">{row.source.chance}</span>
								</td>
								<td class="px-4 py-2.5 text-right">
									{#if row.source.expert}
										<span class="label-xs tabular-nums text-blood-300">{row.source.expert}</span>
									{:else}
										<span class="label-xs text-ghost">same</span>
									{/if}
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		{:else}
			<p class="p-6 text-center text-sm text-muted">Nothing matches that search.</p>
		{/if}
	</Panel>

	<p class="label-xs text-center text-ghost tabular-nums">{rows.length} rows</p>
</div>
