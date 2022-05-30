import React from 'react';
import styled from 'styled-components';
import eyeIcon from 'assets/icons/eye-open.svg';
import eyeCloseIcon from 'assets/icons/eye-close.svg';

const InputWrapper = styled.div`
	position: relative;
	margin-bottom: 35px;
	width: 100%;
	label {
		margin-bottom: 7px;
		display: block;
		font-size: 0.9rem;
	}
	& > div {
		position: relative;
	}
	img {
		position: absolute;
		right: 10px;
		bottom: 12px;
	}
`;

const Input = styled.input`
	position: relative;
	display: inline-block;
	width: 100%;
	min-width: 0;
	padding: 10px 14px;
	color: rgba(0, 0, 0, 0.65);
	font-size: 13px;
	line-height: 1.5715;
	background-color: #fff;
	background-image: none;
	border: 1px solid rgba(104, 110, 121, 0.32);
	-webkit-transition: all 0.3s;
	transition: all 0.3s;
	display: -ms-inline-flexbox;
	display: inline-flex;
	box-sizing: border-box;
	text-align: left;
	&:focus {
		border: 1px solid #201a56;
		outline: none;
	}
	&:disabled {
		opacity: 0.5;
	}
`;

const InputField = ({
	label,
	type = 'text',
	required,
	name,
	onChange,
	value,
	error,
	placeholder = '',
	min,
	max,
	id,
	disabled,
}) => {
	const [isVisible, setIsVisible] = React.useState(false);

	return (
		<InputWrapper>
			{/* {topText && <InputHeader>{topText}</InputHeader>} */}
			{label && (
				<label>
					{label}
					{required && (
						<span className='error' style={{ marginLeft: '5px' }}>
							*
						</span>
					)}
				</label>
			)}

			<div>
				<Input
					type={isVisible ? 'text' : type}
					placeholder={placeholder}
					name={name}
					onChange={onChange}
					value={value}
					data-test-id='input'
					min={min}
					max={max}
					id={id}
					disabled={disabled}
				/>

				{type === 'password' && (
					<img
						src={isVisible ? eyeIcon : eyeCloseIcon}
						alt=''
						onClick={() => setIsVisible((isVisible) => !isVisible)}
						width='15px'
					/>
				)}
			</div>

			{error ? <p className='error'>{error}</p> : ''}
		</InputWrapper>
	);
};

export default InputField;
