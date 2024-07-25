import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import MediumBlueButton from './Button/MediumBlueButton';

function Modal({ onClose, text, title, nav }) {
  const navigate = useNavigate();

  const onClickNavigate = () => {
    onClose();
    navigate(nav);
  };

  return (
    <Container>
      <Text>{text}</Text>
      <MediumBlueButton onClick={onClickNavigate} title={title} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  padding: 50px;
  border-radius: 20px;
  border: 1px solid var(--color-gray-500);
  background-color: var(--background-color);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  z-index: 1001;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Text = styled.div`
  font-size: var(--font-size-lr);
`;

export default Modal;
