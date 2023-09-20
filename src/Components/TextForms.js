import React, {useState} from 'react'

export default function TextForms(props) {

    const handleUPclick = () =>{
        console.log("Uppercase was clicked");
        var newtxt = text.toUpperCase();
        setText(newtxt);
    }
    const handleLCclick = () =>{
        console.log("LowerCase was clicked");
        var newtxt = text.toLowerCase();
        setText(newtxt);
    }
    const handleclearclick = () =>{
        console.log("cleartext was clicked");
        var newtxt = "";
        setText(newtxt);
    }

    const handleOnechange = (event) =>{
        console.log("onchange");
        setText(event.target.value);
    }

    const[text,setText]= useState('Enter text here' );
    // text = "new text"; wrong way to change the state
    // setText("newText") correct way to change the state
  return (
    <>
    <div className='container'>
            <h1>{props.heading}</h1>
            <div class="mb-3">
            
             <textarea class="form-control" value ={text} onChange={handleOnechange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUPclick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-1" onClick={handleLCclick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-1" onClick={handleclearclick}>ClearText</button>
    </div>

    <div className="container my-3">
         <h2>Your text Summary</h2>
         <p>{text.split(" ").length} words and {text.length} characters </p>
         <p> {0.008 * text.split(" ").length } Minutes required to read</p>
         <h2>Preview</h2>
         <p>{text}</p>

    </div>
    </>
  )
}
