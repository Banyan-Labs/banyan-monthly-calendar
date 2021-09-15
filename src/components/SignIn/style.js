import styled from "styled-components";

export const ModalContainer = styled.div`
  display: ${({toggleModal}) => toggleModal?'block':'none'};
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
`;
// export const ModalWrapper = styled.div `
// padding: 1px;
// `
