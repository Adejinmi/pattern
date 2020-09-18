import React from 'react';
import { CenterText, GridEqual } from '../components/Styles';
import image1 from 'public/images/image1.png';
import material from 'public/images/material.png';
import styled from 'styled-components';

export const MaterialWrapper = styled.div`
	position: relative;
`;
const Material = () => (
	<MaterialWrapper>
		<img src={material} />
		<h4>754031</h4>
		<p>ETON</p>
	</MaterialWrapper>
);

const Fabric = () => (
	<>
		<GridEqual count={3}>
			<Material />
			<Material />
			<Material />
			<Material />
			<Material />
			<Material />
		</GridEqual>
	</>
);

export default Fabric;
