import "./left_box.css";
import vect from "../../assets/vectors.svg";



const LeftBox =() =>{

  
    return(
    
    <div className="left-box">
          <h1>Welcome to Your<br/>
             Freelancing Hub!</h1>
          <p>
            We’re thrilled to have you here! Whether you're a client searching
            for skilled freelancers to bring your projects to life or a
            freelancer eager to find exciting opportunities, this is the place
            where connections are made, and ideas come to reality. Let's start
            building something amazing together!
          </p>
          <img src={vect} id="vect1"/>
        </div>
    
    
    )

}
export default LeftBox;