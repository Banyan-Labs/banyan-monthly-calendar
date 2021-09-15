import React, { useState } from "react";
import { ModalContainer } from "./style";
// import Modal from "react-modal";
// import { Button } from "../footer/style";
const SignInModal = ({ show,toggleModal,setToggleModal,email,setEmail,password,setPassword }) => {
 

  //
  //   const onSubmit = (e) => {
  //     e.preventDefault();
  return (
    <ModalContainer isOpen={show}>
      <button onClick={() => setToggleModal(false)}toggleModal = {toggleModal}>X</button>
      <form>
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
        <button placeholder="signin" type="signin">
          Sign In
        </button>
      </form>
      {/* </Modal> */}
    </ModalContainer>
    // </div>
    //     <ModalContainer>
    //         <Button onClick={openModal}>Open Modal</Button>
    //  <ModalWrapper
    //         isOpen={modalIsOpen}
    //         onRequestClose={closeModal}
    //         contentLabel="Sign In Modal"
    //       >
    //         <button onClick={closeModal}>X</button>
    //         <form onSubmit={onSubmit}>
    //           <input
    //             type="text"
    //             value={user.email}
    //             placeholder="Email"
    //             onChange={onChangeUser}
    //           />
    //           <br />
    //           <input
    //             type="text"
    //             value={user.password}
    //             placeholder="password"
    //             onChange={onChangeUser}
    //           />
    //           <button placeholder="signin" type="signin">
    //             Sign In
    //           </button>
    //         </form>
    //       </ModalWrapper>
    //     </ModalContainer>
  );
};
export default SignInModal;
