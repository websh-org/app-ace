import { WebShellApp } from "@websh/web-shell-app";
import manifest from "./manifest.json";
WebShellApp.manifest(manifest);

var modelist = ace.require("ace/ext/modelist");
console.log({modelist})

WebShellApp.command('file-open',({format,content,extension})=>{
  var mode = modelist.getModeForPath("file."+extension);
  editor.session.setMode(mode.mode);
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