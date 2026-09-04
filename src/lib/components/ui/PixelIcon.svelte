<script lang="ts">
	import { sprites, symbolId } from './sprites';

	interface Props {
		/** name from sprites.ts */
		name?: string;
		size?: number;
		/** grey it out */
		muted?: boolean;
		class?: string;
		title?: string;
	}

	let { name, size = 24, muted = false, class: klass = '', title }: Props = $props();

	const known = $derived(name ? Boolean(sprites[name]) : false);
</script>

{#if known && name}
	<svg
		class="crisp shrink-0 {klass}"
		class:opacity-40={muted}
		class:saturate-0={muted}
		width={size}
		height={size}
		viewBox="0 0 12 12"
		role={title ? 'img' : 'presentation'}
		aria-label={title}
		aria-hidden={title ? undefined : 'true'}
	>
		{#if title}<title>{title}</title>{/if}
		<use href="#{symbolId(name)}" />
	</svg>
{:else}
	<span
		class="inline-block shrink-0 rounded-[2px] bg-edge {klass}"
		style="width:{size}px;height:{size}px"
		aria-hidden="true"
	></span>
{/if}
