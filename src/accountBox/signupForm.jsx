import React, { useContext, useState, useEffect, } from "react";
import Modal from 'react-modal';
import { MdCancel } from "react-icons/md";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
// import fire from "../../firebase";
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

  // // Genre Asking States
  // // For Select Action
  // const [Action, setAction] = useState("")
  // const [ScienceFiction, setScienceFiction] = useState("")
  // const [Mystery, setMystery] = useState("")
  // const [Comedy, setComedy] = useState("")
  // const [Fantasy, setFantasy] = useState("")
  // const [Teenagers, setTeenagers] = useState("")

  // Modal States
  const [modalIsOpen, setIsOpen] = React.useState(false);

  // States
  // const [Sname, setSName] = useState("");
  // const [Semail, setSEmail] = useState("");
  // const [Spassword, setSPassword] = useState("");

  // const {
  //   handleSignup,
  //   emailorPassError,
  //   successfullySignup,

  // } = props;

  // const ShandleSignup = async () => {
  //   if (Sname != "" && Semail != "" && Spassword != "") {

  //     await localStorage.setItem("Sname", Sname)
  //     await localStorage.setItem("Semail", Semail)
  //     await localStorage.setItem("Spassword", Spassword)

  //     handleSignup()
  //     setSName("")
  //     setSEmail("")
  //     setSPassword("")
  //   }
  //   else {
  //     alert("Please fill all the fields")
  //   }


  // }

  // // For get genre from Action
  // const handleAction = (e) => {
  //   setAction(e.target.value)
  //   console.log(Action)
  // }

  // // For get genre from Science Fiction
  // const handleScienceFiction = (e) => {
  //   setScienceFiction(e.target.value)
  //   console.log(ScienceFiction)
  // }

  // // For get genre from Comedy
  // const handleComedy = (e) => {
  //   setComedy(e.target.value)
  //   console.log(Comedy)
  // }

  // // For get genre from Teenagers
  // const handleTeenagers = (e) => {
  //   setTeenagers(e.target.value)
  //   console.log(Teenagers)
  // }

  // // For get genre from Mystery
  // const handleMystery = (e) => {
  //   setMystery(e.target.value)
  //   console.log(Mystery)
  // }

  // // For get genre from Fantasy
  // const handleFantasy = (e) => {
  //   setFantasy(e.target.value)
  //   console.log(Fantasy)
  // }





  // For save genre from Checkbox
  // const SaveGenre = () => {
  //   var getLemail = localStorage.getItem("Semail")
  //   var userId = getLemail.split("@")
  //   // Store genre of book  in firestore
  //   fire.firestore().collection("Genre").doc(userId[0]).set({
  //     Favourite_Genres: [Action, Fantasy, Mystery, ScienceFiction, Comedy, Teenagers]
  //   }).then(
  //     () => {
  //       window.location.reload();
  //     }
  //   )

  // }



  // Modal
  function openModal() {
    setIsOpen(true);
  }


  function closeModal() {
    console.log("CALLLLLLLLEEEEDDDDDD")
    setIsOpen(false);
  }

  // useEffect(() => {
  //   if (successfullySignup) {
  //     openModal()
  //   }

  // }, [successfullySignup])

  return (
    <>
      <BoxContainer>
        <FormContainer>
          <Input type="text" placeholder="Full Name" />
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
        </FormContainer>
        {/* {emailorPassError ?
          <ErrorMsg><p>Please Enter the correct Email or Password</p></ErrorMsg>
          :
          null}
        {successfullySignup ?
          <SuccessMsg><p>Successfully Signup</p></SuccessMsg>
          :
          null} */}
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
