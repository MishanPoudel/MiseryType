import React from "react";
import TypingInput from "./TypingInput";

const initialText = "This is a text to type and to type this text, you have to type a text and the text that you have to type is this";

const WordContainer = () => {

  // const handleInput = (event) => {
  //   const enteredText = event.target.value.trim();
  //   const newText = initialText.substring(0, enteredText.length);

  //   const isMatch = enteredText === newText;
  //   setColor(isMatch ? 'success' : 'error');
  // };

  const characters = initialText.split("").map((char, i) => (
    <React.Fragment key={i}>
        <div className={`character inline-block text-primary`}>{char}</div>
      {(initialText[i] === " " && <div className="character">&nbsp;</div>)}
    </React.Fragment>
  ));
  console.log(characters)

  return (
    <div className="relative select-none my-24">
      <div className={`border-2 border-primary absolute select-none flex top-1.5 left-[15.5%] text-gray-500 text-4xl z-1 px-[3%] py-[3%] text-grey h-[40vh] w-[70vw] text-wrap`}>
        {initialText}
      </div>
      <div>
        <TypingInput/>
      </div>
    </div>
  );
};

export default WordContainer;
