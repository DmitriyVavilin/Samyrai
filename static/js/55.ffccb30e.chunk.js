"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[55],{7055:function(s,t,e){e.r(t),e.d(t,{default:function(){return M}});var n=e(1413),i=e(5671),r=e(3144),a=e(136),o=e(2882),u=e(2791),c=e(8687),l=e(846),d={img:"Profile_img__7eqAu"},p={descriptionBlock:"ProfileInfo_descriptionBlock__IIcph"},h=e(9041),f=e(885),j=e(184),x=function(s){var t=s.status,e=s.updateStatus,n=(0,u.useState)(!1),i=(0,f.Z)(n,2),r=i[0],a=i[1],o=(0,u.useState)(t),c=(0,f.Z)(o,2),l=c[0],d=c[1];(0,u.useEffect)((function(){d(t)}),[t]);return(0,j.jsxs)("div",{children:[r?(0,j.jsx)("div",{children:(0,j.jsx)("input",{onChange:function(s){d(s.currentTarget.value)},autoFocus:!0,value:l,onBlur:function(){a(!1),e(l)}})}):(0,j.jsx)("div",{children:(0,j.jsx)("span",{onDoubleClick:function(){a(!0)},children:t||"No status"})}),")"]})},m=function(s){var t=s.profile,e=s.updateStatus,n=s.status;return t?(0,j.jsxs)("div",{children:[(0,j.jsx)("div",{className:p.img,children:(0,j.jsx)("img",{src:"https://p4.wallpaperbetter.com/wallpaper/797/280/934/anime-attack-on-titan-attack-on-titan-colossal-titan-wallpaper-preview.jpg"})}),(0,j.jsxs)("div",{className:p.descriptionBlock,children:[(0,j.jsx)("img",{src:t.photos.large}),(0,j.jsx)(x,{status:n,updateStatus:e}),(0,j.jsxs)("ul",{children:[(0,j.jsx)("li",{children:(0,j.jsx)("span",{children:t.contacts.facebook})}),(0,j.jsx)("li",{children:(0,j.jsx)("span",{children:t.contacts.github})}),(0,j.jsx)("li",{children:(0,j.jsx)("span",{children:t.contacts.vk})}),(0,j.jsx)("li",{children:(0,j.jsx)("span",{children:t.contacts.instagram})}),(0,j.jsx)("li",{children:(0,j.jsx)("span",{children:t.contacts.twitter})})]})]})]}):(0,j.jsx)(h.p,{})},v={postBlock:"MyPost_postBlock__6vI7y",addPost:"MyPost_addPost__ukw3i",h3:"MyPost_h3__WFJl1"},g="Post_item__NdJ--",k=function(s){var t=s.likesCount,e=s.messages;return(0,j.jsx)("div",{children:(0,j.jsxs)("div",{className:g,children:[(0,j.jsx)("img",{src:"https://phonoteka.org/uploads/posts/2022-09/thumbs/1663604556_14-phonoteka-org-p-eren-titan-art-instagram-21.jpg"}),e,(0,j.jsx)("div",{children:(0,j.jsxs)("span",{children:["Like ",t]})})]})})},P=e(704),_=e(1047),S=e(1812),N=(0,_.D)(10),b=(0,P.Z)({form:"AddNewPostForm"})((function(s){var t=s.handleSubmit;return(0,j.jsxs)("form",{onSubmit:t,children:[(0,S.Gr)("newPost",[_.C,N],S.Kx,"Post Message","input"),(0,j.jsx)("div",{children:(0,j.jsx)("button",{children:"add post"})})]})})),w=u.memo((function(s){var t=s.posts,e=s.addPost,n=t.map((function(s,t){return(0,j.jsx)(k,{messages:s.messages,likesCount:s.likesCount},t)}));return(0,j.jsxs)("div",{className:v.postBlock,children:[(0,j.jsx)("h3",{className:v.h3,children:"My post"}),(0,j.jsx)("div",{className:v.addPost,children:(0,j.jsx)("div",{children:(0,j.jsx)(b,{onSubmit:function(s){e(s.newPost)}})})}),(0,j.jsx)("div",{className:v.posts,children:n})]})})),y=(0,c.$j)((function(s){return{posts:s.profilePage.posts}}),(function(s){return{addPost:function(t){s((0,l.Pi)(t))}}}))(w),C=function(s){var t=s.profile,e=s.status,n=s.updateStatus;return(0,j.jsxs)("div",{className:d.content,children:[(0,j.jsx)(m,{profile:t,status:e,updateStatus:n}),(0,j.jsx)(y,{})]})},U=e(4880),Z=e(2932),I=e(7781),B=function(s){(0,a.Z)(e,s);var t=(0,o.Z)(e);function e(){return(0,i.Z)(this,e),t.apply(this,arguments)}return(0,r.Z)(e,[{key:"componentDidMount",value:function(){var s=this.props,t=s.authorizedUserId,e=s.history,n=s.getUserProfile,i=s.getUserStatus,r=this.props.match.params.userId;r||(r=null===t?"2":t.toString())||e.push("/login"),n(r),i(r)}},{key:"render",value:function(){return(0,j.jsx)("div",{children:(0,j.jsx)(C,(0,n.Z)((0,n.Z)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))})}}]),e}(u.Component),M=(0,I.qC)((0,c.$j)((function(s){return{profile:s.profilePage.profile,status:s.profilePage.status,authorizedUserId:s.authUsers.userId,isAuth:s.authUsers.isAuth}}),{setUsersProfile:l.hA,getUserProfile:l.et,getUserStatus:l.lR,updateStatus:l.Nf}),U.EN,Z.D)(B)}}]);
//# sourceMappingURL=55.ffccb30e.chunk.js.map