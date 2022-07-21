import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { ViewUpdate } from "@codemirror/view";
import { Extension } from "@codemirror/state";

function CodeEditor(props: { language: any; onChange: any; }) {
  return (
    <div className="h-full md:w-3/5 m-2">
      <CodeMirror
        value=""
        height="90vh"
        extensions={[props.language]}
        onChange={props.onChange}
        theme={"dark"}
      />
    </div>
  );
}

export default CodeEditor;
