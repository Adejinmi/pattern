import React from 'react';
import { Grid } from 'components/Styles';
import styled from 'styled-components';
import axios from 'axios';

export const FabricList = styled.ul`
	position: relative;
	li {
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid #e2e2e2;
		padding: 15px 0 3px;
		font-size: 0.85rem;
		list-style-type: radio;
		p:first-child {
			text-transform: uppercase;
		}
		button {
			background-color: #417505;
			color: white;
			font-size: 0.75rem;
			padding: 5px;
			border-radius: 10px;
			&:focus {
				outline: none;
			}
		}
	}
`;
const Div=styled.div`
	@media(max-width:960px){
		margin-top: 50px;
	}
	& div{
		width: 500px;
		@media(max-width:960px){
				width: 100%;
		}
	}
`
const Material = ({ fabric }) => (
		<li style={{textAlign:'justify', fontSize:'18px', marginTop:'10px'}}>{fabric}</li>

);

const Fabric = ({ fabric }) => {
	return (
		<Grid columns={['1fr', '1fr']} gap='50px' style={{ marginTop: '60px', alignItems:'start'}} isH>
			<img src={fabric.imgUrl} />
			<Div>
					<p style={{fontSize:'20px', fontWeight:'bold', textTransform:'uppercase'}}>{fabric.title}</p>
					
					<div>
					<p style={{fontSize:'20px', fontWeight:'bold', letterSpacing:'0.4px', marginTop:'30px'}}>DESCRIPTION</p>	
					<p style={{fontSize:'20px', letterSpacing:'0.4px', marginTop:'10px'}}>{fabric.description}</p>
					
					<ul style={{marginTop:'40px', textAlign:'justify'}}>
						{fabric.highlights.map((fabric, i) => (
							<Material key={i} fabric={fabric} />
						))}
					</ul>
						
				</div>
			</Div>
		</Grid>
	);
};

export async function getServerSideProps({ params }) {
	// Call an external API endpoint to get posts.
	// You can use any data fetching library
	const id = params.id;
	const {
		data: { data },
	} = await axios.get(`https://patternandproduce.herokuapp.com/api/herbadashrey/${id}`);

	// By returning { props: posts }, the Blog component
	// will receive `posts` as a prop at build time
	return {
		props: {
			fabric: data,
		},
	};
}
export default Fabric;
