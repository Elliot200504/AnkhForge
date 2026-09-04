<script lang="ts">
	import '../app.css';
	import type { Snippet } from 'svelte';
	import { page } from '$app/state';
	import { navItems, isActive } from '$components/navigation/nav';
	import Starfield from '$components/ui/Starfield.svelte';
	import SpriteSheet from '$components/ui/SpriteSheet.svelte';
	import HoverCard from '$components/accessories/HoverCard.svelte';
	import PixelIcon from '$components/ui/PixelIcon.svelte';

	let { children }: { children: Snippet } = $props();

	const accent = 'var(--color-gold-400)';

</script>

<SpriteSheet />
<Starfield />
<HoverCard />

<a
	href="#main"
	class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-70 focus:bg-raised focus:px-4 focus:py-2 focus:text-sm focus:text-parchment"
>
	Skip to content
</a>

<div class="min-h-dvh">
	<!-- top bar not sidebar, so we get all the width -->
	<header class="sticky top-0 z-40 border-b border-edge-soft bg-deep/92 backdrop-blur-sm">
		<div class="mx-auto flex max-w-[110rem] items-center gap-3 px-3 py-2 sm:px-5">
			<a href="/" class="flex shrink-0 items-center gap-2">
				<PixelIcon name="ankh" size={22} />
				<span class="font-pixel hidden text-[12px] tracking-wide text-parchment sm:inline">
					AnkhForge
				</span>
			</a>

			<nav class="scroll-none hidden min-w-0 flex-1 overflow-x-auto lg:block" aria-label="Sections">
				<ul class="flex items-center gap-1">
					{#each navItems as item (item.href)}
						{@const active = isActive(page.url.pathname, item.href)}
						<li>
							<a
								href={item.href}
								aria-current={active ? 'page' : undefined}
								class="pixel-frame flex items-center gap-2 px-2.5 py-1.5 transition-colors"
								class:bg-raised={active}
								style:border-color={active ? accent : 'transparent'}
							>
								<PixelIcon name={item.sprite} size={16} muted={!active} />
								<span class="label-xs" style:color={active ? accent : 'var(--color-muted)'}>
									{item.label}
								</span>
							</a>
						</li>
					{/each}
				</ul>
			</nav>

			<p class="ml-auto hidden shrink-0 text-[11px] text-ghost md:block">
				Terraria 1.4.5 · Classic and Expert rates
			</p>
		</div>
	</header>

	<main id="main" class="mx-auto max-w-[110rem] px-3 pb-24 pt-4 sm:px-5 lg:pb-8">
		{@render children()}
	</main>

	<!-- bottom bar for phone -->
	<nav
		class="fixed inset-x-0 bottom-0 z-40 border-t border-edge-soft bg-deep/95 backdrop-blur-sm lg:hidden"
		aria-label="Sections"
	>
		<ul class="grid grid-cols-3">
			{#each navItems as item (item.href)}
				{@const active = isActive(page.url.pathname, item.href)}
				<li>
					<a
						href={item.href}
						aria-current={active ? 'page' : undefined}
						class="flex min-h-14 flex-col items-center justify-center gap-1 px-1 py-2 transition-colors"
					>
						<span
							class="block h-[3px] w-6 transition-colors"
							style:background={active ? accent : 'transparent'}
							aria-hidden="true"
						></span>
						<PixelIcon name={item.sprite} size={18} muted={!active} />
						<span class="label-xs text-[8px]" style:color={active ? accent : 'var(--color-ghost)'}>
							{item.short}
						</span>
					</a>
				</li>
			{/each}
		</ul>
	</nav>
</div>
