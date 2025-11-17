import { MouseScroll } from "@phosphor-icons/react";
import React, { useState, useCallback, useEffect, useRef } from "react";
import icon1 from "../assets/Solid_head_heart.svg";
import icon2 from "../assets/carbon_array_numbers.svg";
import { Checkbox } from "@radix-ui/themes";
import ToggleGroupDemo from "./ToggleGroupDemo";

function NewPassGen() {
  const [length, setLength] = useState(6);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [pass, setPass] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+{}[]/.?<>:;~";

    let newPass = "";
    const array = new Uint32Array(length);
    crypto.getRandomValues(array);

    for (let i = 0; i < length; i++) {
      newPass += str[array[i] % str.length];
    }

    if (numberAllowed && !/[0-9]/.test(newPass)) {
      const randomIndex = Math.floor(Math.random() * length);
      const randomDigit = Math.floor(Math.random() * 10).toString();
      newPass =
        newPass.substring(0, randomIndex) +
        randomDigit +
        newPass.substring(randomIndex + 1);
    }

    setPass(newPass);
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className="flex flex-col w-full h-screen justify-between pb-6">
        <span className="text-(size:--fs-xxxl) text-nowrap font-[Work_Sans] tracking-[-0.6rem] text-[#A9C5EA66] leading-[0.7] text-center">
          Password Generator
        </span>

        {/* password display */}
        <div className="container-max">
          <div className="container">
            <span
              className="text-[6rem] font-[Inclusive_Sans] tracking-[-0.1rem] text-[#11121440] flex justify-center"
              ref={passwordRef}
            >
              {pass}
            </span>
          </div>

          {/* controls */}
          <div className="controls flex justify-center gap-6 items-center">
            {/* SLIDER SECTION */}
            <div className="slider flex bg-gray-100 p-2 rounded-2xl gap-4 justify-evenly items-center h-14">
              <MouseScroll size={32} weight="light" className="rotate-90" />
              <ToggleGroupDemo value={length} onValueChange={setLength} />
            </div>

            {/* NUMBERS OPTION */}
            <div
              className={`bg-gray-100 rounded-2xl p-4 flex gap-8 w-xs items-center ${
                numberAllowed
                  ? "shadow-[0_0_0_4px_rgba(249,115,22,0.25)] border border-amber-500"
                  : ""
              }`}
            >
              <label className="flex items-center gap-2 cursor-pointer w-full justify-between">
                <div className="flex">
                  <img className="pr-2" src={icon2} alt="numbers" />
                  <span className="font-medium text-gray-500">
                    I want numbers in there!
                  </span>
                </div>

                <Checkbox
                  checked={numberAllowed}
                  color="orange"
                  onCheckedChange={setNumberAllowed}
                />
              </label>
            </div>

            {/* CHAR OPTION */}
            <div
              className={`bg-gray-100 rounded-2xl p-4 flex gap-8 w-xs items-center ${
                charAllowed
                  ? "shadow-[0_0_0_4px_rgba(249,115,22,0.25)] border border-amber-500"
                  : ""
              }`}
            >
              <label className="flex items-center gap-2 cursor-pointer w-full justify-between">
                <div className="flex">
                  <img className="pr-2" src={icon1} alt="chars" />
                  <span className="font-medium text-gray-500">
                    I want characters in there!
                  </span>
                </div>

                <Checkbox
                  checked={charAllowed}
                  color="orange"
                  onCheckedChange={setCharAllowed}
                />
              </label>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="footer">
          <span className="text-[28px] font-[DM_Sans] text-[#11121480] flex justify-center">
            Made by &nbsp; <span className="text-black">Shivangi</span>
          </span>
        </div>
      </div>
    </>
  );
}

export default NewPassGen;
