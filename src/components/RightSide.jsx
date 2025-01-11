import { Phone, Mail, MapPin, ExternalLink} from 'lucide-react';

export default function RightSide(props){
    const len = props.socialLinks.length;
    return(
        <div className="rightside-wrap">
            <div className="rightside-header">
                <div className="rightside-personalInfo">
                    <h2>{props.fullNameValue}</h2>
                </div>
                <p className='rightside-personalInfoParagraph'><Phone size={24}/> {props.phoneNumberValue}</p>
                <p className='rightside-personalInfoParagraph'><Mail size={24}/> {props.emailValue}</p>
                <p className='rightside-personalInfoParagraph'><MapPin size={24}/> {props.locationValue}</p>
            </div>
            <div className="rightside-main">
                <div className="rightside-socialLinks">
                    {props.socialLinks.map((link, index) => {
                        return <a className="rightside-socialLink" key={index} href={`https://${link.url}`} target='_blank' rel='noopenernoreferrer'><ExternalLink /> {link.type}</a>
                    }
                    )}
                </div>
            </div>
        </div>
    )
}