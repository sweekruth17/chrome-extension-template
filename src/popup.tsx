import { log } from "console"
import React, { useState } from "react"

interface messageInfo {
  sender: string
  msg: string
}

function IndexPopup({ parentdiv }) {
  const [prompt, setPrompt] = useState("")
  const [firstPromptFlag, setFirstPromptFlag] = useState(true)
  const [messages, setMessages] = useState<messageInfo[]>([])
  const [latestResp, setLatestResp] = useState("")
  const dummyResponse = `Thank you for the opportunity! If you have any more questions or if there's anything else I can help you with, feel free to ask.`
  const handleInput = () => {
    setFirstPromptFlag(false)

    const tempuser: messageInfo = { sender: "me", msg: prompt }
    const gptmsg: messageInfo = { sender: "gpt", msg: dummyResponse }
    setLatestResp(dummyResponse)
    messages.push(tempuser)
    messages.push(gptmsg)
    setPrompt("")
  }
  const removeoldtext = (cn) => {
    return cn === "msg-form_placeholder"
  }
  const handleInsert = () => {
    console.log("in insert3")
    const parentDiv = document
      .getElementById("uniqueaibutton")
      .parentElement.querySelector("p")
    parentDiv.innerText = ""
    parentDiv.innerText = latestResp

    const submitButton: any = document.getElementsByClassName(
      "msg-form__send-button"
    )
    submitButton[0].removeAttribute("disabled")

    console.log(parentDiv)
    //text removal

    const temp: any = document.getElementsByClassName("msg-form__placeholder")
    temp[0].classList.remove("msg-form__placeholder")
  }
  //absolute - main div
  return (
    <div className="flex flex-col font-popup items-end p-[26px] gap-[26px]  w-[870px] h-auto bg-[#F9FAFB] shadow-lg rounded-[15px] ">
      {firstPromptFlag ? (
        <div className="hidden"></div>
      ) : (
        <div className=" flex w-full flex-col p-1.5 gap-y-4 overflow-y-auto max-h-[230px]">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`chat-bubble ${
                message.sender === "me"
                  ? " place-self-end max-w-[631px] justify-end  text-left  rounded-md leading-[36px] text-[24px] bg-[#DFE1E7] text-[#666D80] font-popup"
                  : " bg-[#DBEAFE] text-[#666D80] flex  max-w-[631px] text-left justify-start   rounded-md leading-[36px] text-[24px] font-popup"
              }`}>
              {message.sender === "me" && <p className="p-4 ">{message.msg}</p>}

              {message.sender !== "me" && (
                <>
                  <p className="p-4 ">{message.msg}</p>
                </>
              )}
            </div>
          ))}
        </div>
      )}

      <input
        type="text"
        placeholder="Your prompt"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className=" box-border flex-none w-[818px] h-[61px] border border-black  bg-[#ffff] self-stretch flex-grow-1   rounded-xl py-[5px] px-[16px] text-[#A4ACB9] font-medium text-[24px]  font-popup leading-[29px]  placeholder-[24px]"
      />
      {/* </div> */}
      <div className="flex flex-row gap-x-4">
        {!firstPromptFlag && (
          <button
            className="flex flex-row gap-x-[10px] justify-center items-center align-content-center  py-3 px-6 gpa-x-[10px] w-[141px] h-[53px] border-2 border-[#666D80] rounded-lg font-popup text-[24px] font-medium leading-[29px] text-[#666D80]"
            onClick={handleInsert}>
            <span className="flex w-[15px] h-[17px] my-auto items-center align-content-center">
              {" "}
              <svg
                width="15"
                height="17"
                viewBox="0 0 15 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6.2333 12.3666V1.43331C6.2333 1.05553 6.3613 0.739087 6.6173 0.483976C6.8733 0.228865 7.18975 0.100864 7.56663 0.0999756C7.94441 0.0999756 8.2613 0.227976 8.5173 0.483976C8.7733 0.739976 8.90086 1.05642 8.89997 1.43331V12.3666L12.7666 8.49998C13.0111 8.25553 13.3222 8.13331 13.7 8.13331C14.0777 8.13331 14.3889 8.25553 14.6333 8.49998C14.8777 8.74442 15 9.05553 15 9.43331C15 9.81109 14.8777 10.1222 14.6333 10.3666L8.49997 16.5C8.2333 16.7666 7.92219 16.9 7.56663 16.9C7.21108 16.9 6.89997 16.7666 6.6333 16.5L0.499967 10.3666C0.255522 10.1222 0.133301 9.81109 0.133301 9.43331C0.133301 9.05553 0.255522 8.74442 0.499967 8.49998C0.744411 8.25553 1.05552 8.13331 1.4333 8.13331C1.81108 8.13331 2.12219 8.25553 2.36663 8.49998L6.2333 12.3666Z"
                  fill="#666D80"
                />
              </svg>
            </span>
            Insert
          </button>
        )}
        <button
          onClick={handleInput}
          className=" flex flex-row items-center align-content-center text-[24px] font-popup leading-[29px]  max-w-[378px] h-[53px] bg-[#3B82F6] py-[12px] px-[24px]  text-white rounded-lg gap-[10px]">
          <span className="flex w-[24px] h-[24px] text-white">
            {firstPromptFlag ? (
              <svg
                className="flex"
                width="24"
                height="24"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M24.456 11.6075L2.45599 0.607504C2.28356 0.521271 2.08988 0.486719 1.89827 0.508009C1.70665 0.529299 1.52528 0.605523 1.37599 0.727504C1.23341 0.846997 1.12699 1.00389 1.0687 1.18055C1.0104 1.35721 1.00254 1.54662 1.04599 1.7275L4.00599 12.4975L1.00599 23.2375C0.965214 23.3886 0.960455 23.5471 0.992092 23.7003C1.02373 23.8535 1.09088 23.9972 1.18815 24.1198C1.28541 24.2423 1.41008 24.3403 1.55212 24.4059C1.69416 24.4715 1.84962 24.5029 2.00599 24.4975C2.16253 24.4966 2.31667 24.4589 2.45599 24.3875L24.456 13.3875C24.6198 13.3036 24.7573 13.1761 24.8532 13.0191C24.9492 12.862 25 12.6816 25 12.4975C25 12.3135 24.9492 12.133 24.8532 11.9759C24.7573 11.8189 24.6198 11.6914 24.456 11.6075ZM3.55599 21.6075L5.76599 13.4975H15.006V11.4975H5.76599L3.55599 3.3875L21.766 12.4975L3.55599 21.6075Z"
                  fill="white"
                />
              </svg>
            ) : (
              <svg
                width="20"
                height="29"
                viewBox="0 0 20 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10 4.31812V0.5L5 5.59088L10 10.6819V6.86356C14.1248 6.86356 17.5 10.2999 17.5 14.5C17.5 15.7727 17.1875 16.9821 16.6248 18.0635L18.4375 19.9092C19.4373 18.3181 20 16.4724 20 14.5C20 8.90006 15.4999 4.31812 10 4.31812ZM10 22.1365C5.87494 22.1365 2.5 18.6997 2.5 14.5C2.5 13.2273 2.8125 12.0182 3.37494 10.9362L1.5625 9.09087C0.562438 10.6181 0 12.5273 0 14.5C0 20.0999 4.50012 24.6819 10 24.6819V28.5L15 23.4092L10 18.3181V22.1365Z"
                  fill="white"
                />
              </svg>
            )}
          </span>
          {firstPromptFlag ? "Generate" : "Regenerate"}
        </button>
      </div>
    </div>
  )
}

export default IndexPopup
