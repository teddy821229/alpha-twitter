(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7a4c62ea"],{"2e31":function(e,t,a){"use strict";a("bf9b")},"5c7c":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container main-container"},[a("div",{staticClass:"row"},[a("SideNavBar",{staticClass:"col-3"}),a("div",{staticClass:"col-5 p-0 border main-component"},[a("TopNavBar",{attrs:{msg:e.User.name,show:!0,"total-tweets":e.User.totalTweets}}),a("div",{staticClass:"tweets-container"},[a("TweetererImformation",{attrs:{"initial-user":e.User},on:{"after-form-submit":e.afterFormSubmit,"after-delete-follow-main":e.afterDeleteFollowMain,"after-add-follow-main":e.afterAddFollowMain}}),a("TwittererNavPills",{attrs:{"initial-id":e.User.id}}),e.isLoading?a("Spinner"):[e.likes.length<1?a("div",{staticClass:"noTweets"},[e._v(" 此用戶暫無喜歡的內容 ")]):e._e(),e._l(e.likes,(function(t){return a("TweetsCard",{key:t.id,attrs:{"initial-data":t.data,"reply-tweet":t.data.TweetId},on:{"after-click-modal":e.afterClickModal,"after-toggle-like":e.afterToggleLike}})})),a("TweetReplyModal",{attrs:{"target-tweet":e.modalContent},on:{"change-reply-count":e.changeReplyCount}})]],2)],1),a("div",{staticClass:"col-4"},[a("RecFollowingList",{attrs:{"remove-follow-id":e.removeFollowId,"add-follow-id":e.addFollowId},on:{"after-add-follow":e.afterAddFollow,"after-delete-follow":e.afterDeleteFollow}})],1)],1)])},i=[],o=a("1da1"),n=a("5530"),s=(a("96cf"),a("b0c0"),a("d81d"),a("4e82"),a("4de4"),a("56e4")),l=a("f250"),c=a("ab4f"),d=a("58aa"),u=a("1593"),f=a("086c"),w=a("811a"),h=a("2f62"),m=a("4cce"),p=a("6783"),v=a("2fa3"),g=a("2375"),U={name:"UserProfileLikes",components:{SideNavBar:s["a"],RecFollowingList:l["a"],TopNavBar:c["a"],TweetsCard:d["a"],TweetererImformation:u["a"],TwittererNavPills:f["a"],TweetReplyModal:w["a"],Spinner:g["a"]},data:function(){return{User:{id:-1,name:"",account:"",avatar:"",cover:"",bio:"",followingsCounts:0,followersCounts:0,totalTweets:0},likes:[],modalContent:{},removeFollowId:0,addFollowId:0,isLoading:!0}},created:function(){var e=this.$route.params.id;this.fetchUser(e),this.fetchLikes(e)},beforeRouteUpdate:function(e,t,a){var r=e.params.id;this.fetchUser(r),this.fetchLikes(r),a()},computed:Object(n["a"])({},Object(h["b"])(["currentUser"])),methods:{fetchUser:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var r,i,o,s,l,c,d,u,f,w,h,p;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,m["a"].getUser({userId:e});case 3:r=a.sent,i=r.data,o=i.id,s=i.account,l=i.name,c=i.bio,d=i.avatar,u=i.cover,f=i.totalFollowers,w=i.totalFollowings,h=i.totalTweets,p=i.isFollowing,t.User=Object(n["a"])(Object(n["a"])({},t.User),{},{id:o,name:l,account:s,avatar:d,cover:u,bio:c,totalFollowers:f,totalFollowings:w,totalTweets:h,isFollowing:p}),t.isLoading=!1,a.next=14;break;case 10:a.prev=10,a.t0=a["catch"](0),t.isLoading=!1,v["a"].fire({icon:"error",title:"無法取得資料，請稍後再試。"});case 14:case"end":return a.stop()}}),a,null,[[0,10]])})))()},fetchLikes:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var r,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,p["a"].getUserLikes({userId:e});case 3:if(r=a.sent,i=r.data,"使用者沒有喜歡的推文或回覆"!==i.message){a.next=8;break}return t.likes=[],a.abrupt("return");case 8:i.map((function(e){e.Tweet?t.likes.push({id:e.id,createdAt:e.createdAt,data:e.Tweet}):e.Reply&&t.likes.push({id:e.id,createdAt:e.createdAt,data:e.Reply})})),t.likes.sort((function(e,t){var a=new Date(e.createdAt),r=new Date(t.createdAt);return r.getTime()-a.getTime()})),a.next=15;break;case 12:a.prev=12,a.t0=a["catch"](0),v["a"].fire({icon:"error",title:"無法取得喜歡的內容，請稍後再試。"});case 15:case"end":return a.stop()}}),a,null,[[0,12]])})))()},afterFormSubmit:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.$route.params.id,t.next=3,e.fetchUser(a);case 3:e.likes.map((function(t){t.Tweet.User.id===e.User.id&&(t.Tweet.User=Object(n["a"])(Object(n["a"])({},t.User),e.User))}));case 4:case"end":return t.stop()}}),t)})))()},afterClickModal:function(e){this.modalContent=Object(n["a"])(Object(n["a"])({},this.modalContent),e)},afterToggleLike:function(){this.User.id===this.currentUser.id&&(this.likes=this.likes.filter((function(e){return 1===e.data.isLiked})))},afterAddFollow:function(e){if(this.User.id===e)return this.User.totalFollowers+=1,void(this.User.isFollowing=1);this.currentUser.id!==this.User.id||(this.User.totalFollowings+=1)},afterAddFollowMain:function(e){this.addFollowId=e},afterDeleteFollow:function(e){if(this.User.id===e)return this.User.totalFollowers-=1,void(this.User.isFollowing=0);this.currentUser.id!==this.User.id||(this.User.totalFollowings-=1)},afterDeleteFollowMain:function(e){this.removeFollowId=e},changeReplyCount:function(e){this.likes.map((function(t){t.Tweet.id===e&&(t.Tweet.totalReplies+=1)}))}}},b=U,k=(a("2e31"),a("2877")),F=Object(k["a"])(b,r,i,!1,null,"183fa180",null);t["default"]=F.exports},bf9b:function(e,t,a){}}]);
//# sourceMappingURL=chunk-7a4c62ea.fcfc636b.js.map