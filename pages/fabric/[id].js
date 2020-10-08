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

const Fabric = ({ fabric }) => {
	return (
		<Grid columns={['1fr', '1fr']} gap='20px' style={{ marginTop: '60px' }}>
			<img src={fabric.imgUrl} />
			<div>
				<FabricList>
					<li>
						<p>AVAILABILITY</p>
						<button>AVAILABILITY</button>
					</li>
					<li>
						<p>Weight</p>
						<p>{fabric?.weight}</p>
					</li>

					<li>
						<p>COMPOSITION</p>
						<p>{fabric?.composition}</p>
					</li>
					<li>
						<p>COLOUR</p>
						<p>{fabric?.color}</p>
					</li>
					<li>
						<p>DESIGN</p>
						<p>{fabric?.design}</p>
					</li>
					<li>
						<p>WEAVE</p>
						<p>{fabric?.weave}</p>
					</li>
				</FabricList>
			</div>
		</Grid>
	);
};

// export async function getStaticPaths() {
// 	return {
// 		paths: [{ params: { id: '*' } }],
// 		fallback: true,
// 	};
// }

export async function getServerSideProps({ params }) {
	// Call an external API endpoint to get posts.
	// You can use any data fetching library
	const id = params.id;
	const {
		data: { data },
	} = await axios.get(`http://localhost:3000/api/fabric/${id}`);

	// By returning { props: posts }, the Blog component
	// will receive `posts` as a prop at build time
	return {
		props: {
			fabric: data,
		},
	};
}
export default Fabric;
