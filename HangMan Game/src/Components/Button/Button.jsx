import getButtonStyleType from "./getButtonStyleType";

function Button({text, buttonType='button', styleType, onClickHandler}){
    return(
        <button 
        type={buttonType}
        onClick={onClickHandler}
        className={`mx-2 px-4 py-2 my-2 ${getButtonStyleType(styleType)} rounded-md transition-all`}>
            {text}     

        
        </button>
    )
}

export default Button;