<script lang="ts">
	import { Popover } from '$lib/attachments/floating.svelte.js';

	const popover = new Popover();
	const tooltip = new Popover({ interaction: 'hover', placement: 'top' });
</script>

<main class="space-y-10 p-10">
	<!-- Popover -->
	<section>
		<button {...popover.reference()} class="btn preset-filled">Trigger Popover</button>
		{#if popover.isOpen()}
			<div
				{...popover.floating()}
				data-floating
				class="card preset-filled-surface-100-900 z-10 p-4"
			>
				<p>This is an example popover.</p>
			</div>
		{/if}
	</section>

	<!-- Tooltip -->
	<section>
		<p>This trigers a <span class="underline" {...tooltip.reference()}>Tooltip</span>.</p>
		{#if tooltip.isOpen()}
			<div
				{...tooltip.floating()}
				data-floating
				class="card preset-filled-surface-100-900 z-10 p-4"
			>
				<p>This is an example tooltip.</p>
			</div>
		{/if}
	</section>
</main>
