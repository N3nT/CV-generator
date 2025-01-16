import { Trash2, CirclePlus } from 'lucide-react';

export default function LeftSide(props) {
    
    return(
        <div className="leftside-wrap">
            <div className="leftside-info">
                <label htmlFor="fullNameInput">Full Name: </label>
                <input id="fullNameInput" type="text" onChange={props.handleFullNameChange} value={props.fullNameValue}/>
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
                <input type="text" placeholder="URL" onChange={props.handleSocialLinksInputChange} value={props.socialLinksInput}/>
            </div>
            <button className="leftside-linksButton" onClick={props.handleSocialLinksAdd}>Add {<CirclePlus />}</button>
           </div>
           <div className="leftside-actualLinks">
            {props.socialLinks.map((link, index) => {
                return(
                        <div className="leftside-actualLinksElement" key={index}>
                            <span>{link.type}</span> <span>{link.url}</span><Trash2 color="#ff0000" onClick={() => {props.handleDeleteLink(index)}}/>
                        </div>
                )
            })}
           </div>
           <hr />
            {/* to bedzie osobny component */}
           <div className="leftside-education">
            <h2 className="leftside-title">Education</h2>
            <label htmlFor="organizationInput">Organisation: </label>
            <input id="organizationInput" type="text" onChange={props.handleEducationOrganisationChange} value={props.educationOrganisation}/>
            <label htmlFor="titleInput">Title: </label>
            <input id="titleInput" type="text" onChange={props.handleEducationTitleChange} value={props.educationTitle}/>
            <label htmlFor="eduLocationInput">Location: </label>
            <input id="eduLocationInput" type="text" onChange={props.handleEducationLocationChange} value={props.educationLocation}/>
            <label htmlFor="startDateInput">Start date: </label>
            <input id="startDateInput" type="text" onChange={props.handleEducationStartDateChange} value={props.educationStartDate}/>
            <label htmlFor="endDateInput">End date: </label>
            <input id="endDateInput" type="text" onChange={props.handleEducationEndDateChange} value={props.educationEndDate}/>
            <button onClick={props.addEducation}>Add+</button>
            <div className="leftside-actualEducation">
                {props.education.map((element, index) => {
                    return(
                    <div className="leftside-actualEducationElement" key={index}>
                        <span>{element.title}</span><Trash2 color="#ff0000" onClick={() => {props.handleDeleteEducation(index)}}/>
                    </div>
                    )
                })}
            </div>
           </div>
           <hr />
            {/* to bedzie osobny component */}
           <div className="leftside-workExperience">
            <h2 className="leftside-title">Work Experience</h2>
            <label htmlFor="">Company name: </label>
            <input id="companyInput" type="text" onChange={props.handleWorkCompanyChange} value={props.workCompany}/>
            <label htmlFor="positionInput">Position Title: </label>
            <input type="text" className="positionInput" onChange={props.handleWorkPositionChange} value={props.workPosition}/>
            <label htmlFor="workLocationInput">Location: </label>
            <input type="text" className="workLocationInput" onChange={props.handleWorkLocationChange} value={props.workLocation}/>
            <label htmlFor="workDescriptionInput">Description: </label>
            <textarea type="text" className="workDescriptionInput" onChange={props.handleWorkDescriptionChange} value={props.workDescription}/>
            <label htmlFor="startDateInput">Start date: </label>
            <input id="startDateInput" type="text" onChange={props.handleWorkStartDateChange} value={props.workStartDate}/>
            <label htmlFor="endDateInput">End date: </label>
            <input id="endDateInput" type="text" onChange={props.handleWorkEndDateChange} value={props.workEndDate}/>
            <button onClick={props.addWork}>Add+</button>
            <div className="leftside-actualEducation">
                {props.work.map((element, index) => {
                    return(
                    <div className="leftside-actualEducationElement" key={index}>
                        <span>{element.company}</span><Trash2 color="#ff0000" onClick={() => {props.deleteWork(index)}}/>
                    </div>
                    )
                })}
            </div>
           </div>
        </div>
    )
}