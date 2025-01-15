import { useState } from 'react'
//components
import LeftSide from "./components/LeftSide.jsx"
import RightSide from './components/RightSide.jsx';

function App() {
  //States
  //Personal Info
  const [fullName, setFullName] = useState('Anthony Kowalski');
  const [email, setEmail] = useState("email@email.com ");
  const [phoneNumber, setPhoneNumber] = useState("123456789");
  const [location, setLocation] = useState("Vatican, os. Lewe 23");

  //Links
  const [socialLinksInput, setSocialLinksInput] = useState("");
  const [linksSelect, setLinksSelect] = useState("X");
  const [socialLinks, setSocialLinks] = useState([]);

  //Education
  const [education, setEducation] = useState([]);
  const [educationOrganisation, setEducationOrganisation] = useState('');
  const [educationTitle, setEducationTitle] = useState('');
  const [educationLocation, setEducationLocation] = useState('');
  const [educationStartDate, setEducationStartDate] = useState('');
  const [educationEndDate, setEducationEndDate] = useState('');

  //Work
  const [workCompany, setWorkCompany] = useState('');
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

  const handleDeleteEducation = (linkIndex) => {
    const result = education.filter((_, index) => index !== linkIndex)
    setEducation(result)
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
                />
      <RightSide fullNameValue={fullName} emailValue={email} phoneNumberValue={phoneNumber} locationValue={location} socialLinks={socialLinks} education={education}/>
    </div>
  )
}

export default App
