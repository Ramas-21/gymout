import React, {useRef} from 'react'
import './join.css'
import emailjs from '@emailjs/browser'
const Join = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
        .then((result) =>{
            console.log(result.text);
        }, (error) =>{
            console.log(error.text);
        });
    };
  return (
    <div className="join" id="join-us">
        <div className="left-j">
            <hr />
            <div>
                <span className="nonFill-text">READY TO</span>
                <span> LEVEL UP</span>
            </div>
            <div>
                <span>YOUR BODY</span>
                <span className="nonFill-text"> WITH US?</span>
            </div>
        </div>
        <div className="right-j">
            <form ref={form} className="email-container" onSubmit={sendEmail}>
                <input type="text" name="user_email" placeholder="Enter your email address"/>
                <button className="btn btn-j">Join now</button>
            </form>
        </div>
    </div>
  )
}

export default Join
