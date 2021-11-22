import React from 'react';
import styled from 'styled-components';

export const Grid = styled.div`
	display: grid;
	grid-template-columns: ${(props) => (props.columns || []).join(' ')};
	grid-column-gap: ${({ gap }) => gap || 0};
	height: fit-content;
	align-contents: start;

	p{
		opacity: 0.7;
	}

	@media (max-width: 960px) {
		display: ${({ isNotResponsive }) => (isNotResponsive ? 'grid' : 'flex')};
		flex-wrap: wrap;
		justify-content: space-around;
		flex-direction: ${({isRev}) => (isRev ? 'column-reverse' : 'column')};
		grid-auto-flow: ${({ isReverse }) => (!isReverse ? 'none' : 'dense')};
		text-align: center;
	}

	@media (max-width: 96	0px) {
	display: ${({ isH }) => (isH ? 'flex' : 'block')};
		flex-wrap: wrap;
		justify-content: space-around;
		text-align: ${({ isH }) => (isH ? 'left' : 'left')};
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

export const Button = styled.button`
	background: #ffffff;
	border: 1px solid #040404;
	box-sizing: border-box;
	border-radius: 50px;
	text-align: center;
	padding: 10px;
	font-size: 0.75rem;
	cursor: pointer;
`;
export const ButtonBlack = styled(Button)`
	background-color: #000;
	border: 3px;
	border-radius: 0px;
	padding: 12px 25px;
	color: #fff;
	font-size: 0.95rem;
	&:hover {
		background-color: #fff;
		color: black;
		transition: 0.3s all;
	}
`;

export const FlexCenterSpaceBetween = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: ${(props) => props.marginTop || '0px'};
	flex-wrap: wrap;
	flex-grow: 1;
	@media (max-width: 1200px) {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
	}
	@media (max-width: 960px) {
		display: block;
	}
`;
