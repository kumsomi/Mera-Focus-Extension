import {Clock, Greeting, Focus,Quote, Weather, GoogleLink} from "../Components/index"; 
export function Home(){
    return(
        <div className="primary-color">
        <header className=" header-bar">
          <GoogleLink/>
          <Weather/> 
        </header>
        <main>
          <div className="main-bar">
          <Clock/>
          <Greeting className="greeting"/>
          <Focus/>
          </div>
          <Quote/>
        </main>
        <footer className="footer-bar">
        </footer>
      </div>
    );
}