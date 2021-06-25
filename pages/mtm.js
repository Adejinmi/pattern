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
	<MaterialWrapper href={`mtm/${fabric?.number}`}>
		<img src={fabric.imgUrl} />
		<p style={{textAlign:'left', fontSize:'15px', fontWeight: 'bold', marginBottom:'0px'}}>{fabric.title}</p>
		<p style={{textAlign:'left', fontSize:'12px', marginTop:'0px'}}>{fabric.subtitle}</p>
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
	const {
		data:{ data },
	} = await axios.get('https://patternandproduce.herokuapp.com/api/mtm');

	return {
		props: {
			fabrics: data
		},
	};
}

export default Fabric;
