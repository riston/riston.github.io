if (self.CavalryLogger) { CavalryLogger.start_js(["3JCWW"]); }

__d("MessagingSourceEnum",[],(function a(b,c,d,e,f,g){f.exports={CHAT_ORCA:"source:chat:orca",CHAT_IPHONE:"source:chat:iphone",CHAT_JABBER:"source:chat:jabber",CHAT_MEEBO:"source:chat:meebo",CHAT_WEB:"source:chat:web",CHAT_TEST:"source:chat:test",CHAT_FORWARD_DIALOG:"source:chat:forward",CHAT:"source:chat",CONTACT_ADD_MUTATION:"source:contact_add:graphql_mutation",CONTACT_ADD_CYMK:"source:contact_add:cymk_suggestion",EMAIL:"source:email",EVENT_MESSAGE_BLAST:"source:event_message_blast",EVENT_REMINDERS:"source:event_reminders",FUNDRAISER_MESSAGE_BLAST:"source:fundraiser_message_blast",GENERIC_ADMIN_TEXT:"source:generic_admin_text",GIGABOXX_API:"source:gigaboxx:api",GIGABOXX_BLAST:"source:gigaboxx:blast",GIGABOXX_EMAIL_REPLY:"source:gigaboxx:emailreply",GIGABOXX_MOBILE:"source:gigaboxx:mobile",GIGABOXX_WAP:"source:gigaboxx:wap",GIGABOXX_WEB:"source:gigaboxx:web",INVITE:"source:invite",LEIA:"source:leia",MESSENGER_WEB:"source:messenger:web",MESSENGER_WEB_SEARCH:"source:messenger:web_search",SAM_UFI:"source:sam:ufi",SHARE_DIALOG:"source:share:dialog",SEND_PLUGIN:"source:sendplugin",SMS:"source:sms",TEST:"source:test",TITAN_WAP:"source:titan:wap",TITAN_M_BASIC:"source:titan:m_basic",TITAN_M_FREE:"source:titan:m_free_basic",TITAN_M_JAPAN:"source:titan:m_japan",TITAN_M_MINI:"source:titan:m_mini",TITAN_M_TOUCH:"source:titan:m_touch",TITAN_M_APP:"source:titan:m_app",TITAN_M_TABLET:"source:titan:m_tablet",TITAN_M_ZERO:"source:titan:m_zero",TITAN_M_TALK:"source:titan:m_talk",TITAN_WEB:"source:titan:web",TITAN_FACEWEB_ANDROID:"source:titan:faceweb_android",TITAN_FACEWEB_BUFFY:"source:titan:faceweb_buffy",TITAN_FACEWEB_IPAD:"source:titan:faceweb_ipad",TITAN_FACEWEB_IPHONE:"source:titan:faceweb_iphone",TITAN_FACEWEB_UNKNOWN:"source:titan:faceweb_unknown",TITAN_API:"source:titan:api",TITAN_API_MOBILE:"source:titan:api_mobile",TITAN_ORCA:"source:titan:orca",TITAN_EMAIL_REPLY:"source:titan:emailreply",MOBILE:"source:mobile",PAGE_PLATFORM_API:"source:page_platform_api",UNKNOWN:"source:unknown",WEB:"source:web",HELPCENTER:"source:helpcenter",NEW_SHARE_DIALOG:"source:share:dialog:new",PAID_PROMOTION:"source:paid_promotion",BUFFY_SMS:"source:buffy:sms",WEBRTC_MOBILE:"source:webrtc:mobile",MESSENGER_COMMERCE:"source:messenger:commerce",MESSENGER_BOT:"source:bot",MESSENGER_EMPLOYEE_ONLY_BOT:"source:bot:employee_only",MESSENGER_OMNIM:"source:messenger:omnim",PAGES_PRIVATE_REPLY:"source:pages:private_reply",MESSENGER_FORWARD_DIALOG:"source:messenger:forward",MESSENGER_AD:"source:messenger:ad",MARKETPLACE:"source:marketplace",MESSENGER_LEAD_GEN:"source:messenger:lead_gen",PAGES_MESSAGE_SHORTLINK:"source:pages:message_shortlink",STICKER_SUBSCRIBE:"source:messenger:sticker_subscribe",PHOTO_TAG:"source:messenger:photo_tag",INTERNAL_TEST_PENDING:"source:internal:test_pending",JOB_SEARCH_APPLICATION:"source:job_search:application",MESSENGER_JOINABLE_LINK:"source:messenger:joinable_link",MESSENGER_SMS_BRIDGE_CONVERT:"source:messenger:sms_bridge_conversion",TINCAN_ORCA:"source:tincan:orca",TINCAN_IOS:"source:tincan:ios",TINCAN_UNKNOWN:"source:tincan:unknown",FACEBOOK_GROUPS_CHANNELS:"source:groups:channels",GROUP_COMMERCE:"source:group_commerce",INTERNAL_TOOL:"source:internal:tool",PAGES_PLATFORM:"source:pages:platform",PAGES_RECOMMENDATION:"source:pages:recommendation",PAGE_AUTO_RESPONSE:"source:pages:auto_response",PAGES_INVITE:"source:pages:invite",SAVED_CHAT_EXTENSION:"source:saved:chat_extension",CREATOR_PAGE_INITIATE_TO_CREATOR_PAGE:"source:pages:creator_page_initiate_to_creator_page",FRIENDING_ADMIN_BUMP:"source:messenger_growth:friending_admin_bump",NEW_MESSENGER_USER_ADMIN_BUMP:"source:messenger_growth:new_messenger_user_admin_bump",EVENT_UPCOMING_BUMP:"source:messenger_growth:event_upcoming_bump",PHOTO_TAG_BUMP:"source:messenger_growth:photo_tag_bump",WALL_POST_BUMP:"source:messenger_growth:wall_post_bump",CUSTOMIZATION_UPSELL_BUMP:"source:messenger_growth:customization_upsell_bump"};}),null);
__d("MessengerView",[],(function a(b,c,d,e,f,g){f.exports={DETAIL:{COMPOSE:"detail\/compose",THREAD:"detail\/thread"},MASTER:{GROUPS:"master\/groups",PEOPLE:"master\/people",RECENT:"master\/recent",SUPPORT:"master\/support",SEARCH:"master\/search"}};}),null);
__d("P2PTransferStatus",[],(function a(b,c,d,e,f,g){f.exports={PENDING_SENDER_MANUAL_REVIEW:1,PENDING_SENDER_VERIFICATION:2,CANCELED_SENDER_RISK:3,PENDING_RECIPIENT_NUX:4,CANCELED_DECLINED:5,PENDING_RECIPIENT_VERIFICATION:6,PENDING_RECIPIENT_MANUAL_REVIEW:7,PENDING_RECIPIENT_PROCESSING:8,PENDING_PUSH_FAIL:9,CANCELED_RECIPIENT_RISK:10,CANCELED_SYSTEM_FAIL:11,CANCELED_EXPIRED:12,COMPLETED:13,INTERMEDIATE_PROCESSING:14,PENDING_SENDER_INITED:15,CANCELED_SAME_CARD:16,PENDING_SENDER_VERIFICATION_PROCESSING:17,PENDING_RECIPIENT_VERIFICATION_PROCESSING:18,CANCELED_SENDER_CANCEL:19};}),null);
__d('Newline.react',['React'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits(j,c('React').Component);i=h&&h.prototype;j.prototype.render=function(){'use strict';return c('React').createElement('br',this.props);};function j(){'use strict';h.apply(this,arguments);}f.exports=j;}),null);
__d('Text.react',['React'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits(j,c('React').Component);i=h&&h.prototype;j.prototype.render=function(){'use strict';return c('React').createElement('span',this.props,this.props.children);};function j(){'use strict';h.apply(this,arguments);}f.exports=j;}),null);
__d('BaseTextWithEntities.react',['Newline.react','React','ReactFragment','Text.react','UnicodeUtils'],(function a(b,c,d,e,f,g){'use strict';var h,i,j=c('React').PropTypes;function k(o,p){return o.offset-p.offset;}var l=/(\r\n|[\r\n])/,m=j.shape({length:j.number.isRequired,offset:j.number.isRequired});h=babelHelpers.inherits(n,c('React').Component);i=h&&h.prototype;function n(){var o,p;for(var q=arguments.length,r=Array(q),s=0;s<q;s++)r[s]=arguments[s];return p=(o=i.constructor).call.apply(o,[this].concat(r)),this.$BaseTextWithEntities1=function(){return [].concat(this.props.ranges,this.props.aggregatedRanges,this.props.imageRanges,this.props.metaRanges,this.props.inlineStyleRanges).filter(function(t){return t!=null;}).sort(k);}.bind(this),this.$BaseTextWithEntities2=function(t){var u=t.split(l),v={};for(var w=0;w<u.length;w++){var x=u[w];if(x){var y='text'+w;if(w%2===1){v[y]=c('React').createElement(c('Newline.react'),null);}else v[y]=this.props.textRenderer(u[w]);}}return c('ReactFragment').create(v);}.bind(this),p;}n.prototype.render=function(){var o=0,p=this.props.text,q=this.$BaseTextWithEntities1(),r={},s=q.length;for(var t=0,u=s;t<u;t++){var v=q[t];if(v.offset<o)continue;if(v.offset>o)r['text'+t]=this.$BaseTextWithEntities2(c('UnicodeUtils').substring(p,o,v.offset));var w=c('UnicodeUtils').substr(p,v.offset,v.length);r['range'+t]=this.props.rangeRenderer(w,v);o=v.offset+v.length;}if(p.length>o)r.end=this.$BaseTextWithEntities2(c('UnicodeUtils').substr(p,o));return c('React').createElement(c('Text.react'),{className:this.props.className,style:this.props.style},c('ReactFragment').create(r));};n.propTypes={aggregatedRanges:j.array,imageRanges:j.array,inlineStyleRanges:j.array,metaRanges:j.array,rangeRenderer:j.func.isRequired,ranges:j.arrayOf(m),text:j.string.isRequired,textRenderer:j.func.isRequired};f.exports=n;}),null);
__d('MessengerTextWithEntities.react',['Link.react','React','BaseTextWithEntities.react','MessengerTextWithEmoticons.react'],(function a(b,c,d,e,f,g){'use strict';var h,i;function j(l){return l.replace(/<3\b|&hearts;/g,'\u2665');}h=babelHelpers.inherits(k,c('React').Component);i=h&&h.prototype;function k(){var l,m;for(var n=arguments.length,o=Array(n),p=0;p<n;p++)o[p]=arguments[p];return m=(l=i.constructor).call.apply(l,[this].concat(o)),this.$MessengerTextWithEntities1=function(q){if(this.props.renderEmoticons||this.props.renderEmoji){return c('React').createElement(c('MessengerTextWithEmoticons.react'),{text:q,customSize:this.props.customSize,renderEmoticons:this.props.renderEmoticons,renderEmoji:this.props.renderEmoji});}else return j(q);}.bind(this),this.$MessengerTextWithEntities2=function(q,r){if(this.props.interpolator){return this.props.interpolator(q,r);}else return c('React').createElement(c('Link.react'),{href:r.entity},q);}.bind(this),m;}k.prototype.render=function(){return c('React').createElement(c('BaseTextWithEntities.react'),babelHelpers['extends']({},this.props,{aggregatedRanges:this.props.aggregatedRanges,imageRanges:this.props.imageRanges,metaRanges:this.props.metaRanges,rangeRenderer:this.$MessengerTextWithEntities2,ranges:this.props.ranges,text:this.props.text,textRenderer:this.$MessengerTextWithEntities1}));};f.exports=k;}),null);
__d('MessengerDialogCancelButton.react',['fbt','MessengerDialogButton.react','React'],(function a(b,c,d,e,f,g,h){'use strict';var i,j;i=babelHelpers.inherits(k,c('React').PureComponent);j=i&&i.prototype;k.prototype.render=function(){return c('React').createElement(c('MessengerDialogButton.react'),babelHelpers['extends']({action:'cancel',label:h._("Cancel"),type:'secondary'},this.props));};function k(){i.apply(this,arguments);}f.exports=k;}),null);
__d('MessengerDialogFooter.react',['cx','LeftRight.react','React','joinClasses'],(function a(b,c,d,e,f,g,h){'use strict';var i,j,k=c('React').PropTypes;i=babelHelpers.inherits(l,c('React').Component);j=i&&i.prototype;l.prototype.render=function(){return c('React').createElement('div',{className:c('joinClasses')("_4eb_",this.props.className)},c('React').createElement(c('LeftRight.react'),null,c('React').createElement('div',{className:"_2_d1"},this.props.leftContent),c('React').createElement('div',null,this.props.children)));};function l(){i.apply(this,arguments);}l.propTypes={leftContent:k.object};f.exports=l;}),null);
__d('MessengerStateProcessor',['MercuryAPIArgsSource','MercuryIDs','MercuryParticipantTypes','MercuryParticipants','MercuryThreadIDMap','MercuryThreads','MercuryVanityIDMap','MessengerURIConstants'],(function a(b,c,d,e,f,g){'use strict';var h={preprocess:function j(k){var l=k.activeThreadID;if(l){var m=c('MercuryIDs').getUserIDFromThreadID(l),n=m&&c('MercuryParticipants').getNow(c('MercuryIDs').getParticipantIDFromUserID(m));if(n&&n.type!==c('MercuryParticipantTypes').EVENT){k.threadKey=n.vanity||m;}else if(m&&!n){var o=c('MercuryIDs').getParticipantIDFromUserID(m);k.threadKey=c('MercuryVanityIDMap').hasID(o)?c('MercuryVanityIDMap').getVanity(o):m;}else{var p=c('MercuryThreadIDMap').get(),q=p.getServerIDFromClientIDNow(l);k.threadKey=q||c('MercuryIDs').tokenize(l).value;}}delete k.activeThreadID;return k;},postprocess:function j(k){var l=c('MercuryThreadIDMap').get(),m=c('MercuryThreads').get(),n=i(k.threadKey),o=void 0;o=c('MercuryIDs').isValid(n)?n:l.getClientIDFromServerIDNow(n);if(!o){var p=c('MercuryParticipants').getIDFromVanityOrFBID(n),q=p&&m.getCanonicalThreadToParticipant(p,null,c('MercuryAPIArgsSource').MESSENGER);if(q)o=q.thread_id;}if(o){k.activeThreadID=o;k.serverThreadID=l.getServerIDFromClientIDNow(o);}delete k.threadKey;return k;},supportInboxPostprocess:function j(k){if(k.threadKey)k.activeThreadID=c('MercuryIDs').getThreadIDFromSupportInboxItemID(k.threadKey);delete k.threadKey;return k;}};function i(j){if(!j)return null;return j.startsWith(c('MessengerURIConstants').GROUP_PREFIX)?j.substr(c('MessengerURIConstants').GROUP_PREFIX.length):j;}f.exports=h;}),null);
__d('MessengerURISerializer',['CurrentEnvironment','MercuryFilters','MessagingTag','MessengerStateProcessor','MessengerURIConstants','MessengerView','URI','WWWBase'],(function a(b,c,d,e,f,g){'use strict';var h='/?$',i=function m(n,o){n.setPath(c('CurrentEnvironment').facebookdotcom?c('MessengerURIConstants').FACEBOOK_PREFIX+o:o);},j=function m(n,o){var p=n.getPath();if(c('CurrentEnvironment').facebookdotcom&&!p.startsWith(c('MessengerURIConstants').FACEBOOK_PREFIX))o=c('MessengerURIConstants').FACEBOOK_PREFIX+o;n.setPath(n.getPath()+o);},k={serialize:function m(n){var o=new (c('URI'))(c('WWWBase').uri);n=c('MessengerStateProcessor').preprocess(n);switch(n.masterView){case c('MessengerView').MASTER.GROUPS:i(o,c('MessengerURIConstants').GROUPS_PATH);break;case c('MessengerView').MASTER.PEOPLE:i(o,c('MessengerURIConstants').PEOPLE_PATH);break;case c('MessengerView').MASTER.SUPPORT:i(o,c('MessengerURIConstants').SUPPORT_PATH);break;}switch(n.folder){case c('MessagingTag').OTHER:i(o,c('MessengerURIConstants').FILTERED_REQUESTS_PATH);break;case c('MessagingTag').ACTION_ARCHIVED:i(o,c('MessengerURIConstants').ARCHIVED_PATH);break;case c('MessagingTag').PENDING:i(o,c('MessengerURIConstants').MESSAGE_REQUESTS_PATH);break;}if(n.detailView===c('MessengerView').DETAIL.COMPOSE){j(o,c('MessengerURIConstants').COMPOSE_SUBPATH);}else if(n.threadKey){j(o,c('MessengerURIConstants').THREAD_PREFIX+n.threadKey);}else j(o,'');if(n.extraQueryParms)o.addQueryData(n.extraQueryParams);if(c('MercuryFilters').isSupportedFilter(n.filter))o.addQueryData({filter:n.filter});if(n.query!=null){var p;o.addQueryData((p={},p[n.masterView===c('MessengerView').MASTER.SEARCH?'qa':'q']=n.query,p));}if(n.mid)o.addQueryData({mid:n.mid});return o;},deserialize:function m(n){var o={},p=n.getPath();if(c('CurrentEnvironment').facebookdotcom&&!p.startsWith(c('MessengerURIConstants').FACEBOOK_PREFIX))o.notMessenger=true;var q=p.replace(c('MessengerURIConstants').FACEBOOK_PREFIX,''),r=n.getQueryData(),s=r.filter,t=r.mid,u=r.q,v=r.qa,w=babelHelpers.objectWithoutProperties(r,['filter','mid','q','qa']);if(q.match('^'+c('MessengerURIConstants').GROUPS_PATH)){o.masterView=c('MessengerView').MASTER.GROUPS;}else if(q.match('^'+c('MessengerURIConstants').PEOPLE_PATH)){o.masterView=c('MessengerView').MASTER.PEOPLE;}else if(q.match('^'+c('MessengerURIConstants').SUPPORT_PATH)){o.masterView=c('MessengerView').MASTER.SUPPORT;}else if(v){o.masterView=c('MessengerView').MASTER.SEARCH;}else o.masterView=c('MessengerView').MASTER.RECENT;if(q.match('^'+c('MessengerURIConstants').FILTERED_REQUESTS_PATH)){o.folder=c('MessagingTag').OTHER;}else if(q.match('^'+c('MessengerURIConstants').ARCHIVED_PATH)){o.folder=c('MessagingTag').ACTION_ARCHIVED;}else if(q.match('^'+c('MessengerURIConstants').MESSAGE_REQUESTS_PATH)){o.folder=c('MessagingTag').PENDING;}else o.folder=c('MessagingTag').INBOX;if(q.match(c('MessengerURIConstants').COMPOSE_SUBPATH+h)){o.detailView=c('MessengerView').DETAIL.COMPOSE;}else{var x=l(q);if(x){o.threadKey=x;o.detailView=c('MessengerView').DETAIL.THREAD;}}if(c('MercuryFilters').isSupportedFilter(s)){o.filter=s;}else o.filter=c('MercuryFilters').ALL;o.mid=t;o.query=v||u;o.extraQueryParams=w;if(o.masterView===c('MessengerView').MASTER.SUPPORT)return c('MessengerStateProcessor').supportInboxPostprocess(o);return c('MessengerStateProcessor').postprocess(o);}};function l(m){var n=m.match(c('MessengerURIConstants').THREAD_PREFIX+'([^/]+)'+h);return n&&decodeURIComponent(n[1]);}f.exports=k;}),null);
__d('convertMIGColorToFIGColor',['cssVar'],(function a(b,c,d,e,f,g,h){'use strict';var i={'#0077e5':"#4080ff",'#44bec7':"#54C7EC",'#ffc300':'#f5c33b','#fa3c4c':"#F35369",'#d696bb':'#d696bb','#6699cc':"#7596c8",'#13cf13':"#42b72a",'#ff7e29':"#F7923B",'#e68585':'#e68585','#7646ff':"#8C72CB",'#20cef5':"#54C7EC",'#67b868':"#A3CE71",'#d4a88c':'#cfa588','#ff5ca1':"#EC7EBD",'#a695c7':"#AF9CDA"};function j(k){return k&&i[k]||k||'';}f.exports=j;}),null);
__d('messengerDialogReact',['utilsRe','reasonReact','bs_js_null_undefined','MessengerDialog.react','MessengerDialogTitle.react','MessengerDialogButton.react','MessengerDialogFooter.react','MessengerDialogHeader.react','MessengerDialogCancelButton.react'],(function a(b,c,d,e,f,g){'use strict';function h(w){if(w){switch(w[0]){case 0:return ["cancel"];case 1:return ["button"];case 2:return ["confirm"];}}else return 0;}function i(w){if(w){if(w[0]!==0){return ["secondary"];}else return ["primary"];}else return 0;}function j(w,x,y,z,aa,ba,ca,da){return c('reasonReact').wrapJsForReason(c('MessengerDialog.react'),{className:c('bs_js_null_undefined').from_opt(w),onToggle:x,repositionOnUpdate:c('utilsRe').optionBoolToNullUndefinedBoolean(y),shown:c('utilsRe').optionBoolToNullUndefinedBoolean(z),titleID:c('bs_js_null_undefined').from_opt(aa),type:c('bs_js_null_undefined').from_opt(ba),width:c('bs_js_null_undefined').from_opt(ca)},da);}var k=[j];function l(w,x,y){return c('reasonReact').wrapJsForReason(c('MessengerDialogHeader.react'),{className:c('bs_js_null_undefined').from_opt(w),id:c('bs_js_null_undefined').from_opt(x)},y);}var m=[l];function n(w,x){return c('reasonReact').wrapJsForReason(c('MessengerDialogTitle.react'),{className:c('bs_js_null_undefined').from_opt(w)},x);}var o=[n];function p(w,x,y){return c('reasonReact').wrapJsForReason(c('MessengerDialogFooter.react'),{className:c('bs_js_null_undefined').from_opt(w),leftContent:c('bs_js_null_undefined').from_opt(x)},y);}var q=[p];function r(w,x){return c('reasonReact').wrapJsForReason(c('MessengerDialogCancelButton.react'),{onClick:c('bs_js_null_undefined').from_opt(w)},x);}var s=[r];function t(w,x,y,z,aa,ba,ca,da,ea){return c('reasonReact').wrapJsForReason(c('MessengerDialogButton.react'),{action:c('bs_js_null_undefined').from_opt(h(w)),label:c('bs_js_null_undefined').from_opt(x),disabled:c('utilsRe').optionBoolToNullUndefinedBoolean(y),use:c('bs_js_null_undefined').from_opt(z),onClick:c('bs_js_null_undefined').from_opt(aa),type:c('bs_js_null_undefined').from_opt(i(ba)),className:c('bs_js_null_undefined').from_opt(ca),leftContent:c('bs_js_null_undefined').from_opt(da)},ea);}var u=[t],v=0;g.stringOfButtonAction=h;g.stringOfButtonType=i;g.Dialog=k;g.Header=m;g.Title=o;g.Footer=q;g.CancelButton=s;g.Button=u;g.Body=v;}),null);
__d('ReactInstanceMap',['ReactDOM-fb'],(function a(b,c,d,e,f,g){'use strict';var h=c('ReactDOM-fb').__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;f.exports=h.ReactInstanceMap;}),null);
__d('ReactLayeredComponentMixin_DEPRECATED',['ExecutionEnvironment','React','ReactCurrentOwner','ReactDOM','ReactFragment','ReactInstanceMap','renderSubtreeIntoContainer'],(function a(b,c,d,e,f,g){'use strict';var h={componentWillMount:function i(){if(c('ExecutionEnvironment').canUseDOM)this._layersContainer=document.createElement('div');},componentDidMount:function i(){this._renderLayersIntoContainer();},componentDidUpdate:function i(){this._renderLayersIntoContainer();},componentWillUnmount:function i(){c('ReactDOM').unmountComponentAtNode(this._layersContainer);},_renderLayersIntoContainer:function i(){c('ReactCurrentOwner').current=c('ReactInstanceMap').get(this);var j;try{j=this.renderLayers();}finally{c('ReactCurrentOwner').current=null;}if(j&&!Array.isArray(j)&&!c('React').isValidElement(j))j=c('ReactFragment').create(j);c('renderSubtreeIntoContainer')(this,c('React').createElement('div',null,j),this._layersContainer);}};f.exports=h;}),null);