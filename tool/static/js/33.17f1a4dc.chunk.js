(this["webpackJsonpMultisender App"]=this["webpackJsonpMultisender App"]||[]).push([[33],{101:function(e,n,t){!function(e){"use strict";var n="><+-.,[]".split("");e.defineMode("brainfuck",(function(){return{startState:function(){return{commentLine:!1,left:0,right:0,commentLoop:!1}},token:function(e,t){if(e.eatSpace())return null;e.sol()&&(t.commentLine=!1);var i=e.next().toString();return-1===n.indexOf(i)?(t.commentLine=!0,e.eol()&&(t.commentLine=!1),"comment"):!0===t.commentLine?(e.eol()&&(t.commentLine=!1),"comment"):"]"===i||"["===i?("["===i?t.left++:t.right++,"bracket"):"+"===i||"-"===i?"keyword":"<"===i||">"===i?"atom":"."===i||","===i?"def":void(e.eol()&&(t.commentLine=!1))}}})),e.defineMIME("text/x-brainfuck","brainfuck")}(t(13))}}]);
//# sourceMappingURL=33.17f1a4dc.chunk.js.map