import React, { useState } from "react";
import { useHistory } from "react-router";
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
import { useAuth0 } from '@auth0/auth0-react';

const SignInModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const {  loginWithRedirect, isAuthenticated, isLoading, user } =
  useAuth0();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    toggleModal();
    history.push('/adminForm');
  };

  return (
    <>
     {!isAuthenticated && <ToggleButton onClick={()=>loginWithRedirect()}>Sign In</ToggleButton>}
      <ModalContainer isOpen={isModalOpen}>
        <ModalCard>
          <CloseButton onClick={toggleModal}>X</CloseButton>
          <Form onSubmit={onSubmit}>
            <Input
              type="text"
              value={email}
              placeholder="Email"
              onChange={(event) => setEmail(event.target.value)}
              required
            />
            <br />
            <Input
              type="password"
              value={password}
              placeholder="password"
              onChange={(event) => setPassword(event.target.value)}
              required
            />
            <br />
            <SubmitButton placeholder="submit" type="submit">
              Submit
            </SubmitButton>
          </Form>
        </ModalCard>
      </ModalContainer>
    </>
  );
};

export default SignInModal;
