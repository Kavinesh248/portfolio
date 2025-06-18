const CustomReplyBox = function ({ reply, svg }) {
  return (
    <div className="bg-zinc-900 rounded-xl p-4 text-black-primary">
      <div className="flex items-center space-x-3">
        <div className="bg-black-primary p-2 rounded-lg">
          <svg className="w-5 h-5" fill="white" viewBox="0 0 20 20">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
        </div>
        <div>
          <h3 className="text-background-primary">Contact</h3>
          <p className="text-sm text-zinc-400">Get in touch with me</p>
        </div>
      </div>
      <a
        href={`mailto:${reply}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center mt-3 px-4 py-2 bg-background-primary hover:bg-background-primary/40 transition-colors rounded-lg text-sm font-medium"
      >
        {reply}
        <svg
          className="w-4 h-4 ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </a>
    </div>
  );
};

export default CustomReplyBox;
