(this.webpackJsonphighlow=this.webpackJsonphighlow||[]).push([[0],{18:function(e,t,a){e.exports=a(32)},31:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a(0),o=a.n(n),r=a(3),l=a(2),s=a(8),i=a(11),u=a.n(i),m=a(4),p=a(12),d=a(13),b=a(17),f=a(15),v=a(16);a(31);function E(e){return{value:e,text:["2","3","4","5","6","7","8","9","10","J","Q","K","A"][e%13],suit:["\u2764","\u2660","\u2666","\u2663"][Math.floor(e/13)],color:["red","black","red","black"][Math.floor(e/13)]}}function h(){for(var e=Object(v.a)(Array(52).keys()),t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),c=[e[a],e[t]];e[t]=c[0],e[a]=c[1]}return e}function k(e){var t=E(e.value);return o.a.createElement("div",{className:"tcard"},o.a.createElement("p",{className:"card-p",style:{color:t.color}}," ",t.text," "),o.a.createElement("p",{className:"card-p",style:{color:t.color}}," ",t.suit," "))}function N(e){var t=E(e.value),a="lcard "+e.outcome;return o.a.createElement("div",{className:a},o.a.createElement("div",{className:"pipValue"},o.a.createElement("p",{className:"card-p",style:{color:t.color}}," ",t.text," "),o.a.createElement("p",{className:"card-p",style:{color:t.color}}," ",t.suit," ")),o.a.createElement("div",{className:"pipValue upSideDown"},o.a.createElement("p",{className:"card-p",style:{color:t.color}}," ",t.suit," "),o.a.createElement("p",{className:"card-p",style:{color:t.color}}," ",t.text," ")))}function j(e){return o.a.createElement("div",{className:"deck"},o.a.createElement("div",{className:"bet",onClick:function(){return e.onClick(!0)}}," ",o.a.createElement("p",{className:"bet-p"},"\ud83d\udc46")," "),o.a.createElement("div",{className:"bet",onClick:function(){return e.onClick(!1)}}," ",o.a.createElement("p",{className:"bet-p"},"\ud83d\udc47")," "))}function y(e){for(var t=e.cards,a=e.index,c=[],n=0;n<a;n++)c.push(o.a.createElement(k,{key:n,value:t[n]}));return o.a.createElement("div",{className:"cards"},o.a.createElement(j,{onClick:function(t){return e.onClick(t)}}),c,o.a.createElement(N,{value:t[a],outcome:e.outcome}))}function O(e){return o.a.createElement("div",{className:"bets"},o.a.createElement("div",{className:"hbox"},o.a.createElement("p",{className:"bet-p"}," bet: ",e.bet," "),o.a.createElement("div",{className:"btn",onClick:function(){return e.incBet()}}," ",o.a.createElement("p",{className:"bet-p"}," + ")),o.a.createElement("div",{className:"btn",onClick:function(){return e.decBet()}}," ",o.a.createElement("p",{className:"bet-p"}," - "))),o.a.createElement("div",{className:"hbox"},o.a.createElement("p",{className:"bet-p"}," total: ",e.total," \ud83d\udcb0")))}var x=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"deckClick",value:function(e){var t=this;if(this.props.index>=51)console.log("deck is empy");else{var a,c,n=this.props.cards[this.props.index]%13,o=this.props.cards[this.props.index+1]%13,r=(c=o)!==(a=n)&&c>a===e;this.props.setGlow(r),setTimeout((function(){t.props.updateBank(r)}),r?0:2e3)}}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"game"},o.a.createElement(y,{index:this.props.index,cards:this.props.cards,outcome:this.props.outcome,onClick:function(t){return e.deckClick(t)}}),o.a.createElement(O,{bet:this.props.bet,total:this.props.total,incBet:function(){return e.props.incBet()},decBet:function(){return e.props.decBet()}}))}}]),a}(o.a.Component),B=Object(m.b)((function(e){return{index:e.index,cards:e.cards,bet:e.bet,total:e.total,outcome:e.outcome}}),(function(e){return{decBet:function(){e({type:"decBet"})},incBet:function(){e({type:"incBet"})},setGlow:function(t){e({type:"setGlow",outcome:t})},updateBank:function(t){e({type:"updateBank",outcome:t})}}}))(x),g=a(14),w={key:"root",storage:u.a},C=Object(s.a)(w,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{index:0,cards:h(),bet:10,total:90,outcome:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"decBet":if(e.bet<=10)break;e=Object(c.a)(Object(c.a)({},e),{},{bet:e.bet+5,total:e.total-5});break;case"incBet":var a=e.total<5?e.total:5;e=Object(c.a)(Object(c.a)({},e),{},{bet:e.bet+a,total:e.total-a});break;case"setGlow":e=Object(c.a)(Object(c.a)({},e),{},{index:e.index+1,outcome:t.outcome?"green-glow":"red-glow"});break;case"updateBank":if(t.outcome)e=Object(c.a)(Object(c.a)({},e),{},{total:e.total+e.bet});else{var n=e.bet,o=e.total;o>=2*n?o-=n:o<10?(console.log("minimum bet is 10"),n=0):(o-=10,n=10),e=Object(c.a)(Object(c.a)({},e),{},{index:0,cards:h(),outcome:"",bet:n,total:o})}}return e})),G=Object(l.c)(C),M=Object(s.b)(G);G.subscribe((function(){})),Object(r.render)(o.a.createElement(m.a,{store:G},o.a.createElement(g.a,{loading:null,persistor:M},o.a.createElement(B,null))),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.3fc5d111.chunk.js.map