if (self.CavalryLogger) { CavalryLogger.start_js(["Fx9zi"]); }

__d('EventReminderConstants',[],(function a(b,c,d,e,f,g){'use strict';var h={GOING:'GOING',DECLINED:'DECLINED',INVITED:'INVITED'},i={NO_ERROR:'NO_ERROR',PAST_TIME:'PAST_TIME',AFTER_ONE_YEAR:'AFTER_ONE_YEAR'};f.exports={GuestStates:h,TimeErrorType:i};}),null);
__d('MercuryThreadInfo',['CurrentUser','MercuryIDs','MessengerThreadCannotReplyReason'],(function a(b,c,d,e,f,g){'use strict';var h={canReply:function j(k){return !!(k.is_subscribed&&(k.can_reply===undefined||k.can_reply)&&!k.has_email_participant&&!k.read_only);},getMuteSetting:function j(k){return !k.mute_until?undefined:k.mute_until;},isEmptyLocalThread:function j(k){return c('MercuryIDs').tokenize(k.thread_id).type==='root'&&!k.timestamp;},isMuted:function j(k){return h.getMuteSetting(k)!==undefined;},areMentionsMuted:function j(k){return k.mentions_mute_mode===1;},areReactionsMuted:function j(k){return k.reactions_mute_mode===1;},isNewEmptyLocalThread:function j(k){return !!(h.isEmptyLocalThread(k)&&k.participants&&k.participants.length===0);},showComposer:function j(k){return !!(k.is_subscribed&&(k.can_reply||!k.cannot_reply_reason||k.cannot_reply_reason===c('MessengerThreadCannotReplyReason').BLOCKED)&&!k.has_email_participant&&!k.read_only);},isColdOpen:function j(k){return !!(k.is_canonical_user&&(k.message_count===0||!k.timestamp));}};function i(j){return j+'@facebook.com';}f.exports=h;}),null);
__d('MercuryDisplayTimeFilterMessageRenderer',['fbt'],(function a(b,c,d,e,f,g,h){'use strict';var i={renderFilteredContent:function j(k){if(k.is_filtered_content_bh)return h._("This message was removed because it contains blocked or harmful links.");if(k.is_filtered_content_account)return h._("This message has been temporarily removed because the sender's account requires verification.");if(k.is_filtered_content_quasar)return h._("This message was removed because it contains blocked or harmful content.");if(k.is_filtered_content_invalid_app)return h._("This message was removed because the app it's being sent from is blocked from sending messages.");return h._("This message has been temporarily removed because the sender's account requires verification, or it was identified as abusive.");}};f.exports=i;}),null);
__d('MercuryGiftSnippetRenderer',['fbt'],(function a(b,c,d,e,f,g,h){'use strict';var i={renderText:function j(k,l){return k?h._("You sent a valentine."):h._("{name} sent a valentine.",[h.param('name',l)]);}};f.exports=i;}),null);
__d('MercuryLocalIDs',['PresenceUtil','randomInt'],(function a(b,c,d,e,f,g){'use strict';var h={generateMessageID:function j(k){var l=k||Date.now(),m=c('randomInt')(0,4294967295),n=c('PresenceUtil').getSessionID();return '<'+l+':'+m+'-'+n+'@mail.projektitan.com>';},generateThreadID:function j(k){return 'root:'+h.generateOfflineThreadingID(k);},generateOfflineThreadingID:function j(k){var l=k||Date.now(),m=c('randomInt')(0,4294967295),n=('0000000000000000000000'+m.toString(2)).slice(-22),o=l.toString(2)+n;return i(o.slice(-63));}};function i(j){var k='';while(j!='0'){var l=0,m='';for(var n=0;n<j.length;n++){l=2*l+parseInt(j[n],10);if(l>=10){m+='1';l-=10;}else m+='0';}k=l.toString()+k;j=m.slice(m.indexOf('1'));}return k;}f.exports=h;}),null);
__d('MercurySyncDeltaTypes',[],(function a(b,c,d,e,f,g){'use strict';var h={AdminAddedToGroupThread:'AdminAddedToGroupThread',AdminRemovedFromGroupThread:'AdminRemovedFromGroupThread',AdminTextMessage:'AdminTextMessage',DeliveryReceipt:'DeliveryReceipt',ForcedFetch:'ForcedFetch',MarkRead:'MarkRead',MarkUnread:'MarkUnread',MarkFolderSeen:'MarkFolderSeen',MessageDelete:'MessageDelete',NewMessage:'NewMessage',PagesManagerEvent:'PagesManagerEvent',ParticipantLeftGroupThread:'ParticipantLeftGroupThread',ParticipantsAddedToGroupThread:'ParticipantsAddedToGroupThread',ReadReceipt:'ReadReceipt',ReplaceMessage:'ReplaceMessage',RTCEventLog:'RTCEventLog',ThreadAction:'ThreadAction',ThreadDelete:'ThreadDelete',ThreadMuteSettings:'ThreadMuteSettings',ThreadName:'ThreadName',JoinableMode:'JoinableMode',ApprovalMode:'ApprovalMode',ApprovalQueue:'ApprovalQueue',ClientPayload:'ClientPayload',GenieMessage:'GenieMessage',MontageMessage:'MontageMessage',RtcCallData:'RtcCallData'};f.exports=h;}),null);
__d('MercurySyncFakeDFFSender',['Arbiter','ChannelConstants','MercurySingletonProvider','MercurySyncDeltaTypes'],(function a(b,c,d,e,f,g){'use strict';var h=c('ChannelConstants').getArbiterType(c('ChannelConstants').FAKE_DFF);i.getForFBID=function(k){return j.getForFBID(k);};i.get=function(){return j.get();};function i(k){this.$MercurySyncFakeDFFSender1=k;}i.prototype.sendGlobalDFF=function(){c('Arbiter').inform(h,{obj:{delta:{'class':c('MercurySyncDeltaTypes').ForcedFetch},queue:this.$MercurySyncFakeDFFSender1}});};i.prototype.sendThreadDFF=function(k,l){c('Arbiter').inform(h,{obj:{delta:{'class':c('MercurySyncDeltaTypes').ForcedFetch,threadKey:{otherUserFbId:k,threadFbId:l}},queue:this.$MercurySyncFakeDFFSender1}});};var j=new (c('MercurySingletonProvider'))(i);f.exports=i;}),null);
__d('MessagingGiftWrapConstants',[],(function a(b,c,d,e,f,g){'use strict';var h='gift_wrap',i='gift_unwrapped',j='valentines2016';f.exports={TAG_PREFIX:h,UNWRAPPED_TAG:i,VALENTINES_GIFT:j};}),null);
__d('MessagingGiftWrapChecker',['MercuryConfig','MercuryTagHelper','MessagingGiftWrapConstants'],(function a(b,c,d,e,f,g){'use strict';var h={shouldRenderWithGiftWrap:function k(l){return !!(c('MercuryConfig').GiftWrapViewerGK&&l.tags&&i(l.tags)&&!j(l.tags));}};function i(k){return c('MercuryTagHelper').get(k,c('MessagingGiftWrapConstants').TAG_PREFIX)===c('MessagingGiftWrapConstants').VALENTINES_GIFT;}function j(k){return !!c('MercuryTagHelper').get(k,c('MessagingGiftWrapConstants').UNWRAPPED_TAG);}f.exports=h;}),null);
__d('MercuryThreads',['invariant','ChatReliabilityInstrumentation','EventEmitter','EventReminderConstants','MercuryDisplayTimeFilterMessageRenderer','ImmutableObject','KeyedCallbackManager','LogHistory','Map','MercuryActionType','MercuryAssert','MercuryAttachment','MercuryDispatcher','MercuryGiftSnippetRenderer','MercuryGlobalActionType','MercuryIDs','MercuryLocalIDs','MercuryLoggingHelper','MercuryLogMessageType','MercuryParticipants','MercuryPayloadSource','MercuryServerRequests','MercurySingletonProvider','MercurySyncFakeDFFSender','MercuryThreadInfo','MercuryThreadInformer','MessagingGenericAdminTextType','MessagingGiftWrapChecker','MessagingTag','Set','emptyFunction','ifRequired','requireWeak','setImmediate'],(function a(b,c,d,e,f,g,h){'use strict';var i=c('EventReminderConstants').GuestStates,j=new (c('EventEmitter'))(),k=c('LogHistory').getInstance('mercury_threads');function l(n){this.$MercuryThreads1=n;this.$MercuryThreads2=c('MercuryServerRequests').getForFBID(this.$MercuryThreads1);this.$MercuryThreads3=c('MercuryThreadInformer').getForFBID(this.$MercuryThreads1);this.$MercuryThreads4=c('MercuryIDs').getParticipantIDFromUserID(this.$MercuryThreads1);this.$MercuryThreads5=c('MercuryDispatcher').getForFBID(this.$MercuryThreads1);this.$MercuryThreads6=c('MercurySyncFakeDFFSender').getForFBID(this.$MercuryThreads1);this.$MercuryThreads7=false;this.$MercuryThreads8=new (c('KeyedCallbackManager'))();this.$MercuryThreads9=new (c('Set'))();this.$MercuryThreads10=false;this.$MercuryThreads11=new (c('Set'))();this.$MercuryThreads12=new (c('Set'))();this.$MercuryThreads13();}l.getForFBID=function(n){return m.getForFBID(n);};l.get=function(){return m.get();};l.prototype.getThreadMetaNow=function(n){c('MercuryAssert').isThreadID(n);var o=this.$MercuryThreads8.getResource(n);if(o&&!o.participants){c('ChatReliabilityInstrumentation').logERROR('participants are null!',{thread_id:n});this.$MercuryThreads6.sendThreadDFF(null,n);return new (c('ImmutableObject'))(babelHelpers['extends']({},o,{participants:[]}));}return o;};l.prototype.getOrFetch=function(n){var o=this.getThreadMetaNow(n);if(!o&&!this.$MercuryThreads12.has(n))this.$MercuryThreads11.add(n);if(this.$MercuryThreads11.size>0&&!this.$MercuryThreads10)this.$MercuryThreads14();return o;};l.prototype.$MercuryThreads14=function(){if(this.$MercuryThreads10)return;this.$MercuryThreads10=true;c('setImmediate')(function(){this.$MercuryThreads10=false;this.$MercuryThreads11.forEach(function(n){return this.$MercuryThreads12.add(n);}.bind(this));this.getMultiThreadMeta(Array.from(this.$MercuryThreads11),function(n){for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&this.$MercuryThreads12['delete'](o);}.bind(this));this.$MercuryThreads11.clear();}.bind(this));};l.prototype.getThreadMeta=function(n,o,p){return this.getMultiThreadMeta([n],function(q){return o(q[n]);},p);};l.prototype.getMultiThreadMeta=function(n,o,p){c('MercuryAssert').allThreadID(n);var q=this.$MercuryThreads8.executeOrEnqueue(n,o),r=this.$MercuryThreads8.getUnavailableResources(q);if(r.length){var s=[];for(var t=0;t<r.length;t++){var u=r[t],v=c('MercuryIDs').tokenize(u),w=v.type,x=v.value;if(w=='user'){var y=c('MercuryIDs').getParticipantIDFromUserID(x);this.createNewLocalThread(u,y===this.$MercuryThreads4?[this.$MercuryThreads4]:[this.$MercuryThreads4,y]);}s.push(u);}if(s.length)this.$MercuryThreads2.fetchThreadData(s,p);}return q;};l.addListener=function(n,o){return j.addListener(n,o);};l.prototype.unsubscribe=function(n){this.$MercuryThreads8.unsubscribe(n);};l.prototype.getCanonicalThreadToParticipant=function(n,o,p,q){var r=c('MercuryIDs').getThreadIDFromParticipantID(n);!!r||h(0);var s=this.$MercuryThreads8.getResource(r);if(s==undefined){s=this.createNewLocalThread(r,this.$MercuryThreads4===n?[this.$MercuryThreads4]:[this.$MercuryThreads4,n],o);!q&&this.$MercuryThreads2.fetchThreadData([r],p);}return s;};l.prototype.createNewLocalThread=function(n,o,p){var q=this.$MercuryThreads8.getResource(n);if(!q){var r=c('MercuryIDs').tokenize(n),s=r.type,t=r.value;q=new (c('ImmutableObject'))({thread_id:n,participants:Array.from(o),admin_ids:[],name:'',snippet:'',snippet_sender:null,unread_count:p?p:0,message_count:0,image_src:null,timestamp:null,other_user_fbid:s==='user'?t:null,is_canonical_user:s=='user',is_canonical:this.$MercuryThreads15(o),is_subscribed:true,folder:c('MessagingTag').INBOX,is_archived:false});this.$MercuryThreads8.setResource(n,q);}return q;};l.prototype.createNewLocalThreadGenerateID=function(){var n=c('MercuryLocalIDs').generateThreadID();this.createNewLocalThread(n,[]);return n;};l.prototype.isEmptyLocalThread=function(n){var o=this.$MercuryThreads8.getResource(n);if(!o)return false;return c('MercuryThreadInfo').isEmptyLocalThread(o);};l.prototype.isNewEmptyLocalThread=function(n){var o=this.$MercuryThreads8.getResource(n);if(!o)return false;return c('MercuryThreadInfo').isNewEmptyLocalThread(o);};l.prototype.$MercuryThreads16=function(n,o){if(!n||!n.length)return;var p=new (c('Map'))(),q=new (c('Map'))(),r=new (c('Map'))(),s=[];for(var t=0;t<n.length;t++){var u=n[t],v=u.action_type;if(v==c('MercuryActionType').LOG_MESSAGE&&u.log_message_type==c('MercuryLogMessageType').SERVER_ERROR)continue;var w=!o&&!!(u.thread_fbid||u.other_user_fbid||u.is_from_iris),x=u.thread_id;c('MercuryAssert').isThreadID(x);var y=this.$MercuryThreads8.getResource(x);if(!y&&!w&&v===c('MercuryActionType').USER_GENERATED_MESSAGE){y=this.$MercuryThreads17(u);if(!y.participants||!y.participants.length){k.debug('missing_local_participants',JSON.stringify(c('MercuryLoggingHelper').obfuscateMessage(u)));c('ChatReliabilityInstrumentation').logERROR('missing_local_participants',{thread_id:x});y=new (c('ImmutableObject'))(babelHelpers['extends']({},y,{participants:[]}));var z=u.other_user_fbid,aa=u.thread_fbid;if(z||aa){this.$MercuryThreads6.sendThreadDFF(z,aa);}else continue;}this.$MercuryThreads8.setResource(x,y);}if(!y)continue;if(v==c('MercuryActionType').LOG_MESSAGE||v==c('MercuryActionType').USER_GENERATED_MESSAGE)w=!o;if(y.server_timestamp&&u.timestamp<y.server_timestamp&&w)continue;if(!r.has(x)){r.set(x,babelHelpers['extends']({},y));}else k.error('skipping thread metadata update',JSON.stringify({have:r.get(x),skipped:y}));var ba=r.get(x);!!ba||h(0);this.$MercuryThreads18(ba,u,o);var ca=p.get(x);if(v==c('MercuryActionType').USER_GENERATED_MESSAGE&&(!ca||u.timestamp>ca.timestamp))p.set(x,u);if((v==c('MercuryActionType').USER_GENERATED_MESSAGE||v==c('MercuryActionType').LOG_MESSAGE)&&!u.skip_bump_thread)if(u&&u.timestamp&&(!q.has(x)||u.timestamp>q.get(x).timestamp))q.set(x,u);}r.forEach(function(da,ea){var fa=q.get(ea),ga=p.get(ea);if(ga){this.$MercuryThreads19(da,ga);}else if(fa&&fa.log_message_body){var ha=babelHelpers['extends']({},fa,{body:fa.log_message_body});this.$MercuryThreads19(da,ha);}var ia=da.timestamp;if(fa){if(fa.timestamp>ia)Object.assign(da,{timestamp:fa.timestamp});var ja=da.server_timestamp;if(!o&&fa.timestamp>ja)da.server_timestamp=fa.timestamp;}var ka=new (c('ImmutableObject'))(da);if(!ka.participants||!ka.participants.length){var la=(n||[]).map(c('MercuryLoggingHelper').obfuscateMessage),ma={update:c('MercuryLoggingHelper').obfuscateThread(ka),actions:la};k.error('bad metadata update no_participants',JSON.stringify(ma));c('ChatReliabilityInstrumentation').logERROR('refusing to set thread metadata with no participants',ma);return;}this.$MercuryThreads8.setResource(ea,ka);s.push(c('MercuryLoggingHelper').obfuscateThread(ka));}.bind(this),this);s.length&&this.$MercuryThreads7&&k.debug('threads_updated',JSON.stringify({threads:s}));};l.prototype.$MercuryThreads18=function(n,o,p){var q=o.action_type;if(q==c('MercuryActionType').USER_GENERATED_MESSAGE||q==c('MercuryActionType').LOG_MESSAGE){if(o.is_unread||o.skip_bump_thread)if(!(n.unread_count===0&&o.skip_bump_thread))n.unread_count++;n.message_count++;n.is_archived=false;}switch(q){case c('MercuryActionType').DELETE_THREAD:n.message_count=0;this.$MercuryThreads20(o.thread_id);break;case c('MercuryActionType').USER_GENERATED_MESSAGE:if(n.unread_count===0&&o.author===this.$MercuryThreads4&&o.timestamp>=n.last_read_timestamp)n.last_read_timestamp=o.timestamp;if(o.offline_threading_id!==o.message_id)n.last_message_timestamp=o.timestamp;this.$MercuryThreads21(n,o.author);break;case c('MercuryActionType').SEND_MESSAGE:var r=o.log_message_type;if(r==c('MercuryLogMessageType').THREAD_IMAGE){n.image_src=o.log_message_data.image?o.log_message_data.image.preview_url:null;this.$MercuryThreads22(o.thread_id);}if(r!==c('MercuryLogMessageType').SUBSCRIBE&&r!==c('MercuryLogMessageType').UNSUBSCRIBE)n.snippet_attachments=o.attachments;break;case c('MercuryActionType').LOG_MESSAGE:var r=o.log_message_type;if(r==c('MercuryLogMessageType').SUBSCRIBE&&!p){this.$MercuryThreads23(n,o.log_message_data.added_participants);this.$MercuryThreads22(o.thread_id);}else if(r==c('MercuryLogMessageType').UNSUBSCRIBE&&!p){this.$MercuryThreads24(n,o.log_message_data.removed_participants);this.$MercuryThreads22(o.thread_id);}else if(r==c('MercuryLogMessageType').THREAD_IMAGE){if(!p)n.image_src=o.log_message_data.image?o.log_message_data.image.preview_url:null;}else if(r==c('MercuryLogMessageType').THREAD_NAME){if(n.name!==o.log_message_data.name)this.$MercuryThreads22(o.thread_id);n.name=o.log_message_data.name;}else if(r===c('MercuryLogMessageType').GENERIC_ADMIN_TEXT)this.$MercuryThreads25(n,o);break;case c('MercuryActionType').CHANGE_READ_STATUS:var s=this.$MercuryThreads26(n,o,o.mark_as_read);if(s)n.last_read_timestamp=n.last_message_timestamp;var t=!n.read_only&&n.folder===c('MessagingTag').INBOX;if(s&&p)this.$MercuryThreads2.changeThreadReadStatus(n.thread_id,o.mark_as_read,o.source,n.last_read_timestamp,t,n.last_message_type);break;case c('MercuryActionType').CHANGE_ARCHIVED_STATUS:if(n.is_archived!=o.archived){n.is_archived=o.archived;this.$MercuryThreads22(o.thread_id);}break;case c('MercuryActionType').CHANGE_FOLDER:if(n.folder!=o.new_folder){n.folder=o.new_folder;this.$MercuryThreads22(o.thread_id);}break;case c('MercuryActionType').DELETE_MESSAGES:if(p){n.snippet='...';n.snippet_attachments=null;n.snippet_sender=null;this.$MercuryThreads22(o.thread_id);}else if(o.message_ids){n.message_count-=o.message_ids.length;c('ifRequired')('MercuryMessages',function(v){v=v.getForFBID(this.$MercuryThreads1);for(var w=o.message_ids,x=Array.isArray(w),y=0,w=x?w:w[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var z;if(x){if(y>=w.length)break;z=w[y++];}else{y=w.next();if(y.done)break;z=y.value;}var aa=z,ba=v.getMessagesFromIDs([aa]),ca=ba[0];if(ca&&ca.timestamp>n.last_read_timestamp)n.unread_count=Math.max(0,n.unread_count-1);}this.$MercuryThreads22(o.thread_id);}.bind(this),c('emptyFunction'));}break;case c('MercuryActionType').UPDATE_SNIPPET:c('ifRequired')('MercuryMessages',function(v){v=v.getForFBID(this.$MercuryThreads1);var w=0,x=1,y=v.getThreadMessagesRangeNow(o.thread_id,w,x),z=y[0];if(z){n.snippet=z.body;n.snippet_attachments=z.attachments;n.snippet_sender=z.author;}else{n.snippet='...';n.snippet_attachments=null;n.snippet_sender=null;v.getThreadMessagesRange(o.thread_id,w,x,function(aa){if(aa.length)this.$MercuryThreads5.handleUpdate({from_client:true,actions:[{thread_id:o.thread_id,action_type:c('MercuryActionType').UPDATE_SNIPPET,deleted_ids:o.deleted_ids}]});}.bind(this));}this.$MercuryThreads22(o.thread_id);}.bind(this),c('emptyFunction'));break;case c('MercuryActionType').CHANGE_MUTE_SETTINGS:if(Object.prototype.hasOwnProperty.call(o,'reactions_mute_mode')){n.reactions_mute_mode=o.reactions_mute_mode;}else if(Object.prototype.hasOwnProperty.call(o,'mentions_mute_mode')){n.mentions_mute_mode=o.mentions_mute_mode;}else n.mute_until=!o.mute_until?undefined:o.mute_until;this.$MercuryThreads22(n.thread_id);break;case c('MercuryActionType').ADD_PARTICIPANTS:this.$MercuryThreads23(n,o.participants);this.$MercuryThreads22(n.thread_id);break;case c('MercuryActionType').CHANGE_FLAG:this.$MercuryThreads27(n,o.mark_as_flag);this.$MercuryThreads22(n.thread_id);break;case c('MercuryActionType').MOVE_PENDING_TO_INBOX:this.$MercuryThreads28(n);this.$MercuryThreads22(n.thread_id);break;case c('MercuryActionType').UPDATE_CUSTOM_LIKE:n.custom_like_icon=o.custom_like;this.$MercuryThreads22(n.thread_id);break;case c('MercuryActionType').ADD_GROUP_ADMINS:n.admin_ids=n.admin_ids.concat(o.added_admin_ids.filter(function(v){return n.admin_ids.indexOf(v)===-1;}));this.$MercuryThreads22(o.thread_id);break;case c('MercuryActionType').REMOVE_GROUP_ADMINS:n.admin_ids=n.admin_ids.filter(function(v){return o.removed_admin_ids.indexOf(v)===-1;});this.$MercuryThreads22(o.thread_id);break;case c('MercuryActionType').JOINABLE_MODE:n.joinable_mode=o.joinable_mode;this.$MercuryThreads22(o.thread_id);break;case c('MercuryActionType').APPROVAL_MODE:n.approval_mode=o.approval_mode;this.$MercuryThreads22(o.thread_id);break;case c('MercuryActionType').APPROVAL_QUEUE:if(o.added_id&&n.approval_queue_ids&&n.approval_queue_ids.indexOf(o.added_id)===-1)n.approval_queue_ids=n.approval_queue_ids.concat(o.added_id);if(o.removed_id&&n.approval_queue_ids)n.approval_queue_ids=n.approval_queue_ids.filter(function(v){return o.removed_id!==v;});this.$MercuryThreads22(o.thread_id);break;case c('MercuryActionType').IS_PIN_PROTECTED:n.is_pin_protected=o.is_pin_protected;this.$MercuryThreads22(o.thread_id);break;case c('MercuryActionType').UPDATE_RTC_CALL_DATA:var u=o.initiator_fbid||(n.rtc_call_data?n.rtc_call_data.initiator_fbid:undefined);n.rtc_call_data=new (c('ImmutableObject'))({call_state:o.call_state,server_info_data:o.server_info_data,initiator_fbid:u});this.$MercuryThreads22(o.thread_id);break;}};l.prototype.$MercuryThreads25=function(n,o){var p,q=this;if(o.log_message_data&&o.log_message_data.untypedData)(function(){var r=o.log_message_data.untypedData,event=n.lightweight_event;switch(o.log_message_data.message_type){case c('MessagingGenericAdminTextType').THREAD_EPHEMERAL_SEND_MODE:var s=parseInt(r.ttl,10);if(s!==null&&n.ephemeral_ttl_mode!==s){n.ephemeral_ttl_mode=s;q.$MercuryThreads22(o.thread_id);}break;case c('MessagingGenericAdminTextType').CHANGE_THREAD_NICKNAME:var t={};for(var u in n.custom_nickname){if(u==r.participant_id&&r.nickname.trim().length==0)continue;t[u]=n.custom_nickname[u];}if(r.nickname.trim().length>0)t[r.participant_id]=r.nickname;n.custom_nickname=t;q.$MercuryThreads22(o.thread_id);break;case c('MessagingGenericAdminTextType').CHANGE_THREAD_ICON:c('requireWeak')('MercuryThreadActions',function(y){y.getForFBID(this.$MercuryThreads1).updateCustomLike(o.thread_id,r.thread_icon);}.bind(q));break;case c('MessagingGenericAdminTextType').CHANGE_THREAD_THEME:var v=r.theme_color;if(v.length>0){n.custom_color='#'.concat(v.substring(2));}else n.custom_color=null;q.$MercuryThreads22(o.thread_id);break;case c('MessagingGenericAdminTextType').LIGHTWEIGHT_EVENT_CREATE:var w={};w[r.event_creator_id]=i.GOING;n.lightweight_event={track_rsvp:r.event_track_rsvp,title:r.event_title,event_time:parseInt(r.event_time,10),location_name:r.event_location_name,event_members:w,oid:r.event_id};q.$MercuryThreads22(o.thread_id);break;case c('MessagingGenericAdminTextType').LIGHTWEIGHT_EVENT_UPDATE:case c('MessagingGenericAdminTextType').LIGHTWEIGHT_EVENT_UPDATE_TIME:case c('MessagingGenericAdminTextType').LIGHTWEIGHT_EVENT_UPDATE_TITLE:case c('MessagingGenericAdminTextType').LIGHTWEIGHT_EVENT_UPDATE_LOCATION:if(event)n.lightweight_event=q.$MercuryThreads29(r,event,event.event_members);q.$MercuryThreads22(o.thread_id);break;case c('MessagingGenericAdminTextType').LIGHTWEIGHT_EVENT_RSVP:if(event&&event.event_members){var x=q.$MercuryThreads30(event.event_members,r);n.lightweight_event=q.$MercuryThreads29(r,event,x);}q.$MercuryThreads22(o.thread_id);break;case c('MessagingGenericAdminTextType').LIGHTWEIGHT_EVENT_DELETE:case c('MessagingGenericAdminTextType').LIGHTWEIGHT_EVENT_NOTIFY:n.lightweight_event=null;q.$MercuryThreads22(o.thread_id);break;}})();};l.prototype.$MercuryThreads30=function(n,o){var p={};for(var q in n)p[q]=n[q];p[o.guest_id]=o.guest_status;return p;};l.prototype.$MercuryThreads29=function(n,event,o){return {track_rsvp:event.track_rsvp,title:n.event_title===undefined?event.title:n.event_title,event_time:n.event_time===undefined?event.event_time:parseInt(n.event_time,10),location_name:n.event_location_name===undefined?event.location_name:n.event_location_name,event_members:o===undefined?event.event_members:o,oid:event.oid};};l.prototype.$MercuryThreads17=function(n){var o=c('MercuryIDs').tokenize(n.thread_id),p=o.type,q=o.value,r=p==='user',s=r||n.specific_to_list&&this.$MercuryThreads15(n.specific_to_list),t=s||r?this.$MercuryThreads31(n):n.specific_to_list;return new (c('ImmutableObject'))({thread_id:n.thread_id,participants:t,name:null,snippet:n.body,snippet_attachments:[],snippet_sender:n.author,unread_count:0,message_count:0,image_src:null,timestamp:n.timestamp,other_user_fbid:r?q:null,is_canonical_user:r,is_canonical:s,is_subscribed:true,folder:c('MessagingTag').INBOX,is_archived:false});};l.prototype.$MercuryThreads26=function(n,o,p){if(o.timestamp)this.$MercuryThreads32(n.thread_id,p,o.timestamp);if(!n||!n.thread_id||!n.participants)return false;if(!n.timestamp){this.$MercuryThreads9.add(n.thread_id);return false;}var q=!n.unread_count;if(p==q)return false;n.unread_count=p?0:1;this.$MercuryThreads22(n.thread_id);return true;};l.prototype.$MercuryThreads33=function(n){var o=this.$MercuryThreads8.getAllResources();for(var p in o)if(Object.prototype.hasOwnProperty.call(o,p)){var q=o[p];if(q.folder==n){this.$MercuryThreads8.setResource(p,c('ImmutableObject').setProperty(q,'unread_count',0));this.$MercuryThreads22(p);}}};l.prototype.$MercuryThreads23=function(n,o){var p=new (c('Set'))(n.participants);n.participants=Array.from(n.participants||[]);o.forEach(function(q){if(!p.has(q)){n.participants.push(q);if(q===this.$MercuryThreads4){n.is_subscribed=true;n.can_reply=true;n.cannot_reply_reason=null;this.$MercuryThreads6.sendThreadDFF(undefined,n.thread_fbid);}}}.bind(this));};l.prototype.$MercuryThreads24=function(n,o){var p=new (c('Set'))(o);if(n&&!n.participants){c('ChatReliabilityInstrumentation').logERROR('participants are null in thread_info!',{thread_info:n});}else n.participants=n.participants.filter(function(q){return !p.has(q);});if(n&&!n.admin_ids){c('ChatReliabilityInstrumentation').logERROR('admin_ids are null in thread_info!',{thread_info:n});}else n.admin_ids=n.admin_ids.filter(function(q){return !p.has(q);});if(p.has(this.$MercuryThreads4))n.is_subscribed=false;this.$MercuryThreads2.fetchThreadData([n.thread_id]);};l.prototype.$MercuryThreads21=function(n,o){if(!n.participants){var p=JSON.stringify({thread_info:n,participant:o});k.error('missing_participants',p);return;}var q=n.participants.indexOf(o);if(q>0)n.participants=[o].concat(n.participants.slice(0,q),n.participants.slice(q+1));};l.prototype.$MercuryThreads19=function(n,o){var p=o.body,q=o.subject,r='';if(q){q=q.toLowerCase();if(p.slice(0,q.length).toLowerCase()==q){r=p;}else if(p){r=q+' \u00B7 '+p;}else r=q;}else r=p;if(o.is_filtered_content)r=c('MercuryDisplayTimeFilterMessageRenderer').renderFilteredContent(o);if(c('MessagingGiftWrapChecker').shouldRenderWithGiftWrap(o)){var s=o.author,t=s==this.$MercuryThreads4,u=null;if(!t){u=n.custom_nickname&&n.custom_nickname[c('MercuryIDs').getUserIDFromParticipantID(s)];if(!u){var v=c('MercuryParticipants').getNow(s);if(v!=null)u=v.short_name;}}r=c('MercuryGiftSnippetRenderer').renderText(t,u);}n.snippet=r;if(o.raw_attachments&&o.raw_attachments.length>0){var w=c('MercuryAttachment').convertRaw(o.raw_attachments);n.snippet_attachments=w;}else n.snippet_attachments=o.attachments;if(o.log_message_type){n.snippet_sender=null;}else n.snippet_sender=o.author;};l.prototype.$MercuryThreads27=function(n,o){n.page_thread_info=babelHelpers['extends']({},n.page_thread_info,{flagged:o});};l.prototype.$MercuryThreads28=function(n){if(n.folder!==c('MessagingTag').PENDING)return;n.folder=c('MessagingTag').INBOX;};l.prototype.$MercuryThreads15=function(n){return n.filter(function(o){return o!=this.$MercuryThreads4;}.bind(this)).length<=1;};l.prototype.$MercuryThreads13=function(){this.$MercuryThreads5.subscribe('invalidate-thread-state',function(n,o){return this.$MercuryThreads34(o);}.bind(this));this.$MercuryThreads5.subscribe('invalidate-global-state',function(n,o){return this.$MercuryThreads35();}.bind(this));this.$MercuryThreads5.subscribe('update-threads',function(n,o){var p=(o.actions||[]).filter(function(q){return q.thread_id;});if(o.threads&&o.payload_source==c('MercuryPayloadSource').SERVER_FETCH_THREAD_INFO)o.threads.forEach(function(q){var r=q.thread_id;if(this.$MercuryThreads9.has(r)){this.$MercuryThreads9['delete'](r);if(q.unread_count)this.$MercuryThreads2.changeThreadReadStatus(q.thread_id,true);}}.bind(this));this.$MercuryThreads36(o.threads);this.$MercuryThreads16(p,o.from_client);o.threads&&o.threads.forEach(function(q){this.$MercuryThreads22(q.thread_id);}.bind(this));if(o.global_actions)o.global_actions.forEach(function(q){if(q.action_type==c('MercuryGlobalActionType').MARK_ALL_READ)this.$MercuryThreads33(q.folder);}.bind(this));if(this.$MercuryThreads7){this.$MercuryThreads7=false;j.emit('change');}}.bind(this));};l.prototype.$MercuryThreads36=function(n){if(!n||!n.length)return;var o={},p=[];n.forEach(function(q){var r=new (c('ImmutableObject'))(q);o[q.thread_id]=r;p.push(c('MercuryLoggingHelper').obfuscateThread(r));});p.length&&k.debug('threads_added',JSON.stringify({threads:p}));this.$MercuryThreads8.addResourcesAndExecute(o);};l.prototype.$MercuryThreads22=function(n){this.$MercuryThreads7=true;this.$MercuryThreads3.updatedThread(n);};l.prototype.$MercuryThreads20=function(n){this.$MercuryThreads7=true;this.$MercuryThreads3.deletedThread(n);};l.prototype.$MercuryThreads32=function(n,o,p){this.$MercuryThreads7=true;this.$MercuryThreads3.changedThreadReadState(n,o,p);};l.prototype.$MercuryThreads34=function(n){this.$MercuryThreads8.setResource(n,undefined);};l.prototype.$MercuryThreads35=function(){this.$MercuryThreads7=false;this.$MercuryThreads8=new (c('KeyedCallbackManager'))();this.$MercuryThreads9=new (c('Set'))();this.$MercuryThreads10=false;this.$MercuryThreads11=new (c('Set'))();this.$MercuryThreads12=new (c('Set'))();};l.prototype.$MercuryThreads31=function(n){if(n.specific_to_list)return n.specific_to_list;var o=c('MercuryIDs').tokenize(n.thread_id),p=o.type,q=o.value;if(!q||p!=='user')return [this.$MercuryThreads4];return [c('MercuryIDs').getParticipantIDFromUserID(q),this.$MercuryThreads4];};var m=new (c('MercurySingletonProvider'))(l);f.exports=l;}),null);
__d('MercuryFilters',['MessagingTag','arrayContains'],(function a(b,c,d,e,f,g){var h=[c('MessagingTag').UNREAD],i={ALL:'all',UNREAD:c('MessagingTag').UNREAD,getSupportedFilters:function j(){return h.concat();},isSupportedFilter:function j(k){return c('arrayContains')(h,k);}};f.exports=i;}),null);
__d("arrayStableSort",[],(function a(b,c,d,e,f,g){function h(i,j){return i.map(function(k,l){return {data:k,index:l};}).sort(function(k,l){return j(k.data,l.data)||k.index-l.index;}).map(function(k){return k.data;});}f.exports=h;}),null);
__d('RangedCallbackManager',['CallbackManagerController','arrayStableSort','createObjectFrom'],(function a(b,c,d,e,f,g){function h(i,j,k){'use strict';this.$RangedCallbackManager1=[];this.$RangedCallbackManager2=false;this.$RangedCallbackManager3=false;this.$RangedCallbackManager4={};this.$RangedCallbackManager5=new (c('CallbackManagerController'))(this.$RangedCallbackManager6.bind(this));this.$RangedCallbackManager7=i;this.$RangedCallbackManager8=j;this.$RangedCallbackManager9=k;}h.prototype.executeOrEnqueue=function(i,j,k,l,m){'use strict';return this.$RangedCallbackManager5.executeOrEnqueue({start:i,limit:j},k,{strict:!!l,skipOnStrictHandler:m});};h.prototype.unsubscribe=function(i){'use strict';this.$RangedCallbackManager5.unsubscribe(i);};h.prototype.getUnavailableResources=function(i){'use strict';var j=this.$RangedCallbackManager5.getRequest(i),k=[];if(j&&!this.$RangedCallbackManager2){var l=j.request,m=this.$RangedCallbackManager10(j.options),n=l.start+l.limit;for(var o=m.length;o<n;o++)k.push(o);}return k;};h.prototype.addResources=function(i){'use strict';i.forEach(function(j){if(!this.$RangedCallbackManager4[j]){this.$RangedCallbackManager4[j]=true;this.$RangedCallbackManager1.push(j);this.$RangedCallbackManager3=null;}}.bind(this));this.resortResources();this.$RangedCallbackManager5.runPossibleCallbacks();};h.prototype.addResourcesWithoutSorting=function(i,j){'use strict';var k=this.$RangedCallbackManager1.slice(0,j);k=k.concat(i);k=k.concat(this.$RangedCallbackManager1.slice(j));this.$RangedCallbackManager1=k;Object.assign(this.$RangedCallbackManager4,c('createObjectFrom')(i,true));this.$RangedCallbackManager3=null;this.$RangedCallbackManager5.runPossibleCallbacks();};h.prototype.removeResources=function(i){'use strict';i.forEach(function(j){if(this.$RangedCallbackManager4[j]){this.$RangedCallbackManager4[j]=false;var k=this.$RangedCallbackManager1.indexOf(j);if(k!=-1)this.$RangedCallbackManager1.splice(k,1);}}.bind(this));};h.prototype.removeAllResources=function(){'use strict';this.$RangedCallbackManager1=[];this.$RangedCallbackManager4={};};h.prototype.resortResources=function(){'use strict';this.$RangedCallbackManager1=c('arrayStableSort')(this.$RangedCallbackManager1,function(i,j){return this.$RangedCallbackManager8(this.$RangedCallbackManager7(i),this.$RangedCallbackManager7(j));}.bind(this));};h.prototype.setReachedEndOfArray=function(){'use strict';if(!this.$RangedCallbackManager2){this.$RangedCallbackManager2=true;this.$RangedCallbackManager3=null;this.$RangedCallbackManager5.runPossibleCallbacks();}};h.prototype.hasReachedEndOfArray=function(){'use strict';return this.$RangedCallbackManager2;};h.prototype.setError=function(i){'use strict';if(this.$RangedCallbackManager3!==i){this.$RangedCallbackManager3=i;this.$RangedCallbackManager5.runPossibleCallbacks();}};h.prototype.getError=function(i,j,k){'use strict';var l=this.$RangedCallbackManager10({strict:k});return i+j>l.length?this.$RangedCallbackManager3:null;};h.prototype.hasResource=function(i){'use strict';return this.$RangedCallbackManager4[i];};h.prototype.getResourceAtIndex=function(i){'use strict';return this.$RangedCallbackManager1[i];};h.prototype.getAllResources=function(){'use strict';return this.$RangedCallbackManager1.concat();};h.prototype.getCurrentArraySize=function(i){'use strict';return this.$RangedCallbackManager10(i).length;};h.prototype.$RangedCallbackManager10=function(i){'use strict';var j=this.$RangedCallbackManager1;if(i&&i.strict){var k=i.skipOnStrictHandler||this.$RangedCallbackManager9;if(k)j=j.filter(k);}return j;};h.prototype.$RangedCallbackManager6=function(i,j){'use strict';var k=this.$RangedCallbackManager10(j);if(!this.$RangedCallbackManager2&&!this.$RangedCallbackManager3&&i.start+i.limit>k.length){return false;}else{var l=k.slice(i.start,i.start+i.limit),m=i.start+i.limit>k.length?this.$RangedCallbackManager3:null;return [l,m];}};h.prototype.getElementsUntil=function(i){'use strict';var j=[];for(var k=0;k<this.$RangedCallbackManager1.length;k++){var l=this.$RangedCallbackManager7(this.$RangedCallbackManager1[k]);if(this.$RangedCallbackManager8(l,i)>0)break;j.push(this.$RangedCallbackManager1[k]);}return j;};f.exports=h;}),null);