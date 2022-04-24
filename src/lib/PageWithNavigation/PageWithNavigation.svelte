<div>
	<nav>
		<ul>
			<li><a href="/create">Send data</a></li>
			<li><a href="/read">Receive data</a></li>
		</ul>
	</nav>

	<main>
		<slot />
	</main>

	<footer>
		<div>(c) 2022 Jörn Bernhardt.</div>
		<div><a href="/">Back to index</a></div>
	</footer>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		gap: 2em;
		height: 100%;
	}

	main {
		flex-grow: 1;
		padding: 0 2em;
	}

	nav {
		border-bottom: 1px solid #000;
	}

	ul {
		display: flex;
		gap: 2em;
		justify-content: space-evenly;
		margin: 0;
		padding: 0;
	}
	li {
		list-style-type: none;
		margin: 0;
		padding: 0;
	}
	li > a {
		display: block;
		padding: 1em;
	}

	footer {
		background-color: #333;
		color: #fff;
		display: flex;
		gap: 1em;
		justify-content: center;
		padding: 1em;
	}

	footer a {
		color: #ccc;
	}
</style>
