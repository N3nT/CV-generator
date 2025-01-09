export default function RightSide(props){

    return(
        <div className="rightside-wrap">
            <div className="rightside-header">
                <div className="rightside-personalInfo">
                    <h2>{props.nameValue} {props.lastnameValue}</h2>
                </div>
                <p>Phone: {props.phoneNumberValue}</p>
                <p>Email: {props.emailValue}</p>
                <p>Location: {props.locationValue}</p>
            </div>
            <div className="rightside-main">
                <div className="socialsLinks">
                    {props.socialLinks.map((link, index) => {
                        return <a key={index} href={link.url}>{link.type}</a>
                    })}
                </div>
            </div>
        </div>
    )
}