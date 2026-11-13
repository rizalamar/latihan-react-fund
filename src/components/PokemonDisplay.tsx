import type { PokemonDetail } from "../types/pokemon";

interface Props {
	pokemon: PokemonDetail | null;
}

export default function PokemonDisplay({ pokemon }: Props) {
	return (
		<div className="flex flex-col items-center justify-center h-screen p-6">
			{/* Sprites */}
			<img
				src={pokemon?.sprites.other["official-artwork"].front_default}
				alt={pokemon?.name}
				className="w-80 h-80 object-contain"
			/>

			{/* Name */}
			<h1 className="text-4xl font-bold capitalize mt-4">{pokemon?.name}</h1>

			{/* Types */}
			<div className="flex gap-2 mt-2">
				{pokemon?.types.map((t) => (
					<span key={t.type.name} className="px-3 py-1 bg-blue-100 rounded-full text-sm capitalize">
						{t.type.name}
					</span>
				))}
			</div>

			{/* Stats */}
			<div className="mt-4 grid grid-cols-3 gap-3">
				{pokemon?.stats.map((s) => (
					<div key={s.stat.name} className="flex flex-col items-center bg-black rounded-lg px-6 py-2">
						<span className="uppercase text-xs text-yellow-300 font-medium">{s.stat.name}</span>
						<span className="font-mono font-bold text-gray-50">{s.base_stat}</span>
					</div>
				))}
			</div>
		</div>
	);
}
