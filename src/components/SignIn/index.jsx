import React, { useState } from "react";
import {
  ToggleButton,
  ModalContainer,
  ModalCard,
  CloseButton,
  Form,
} from "./style";

const SignInModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <ToggleButton onClick={toggleModal}>Sign In</ToggleButton>
      <ModalContainer isOpen={isModalOpen}>
        <ModalCard>
          <CloseButton onClick={toggleModal}>Close</CloseButton>
          <Form>
            <input
              type="text"
              value={email}
              placeholder="Email"
              onChange={(event) => setEmail(event.target.value)}
            />
            <input
              type="password"
              value={password}
              placeholder="password"
              onChange={(event) => setPassword(event.target.value)}
            />
            <button placeholder="submit" type="submit">
              Submit
            </button>
          </Form>
        </ModalCard>
      </ModalContainer>
    </>
  );
};

export default SignInModal;
