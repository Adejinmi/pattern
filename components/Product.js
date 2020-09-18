import React from 'react';
import material from 'public/images/material.png';
import styled from 'styled-components';

export const Wrapper = styled.div`
	position: relative;
`;
export default ({ img }) => (
	<Wrapper>
		<img src={img || material} />
		<h4>754031</h4>
		<p>ETON</p>
	</Wrapper>
);
