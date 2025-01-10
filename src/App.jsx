import { useState } from 'react'
//components
import LeftSide from "./components/LeftSide.jsx"
import RightSide from './components/RightSide.jsx';

function App() {
  const [name, setName] = useState('First Name');
  const [lastname, setLastName] = useState('Last Name');
  const [email, setEmail] = useState("email@email.com");
  const [phoneNumber, setPhoneNumber] = useState("123456789");
  const [location, setLocation] = useState("Unknow");
  const [socialLinksInput, setSocialLinksInput] = useState("");
  const [linksSelect, setLinksSelect] = useState("X");
  const [socialLinks, setSocialLinks] = useState([{}]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleLastnameChange = (e) => {
    setLastName(e.target.value);
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
    setSocialLinksInput('');
  }

  const handleDeleteLink = (linkIndex) => {
    const result = socialLinks.filter((_, index) => index !== linkIndex)
    setSocialLinks(result)
  }

  return (
    <div className='app'>
      <LeftSide handleNameChange={handleNameChange} 
                nameValue={name} 
                handleLastnameChange={handleLastnameChange} 
                lastnameValue={lastname} 
                handleEmailChange={handleEmailChange}
                emailValue={email} 
                handlePhoneChange={handlePhoneChange}
                phoneNumberValue={phoneNumber}
                handleLocationChange={handleLocationChange}
                locationValue={location}
                handleSocialLinksInputChange={handleSocialLinksInputChange}
                handleSelectChange={handleSelectChange}
                linksSelect={linksSelect}
                handleSocialLinksAdd={handleSocialLinksAdd}
                handleDeleteLink={handleDeleteLink}
                socialLinks={socialLinks} 
                />
      <RightSide nameValue={name} lastnameValue={lastname} emailValue={email} phoneNumberValue={phoneNumber} locationValue={location} socialLinks={socialLinks}/>
    </div>
  )
}

export default App
