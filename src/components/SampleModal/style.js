import styled from "styled-components";

export const ToggleButton = styled.button`
    padding: 8px;
    transition: all 0.2s ease-in-out;

    &:active {
        transform: translateY(2px);
    }
`;
export const ModalContainer = styled.div`
    display: ${({ isOpen }) => (isOpen ? 'flex': 'none')};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    background: rgba(0, 0, 0, 0.6);
    justify-content: center;
    align-items: center;
`;
export const ModalCard = styled.div`
    height: 80%;
    width: 60%;
    background: rgba(25, 255, 255, 1);
    border-radius: 10px;
`;
export const CloseButton = styled.button`
    position: relative;
    top: 0;
    right: 0;
    margin: 10px;
    padding: 16px;
`;