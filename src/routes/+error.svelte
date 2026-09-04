<script lang="ts">
	import { page } from '$app/state';
	import PixelIcon from '$components/ui/PixelIcon.svelte';
</script>

<div class="mx-auto flex max-w-md flex-col items-center gap-4 py-24 text-center">
	<PixelIcon name="skull" size={48} />
	<h1 class="font-pixel text-lg text-parchment">{page.status}</h1>
	<p class="text-sm text-muted">{page.error?.message ?? 'That page is not in the forge.'}</p>
	<a href="/" class="pixel-frame label-xs bg-raised px-3 py-2 text-arcane-200">Back to the list</a>
</div>
