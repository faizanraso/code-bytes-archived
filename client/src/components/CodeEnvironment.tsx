import React from "react";
import Navbar from "./NavBar";
import CodeEditor from "./CodeEditor";
import { javascript } from "@codemirror/lang-javascript";
import { html } from "@codemirror/lang-html";
import { java } from "@codemirror/lang-java";
import { cpp } from "@codemirror/lang-cpp";
import { php } from "@codemirror/lang-php";
import { python } from "@codemirror/lang-python";
import { rust } from "@codemirror/lang-rust";
import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

function CodeEnvironment() {
  const [language, setLanguage] = React.useState(javascript({ jsx: true }));
  const [status, setStatus] = React.useState(null);
  const [memory, setMemory] = React.useState(null);
  const [time, setTime] = React.useState(null);

  const queryClient = useQueryClient();

  async function executeCode() {
    const response = await axios.post("");
  }

  const codeChange = React.useCallback((value: any, viewUpdate: any) => {
    console.log("value:", value);
  }, []);

  return (
    <div className="code-environment-div">
      <Navbar />
      <div className="md:flex md:flex-row">
        <CodeEditor language={language} onChange={codeChange} />
        <div className="h-full md:w-2/5 m-2">
          <div className="buttons-above-outbput">
            <label
              htmlFor="language"
              className="block mb-2 text-sm font-medium text-[#c7c7c7]"
            >
              Select a Language
            </label>
            <div className="flex flex-row">
              <select
                id="language"
                className="w-1/3 mr-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 "
              >
                <option selected value="js">
                  JavaScript
                </option>
                <option value="java">Java</option>
                <option value="cpp">C++</option>
                <option value="php">PHP</option>
                <option value="python">Python</option>
                <option value="rust">Rust</option>
              </select>
              <button className="w-1/4 m-auto border border-blue-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-blue-700 dark:border-blue-600 dark:placeholder-blue-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                Share
              </button>
              <button
                onClick={executeCode}
                className="w-1/4 m-auto border border-green-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block p-2.5 dark:bg-green-700 dark:border-green-600 dark:placeholder-green-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
              >
                Run
              </button>
            </div>
          </div>

          <div className="output-area-div mt-5">
            <label
              htmlFor="output"
              className="block mb-2 text-sm font-medium text-[#c7c7c7]"
            >
              Output
            </label>
            <textarea
              id="output"
              style={{ resize: "none" }}
              disabled
              rows={15}
              cols={33}
              className="my-3 block p-2.5 w-full text-sm text-white rounded-lg bg-[#282c34] border border-[#2c313a]"
            />
          </div>
          <div className="execution-stats-div">
            <p className="text-sm text-white my-2">
              Status:{" "}
              <span className="ml-3 font-semibold px-2 py-1 rounded-md bg-gray-300 text-black">
                {status}
              </span>
            </p>
            <p className="text-sm text-white my-2">
              Memory:{" "}
              <span className="ml-3 font-semibold px-2 py-1 rounded-md bg-gray-300 text-black">
                {memory}
              </span>
            </p>
            <p className="text-sm text-white my-2">
              Time:{" "}
              <span className="ml-3 font-semibold px-2 py-1 rounded-md bg-gray-300 text-black">
                {time}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CodeEnvironment;
