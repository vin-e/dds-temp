System.register(["./p-7aa50e68.system.js"],(function(e){"use strict";var t,n,i;return{setters:[function(e){t=e.r;n=e.h;i=e.H}],execute:function(){var r=e("dds_column_label_icon",function(){function e(e){t(this,e)}e.prototype.render=function(){var e={string:["a","string","text"],integer:["i","number","int","integer"],decimal:["f","float","dec","decimal"],biginteger:["j","big-int","big-integer","bigint","biginteger","big int","big integer","long"],date:["d","date"]};function t(t){var n=Object.keys(e);return n.filter((function(n){return e[n].includes(t.toLowerCase())}))[0]}return n(i,{class:"dds-column-label-icon "+"dds-column-label-icon--"+t(this.datatype),"aria-label":t(this.datatype)+" column,"})};Object.defineProperty(e,"style",{get:function(){return":root{--icon-color-decimal:#53a89b;--icon-color-integer:#4487c2;--icon-color-string:#e57947;--icon-color-biginteger:#7675aa;--icon-color-date:#69abd5}.dds-column-label-icon{-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:36px;display:inline-block;font-weight:400;font-size:12px;font-family:azo-sans-web,Arial,Helvetica,sans-serif;text-align:center;vertical-align:middle;height:18px;width:30px;color:#fff;border:1px solid;margin-right:4px}.dds-column-label-icon--string,.dds-column-label-icon--string:before{content:\"Abc\";border-color:var(--icon-color-string);background-color:var(--icon-color-string)}.dds-column-label-icon--integer,.dds-column-label-icon--integer:before{content:\"123\";border-color:var(--icon-color-integer);background-color:var(--icon-color-integer)}.dds-column-label-icon--decimal,.dds-column-label-icon--decimal:before{content:\"0.12\";border-color:var(--icon-color-decimal);background-color:var(--icon-color-decimal)}.dds-column-label-icon--biginteger,.dds-column-label-icon--biginteger:before{content:\"999\";border-color:var(--icon-color-biginteger);background-color:var(--icon-color-biginteger)}.dds-column-label-icon--date,.dds-column-label-icon--date:before{content:\"📅\";border-color:var(--icon-color-date);background-color:var(--icon-color-date)}"},enumerable:true,configurable:true});return e}())}}}));