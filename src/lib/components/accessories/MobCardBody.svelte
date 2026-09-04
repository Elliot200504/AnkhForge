<script lang="ts">
	import type { Mob } from '$lib/types';
	import { dropsByMob } from '$lib/utils/mobs';
	import { tierById } from '$data/tiers';
	import { accentColor } from '$lib/utils/accents';
	import PixelIcon from '$components/ui/PixelIcon.svelte';

	interface Props {
		mob: Mob;
	}

	let { mob }: Props = $props();

	const tier = $derived(mob.stage ? tierById.get(mob.stage) : undefined);
	const drops = $derived(dropsByMob.get(mob.name) ?? []);

	const sprite = $derived(
		mob.kind === 'boss' ? 'eye' : mob.kind === 'object' ? 'bag' : 'skull'
	);
	const kindLabel = $derived(
		mob.kind === 'boss' ? 'Boss' : mob.kind === 'object' ? 'Smashable' : 'Enemy'
	);
</script>

<div class="flex items-start gap-2.5 border-b border-edge-soft px-3 py-2.5">
	<PixelIcon name={sprite} size={26} class="mt-0.5" />
	<div class="min-w-0 flex-1">
		<p class="text-xs font-semibold leading-tight text-parchment">{mob.name}</p>
		<p class="label-xs mt-1 flex flex-wrap items-center gap-x-2 text-ghost">
			<span class="text-blood-300">{kindLabel}</span>
			{#if tier}
				<span style:color={accentColor[tier.accent]}>{tier.name}</span>
			{/if}
		</p>
	</div>
</div>

<!-- the whole point, where it live -->
<div class="space-y-1.5 px-3 py-2.5">
	<p class="flex items-start gap-2">
		<span class="label-xs mt-0.5 w-10 shrink-0 text-faint">where</span>
		<span class="text-[11px] leading-snug text-parchment">{mob.where}</span>
	</p>
	{#if mob.when}
		<p class="flex items-start gap-2">
			<span class="label-xs mt-0.5 w-10 shrink-0 text-faint">when</span>
			<span class="text-[11px] leading-snug text-gold-300">{mob.when}</span>
		</p>
	{/if}
</div>

{#if mob.note}
	<p class="border-t border-edge-soft px-3 py-2 text-[11px] leading-relaxed text-faint">
		{mob.note}
	</p>
{/if}

{#if drops.length > 0}
	<div class="border-t border-edge-soft">
		<p class="label-xs px-3 pt-2.5 text-faint">
			Accessories it gives <span class="text-ghost tabular-nums">{drops.length}</span>
		</p>
		<ul class="space-y-1 px-3 pb-2.5 pt-1.5">
			{#each drops as drop (drop.accessory.id)}
				<li class="flex items-center gap-2">
					<PixelIcon name={drop.accessory.sprite} size={12} class="shrink-0" />
					<span class="min-w-0 flex-1 truncate text-[11px] text-parchment">
						{drop.accessory.name}
					</span>
					{#if drop.source.chance}
						<span class="label-xs shrink-0 tabular-nums text-gold-300">
							{drop.source.chance}
						</span>
					{/if}
				</li>
			{/each}
		</ul>
	</div>
{/if}
