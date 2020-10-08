import React from 'react';
import { FiInstagram, FiFacebook, FiTwitter } from 'react-icons/fi';
import styled from 'styled-components';

const Wrapper = styled.nav`
	display: flex;
	justify-content: space-between;
	padding: 0px 10px;
	margin-top: 80px;
	p {
		text-align: center;
		margin-bottom: 10px;
	}
`;
const InputWrapper = styled.div`
	position: relative;
	border-radius: 20px;
	&:after {
		content: 'OK';
		display: inline-block;
		padding: 11px 12px 7px;
		background: #c4c4c4;
		color: #ffffff;
		border-top-right-radius: 20px;
		border-bottom-right-radius: 20px;
		border: 1px solid #000000;
	}
`;

const Input = styled.input`
	padding: 10px;
	box-sizing: border-box;
	background: #ffffff;
	border-top-left-radius: 20px;
	border: 1px solid #000000;
	border-right: 0;
	border-bottom-left-radius: 20px;
	&:focus {
		outline: none;
	}
`;
const Media = styled.div`
	display: flex;
	& > div {
		min-height: 30px;
		min-width: 30px;
		border-radius: 30px;
		border: 1px solid #6a6a6a;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-right: 20px;
	}

	// svg {
	// 	height: 20px;
	// 	width: 20px;
	// }
`;
const List = styled.ul`
	list-style: none;
	li {
		color: #000000;
		text-decoration-line: underline;
		text-align: center;
		margin-bottom: 20px;
		font-size: 0.85rem;
	}
`;

export default () => (
	<Wrapper>
		<div>
			<p>Newsletter</p>
			<InputWrapper>
				<Input placeholder='*Your email address' />
			</InputWrapper>
		</div>
		<List>
			<li>Contact</li>
			<li>FAQ</li>
			<li>Legal Terms</li>
			<li>Contact Us</li>
		</List>
		<div>
			<p>Follow us</p>
			<Media>
				<div>
					<FiInstagram />
				</div>
				<div>
					<FiFacebook />
				</div>
				<div>
					<FiTwitter />
				</div>
			</Media>
		</div>
	</Wrapper>
);
