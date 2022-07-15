import React from "react";
import Navbar from "./NavBar";
import DropDownMenu from "./DropDownMenu";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { html } from "@codemirror/lang-html";
import { java } from "@codemirror/lang-java";
import { cpp } from "@codemirror/lang-cpp";
import { php } from "@codemirror/lang-php";
import { python } from "@codemirror/lang-python";
import { rust } from "@codemirror/lang-rust"

function CodeEnvironment() {
  const [lang, setLang] = React.useState(javascript({ jsx: true }));

  const onChange = React.useCallback((value: any, viewUpdate: any) => {
    console.log("value:", value);
  }, []);
  return (
    <div className="code-environment-div">
      <Navbar />
      <div className="md:flex md:flex-row">
        <div className="h-full md:w-3/5 m-2">
          <CodeMirror
            value=""
            height="100vh"
            extensions={[lang]}
            onChange={onChange}
            theme={"dark"}
          />
        </div>
        <div className="h-full md:w-2/5 m-2">
            <DropDownMenu/>
        </div>
      </div>
    </div>
  );
}

export default CodeEnvironment;
