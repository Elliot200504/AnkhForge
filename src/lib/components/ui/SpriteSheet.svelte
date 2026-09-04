<script lang="ts">
	import { spriteLayers, symbolId } from './sprites';

	const entries = Object.entries(spriteLayers);
</script>

<!-- every sprite one time. PixelIcon just <use> them so a page full of icons stay cheap -->
<svg
	aria-hidden="true"
	focusable="false"
	style="position:absolute;width:0;height:0;overflow:hidden"
>
	{#each entries as [name, layers] (name)}
		<symbol id={symbolId(name)} viewBox="0 0 12 12">
			{#each layers as layer, i (i)}
				<path d={layer.d} fill={layer.fill} />
			{/each}
		</symbol>
	{/each}
</svg>
