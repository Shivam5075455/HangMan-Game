// Container component for TextInputForm(presentation layer)

import {useState} from 'react'
import TextInputForm from './TextInputForm';


function TextInputFormContainer({onSubmit}){
    const [value,setValue] = useState('');
    const [inputType, setInputType] = useState('password');
    function handleFormSubmit(event){
        event.preventDefault();
        console.log("Form submitted",value)
        onSubmit ?.(value)

    }

    function handleTextInputChange(event){
        console.log('Text input changed')
        console.log(event.target.value)
        setValue(event.target.value);// whenever I type in the input filed, it will update the value

    }
    
    return(
        // calling the presentation layer
        <TextInputForm
        handleFormSubmit = {handleFormSubmit}
        handleTextInputChange = {handleTextInputChange}
        value={value}
        inputType={inputType}
        setInputType={setInputType}
        />
    )
}

export default TextInputFormContainer;