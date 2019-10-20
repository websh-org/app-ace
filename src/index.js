import { WebShellApp } from "@websh/web-shell-app";

WebShellApp.manifest({
  name: "ACE Editor",
  icon: "ace-logo.png",
  description: "Ace Code Editor for WebShell",
  version:"1.4.6",
  license:"MIT",
  homepage:"https://github.com/websh-org/app-ace#readme",
  repository:"https://github.com/websh-org/app-textarea.git",
  api: {
    file: {
      formats: {
        "text-file" : {
          type: "text/plain text/*",
          title: "Text File",
          extension:"txt *",
          encoding: "text",
          new: true,
          open: true,
          save: true
        }
      }
    }
  }
})

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