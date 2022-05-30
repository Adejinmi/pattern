import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import { FlexCenterSpaceBetween } from '../pages/herbadashrey/node_modules/components/Styles';
import { FiX } from 'react-icons/fi';

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
	padding: 20px;
	position: relative;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.04);
	width: 500px;
	max-width: 700px;
	overflow: hidden;
	transition: height 4s ease-in-out !important;
	min-height: 20vh;
	max-height: 60vh;
	overflow-y: scroll;
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

const CloseButton = styled.button`
	width: 35px;
	height: 35px;
	border: 0;
	border-radius: 5px;
	display: flex;
	user-select: none;

	& span {
		font-size: 24px;
		margin: auto;
	}
`;

const Modal = ({ handleClose, show = false, title, children, style, hideClose }) => {
	const [showModal, setShowModal] = React.useState(show);
	const [showEntrance, setShowEntrance] = React.useState(show);
	const [showExit, setShowExit] = React.useState(!show);

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

	return (
		<Modalbackdrop show={showModal} showEntrance={showEntrance} showExit={showExit}>
			<ModalContainer style={{ ...style }} showEntrance={showEntrance} showExit={showExit}>
				<FlexCenterSpaceBetween>
					<ModalTitle>{title}</ModalTitle>
					{!hideClose && <FiX onClick={modalCloseHandler} size='1rem' />}
				</FlexCenterSpaceBetween>
				<div style={{ marginTop: '25px' }}>{children}</div>
			</ModalContainer>
		</Modalbackdrop>
	);
};

export default Modal;
