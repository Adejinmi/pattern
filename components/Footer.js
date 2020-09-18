import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.nav`
	display: flex;
	justify-content: space-between;
`;

export default () => (
	<Wrapper>
		<div>
			<p>Newsletter</p>
		</div>
		<ul>
			<li>Contact</li>
			<li>Contact</li>
			<li>Contact</li>
			<li>Contact</li>
		</ul>
		<div>
			<h3>Follow us</h3>
			<div>instagram , facebook , twitter</div>
		</div>
	</Wrapper>
);
