<script lang="ts">
	import { slide, fade } from 'svelte/transition';
	import { Popover } from '$lib/attachments/floating.svelte.js';

	const popover = new Popover();
	const tooltip = new Popover({ interaction: 'hover', placement: 'top' });
</script>

<main class="space-y-10 p-10">
	<!-- Popover -->
	<section class="space-y-2">
		<h2 class="h2">Popover</h2>
		<span>
			<button {...popover.reference()} class="btn preset-filled">Trigger</button>
			{#if popover.isOpen()}
				<div
					{...popover.floating()}
					data-floating
					class="card preset-filled-surface-100-900 z-10 p-4"
					transition:slide={{ duration: 150 }}
				>
					<p>This is an example popover.</p>
				</div>
			{/if}
		</span>
	</section>

	<hr class="hr" />

	<!-- Tooltip -->
	<section class="space-y-2">
		<h2 class="h2">Tooltip</h2>
		<span>
			<p>This triggers a <span class="underline" {...tooltip.reference()}>tooltip</span>.</p>
			{#if tooltip.isOpen()}
				<div
					{...tooltip.floating()}
					data-floating
					class="card preset-filled-surface-100-900 z-10 p-4"
					transition:fade={{ duration: 150 }}
				>
					<p>This is an example tooltip.</p>
				</div>
			{/if}
		</span>
	</section>
</main>
