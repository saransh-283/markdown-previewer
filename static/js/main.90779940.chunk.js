(this["webpackJsonpmarkdown-previewer"]=this["webpackJsonpmarkdown-previewer"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var i=n(2),o=n.n(i),s=n(5),r=n.n(s),a=n(6),d=n(7),c=n(1),u=n(9),h=n(8),l=n(4),m=n.n(l),v=(n(14),n(0)),w=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var i;return Object(a.a)(this,n),(i=t.call(this,e)).constants={editor:document.getElementById("editor-pane"),resizer:document.getElementById("resizer"),preview:document.getElementById("preview-pane"),viewport:document.getElementsByTagName("body")[0],viewportWidth:0,initialEditorWidth:0},i.state={editorWidth:"29.5vw",previewWidth:"70vw",text:i.props.initial,markdown:m()(i.props.initial)},i.handleChange=i.handleChange.bind(Object(c.a)(i)),i.resizerMouseDown=i.resizerMouseDown.bind(Object(c.a)(i)),i.documentMouseMove=i.documentMouseMove.bind(Object(c.a)(i)),i.documentMouseUp=i.documentMouseUp.bind(Object(c.a)(i)),i}return Object(d.a)(n,[{key:"handleChange",value:function(e){this.setState({text:e.target.value,markdown:m()(e.target.value)})}},{key:"resizerMouseDown",value:function(){this.constants.viewportWidth=this.constants.viewport.getBoundingClientRect().width,document.body.addEventListener("mousemove",this.documentMouseMove),document.body.addEventListener("mouseup",this.documentMouseUp)}},{key:"documentMouseMove",value:function(e){var t=e.clientX;this.setState({editorWidth:"".concat(100*t/this.constants.viewportWidth,"vw")}),this.setState({previewWidth:"".concat(100-100*t/this.constants.viewportWidth,"vw")})}},{key:"documentMouseUp",value:function(){document.body.removeEventListener("mousemove",this.documentMouseMove)}},{key:"render",value:function(){return Object(v.jsxs)("div",{id:"main",children:[Object(v.jsx)("div",{id:"editor-pane",style:{width:this.state.editorWidth},children:Object(v.jsx)("textarea",{onChange:this.handleChange,value:this.state.text,id:"editor"})}),Object(v.jsx)("div",{id:"resizer",onMouseDown:this.resizerMouseDown}),Object(v.jsx)("div",{id:"preview-pane",style:{width:this.state.previewWidth},children:Object(v.jsx)("div",{id:"preview",dangerouslySetInnerHTML:{__html:this.state.markdown}})})]})}}]),n}(o.a.Component);n(16),n(17);r.a.render(Object(v.jsx)(w,{initial:"# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.com), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbererd lists too.\n1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n\n![React Logo w/ Text](https://goo.gl/Umyytc)\n"}),document.getElementById("render"))}},[[18,1,2]]]);
//# sourceMappingURL=main.90779940.chunk.js.map