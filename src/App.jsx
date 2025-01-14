import { useState } from 'react'
//components
import LeftSide from "./components/LeftSide.jsx"
import RightSide from './components/RightSide.jsx';

function App() {
  const [fullName, setFullName] = useState('Anthony Kowalski');
  const [email, setEmail] = useState("email@email.com ");
  const [phoneNumber, setPhoneNumber] = useState("123456789");
  const [location, setLocation] = useState("Vatican, os. Lewe 23");
  const [socialLinksInput, setSocialLinksInput] = useState("");
  const [linksSelect, setLinksSelect] = useState("X");
  const [socialLinks, setSocialLinks] = useState([]);
  const [education, setEducation] = useState([{organisation: "PSP Okocim", title: "Podstawowe", location: "Polska, Okocim", startDate: "12/2024", endDate: "present"}]);

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
                />
      <RightSide fullNameValue={fullName} emailValue={email} phoneNumberValue={phoneNumber} locationValue={location} socialLinks={socialLinks} education={education}/>
    </div>
  )
}

export default App
