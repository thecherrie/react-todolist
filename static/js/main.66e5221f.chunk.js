(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(2),c=n.n(r),i=(n(13),n(5)),l=n(3),m=n(4),s=n(7),u=n(6),d=(n(14),n(15),function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"item"},o.a.createElement("p",null,e.name),o.a.createElement("button",{className:"remove-btn",onClick:e.onRemoveButtonClick}," Done")))}),f=function(e){return o.a.createElement("div",null,o.a.createElement("div",{className:"wrapper"},o.a.createElement("div",{className:"inner-wrapper"},o.a.createElement("h1",null,"Todolist"),o.a.createElement("div",{className:"search"},o.a.createElement("input",{placeholder:"What do you need to do?",type:"search",onChange:e.onInputChange}),o.a.createElement("button",{className:"btn-add",onClick:e.onAddClick}," + ")),e.items.map((function(t){return o.a.createElement(d,{key:t.id,name:t.name,onRemoveButtonClick:function(){return e.onRemoveButtonClick(t.id)}})})))))},p=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).addItem=function(t){var n=e.state.items,a={name:e.state.toAdd,id:e.state.defId++};""===e.state.toAdd||e.setState((function(e){return{items:[].concat(Object(i.a)(n),[a])}}))},e.removeItem=function(t){console.log(t);var n=e.state.items;e.setState({items:n.filter((function(e){return e.id!==t}))})},e.state={defValue:"",defId:0,toAdd:"",items:[{id:0,name:"Example Item"}]},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"App"},o.a.createElement(f,{onInputChange:function(t){return e.setState({toAdd:t.target.value})},onAddClick:this.addItem,items:this.state.items,onRemoveButtonClick:function(t){return e.removeItem(t)}}))}}]),n}(a.Component);c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(p,null)),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.66e5221f.chunk.js.map