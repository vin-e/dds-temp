System.register([],(function(e){"use strict";return{execute:function(){e({A:void 0,a:void 0,b:r,c:d,d:void 0,g:u,i:s});var n;(function(e){e["string"]="a";e["integer"]="i";e["decimal"]="f";e["biginteger"]="j";e["date"]="d"})(n||(n=e("d",{})));var t;(function(e){e["and"]="&";e["or"]="|"})(t||(t=e("A",{})));var i;(function(e){e["text"]="text";e["date"]="date";e["numeric"]="numeric"})(i||(i=e("a",{})));var a=e("C",{text:[n.string],date:[n.date],numeric:[n.integer,n.decimal,n.biginteger]});var l=e("o",[{label:"equal to",value:"=",numberOfInputs:1,allowedTypes:[n.string,n.integer,n.decimal,n.biginteger,n.date],isFunction:false},{label:"not equal to",value:"<>",numberOfInputs:1,allowedTypes:[n.string,n.integer,n.decimal,n.biginteger,n.date],isFunction:false},{label:"before",value:"<",numberOfInputs:1,allowedTypes:[n.date],isFunction:false},{label:"after",value:">",numberOfInputs:1,allowedTypes:[n.date],isFunction:false},{label:"less than",value:"<",numberOfInputs:1,allowedTypes:[n.integer,n.decimal,n.biginteger],isFunction:false},{label:"less than or equal to",value:"<=",numberOfInputs:1,allowedTypes:[n.integer,n.decimal,n.biginteger],isFunction:false},{label:"greater than",value:">",numberOfInputs:1,allowedTypes:[n.integer,n.decimal,n.biginteger],isFunction:false},{label:"greater than or equal to",value:">=",numberOfInputs:1,allowedTypes:[n.integer,n.decimal,n.biginteger],isFunction:false},{label:"between",value:"between",numberOfInputs:2,allowedTypes:[n.integer,n.decimal,n.biginteger,n.date],isFunction:true},{label:"contains",value:"contains",numberOfInputs:1,allowedTypes:[n.string],isFunction:true},{label:"does not contain",value:"~contains",numberOfInputs:1,allowedTypes:[n.string],isFunction:true},{label:"begins with",value:"beginswith",numberOfInputs:1,allowedTypes:[n.string],isFunction:true},{label:"ends with",value:"endswith",numberOfInputs:1,allowedTypes:[n.string],isFunction:true},{label:"N/A",value:"na",numberOfInputs:0,allowedTypes:[n.string,n.integer,n.decimal,n.biginteger,n.date],isFunction:false},{label:"not N/A",value:"!na",numberOfInputs:0,allowedTypes:[n.string,n.integer,n.decimal,n.biginteger,n.date],isFunction:false}]);function u(e){return l.filter((function(n){return n.value===e}))[0]}function r(e){return u(e).numberOfInputs===0}function s(e){return u(e).numberOfInputs===2}var o=0;function d(e){if(e===void 0){e={}}var n=o++;var i={column:"",opOrFun:"=",values:[""],andOr:t.and,id:n};return Object.assign(Object.assign({},i),e)}}}}));