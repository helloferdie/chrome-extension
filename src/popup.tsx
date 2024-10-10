import ReactDOM from "react-dom/client";
import "./index.css";
import { HeartIcon, MarkGithubIcon } from "@primer/octicons-react";

function Popup() {
  const handleClick = () => {
    console.log("Button clicked!");

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTab = tabs[0];

      chrome.scripting.executeScript({
        target: { tabId: activeTab.id! },
        func: handleInjectHelloWorld,
      });
    });
  };

  const handleInjectHelloWorld = () => {
    console.log("Message from Chrome Extension: Hello World");
  };

  return (
    <div className="flex flex-col w-64 gap-2 p-4 antialiased">
      <h1 className="text-2xl font-bold font-rubik">Hello, World!</h1>
      <div>
        This is a Chrome extension built with React + Typescript + TailwindCSS.
      </div>

      <button
        type="button"
        className="px-2 py-1 my-4 text-xs font-semibold text-gray-900 bg-white rounded shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        onClick={handleClick}
      >
        Click Me!
      </button>

      <div className="flex flex-col gap-2 mt-8">
        <a
          href="https://github.com/helloferdie"
          target="_blank"
          className="flex items-center justify-center gap-1 px-4 py-2 space-x-2 font-medium text-gray-800 transition duration-300 bg-gray-100 border border-gray-300 rounded-md shadow-sm hover:bg-gray-200 font-rubik"
        >
          <MarkGithubIcon size={20} />

          <div className="flex gap-1">
            <span className="font-medium">Follow</span>
            <span>@helloferdie</span>
          </div>
        </a>

        <a
          href="https://github.com/sponsors/helloferdie"
          target="_blank"
          className="flex items-center justify-center gap-1 px-4 py-2 space-x-2 font-medium text-white transition duration-300 bg-pink-500 border border-pink-600 rounded-md shadow-sm hover:bg-pink-600 font-rubik"
        >
          <HeartIcon size={20} />
          <div className="flex gap-1 font-medium">Sponsor</div>
        </a>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<Popup />);
