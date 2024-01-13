import { useState } from "react";

const initialText = "This is a text to type";

export default function WordContainer() {
  const [color, setColor] = useState("primary");

  const handleInput = (event) => {
    const enteredText = event.target.value.trim();
    const newText = initialText.substring(0, enteredText.length);

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
        <div className="absolute top-1.5 left-[15.5%] text-gray-500 text-lg z-1 px-[0.6%] py-[0.2%] text-grey">
          {initialText}
        </div>
        <div className="flex justify-center">
          <textarea
            className={`textarea textarea-${color} w-[70%] h-[40vh] px-[1%] text-lg z-2 text-${color}`}
            onChange={handleInput}
          />
        </div>
      </div>
    </>
  );
}
