(this.webpackJsonpMultisender=this.webpackJsonpMultisender||[]).push([[117],{197:function(e,t,r){!function(e){"use strict";function t(e){return new RegExp("^(("+e.join(")|(")+"))\\b")}var r=["Clamp","Constructor","EnforceRange","Exposed","ImplicitThis","Global","PrimaryGlobal","LegacyArrayClass","LegacyUnenumerableNamedProperties","LenientThis","NamedConstructor","NewObject","NoInterfaceObject","OverrideBuiltins","PutForwards","Replaceable","SameObject","TreatNonObjectAsNull","TreatNullAs","EmptyString","Unforgeable","Unscopeable"],n=t(r),a=["unsigned","short","long","unrestricted","float","double","boolean","byte","octet","Promise","ArrayBuffer","DataView","Int8Array","Int16Array","Int32Array","Uint8Array","Uint16Array","Uint32Array","Uint8ClampedArray","Float32Array","Float64Array","ByteString","DOMString","USVString","sequence","object","RegExp","Error","DOMException","FrozenArray","any","void"],i=t(a),o=["attribute","callback","const","deleter","dictionary","enum","getter","implements","inherit","interface","iterable","legacycaller","maplike","partial","required","serializer","setlike","setter","static","stringifier","typedef","optional","readonly","or"],c=t(o),l=["true","false","Infinity","NaN","null"],m=t(l);e.registerHelper("hintWords","webidl",r.concat(a).concat(o).concat(l));var s=t(["callback","dictionary","enum","interface"]),u=t(["typedef"]),f=/^[:<=>?]/,d=/^-?([1-9][0-9]*|0[Xx][0-9A-Fa-f]+|0[0-7]*)/,b=/^-?(([0-9]+\.[0-9]*|[0-9]*\.[0-9]+)([Ee][+-]?[0-9]+)?|[0-9]+[Ee][+-]?[0-9]+)/,p=/^_?[A-Za-z][0-9A-Z_a-z-]*/,y=/^_?[A-Za-z][0-9A-Z_a-z-]*(?=\s*;)/,h=/^"[^"]*"/,A=/^\/\*.*?\*\//,g=/^\/\*.*/,k=/^.*?\*\//;function w(e,t){if(e.eatSpace())return null;if(t.inComment)return e.match(k)?(t.inComment=!1,"comment"):(e.skipToEnd(),"comment");if(e.match("//"))return e.skipToEnd(),"comment";if(e.match(A))return"comment";if(e.match(g))return t.inComment=!0,"comment";if(e.match(/^-?[0-9\.]/,!1)&&(e.match(d)||e.match(b)))return"number";if(e.match(h))return"string";if(t.startDef&&e.match(p))return"def";if(t.endDef&&e.match(y))return t.endDef=!1,"def";if(e.match(c))return"keyword";if(e.match(i)){var r=t.lastToken,a=(e.match(/^\s*(.+?)\b/,!1)||[])[1];return":"===r||"implements"===r||"implements"===a||"="===a?"builtin":"variable-3"}return e.match(n)?"builtin":e.match(m)?"atom":e.match(p)?"variable":e.match(f)?"operator":(e.next(),null)}e.defineMode("webidl",(function(){return{startState:function(){return{inComment:!1,lastToken:"",startDef:!1,endDef:!1}},token:function(e,t){var r=w(e,t);if(r){var n=e.current();t.lastToken=n,"keyword"===r?(t.startDef=s.test(n),t.endDef=t.endDef||u.test(n)):t.startDef=!1}return r}}})),e.defineMIME("text/x-webidl","webidl")}(r(13))}}]);
//# sourceMappingURL=117.22422ca6.chunk.js.map