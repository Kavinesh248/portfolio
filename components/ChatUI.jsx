import { preResponses } from "@/constants";
import Link from "next/link";
import { useEffect, useRef } from "react";

const ChatUI = function ({ messages, handleSubmit, input, setInput }) {
  const dummy = useRef(null);

  useEffect(() => {
    if (dummy.current) {
      dummy.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="h-full w-full relative flex-column items-center">
      <div className="flex-column w-full h-full">
        <div className="overflow-y-scroll scrollbar-hide pb-30">
          <div className="text-black-primary common-padding mb-4 overflow-y-scroll md:overflow-hidden chat-response">
            <p className="mb-4">{preResponses.response1}</p>
            <p className="mb-4">{preResponses.response2()}</p>
            <p className="mb-6">{preResponses.response3()}</p>
            <p className="space-y-1">{preResponses.response4()}</p>
            <p className="mb-2">{preResponses.response5}</p>
          </div>

          {messages.length !== 0 && (
            <div className="space-y-4 md:space-y-8 border-t border-black-primary common-padding pt-4">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`chat-response flex  ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {msg.role === "user" ? (
                    <div className="flex items-start gap-2 max-w-[80%]">
                      <div className="bg-black-primary text-background-primary px-3 py-1 rounded-lg">
                        <p className="whitespace-pre-wrap">{msg.content}</p>
                      </div>
                      <div className="flex items-center justify-center border border-black-primary rounded-full shadow-sm select-none size-8 md:size-10 shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          viewBox="0 0 256 256"
                          className="size-4 md:size-6"
                        >
                          <path d="M230.93,220a8,8,0,0,1-6.93,4H32a8,8,0,0,1-6.92-12c15.23-26.33,38.7-45.21,66.09-54.16a72,72,0,1,1,73.66,0c27.39,8.95,50.86,27.83,66.09,54.16A8,8,0,0,1,230.93,220Z"></path>
                        </svg>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-start flex-1 gap-2 w-[80%]">
                      <div className="flex items-center justify-center bg-black-primary text-background-primary rounded-full shadow-sm select-none size-8 md:size-10 shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          viewBox="0 0 256 256"
                          className="size-4 md:size-6"
                        >
                          <path d="M248,124a56.11,56.11,0,0,0-32-50.61V72a48,48,0,0,0-88-26.49A48,48,0,0,0,40,72v1.39a56,56,0,0,0,0,101.2V176a48,48,0,0,0,88,26.49A48,48,0,0,0,216,176v-1.41A56.09,56.09,0,0,0,248,124ZM88,208a32,32,0,0,1-31.81-28.56A55.87,55.87,0,0,0,64,180h8a8,8,0,0,0,0-16H64A40,40,0,0,1,50.67,86.27,8,8,0,0,0,56,78.73V72a32,32,0,0,1,64,0v68.26A47.8,47.8,0,0,0,88,128a8,8,0,0,0,0,16,32,32,0,0,1,0,64Zm104-44h-8a8,8,0,0,0,0-16h8a55.87,55.87,0,0,0,7.81-.56A32,32,0,1,1,168,144a8,8,0,0,0,0-16,47.8,47.8,0,0,0-32,12.26V72a32,32,0,0,1,64,0v6.73a8,8,0,0,0,5.33,7.54A40,40,0,0,1,192,164Zm16-52a8,8,0,0,1-8,8h-4a36,36,0,0,1-36-36V80a8,8,0,0,1,16,0v4a20,20,0,0,0,20,20h4A8,8,0,0,1,208,112ZM60,120H56a8,8,0,0,1,0-16h4A20,20,0,0,0,80,84V80a8,8,0,0,1,16,0v4A36,36,0,0,1,60,120Z"></path>
                        </svg>
                      </div>
                      <div className="bg-gray-100 text-black-primary p-3 rounded-lg">
                        <p className="whitespace-pre-wrap">{msg.content}</p>
                      </div>
                    </div>
                  )}
                  <div ref={dummy} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatUI;
