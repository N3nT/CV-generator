import { Trash2 } from 'lucide-react';

export default function LeftSide(props) {
    
    return(
        <div className="leftside-wrap">
            <div className="leftside-info">
                <div className="leftside-names">
                    <label htmlFor="fullNameInput">Full Name: </label>
                    <input id="fullNameInput" type="text" onChange={props.handleFullNameChange} value={props.fullNameValue}/>
                </div>
                <label htmlFor="emailInput">Email: </label>
                <input id="emailInput" type="email" onChange={props.handleEmailChange} value={props.emailValue}/>
                <label htmlFor="phoneInput">Phone: </label>
                <input id="phoneInput" type="number" onChange={props.handlePhoneChange} value={props.phoneNumberValue}/>
                <label htmlFor="locationInput">Location: </label>
                <input id="locationInput" type="text" onChange={props.handleLocationChange} value={props.locationValue}/>
            </div>
           <hr />
           <div className="leftside-links">
            <div className="leftside-linksWrap">
                <select onChange={props.handleSelectChange} value={props.linksSelect}>
                    <option value="X">X</option>
                    <option value="LinkedIn">LinkedIn</option>
                    <option value="Instagram">Instagram</option>
                    <option value="Website">Website</option>
                    <option value="Other">Other</option>
                </select>
                <input type="text" placeholder="URL" onChange={props.handleSocialLinksInputChange}/>
            </div>
            <button onClick={props.handleSocialLinksAdd}>Add+</button>
           </div>
           <div className="leftside-actualLinks">
            {props.socialLinks.map((link, index) => {
                return(
                        <div key={index}>
                            <span>{link.type}</span> <span>{link.url}</span><Trash2 onClick={() => {props.handleDeleteLink(index)}}/>
                        </div>
                )
            })}
           </div>
           <hr />
            {/* to bedzie osobny component */}
           <div className="leftside-education">
            <h2 className="leftside-title">Education</h2>
            <label htmlFor="organizationInput">Organization: </label>
            <input id="organizationInput" type="text"/>
            <label htmlFor="titleInput">Title: </label>
            <input id="titleInput" type="text"/>
            <label htmlFor="startDateInput">Start date: </label>
            <input id="startDateInput" type="date"/>
            <label htmlFor="endDateInput">End date: </label>
            <input id="endDateInput" type="date"/>
            <button>Add+</button>
           </div>
            {/* to bedzie osobny component */}
           <div className="leftside-workExperience">
            <h2 className="leftside-title">Work Experience</h2>
            <label htmlFor="">Company name: </label>
            <input id="companyInput" type="text" />
            <label htmlFor="positionInput">Position Title: </label>
            <input type="text" className="positionInput" />
            <label htmlFor="startDateInput">Start date: </label>
            <input id="startDateInput" type="date"/>
            <label htmlFor="endDateInput">End date: </label>
            <input id="endDateInput" type="date"/>
            <button>Add+</button>
           </div>
        </div>
    )
}