(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6fc52cca"],{"07d5":function(e,t,r){},"08fb":function(e,t,r){"use strict";var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",{staticClass:"nav nav-tabs"},e._l(e.tabs,(function(t){return r("li",{key:t.id,staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{to:t.path}},[e._v(" "+e._s(t.title)+" ")])],1)})),0)},a=[],n=(r("a9e3"),r("d81d"),r("11c1")),s={name:"TwittererNavPills",props:{id:{type:Number,required:!0}},watch:{id:{handler:function(){var e=this;this.tabs.map((function(t){return t.path.params.id=e.id}))}}},data:function(){return{tabs:[{id:Object(n["v4"])(),title:"跟隨者",path:{name:"user-followers",params:{id:this.id}}},{id:Object(n["v4"])(),title:"正在跟隨",path:{name:"user-followings",params:{id:this.id}}}]}}},i=s,l=(r("2ce4"),r("2877")),c=Object(l["a"])(i,o,a,!1,null,"2c3a3767",null);t["a"]=c.exports},"11c1":function(e,t,r){var o=r("c437"),a=r("c64e"),n=a;n.v1=o,n.v4=a,e.exports=n},2366:function(e,t){for(var r=[],o=0;o<256;++o)r[o]=(o+256).toString(16).substr(1);function a(e,t){var o=t||0,a=r;return[a[e[o++]],a[e[o++]],a[e[o++]],a[e[o++]],"-",a[e[o++]],a[e[o++]],"-",a[e[o++]],a[e[o++]],"-",a[e[o++]],a[e[o++]],"-",a[e[o++]],a[e[o++]],a[e[o++]],a[e[o++]],a[e[o++]],a[e[o++]]].join("")}e.exports=a},"23ae":function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container main-container"},[r("div",{staticClass:"row"},[r("SideNavBar",{staticClass:"col-3 border-end"}),r("div",{staticClass:"col-5 p-0 main-container border-0"},[r("TopNavBar",{staticClass:"border-bottom-0",attrs:{msg:e.User.name,show:!0,"total-tweets":e.User.totalTweets}}),r("TwittererFollowNavPills",{attrs:{id:e.User.id}}),e._l(e.followings,(function(t){return r("TwittererFollowTable",{key:t.id,attrs:{"initial-data":t},on:{"after-delete-follow-main":e.afterDeleteFollowMain,"after-add-follow-main":e.afterAddFollowMain}})})),r("div",{staticClass:"followers-container"})],2),r("div",{staticClass:"col-4 border-start"},[r("RecFollowingList",{attrs:{"remove-follow-id":e.removeFollowId,"add-follow-id":e.addFollowId},on:{"after-add-follow":e.afterAddFollow,"after-delete-follow":e.afterDeleteFollow}})],1)],1)])},a=[],n=r("1da1"),s=r("5530"),i=(r("96cf"),r("b0c0"),r("d81d"),r("4de4"),r("56e4")),l=r("ab4f"),c=r("f250"),u=r("08fb"),f=r("ee3f"),d=r("4cce"),w=r("2f62"),v=r("2fa3"),m={name:"UserProfileFollowers",components:{SideNavBar:i["a"],RecFollowingList:c["a"],TopNavBar:l["a"],TwittererFollowNavPills:u["a"],TwittererFollowTable:f["a"]},data:function(){return{User:{id:-1,name:"",account:"",totalFollowers:0,totalFollowings:0,totalTweets:0,isFollowing:0},followings:[],removeFollowId:0,addFollowId:0}},computed:Object(s["a"])({},Object(w["b"])(["currentUser"])),created:function(){var e=this.$route.params.id;this.fetchUser(e),this.fetchFollowings(e)},beforeRouteUpdate:function(e,t,r){var o=e.params.id;this.fetchUser(o),this.fetchFollowings(o),r()},methods:{fetchUser:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){var o,a,n,i,l,c,u,f,w,m;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,d["a"].getUser({userId:e});case 3:if(o=r.sent,a=o.data,n=o.statusText,"OK"===n){r.next=8;break}throw new Error(a.message);case 8:i=a.id,l=a.account,c=a.name,u=a.totalFollowers,f=a.totalFollowings,w=a.totalTweets,m=a.isFollowing,t.User=Object(s["a"])(Object(s["a"])({},t.User),{},{id:i,name:c,account:l,totalFollowers:u,totalFollowings:f,totalTweets:w,isFollowing:m}),r.next=15;break;case 12:r.prev=12,r.t0=r["catch"](0),v["a"].fire({icon:"error",title:"無法取得資料，請稍後再試。"});case 15:case"end":return r.stop()}}),r,null,[[0,12]])})))()},fetchFollowings:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){var o,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,d["a"].getUserFollowings({userId:e});case 3:o=r.sent,a=o.data,a.map((function(e){var r=e.followingId,o=e.name,a=e.account,n=e.avatar,s=e.bio,i=e.isFollowing;t.followings.push({id:r,name:o,account:a,avatar:n,bio:s,isFollowing:i})})),r.next=11;break;case 8:r.prev=8,r.t0=r["catch"](0),v["a"].fire({icon:"error",title:"無法取得正在跟隨資料，請稍後再試。"});case 11:case"end":return r.stop()}}),r,null,[[0,8]])})))()},afterAddFollow:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){var o,a,n,s,i,l,c,u;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(t.currentUser.id!==t.User.id){r.next=8;break}return r.next=3,d["a"].getUser({userId:e});case 3:return o=r.sent,a=o.data,n=a.id,s=a.name,i=a.account,l=a.avatar,c=a.bio,u=a.isFollowing,t.followings.push({id:n,name:s,account:i,avatar:l,bio:c,isFollowing:u}),r.abrupt("return");case 8:t.followings.map((function(t){t.id===e&&(t.isFollowing=1)}));case 9:case"end":return r.stop()}}),r)})))()},afterDeleteFollow:function(e){this.currentUser.id!==this.User.id?this.followings.map((function(t){t.id===e&&(t.isFollowing=0)})):this.followings=this.followings.filter((function(t){return t.id!==e}))},afterAddFollowMain:function(e){this.addFollowId=e},afterDeleteFollowMain:function(e){this.currentUser.id===this.User.id&&(this.followings=this.followings.filter((function(t){return t.id!==e}))),this.removeFollowId=e}}},p=m,g=(r("2ac4"),r("2877")),h=Object(g["a"])(p,o,a,!1,null,"81834f94",null);t["default"]=h.exports},"2ac4":function(e,t,r){"use strict";r("4ee2")},"2ce4":function(e,t,r){"use strict";r("07d5")},"4ee2":function(e,t,r){},c437:function(e,t,r){var o,a,n=r("e1f4"),s=r("2366"),i=0,l=0;function c(e,t,r){var c=t&&r||0,u=t||[];e=e||{};var f=e.node||o,d=void 0!==e.clockseq?e.clockseq:a;if(null==f||null==d){var w=n();null==f&&(f=o=[1|w[0],w[1],w[2],w[3],w[4],w[5]]),null==d&&(d=a=16383&(w[6]<<8|w[7]))}var v=void 0!==e.msecs?e.msecs:(new Date).getTime(),m=void 0!==e.nsecs?e.nsecs:l+1,p=v-i+(m-l)/1e4;if(p<0&&void 0===e.clockseq&&(d=d+1&16383),(p<0||v>i)&&void 0===e.nsecs&&(m=0),m>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");i=v,l=m,a=d,v+=122192928e5;var g=(1e4*(268435455&v)+m)%4294967296;u[c++]=g>>>24&255,u[c++]=g>>>16&255,u[c++]=g>>>8&255,u[c++]=255&g;var h=v/4294967296*1e4&268435455;u[c++]=h>>>8&255,u[c++]=255&h,u[c++]=h>>>24&15|16,u[c++]=h>>>16&255,u[c++]=d>>>8|128,u[c++]=255&d;for(var b=0;b<6;++b)u[c+b]=f[b];return t||s(u)}e.exports=c},c64e:function(e,t,r){var o=r("e1f4"),a=r("2366");function n(e,t,r){var n=t&&r||0;"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null),e=e||{};var s=e.random||(e.rng||o)();if(s[6]=15&s[6]|64,s[8]=63&s[8]|128,t)for(var i=0;i<16;++i)t[n+i]=s[i];return t||a(s)}e.exports=n},cded:function(e,t,r){"use strict";r("ce84")},ce84:function(e,t,r){},e1f4:function(e,t){var r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(r){var o=new Uint8Array(16);e.exports=function(){return r(o),o}}else{var a=new Array(16);e.exports=function(){for(var e,t=0;t<16;t++)0===(3&t)&&(e=4294967296*Math.random()),a[t]=e>>>((3&t)<<3)&255;return a}}},ee3f:function(e,t,r){"use strict";var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("div",{staticClass:"follower-container"},[r("div",{staticClass:"avatar"},[r("router-link",{attrs:{to:{name:"user-tweets",params:{id:e.follower.id}}}},[r("img",{attrs:{src:e._f("emptyImage")(e.follower.avatar),alt:""}})])],1),r("div",{staticClass:"follower-info"},[r("div",{staticClass:"isfollowed-info"},[r("router-link",{attrs:{to:{name:"user-tweets",params:{id:e.follower.id}}}},[r("div",{staticClass:"follower-title"},[r("div",{staticClass:"name text-dark"},[e._v(e._s(e.follower.name))]),r("div",{staticClass:"account"},[e._v(e._s(e.follower.account))])])]),e.follower.id!==e.currentUser.id?r("div",{staticClass:"toggleFollow"},[1===e.follower.isFollowing?r("button",{staticClass:"btn isFollowing",attrs:{disabled:e.status.isProcessing},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.unfollowUser(e.follower.id)}}},[e._v(" 正在跟隨 ")]):r("button",{staticClass:"btn",on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.followUser(e.follower.id)}}},[e._v(" 跟隨 ")])]):e._e()],1),r("p",[e._v(e._s(e.follower.bio))])])])])},a=[],n=r("1da1"),s=r("5530"),i=(r("96cf"),r("2708")),l=r("4cce"),c=r("2fa3"),u=r("2f62"),f={name:"TwittererFollowTable",mixins:[i["b"]],props:{initialData:{type:Object,required:!0}},data:function(){return{follower:this.initialData,status:{isProcessing:!1}}},computed:Object(s["a"])({},Object(u["b"])(["currentUser"])),methods:{followUser:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){var o,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,t.status.isProcessing=!0,r.next=4,l["a"].followUser({userId:e});case 4:if(o=r.sent,a=o.data,"success"===a.status){r.next=8;break}throw new Error(a.message);case 8:t.follower.isFollowing=1,c["a"].fire({icon:"success",title:"追蹤成功！"}),t.$emit("after-add-follow-main",e),t.status.isProcessing=!1,r.next=18;break;case 14:r.prev=14,r.t0=r["catch"](0),t.status.isProcessing=!1,c["a"].fire({icon:"error",title:"無法追蹤使用者，請稍後再試"});case 18:case"end":return r.stop()}}),r,null,[[0,14]])})))()},unfollowUser:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){var o,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,t.status.isProcessing=!0,r.next=4,l["a"].unfollowUser({userId:e});case 4:if(o=r.sent,a=o.data,"success"===a.status){r.next=8;break}throw new Error(a.message);case 8:t.follower.isFollowing=0,c["a"].fire({icon:"success",title:"取消追蹤成功！"}),t.$emit("after-delete-follow-main",e),t.status.isProcessing=!1,r.next=18;break;case 14:r.prev=14,r.t0=r["catch"](0),t.status.isProcessing=!1,c["a"].fire({icon:"error",title:"無法取消追蹤使用者，請稍後再試"});case 18:case"end":return r.stop()}}),r,null,[[0,14]])})))()}}},d=f,w=(r("cded"),r("2877")),v=Object(w["a"])(d,o,a,!1,null,"3d1e5f28",null);t["a"]=v.exports}}]);
//# sourceMappingURL=chunk-6fc52cca.cbc1c495.js.map