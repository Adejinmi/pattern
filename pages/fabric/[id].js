import React from 'react';
import { CenterText, Grid } from 'components/Styles';
import material from 'public/images/material.png';
import styled from 'styled-components';
import fabric from 'public/images/material.png';

export const FabricList = styled.ul`
	position: relative;
	li {
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid #e2e2e2;
		padding: 5px 0;
	}
`;

const Fabric = () => (
	<>
		<Grid columns={['1fr', '1fr']} gap='20px'>
			<img src={fabric} />
			<div>
				<FabricList>
					<li>
						<p>AVAILABILITY</p>
						<button>AVAILABILITY</button>
					</li>
					<li>
						<p>Weight</p>
						<p>280G / MEDIUM (260-320GR)</p>
					</li>
					<li>
						<p>Width</p>
						<p>150CM</p>
					</li>
					<li>
						<p>COMPOSITION</p>
						<p>100% WOOL</p>
					</li>
					<li>
						<p>COLOUR</p>
						<p>BLUE MEDIUM</p>
					</li>
					<li>
						<p>DESIGN</p>
						<p>GLEN CHECK</p>
					</li>
					<li>
						<p>WEAVE</p>
						<p>2/2 TWILL</p>
					</li>
					<li>
						<p>DYE</p>
						<p>YARN DYE</p>
					</li>
					<li>
						<p>CLOTH LABEL</p>
						<p>YARN DYE</p>
					</li>
					<li>
						<p>SELVEDGE</p>
						<p>SCABAL * SUPER | 30’S</p>
					</li>
				</FabricList>
			</div>
		</Grid>
	</>
);

export default Fabric;
