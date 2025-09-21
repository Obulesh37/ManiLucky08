import { Link } from "react-router-dom";
function Hero() {
  return (
    <section className="hero">
      <h2>Hi , I am Mani Varma</h2>
      <h1 style={{ color: "#2d7cf3ff" }}>FrontEnd Developer</h1>
      <img src="./images/heropic.jpg" alt="mani" className="heroimg"/>
      <br />
      <button className="cta-button"><Link to="/About" style={{color:"white",textDecoration:"None"}}>View</Link></button>
      <p>Welcome to my portfolio website. Here you can find my projects and skills.</p>
    </section>
  );
}
export default Hero;