webpackJsonp([0],{24:function(t,e,i){"use strict";(function(t){function e(t){return t&&t.__esModule?t:{default:t}}function n(){Kakao.Auth.login({success:function(t){alert(JSON.stringify(t))},fail:function(t){alert(JSON.stringify(t))}})}function a(){var t=new r.default("VxgHymo8VpJl3iyxveUB","http://localhost:3000/"),e=t.getUniqState();t.response_type="code",t.setButton("green",3,40),t.setDomain("http://localhost:3000/login"),t.setState(e),t.init_naver_id_login()}i(2),i(1);var o=i(3),s=e(o),c=i(4),r=e(c);i(6),i(7),i(8),i(9);var l=new s.default;t(document).ready(function(){Kakao.init("0e34b26f5967894741aa1e4f97e1537b"),l.handleClientLoad(),a(),t("#login_btn_kakao").click(function(){console.log("kakao"),n()}),t("#naver_id_login").click(function(){console.log("naver")}),t("#login_btn_facebook").click(function(){console.log("facebook")}),t("#login_btn_google").click(function(){console.log("google"),l.handleSignInClick()})})}).call(e,i(0))},3:function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t){t&&o()}function o(){gapi.client.people.people.get({resourceName:"people/me","requestMask.includeField":"person.names"}).then(function(t){console.log("Hello, "+t.result.names[0].givenName)},function(t){console.log("Error: "+t.result.error.message)})}var s=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),c=function(){function t(){n(this,t)}return s(t,[{key:"handleClientLoad",value:function(){gapi.load("client:auth2",this.initClient)}},{key:"initClient",value:function(){gapi.client.init({apiKey:"AIzaSyCtYWWs0WsnAfC4EmYFMoLIoETvPvoPKMg",discoveryDocs:["https://people.googleapis.com/$discovery/rest?version=v1"],clientId:"393277494210-pefadhtq8di5fqcfooo6hghp60fvjfeu.apps.googleusercontent.com",scope:"profile"}).then(function(){gapi.auth2.getAuthInstance().isSignedIn.listen(a),a(gapi.auth2.getAuthInstance().isSignedIn.get())})}},{key:"handleSignInClick",value:function(t){gapi.auth2.getAuthInstance().signIn()}},{key:"handleSignOutClick",value:function(t){gapi.auth2.getAuthInstance().signOut()}}]),t}();t.exports=c},4:function(module,exports,__webpack_require__){"use strict";(function($){var BUTTON_TYPE=1,BANNER_SMALL_TYPE=2,BANNER_BIG_TYPE=3,BUTTON_COLOR_WHITE="white",BUTTON_COLOR_GREEN="green",color="",naver_id_login=function naver_id_login(client_id,redirect_uri){this.button_color=BUTTON_COLOR_GREEN,this.button_type=BUTTON_TYPE,this.button_height=40,this.nil_domain="",this.response_type="token",this.authorize_url="https://nid.naver.com/oauth2.0/authorize",this.state="",this.scope="",this.client_id=client_id,this.redirect_uri=redirect_uri,this.cookie_name="nil_state",this.popup=!1,this.oauthParams={},this.profileParams={},this.is_callback=!1,this.callback_status="",this.callback_message="",this.setPopup=function(){this.popup=!0},this.setState=function(t){this.state=void 0!==t&&""!=t?t:""},this.setDomain=function(t){this.nil_domain=void 0!==t&&""!=t?t:""},this.setButton=function(t,e,i){this.button_color=void 0!==t&&""!=t?t:BUTTON_COLOR_GREEN,this.button_type=void 0!==e&&""!=e?e:BUTTON_TYPE,this.button_height=void 0!==i&&""!=i?i:40},this.getUniqState=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0;return("x"===t?e:3&e|8).toString(16)})},this.getLocalStorageItemSafely=function(){try{var t=localStorage.getItem(this.cookie_name);return null==t||0==t.length?t:t.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}catch(t){return null}},this.setStateStore=function(){try{if(""!=this.nil_domain?document.cookie=this.cookie_name+"=; path=/; domain="+this.nil_domain+"; expires=Thu, 01 Jan 1970 00:00:00 UTC;":document.cookie=this.cookie_name+"=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC",localStorage.setItem("nil_state",this.state),""!=this.nil_domain){var t=new Date,e=new Date(t.getTime()+3e5),i=this.cookie_name+"="+escape(this.state)+"; expires="+e.toGMTString()+"; domain="+this.nil_domain+";path=/;";document.cookie=i}}catch(n){var t=new Date,e=new Date(t.getTime()+3e5),i=this.cookie_name+"="+escape(this.state)+"; expires="+e.toGMTString()+";path=/;";document.cookie=i}},this.getNaverIdLoginLink=function(){if(this.is_callback?this.state=this.oauthParams.state:this.setStateStore(),void 0==this.client_id||"�깅줉�� ClientID 媛�"==this.client_id||this.client_id.length<5)return alert("�깅줉�� ClientID 媛믪쓣 �낅젰�� 二쇱꽭��."),!1;if(void 0==this.redirect_uri||"�깅줉�� Callback URL 媛�"==this.redirect_uri||this.redirect_uri.length<5)return alert("�깅줉�� Callback URL 媛믪쓣 �낅젰�� 二쇱꽭��."),!1;var t=this.authorize_url+"?response_type="+this.response_type+"&client_id="+this.client_id+"&redirect_uri="+encodeURIComponent(this.redirect_uri)+"&state="+encodeURIComponent(this.state);return""!=this.scope&&(t=t+"&scope="+encodeURIComponent(this.scope)),t},this.init_naver_id_login=function(){var t=document.getElementById("naver_id_login");if(void 0==t)return alert("id 媛� naver_id_login �� div tag 媛� 議댁옱�댁빞 �⑸땲��."),!1;color="green"==this.button_color?"g":"w",t.innerHTML="";var e="",i=this.getNaverIdLoginLink();void 0!=this.state&&""!=this.state||(this.state=this.getUniqState());var n="";this.popup?n=" onClick=\"window.open(this.href, 'naverloginpop', 'titlebar=1, resizable=1, scrollbars=yes, width=600, height=550'); return false\" ":e="<a href='"+i+"' "+n+" id='naver_id_login_anchor'><img src='../img/naver.png' border='0' title='�ㅼ씠踰� �꾩씠�붾줈 濡쒓렇��'></a> ",t.innerHTML=e,this.is_callback&&this.init_naver_id_login_callback()},this.checkStateStore=function(t){if(void 0!=this.state||""==this.state?state=this.getLocalStorageItemSafely():state=this.state,null!=state&&state.length>10){if(state==t){try{localStorage.removeItem(this.cookie_name)}catch(t){}return!0}try{localStorage.removeItem(this.cookie_name)}catch(t){}return!1}return void 0!=this.state||""==this.state?state=this.getCookie():state=this.state,null!=state&&state.length>10&&(state==t?(""!=this.nil_domain?document.cookie=this.cookie_name+"=; path=/; domain="+this.nil_domain+"; expires=Thu, 01 Jan 1970 00:00:00 UTC;":document.cookie=this.cookie_name+"=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC",!0):(""!=this.nil_domain?document.cookie=this.cookie_name+"=; path=/; domain="+this.nil_domain+"; expires=Thu, 01 Jan 1970 00:00:00 UTC;":document.cookie=this.cookie_name+"=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC",!1))},this.getCookie=function(){for(var t="nil_state=",e=t.length,i=document.cookie.length,n=0;n<i;){var a=n+e;if(document.cookie.substring(n,a)==t){var o=document.cookie.indexOf(";",a);return-1==o&&(o=document.cookie.length),unescape(document.cookie.substring(a,o))}if(0==(n=document.cookie.indexOf(" ",n)+1))break}return null},this.parseCallBack=function(){for(var t,e={},i=(document.location+"").substring(1),n=/([^#?&=]+)=([^&]*)/g;null!==(t=n.exec(i));)e[decodeURIComponent(t[1])]=decodeURIComponent(t[2]);this.oauthParams=e},this.parseCallBack_check=function(){this.parseCallBack(),void 0!=this.oauthParams.access_token?this.is_callback=!0:this.is_callback=!1},this.init_naver_id_login_callback=function(){this.parseCallBack_check(),this.is_callback&&(void 0==this.oauthParams.error?void 0!=this.oauthParams.access_token&&(this.checkStateStore(this.oauthParams.state)?(this.callback_status="success",this.callback_message="state check success"):this.state==this.oauthParams.state?(this.callback_status="success",this.callback_message="state check success"):(alert("state 媛믪씠 留욎씠 �딆뒿�덈떎."),this.callback_status="warning",this.callback_message="state miss match")):(this.callback_status="fail",this.callback_message="invalid access"))},this.parseCallBack_check(),this.get_naver_userprofile=function(callback_func1){$.ajax({url:"https://openapi.naver.com/v1/nid/getUserProfile.json?response_type=json",type:"GET",data:{access_token:this.oauthParams.access_token},dataType:"jsonp",jsonp:"oauth_callback",success:function success(result){inner_profileParams.age=result.response.age,inner_profileParams.birthday=result.response.birthday,inner_profileParams.email=result.response.email,inner_profileParams.enc_id=result.response.enc_id,inner_profileParams.gender=result.response.gender,inner_profileParams.id=result.response.id,inner_profileParams.nickname=result.response.nickname,inner_profileParams.profile_image=result.response.profile_image,eval(callback_func1)},error:function(t,e,i){alert(t.status),alert(i)}})},this.getProfileData=function(t){return inner_profileParams[t]},this.getOauthMessage=function(){return this.callback_message},this.getOauthStatus=function(){return this.callback_status},this.getAccessToken=function(){return this.oauthParams.access_token}},inner_profileParams={};module.exports=naver_id_login}).call(exports,__webpack_require__(0))},6:function(t,e,i){t.exports=i.p+"../img/facebook.png"},7:function(t,e,i){t.exports=i.p+"../img/google.png"},8:function(t,e,i){t.exports=i.p+"../img/kakao.png"},9:function(t,e,i){t.exports=i.p+"../img/naver.png"}},[24]);