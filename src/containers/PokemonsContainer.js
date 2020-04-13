import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Pokemon } from '../components/Pokemon';
import GET_POKEMONS from '../graphql/get-pokemons';
import styled from '@emotion/styled';

const Container = styled.div`
	display: flex;
	max-width: 550px;
	margin: auto;
	flex-wrap: wrap;
	justify-content: space-between;

	& p {
		margin: 0;
	}
`;

function PokemonsContainer() {
	const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
		variables: { first: 9 },
	});

	return <Container>{pokemons && pokemons.map((pokemon) => <Pokemon key={pokemon.id} pokemon={pokemon} />)}</Container>;
}

export default PokemonsContainer;
