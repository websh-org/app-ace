import { WebShellApp } from "@websh/web-shell-app";
import manifest from "./manifest.json";
WebShellApp.manifest(manifest);

WebShellApp.command('file-open',({format,content,extension})=>{
  const modes = {
    js: "javascript",
    sql: "sql"
  };
  const mode = modes[extension] || "text";
  editor.session.setMode("ace/mode/"+mode);
  
  editor.setValue(content);
})

WebShellApp.command('file-save',()=>{
  return {content:editor.getValue(),type:"text/plain"};
})

WebShellApp.command('file-new',()=>{
  editor.setValue("")
})

var editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");