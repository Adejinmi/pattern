import React from 'react';
import styled from 'styled-components';
// import Radio from 'components/form/Radio';
export const Wrapper = styled.div`
	position: relative;
	background-image: url('/images/background.png');
	min-height: 100vh;
	& > div {
		background: #000000;
		opacity: 0.83;
		max-width: 960px;
		width: 100%;
		margin: 0 auto;
		& > h4 {
			color: #fff;
			margin: 20px;
			text-align: center;
		}
		& > h3 {
			color: #000;
			text-align: center;
			padding: 10px;
			background: #fff;
			font-size: 1.8rem;
		}
	}
`;
export const FormBlock = styled.div`
	padding: 25px;
	input {
	}
`;

export const Input = styled.input`
	position: relative;
	display: block;
	width: 40%;
	min-width: 0;
	padding: 10px 14px;
	color: #fff;
	font-size: 15px;
	line-height: 1.5715;
	background-color: transparent;
	border: 0;
	border-bottom: 1px solid #fff;
	-webkit-transition: all 0.3s;
	transition: all 0.3s;
	box-sizing: border-box;
	margin-bottom: 15px;
	&:focus {
		border: 0;
		border-bottom: 2px solid #fff;
		outline: none;
	}
	&:disabled {
		opacity: 0.5;
	}
	&::placeholder {
		color: #fff;
	}
`;

export const Question = styled.div`
	display: block;
	width: 90%;
	margin: 0 auto;
	h3 {
		color: white;
		font-size: 1.3rem;
		line-height: 1.5;
	}
	div {
		padding: 10px 20px;

		select {
			position: relative;
			display: block;
			width: 40%;
			min-width: 0;
			padding: 10px 14px;
			color: #fff;
			font-size: 15px;
			line-height: 1.5715;
			background-color: transparent;
			border: 0;
			border-bottom: 1px solid #fff;
			-webkit-transition: all 0.3s;
			transition: all 0.3s;
			box-sizing: border-box;
			margin-bottom: 15px;
			&:focus {
				border: 0;
				border-bottom: 2px solid #fff;
				outline: none;
			}
			&:disabled {
				opacity: 0.5;
			}
		}
	}
`;

export const Checkbox = styled.div`
	position: relative;
	div {
		display: flex;
		align-items: center;
		label {
			color: white;
			margin-left: 5px;
			display: block;
		}
	}
`;

export const Radio = styled.div`
	position: relative;
	div {
		display: inline-flex;
		align-items: center;
		label {
			color: white;
			margin-left: 5px;
			display: block;
		}
	}
`;

export default ({}) => (
	<Wrapper>
		<div>
			<h4>PATTERN & PRODUCE</h4>
			<h3>REGISTER</h3>
			<FormBlock>
				<Question>
					<h3>Personal Details</h3>
					<div>
						<Input placeholder='Full Name' />
						<Input placeholder='Date of Birth' />
						<Input placeholder='School' />
						<Input placeholder='Mobile Number' />
						<Input placeholder='Email Address' />
						<Input placeholder='Address' />
						<Input placeholder='Age' />
						<select>
							<option value='male'>Male</option>
							<option value='female'>Female</option>
						</select>
						<Input placeholder='Age' />
					</div>
				</Question>

				<Question>
					<h3>
						Why do you think acquiring an operational skill in garment industry would help you to be better
						equipped for the future?
					</h3>
					<Checkbox>
						<div>
							<input
								type='checkbox'
								id='skill'
								name='skill'
								value='To become self-reliant and financially independent'
							/>
							<label for='vehicle1'> To become self-reliant and financially independent</label>
						</div>
						<div>
							<input
								type='checkbox'
								id='skill'
								name='skill'
								value='To be able to work and sponsor myself through tertiary education'
							/>
							<label for='vehicle1'>
								To be able to work and sponsor myself through tertiary education
							</label>
						</div>
						<div>
							<input
								type='checkbox'
								id='skill'
								name='skill'
								value='To be able to make garments for myself and family, thereby helping to save on cost'
							/>
							<label for='vehicle1'>
								{' '}
								To be able to make garments for myself and family, thereby helping to save on cost
							</label>
						</div>
						<div>
							<input
								type='checkbox'
								id='skill'
								name='skill'
								value='To become self-reliant and financially independent'
							/>
							<label for='vehicle1'> To become self-reliant and financially independent</label>
						</div>

						<div>
							<input
								type='checkbox'
								id='skill'
								name='skill'
								value='To understand the industrial process of garment production, thereby gathering experience for future employment'
							/>
							<label for='vehicle1'>
								To understand the industrial process of garment production, thereby gathering experience
								for future employment
							</label>
						</div>

						<div>
							<input
								type='checkbox'
								id='skill'
								name='skill'
								value='To develop a career in fashion and garment making'
							/>
							<label for='vehicle1'>To develop a career in fashion and garment making</label>
						</div>
					</Checkbox>
				</Question>
				<Question>
					<h3>
						Will you be able to devote your time to learn garment making if given the opportunity to learn
						at Pattern & Produce?
					</h3>
					<Radio>
						<div>
							<input type='radio' name='learn' value='yes' />
							<label for='garmet'>Yes</label>
						</div>

						<div>
							<input type='radio' name='learn' value='no' />
							<label for='learn'>No</label>
						</div>
					</Radio>
				</Question>

				<Question>
					<p>How often would you be available to learn?</p>
					<Radio
						options={[
							{ name: 'Bespoke', value: 'bespoke' },
							{ name: 'Made To Measure', value: 'made to measure' },
						]}
						label='Appointment Type'
					/>
				</Question>

				<Question>
					<p>Will your parents be able to afford the cost of the training and resources required</p>
					<Radio
						options={[
							{ name: 'Bespoke', value: 'bespoke' },
							{ name: 'Made To Measure', value: 'made to measure' },
						]}
						label='Appointment Type'
					/>
				</Question>

				<Question>
					<p>How often would you be available to learn?</p>
					<Radio
						options={[
							{ name: 'Bespoke', value: 'bespoke' },
							{ name: 'Made To Measure', value: 'made to measure' },
						]}
						label='Appointment Type'
					/>
				</Question>

				<Question>
					<p>Will your parents be able to afford the cost of the training and resources required</p>
					<Radio
						options={[
							{ name: 'Bespoke', value: 'bespoke' },
							{ name: 'Made To Measure', value: 'made to measure' },
						]}
						label='Appointment Type'
					/>
				</Question>

				<Question>
					<h3>PARENTS / GUARDIANS CONTACT</h3>
					<Input placeholder='Full Name' />
					<Input placeholder='Mobile Number' />
					<Input placeholder='Address' />
				</Question>
			</FormBlock>
		</div>
	</Wrapper>
);
