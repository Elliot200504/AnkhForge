<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { Accent } from '$lib/types';
	import { accentColor, accentSoft } from '$lib/utils/accents';

	interface Props {
		accent?: Accent;
		/** filled = state, outline = info */
		variant?: 'outline' | 'solid';
		size?: 'xs' | 'sm';
		title?: string;
		class?: string;
		children: Snippet;
	}

	let {
		accent = 'arcane',
		variant = 'outline',
		size = 'xs',
		title,
		class: klass = '',
		children
	}: Props = $props();
</script>

<span
	{title}
	class="inline-flex items-center gap-1 whitespace-nowrap rounded-[2px] border px-1.5 py-0.5 {size ===
	'xs'
		? 'label-xs'
		: 'label-sm'} {klass}"
	style:border-color={accentColor[accent]}
	style:color={variant === 'solid' ? 'var(--color-parchment)' : accentColor[accent]}
	style:background={variant === 'solid' ? accentSoft[accent] : 'transparent'}
>
	{@render children()}
</span>
