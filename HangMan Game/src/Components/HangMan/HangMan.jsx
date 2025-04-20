import leve1 from "../../assets/Images/3.jpg";
import leve2 from "../../assets/Images/4.jpg";
import leve3 from "../../assets/Images/5.jpg";
import leve4 from "../../assets/Images/6.jpg";
import leve5 from "../../assets/Images/7.jpg";
import leve6 from "../../assets/Images/8.jpg";
import leve7 from "../../assets/Images/9.jpg";
import leve8 from "../../assets/Images/10.jpg";

function HangMan({step}){
    const images = [leve1, leve2, leve3, leve4, leve5, leve6, leve7, leve8];
    return(
        <div className="w-[300px] h-[300px] mx-3">
            <img src={step >= images.length ? images[images.length-1] : images[step]} className="w-1/2 h-auto" />
        </div>
    )
}

export default HangMan;