(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{142:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(25),o=n.n(r),l=n(6),s=n(7),c=n(9),u=n(8),p=n(10),d=n(4),f=n(5),h={headerHeight:64,statusBarHeight:40,zipItemHeight:40,zipIconPadding:10,headerIconPadding:10,imageTypes:["png","jpg","jpeg","bmp"],colours:{bar:"#20232A",barText:"#FFF",separator:"#a6a6a6"}};function m(){var e=Object(d.a)(["\n  height: ","px;\n  background-color: ",";\n  color: ",";\n  padding-left: 20px;\n  line-height: ","px;\n"]);return m=function(){return e},e}var g=f.a.div(m(),h.statusBarHeight,h.colours.bar,h.colours.barText,h.statusBarHeight),v=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement(g,null,this.props.statusText)}}]),t}(a.Component),b=n(71),w=n.n(b),F=n(72),y=n.n(F),k=n(26),O=n.n(k),x=n(73),j=n.n(x),E=n(74),B=n.n(E);function C(){var e=Object(d.a)(["\n  position: relative;\n  top: ","px;\n  width: ","px;\n  height: ","px;\n  margin-right: 20px;\n"]);return C=function(){return e},e}function S(){var e=Object(d.a)(["\n  float: right;\n  font-size: 25px;\n  font-family: 'Arial', sans-serif;\n  cursor: pointer;\n  height: 1px;\n"]);return S=function(){return e},e}function Z(){var e=Object(d.a)(["\n  height: ","px;\n  background-color: ",";\n  color: ",";\n  line-height: ","px;\n  padding-left: 20px;\n  font-size: 30px;\n  font-family: 'Arial Black', 'Arial', sans-serif;\n"]);return Z=function(){return e},e}var I,P=f.a.div(Z(),h.headerHeight,h.colours.bar,h.colours.barText,h.headerHeight),z=f.a.div(S()),A=h.headerHeight-2*h.headerIconPadding,H=f.a.img(C(),h.headerIconPadding,A,A),T=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement(P,null,"Covalent Zip",i.a.createElement(z,null,this.props.zipOpen?i.a.createElement(a.Fragment,null,i.a.createElement(H,{onClick:this.props.newFolder,src:O.a}),i.a.createElement(H,{onClick:this.props.uploadFile,src:w.a}),i.a.createElement(H,{onClick:this.props.downloadZip,src:y.a}),i.a.createElement(H,{onClick:this.props.closeZip,src:j.a})):i.a.createElement(H,{onClick:this.props.createZip,src:B.a})))}}]),t}(a.Component),N=n(75),U=n(38),L=n.n(U);function R(e){return e.split("/").length-1}var W={loadFile:function(e,t){var n=new FileReader;n.onloadend=function(e){(I=new L.a).loadAsync(n.result).then(function(e){t(null,e)}).catch(function(e){t(e,null)})},n.readAsArrayBuffer(e)},filesInPath:function(e){var t=R(e),n={files:[],folders:[]};for(var a in I.files)if(a!==e&&a.includes(e)){var i=R(a),r=a.replace(e,"");if(i===t){n.files.push(r);continue}i===t+1&&/\/$/.test(a)&&n.folders.push(r.replace("/",""))}return n},getFileAsBlob:function(e,t){I.file(e).async("blob").then(function(e){t(null,e)}).catch(function(e){t(e,null)})},createNew:function(){I=new L.a},getZipAsBlob:function(e){I.generateAsync({type:"blob"}).then(function(t){e(null,t)},function(t){e(t,null)})},createFolder:function(e){I.folder(e)},addFile:function(e,t,n){var a=new FileReader;a.onloadend=function(e){I.file(t,e.result),n(!0)},a.onerror=function(e){console.log(e),n(!1)},a.readAsArrayBuffer(e)}},D=n(76),J=n.n(D),$=n(77),q=n.n($),G=n(78),K=n.n(G),M=n(79),Q=n.n(M);function V(){var e=Object(d.a)(["\n  width: ","px;\n  height: ","px;\n  margin-top: ","px;\n  margin-right: 5px;\n  float: left;\n"]);return V=function(){return e},e}function X(){var e=Object(d.a)(["\n  height: ","px;\n  line-height: ","px;\n  border-bottom: 1px solid ",";\n  padding-left: 20px;\n  cursor: pointer;\n"]);return X=function(){return e},e}function Y(){var e=Object(d.a)(["\n  height: calc(100% - ","px);\n  overflow-y: scroll;\n"]);return Y=function(){return e},e}var _=f.a.div(Y(),h.headerHeight+h.statusBarHeight),ee=f.a.div(X(),h.zipItemHeight,h.zipItemHeight,h.colours.separator),te=h.zipItemHeight-h.zipIconPadding,ne=f.a.img(V(),te,te,(h.zipItemHeight-te)/2),ae=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"determineIcon",value:function(){if(!this.props.file&&!this.props.folder)return K.a;if(this.props.file){var e=this.props.item.split("."),t=e[e.length-1];return h.imageTypes.includes(t.toLowerCase())?q.a:J.a}return this.props.up?Q.a:O.a}},{key:"render",value:function(){return i.a.createElement(ee,{onClick:this.props.onClick},i.a.createElement(ne,{src:this.determineIcon()}),i.a.createElement("div",{style:{float:"left"}},this.props.item))}}]),t}(a.Component),ie=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"hasContent",value:function(){return this.props.contents.files.length>0||this.props.contents.folders.length>0}},{key:"render",value:function(){var e=this;return i.a.createElement(_,null,this.props.isRoot?i.a.createElement(a.Fragment,null):i.a.createElement(ae,{item:"..",folder:!0,up:!0,onClick:function(){e.props.upOneFolder()}}),this.hasContent()?i.a.createElement(a.Fragment,null,this.props.contents.folders.map(function(t){return i.a.createElement(ae,{key:t,item:t,folder:!0,onClick:function(){e.props.enterFolder(t)}})}),this.props.contents.files.map(function(t){return i.a.createElement(ae,{key:t,item:t,file:!0,onClick:function(){e.props.downloadFile(t)}})})):i.a.createElement(ae,{item:"This folder is empty"}))}}]),t}(a.Component),re=n(39),oe=n.n(re);function le(){var e=Object(d.a)(["\n  height: calc(100% - ","px);\n"]);return le=function(){return e},e}var se=Object(f.a)(N.a)(le(),h.headerHeight+h.statusBarHeight),ce=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={mainTitle:"A zip app built with web technologies",loading:!1,fileName:"unknown.zip"},n.fileInput=i.a.createRef(),n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"handleFiles",value:function(e){var t=this;if(e[0]){var n=e[0].name;this.props.updateStatusBar("Loading preview..."),W.loadFile(e[0],function(e,a){if(t.setState({loading:!1}),e)return t.props.updateStatusBar("Failed to open ".concat(n)),console.log(e),void t.setState({mainTitle:"Whoops! Are you sure that was a zip file?"});t.props.updateStatusBar("Previewing ".concat(n)),t.props.zipLoaded(n)}),this.setState({loading:!0,fileName:n})}else this.props.updateStatusBar("Preview failed, no files dropped.")}},{key:"render",value:function(){var e=this;return i.a.createElement(a.Fragment,null,i.a.createElement(se,{onDrop:function(t){e.handleFiles(t)}},this.state.loading?i.a.createElement(a.Fragment,null,i.a.createElement("h1",null,"Unpacking preview..."),i.a.createElement("h4",null,"Please wait while load ",this.state.fileName)):i.a.createElement(a.Fragment,null,i.a.createElement("h1",null,this.state.mainTitle),i.a.createElement("label",{htmlFor:"clickInput"},i.a.createElement("h4",null,"Drop a file on the window, or click here to browse")),i.a.createElement("input",{id:"clickInput",type:"file",onChange:function(){e.handleFiles(e.fileInput.current.files)},ref:this.fileInput,style:{position:"fixed",top:"-1000px"}}))))}}]),t}(a.Component),ue=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={browsing:!1,relativePath:"",folderContents:[],status:"Idle",fileName:"none"},n.fileUploader=i.a.createRef(),n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"updateStatusBar",value:function(e){this.setState({status:e})}},{key:"browseZipFolder",value:function(e){this.setState({relativePath:e,folderContents:W.filesInPath(e),browsing:!0})}},{key:"enterFolder",value:function(e){this.browseZipFolder("".concat(this.state.relativePath).concat(e,"/"))}},{key:"upOneFolder",value:function(){var e=this.state.relativePath.split("/");e.pop(),e.pop();var t=e.join("/"),n="".concat(t).concat(""===t?"":"/");this.browseZipFolder(n)}},{key:"downloadFile",value:function(e){var t=this,n="".concat(this.state.relativePath).concat(e);W.getFileAsBlob(n,function(n,a){if(n)return t.updateStatusBar("Failed to download file."),void console.log(n);oe.a.saveAs(a,e)})}},{key:"closeZip",value:function(){this.updateStatusBar("Preview closed"),this.setState({browsing:!1})}},{key:"createZip",value:function(){W.createNew(),this.zipLoaded("newZip.zip"),this.updateStatusBar("Zip file created")}},{key:"downloadZip",value:function(){var e=this;W.getZipAsBlob(function(t,n){if(t)return e.updateStatusBar("Failed to compress files!"),void console.log(t);oe.a.saveAs(n,e.state.fileName)})}},{key:"newFolder",value:function(){var e=prompt("Name for new folder:");e?(W.createFolder("".concat(this.state.relativePath).concat(e)),this.browseZipFolder(this.state.relativePath),this.updateStatusBar("Created ".concat(e,"/"))):this.updateStatusBar("Can't create a folder with no name!")}},{key:"uploadFile",value:function(){this.fileUploader.current.click()}},{key:"handleFileUpload",value:function(){var e=this.fileUploader.current.files;if(e.length>0){var t=function(t){t||(a=!0),++n===e.length&&(this.updateStatusBar(a?"Some errors occurred while uploading. Check console.":"All files added successfully."),this.browseZipFolder(this.state.relativePath))},n=0,a=!1,i=!0,r=!1,o=void 0;try{for(var l,s=e[Symbol.iterator]();!(i=(l=s.next()).done);i=!0){var c=l.value;W.addFile(c,"".concat(this.state.relativePath).concat(c.name),t.bind(this))}}catch(u){r=!0,o=u}finally{try{i||null==s.return||s.return()}finally{if(r)throw o}}}else this.updateStatusBar("No files were selected")}},{key:"zipLoaded",value:function(e){this.setState({fileName:e}),this.browseZipFolder("")}},{key:"render",value:function(){var e=this;return i.a.createElement(a.Fragment,null,i.a.createElement(T,{closeZip:function(){e.closeZip()},createZip:function(){e.createZip()},downloadZip:function(){e.downloadZip()},newFolder:function(){e.newFolder()},uploadFile:function(){e.uploadFile()},zipOpen:this.state.browsing}),this.state.browsing?i.a.createElement(ie,{isRoot:""===this.state.relativePath,enterFolder:function(t){e.enterFolder(t)},upOneFolder:function(){e.upOneFolder()},updateStatusBar:function(t){e.updateStatusBar(t)},downloadFile:function(t){e.downloadFile(t)},contents:this.state.folderContents}):i.a.createElement(ce,{zipLoaded:function(t){e.zipLoaded(t)},updateStatusBar:function(t){e.updateStatusBar(t)}}),i.a.createElement(v,{statusText:this.state.status}),i.a.createElement("input",{id:"fileUploader",type:"file",onChange:this.handleFileUpload.bind(this),ref:this.fileUploader,style:{position:"fixed",top:"-1000px"}}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(ue,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},26:function(e,t,n){e.exports=n.p+"static/media/folder.aff575ad.png"},71:function(e,t,n){e.exports=n.p+"static/media/up.35c32a88.png"},72:function(e,t,n){e.exports=n.p+"static/media/save.2f5375b3.png"},73:function(e,t,n){e.exports=n.p+"static/media/cross.116715a0.png"},74:function(e,t,n){e.exports=n.p+"static/media/create.d2a13e88.png"},76:function(e,t,n){e.exports=n.p+"static/media/document.bd9e8bda.png"},77:function(e,t,n){e.exports=n.p+"static/media/image.c968770d.png"},78:function(e,t,n){e.exports=n.p+"static/media/no.982f7f9d.png"},79:function(e,t,n){e.exports=n.p+"static/media/left.4429c048.png"},81:function(e,t,n){e.exports=n(142)},94:function(e,t){},96:function(e,t){}},[[81,2,1]]]);
//# sourceMappingURL=main.47e09c61.chunk.js.map