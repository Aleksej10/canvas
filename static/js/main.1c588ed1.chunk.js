(this.webpackJsonphighlow=this.webpackJsonphighlow||[]).push([[0],{16:function(e,t,a){e.exports=a.p+"static/media/deck.68ee077c.png"},19:function(e,t,a){e.exports=a(33)},32:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(0),r=a.n(c),s=a(3),o=a(2),l=a(10),i=a(15),u=a.n(i),m=a(4),p=a(8),d=a(9),b=a(12),f=a(11),v=a(18),h=(a(32),a(16)),y=a.n(h);function g(e,t){var a=document.getElementById("logger-div"),n=document.getElementById("logger-p");a.style.opacity=0,n.style.color=t,n.innerText=e,a.style.opacity=1,"black"!==t&&setTimeout((function(){a.style.opacity=0}),2e3)}function k(e){return{value:e,text:["2","3","4","5","6","7","8","9","10","J","Q","K","A"][e%13],suit:["\u2764","\u2666","\u2660","\u2663"][Math.floor(e/13)],color:["red","red","black","black"][Math.floor(e/13)]}}function E(){for(var e=Object(v.a)(Array(52).keys()),t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=[e[a],e[t]];e[t]=n[0],e[a]=n[1]}return e}function N(e){var t=k(e.value),a=null===e.guess?"":e.guess?"\ud83d\udd3a":"\ud83d\udd3b";return r.a.createElement("div",{className:"tcard"},r.a.createElement("div",{className:"vbox"},r.a.createElement("p",{className:"card-p",style:{color:t.color}}," ",t.text," "),r.a.createElement("p",{className:"card-p",style:{color:t.color}}," ",t.suit," ")),r.a.createElement("div",{className:"vbox"},r.a.createElement("p",{className:"card-p"}," ",a," ")))}function j(e){var t=k(e.value),a="lcard "+e.outcome;return r.a.createElement("div",{className:a},r.a.createElement("div",{className:"pipValue"},r.a.createElement("p",{className:"card-p",style:{color:t.color}}," ",t.text," "),r.a.createElement("p",{className:"card-p",style:{color:t.color}}," ",t.suit," ")),r.a.createElement("div",{className:"pipValue upSideDown"},r.a.createElement("p",{className:"card-p",style:{color:t.color}}," ",t.suit," "),r.a.createElement("p",{className:"card-p",style:{color:t.color}}," ",t.text," ")))}function x(e){return r.a.createElement("div",{className:"deck"},r.a.createElement("div",{className:"bet",onClick:function(){return e.onClick(!0)}}," ",r.a.createElement("p",{className:"bet-p"},"\ud83d\udc46")," "),r.a.createElement("div",{className:"bet",onClick:function(){return e.onClick(!1)}}," ",r.a.createElement("p",{className:"bet-p"},"\ud83d\udc47")," "))}function O(e){for(var t=e.cards,a=e.index,n=[],c=0;c<a;c++){var s=a>0?e.guesses[c]:null;n.push(r.a.createElement(N,{key:c,value:t[c],guess:s}))}var o=a<0?null:r.a.createElement(j,{value:t[a],outcome:e.outcome});return r.a.createElement("div",{className:"cards"},r.a.createElement(x,{onClick:function(t){return e.onClick(t)}}),n,o,r.a.createElement("div",{className:"vbox"},r.a.createElement("p",{className:"bet-p"}," your money: ",e.inGameMoney," "),r.a.createElement("div",{className:"btn",onClick:function(){return e.collect()}},r.a.createElement("p",{className:"bet-p"}," collect "))))}function w(e){return r.a.createElement("div",{className:"vbox"},r.a.createElement("div",{className:"hbox"},r.a.createElement("div",{className:"btn",onClick:function(){return e.newGame()}},r.a.createElement("p",{className:"bet-p"}," new game ")),r.a.createElement("p",{className:"bet-p"}," bet: ",e.bet," "),r.a.createElement("div",{className:"btn",onClick:function(){return e.incBet()}},r.a.createElement("p",{className:"bet-p"}," + ")),r.a.createElement("div",{className:"btn",onClick:function(){return e.decBet()}},r.a.createElement("p",{className:"bet-p"}," - ")),r.a.createElement("p",{className:"bet-p"}," total: ",e.total," \ud83d\udcb0")),r.a.createElement("div",{className:"btn",onClick:function(){return e.reset()}},r.a.createElement("p",{className:"bet-p"}," reset ")))}var G=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.refs.deckImg.onload=function(){e.draw_cards()}}},{key:"componentDidUpdate",value:function(){this.clearCanvas(),this.draw_cards()}},{key:"draw_cards",value:function(){for(var e=this.props.cards,t=this.props.index,a=0;a<=t;a++){var n=a>0?this.props.guesses[a-1]?0:10:0;this.draw_card(e[a],12*a,n)}}},{key:"clearCanvas",value:function(){this.refs.ref.getContext("2d").clearRect(0,0,this.refs.ref.width,this.refs.ref.height)}},{key:"draw_card",value:function(e,t,a){var n=this.refs.ref.getContext("2d"),c=e%13*64,r=96*Math.floor(e/13);n.drawImage(this.refs.deckImg,c,r,64,96,t,a,64,144)}},{key:"render",value:function(){return r.a.createElement("div",{className:"vbox"},r.a.createElement("canvas",{ref:"ref",className:"GameCanvas"}),r.a.createElement("img",{ref:"deckImg",className:"HiddenImage",src:y.a,alt:"deck"}))}}]),a}(r.a.Component),B=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"deckClick",value:function(e){if(0!==this.props.inGameMoney)if(this.props.index>=51)g("deck is empy, like this will ever happen!","green");else{var t,a,n=this.props.cards[this.props.index]%13,c=this.props.cards[this.props.index+1]%13,r=(a=c)!==(t=n)&&a>t===e;this.props.setGlow(r,e),this.props.updateBank(r)}else g("start a new game","red")}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"game"},r.a.createElement("div",{className:"vbox"},r.a.createElement(O,{index:this.props.index,cards:this.props.cards,outcome:this.props.outcome,onClick:function(t){return e.deckClick(t)},collect:function(){return e.props.collect()},inGameMoney:this.props.inGameMoney,guesses:this.props.guesses})),r.a.createElement(G,{index:this.props.index,cards:this.props.cards,guesses:this.props.guesses}),r.a.createElement(w,{bet:this.props.bet,total:this.props.total,incBet:function(){return e.props.incBet()},decBet:function(){return e.props.decBet()},reset:function(){return e.props.reset()},newGame:function(){return e.props.newGame()}}),r.a.createElement("div",{className:"logger-div",id:"logger-div"},r.a.createElement("p",{className:"logger-p",id:"logger-p"}," ")))}}]),a}(r.a.Component),M=Object(m.b)((function(e){return{index:e.index,cards:e.cards,bet:e.bet,total:e.total,outcome:e.outcome,inGameMoney:e.inGameMoney,guesses:e.guesses}}),(function(e){return{reset:function(){e({type:"reset"})},collect:function(){e({type:"collect"})},doubleBet:function(){e({type:"doubleBet"})},newGame:function(){e({type:"newGame"})},decBet:function(){e({type:"decBet"})},incBet:function(){e({type:"incBet"})},setGlow:function(t,a){e({type:"setGlow",outcome:t,guess:a})},updateBank:function(t){e({type:"updateBank",outcome:t})}}}))(B),C=a(17),I={key:"root",storage:u.a},_=Object(l.a)(I,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{index:-1,bet:10,total:90,outcome:"",guesses:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"reset":e=Object(n.a)(Object(n.a)({},e),{},{index:-1,cards:E(),bet:10,total:90,outcome:"",inGameMoney:0,guesses:[]});break;case"collect":if(0===e.inGameMoney){g("you have nothing to collect!","red");break}var a=e.total+e.inGameMoney;e=Object(n.a)(Object(n.a)({},e),{},{total:a,inGameMoney:0});break;case"doubleBet":e=Object(n.a)(Object(n.a)({},e),{},{inGameMoney:2*e.inGameMoney});break;case"newGame":var c=e.bet;if(0===c){g("minimum bet is 5","orange");break}e=Object(n.a)(Object(n.a)({},e),{},{index:0,cards:E(),inGameMoney:c,outcome:"",bet:0,guesses:[]});break;case"decBet":if(e.bet<=10)break;e=Object(n.a)(Object(n.a)({},e),{},{bet:e.bet+5,total:e.total-5});break;case"incBet":var r=e.total<5?e.total:5;e=Object(n.a)(Object(n.a)({},e),{},{bet:e.bet+r,total:e.total-r});break;case"setGlow":e=Object(n.a)(Object(n.a)({},e),{},{index:e.index+1,outcome:t.outcome?"green-glow":"red-glow",guesses:e.guesses.concat([t.guess])});break;case"updateBank":t.outcome?e=Object(n.a)(Object(n.a)({},e),{},{inGameMoney:2*e.inGameMoney}):(e=Object(n.a)(Object(n.a)({},e),{},{inGameMoney:0}),g("you lost this round","grey"))}return e})),D=Object(o.c)(_),J=Object(l.b)(D);D.subscribe((function(){})),Object(s.render)(r.a.createElement(m.a,{store:D},r.a.createElement(C.a,{loading:null,persistor:J},r.a.createElement(M,null))),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.1c588ed1.chunk.js.map