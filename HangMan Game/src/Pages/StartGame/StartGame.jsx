
import { useNavigate } from "react-router-dom";
import TextInputFormContainer from "../../Components/TextInputForm/TextInputFormContainer";

function StartGame(){

    // hooks -> hooks are special function
    const navigate = useNavigate();

    function handSubmit(value){
        navigate('/play', {state: {wordSelected: value}});
    }
    return(
        <div>
            <h1>Start Game</h1>
            <TextInputFormContainer onSubmit={handSubmit}/>
        </div>
    )
}

export default StartGame;