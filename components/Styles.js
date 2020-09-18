import React from 'react';
import styled from 'styled-components';

export const Grid = styled.div`
	display: grid;
	grid-template-columns: ${(props) => (props.columns || []).join(' ')};
	grid-column-gap: ${({ gap }) => gap || 0};
	height: fit-content;
	align-items: center;

	@media (max-width: 960px) {
		display: ${({ isNotResponsive }) => (isNotResponsive ? 'grid' : 'block')};
		grid-auto-flow: ${({ isReverse }) => (!isReverse ? 'none' : 'dense')};
	}
`;

export const GridEqual = styled(Grid)`
	grid-template-columns: ${(props) => `repeat(${props.count || 3} , 1fr)`};
	grid-row-gap: ${({ gap }) => gap || 0};
`;

export const Container = styled.div`
	max-width: ${({ maxWidth }) => (maxWidth ? maxWidth + 'px' : '100%')};
	width: 100%;
	position: relative;
	padding: 0px 20px;
	background-color: #fff;
`;

export const Section = styled.section`
	width: 100%;
	position: relative;
	margin: 70px auto;
`;

export const H2 = styled.div`
	font-size: 1.6rem;
	text-transform: uppercase;
	margin-bottom: 20px;
`;

export const CenterText = styled.div`
	color: #000000;
	text-align: center;
`;

export const Button = styled.div`
	background: #ffffff;
	border: 1px solid #040404;
	box-sizing: border-box;
	border-radius: 50px;
	text-align: center;
	padding: 10px;
	font-size: 0.75rem;
`;
