if (self.CavalryLogger) { CavalryLogger.start_js(["T199c"]); }

__d('MercuryShareAttachmentRenderLocations',[],(function a(b,c,d,e,f,g){'use strict';var h={CHAT:'chat',CHAT_PREVIEW:'chat_preview',MESSENGER:'messenger',PAGES_INBOX:'pages_inbox',getValues:function i(){return [h.CHAT,h.CHAT_PREVIEW,h.MESSENGER,h.PAGES_INBOX];},isPreview:function i(j){return j===h.CHAT_PREVIEW;}};f.exports=h;}),null);
__d('ImageBlock.react',['cx','invariant','LeftRight.react','React','joinClasses'],(function a(b,c,d,e,f,g,h,i){var j,k;function l(o){var p=o.children;p&&(p.length===2||p.length===3)||i(0);p[0]!==null||i(0);return p;}function m(o){return "img"+(' '+"_8o")+(o==='small'?' '+"_8r":'')+(o==='medium'?' '+"_8s":'')+(o==='large'?' '+"_8t":'');}j=babelHelpers.inherits(n,c('React').Component);k=j&&j.prototype;n.prototype.render=function(){'use strict';var o=l(this.props),p=o[0],q=o[1],r=o[2],s=this.props,t=s.imageClassName,u=s.contentClassName,v=s.spacing,w=babelHelpers.objectWithoutProperties(s,['imageClassName','contentClassName','spacing']),x=p.props,y=x.className,z=x.alt,aa=x.tabIndex,ba=x.title,ca={className:c('joinClasses')(y,m(v),t)};if(p.type==='img'){if(z===undefined)ca.alt='';}else if((p.type==='a'||p.type==='link')&&aa===undefined&&ba===undefined&&p.props['aria-label']===undefined){ca.tabIndex='-1';ca['aria-hidden']='true';}p=c('React').cloneElement(p,ca);var da=c('joinClasses')(u,"_42ef"+(v==='small'?' '+"_8u":'')),ea=void 0;if(!r){ea=c('React').createElement('div',{className:da},q);}else ea=c('React').createElement(c('LeftRight.react'),{className:da,direction:c('LeftRight.react').DIRECTION.right},q,r);return c('React').createElement(c('LeftRight.react'),babelHelpers['extends']({},w,{direction:c('LeftRight.react').DIRECTION.left}),p,ea);};function n(){'use strict';j.apply(this,arguments);}n.defaultProps={spacing:'small'};f.exports=n;}),null);
__d('Dispatcher_DEPRECATED',['invariant','monitorCodeUse'],(function a(b,c,d,e,f,g,h){'use strict';var i='ID_';function j(){this.$Dispatcher_DEPRECATED1={};this.$Dispatcher_DEPRECATED2=false;this.$Dispatcher_DEPRECATED3={};this.$Dispatcher_DEPRECATED4={};this.$Dispatcher_DEPRECATED5=1;}j.prototype.register=function(m,n){n=this.__genID(n);this.$Dispatcher_DEPRECATED1[n]=m;return n;};j.prototype.unregister=function(m){this.$Dispatcher_DEPRECATED1[m]||h(0);delete this.$Dispatcher_DEPRECATED1[m];};j.prototype.waitFor=function(m){this.$Dispatcher_DEPRECATED2||h(0);for(var n=0;n<m.length;n++){var o=m[n];if(this.$Dispatcher_DEPRECATED4[o]){this.$Dispatcher_DEPRECATED3[o]||h(0);continue;}this.$Dispatcher_DEPRECATED1[o]||h(0);this.$Dispatcher_DEPRECATED7(o);}};j.prototype.dispatch=function(m){l(this.$Dispatcher_DEPRECATED2,this.$Dispatcher_DEPRECATED6,m);this.$Dispatcher_DEPRECATED8(m);try{for(var n in this.$Dispatcher_DEPRECATED1){if(this.$Dispatcher_DEPRECATED4[n])continue;this.$Dispatcher_DEPRECATED7(n);}}finally{this.$Dispatcher_DEPRECATED9();}};j.prototype.isDispatching=function(){return this.$Dispatcher_DEPRECATED2;};j.prototype.$Dispatcher_DEPRECATED7=function(m){this.$Dispatcher_DEPRECATED4[m]=true;this.__invokeCallback(m,this.$Dispatcher_DEPRECATED1[m],this.$Dispatcher_DEPRECATED6);this.$Dispatcher_DEPRECATED3[m]=true;};j.prototype.__invokeCallback=function(m,n,o){n(o);};j.prototype.$Dispatcher_DEPRECATED8=function(m){for(var n in this.$Dispatcher_DEPRECATED1){this.$Dispatcher_DEPRECATED4[n]=false;this.$Dispatcher_DEPRECATED3[n]=false;}this.$Dispatcher_DEPRECATED6=m;this.$Dispatcher_DEPRECATED2=true;};j.prototype.$Dispatcher_DEPRECATED9=function(){delete this.$Dispatcher_DEPRECATED6;this.$Dispatcher_DEPRECATED2=false;};j.prototype.__genID=function(m){var n=m?m+'_':i;m=m||n+this.$Dispatcher_DEPRECATED5++;while(this.$Dispatcher_DEPRECATED1[m])m=n+this.$Dispatcher_DEPRECATED5++;return m;};function k(m){var n='<unknown>';if(!m)return n;if(typeof m.type==='string')return m.type;if(typeof m.actionType==='string')return m.actionType;if(!m.action)return n;if(typeof m.action.type==='string')return m.action.type;if(typeof m.action.actionType==='string')return m.action.actionType;return n;}function l(m,n,o){!m||h(0);}f.exports=j;}),18);