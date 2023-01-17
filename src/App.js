import "./App.css";
import Quote from "./Quote.js";

function App() {
  //State (état, données)
    const quotes = [
        {id:1,text:"Elementary , my dear Watson ",author:"Sherlock Holmes"},
        {id:2,text:"I think therefore I am",author:"Rene Descartes"},
        {id:3,text:"Big Brother is watching you ",author:"George Orwell"},
        {id:4,text:"You talkin ’ to me?",author:"Travis Bickle"}
    ];
  //Comportements
  //Render : affichage
  return(<>
    <div className="App">
        <h1>Citations</h1>
        <div className ="App">
            { quotes.map (c=><Quote text ={c.text } author ={c.author }/>)};
            </div>
    </div >
  </>)
}

export default App;
