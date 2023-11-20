import  axios from "axios";
import { useState } from "react";
import downarrow from "../assets/down-arrow.png"
import swal from "sweetalert"

const VideoPageCompoent = () => {
    const [file, setFile] = useState()
    const scanImage=async(e)=>{
        e.preventDefault();
        const formData= new FormData()
         formData.append('file',file);  
        const resp=await axios.post("http://localhost:5000/",formData)
        console.log(resp.data)
        if(resp.data.predicted=="false"){
            swal({
                title: "Failed",
                text: resp.data.message,
                icon: "error",
            }).then(()=>{
                window.location.reload(false);
            })
        }
        else{
            
        }
    }
    
    return ( 
        <div className="taketestContainer">
            <div className="testcontainer">
                <div className="formCardContainer">
                <form className="uploadform">
                    <label>Upload retinal image below</label>
                    <img src={downarrow}/>
                    <div className="fileinputcontianer">
                <input type="file" name="Select Retinal Image"
                onChange={(e)=>{
                    setFile(e.target.files[0]);
                }} ></input>
                </div>
                <button
              onClick={(e) => {
                  scanImage(e);
                }}
                >
                Upload
                </button>
                </form>
                </div>
            </div>
        </div>
     );
}
 
export default VideoPageCompoent;