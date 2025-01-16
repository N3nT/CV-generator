import { Phone, Mail, MapPin, ExternalLink} from 'lucide-react';

export default function RightSide(props){

    function SocialLinks(){
        if(props.socialLinks.length > 0){
            return (
                <div className="rightside-socialLinks">
                        {props.socialLinks.map((link, index) => {
                            return <a className="rightside-socialLink" key={index} href={`https://${link.url}`} target='_blank' rel='noopenernoreferrer'><ExternalLink /> {link.type}</a>
                        }
                        )}
                    </div>
            )
        }
    }

    function Education(){
        if(props.education){
            return(
                <div className="rightside-education">
                    <h2 className="rightside-sectionTitle">Education</h2>
                    <div className="rightside-educationWrap">
                        {props.education.map((element, index) => {
                            return (<div key="index" className="rightside-educationElement">
                            <div className="rightside-educationInfo">
                                <p className="rightside-educationDates">
                                    {element.startDate} - {element.endDate}
                                </p>
                                <p className="rightside-educationLocation">
                                    {element.location}
                                </p>
                            </div>
                            <div className="rightside-educationTxt">
                                <p className="rightside-educationOrganisation">{element.organisation}</p>
                                <p className="rightside-educationTitle">{element.title}</p>
                            </div>
                        </div>)
                        })}
                    </div>
                </div>
            )
        }
    }

    function Work() {

        return(
            <div className="rightside-work">
                <h2 className="rightside-sectionTitle">Work Experience</h2>
                <div className="rightside-workWrap">
                        {props.work.map((element, index) => {
                            return (<div key="index" className="rightside-workElement">
                            <div className="rightside-workInfo">
                                <p className="rightside-workDates">
                                    {element.startDate} - {element.endDate}
                                </p>
                                <p className="rightside-workLocation">
                                    {element.location}
                                </p>
                            </div>
                            <div className="rightside-workTxt">
                                <p className="rightside-workCompany">{element.company}</p>
                                <p className="rightside-workPosition">{element.position}</p>
                                <p className="rightside-workEducation">{element.description}</p>
                            </div>
                        </div>)
                        })}
                    </div>
            </div>
        )
    }

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
                <SocialLinks/>
                <Education/>
                <Work/>
            </div>
        </div>
    )
}