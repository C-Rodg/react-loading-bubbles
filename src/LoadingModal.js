// Libraries
import React from 'react';
import styled from 'styled-components';

// Components
import Modal from './Modal';
import LoadingBubbles from './LoadingBubbles';

// Styles
const ModalWrapper = styled.div`
	position: fixed;
	z-index: 99;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	padding: 10px;
	background-color: rgba(0, 0, 0, 0.75);
	display: flex;
	justify-content: center;
	align-items: center;
`;

const ModalCard = styled.div`
	width: 280px;
	height: 280px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
	background-color: #fff;
	border-radius: 6px;
	color: #333;
	text-align: left;
	padding: 15px;
	flex-direction: column;
	box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.15);
`;

// Components
function LoadingModal({ size, color }) {
	return (
		<Modal>
			<ModalWrapper>
				<ModalCard>
					<LoadingBubbles size={size} color={color} />
				</ModalCard>
			</ModalWrapper>
		</Modal>
	);
}

export default LoadingModal;
