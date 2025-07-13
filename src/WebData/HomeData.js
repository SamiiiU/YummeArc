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
    {text : "Anime-inspired, original model design" , para : "Every model we create is rooted in expressive anime art — no templates, no shortcuts. Every design is tailored to your story." ,  icon : <CiStar/>},

    {text : "Built Around Lore & Identity" , para : "We don’t just design what looks cool. We craft what makes sense — visuals that reflect your character's personality and backstory." , icon : <FaBook/>},

    {text : "Wholesome & Value-Driven" , para : "No NSFW, no demonic themes. Just clean, heartfelt visuals made with intention and emotional respect.", icon : <FaLeaf/>},
    {text : " Highly Detailed, Stream-Ready Files" , para : " We obsess over line quality, color harmony, and character flow — everything’s optimized for Live2D, overlays, or PNGTuber use." , icon : <WiStars/>},

    
]

export const recentModels =[
    {name : "John Abraham" , description : "A guardian of dreams who travels between realms" , model : model_1},
    {name : "John Wick" , description : "A stargazer turned streamer, with celestial hair and a shy heart" , model : model_2},
    {name : "Albert Einstien" , description : "Warrior of the blossom moon—soft outside, fierce inside" , model : model_3},

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