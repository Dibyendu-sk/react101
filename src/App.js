import ProfileCard from "./ProfileCard";
import AlexaLogo from "./images/alexa.png";
import CortanaLogo from "./images/cortana.png";
import SiriLogo from "./images/siri.png";
import "bulma/css/bulma.css"
function App(){
    return(
        <div>
            <section className="hero is-primary is-small">
                <div className="hero-body">
                    <p className="title">Personal AI Assistance</p>
                </div>
            </section>
            <div className="container">
                <section>
                    <div className="columns">
                        <div className="column is-3"><ProfileCard
                            title="title1"
                            handle="@handle1"
                            image={AlexaLogo}
                            description={"Made By Amazon"}
                        />
                        </div>
                        <div className="column is-3"><ProfileCard
                            title="title2"
                            handle="@handle2"
                            image={SiriLogo}
                            description={"Made By Apple"}
                        />
                        </div>
                        <div className="column is-3"><ProfileCard
                            title="title3"
                            handle="@handle3"
                            image={CortanaLogo}
                            description={"Made By Microsoft"}
                        />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default App;