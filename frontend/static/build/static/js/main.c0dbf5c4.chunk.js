(this["webpackJsonprpg-test"]=this["webpackJsonprpg-test"]||[]).push([[0],{10:function(e,t,a){},32:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),c=a(25),o=a.n(c),i=a(14),r=(a(32),a(16)),l=a(3),h=a(4),u=a(2),d=a(6),m=a(5),p=a(8),j=(a(10),a(0));s.Component;new function(e,t){this.name=e,this.location="",this.level="",this.ac="",this.maxhp="",this.currenthp="",this.maxsp="",this.currentsp="",this.job="",this.items=[],this.weapons=[],this.armor=[]}("player1",1),new function(e,t,a,s){this.name="",this.north=e,this.south=t,this.east=a,this.west=s,this.roomid=""}(2);var b=a(26),O=a(7),g=a.n(O),x=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).state={defaultChar:{},isLoggedIn:!!g.a.get("Authorization"),userId:!!localStorage.getItem("rpguser")},s.saveChar=s.saveChar.bind(Object(u.a)(s)),s}return Object(h.a)(a,[{key:"saveChar",value:function(e){fetch("/characters/save/".concat(e.id,"/"),{method:"PUT",headers:{"Content-Type":"application/json","X-CSRFToken":g.a.get("csrftoken")},body:JSON.stringify(Object(b.a)({},e))})}},{key:"render",value:function(){var e=this,t=void 0!=this.props.all.char?this.props.all.char:this.props.all.defaultChar,a=this.props.all.charWeapon,s=Object(j.jsx)("button",{onClick:function(){return e.saveChar(t)},children:"Save Character"}),n=Object(j.jsx)("button",{onClick:this.props.healChar,children:"Heal Character"});return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)("div",{className:"row charbanner",children:[Object(j.jsx)("div",{className:"col-3 char",children:"Name"}),Object(j.jsx)("div",{className:"col-2 class",children:"Class"}),Object(j.jsx)("div",{className:"col-1 lvl",children:"Lvl"}),Object(j.jsx)("div",{className:"col-1 ac",children:"AC"}),Object(j.jsx)("div",{className:"col-1 hp",children:"HP"}),Object(j.jsx)("div",{className:"col-1 sp",children:"SP"}),Object(j.jsx)("div",{className:"col-1 xp",children:"XP"}),Object(j.jsx)("div",{className:"col-1 weapon",children:"Weapon"})]}),Object(j.jsx)("div",{className:"row charSpace"}),Object(j.jsxs)("div",{className:"row char1row",children:[Object(j.jsx)("p",{className:"col-3 char1",children:t.name}),Object(j.jsx)("p",{className:"col-2 cl1",children:t.job}),Object(j.jsx)("p",{className:"col-1 lvl1",children:t.level}),Object(j.jsx)("p",{className:"col-1 ac1",children:t.ac}),Object(j.jsxs)("p",{className:"col-1 hp1",children:[t.hp,"/",t.hpmax]}),Object(j.jsx)("p",{className:"col-1 sp1",children:null!=t.sp?"".concat(t.sp,"/").concat(t.spmax):"N/A"}),Object(j.jsx)("p",{className:"col-1 xp1",children:t.xp}),Object(j.jsx)("p",{className:"col-1 weapon",children:a.name})]}),Object(j.jsxs)("div",{className:"row char2row",children:[Object(j.jsx)("p",{className:"col-3 char2"}),Object(j.jsx)("p",{className:"col-2 lvl2"}),Object(j.jsx)("p",{className:"col-2 ac2"}),Object(j.jsx)("p",{className:"col-2 hp2"}),Object(j.jsx)("p",{className:"col-2 sp2"}),Object(j.jsx)("p",{className:"col-1 cl2"})]}),Object(j.jsxs)("div",{className:"row char3row",children:[Object(j.jsx)("p",{className:"col-3 char3"}),Object(j.jsx)("p",{className:"col-2 lvl3"}),Object(j.jsx)("p",{className:"col-2 ac3"}),Object(j.jsx)("p",{className:"col-2 hp3"}),Object(j.jsx)("p",{className:"col-2 sp3"}),Object(j.jsx)("p",{className:"col-1 cl3"})]}),s,n]})}}]),a}(s.Component),v=(a.p,a.p,a.p,a.p+"static/media/dungeonWalk.57773dc4.gif"),f=a.p+"static/media/dungeonStatic.2db142ce.jpg",w=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).state={},s}return Object(h.a)(a,[{key:"render",value:function(){return Object(j.jsx)("div",{children:Object(j.jsx)("img",{className:"img img-fluid",src:this.props.all.image,alt:"gate"})})}}]),a}(s.Component),y=[{id:1,name:"Home Base",desc:"A workshop filled with building materials and monster parts.",north:2,south:null,east:8,west:null},{id:2,name:"Room to the North",desc:"A surprisingly difficult to reach destination. There are exits\n        to the north and south.",north:3,south:1,east:null,west:null},{id:3,name:"Center of the Build",desc:"A soaring cavern with exits in all directions",north:5,south:2,east:6,west:4},{id:4,name:"The Western Chamber",desc:"A quiet space for working and testing. There's an exit to the east",north:null,south:null,east:3,west:null},{id:5,name:"The Waterfall",desc:"A cold, soaring chamber dominated by waterfall plunging from a fissure in the rock.",north:null,south:3,east:null,west:null},{id:6,name:"The Eastern Chamber",desc:"A large cavern strewn with discarded monster bits.",north:null,south:7,east:null,west:3},{id:7,name:"The Eastern Corridor",desc:"A long stone cavern filled with the glowing golden light of hundreds\n        of torches. Just like that Police video.",north:6,south:8,east:null,west:null},{id:8,name:"The Study",desc:"A small, quiet room with floor-to-ceiling bookshelves and many\n        comfortable chairs.",north:7,south:null,east:null,west:1}],k=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).state={moveMsg:"",currentroom:y[0],dir:{}},s.move=s.move.bind(Object(u.a)(s)),s}return Object(h.a)(a,[{key:"move",value:function(e){var t,a=this,s=e.target.title;"north"==s&&(t=y.filter((function(e){return e.id==a.state.currentroom.north}))),"south"==s&&(t=y.filter((function(e){return e.id==a.state.currentroom.south}))),"east"==s&&(t=y.filter((function(e){return e.id==a.state.currentroom.east}))),"west"==s&&(t=y.filter((function(e){return e.id==a.state.currentroom.west}))),(t=t[0])?(this.props.changeRoomImage(v,f),this.setState({moveMsg:"You walk to the ".concat(s,".")}),this.setState({name:"",desc:""}),setTimeout((function(){a.setState({moveMsg:""})}),1e3),setTimeout((function(){a.setState({currentroom:t})}),1e3)):this.setState({moveMsg:"There's no exit in that direction!"})}},{key:"render",value:function(){var e=this.props.currentRoom.name,t=this.state.currentroom.name,a=this.state.currentroom.desc,s=Object(j.jsxs)(j.Fragment,{children:[this.state.currentroom.north?Object(j.jsx)("span",{title:"north",onClick:this.move,children:"<N>"}):null,this.state.currentroom.south?Object(j.jsx)("span",{title:"south",onClick:this.move,children:"<S>"}):null,this.state.currentroom.east?Object(j.jsx)("span",{title:"east",onClick:this.move,children:"<E>"}):null,this.state.currentroom.west?Object(j.jsx)("span",{title:"west",onClick:this.move,children:"<W>"}):null]}),n=this.state.moveMsg;return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:t}),Object(j.jsx)("p",{children:e}),Object(j.jsx)("p",{id:"moveMsg",children:n}),Object(j.jsx)("p",{children:a}),Object(j.jsx)("p",{id:"nsew",children:s})]})}}]),a}(s.Component),S=(s.Component,a(15)),C=a.n(S),N=a(18),M=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).state={isLoggedIn:!!g.a.get("Authorization"),inSession:!!g.a.get("sessionid"),username:"",email:"",password:"",password1:"",password2:"",data:[],hasProfile:!1,charData:null,accountData:[],hasAccount:!1},s.handleInput=s.handleInput.bind(Object(u.a)(s)),s.handleLogin=s.handleLogin.bind(Object(u.a)(s)),s.reset=s.reset.bind(Object(u.a)(s)),s}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this,t={method:"GET",headers:{"Content-Type":"application/json","X-CSRFToken":g.a.get("csrftoken")}};fetch("/accounts/detail/",t).then((function(t){return t.ok&&e.setState({hasAccount:!0}),t.json().then((function(t){return e.setState({accountData:t,charData:t.character})}))}))}},{key:"reset",value:function(){this.setState({username:""}),this.setState({password:""}),window.location.reload()}},{key:"handleLogin",value:function(){var e=Object(N.a)(C.a.mark((function e(t,a){var s,n,c,o;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),s={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":g.a.get("csrftoken")},body:JSON.stringify(a)},n=function(e){return console.warn(e)},e.next=5,fetch("/rest-auth/login/",s);case 5:return c=e.sent,e.next=8,c.json().catch(n);case 8:(o=e.sent).key&&g.a.set("Authorization","Token ".concat(o.key)),this.reset();case 11:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"handleInput",value:function(e){this.setState(Object(r.a)({},e.target.name,e.target.value))}},{key:"handleRegistration",value:function(){var e=Object(N.a)(C.a.mark((function e(t,a){var s,n,c,o;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),s={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":g.a.get("csrftoken")},body:JSON.stringify(a)},n=function(e){return console.warn(e)},e.next=5,fetch("/rest-auth/registration/",s);case 5:return c=e.sent,e.next=8,c.json().catch(n);case 8:(o=e.sent).key&&g.a.set("Authorization","Token ".concat(o.key)),this.setState({username:"",email:"",password1:"",password2:""});case 11:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"createProfile",value:function(){var e=Object(N.a)(C.a.mark((function e(){var t,a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=new FormData).append("user",1),a={method:"POST",headers:{"X-CSRFToken":g.a.get("csrftoken")},body:t},e.next=5,fetch("/profiles/",a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"handleLogout",value:function(){var e=this,t={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":g.a.get("csrftoken")}};fetch("/rest-auth/logout/",t).then((function(e){return e.json()})).then((function(t){return e.setState({data:t})})),g.a.remove("Authorization"),g.a.remove("sessionid"),localStorage.clear(),window.location.reload()}},{key:"render",value:function(){var e=this,t=(this.props.all.charData,Object(j.jsxs)("form",{onSubmit:function(t){return e.handleRegistration(t,e.state)},children:[Object(j.jsx)("input",{className:"input-group form-control",type:"text",placeholder:"username",name:"username",value:this.state.username,onChange:this.handleInput}),Object(j.jsx)("input",{className:"input-group form-control",type:"email",placeholder:"email",name:"email",value:this.state.email,onChange:this.handleInput}),Object(j.jsx)("input",{className:"input-group form-control",type:"password",placeholder:"password",name:"password1",value:this.state.password1,onChange:this.handleInput}),Object(j.jsx)("input",{className:"input-group form-control",type:"password",placeholder:"confirm pass",name:"password2",value:this.state.password2,onChange:this.handleInput}),Object(j.jsx)("p",{children:Object(j.jsx)("button",{className:"btn btn-secondary",type:"submit",children:"Register"})})]})),a=(this.createProfile,Object(j.jsxs)("form",{onSubmit:function(t){return e.handleLogin(t,e.state)},children:[Object(j.jsx)("p",{children:"Welcome! Please log in, or register to create your own character."}),Object(j.jsx)("input",{className:"input-group",type:"text",placeholder:"username",name:"username",value:this.state.username,onChange:this.handleInput}),Object(j.jsx)("input",{className:"input-group",type:"password",placeholder:"password",name:"password",value:this.state.password,onChange:this.handleInput}),Object(j.jsx)("button",{className:"btn btn-secondary",type:"submit",children:"Log In"})]})),s=Object(j.jsx)("form",{onSubmit:function(t){return e.handleLogout(t,e.state)},children:Object(j.jsx)("button",{className:"btn btn-secondary",type:"submit",children:"Log Out"})}),n=this.state.charData,c=this.state.accountData,o=!0===this.state.hasAccount?Object(j.jsxs)("p",{children:["Account: ",c.username]}):null,i=!0===this.state.hasAccount&&null!==this.state.charData?Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{children:"Available characters:"}),Object(j.jsxs)("span",{children:[n.name," - Level ",n.level," ",n.job]})]}):Object(j.jsx)("p",{children:"Please create a character."});return Object(j.jsxs)("div",{className:"loginForm",children:[!1===this.state.isLoggedIn&&!1===this.state.inSession?a:s,!1===this.state.isLoggedIn?t:null,o,i]})}}]),a}(s.Component),I=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).state={isLoggedIn:!!g.a.get("Authorization")},s}return Object(h.a)(a,[{key:"render",value:function(){var e=void 0!=this.props.all.char?this.props.all.char:this.props.all.defaultChar,t=Object(j.jsxs)("div",{className:"charSheet",children:[Object(j.jsxs)("p",{children:["Name: ",e.name]}),Object(j.jsxs)("p",{children:["Class: ",e.job]}),Object(j.jsxs)("p",{children:["Level: ",e.level]})]}),a=Object(j.jsxs)("div",{className:"charSheet",children:[Object(j.jsxs)("p",{children:["Armor: ",e.ac]}),Object(j.jsxs)("p",{children:["Health: ",e.hp]}),Object(j.jsxs)("p",{children:["Max Health: ",e.hpmax]})]}),s=Object(j.jsxs)("div",{className:"charSheet",children:[Object(j.jsxs)("p",{children:["Magic: ",e.sp]}),Object(j.jsxs)("p",{children:["Max Magic: ",e.spmax]}),Object(j.jsxs)("p",{children:["Experience: ",e.xp]})]});return this.state.isLoggedIn?Object(j.jsx)("section",{children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col",children:t}),Object(j.jsx)("div",{className:"col",children:a}),Object(j.jsx)("div",{className:"col",children:s})]})}):null}}]),a}(s.Component),T=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).state={},s}return Object(h.a)(a,[{key:"render",value:function(){return Object(j.jsx)("div",{children:"Inventory!"})}}]),a}(s.Component),A=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).state={},s}return Object(h.a)(a,[{key:"render",value:function(){return Object(j.jsx)("nav",{className:"navbar navbar-expand-lg",children:Object(j.jsxs)("div",{className:"container-fluid",children:[Object(j.jsx)("div",{className:"navBox",children:Object(j.jsx)(i.b,{to:"/",children:"Game"})}),Object(j.jsx)("div",{className:"navBox",children:Object(j.jsx)(i.b,{to:"/login/",children:"Account"})}),Object(j.jsx)("div",{className:"navBox",children:Object(j.jsx)(i.b,{to:"/character/create/",children:"Create Char"})}),Object(j.jsx)("div",{className:"navBox",children:Object(j.jsx)(i.b,{to:"/character/",children:"Character"})}),Object(j.jsx)("div",{className:"navBox",children:Object(j.jsx)(i.b,{to:"/magic/",children:"Magic"})}),Object(j.jsx)("div",{className:"navBox",children:Object(j.jsx)(i.b,{to:"/inventory/",children:"Inventory"})})]})})}}]),a}(s.Component),W=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).state={},s}return Object(h.a)(a,[{key:"render",value:function(){return Object(j.jsx)("div",{children:"Magic"})}}]),a}(s.Component),L=(s.Component,function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).state={name:"",job:"",level:1,armor:10,health:10,magic:10,isLoggedIn:!!g.a.get("Authorization"),completed:""},s.handleInput=s.handleInput.bind(Object(u.a)(s)),s.handleDropdown=s.handleDropdown.bind(Object(u.a)(s)),s.handleSubmit=s.handleSubmit.bind(Object(u.a)(s)),s}return Object(h.a)(a,[{key:"handleInput",value:function(e){this.setState(Object(r.a)({},e.target.name,e.target.value))}},{key:"handleDropdown",value:function(e){this.setState({job:e.target.value})}},{key:"handleSubmit",value:function(){var e=Object(N.a)(C.a.mark((function e(t){var a,s,n,c,o;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={name:this.state.name,job:this.state.job,level:this.state.level,ac:this.state.armor,hp:this.state.health,sp:this.state.magic,hpmax:this.state.health,spmax:this.state.magic,xp:0},s={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":g.a.get("csrftoken")},body:JSON.stringify(a)},n=function(e){return console.warn(e)},e.next=6,fetch("/characters/create/",s);case 6:return c=e.sent,e.next=9,c.json().catch(n);case 9:o=e.sent,c.ok&&(this.setState({completed:"Character ".concat(o.name,", a level ").concat(o.level," ").concat(o.job,", created!")}),this.setState({name:""}),this.setState({job:"Choose"}));case 11:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=Object(j.jsxs)("form",{onSubmit:this.handleSubmit,className:"charCreateForm",children:[Object(j.jsx)("label",{children:"Character Name: "}),Object(j.jsx)("input",{type:"text",name:"name",value:this.state.name,onChange:this.handleInput}),Object(j.jsxs)("label",{children:["Character Class:",Object(j.jsxs)("select",{value:this.state.job,onChange:this.handleDropdown,children:[Object(j.jsx)("option",{value:"Choose",children:"Choose"}),Object(j.jsx)("option",{value:"Warrior",children:"Warrior"}),Object(j.jsx)("option",{value:"Magician",children:"Magician"})]})]}),Object(j.jsx)("label",{children:"Level: "}),Object(j.jsx)("input",{className:"createField",type:"text",placeholder:"Lvl 1",name:"level",value:this.state.level,onChange:this.handleInput,readOnly:!0}),Object(j.jsx)("label",{children:"Armor: "}),Object(j.jsx)("input",{className:"createField",type:"text",placeholder:"Armor",name:"armor",value:this.state.armor,onChange:this.handleInput,readOnly:!0}),Object(j.jsx)("label",{children:"Health: "}),Object(j.jsx)("input",{className:"createField",type:"text",placeholder:"Health",name:"health",value:this.state.health,onChange:this.handleInput,readOnly:!0}),Object(j.jsx)("label",{children:"Magic: "}),Object(j.jsx)("input",{className:"createField",type:"text",placeholder:"Magic",name:"magic",value:this.state.magic,onChange:this.handleInput,readOnly:!0}),Object(j.jsx)("input",{hidden:!0,name:"hpmax",value:this.state.health,readOnly:!0}),Object(j.jsx)("input",{hidden:!0,name:"spmax",value:this.state.magic,readOnly:!0}),Object(j.jsx)("input",{hidden:!0,name:"xp",value:"0",readOnly:!0}),Object(j.jsx)("button",{className:"btn btn-success",type:"submit",children:"Save this Character"})]}),t="".concat(this.state.completed);return Object(j.jsxs)("div",{children:[e,t]})}}]),a}(s.Component)),D=[{mobId:1,name:"Bob the Dummy",damage:1,hp:10,hpmax:10,sp:"null",spmax:"null",ac:10,weapon:"wooden sword",damMessage:"pokes",xp:10},{mobId:2,name:"drop bear",damage:1,hp:10,hpmax:10,sp:"null",spmax:"null",ac:10,weapon:"claws",damMessage:"rakes",xp:10},{mobId:3,name:"giant tarantula",damage:1,hp:12,hpmax:12,sp:"null",spmax:"null",ac:12,weapon:"fangs",damMessage:"pierce",xp:10},{mobId:4,name:"hobgoblin",damage:1,hp:12,hpmax:12,sp:"null",spmax:"null",ac:9,weapon:"short sword",damMessage:"slashes",xp:10},{mobId:5,name:"giant rat",damage:1,hp:7,hpmax:7,sp:"null",spmax:"null",ac:8,weapon:"teeth",damMessage:"gouge",xp:10},{mobId:6,name:"black slime",damage:1,hp:6,hpmax:6,sp:"null",spmax:"null",ac:12,weapon:"acid goo",damMessage:"burns",xp:10},{mobId:7,name:"kobold",damage:1,hp:13,hpmax:13,sp:"null",spmax:"null",ac:10,weapon:"rusty knife",damMessage:"pierces",xp:10}],R=(a(40),function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).state={combatwindow:!1,combat:!1,char:null,charWeapon:{},mob:{},charSpell:{},charAttackMessage:"",mobAttackMessage:"",data:[],isLoggedIn:!!g.a.get("Authorization"),image:f,defaultChar:{},playerMessage:"",currentRoom:y[2]},s.charDeath=s.charDeath.bind(Object(u.a)(s)),s.changeToCombatWindow=s.changeToCombatWindow.bind(Object(u.a)(s)),s.meleeAttack=s.meleeAttack.bind(Object(u.a)(s)),s.magicAttack=s.magicAttack.bind(Object(u.a)(s)),s.runAway=s.runAway.bind(Object(u.a)(s)),s.rando=s.rando.bind(Object(u.a)(s)),s.resetWindow=s.resetWindow.bind(Object(u.a)(s)),s.randomMob=s.randomMob.bind(Object(u.a)(s)),s.healChar=s.healChar.bind(Object(u.a)(s)),s.charWins=s.charWins.bind(Object(u.a)(s)),s.changeRoomImage=s.changeRoomImage.bind(Object(u.a)(s)),s.handleInput=s.handleInput.bind(Object(u.a)(s)),s.immtest=s.immtest.bind(Object(u.a)(s)),s.handleImmInput=s.handleImmInput.bind(Object(u.a)(s)),s.goto=s.goto.bind(Object(u.a)(s)),s}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({defaultChar:{charId:1,name:"Please log in to load your character",lvl:null,ac:null,hpmax:null,hp:null,spmax:null,sp:null,class:null,weapon:null,xp:null}}),this.setState({charWeapon:{weaponId:1,name:"longsword",damageLow:2,damageHigh:5,damMessage:"slashes"}}),this.setState({charSpell:{spellId:1,name:"force bolt",damageLow:2,damageHigh:8,spCost:4,damMessage:"slams"}}),fetch("/characters/").then((function(e){return e.json()})).then((function(e){return e[0]})).then((function(t){return e.setState({char:t})}))}},{key:"changeToCombatWindow",value:function(){0==this.state.combatwindow?this.setState({combatwindow:!0}):this.setState({combatwindow:!1})}},{key:"changeRoomImage",value:function(e,t){var a=this;this.setState({image:e}),setTimeout((function(){a.setState({image:t})}),1500)}},{key:"rando",value:function(e,t){return Math.floor(Math.random()*(t-e))+e}},{key:"randomMob",value:function(){var e=this,t=Math.floor(Math.random()*(D.length-1))+1,a=D[t];this.setState({mob:a}),setTimeout((function(){e.setState({playerMessage:"A ".concat(e.state.mob.name," has entered the fight!")})}),0),setTimeout((function(){e.setState({playerMessage:""})}),2e3)}},{key:"resetWindow",value:function(){var e=this;setTimeout((function(){e.setState({combat:!1})}),4e3),setTimeout((function(){e.setState({combatwindow:!1})}),4e3),setTimeout((function(){e.setState({charAttackMessage:""})}),4e3),setTimeout((function(){e.setState({mobAttackMessage:""})}),4e3),setTimeout((function(){e.setState({playerMessage:""})}),4e3)}},{key:"meleeAttack",value:function(e,t,a){var s=this;0==this.state.combat&&(this.setState({combat:!0}),t.hp=t.hpmax,e.hp=e.hpmax);var n=this.rando(a.damageLow,a.damageHigh);t.hp=t.hp-n,this.setState({charAttackMessage:"".concat(e.name," ").concat(a.damMessage," the ").concat(t.name," for ").concat(n," points of damage!")}),t.hp<=0?this.charWins(e,t):(setTimeout((function(){s.setState({mobAttackMessage:"The ".concat(t.name," hits ").concat(e.name," for ").concat(t.damage," points of damage!")})}),1500),e.hp=e.hp-t.damage,this.setState({char:e}),e.hp<=0&&setTimeout((function(){s.charDeath(e)}),2e3),setTimeout((function(){s.setState({charAttackMessage:""})}),4e3),setTimeout((function(){s.setState({mobAttackMessage:""})}),4e3))}},{key:"magicAttack",value:function(e,t,a){var s=this,n=this.state.charSpell;if(e.sp>=n.spCost){e.sp=e.sp-n.spCost;var c=this.rando(n.damageLow,n.damageHigh);this.setState({charAttackMessage:"".concat(e.name,"'s ").concat(n.name," ").concat(n.damMessage," into the ").concat(t.name,", doing ").concat(c," damage!")}),t.hp=t.hp-c}else this.setState({playerMessage:"You don't have enough spell points to cast that."});t.hp<=0?this.charWins(e,t):(e.hp=e.hp-t.damage,this.setState({char:e}),setTimeout((function(){s.setState({mobAttackMessage:"The ".concat(t.name," hits ").concat(e.name," for ").concat(t.damage," points of damage!")})}),1500),setTimeout((function(){s.setState({charAttackMessage:""})}),4e3),setTimeout((function(){s.setState({mobAttackMessage:""})}),4e3))}},{key:"charWins",value:function(e,t){var a=this;setTimeout((function(){a.setState({playerMessage:"".concat(e.name," has defeated the ").concat(t.name,"! The fight is over.")})}),1e3),setTimeout((function(){a.setState({playerMessage:"".concat(e.name," receives ").concat(t.xp," points of experience.")})}),2500),this.state.char.xp=this.state.char.xp+this.state.mob.xp,this.setState({char:e}),this.resetWindow()}},{key:"runAway",value:function(){this.setState({playerMessage:"You turn and run!"}),this.resetWindow()}},{key:"charDeath",value:function(e){this.resetWindow(),this.setState({playerMessage:"You have been killed. You materialize in the home room."}),this.state.char.hp=this.state.char.hpmax,this.state.char.sp=this.state.char.spmax}},{key:"healChar",value:function(){var e=this.state.char;this.state.char.hp=this.state.char.hpmax,this.state.char.sp=this.state.char.spmax,this.setState({char:e})}},{key:"handleInput",value:function(e){this.setState(Object(r.a)({},e.target.name,e.target.value))}},{key:"handleImmInput",value:function(e){this.setState(Object(r.a)({},e.target.name,e.target.value)),console.log(this.state.immWindow)}},{key:"immtest",value:function(){alert("This worked!")}},{key:"goto",value:function(){alert("working")}},{key:"render",value:function(){var e=this,t=this.state.char,a=this.state.mob,s=this.state.charWeapon,c=Object(j.jsx)("button",{onClick:this.changeToCombatWindow,children:"Switch View"}),o=Object(j.jsx)("button",{onClick:this.randomMob,children:"Generate Mob"}),i=Object(j.jsx)("button",{onClick:function(){e.meleeAttack(t,a,s)},children:"Melee Attack"}),r=Object(j.jsx)("button",{onClick:function(){e.magicAttack(t,a,s)},children:"Cast Spell"}),l=Object(j.jsx)("button",{onClick:this.runAway,children:"Run Away!"}),h=this.state.charAttackMessage,u=this.state.mobAttackMessage,d=this.state.playerMessage,m=this.state.immWindow;this[m],this.state.immWindow,this.handleImmInput;return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("div",{className:"row toprow",children:[Object(j.jsx)("div",{className:"col-5 box graphicsWindow",style:{padding:"0px"},children:Object(j.jsx)(w,{all:this.state})}),Object(j.jsx)("div",{className:"col-1 effectsWindow"}),Object(j.jsxs)("div",{className:"col-6 box textWindow",children:[Object(j.jsx)("p",{children:h}),Object(j.jsx)("p",{children:u}),Object(j.jsx)("p",{children:d}),0==this.state.combatwindow?Object(j.jsx)(k,{currentRoom:this.state.currentRoom,changeRoomImage:this.changeRoomImage}):Object(j.jsxs)("p",{className:"combatButtons",children:[i,r,l]}),Object(j.jsx)("p",{className:"switchViewsButton",children:c}),0==this.state.combat&1==this.state.combatwindow?Object(j.jsx)("p",{children:o}):null]})]}),Object(j.jsx)("div",{className:"row bottomRow",children:Object(j.jsxs)("div",{className:"col-12 box charWindow",children:[Object(j.jsx)(n.a.Fragment,{children:Object(j.jsxs)(p.c,{children:[Object(j.jsx)(p.a,{path:"/login/",children:Object(j.jsx)(M,{all:this.state})}),Object(j.jsx)(p.a,{path:"/character/create/",component:L}),Object(j.jsx)(p.a,{path:"/character/",children:Object(j.jsx)(I,{all:this.state})}),Object(j.jsx)(p.a,{path:"/inventory/",component:T}),Object(j.jsx)(p.a,{path:"/magic/",component:W}),Object(j.jsx)(p.a,{path:"/",children:Object(j.jsx)(x,{healChar:this.healChar,all:this.state})})]})}),Object(j.jsx)("div",{className:"centerNav",children:Object(j.jsx)(A,{})})]})})]})}}]),a}(s.Component)),F=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,43)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),s(e),n(e),c(e),o(e)}))};o.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(i.a,{children:Object(j.jsx)(R,{})})}),document.getElementById("root")),F()}},[[41,1,2]]]);
//# sourceMappingURL=main.c0dbf5c4.chunk.js.map