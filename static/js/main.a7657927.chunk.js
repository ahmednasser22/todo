(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(6),o=a.n(r),c=(a(13),a(1)),l=a(2),s=a(4),m=a(3),u=(a(14),function(e){var t=e.items_to_show,a=t.length?t.map((function(t){return i.a.createElement("div",{className:"todoitems",key:t.id},i.a.createElement("span",null,t.activity," "),i.a.createElement("span",null,t.time," "),i.a.createElement("span",{onClick:function(){return e.deleteItem(t.id)}},"\xd7"))})):i.a.createElement("p",null,"Empty List !");return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"header"},i.a.createElement("span",null,"Activity "),i.a.createElement("span",null,"time "),i.a.createElement("span",null,"Action")),a)}),d=a(7),h=(a(15),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={activity:"",time:""},e.handleChange=function(t){e.setState(Object(d.a)({},t.target.id,t.target.value))},e.preventDefault=function(t){t.preventDefault(),e.props.addItem(e.state),e.setState({activity:"",time:""})},e}return Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"controls"},i.a.createElement("form",{onSubmit:this.preventDefault},i.a.createElement("input",{type:"text",placeholder:"Your Activity",onChange:this.handleChange,id:"activity",value:this.state.activity}),i.a.createElement("input",{type:"number",placeholder:"Activity Time",onChange:this.handleChange,id:"time",value:this.state.time}),i.a.createElement("input",{type:"submit",value:"Add Todo"})))}}]),a}(n.Component)),v=(a(16),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).originalState={items:[{id:1,activity:"breakfast",time:"7"},{id:2,activity:"pray",time:"7:30"},{id:3,activity:"work",time:"7:45"}]},e.addItem=function(t){t.id=Math.random();var a=e.originalState.items;""!==t.activity&&""!==t.time?a.push(t):alert("Please Fill Your Data.."),e.setState({items:a})},e.deleteItem=function(t){if(window.confirm("Are You Sure?! Press ok to delete or cancel to abort")){var a=e.originalState.items,n=a.findIndex((function(e){return e.id===t}));a.splice(n,1),e.setState({items:a})}},e}return Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("h2",null,"Your Today's Activity"),i.a.createElement(u,{items_to_show:this.originalState.items,deleteItem:this.deleteItem}),i.a.createElement(h,{addItem:this.addItem}))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.a7657927.chunk.js.map