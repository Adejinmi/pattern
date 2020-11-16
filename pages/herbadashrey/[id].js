import React from 'react';
import material from 'public/images/material.png';
import { Grid, GridEqual } from 'components/Styles';
import styled from 'styled-components';
import man from 'public/images/image35.png';

export const Wrapper = styled.div`
	position: relative;
`;

export const StickyContent = styled.div`
	position: relative;
	& > div {
		background: #f6f6f6;
		border-radius: 2px;
	}
`;
export default ({}) => (
	<Grid columns={['1fr', '1fr']} gap='30px'>
		<div>
			<img src={man} />
		</div>

		<StickyContent>
			<h3>DIOR AND SHAWN SHIRT</h3>
			<h5>Black and White Silk Twill</h5>
			<div>
				<h4>Description</h4>
				<p>
					he all-over DIOR AND SHAWN print adorns this black and white short-sleeved shirt. Crafted from silk
					twill, it is cut in a relaxed fit and pairs well with cargo pants and shorts.
				</p>
				<ul>
					<li>Black and white all-over DIOR AND SHAWN print </li>
					<li>5.5 cm/2" collar</li> <li>Short sleeves</li> <li>Hidden button placket</li>{' '}
					<li>'DIOR' signature mother-of-pearl buttons</li> <li>Chest patch pocket</li>{' '}
					<li>Straight hemline</li> <li>Relaxed fit</li>
					<li>100% silk Made in Italy</li>
				</ul>
			</div>
		</StickyContent>
	</Grid>
);
