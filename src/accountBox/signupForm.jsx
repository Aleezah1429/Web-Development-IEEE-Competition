import React, { useContext, useState, useEffect, } from "react";
import Modal from 'react-modal';
import { MdCancel } from "react-icons/md";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
  ErrorMsg,
  SuccessMsg
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.75)'
  },
}


export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);

  // Modal States
  const [modalIsOpen, setIsOpen] = React.useState(false);


  // Modal
  function openModal() {
    setIsOpen(true);
  }


  function closeModal() {
    console.log("CALLLLLLLLEEEEDDDDDD")
    setIsOpen(false);
  }

  return (
    <>
      <BoxContainer>
        <FormContainer>
          <Input type="text" placeholder="Full Name" />
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
        </FormContainer>
        <Marginer direction="vertical" margin={10} />
        <SubmitButton >Signup</SubmitButton>
        <Marginer direction="vertical" margin="1em" />
        <MutedLink href="#">
          Already have an account?
          <BoldLink onClick={switchToSignin}>
            Signin
          </BoldLink>
        </MutedLink>
      </BoxContainer>
    </>
  );
}
