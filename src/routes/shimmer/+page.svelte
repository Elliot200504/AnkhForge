<script lang="ts">
	import { accessories, byName, decraftable, shimmerable } from '$data/index';
	import Panel from '$components/ui/Panel.svelte';
	import PixelIcon from '$components/ui/PixelIcon.svelte';

	/** name -> what it turn into */
	const forward = $derived.by(() => {
		const map = new Map<string, string>();
		for (const item of shimmerable) {
			if (item.shimmer?.to) map.set(item.name, item.shimmer.to);
		}
		return map;
	});

	/**
	 * walk the swap graph. if it come back to itself its a loop, if not its a
	 * one way chain
	 */
	const groups = $derived.by(() => {
		const targets = new Set(forward.values());
		const seen = new Set<string>();
		const cycles: string[][] = [];
		const chains: string[][] = [];

		// chains first, start where nothing point at us
		for (const start of forward.keys()) {
			if (targets.has(start)) continue;
			const path: string[] = [];
			let node: string | undefined = start;
			while (node && !path.includes(node)) {
				path.push(node);
				seen.add(node);
				node = forward.get(node);
			}
			chains.push(path);
		}

		// what is left is a loop
		for (const start of forward.keys()) {
			if (seen.has(start)) continue;
			const path: string[] = [];
			let node: string | undefined = start;
			while (node && !path.includes(node)) {
				path.push(node);
				seen.add(node);
				node = forward.get(node);
			}
			cycles.push(path);
		}

		return { cycles, chains };
	});

	/** only got a "from", nothing point out of them */
	const inboundOnly = $derived(shimmerable.filter((a) => !a.shimmer?.to && a.shimmer?.from));

	function idFor(name: string): string | undefined {
		return byName.get(name.toLowerCase())?.id;
	}
</script>

<svelte:head>
	<title>Shimmer — AnkhForge</title>
</svelte:head>

<div class="mx-auto max-w-4xl space-y-6">
	<header>
		<p class="label-xs text-gold-400">Transmutation</p>
		<h1 class="font-pixel mt-2.5 text-lg text-parchment">Shimmer</h1>
		<p class="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
			Shimmer does two useful things for accessories. It <em>decrafts</em> anything you tinkered
			together, handing back the ingredients — which is how you undo a wrong upgrade. And it
			<em>swaps</em> certain drop-only accessories for their counterpart, so you never have to farm
			both halves of a pair.
		</p>
	</header>

	<Panel title="Swap loops" subtitle="Throw one in, get the next one out" accent="gold" padded={false}>
		<div class="space-y-3 p-4">
			{#each groups.cycles as cycle, i (i)}
				<div class="pixel-frame bg-inset/70 p-3">
					<div class="flex flex-wrap items-center gap-x-2 gap-y-2">
						{#each cycle as name, n (n)}
							{#if n > 0}
								<PixelIcon name="shimmer" size={12} />
							{/if}
							{#if idFor(name)}
								<a
									href="/#{idFor(name)}"
									class="text-xs text-parchment underline decoration-gold-500 decoration-dotted underline-offset-2 hover:text-gold-300"
								>
									{name}
								</a>
							{:else}
								<span class="text-xs text-muted">{name}</span>
							{/if}
						{/each}
						<PixelIcon name="shimmer" size={12} />
						<span class="label-xs text-ghost">back to {cycle[0]}</span>
					</div>
				</div>
			{/each}

			{#each groups.chains as chain, i (i)}
				{#if chain.length > 1}
					<div class="pixel-frame bg-inset/70 p-3">
						<div class="flex flex-wrap items-center gap-x-2 gap-y-2">
							{#each chain as name, n (n)}
								{#if n > 0}
									<PixelIcon name="shimmer" size={12} />
								{/if}
								{#if idFor(name)}
									<a
										href="/#{idFor(name)}"
										class="text-xs text-parchment underline decoration-gold-500 decoration-dotted underline-offset-2 hover:text-gold-300"
									>
										{name}
									</a>
								{:else}
									<span class="text-xs text-muted">{name}</span>
								{/if}
							{/each}
						</div>
					</div>
				{/if}
			{/each}
		</div>
	</Panel>

	{#if inboundOnly.length > 0}
		<Panel
			title="Shimmer-only accessories"
			subtitle="There is no recipe and no vendor — the pool is the only source"
			accent="arcane"
			padded={false}
		>
			<ul class="divide-y divide-edge-soft">
				{#each inboundOnly as item (item.id)}
					<li class="flex items-start gap-3 px-4 py-3">
						<PixelIcon name={item.sprite} size={20} class="mt-0.5" />
						<div class="min-w-0 flex-1">
							<a
								href="/#{item.id}"
								class="text-sm font-semibold text-parchment hover:text-arcane-200"
							>
								{item.name}
							</a>
							<p class="mt-1 text-xs leading-relaxed text-muted">{item.effect}</p>
							<p class="label-xs mt-1.5 text-gold-300">shimmer a {item.shimmer?.from}</p>
						</div>
					</li>
				{/each}
			</ul>
		</Panel>
	{/if}

	<Panel
		title="Decraftable"
		subtitle="{decraftable.length} tinkered accessories that shimmer back into their parts"
		accent="abyss"
		padded={false}
	>
		<div class="flex flex-wrap gap-1.5 p-4">
			{#each decraftable as item (item.id)}
				<a href="/#{item.id}" class="pixel-frame label-xs bg-inset px-2 py-1 text-muted hover:text-parchment">
					{item.name}
				</a>
			{/each}
		</div>
	</Panel>

	<Panel title="The fine print" accent="moss">
		<ul class="space-y-2 text-xs leading-relaxed text-muted">
			<li class="flex gap-2">
				<span class="text-gold-400">·</span>
				Shimmer is found in the Aether, a small cavern-layer biome that generates once per world.
			</li>
			<li class="flex gap-2">
				<span class="text-gold-400">·</span>
				Decrafting an Alchemy Table recipe has a 1/3 (33.33%) chance to lose each individual
				ingredient, so undo those with care.
			</li>
			<li class="flex gap-2">
				<span class="text-gold-400">·</span>
				The Chromatic Cloak lets you control when you phase, which makes repeated dips a lot less
				annoying.
			</li>
			<li class="flex gap-2">
				<span class="text-gold-400">·</span>
				The immunity pairs are the big win: five farms instead of ten for the Ankh Shield.
			</li>
		</ul>
	</Panel>

	<p class="label-xs text-center text-ghost">
		{shimmerable.length} of {accessories.length} accessories have a swap
	</p>
</div>
