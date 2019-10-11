import { WebShellApp } from "@websh/web-shell-app";

WebShellApp.manifest({
  title:"ACE Editor",
  icon: "/icon.svg",
  api: {
    file: {
      formats: {
        "text-file" : {
          type: "text/plain text/*",
          title: "Text File",
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
  return editor.getValue();
})

WebShellApp.command('file-new',()=>{
  editor.setValue("")
})

var editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");