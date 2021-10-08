import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const ToggleButton = styled.button`
  padding: 8px;
  transition: all 0.2s ease-in-out;
  &:active {
    transform: translateY(2px);
  }
`;
export const ModalContainer = styled.div`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
`;
export const ModalCard = styled.div`
  height: 80%;
  width: 60%;
  background: white;
  border-radius: 10px;
  padding: 2rem;
`;
export const CloseButton = styled.button`
  position: relative;
  top: 0;
  right: 0;
  margin: 10px;
  padding: 10px;
  border: none;
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
  border-radius: 10px;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 5rem;
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
  border-radius: 10px;
`;
export const Input = styled.input`
  padding: 10px;
  border: none;
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
`;
export const SubmitButton = styled.button`
  padding: 16px;
  border: none;
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
  border-radius: 10px;
`;
export const Link = styled(LinkR)`
  padding-right: 20px;
`;
