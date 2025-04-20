import { Route, Routes } from "react-router-dom";
import TextInputFormContainer from "./Components/TextInputForm/TextInputFormContainer";
import PlayGame from "./Pages/PlayGame/PlayGame";
import StartGame from "./Pages/StartGame/StartGame";
import MaskedText from "./Components/MaskedText/MaskedText";

function App(){
  return(
    // <div>
    //   <h1 className="font-semibold text-3xl mx-9" >Welcome to Hangman</h1> 
    //   <TextInputFormContainer onSubmit={(value) => console.log("Value coming from the hidden form is ",value)}/>
    // </div>



    <Routes>
      <Route path="/" element={<StartGame/>} />
      <Route path="/start" element={<StartGame/>} />
      <Route path="/play" element={<PlayGame/>} />
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
 
  )
}

export default App;
