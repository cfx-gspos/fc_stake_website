(this["webpackJsonpMultisender App"]=this["webpackJsonpMultisender App"]||[]).push([[114],{192:function(e,t,n){!function(e){"use strict";e.defineMode("velocity",(function(){function e(e){for(var t={},n=e.split(" "),r=0;r<n.length;++r)t[n[r]]=!0;return t}var t=e("#end #else #break #stop #[[ #]] #{end} #{else} #{break} #{stop}"),n=e("#if #elseif #foreach #set #include #parse #macro #define #evaluate #{if} #{elseif} #{foreach} #{set} #{include} #{parse} #{macro} #{define} #{evaluate}"),r=e("$foreach.count $foreach.hasNext $foreach.first $foreach.last $foreach.topmost $foreach.parent.count $foreach.parent.hasNext $foreach.parent.first $foreach.parent.last $foreach.parent $velocityCount $!bodyContent $bodyContent"),a=/[+\-*&%=<>!?:\/|]/;function i(e,t,n){return t.tokenize=n,n(e,t)}function o(e,o){var f=o.beforeParams;o.beforeParams=!1;var c=e.next();if("'"==c&&!o.inString&&o.inParams)return o.lastTokenWasBuiltin=!1,i(e,o,s(c));if('"'!=c){if(/[\[\]{}\(\),;\.]/.test(c))return"("==c&&f?o.inParams=!0:")"==c&&(o.inParams=!1,o.lastTokenWasBuiltin=!0),null;if(/\d/.test(c))return o.lastTokenWasBuiltin=!1,e.eatWhile(/[\w\.]/),"number";if("#"==c&&e.eat("*"))return o.lastTokenWasBuiltin=!1,i(e,o,l);if("#"==c&&e.match(/ *\[ *\[/))return o.lastTokenWasBuiltin=!1,i(e,o,u);if("#"==c&&e.eat("#"))return o.lastTokenWasBuiltin=!1,e.skipToEnd(),"comment";if("$"==c)return e.eat("!"),e.eatWhile(/[\w\d\$_\.{}-]/),r&&r.propertyIsEnumerable(e.current())?"keyword":(o.lastTokenWasBuiltin=!0,o.beforeParams=!0,"builtin");if(a.test(c))return o.lastTokenWasBuiltin=!1,e.eatWhile(a),"operator";e.eatWhile(/[\w\$_{}@]/);var k=e.current();return t&&t.propertyIsEnumerable(k)?"keyword":n&&n.propertyIsEnumerable(k)||e.current().match(/^#@?[a-z0-9_]+ *$/i)&&"("==e.peek()&&(!n||!n.propertyIsEnumerable(k.toLowerCase()))?(o.beforeParams=!0,o.lastTokenWasBuiltin=!1,"keyword"):o.inString?(o.lastTokenWasBuiltin=!1,"string"):e.pos>k.length&&"."==e.string.charAt(e.pos-k.length-1)&&o.lastTokenWasBuiltin?"builtin":(o.lastTokenWasBuiltin=!1,null)}return o.lastTokenWasBuiltin=!1,o.inString?(o.inString=!1,"string"):o.inParams?i(e,o,s(c)):void 0}function s(e){return function(t,n){for(var r,a=!1,i=!1;null!=(r=t.next());){if(r==e&&!a){i=!0;break}if('"'==e&&"$"==t.peek()&&!a){n.inString=!0,i=!0;break}a=!a&&"\\"==r}return i&&(n.tokenize=o),"string"}}function l(e,t){for(var n,r=!1;n=e.next();){if("#"==n&&r){t.tokenize=o;break}r="*"==n}return"comment"}function u(e,t){for(var n,r=0;n=e.next();){if("#"==n&&2==r){t.tokenize=o;break}"]"==n?r++:" "!=n&&(r=0)}return"meta"}return{startState:function(){return{tokenize:o,beforeParams:!1,inParams:!1,inString:!1,lastTokenWasBuiltin:!1}},token:function(e,t){return e.eatSpace()?null:t.tokenize(e,t)},blockCommentStart:"#*",blockCommentEnd:"*#",lineComment:"##",fold:"velocity"}})),e.defineMIME("text/velocity","velocity")}(n(13))}}]);
//# sourceMappingURL=114.afba753d.chunk.js.map