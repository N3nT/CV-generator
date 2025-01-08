export default function LeftSide({handleChange, inputValue}) {
    
    return(
        <div className="rightside-wrap">
            <div className="rightside-info">
                <label htmlFor="nameInput">Name: </label>
                <input id="nameInput" type="text" onChange={handleChange} value={inputValue}/>
                <label htmlFor="last-nameInput">Last name: </label>
                <input id="last-nameInput" type="text" onChange={handleChange} value={inputValue}/>
                <label htmlFor="emailInput">Email: </label>
                <input id="emailInput" type="email"/>
                <label htmlFor="phoneInput">Phone: </label>
                <input id="phoneInput" type="number"/>
            </div>
           <hr />
           {/* to bedzie osobny component */}
           <div className="rightside-links">
            <div className="rightside-linksWrap">
                <select name="" id="">
                    <option>X</option>
                    <option>LinkedIn</option>
                    <option>Instagram</option>
                    <option>Website</option>
                    <option>Other</option>
                </select>
                <input type="text" placeholder="URL"/>
            </div>
            <button>Add+</button>
           </div>
           <hr />
            {/* to bedzie osobny component */}
           <div className="rightside-education">
            <h2 className="rightside-title">Education</h2>
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
           <div className="rightside-workExperience">
            <h2 className="rightside-title">Work Experience</h2>
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