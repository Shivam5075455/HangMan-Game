function getButtonStyleType(styleType){
    const primaryButtonStyling = "bg-blue-500 border border-blue-700 text-white hover:bg-blue-700 hover:border-blue-900 ";
    const secondaryButtonStyling = "bg-gray-500 border border-gray-700 text-white hover:bg-gray-700 hover:border-gray-900 ";
    const warningButtonStyling = "bg-yellow-500 border border-yellow-700 text-white hover:bg-yellow-700 hover:border-yellow-900 ";

    if(styleType=== 'primary'){
        return primaryButtonStyling;
    }else if(styleType === 'secondary'){
        return secondaryButtonStyling;
    }else{
        return warningButtonStyling;
    }
    
}

export default getButtonStyleType;