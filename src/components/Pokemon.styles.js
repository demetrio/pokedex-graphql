import styled from '@emotion/styled';
import color from '../data/colors';
import dimensions from '../data/dimensions';

export const PokemonCard = styled.div`
	width: 32%;
	background-color: #fff;
	background-clip: border-box;
	border: 1px solid rgba(0, 0, 0, 0.125);
	border-radius: 0.25rem;
	box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
	overflow: hidden;
	margin-bottom: 20px;

	@media (max-width: ${dimensions.maxwidthTablet}px) {
		width: 100%;
	}

	@media (max-width: ${dimensions.maxwidthMobile}px) {
		flex-wrap: wrap;
		width: 100%;
	}
`;

export const PokemonName = styled.div`
	background-color: ${(props) => color[props.type]};
	text-align: center;
	padding: 10px;

	& p {
		text-transform: uppercase;
		font-weight: bold;
		color: white;
		letter-spacing: 4px;
		text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.4);
	}
`;

export const PokemonImage = styled.div`
	padding: 20px;
	min-height: 300px;
	display: flex;
	align-items: center;
	justify-content: center;

	img {
		max-width: 100%;
		height: auto;
	}
`;

export const PokemonAttacks = styled.div`
	display: flex;
	padding-left: 10px;
	padding-right: 10px;
	justify-content: space-between;
	position: sticky;
	bottom: 0;

	span {
		width: 30%;
		background-color: #f16820;
		border-radius: 3px;
		padding: 7px;
		font-weight: 700;
		color: #fff;
		padding-left: 10px;
		padding-right: 10px;
		font-size: 10px;
		margin-bottom: 10px;
		word-wrap: break-word;
		text-align: center;
		line-height: 15px;
	}

	@media (max-width: ${dimensions.maxwidthMobile} px) {
		span {
			width: 100%;
		}
	}
`;

export const PokemonMeta = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 10px;
	padding: 0 10px;

	span {
		color: white;
		text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.4);
		background-color: #7bb7b7;
		font-weight: bold;
		margin: 0;
		padding: 5px 20px;
		border-radius: 5px;
	}

	@media (max-width: ${dimensions.maxwidthMobile} px) {
		flex-wrap: wrap;

		span {
			width: 100%;
			margin-bottom: 10px;
		}
	}
`;
