(this.webpackJsonpgifsearch=this.webpackJsonpgifsearch||[]).push([[0],{19:function(e,t,a){e.exports=a(31)},24:function(e,t,a){},25:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(16),r=a.n(c),l=(a(24),a(5)),s=a(6),u=a(8),o=a(7),m=a(10),h=a(4),f=function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState({search:e.target.value})},n.handleKeyPress=function(e){"Enter"===e.key&&n.props.fetchGif(n.state.search)},n.state={search:""},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.state.search;return i.a.createElement("div",{className:"input-container"},i.a.createElement("input",{id:"gif-search-input",value:t,onChange:this.handleChange,onKeyPress:this.handleKeyPress,placeholder:"keyword"}),i.a.createElement("button",{id:"gif-search-submit",onClick:function(){return e.props.fetchGif(t)}},"Search"))}}]),a}(i.a.Component);var d=function(e){return i.a.createElement("div",{className:"gif-result-display",onClick:function(){return e.handleClick(e.focusUrl)}},i.a.createElement("img",{src:e.url,alt:"gif",width:"150px",height:"150px"}))};var v=function(e){return i.a.createElement("div",{className:"gif-focus-display"},i.a.createElement("div",null,i.a.createElement("div",{className:"overlay"}),i.a.createElement("img",{src:e.url,alt:""})),i.a.createElement("div",null,i.a.createElement("button",{className:"close",onClick:function(){return e.handleClick("")}},"X")))},g=function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).fetchGif=function(e){e.trim().length>0&&fetch("http://api.giphy.com/v1/gifs/search?q=".concat(e,"&api_key=X8oKb5Tpms58uaWXxfKyqfoD9A9PYL9A")).then((function(e){return e.json()})).then((function(e){var t=e.data.map((function(e){return{gifUrl:e.images.preview_gif.url,focusUrl:e.images.original.url,fixed_height:e.images.fixed_height_still.url,title:e.title,key:e.id}}));n.setState({gifs:t})}))},n.handleClick=function(e){e.length?document.querySelector(".navbar").style.display="none":document.querySelector(".navbar").style.display="flex",n.setState({imageUrl:e})},n.displayGifs=function(){var e=n.state.gifs,t=[];return e.forEach((function(e){t.push(i.a.createElement(d,{handleClick:n.handleClick,url:e.gifUrl,focusUrl:e.focusUrl,key:e.key}))})),i.a.createElement("div",{className:"gif-container"},t)},n.state={},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state,t=e.gifs,a=e.imageUrl;return a?i.a.createElement(v,{handleClick:this.handleClick,url:a}):i.a.createElement("div",{className:"parent-container"},i.a.createElement(f,{fetchGif:this.fetchGif}),t?this.displayGifs():null)}}]),a}(i.a.Component);var p=function(e){return i.a.createElement("div",{className:"about-container"},i.a.createElement("h1",{className:"title"},"How it Works"),i.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."))};var E=function(e){return i.a.createElement("div",{className:"header"},i.a.createElement("h2",{className:"title"},"Gif Search"))};a(25);var b=function(e){return i.a.createElement("ul",{className:"navbar"},i.a.createElement("li",{onClick:function(t){return e.changePage("About")}},i.a.createElement(m.b,{id:"about-nav-link",to:"/about"},"About")),i.a.createElement("li",{onClick:function(t){return e.changePage("Search")}},i.a.createElement(m.b,{className:"active-page",id:"project-nav-link",to:"/search"},"Search")))},y=function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).changePage=function(e){n.setState({activePage:e})},n.state={activePage:"Search"},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.addPageActiveClass()}},{key:"componentDidUpdate",value:function(){this.addPageActiveClass()}},{key:"addPageActiveClass",value:function(){var e=document.querySelector(".active-page");e&&e.classList.remove("active-page");for(var t=document.querySelectorAll(".navbar a"),a=this.state.activePage,n=0;n<t.length;n++)if(t[n].innerText.includes(a)){t[n].classList.add("active-page");break}}},{key:"render",value:function(){var e=function(){return i.a.createElement(g,null)};return i.a.createElement(m.a,{basename:"/"},i.a.createElement(E,null),i.a.createElement(b,{activePage:this.state.activePage,changePage:this.changePage}),i.a.createElement(h.c,null,i.a.createElement(h.a,{exact:!0,path:"/",component:e}),i.a.createElement(h.a,{exact:!0,path:"/about",component:function(){return i.a.createElement(p,null)}}),i.a.createElement(h.a,{exact:!0,path:"/search",component:e})))}}]),a}(i.a.Component);r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(y,null)),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.0b2239b1.chunk.js.map