import { Phone, Mail, MapPin, ExternalLink} from 'lucide-react';

export default function RightSide(props){
    return(
        <div className="rightside-wrap">
            <div className="rightside-header">
                <div className="rightside-personalInfo">
                    <h2>{props.nameValue} {props.lastnameValue}</h2>
                </div>
                <p className='rightside-personalInfoParagraph'><Phone size={24}/> {props.phoneNumberValue}</p>
                <p className='rightside-personalInfoParagraph'><Mail size={24}/> {props.emailValue}</p>
                <p className='rightside-personalInfoParagraph'><MapPin size={24}/> {props.locationValue}</p>
            </div>
            <div className="rightside-main">
                <div className="rightside-socialLinks">
                    {props.socialLinks.lenght > 0 && props.socialLinks.map((link, index) => {
                        return <a className="rightside-socialLink" key={index} href={`https://${link.url}`} target='_blank' rel='noopener noreferrer'><ExternalLink /> {link.type}</a>
                    })}
                </div>
            </div>
        </div>
    )
}