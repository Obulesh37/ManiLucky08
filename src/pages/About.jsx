

function About(){
    return <div className="about">
        <h4>About Me</h4>
        <hr />
        <div className="about-page">
            <div>
                <img src="./images/aboutpic.jpg" alt="AboutBackground" />
            </div>
            <div className="about-info">
                <p>
                    &nbsp; &nbsp; &nbsp; &nbsp;Hello! I'm <b className="name-m">Mani Varma</b>, a passionate <b>FrontEnd Developer</b> with a knack for creating engaging and user-friendly web experiences. With a strong foundation in HTML, CSS, and JavaScript, I specialize in building responsive and dynamic websites that captivate users.
                </p>
                <p>
                    I enjoy collaborating with teams to turn ideas into reality and am always eager to learn new technologies. My experience includes working with React, Vite, and modern web development tools to deliver high-quality projects. I believe in writing clean, maintainable code and continuously improving my skills to stay ahead in the fast-evolving tech landscape.
                </p>
                <div className="info">
                    <table>
                        <tr>
                            <th>Name</th>
                            <td>:</td>
                            <td className="detail">Mani Varma</td>
                        </tr>
                        <tr>
                            <th>Email</th>
                            <td>:</td>
                            <td className="detail"><a href="mailto:manilucky25896@gmail.com">manilucky25896@gmail.com</a></td>
                        </tr>
                        <tr>
                            <th>Phone no</th>
                            <td>:</td>
                            <td className="detail"><a href="tel:8008673383">8008673383</a></td>
                        </tr>
                        <tr>
                            <th>Nationality</th>
                            <td>:</td>
                            <td className="detail">Indian</td>
                        </tr>
                        <tr>
                            <th>Address</th>
                            <td>:</td>
                            <td className="detail">Guntur, Andhra Pradesh, India</td>
                        </tr>
                    </table>
                    <div className="buttons-about">
                        <button className="cta-button">Hire Me</button>
                        <button className="download">
                            <a href="/images/Mani.png" download="/images/Mani.png">Download CV</a>
                        </button>
                    </div>
                </div>
                <br />
                <p>
                    Outside of coding, I love exploring new places, reading tech blogs, and contributing to open-source projects. My goal is to create impactful digital solutions that make a difference for users and businesses alike.
                </p>
            </div>
        </div>
    </div>;
}
export default About;
