import React from 'react';
import { CenterText, GridEqual } from '../components/Styles';
import styled from 'styled-components';
import axios from 'axios';

export const MaterialWrapper = styled.a`
	position: relative;
	text-align: center;
	display: block;
	p {
		margin-top: 15px;
		font-family: 'Domine', serif;
	}
`;
const Material = ({ fabric }) => (
	<MaterialWrapper href={`fabric/${fabric?.name}`}>
		<img src={fabric.imgUrl} />
		<p>{fabric.name}</p>
	</MaterialWrapper>
);

const Fabric = ({ fabrics }) => {
	return (
		<>
			<GridEqual count={3} style={{ marginTop: '60px' }} gap={'40px'}>
				{fabrics.map((fabric, i) => (
					<Material key={i} fabric={fabric} />
				))}
			</GridEqual>
		</>
	);
};

export async function getStaticProps() {
	// Call an external API endpoint to get posts.
	// You can use any data fetching library
	const {
		data: { data },
	} = await axios.get('http://localhost:3000/api/fabric');

	console.log(data);

	// By returning { props: posts }, the Blog component
	// will receive `posts` as a prop at build time
	return {
		props: {
			fabrics: data,
		},
	};
}

export default Fabric;
