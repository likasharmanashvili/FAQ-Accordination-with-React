import React from 'react'
import { useState } from "react";
import "./App.css";
import image from './images/img.png'
import QuestionFoo from './components/questions';
import img from "./images/desk.img.svg"


function App () {

  const [answer, setAnswer] = useState(0);


  return (
    <div className='mainContainer'>
 
 <div className='containerChild'>
 <img className="image" src={img} alt="Image" />
 <img className="img" src={image} alt="Image" />
 </div>

 <div className='faq_container'>
<h1>FAQ</h1>
<div className='questionsContainer'>
<QuestionFoo 
questions_child="How many team members can I invite?"
fontWeight={answer == 1 ? "700" : "400"}
img_rotate={answer == 1 ? "180deg" : "360deg"}
onClick={() => {
  answer !== 1 ? setAnswer(1) : answer == 1 && setAnswer(0);
}}
answerShowHide={answer == 1 ? "block" : "none"}
answerChild="You can invite 5 person"
/>
<hr className='row'></hr>
<QuestionFoo 
questions_child="What is the maximum file upload size?"
fontWeight={answer == 2 ? "700" : "400"}
img_rotate={answer == 2 ? "180deg" : "360deg"}
onClick={() => {
  answer !== 2 ? setAnswer(2) : answer == 2 && setAnswer(0);
}}
answerShowHide={answer == 2 ? "block" : "none"}
answerChild="No more than 2GB."
/>
<hr className='row'></hr>
<QuestionFoo 
questions_child="How do I reset my password?"
fontWeight={answer == 3 ? "700" : "400"}
img_rotate={answer == 3 ? "180deg" : "360deg"}
onClick={() => {
  answer !== 3 ? setAnswer(3) : answer == 3 && setAnswer(0);
}}
answerShowHide={answer == 3 ? "block" : "none"}
answerChild="You can reset your password with your phone
number or your Gmail"
/>
<hr className='row'></hr>
<QuestionFoo 
questions_child="Can I cancel my subscription?"
fontWeight={answer == 4 ? "700" : "400"}
img_rotate={answer == 4 ? "180deg" : "360deg"}
onClick={() => {
  answer !== 4 ? setAnswer(4) : answer == 4 && setAnswer(0);
}}
answerShowHide={answer == 4 ? "block" : "none"}
answerChild=" yes You can,in settings"
/>
<hr className='row'></hr>
<QuestionFoo 
questions_child="Do you provide additional support?"
fontWeight={answer == 5 ? "700" : "400"}
img_rotate={answer == 5 ? "180deg" : "360deg"}
onClick={() => {
  answer !== 5 ? setAnswer(5) : answer == 5 && setAnswer(0);
}}
answerShowHide={answer == 5 ? "block" : "none"}
answerChild=" yes, We have 24/7 online support service."
/>
<hr className='row'></hr>
</div>

 </div>

 </div>
  )
}

export default App