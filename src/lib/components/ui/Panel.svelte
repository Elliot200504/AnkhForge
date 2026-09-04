<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { Accent } from '$lib/types';
	import { accentStyle } from '$lib/utils/accents';

	interface Props {
		title?: string;
		subtitle?: string;
		accent?: Accent;
		/** the little corners so it look like game ui */
		corners?: boolean;
		padded?: boolean;
		class?: string;
		actions?: Snippet;
		children: Snippet;
	}

	let {
		title,
		subtitle,
		accent = 'arcane',
		corners = false,
		padded = true,
		class: klass = '',
		actions,
		children
	}: Props = $props();
</script>

<section
	class="pixel-frame texture-weave relative bg-surface/80 {corners ? 'pixel-corners' : ''} {klass}"
	style={accentStyle(accent)}
>
	{#if title}
		<header class="flex items-center justify-between gap-3 border-b border-edge-soft px-4 py-3">
			<div class="min-w-0">
				<h2 class="label-sm text-parchment">{title}</h2>
				{#if subtitle}
					<p class="mt-1 truncate text-xs text-faint">{subtitle}</p>
				{/if}
			</div>
			{#if actions}
				<div class="flex shrink-0 items-center gap-2">{@render actions()}</div>
			{/if}
		</header>
	{/if}
	<div class={padded ? 'p-4' : ''}>
		{@render children()}
	</div>
</section>
