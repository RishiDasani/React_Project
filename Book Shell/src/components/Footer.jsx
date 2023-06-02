import React from 'react'
import Tatvasoft_logo from './tatvasoft_logo.jpg'

export default function Footer() {
  return (
    <div>
        <footer className="page-footer font-small mdb-color lighten-3 pt-4">
            <div className="container">
                <div className="navbar-brand justify-content-center text-center" >
                    <center><img src={Tatvasoft_logo} width="100" height="100" alt="Tatvasoft"/></center>
                </div>
            </div>
            <div className="footer-copyright text-center py-3">
                © 2018 TatvaSoft.com:All RIght Approved
            </div>
        </footer>
    </div>
  )
}
