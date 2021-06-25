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

const Material = ({ fabric }) => (
		<li style={{textAlign:'left', fontSize:'14px', marginTop:'5px'}}>{fabric}</li>

);

const Fabric = ({ fabric }) => {
	return (
		<Grid columns={['1fr', '1fr']} gap='50px' style={{ marginTop: '60px', alignItems:'start'}}>
			<img src={fabric.imgUrl} />
			<div style={{objectPosition:'top', marginTop:'0'}}>
						<p style={{fontSize:'30px', fontWeight:'bold'}}>{fabric.title}</p>
						<p style={{color:'dimgray'}}>{fabric.subtitle}</p>
					<div style={{backgroundColor:'#F0F0F0', width:'500px', padding:'30px', marginTop:'40px'}}>
						<p style={{fontSize:'15.5px', fontWeight:'bold', letterSpacing:'0.4px', marginBottom:'10px'}}>DESCRIPTION</p>
						<p style={{fontSize:'15px', letterSpacing:'0.1px', textAlign:'justify'}}>{fabric.description}</p>
					<ul style={{marginTop:'20px'}}>
						{fabric.subdescription.map((fabric, i) => (
							<Material key={i} fabric={fabric} />
						))}
					</ul>
						
					</div>
			</div>
		</Grid>
	);
};

export async function getServerSideProps({ params }) {
	// Call an external API endpoint to get posts.
	// You can use any data fetching library
	const id = params.id;
	const {
		data: { data },
	} = await axios.get(`http://localhost:3000/api/mtm/${id}`);

	// By returning { props: posts }, the Blog component
	// will receive `posts` as a prop at build time
	return {
		props: {
			fabric: data,
		},
	};
}
export default Fabric;
