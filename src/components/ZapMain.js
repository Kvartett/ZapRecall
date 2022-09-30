import styled from "styled-components";
import logo from "../Images/logo.png"
import Perguntas from "./Perguntas";


export default function ZapMain() {
    function Logo(){
        return (
            <LogoContainer>
                <img src={logo} />
                <h1>ZapRecall</h1>
            </LogoContainer>
        )
    }

    function Footer(){
        return(
            <FooterConcluidos>
                <ContainerBotoes>
                    <NaoLembrei>Não lembrei</NaoLembrei>
                    <QuaseNaoLembrei>Quase não lembrei</QuaseNaoLembrei>
                    <Zap>Zap!</Zap>
                </ContainerBotoes>
                <div>0/4 CONCLUÍDOS</div>
            </FooterConcluidos>
        )
    }

  return (
    <ScreenContainer>
        <Logo />
        <Perguntas />
        <Footer />
    </ScreenContainer>
  );
}



const ScreenContainer = styled.div`
    background-color: #FB6B6B;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px;
    padding: 0px;
    padding-bottom: 200px;
`

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 40px 0 20px 0;
    img {
        width: 52px;
    }
    h1 {
        font-family: 'Righteous';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
        color: #FFFFFF;
        margin-left: 20px;
    }
`
const FooterConcluidos = styled.div`
    width: 100%;
    min-height: 50px;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Recursive';
    font-weight: 400;
    font-size: 18px;
    color: #333333;
    padding: 10px;
`

const ContainerBotoes = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-between;
    margin: 20px;
    button {
        width: 90px;
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: #FFFFFF;
        border-radius: 5px;
        border: 1px solid black;
        padding:5px;
    }
`
const verde = "#2FBE34";

const laranja = "#FF922E";

const vermelho = "#FF3030";

const Zap = styled.button`
    background-color: ${verde}
`

const QuaseNaoLembrei = styled.button`
    background-color: ${laranja}
`

const NaoLembrei = styled.button`
    background-color: ${vermelho}
`