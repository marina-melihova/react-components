(this["webpackJsonpreact-components"]=this["webpackJsonpreact-components"]||[]).push([[0],[,function(e,a,t){e.exports={profile:"Profile_profile__2fO6m",description:"Profile_description__rr0PK",avatar:"Profile_avatar__dhaMi",name:"Profile_name__mzCJY",tag:"Profile_tag__2bt6N",location:"Profile_location__RObZK",stats:"Profile_stats__2CRNX",label:"Profile_label__1ASAo",quantity:"Profile_quantity__2b1lH"}},function(e,a,t){e.exports={statistics:"Statistics_statistics__11PyX",title:"Statistics_title__IAK4l",statList:"Statistics_statList__6w7sq",item:"Statistics_item__2KTNz",label:"Statistics_label__2VW_g",percentage:"Statistics_percentage__2OLNo"}},function(e){e.exports=JSON.parse('{"name":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg","stats":{"followers":5603,"views":4827,"likes":1308}}')},function(e,a,t){e.exports={item:"FriendListItem_item__2u2IF",status:"FriendListItem_status__mo7ZS",avatar:"FriendListItem_avatar__3I3KV",name:"FriendListItem_name__22mEN"}},function(e,a,t){e.exports={section:"Section_section__2pcSY",section__title:"Section_section__title__19eQH"}},,,function(e,a,t){e.exports={transactionHistory:"TransactionHistory_transactionHistory__1LAE9"}},function(e){e.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},function(e){e.exports=JSON.parse('[{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/shojberg/128.jpg","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/j04ntoh/128.jpg","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/mugukamil/128.jpg","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/sweetdelisa/128.jpg","name":"Poly","isOnline":false,"id":1284}]')},function(e){e.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},function(e,a,t){e.exports=t(18)},,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(7),i=t.n(r),s=(t(17),t(1)),l=t.n(s),o=function(e){var a=e.name,t=e.tag,n=e.location,r=e.avatar,i=e.stats,s=i.followers,o=i.views,m=i.likes;return c.a.createElement("div",{className:l.a.profile},c.a.createElement("div",{className:l.a.description},c.a.createElement("img",{src:r,alt:"user avatar",className:l.a.avatar}),c.a.createElement("p",{className:l.a.name},a),c.a.createElement("p",{className:l.a.tag},"@"+t),c.a.createElement("p",{className:l.a.location},n)),c.a.createElement("ul",{className:l.a.stats},c.a.createElement("li",null,c.a.createElement("span",{className:l.a.label},"Followers"),c.a.createElement("span",{className:l.a.quantity},new Intl.NumberFormat("eu-EU").format(s))),c.a.createElement("li",null,c.a.createElement("span",{className:l.a.label},"Views"),c.a.createElement("span",{className:l.a.quantity},new Intl.NumberFormat("eu-EU").format(o))),c.a.createElement("li",null,c.a.createElement("span",{className:l.a.label},"Likes"),c.a.createElement("span",{className:l.a.quantity},new Intl.NumberFormat("eu-EU").format(m)))))},m=t(2),u=t.n(m),d=function(e){var a=e.title,t=e.stats;return c.a.createElement("section",{className:u.a.statistics},a&&c.a.createElement("h2",{className:u.a.title},a),c.a.createElement("ul",{className:u.a.statList},t.map((function(e){return c.a.createElement("li",{key:e.id,className:u.a.item,style:{backgroundColor:"".concat(f())}},c.a.createElement("span",{className:u.a.label},e.label),c.a.createElement("span",{className:u.a.percentage},e.percentage+"%"))}))))};d.defaultProps={title:""};var p=d;function f(){var e=Math.floor(255*Math.random()),a=Math.floor(255*Math.random()),t=Math.floor(255*Math.random());return"rgb(".concat(e,",").concat(a,",").concat(t,")")}var b=t(4),_=t.n(b),y=function(e){var a=e.avatar,t=e.name,n=e.isOnline;return c.a.createElement("li",{className:_.a.item},c.a.createElement("span",{className:_.a.status,style:{backgroundColor:"".concat(n?"green":"red")}}),c.a.createElement("img",{className:_.a.avatar,src:a,alt:"",width:"100"}),c.a.createElement("p",{className:_.a.name},t))},E=function(e){var a=e.friends;return c.a.createElement("ul",{className:"friend-list"},a.map((function(e){return c.a.createElement(y,{key:e.id,name:e.name,avatar:e.avatar,isOnline:e.isOnline})})))},v=t(8),N=t.n(v),w=function(e){var a=e.items;return c.a.createElement("table",{className:N.a.transactionHistory},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Type"),c.a.createElement("th",null,"Amount"),c.a.createElement("th",null,"Currency"))),c.a.createElement("tbody",null,a.map((function(e){return c.a.createElement("tr",{key:e.id},c.a.createElement("td",null,e.type),c.a.createElement("td",null,e.amount),c.a.createElement("td",null,e.currency))}))))},g=t(5),h=t.n(g);var O=function(e){var a=e.title,t=e.children;return c.a.createElement("section",{className:h.a.section},c.a.createElement("p",{className:h.a.section__title},a),t)},S=t(3),P=t(9),L=t(10),k=t(11);var U=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(O,{title:"Profile (\u043f\u0440\u043e\u0444\u0438\u043b\u044c \u0441\u043e\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0439 \u0441\u0435\u0442\u0438)"},c.a.createElement(o,{name:S.name,tag:S.tag,location:S.location,avatar:S.avatar,stats:S.stats})),c.a.createElement(O,{title:"Statistics (\u0441\u0435\u043a\u0446\u0438\u044f \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0438)"},c.a.createElement(p,{title:"Upload stats",stats:P})),c.a.createElement(O,{title:"FriendList (\u0441\u043f\u0438\u0441\u043e\u043a \u0434\u0440\u0443\u0437\u0435\u0439 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f)"},c.a.createElement(E,{friends:L})),c.a.createElement(O,{title:"TransactionHistory (\u0438\u0441\u0442\u043e\u0440\u0438\u044f \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0439)"},c.a.createElement(w,{items:k})))};i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(U,null)),document.getElementById("root"))}],[[12,1,2]]]);
//# sourceMappingURL=main.f0204e5e.chunk.js.map