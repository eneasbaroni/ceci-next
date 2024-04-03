const Footer = () => {
  return (
    <footer>
      <div className="footerContainer">
          <p>
              © {new Date().getFullYear()} CECILIA TORRES All rights reserved | Design & Develop by
              <a href="https://eneasbaroni.com.ar/" target="_blank" rel="noreferrer">Eneas</a>
          </p>        
          <a href="https://www.facebook.com/ceci.torres.7315" target="_blank" rel="noreferrer"><img src="/images/footer/facebook.svg" alt="Facebook icon" /></a>        
          <a href="https://www.instagram.com/ceciliatorres.tanatologia/" target="_blank" rel="noreferrer"><img src="/images/footer/instagram.svg" alt="Instagram icon" /></a>  
          <a href="mailto:cecitorres.eduparaelduelo@gmail.com">cecitorres.eduparaelduelo@gmail.com</a>  
          {/* <p>|</p>
          <p>0353-154086560</p> */}
      </div>
  </footer>
  )
}

export default Footer