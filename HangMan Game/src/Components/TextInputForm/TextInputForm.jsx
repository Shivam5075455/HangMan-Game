// Presentation component
import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";

function TextInputForm({handleFormSubmit,handleTextInputChange,value,inputType='text',setInputType}) {


    return (
        <form className="flex items-end" onSubmit={handleFormSubmit}>
            <div className="mr-2 flex-1">
                <TextInput
                    label="Enter a word or phrase"
                    type={inputType}
                    value={value}
                    onChange={handleTextInputChange}
                />
            </div>
            <div>
                <Button
                    text= {inputType === 'password' ? 'Show' : 'Hide'}
                    styleType='warning'
                    onClickHandler={() => setInputType(inputType === 'password' ? 'text' : 'password')}
                />
            </div>
            <div className="flex">
                <Button
                    text="OK"
                    buttonType="submit"
                    styleType="primary"
                />
            </div>

        </form>
    )
}

export default TextInputForm;