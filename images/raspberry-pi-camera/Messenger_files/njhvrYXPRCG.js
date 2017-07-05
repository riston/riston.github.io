if (self.CavalryLogger) { CavalryLogger.start_js(["ofHtW"]); }

__d('FantaTypeFileUploader',['immutable'],(function a(b,c,d,e,f,g){'use strict';var h,i,j={ANIMATED_IMAGE:'animated_image',AUDIO:'audio',FILE:'file',GENERIC_ATTACHMENT:'generic_attachment',IMAGE:'image',VIDEO:'video'},k={uploadedFiles:c('immutable').Map(),uploadingFiles:c('immutable').Map()};h=babelHelpers.inherits(l,c('immutable').Record(k));i=h&&h.prototype;l.prototype.getTypeIDs=function(m){return this.uploadedFiles.reduce(function(n,o){if(o.type===m&&o.uploadedID)n=n.concat(o.uploadedID);return n;},[]);};function l(){h.apply(this,arguments);}l.fileTypes=j;f.exports=l;}),null);
__d('FantaTypeFileUploaderFile',['immutable'],(function a(b,c,d,e,f,g){'use strict';var h,i,j={file:{},id:'',startTime:0,type:null,uploadedID:null};h=babelHelpers.inherits(k,c('immutable').Record(j));i=h&&h.prototype;function k(){h.apply(this,arguments);}f.exports=k;}),null);
__d('MessengerUploadFilesStore',['fbt','Dialog','FantaTypeFileUploaderFile','FantaTypeFileUploader','FileForm','FileFormResetOnSubmit','FormSubmitOnChange','immutable','MercuryConfig','MercuryConstants','MessengerActions','MessengerStore','PhotosUploadID','SubscriptionsHandler'],(function a(b,c,d,e,f,g,h){'use strict';var i,j;i=babelHelpers.inherits(k,c('MessengerStore'));j=i&&i.prototype;function k(){j.constructor.call(this);this.$MessengerUploadFilesStore1=c('immutable').Map({});}k.prototype.getState=function(){return this.$MessengerUploadFilesStore1;};k.prototype.__onDispatch=function(t){var u=void 0,v=void 0,w=t.threadID,x=t.uploadID;switch(t.type){case c('MessengerActions').Types.PREPARE_FILES_FOR_SEND:var y=t.files,z=l(),aa=m(z),ba=n(w,z,aa);o(w,ba,aa);this.$MessengerUploadFilesStore1=p(this.$MessengerUploadFilesStore1,w,ba,y);this.emitChange();break;case c('MessengerActions').Types.UPLOADED_FILE:var ca=void 0,da=void 0,ea=t.payload;u=this.$MessengerUploadFilesStore1.get(w);v=u.get('uploadingFiles').get(x);this.$MessengerUploadFilesStore1=this.$MessengerUploadFilesStore1.deleteIn([w,'uploadingFiles',x]);if(v){var fa=ea.metadata[0];da=c('FantaTypeFileUploader').fileTypes.GENERIC_ATTACHMENT;ca=fa;if(fa.image_id){da=c('FantaTypeFileUploader').fileTypes.IMAGE;ca=fa.image_id;}else if(fa.gif_id){da=c('FantaTypeFileUploader').fileTypes.ANIMATED_IMAGE;ca=fa.gif_id;}else if(fa.video_id){da=c('FantaTypeFileUploader').fileTypes.VIDEO;ca=fa.video_id;}else if(fa.audio_id){da=c('FantaTypeFileUploader').fileTypes.AUDIO;ca=fa.audio_id;}else if(fa.file_id){da=c('FantaTypeFileUploader').fileTypes.FILE;ca=fa.file_id;}this.$MessengerUploadFilesStore1=this.$MessengerUploadFilesStore1.setIn([w,'uploadedFiles',x],v.merge({uploadedID:ca,type:da}));this.emitChange();}break;case c('MessengerActions').Types.CANCEL_FILE_UPLOAD:case c('MessengerActions').Types.UPLOAD_FILE_FAILED:u=this.$MessengerUploadFilesStore1.get(w);v=u.get('uploadingFiles').get(x);if(v){this.$MessengerUploadFilesStore1=this.$MessengerUploadFilesStore1.deleteIn([w,'uploadingFiles',x]);}else{v=u.get('uploadedFiles').get(x);if(v)this.$MessengerUploadFilesStore1=this.$MessengerUploadFilesStore1.deleteIn([w,'uploadedFiles',x]);}this.emitChange();break;case c('MessengerActions').Types.EMPTY_FILES:this.$MessengerUploadFilesStore1=this.$MessengerUploadFilesStore1.withMutations(function(ga){if(ga.get(w))ga.set(w,new (c('FantaTypeFileUploader'))());});this.emitChange();break;}};function l(){var t=document.createElement('form');t.action=c('MercuryConfig').upload_url;t.method='post';return t;}function m(t,u){var v=document.createElement('input');v.type='file';v.name='attachment[]';v.multiple=true;if(u)v.onchange=u;t.appendChild(v);return v;}function n(t,u,v){var w=new (c('FileForm'))(u,[c('FormSubmitOnChange'),c('FileFormResetOnSubmit')]);w.setAllowCrossOrigin(true);w.setUploadInParallel(true);return w;}function o(t,u,v){var w=new (c('SubscriptionsHandler'))();w.addSubscriptions(u.subscribe('success',function(event,x){var y=x.response.getPayload();c('MessengerActions').uploadedFile(t,s(x),y);}),u.subscribe('failure',function(event,x){c('MessengerActions').uploadFileFailed(t,s(x));}));}function p(t,u,v,w){var x={};for(var y=0;y<w.length;y++){var z=w[y];if(z.size>c('MercuryConstants').AttachmentMaxSize){v.abort();v.clear();new (c('Dialog'))().setTitle(h._("The file you have selected is too large")).setBody(h._("The file you have selected is too large. The maximum size is 25MB.")).setButtons(c('Dialog').OK).setSemiModal(true).show();return t;}}for(var aa=0;aa<w.length;aa++){var ba=w[aa],ca=r();t=q(t,u,ca,ba);x[ca]=ba;}v.setFiles(x);v.forceSendViaXHR();return t;}function q(t,u,v,w){return t.withMutations(function(x){if(!x.get(u))x.set(u,new (c('FantaTypeFileUploader'))());var y=x.get(u);x.set(u,y.setIn(['uploadingFiles',v],new (c('FantaTypeFileUploaderFile'))({file:w,id:v,startTime:Date.now()})));});}function r(){return 'upload_'+c('PhotosUploadID').getNewID();}function s(t){var u=t.response.getPayload();if(t.upload){return t.upload.getName();}else return u.uploadID;}f.exports=new k();}),null);