function Resume(){
    return(
        <div className="resume">
            <h4>Resume</h4>
            <h5>Education & Experience Overview</h5>
            <hr />
           <div className="resume-sub">
             <div className="education">
                <h5>Education</h5>
                <hr />
                <p><b>Bachelor of Science in Computer Science</b> <s style={{float: "right"}}>- Nandyal</s></p>
                <p>Santhiram Engineering College, <s style={{float: "right"}}>2022 - 2026</s></p>
                <br />
                <p><b>Senior Secondary School</b> <s style={{float: "right"}}>- Kurnool</s></p>
                <p>Sri Chaitanya Jr College, <b>MPC</b> <s style={{float: "right"}}>2020 - 2022</s></p>
                <br />
                <p><b>Secondary School</b> <s style={{float: "right"}}>- Maddikera</s></p>
                <p>Ap Model School ,  <s style={{float: "right"}}>2020</s></p>
            </div>
            <div className="experience">    
                <h5>Learning Experience</h5>
                <hr />
            <p>
                I have gained hands-on experience in HTML and CSS, building responsive web pages and understanding the fundamentals of web design. Additionally, I have learned MySQL for managing databases and performing queries, as well as Python for programming and problem-solving. These skills have helped me develop a strong foundation in both front-end and back-end technologies.
            </p>
            </div>
           </div>
        </div>
    )
}

export default Resume;