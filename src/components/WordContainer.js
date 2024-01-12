import { useState } from "react";

export default function WordContainer() {
  const [text] = useState("This is a text to type");
  const [color, setColor] = useState("primary");

  const handleInput = (event) => {
    const enteredText = event.target.textContent.trim();
    const newText = text.substring(0, enteredText.length);

    let match = true;

    for (let i = 0; i < newText.length; i++) {
      if (enteredText[i] !== newText[i]) {
        match = false;
        break;
      }
    }

    setColor(match ? "success" : "error");
  };

  return (
    <>
      <div className="relative select-none my-24">
        <div className="absolute top-1.5 left-[15.5%] text-gray-500 text-lg z-0 px-2 py-1">
          {text}
        </div>
        <div className="flex justify-center">
          <div
            contentEditable={true}
            className={`textarea textarea-${color} w-[70%] h-[40vh] px-3.5 py-2.2 text-lg`}
            onInput={handleInput}
          />
        </div>
      </div>
    </>
  );
}
