import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import { FlexCenterSpaceBetween, Grid, ButtonBlack } from 'components/Styles';
import { FiX } from 'react-icons/fi';
import Input from 'components/form/Input';
import TextArea from 'components/form/TextArea';
import Radio from './form/Radio';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { convertCompilerOptionsFromJson } from 'typescript';

export const appointmentSchema = yup.object({
	firstName: yup.string().required('First name is required'),
	lastName: yup.string().required('Last name is required'),
	email: yup.string().email('Must be a valid email').required('Email is required'),
	phoneNumber: yup.string().required('Phone Number is required'),
	address: yup.string().required('Address is required'),
	message: yup.string(),
	appointmentType: yup.string().required('Appointment type is required'),
});

const entranceBackdropAnimation = keyframes`
  from {
    background: rgba(255, 255, 255, 0);
  }

  to {
    background: rgba(0, 0, 0, 0.4);
  }
`;

const exitBackdropAnimation = keyframes`
  from {
    background: rgba(230, 23, 115, .03);
  }

  to {
    background: rgba(255, 255, 255, 0);
  }
`;

const entranceContainerAnimation = keyframes`
  0% {
    transform: translateY(80px);
    opacity: 0;
  }

  100% {
    transform: translateY(0px);
    opacity: 1;
  }
`;

const exitContainerAnimation = keyframes`
  from {
    transform: translateY(0px);
    opacity: 1;
  }

  to {
    transform: translateY(180px);
    opacity: 0;
  }
`;

const Modalbackdrop = styled.div`
	background: rgba(230, 23, 115, 0.03);
	width: 100vw;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 9999;
	background: rgba(255, 0, 0, 0.02);
	padding: 20px;

	${({ showEntrance }) =>
		showEntrance &&
		css`
			animation: ${entranceBackdropAnimation} 0.6s ease-in forwards;
		`}

	${({ showExit }) =>
		showExit &&
		css`
			animation: ${exitBackdropAnimation} 0.4s ease-out;
		`}
  display: ${(props) => (props.show ? 'flex' : 'none')};
`;

const ModalContainer = styled.section`
	margin: auto;
	background: #fff;
	border-radius: 10px;
	padding: 40px;
	position: relative;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.04);
	width: 100%;
	max-width: 960px;
	overflow: hidden;
	height: 90vh;
	overflow-y: scroll;
	p:first-child {
		margin-bottom: 20px;
	}
	${({ showEntrance }) =>
		showEntrance &&
		css`
			animation: ${entranceContainerAnimation} 0.2s ease-in;
		`}

	${({ showExit }) =>
		showExit &&
		css`
			animation: ${exitContainerAnimation} 0.4s ease-out;
		`}
`;

const ModalTitle = styled.h1`
	color: #29033e;
	font-family: Inter;
	font-size: 18px;
	margin: 0;
	user-select: none;
	font-weight: 400 !important;
`;

const Button = styled.button`
text-align: center;
background-color: dimgray;
color: white;
box-shadow: 1px 2px 4px rgba(0,0,0,0.5);
width: 350px;
font-size: 12px;
border-style: none;
border-radius: 5px;
padding: 20px;
margin-top: 50px;
cursor: pointer;
@media(max-width:387px){
	width: 90%;
}
`;

const Modal = ({ handleClose, show = false, title, style, hideClose}) => {
	const [showModal, setShowModal] = React.useState(show);
	const [showEntrance, setShowEntrance] = React.useState(show);
	const [showExit, setShowExit] = React.useState(!show);
	const [loading, setLoading] = React.useState(false);

	const { handleSubmit, handleChange, values, errors } = useFormik({
		initialValues: {
			firstName: '',
			lastName: '',
			email: '',
			phoneNumber: '',
			address: '',
			message: '',
			appointmentType: '',
		},
		validationSchema: appointmentSchema,
		onSubmit: async (values) => {
			setLoading(true);
			const {
				data: { data },
			} = await axios.post(`https'://patternandproduce.herokuapp.com/api/appointment`, values);
			
		

			setLoading(false);
		},
	});

	const modalCloseHandler = () => {
		setShowEntrance(false);
		setShowExit(true);
		setTimeout(() => {
			setShowModal(false);
			!hideClose && handleClose();
		}, 400);
	};

	React.useEffect(() => {
		if (show) {
			setShowModal(show);
			setShowEntrance(show);
			setShowExit(!show);
		} else {
			modalCloseHandler();
		}
	}, [show]);

	console.log(values, errors);

	return (
		<Modalbackdrop show={showModal} showEntrance={showEntrance} showExit={showExit}>
			<ModalContainer style={{ ...style }} showEntrance={showEntrance} showExit={showExit}>
				<FlexCenterSpaceBetween style={{ marginBottom: '20px' }}>
					<ModalTitle style={{textAlign:'center'}}>APPOINTMENT BOOKING FORM</ModalTitle>

					{!hideClose && <FiX onClick={modalCloseHandler} style={{position: 'absolute', top:'30px', right:"30px", cursor:'pointer'}} size='1rem' />}
				</FlexCenterSpaceBetween>
				<p style={{textAlign:'center'}}>
					Thank you for choosing Pattern & Produce. 
					Please fill in the below form to book an appointment with us. 
					We try as much as possible to respond to messages within 24hrs. Thank you 
				</p>
				<div style={{ marginTop: '25px', textAlign:'center'}} >
					<form onSubmit={handleSubmit}>
						<Grid columns={['1fr', '1fr']} gap='25px' style={{textAlign:'left'}}>
							<Input
								label='First Name'
								name='firstName'
								value={values.firstName}
								error={errors?.firstName}
								onChange={handleChange}
							/>
							<Input
								label='Last Name'
								name='lastName'
								value={values.lastName}
								error={errors?.lastName}
								onChange={handleChange}
							/>
						</Grid>

						<Grid columns={['1fr', '1fr']} gap='25px' style={{textAlign:'left'}}>
							<Input
								label='Email Address'
								name='email'
								value={values.email}
								error={errors?.email}
								onChange={handleChange}
							/>
							<Input
								label='Phone Number'
								name='phoneNumber'
								value={values.phoneNumber}
								error={errors?.phoneNumber}
								type='number'
								onChange={handleChange}
							/>
						</Grid>

						<Grid style={{textAlign:'left'}} >
							<Input 
								
								label='Address'
								name='address'
								value={values.address}
								error={errors?.address}
								onChange={handleChange}
						/>
						</Grid>
						<TextArea style={{textAlign:'left'}}

							label='Message'
							row={9}
							name='message'
							value={values.message}
							onChange={handleChange}
						/>
					<Grid style={{textAlign:'left'}}>
						<Radio 
							options={[
								{ name: 'Bespoke', value: 'bespoke' },
								{ name: 'Made To Measure', value: 'made to measure' },
							]}
							name='appointmentType'
							label='Appointment Type'
							value={values.appointmentType}
							error={errors?.appointmentType}
							onChange={handleChange}
						/>
					</Grid>
						<Button>BOOK AN APPOINTMENT WITH US</Button>
					</form>
				</div>
			</ModalContainer>
		</Modalbackdrop>
	);
};

export default Modal;
