import {Clock, Greeting, Focus,Quote, Weather} from "../Components/index"; 
export function Home(){
    return(
        <div className="primary-color">
        <header className="header-bar">
          <Weather/> 
        </header>
        <main className="main-bar">
          <Clock/>
          <Greeting className="greeting"/>
          <Focus/>
        </main>
        <footer className="footer-bar">
          <Quote/>
        </footer>
      </div>
    );
}