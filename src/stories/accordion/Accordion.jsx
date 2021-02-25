import React, {useState} from 'react'
import './Accordion.scss'

import RichText from '../richText/RichText'
import Image from '../image/Image'
import {ChevronUp, ChevronDown, } from '../../assets/svgIcons/SvgIcons'


const Accordion = ({data}) => {

    const [openSection, toggleOpenSection] = useState(null)

    let timer;

    const onClick = (i, id) => {
        toggleOpenSection(() => {
            if (openSection === i) {
                return null
            }

            // timer = setTimeout(() => {
            //     scrollToView(id)
            // }, 100)
            return i
        });
        
    };

    // const scrollToView = (id) => {
    //     document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
    //     clearTimeout(timer);
    // }

    return (
        <div className="Accordion" key={data.id}>

            { data.map(({ "elements": {headerText, image, infoText, richText, subText}, id, }, index) => {
                
                const open = openSection === index

                return (
                    <div key={id} className="Accordion_Item">

                        <div id={id} className="Accordion_Item_Head" onClick={() => onClick(index, id)}>

                            <p className="Standard_Paragraph">{headerText}</p>

                            <button type="button" className="Accordion_Toggle">
                                { open ? ( <ChevronUp /> ) : ( <ChevronDown /> ) }
                            </button>
                        </div>

                        {
                            open &&
                            <div className="Accordion_Item_Content">
                                {
                                    image && image.url && subText && 
                                    <div className="Accordion_Item_Content_Header">
                                        <Image data={image} />
                                        <h3 className="Standard_Header">{subText}</h3>
                                    </div>
                                }

                                { richText && <div className="Standard_Richtext"><RichText data={richText} /></div> }

                                { infoText &&  <p className="Standard_Paragraph">{infoText}</p> }  

                            </div>
                        }
                    </div>
                )
            })}   
        </div>
    )
}

export default Accordion