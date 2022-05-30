import React from 'react';
import styled from 'styled-components';
import { FlexCenterSpaceBetween } from 'components/Styles';

const Wrapper = styled.div`
	position: relative;
	margin-bottom: 30px;
	width: fit-content;

	label {
		display: block;
		margin-bottom: 5px;
	}
	div {
		margin-right: 30px;
		label {
			display: inline-block;
		}
	}
`;
export default ({ label, options = [], onChange, error, name, value }) => {
	return (
		<Wrapper>
			<label>{label}</label>
			<FlexCenterSpaceBetween>
				{options.map((option, i) => (
					<div>
						<input
							type='radio'
							id={option?.value}
							name={name}
							value={option?.value}
							onChange={onChange}
							disabled={option?.disabled}
						/>
						<label for={option?.name}>{option.name}</label>
					</div>
				))}
			</FlexCenterSpaceBetween>

			{error ? <p className='error'>{error}</p> : ''}
		</Wrapper>
	);
};
