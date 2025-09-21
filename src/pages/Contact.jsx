function Contact(){
    return (
        <div className="contact">
            <h4>Contact Me</h4>
            <hr />
            <div className="contact-page">
                <div className="contact-info">
                    <b>I'd like to hear from you!</b>
                    <p>
                        Whether you have a question, want to collaborate, or just want to say hello, feel free to reach out. I value your feedback and am always open to new opportunities.
                        <br /><br />
                        <b className="name-m"><a href="mailto:manilucky25896@gmail.com">manilucky25896@gmail.com</a></b>
                    </p>
                    <div className="social-media">
                       <a href="https://wa.me/8008673383" target="_blank" rel="noopener noreferrer"> <i className="fa-brands fa-whatsapp"></i></a>
                       <a href="https://www.instagram.com/yours_manilucky?utm_source=qr&igsh=bjZmcWhrMmdkcmhm" target="_blank" rel="noopener noreferrer"> <i className="fa-brands fa-instagram"></i></a>
                       <a href="https://www.linkedin.com/in/mani-varma-4a54b7327?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer"> <i className="fa-brands fa-linkedin"></i></a>
                    </div>
                </div>
                <form action="">
                    <div>
                        <input type="text" id="name" placeholder="Your Name" required />
                    </div>
                    <div>
                        <input type="email" id="email" placeholder="Your Email" required />
                    </div>
                    <div>
                        <textarea id="message" placeholder="Your Message" required></textarea>
                    </div>
                    <button type="submit" className="submit-button">Send Message</button>
                </form>
            </div>
            
        </div>
    );
}
export default Contact;
