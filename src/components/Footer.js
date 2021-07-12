/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'


const Footer = () => {
    return (
    <div className="footer-nav navbar is-transparent is-fixed-bottom">
<a className='footer-links navbar-item' href = "mailto: steven.120189@gmail.com">Email</a>
<a className='footer-links navbar-item' href="https://github.com/omunoz-89" target="_blank" rel="noreferrer">Github</a>
<a className='footer-links navbar-item' href="https://www.linkedin.com/in/omar-munoz-056402130/" target="_blank" rel="noreferrer">LinkedIn</a>
<a className='footer-links navbar-item' id='mobileResume' href="https://docs.google.com/document/d/e/2PACX-1vQ46bJJoSecVO02fq5K_qsP4eRasjLDQKscNlCntEi5wgv2zesowRU0kNpw6sPza9r3fZjIfpDk_8Jj/pub" target="_blank" rel="noreferrer">Resume</a>
<div class="footer-links navbar-item has-dropdown has-dropdown-up is-hoverable">
        <a class="navbar-link is-arrowless">
          Resume
        </a>
        <div class="navbar-dropdown">
          <a href='https://docs.google.com/document/d/e/2PACX-1vQ46bJJoSecVO02fq5K_qsP4eRasjLDQKscNlCntEi5wgv2zesowRU0kNpw6sPza9r3fZjIfpDk_8Jj/pub' className="footer-links navbar-item" target="_blank" rel="noreferrer">
            View
          </a>
          <a href='https://res.cloudinary.com/sei412-om/raw/upload/v1626106834/Omar_Munoz_Resume_boxwug.docx' className="footer-links navbar-item">
            Download
          </a>
        </div>
      </div>
</div>
    )
}

export default Footer
