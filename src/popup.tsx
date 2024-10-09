import ReactDOM from "react-dom/client";
import "./index.css";

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
    console.log("Hello World");
  };

  return (
    <div className="w-56 p-4">
      <h1 className="text-2xl font-bold">Hello, Chrome Extension!</h1>
      <p>This is a popup powered by React and Vite.</p>

      <button
        type="button"
        className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
        onClick={handleClick}
      >
        Click me
      </button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<Popup />);
