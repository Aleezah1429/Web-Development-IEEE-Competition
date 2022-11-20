import logo from './logo.svg';
import './App.css';
import styled from "styled-components";
import { AccountBox } from "./accountBox";
import background from "./assets/bg.jpg";


const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;




function App() {
  return (
    <AppContainer
      style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        paddingBottom: "5%",
        paddingTop: "3%",
      }}
    >
      <AccountBox/>
    </AppContainer>
  );
}

export default App;
