(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0aed89"],{"0c99":function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"register"},[r("register")],1)},a=[],i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-6 offset-lg-3 col-sm-10 offset-sm-1"},[r("form",{staticClass:"text-center border border-primary p-5",staticStyle:{"margin-top":"70px",height:"auto","padding-top":"100px !important"},on:{submit:function(t){return t.preventDefault(),e.registerUser(t)}}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.register.firstName,expression:"register.firstName"}],staticClass:"form-control mb-5",attrs:{type:"text",id:"name",placeholder:"First Name",required:""},domProps:{value:e.register.firstName},on:{input:function(t){t.target.composing||e.$set(e.register,"firstName",t.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.register.lastName,expression:"register.lastName"}],staticClass:"form-control mb-5",attrs:{type:"text",id:"name",placeholder:"Last Name",required:""},domProps:{value:e.register.lastName},on:{input:function(t){t.target.composing||e.$set(e.register,"lastName",t.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.register.nickName,expression:"register.nickName"}],staticClass:"form-control mb-5",attrs:{type:"text",id:"name",placeholder:"NickName",required:""},domProps:{value:e.register.nickName},on:{input:function(t){t.target.composing||e.$set(e.register,"nickName",t.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.register.birthDate,expression:"register.birthDate"}],staticClass:"form-control mb-5",attrs:{type:"date",id:"name",placeholder:"Birth Date",required:""},domProps:{value:e.register.birthDate},on:{input:function(t){t.target.composing||e.$set(e.register,"birthDate",t.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.register.email,expression:"register.email"}],staticClass:"form-control mb-5",attrs:{type:"email",id:"email",placeholder:"Email",required:""},domProps:{value:e.register.email},on:{input:function(t){t.target.composing||e.$set(e.register,"email",t.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.register.password,expression:"register.password"}],staticClass:"form-control mb-5",attrs:{type:"password",id:"password",placeholder:"Password"},domProps:{value:e.register.password},on:{input:function(t){t.target.composing||e.$set(e.register,"password",t.target.value)}}}),r("p",[e._v("\n                    Already have an account??"),r("router-link",{attrs:{to:"/"}},[e._v("click here")]),r("center",[r("button",{staticClass:"btn btn-primary btn-block w-75 my-4",attrs:{type:"submit"}},[e._v("\n                            Sign in\n                        ")])])],1)])])])])},o=[],n=(r("96cf"),r("1da1")),l={data:function(){return{register:{firstName:"",lastName:"",birthDate:"",nickName:"",email:"",password:""}}},methods:{registerUser:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(){var t,r,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.$http.post("http://localhost:3000/users",this.register);case 3:t=e.sent,r=t.data.token,r?(localStorage.setItem("jwt",r),this.$router.push("/"),alert("Success","Registration Was successful","success")):alert("Error","Something Went Wrong","error"),e.next=12;break;case 8:e.prev=8,e.t0=e["catch"](0),s=e.t0.response,409==s.status?alert("Error",s.data.message,"error"):alert("Error",s.data.err.message,"error");case 12:case"end":return e.stop()}},e,this,[[0,8]])}));function t(){return e.apply(this,arguments)}return t}()}},m=l,c=r("2877"),u=Object(c["a"])(m,i,o,!1,null,null,null),p=u.exports,d={components:{register:p}},g=d,v=Object(c["a"])(g,s,a,!1,null,null,null);t["default"]=v.exports}}]);
//# sourceMappingURL=chunk-2d0aed89.75873522.js.map