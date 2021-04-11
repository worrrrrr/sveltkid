<!--  key with name title -->
<script>
	import Fuse from 'fuse.js';
	import links from './links.json';
	import ContactCard from '$lib/ContactCard.svelte';
	export let value = '';
	const map = new Map([
		['name', 'Svelte'],
		['link', 'JavaScript']
	]);

	const fuse = new Fuse(links, {
		keys: ['name', 'title', 'url'],
		includeScore: true
	});
	$: linkres = fuse.search(value);
	const results = fuse.search(`${value}`);
</script>

<input type="search" bind:value placeholder="Search . . ." />

<!-- markup (zero or more items) goes here -->

{#each linkres as link}
	<!-- content here -->
	<ContactCard>
		<span slot="name"> {link.item.name} </span>

		<span slot="address">
			{link.item.url}
			{link.score}
		</span>
	</ContactCard>
{/each}

<style>
	/* your styles go here */
</style>
