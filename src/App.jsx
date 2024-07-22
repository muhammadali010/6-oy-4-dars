import './App.css';
import React, { useState } from 'react';
import logo from './images/svg/logo.svg'
import img1 from './images/png/Ellipse 1.png'
import fluent from './images/svg/fluent_earth-32-regular.svg'
import instagram from './images/svg/ion_logo-instagram.svg'
import facebook from './images/svg/mingcute_facebook-line.svg'
import github from './images/svg/iconoir_github.svg'
import telegram from './images/svg/Vector.svg'

const Registratsion = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [adress, setAdress] = useState('')
  const [steps, setSteps] = useState('')
  const [desc, setDesc] = useState('')
  const [languages, setLang] = useState('')
  const [state, setState] = useState('')
  const [city, setCity] = useState('')
  const [fluents, setFluent] = useState('')
  const [instagrams, setInstagram] = useState('')
  const [telegrams, setTelegram] = useState('')
  const [facebooks, setFacebook] = useState('')
  const [githubs, setGithub] = useState('')

  function handleName(event) {

    setName(event.target.value)
  }
  function handleEmail(event) {
    setEmail(event.target.value)
  }
  function handleNumber(event) {
    setNumber(event.target.value)
  }
  function handleAdress(event) {
    setAdress(event.target.value)
  }
  function handleSteps(event) {
    setSteps(event.target.value)
  }
  function handleDesc(event) {
    setDesc(event.target.value)
  }
  function handlelanguages(event) {
    setLang(event.target.value)
  }
  function handleState(event) {
    setState(event.target.value)
  }
  function handleCity(event) {
    setCity(event.target.value)
  }
  function handleFluent(event) {
    setFluent(event.target.value)
  }
  function handleInstagram(event) {
    setInstagram(event.target.value)
  }
  function handleTelegram(event) {
    setTelegram(event.target.value)
  }
  function handleFacebook(event) {
    setFacebook(event.target.value)
  }
  function handleGithub(event) {
    event.prevent.default()
    setGithub(event.target.value)
  }
  function handleForm(event) {

    let user = {
      name: name,
      number: number,
      email: email,
      steps: steps,
      adress: adress,
      desc: desc,
      languages: languages,
      state: state,
      city: city,
      fluents: '',
      instagrams: 'https://instagram.com/',
      telegrams: 'https://telegram.com/',
      facebooks: "https://facebook.com/",
      githubs: "https://github.com/",
    }
    localStorage.setItem('user', JSON.stringify(user));
    let storedUser = JSON.parse(localStorage.getItem('user'));
    console.log(storedUser);
    console.log(user);
  }



  return (
    <div>
      {/* <div className="nav_continer"> */}
      <div className="nav">
        <div>
          <a href="#">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="logo_div">
          <h2 className="logo_h2">Vakansiyalar</h2>
          <h2 className="logo_h2">Kandidatlar</h2>
          <h2 className="logo_h2">Kompaniyalar</h2>
          <h2 className="logo_h2">Xizmatlar</h2>
          <h2 className="logo_h2">Ta’lim</h2>
        </div>
        <div>
          <select className='launght' name="" id="" onChange={handlelanguages} >
            <option value="uzb">UZB</option>
            <option value="rus">RUS</option>
            <option value="eng">ENG</option>
          </select>
          <button type="button" className="btn">Light</button>
        </div>
      </div>
      {/* </div> */}
      <div className="continer">
        <div className="container">
          <h1 className="main_h1">Kompaniya ma’lumotlari</h1>
          <p>Kompaniya haqidagi ma’lumotlarni kiriting</p>
          <div className="rasm">
            <a href="#">
              <img src={img1} alt="img" />
            </a>
            <a className="yuklash" href="#">Yuklash</a>
          </div>
          <form>
            <label htmlFor="">Kompaniya nomi</label> <br />
            <input type="text" placeholder="Kompaniya nomi" onChange={handleName} /> <br />
            <label htmlFor="">Email</label>
            <input type="email" placeholder="Email" onChange={handleEmail} />
            <label htmlFor="">Telefon raqami </label> <br />
            <input className='tel' type="number" onChange={handleNumber} />
            <label htmlFor="">Linklar</label> <br />
            <button className="links" onClick={handleFluent}>
              <a href="#">
                <img src={fluent} alt="fluent" />
              </a>
            </button>
            <button className="links" onClick={handleInstagram}>
              <a href="#">
                <img src={instagram} alt="instagram" />
              </a>
            </button>
            <button className="links" onClick={handleTelegram}>
              <a href="#">
                <img src={telegram} alt="telegram" />
              </a>
            </button>
            <button className="links" onClick={handleFacebook}>
              <a href="#">
                <img src={facebook} alt="facebook" />
              </a>
            </button>
            <button className="links" onClick={handleGithub}>
              <a href="#">
                <img src={github} alt="github" />
              </a>
            </button>
            <div className="main">
              <div>
                <label htmlFor="">Davlat</label> <br />
                <select className="tillar" name="" id="" onChange={handleState}>
                  <option value="Uzbekistan">Uzbekistan</option>
                  <option value="Rossiya">Rossiya</option>
                </select>
              </div>
              <div>
                <label htmlFor="">Shahar</label> <br />
                <select className="tillar" name="" id="" onChange={handleCity}>
                  <option value="davlat">Moskva</option>
                  <option value="davlat">Tashkent</option>
                </select>
              </div>
            </div>
            <label htmlFor="">Yashash joyi </label>
            <input type="text" placeholder="Joy" onChange={handleAdress} />
            <label htmlFor="">Hodimlar soni</label>
            <input type="number" className='tel' onChange={handleSteps} />
            <label htmlFor="">Izoh</label>
            <input className="textarea" type="text" placeholder="Kompaniya haqida izoh qoldiring" onChange={handleDesc} />
          </form>
          <div style={{ justifyContent: 'space-between', display: 'flex', marginTop: '42px' }}>
            <div>
              <button type="button" className="btn1">Ortga</button>
            </div>
            <div>
              <button type="button" className="btn2" onClick={handleForm}>Keyingi</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registratsion;
