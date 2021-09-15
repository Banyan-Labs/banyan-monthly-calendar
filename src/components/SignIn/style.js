import styled from "styled-components";

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
  padding: 16px;
`;
export const Form = styled.div`
  display: flex;
  flex-direction: column;
  /* column-gap: 20px; */
  padding: 10rem;
`;
// export const Input = styled.div `
// padding: 1px;
// ` 
