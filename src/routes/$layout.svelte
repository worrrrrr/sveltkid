<script>
	import Search from '$lib/Search.svelte';
	import Nav from './Nav.svelte';
</script>

<!-- src/routes/$layout.svelte -->

<svelte:head>
	<Nav />
</svelte:head>
<Search />
<slot />

<style>
</style>
