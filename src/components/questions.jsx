import React from "react";
import downArrow from '../images/down.arrow.png'


function QuestionFoo 

({
    questions_child,
    fontWeight,img_rotate,onClick,answerShowHide,answerChild
})

{
return (

    <div className="Main">
        <div className="Question_ToShow">

<h1 style={{fontWeight:fontWeight}}
className="question">
   {questions_child}
</h1>

        <img style={{rotate:img_rotate}}
        onClick={onClick}
        className="arrow"
        src={downArrow}
        alt="arrowImage">
        </img>
        </div>

        <p style={{display:answerShowHide}} className="answer">
          {answerChild}
        </p>

    </div>

)

}

export default QuestionFoo