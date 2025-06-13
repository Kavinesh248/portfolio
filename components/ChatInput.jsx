const ChatInput = function ({ handleSubmit, input, setInput, ref }) {
  return (
    <div className="h-20 w-full relative bg-background-primary border-t-2 border-black-primary">
      <div className="absolute top-[-20px] left-0 w-full h-6 bg-gradient-to-t from-background-primary to-transparent z-10" />

      <div className="w-full h-full flex items-center px-4 justify-center">
        <form
          className="w-full flex relative gap-2 chat-response"
          onSubmit={handleSubmit}
        >
          <input
            ref={ref}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Send a message..."
            className="w-full p-3 rounded-md mx-auto text-black-primary text-lg border border-background-primary placeholder:text-black-primary placeholder:text-lg"
          />
          <button type="submit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M231.87,114l-168-95.89A16,16,0,0,0,40.92,37.34L71.55,128,40.92,218.67A16,16,0,0,0,56,240a16.15,16.15,0,0,0,7.93-2.1l167.92-96.05a16,16,0,0,0,.05-27.89ZM56,224a.56.56,0,0,0,0-.12L85.74,136H144a8,8,0,0,0,0-16H85.74L56.06,32.16A.46.46,0,0,0,56,32l168,95.83Z"></path>
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatInput;
