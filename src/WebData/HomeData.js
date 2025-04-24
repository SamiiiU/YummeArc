//imports of why section 
import { CiStar } from "react-icons/ci";
import { FaBook } from "react-icons/fa";
import { FaLeaf } from "react-icons/fa";
import { WiStars } from "react-icons/wi";

//imports of recent models

import model_1 from '../Assets/Images/HomeImages/Vtuber_1.png'
import model_2 from '../Assets/Images/HomeImages/Vtuber_2.png'
import model_3 from '../Assets/Images/HomeImages/Vtuber_3.png'

//imports of processs
import { FaHistory } from "react-icons/fa";
import { TbBulbFilled } from "react-icons/tb";
import { MdHighQuality } from "react-icons/md";
import { AiOutlineDeliveredProcedure } from "react-icons/ai";






export const whyYummeArc = [
    {text : "Anime-inspired, original model design" , icon : <CiStar/>},
    {text : "Deep backstory analysis to guide visuals" , icon : <FaBook/>},
    {text : "Clean content with strong personal values" , icon : <FaLeaf/>},
    {text : "Extremely detailed, high-quality finishes" , icon : <WiStars/>},

    
]

export const recentModels =[
    {name : "John Abraham" , description : "A guardian of dreams who travels between realms" , model : model_1},
    {name : "John Wick" , description : "A stargazer turned streamer, with celestial hair and a shy heart" , model : model_2},
    {name : "Bappa Jani" , description : "Warrior of the blossom moon—soft outside, fierce inside" , model : model_3},

]

export const our_process = [
    {heaiding : 'Backstory Discovery' ,  para : 'We listen to your character idea, lore, and personality.' , icon : < FaHistory />},
    {heaiding : 'Concept Sketches' ,  para : 'You get preview sketches to help refine your vision.' , icon : <TbBulbFilled />},
    {heaiding : 'Model Rendering' ,  para : 'We design your model with high-detail artistry in anime style.' , icon : <MdHighQuality />},
    {heaiding : 'Delivery' ,  para : 'We send files optimized for Live2D, rigging, or static use.' , icon : <AiOutlineDeliveredProcedure />},
]

export const testimonals_home = [
    {client_name : "AikoVT" , review : "YumeArc completely understood my character’s soul. The attention to detail was insane, and the process was super smooth!"},
    {client_name : "ErlicOnAir" , review : "The model design captured my lore perfectly. It wasn’t just a drawing—it was a story in motion."},
    {client_name : "AikoVT" , review : "YumeArc completely understood my character’s soul. The attention to detail was insane, and the process was super smooth!"},
    {client_name : "AikoVT" , review : "YumeArc completely understood my character’s soul. The attention to detail was insane, and the process was super smooth!"},

]