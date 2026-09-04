<script lang="ts">
	interface Props {
		count?: number;
	}

	let { count = 90 }: Props = $props();

	// fake random so the stars dont move every render
	function rand(seed: number) {
		const x = Math.sin(seed * 12.9898) * 43758.5453;
		return x - Math.floor(x);
	}

	const stars = $derived(
		Array.from({ length: count }, (_, i) => ({
			x: rand(i + 1) * 100,
			y: rand(i + 41) * 100,
			size: rand(i + 77) > 0.86 ? 2 : 1,
			delay: rand(i + 13) * 6,
			duration: 3 + rand(i + 29) * 5,
			tint: rand(i + 91) > 0.8 ? 'var(--color-arcane-200)' : 'var(--color-parchment)'
		}))
	);
</script>

<div class="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
	<div
		class="absolute inset-0"
		style="background:
			radial-gradient(120% 80% at 50% -10%, #16123a 0%, transparent 55%),
			radial-gradient(90% 60% at 88% 8%, #2a1145 0%, transparent 60%),
			radial-gradient(70% 50% at 6% 96%, #1a0a18 0%, transparent 65%),
			linear-gradient(180deg, #080a16 0%, #05060d 60%, #06060f 100%)"
	></div>

	<div class="absolute inset-0 anim-drift">
		{#each stars as star, i (i)}
			<span
				class="absolute rounded-[1px]"
				style="left:{star.x}%; top:{star.y}%; width:{star.size}px; height:{star.size}px;
					background:{star.tint};
					animation: af-twinkle {star.duration}s ease-in-out {star.delay}s infinite;"
			></span>
		{/each}
	</div>

	<!-- haze at the bottom -->
	<div
		class="absolute inset-x-0 bottom-0 h-64"
		style="background: linear-gradient(180deg, transparent, color-mix(in srgb, var(--color-arcane-900) 55%, transparent))"
	></div>
</div>

<style>
	.anim-drift {
		animation: af-drift 90s linear infinite alternate;
	}
</style>
