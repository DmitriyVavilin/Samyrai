"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[96],{874:function(s,e,t){t.r(e),t.d(e,{default:function(){return L}});var o=t(1413),i=t(5671),r=t(3144),n=t(136),a=t(2882),l=t(2791),u=t(8687),c=t(846),d="Profile_content__aUk8J",h=t(885),f={descriptionBlock:"ProfileInfo_descriptionBlock__IIcph",refreshPhoto:"ProfileInfo_refreshPhoto__sqVl5",loadingPhoto:"ProfileInfo_loadingPhoto__INVb2",contact:"ProfileInfo_contact__CrO9B",user:"ProfileInfo_user__Dk4Mu"},p=t(9041),x=t(184),j=function(s){var e=s.status,t=s.updateStatus,o=(0,l.useState)(!1),i=(0,h.Z)(o,2),r=i[0],n=i[1],a=(0,l.useState)(e),u=(0,h.Z)(a,2),c=u[0],d=u[1];(0,l.useEffect)((function(){d(e)}),[e]);return(0,x.jsx)("div",{children:r?(0,x.jsx)("div",{children:(0,x.jsx)("input",{onChange:function(s){d(s.currentTarget.value)},autoFocus:!0,value:c,onBlur:function(){n(!1),t(c)}})}):(0,x.jsxs)("div",{children:[(0,x.jsx)("b",{children:"Status:"}),"  ",(0,x.jsx)("span",{onDoubleClick:function(){n(!0)},children:e||"No status"})]})})},m=t.p+"static/media/bussiness-man.46d7f612aa4b54075372.png",v=t.p+"static/media/loadingPhoto.a21a31d87cf07001ceb9.png",b=t(1812),P=t(704),g=(0,P.Z)({form:"edit-profile"})((function(s){var e=s.handleSubmit;return(0,x.jsxs)("form",{onSubmit:e,children:[(0,x.jsx)("button",{children:"Save"}),(0,x.jsxs)("div",{children:[(0,x.jsx)("b",{children:"Full Name:"})," ",(0,b.Gr)("fullName",[],b.II,"Full name","input")]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("b",{children:"Looking for a job:"}),(0,b.Gr)("lookingForAJob",[],b.II,"Looking forA job","checkbox")]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("b",{children:"My professional skills:"}),(0,b.Gr)("lookingForAJobDescription",[],b.Kx,"My professional skills","textarea")]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("b",{children:"About me:"}),(0,b.Gr)("AboutMe",[],b.Kx,"About me","textarea")]})]})})),_=function(s){var e=s.profile,t=s.updateStatus,o=s.status,i=s.isOwner,r=s.savePhoto,n=s.saveProfile,a=(0,l.useState)(!1),u=(0,h.Z)(a,2),c=u[0],d=u[1];if(!e)return(0,x.jsx)(p.p,{});var b=e.photos.large?e.photos.large:m;return(0,x.jsx)("div",{className:f.profile,children:(0,x.jsxs)("div",{className:f.descriptionBlock,children:[(0,x.jsx)("img",{className:f.user,src:b}),i&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("label",{className:f.customFileInput,htmlFor:"add_avatar",children:(0,x.jsxs)("div",{className:f.refreshPhoto,children:[(0,x.jsx)("img",{className:f.loadingPhoto,src:v}),"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0444\u043e\u0442\u043e"]})}),(0,x.jsx)("input",{id:"add_avatar",hidden:!0,type:"file",name:"file",onChange:function(s){s.target.files&&s.target.files.length&&r(s.target.files[0])}})]}),c?(0,x.jsx)(g,{initialValues:{fullName:e.fullName,aboutMe:e.aboutMe,lookingForAJob:e.lookingForAJob,lookingForAJobDescription:e.lookingForAJobDescription},onSubmit:function(s){n(s),d(!1)}}):(0,x.jsx)(k,{goToEditMode:function(){return d(!0)},profile:e,isOwner:i}),(0,x.jsx)(j,{status:o,updateStatus:t})]})})},k=function(s){var e=s.profile,t=s.isOwner,o=s.goToEditMode;return(0,x.jsxs)("div",{children:[t&&(0,x.jsx)("div",{children:(0,x.jsx)("button",{onClick:o,children:"Edit"})}),(0,x.jsxs)("div",{children:[(0,x.jsx)("b",{children:"Full Name:"})," ",e.fullName]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("b",{children:"Looking for a job:"})," ",e.lookingForAJob?"yes":"no"]}),e.lookingForAJob&&(0,x.jsxs)("div",{children:[(0,x.jsx)("b",{children:"My professional skills:"})," ",e.lookingForAJobDescription]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("b",{children:"About me:"})," ",e.aboutMe]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("b",{children:"Contacts:"})," ",Object.keys(e.contacts).map((function(s){return(0,x.jsx)(N,{contactTitle:s,contactValue:e.contacts[s]},s)}))]})]})},N=function(s){var e=s.contactTitle,t=s.contactValue;return(0,x.jsxs)("div",{className:f.contact,children:[(0,x.jsx)("b",{children:e}),": ",t]})},S="MyPost_postBlock__6vI7y",I="MyPost_posts__zBSHf",A="MyPost_addPost__ukw3i",y="MyPost_h3__WFJl1",F="Post_item__NdJ--",M="Post_textContainer__kA-1s",C="Post_likeContainer__zKa6l",w=t.p+"static/media/man.ab45eb1d42b1faaf3d12.png",J=function(s){var e=s.likesCount,t=s.messages;return(0,x.jsxs)("div",{children:[(0,x.jsxs)("div",{className:F,children:[(0,x.jsx)("img",{src:w}),(0,x.jsx)("div",{className:M,children:t})]}),(0,x.jsx)("div",{className:C,children:(0,x.jsxs)("span",{children:["Like ",e]})})]})},D=t(1047),U="AddNewPostForm_btn__a9tNn",Z=(0,D.D)(10),O=(0,P.Z)({form:"AddNewPostForm"})((function(s){var e=s.handleSubmit;return(0,x.jsxs)("form",{onSubmit:e,children:[(0,b.Gr)("newPost",[D.C,Z],b.Kx,"Post Message","input"),(0,x.jsx)("div",{children:(0,x.jsx)("button",{className:U,children:"ADD YOUR POST"})})]})})),B=l.memo((function(s){var e=s.posts,t=s.addPost,o=e.map((function(s,e){return(0,x.jsx)(J,{messages:s.messages,likesCount:s.likesCount},e)}));return(0,x.jsxs)("div",{className:S,children:[(0,x.jsx)("h3",{className:y,children:"My post"}),(0,x.jsx)("div",{className:A,children:(0,x.jsx)("div",{children:(0,x.jsx)(O,{onSubmit:function(s){t(s.newPost)}})})}),(0,x.jsx)("div",{className:I,children:o})]})})),T=(0,u.$j)((function(s){return{posts:s.profilePage.posts}}),(function(s){return{addPost:function(e){s((0,c.Pi)(e))}}}))(B),E=function(s){var e=s.profile,t=s.savePhoto,o=s.status,i=s.updateStatus,r=s.isOwner,n=s.saveProfile;return e?(0,x.jsxs)("div",{className:d,children:[(0,x.jsx)(_,{saveProfile:n,savePhoto:t,isOwner:r,profile:e,status:o,updateStatus:i}),(0,x.jsx)(T,{})]}):(0,x.jsx)(p.p,{})},G=t(4880),V=t(2932),z=t(7781),K=function(s){(0,n.Z)(t,s);var e=(0,a.Z)(t);function t(){return(0,i.Z)(this,t),e.apply(this,arguments)}return(0,r.Z)(t,[{key:"refreshProfile",value:function(){var s=this.props,e=s.authorizedUserId,t=s.history,o=s.getUserProfile,i=s.getUserStatus,r=this.props.match.params.userId;r||(r=null===e?"2":e.toString())||t.push("/login"),o(r),i(r)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(s,e,t){this.props.match.params.userId!==s.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return(0,x.jsx)("div",{children:(0,x.jsx)(E,(0,o.Z)((0,o.Z)({isOwner:!this.props.match.params.userId},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto}))})}}]),t}(l.Component),L=(0,z.qC)((0,u.$j)((function(s){return{profile:s.profilePage.profile,status:s.profilePage.status,authorizedUserId:s.authUsers.userId,isAuth:s.authUsers.isAuth}}),{setUsersProfile:c.hA,getUserProfile:c.et,getUserStatus:c.lR,updateStatus:c.Nf,savePhoto:c.Ju,saveProfile:c.Ii}),G.EN,V.D)(K)}}]);
//# sourceMappingURL=96.9a155e93.chunk.js.map