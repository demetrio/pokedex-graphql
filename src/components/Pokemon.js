import React from 'react';

import { PokemonCard, PokemonName, PokemonImage, PokemonAttacks, PokemonMeta } from './Pokemon.styles.js';

export function Pokemon({ pokemon }) {
	return (
		<PokemonCard>
			<PokemonName type={pokemon.types[0]}>
				<p>{pokemon.name}</p>
			</PokemonName>
			<PokemonMeta>
				<span title="maxHP">{pokemon.maxHP}</span>
				<span title="maxCP">{pokemon.maxCP}</span>
			</PokemonMeta>
			<PokemonImage>
				<img src={pokemon.image} title={pokemon.name} alt={pokemon.name} />
			</PokemonImage>
			<PokemonAttacks>
				{pokemon.attacks.special.slice(0, 3).map((attack) => (
					<span key={`${attack.name}-${attack.damage}`}>{attack.name}</span>
				))}
			</PokemonAttacks>
		</PokemonCard>
	);
}
