import { useEffect, useState } from "react";
import { pokemonService } from "./services/pokemon";
import type { PokemonItem } from "./types/pokemon";

function App() {
	const [pokemon, setPokemon] = useState<PokemonItem | null>(null);

	useEffect(() => {
		const fetchDataPokemon = async () => {
			try {
				const data = await pokemonService.getPokemon();
				console.log(data);
				setPokemon(data);
			} catch (error) {
				console.error("API Error: ", error);
			}
		};
		fetchDataPokemon();
	}, []);

	return (
		<div className="">
			<pre>{JSON.stringify(pokemon, null, 2)}</pre>
		</div>
	);
}

export default App;
