import { useEffect, useState } from "react";
import { pokemonService } from "./services/pokemon";
import type { PokemonDetail, PokemonItem } from "./types/pokemon";
import PokemonDisplay from "./components/PokemonDisplay";
import NavigationControls from "./components/NavigationControls";

function App() {
	const [pokemonList, setPokemonList] = useState<PokemonItem[]>([]);
	const [pokemon, setPokemon] = useState<PokemonDetail | null>(null);
	const [currentId, setCurretId] = useState(0);

	const handlePrev = () => {
		setCurretId((prev) => prev - 1);
	};

	const handleNext = async () => {
		if (currentId < pokemonList.length - 1) {
			setCurretId((prev) => prev + 1);
		} else {
			const newData = await pokemonService.getPokemons(pokemonList.length, 20);
			setPokemonList((prev) => [...prev, ...newData.results]);
			setCurretId((prev) => prev + 1);
		}
	};

	useEffect(() => {
		const fetchAllPokemons = async () => {
			try {
				const data = await pokemonService.getPokemons(0, 20);
				console.log("Pokemon List: ", data.results);
				setPokemonList(data.results);
			} catch (error) {
				console.error("API Error: ", error);
			}
		};
		fetchAllPokemons();
	}, []);

	useEffect(() => {
		if (!pokemonList || pokemonList.length === 0) return;
		const fetchPokemon = async () => {
			try {
				const name = pokemonList[currentId].name;
				const data = await pokemonService.getPokemon(name);
				console.log("Pokemon: ", data);
				setPokemon(data);
			} catch (error) {
				console.error("API Error: ", error);
			}
		};
		fetchPokemon();
	}, [currentId, pokemonList]);

	return (
		<div className="">
			<PokemonDisplay pokemon={pokemon} />
			<NavigationControls onPrev={handlePrev} onNext={handleNext} />
		</div>
	);
}

export default App;
