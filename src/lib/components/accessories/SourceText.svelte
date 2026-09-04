<script lang="ts">
	import { splitMobs } from '$lib/utils/mobs';
	import { hoverMob } from '$lib/state/hover.svelte';

	interface Props {
		text: string;
		/** false for chest/npc, nothing there is a mob */
		linkMobs?: boolean;
		class?: string;
	}

	let { text, linkMobs = true, class: klass = '' }: Props = $props();

	const segments = $derived(linkMobs ? splitMobs(text) : [{ text, mob: undefined }]);
</script>

<!--
	mob names are buttons not spans. hover show the card, click pin it, and click
	is the only way on phone. the place is in the aria-label too for readers
-->
<span class={klass}
	>{#each segments as segment, i (i)}{#if segment.mob}<button
				type="button"
				use:hoverMob={segment.mob.name}
				aria-label="{segment.mob.name} — found in {segment.mob.where}{segment.mob.when
					? `, ${segment.mob.when}`
					: ''}"
				class="cursor-help underline decoration-blood-600 decoration-dotted underline-offset-2 hover:text-blood-200 focus-visible:text-blood-200"
				>{segment.text}</button
			>{:else}{segment.text}{/if}{/each}</span
>
