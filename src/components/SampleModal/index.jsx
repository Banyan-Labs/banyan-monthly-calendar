import React, { useState } from 'react';
import { ToggleButton, ModalContainer, ModalCard, CloseButton} from './style';

const SampleModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => setIsModalOpen(!isModalOpen);
    return (
        <>
            <ToggleButton onClick={toggleModal}>open me</ToggleButton>
            <ModalContainer isOpen={isModalOpen}>
                <ModalCard>
                    <CloseButton onClick={toggleModal}>Close</CloseButton>
                    Hello universe!
                </ModalCard>
            </ModalContainer>
        </>
    )
}

export default SampleModal
