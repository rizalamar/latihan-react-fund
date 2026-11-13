import type { PokemonDetail } from "../types/pokemon";

interface Props {
	pokemon: PokemonDetail | null;
}

export default function PokemonDisplay({ pokemon }: Props) {
	return (
		<div className="flex flex-col items-center justify-center h-screen">
			<img
				src={pokemon?.sprites.other["official-artwork"].front_default}
				alt={pokemon?.name}
				className="w-80 h-80 object-contain"
			/>
			<h1 className="text-4xl font-bold capitalize mt-4">{pokemon?.name}</h1>
		</div>
	);
}
