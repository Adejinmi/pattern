import React from 'react';
import { CenterText, GridEqual } from '../components/Styles';
import styled from 'styled-components';
import axios from 'axios';
import filter from 'public/images/filter.svg';

export const MaterialWrapper = styled.a`
	position: relative;
	text-align: center;
	display: block;
	p {
		margin-top: 15px;
	}
`;

export const Div = styled.div`
	display: inline-flex;
	margin-top: 80px;
	position: absolute;
	right: 6%;
	cursor: pointer;
	p{
		font-size: 16px;
		opacity: 0.7;
	}
	
`
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
		<Div style={{}}>
		 	<img src={filter} style={{height:'24px', width: '24px', opacity:'0.6', marginRight: '10px'}} /> <p> Filter by: </p>
		</Div>

			<GridEqual count={3} style={{ marginTop: '150px' }} gap={'40px'}>
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
