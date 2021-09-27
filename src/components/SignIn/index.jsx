import React, { useState } from "react";
import {
  ToggleButton,
  ModalContainer,
  ModalCard,
  CloseButton,
  Form,
  Input,
  SubmitButton,
  Link,
} from "./style";

const SignInModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(false);
  };

  return (
    <>
      <ToggleButton onClick={toggleModal}>Sign In</ToggleButton>
      <ModalContainer isOpen={isModalOpen}>
        <ModalCard>
          <CloseButton onClick={toggleModal}>Close</CloseButton>
          <Form onSubmit={onSubmit}>
            <Input
              type="text"
              value={email}
              placeholder="Email"
              onChange={(event) => setEmail(event.target.value)}
            />
            <br />
            <Input
              type="password"
              value={password}
              placeholder="password"
              onChange={(event) => setPassword(event.target.value)}
            />
            <br />
            <Link to="/adminForm">
            <SubmitButton placeholder="submit" type="submit">
              Submit
            </SubmitButton>
            </Link>
          </Form>
        </ModalCard>
      </ModalContainer>
    </>
  );
};

export default SignInModal;
