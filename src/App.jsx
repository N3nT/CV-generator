import { useState } from 'react'
//components
import LeftSide from "./components/LeftSide.jsx"
import RightSide from './components/RightSide.jsx';

function App() {
  //States
  //Personal Info 
  const [fullName, setFullName] = useState('Joe Doe');
  const [email, setEmail] = useState("email@email.com ");
  const [phoneNumber, setPhoneNumber] = useState("123 456 789");
  const [location, setLocation] = useState("5960 W 85th Pl Los Angeles, California(CA), 90045");

  //Links
  const [socialLinksInput, setSocialLinksInput] = useState("");
  const [linksSelect, setLinksSelect] = useState("X");
  const [socialLinks, setSocialLinks] = useState([]);

  //Education
  const [education, setEducation] = useState([{organisation: "Oxford University", title: "Computer Science", location:"Oxford, UK", startDate: "09/2021", endDate: "06/2024"}]);
  const [educationOrganisation, setEducationOrganisation] = useState('');
  const [educationTitle, setEducationTitle] = useState('');
  const [educationLocation, setEducationLocation] = useState('');
  const [educationStartDate, setEducationStartDate] = useState('');
  const [educationEndDate, setEducationEndDate] = useState('');

  //Work
  const [work, setWork] = useState([{company: "Google", position: "Frontend Developer", location: "New York, USA", description: "Supported senior researchers on accessibility standards for the open web. Created and usability tested wireframes and prototypes. Produced interactive documentation for quick onboarding of new researchers.", startDate: "08/2024", endDate: "present"}]);
  const [workCompany, setWorkCompany] = useState();
  const [workPosition, setWorkPosition] = useState('');
  const [workLocation, setWorkLocation] = useState('');
  const [workDescription, setWorkDescription] = useState('');
  const [workStartDate, setWorkStartDate] = useState('');
  const [workEndDate, setWorkEndDate] = useState('');

  //Handlers
  //Personal Info
  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePhoneChange = (e) => {
    setPhoneNumber(e.target.value);
  }

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  }

  //Links
  const handleSocialLinksInputChange = (e) => {
    setSocialLinksInput(e.target.value);
  }

  const handleSelectChange = (e) => {
    setLinksSelect(e.target.value);
  }

  const handleSocialLinksAdd = () => {
    setSocialLinks([...socialLinks, {type: linksSelect, url: socialLinksInput}]);
    setSocialLinksInput("");
  }

  const handleDeleteLink = (linkIndex) => {
    const result = socialLinks.filter((_, index) => index !== linkIndex)
    setSocialLinks(result)
  }

  //Education
  const handleEducationOrganisationChange = (e) => {
    setEducationOrganisation(e.target.value);
  }

  const handleEducationTitleChange = (e) => {
    setEducationTitle(e.target.value);
  }

  const handleEducationLocationChange = (e) => {
    setEducationLocation(e.target.value);
  }

  const handleEducationStartDateChange = (e) => {
    setEducationStartDate(e.target.value); 
  }

  const handleEducationEndDateChange = (e) => {
    setEducationEndDate(e.target.value);
  }

  const addEducation = () => {
    setEducation([...education, {organisation: educationOrganisation, title: educationTitle, location: educationLocation, startDate: educationStartDate, endDate: educationEndDate}]);
    setEducationOrganisation("");
    setEducationTitle("");
    setEducationLocation("");
    setEducationStartDate(""); 
    setEducationEndDate("");
  }

  const handleDeleteEducation = (educationIndex) => {
    const result = education.filter((_, index) => index !== educationIndex)
    setEducation(result)
  }

  //Work experience
  const handleWorkCompanyChange = (e) => {
    setWorkCompany(e.target.value);
  }

  const handleWorkPositionChange = (e) => {
    setWorkPosition(e.target.value);
  }

  const handleWorkLocationChange = (e) => {
    setWorkLocation(e.target.value);
  }

  const handleWorkDescriptionChange = (e) => {
    setWorkDescription(e.target.value);
  }

  const handleWorkStartDateChange = (e) => {
    setWorkStartDate(e.target.value);
  }

  const handleWorkEndDateChange = (e) => {
    setWorkEndDate(e.target.value);
  }

  const addWork = () => {
    setWork([...work, {company: workCompany, position: workPosition, location: workLocation, description: workDescription, startDate: workStartDate, endDate: workEndDate}]);
    setWorkCompany('');
    setWorkPosition('');
    setWorkLocation('');
    setWorkDescription('');
    setWorkStartDate('');
    setWorkEndDate('');
  }

  const deleteWork = (workIndex) => {
    const result = work.filter((_, index) => index != workIndex)
    setWork(result);
  }


  return (
    <div className='app'>
      <LeftSide handleFullNameChange={handleFullNameChange} 
                fullNameValue={fullName}
                handleEmailChange={handleEmailChange}
                emailValue={email} 
                handlePhoneChange={handlePhoneChange}
                phoneNumberValue={phoneNumber}
                handleLocationChange={handleLocationChange}
                locationValue={location}

                handleSocialLinksInputChange={handleSocialLinksInputChange}
                handleSelectChange={handleSelectChange}
                socialLinksInput={socialLinksInput}
                linksSelect={linksSelect}
                handleSocialLinksAdd={handleSocialLinksAdd}
                handleDeleteLink={handleDeleteLink}
                socialLinks={socialLinks}

                education={education}
                educationOrganisation={educationOrganisation}
                handleEducationOrganisationChange={handleEducationOrganisationChange}
                educationTitle={educationTitle}
                handleEducationTitleChange={handleEducationTitleChange}
                educationLocation={educationLocation}
                handleEducationLocationChange={handleEducationLocationChange}
                educationStartDate={educationStartDate}
                handleEducationStartDateChange={handleEducationStartDateChange}
                educationEndDate={educationEndDate}
                handleEducationEndDateChange={handleEducationEndDateChange}
                addEducation={addEducation}
                handleDeleteEducation={handleDeleteEducation}

                work={work}
                handleWorkCompanyChange={handleWorkCompanyChange}
                workCompany={workCompany}
                handleWorkPositionChange={handleWorkPositionChange}
                workPosition={workPosition}
                handleWorkLocationChange={handleWorkLocationChange}
                workLocation={workLocation}
                handleWorkDescriptionChange={handleWorkDescriptionChange}
                workDescription={workDescription}
                handleWorkStartDateChange={handleWorkStartDateChange}
                workStartDate={workStartDate}
                handleWorkEndDateChange={handleWorkEndDateChange}
                workEndDate={workEndDate}
                addWork={addWork}
                deleteWork={deleteWork}
                />
                
      <RightSide fullNameValue={fullName} emailValue={email} phoneNumberValue={phoneNumber} locationValue={location} socialLinks={socialLinks} education={education} work={work}/>
    </div>
  )
}

export default App
