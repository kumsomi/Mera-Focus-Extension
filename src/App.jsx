import './App.css';
import {Clock, Greeting, Focus,Quote, Weather, UserOnboarding} from "./Components/index"; 

function App() {
  return (
    <div>
      <h1>Mera Focus</h1>
      <header>
        <Weather></Weather>    
      </header>
      <main>
        <Clock></Clock>
        <UserOnboarding></UserOnboarding>
        <Greeting></Greeting>
        <Focus></Focus>
      </main>
      <footer>
        <Quote></Quote>
      </footer>
    </div>
  );
}

export default App;
