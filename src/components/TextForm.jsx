import React, { useState } from 'react'

export default function TextForm(props) {

    let [emails, setEmails] = useState([])
    const handleUpClick = () => {
        //console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleLoClick = () => {
        //console.log("Lowercase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    }

    const handleClearText = () => {
        //console.log("Clear Text was clicked");
        let newText = ' ';
        setText(newText);
        props.showAlert("Text is cleared!", "success");
    }

    const handleOnChange = (event) => {
        //console.log("On Change");
        setText(event.target.value);
    }

    /*const handleExtractEmail = () => {
        //console.log("Extract Email was clicked");
        const index = text.indexOf("@gmail.com");
        let email = "gmail.com"
        for (let i = index; i >= 0; i--) {
            if (text[i] === " ") {
                break
            }
            else {
                email = text[i] + email
            }
        }
        console.log(email)
        props.showAlert("Email Extracted!", "success");
    }*/

    const handleExtractEmails = () => {
        const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
        const mails = text.match(emailRegex);
        setEmails(mails);
        props.showAlert("Emails Extracted!", "success");
    }


    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces Removed!", "success");
    }

    const handleCopy = () => {
        // var text = document.getElementById("myBox");
        // text.select();
        navigator.clipboard.writeText(text);
        // document.getSelection().removeAllRanges();
        props.showAlert("Text Copied to Clipboard!", "success");
    }

    const [text, setText] = useState('');
    //setText("sdfghjkl");
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1 className='mb-3'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} placeholder='Enter text here' onChange={handleOnChange}
                        style={{ backgroundColor: props.mode === 'light' ? 'white' : '#aab7b8', color: props.mode === 'dark' ? 'white' : 'black' }}
                        id="myBox" rows="10"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to uppercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to lowercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleClearText}>Clear Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleExtractEmails}>Extract Email</button>
                <button disabled={text.length === 0} className="btn btn-primary my-1 mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button disabled={text.length === 0} className="btn btn-primary my-1 mx-2" onClick={handleCopy}>Copy Text</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your Text Summary</h2>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes Read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to Preview"}</p>
                <h2>Emails</h2>
                <ul>{emails ? emails.map((email, index) => (
                    <li key={index}>{email}</li>
                )) : <p>No Emails found</p>}</ul>
            </div>
        </>
    )
}
