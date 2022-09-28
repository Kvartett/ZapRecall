import logo from "../Images/logo.png"


export default function ZapMain() {
    function Logo(){
        return (
            <div className="logo-container">
                <img src={logo} />
                <h1>ZapRecall</h1>
            </div>
        )
    }

    function Pergunta(){
        return (
            <>
                <div className="pergunta-fechada">
                    <p>Pergunta 1</p>
                </div>
                <div className="pergunta-fechada">
                    <p>Pergunta 2</p>
                </div>
                <div className="pergunta-fechada">
                    <p>Pergunta 3</p>
                </div>
                <div className="pergunta-fechada">
                    <p>Pergunta 4</p>
                </div>
            </>
        )
    }

    function Footer(){
        return(
            <div className="footer-concluidos">
                <div className="container-botoes">
                    <button>Não lembrei</button>
                    <button>Quase não lembrei</button>
                    <button className="verde">Zap!</button>
                </div>
            </div>
        )
    }

  return (
    <div className="screen-container">
        <Logo />
        <Pergunta />
        <Footer />
    </div>
  );
}
