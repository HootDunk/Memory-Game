(this["webpackJsonpmemory-game"]=this["webpackJsonpmemory-game"]||[]).push([[0],[,,,,,,,,,,,,,function(i,e,a){},function(i,e,a){},function(i,e,a){},,function(i,e,a){},function(i,e,a){},function(i,e,a){},function(i,e,a){"use strict";a.r(e);var c=a(1),n=a.n(c),t=a(8),d=a.n(t),s=(a(13),a(7)),r=a(4),m=a(2),o=(a(14),[{id:1,name:"Bowser",image:a.p+"static/media/bowser.9781742f.png",clicked:!1,showing:!1},{id:2,name:"Captain Falcon",image:a.p+"static/media/captain-falcon.f829ea5d.png",clicked:!1,showing:!1},{id:3,name:"Chrom",image:a.p+"static/media/chrom.3dab6529.png",clicked:!1,showing:!1},{id:4,name:"Daisy",image:a.p+"static/media/daisy.67625352.png",clicked:!1,showing:!1},{id:5,name:"Dark Pit",image:a.p+"static/media/dark-pit.c5f33897.png",clicked:!1,showing:!1},{id:6,name:"Donkey Kong",image:a.p+"static/media/donkey-kong.ec73f8da.png",clicked:!1,showing:!1},{id:7,name:"Dr. Mario",image:a.p+"static/media/dr-mario.38e1f7bb.png",clicked:!1,showing:!1},{id:8,name:"Falco Lombardi",image:a.p+"static/media/falco-lombardi.2a648f40.png",clicked:!1,showing:!1},{id:9,name:"Fox McCloud",image:a.p+"static/media/fox-mccloud.96e7a98e.png",clicked:!1,showing:!1},{id:10,name:"Ganondorf",image:a.p+"static/media/ganondorf.04a84cf3.png",clicked:!1,showing:!1},{id:11,name:"Ice Climbers",image:a.p+"static/media/ice-climbers.c7187beb.png",clicked:!1,showing:!1},{id:12,name:"Jigglypuff",image:a.p+"static/media/jigglypuff.22a190e4.png",clicked:!1,showing:!1},{id:13,name:"Kirby",image:a.p+"static/media/kirby.b7827920.png",clicked:!1,showing:!1},{id:14,name:"Link",image:a.p+"static/media/link.1f5f7095.png",clicked:!1,showing:!1},{id:15,name:"Lucina",image:a.p+"static/media/lucina.ad1bfcc8.png",clicked:!1,showing:!1},{id:16,name:"Luigi",image:a.p+"static/media/luigi.edd78aad.png",clicked:!1,showing:!1},{id:17,name:"Mario",image:a.p+"static/media/mario.6e632775.png",clicked:!1,showing:!1},{id:18,name:"Marth",image:a.p+"static/media/marth.76c74b50.png",clicked:!1,showing:!1},{id:20,name:"Meta Knight",image:a.p+"static/media/meta-knight.ba52977f.png",clicked:!1,showing:!1},{id:21,name:"Mewtwo",image:a.p+"static/media/mewtwo.fe943203.png",clicked:!1,showing:!1},{id:22,name:"Mr. Game & Watch",image:a.p+"static/media/mr-game&watch.bfdfa936.png",clicked:!1,showing:!1},{id:23,name:"Ness",image:a.p+"static/media/ness.24da7c4e.png",clicked:!1,showing:!1},{id:24,name:"Peach",image:a.p+"static/media/peach.286bb437.png",clicked:!1,showing:!1},{id:25,name:"Pichu",image:a.p+"static/media/pichu.d85fd19a.png",clicked:!1,showing:!1},{id:26,name:"pikachu",image:a.p+"static/media/pikachu.846a3daa.png",clicked:!1,showing:!1},{id:27,name:"Pit",image:a.p+"static/media/pit.71e8a981.png",clicked:!1,showing:!1},{id:28,name:"Roy",image:a.p+"static/media/roy.136ddf43.png",clicked:!1,showing:!1},{id:29,name:"Samus",image:a.p+"static/media/samus.a95dd05a.png",clicked:!1,showing:!1},{id:30,name:"Sheik",image:a.p+"static/media/sheik.b98c8a40.png",clicked:!1,showing:!1},{id:31,name:"Solid Snake",image:a.p+"static/media/solid-snake.bed21124.png",clicked:!1,showing:!1},{id:32,name:"wario",image:a.p+"static/media/waria.131fad0d.png",clicked:!1,showing:!1},{id:33,name:"yoshi",image:a.p+"static/media/yoshi.fd581105.png",clicked:!1,showing:!1},{id:34,name:"Young Link",image:a.p+"static/media/young-link.e2df17c2.png",clicked:!1,showing:!1},{id:35,name:"Zelda",image:a.p+"static/media/zelda.4c3037e5.png",clicked:!1,showing:!1},{id:36,name:"Zero Suit Samus",image:a.p+"static/media/zero-suit-samus.4b3a7f87.png",clicked:!1,showing:!1}]),g=a.p+"static/media/smash-banner.b2cf541a.svg",h=(a(15),a(0));function l(i){return Object(h.jsx)("div",{className:"score-board-container",children:Object(h.jsxs)("div",{className:"title",children:[Object(h.jsx)("img",{src:g,alt:"Smash Logo"}),Object(h.jsx)("p",{children:"A memory game with Super Smash characters!"}),Object(h.jsxs)("div",{className:"scores",children:[Object(h.jsxs)("h1",{children:["Current Score: ",i.currentScore]}),Object(h.jsxs)("h1",{children:["High Score: ",i.highScore]})]})]})})}a(17),a(18);function p(i){return Object(h.jsxs)("div",{className:"card",onClick:function(){return i.handleClick(i.character.id,i.character.clicked)},children:[Object(h.jsx)("img",{src:i.character.image}),Object(h.jsx)("h1",{children:i.character.name})]})}function u(i){return Object(h.jsx)("div",{className:"card-container",children:i.characters.map((function(e,a){return e.showing&&Object(h.jsx)(p,{character:e,handleClick:i.handleClick},e.id)}))})}var b=a.p+"static/media/bomb.41fd4130.png",f=a.p+"static/media/mario-win.464bb242.png";a(19);function j(i){return Object(h.jsx)("div",{className:"game-over-wrapper",children:i.isBeaten?Object(h.jsxs)("div",{className:"game-over",children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"You Win!"}),Object(h.jsx)("p",{children:"that's all the characters I imported  :)"})]}),Object(h.jsx)("img",{src:f,className:"mario-win"}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{onClick:i.playAgain,className:"play-again",children:"Play Again!"})})]}):Object(h.jsxs)("div",{className:"game-over",children:[Object(h.jsx)("div",{children:Object(h.jsx)("h1",{children:"Game Over"})}),Object(h.jsx)("img",{src:b,className:"bomb-guy"}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{onClick:i.playAgain,className:"play-again",children:"Play Again!"})})]})})}var k=function(){var i=Object(c.useState)(o),e=Object(m.a)(i,2),a=e[0],n=e[1],t=Object(c.useState)(0),d=Object(m.a)(t,2),g=d[0],p=d[1],b=Object(c.useState)(0),f=Object(m.a)(b,2),k=f[0],w=f[1],O=Object(c.useState)({isOver:!1,isBeaten:!1}),x=Object(m.a)(O,2),v=x[0],y=x[1];Object(c.useEffect)((function(){k===a.length&&y({isOver:!0,isBeaten:!0}),S()}),[k]),Object(c.useEffect)((function(){k>g&&p(k)}),[v]);var S=function(){var i=function(){var i,e;return k<4?(i=5-k,e=k):e=k>a.length-5?5-(i=a.length-k):5-(i=1+Math.floor(Math.random()*Math.floor(4))),[e,i]}(),e=Object(m.a)(i,2),c=e[0],t=e[1],d=Object(s.a)(a);(function(i,e,a){for(var c=[],n=i.filter((function(i){return!i.clicked}));a>0;){var t=Math.floor(Math.random()*Math.floor(n.length)),d=n[t].id;-1===c.indexOf(d)&&(c.push(n[t].id),a--)}for(var s=i.filter((function(i){return i.clicked}));e>0;){var r=Math.floor(Math.random()*Math.floor(s.length)),m=s[r].id;-1===c.indexOf(m)&&(c.push(s[r].id),e--)}return c.forEach((function(e){var a=i.findIndex((function(i){return i.id===e}));i[a].showing=!0})),c})(d=d.map((function(i){return i.showing?i=Object(r.a)(Object(r.a)({},i),{},{showing:!i.showing}):i})),c,t).forEach((function(i){var e=d.findIndex((function(e){return e.id===i}));d[e].showing=!0})),n(d)};return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(l,{currentScore:k,highScore:g}),v.isOver?Object(h.jsx)(j,{isBeaten:v.isBeaten,playAgain:function(){y({isOver:!1,isBeaten:!1}),w(0);var i=a.map((function(i){return Object(r.a)(Object(r.a)({},i),{},{clicked:!1,showing:!1})}));n(i)}}):Object(h.jsx)(u,{characters:a,handleClick:function(i,e){if(e)y({isOver:!0,isBeaten:!1});else{var c=a.findIndex((function(e){return e.id===i})),t=Object(s.a)(a);t[c].clicked=!0,n(t),w((function(i){return i+1}))}}})]})};d.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(k,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.52fd69ac.chunk.js.map