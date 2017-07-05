if (self.CavalryLogger) { CavalryLogger.start_js(["U7rSj"]); }

__d('XUIOverlayFooter.react',['cx','React','joinClasses'],(function a(b,c,d,e,f,g,h){var i,j;i=babelHelpers.inherits(k,c('React').Component);j=i&&i.prototype;k.prototype.render=function(){'use strict';return c('React').createElement('div',babelHelpers['extends']({},this.props,{className:c('joinClasses')(this.props.className,"_5lnf uiOverlayFooter")}),this.props.children);};function k(){'use strict';i.apply(this,arguments);}f.exports=k;}),null);
__d('ChatFlyoutPlaceholder.react',['React','XUISpinner.react'],(function a(b,c,d,e,f,g){'use strict';var h={padding:'30px',textAlign:'center'},i=function j(){return c('React').createElement('div',{style:h},c('React').createElement(c('XUISpinner.react'),{size:'large'}));};f.exports=i;}),null);
__d('MercuryViewer',['CurrentUser','MercuryAssert'],(function a(b,c,d,e,f,g){'use strict';var h='fbid:'+c('CurrentUser').getID(),i={getID:function j(){return h;},isViewer:function j(k){c('MercuryAssert').isParticipantID(k);return k===h;}};f.exports=i;}),null);
__d('ServerTime',['InitialServerTime'],(function a(b,c,d,e,f,g){k(c('InitialServerTime').serverTime);var h;function i(){return Date.now()-h;}function j(){return h;}function k(l){h=Date.now()-l;}f.exports={getMillis:i,getOffsetMillis:j,update:k,get:i,getSkew:j};}),18);
__d('BaseTextWithDecoration.react',['React','ReactFragment'],(function a(b,c,d,e,f,g){'use strict';var h,i;function j(l,m,n,o){var p=l[m];if(!p){o.push(n);return;}p(n,function(q){o.push(q);},function(q){j(l,m+1,q,o);});}h=babelHelpers.inherits(k,c('React').Component);i=h&&h.prototype;k.prototype.render=function(){var l=this.props,m=l.decorators,n=l.text,o=[],p={};j(m,0,n,o);o.forEach(function(q,r){p['i'+r]=q;});return c('React').createElement('span',null,c('ReactFragment').create(p));};function k(){h.apply(this,arguments);}f.exports=k;}),null);
__d('EmojiImageURL',['invariant','EmojiConfig','EmojiStaticConfig'],(function a(b,c,d,e,f,g,h){function i(k,l){k=b.unescape(encodeURIComponent(k));for(var m=0;m<k.length;m++){l=(l<<5)-l+k.charCodeAt(m);l&=4294967295;}return (l&255).toString(16);}function j(k,l,m){l in c('EmojiStaticConfig').supportedSizes||h(0);var n=c('EmojiConfig').pixelRatio+'/'+l+'/'+k+c('EmojiStaticConfig').fileExt,o=i(n,c('EmojiStaticConfig').checksumBase);return c('EmojiConfig').schemaAuth+'/'+m+o+'/'+n;}f.exports={getMessengerURL:function k(l,m){return j(l,m,c('EmojiStaticConfig').types.MESSENGER);},getFBEmojiURL:function k(l){var m=arguments.length<=1||arguments[1]===undefined?16:arguments[1];return j(l,m,c('EmojiStaticConfig').types.FBEMOJI);},getFBEmojiExtendedURL:function k(l){var m=arguments.length<=1||arguments[1]===undefined?16:arguments[1];return j(l,m,c('EmojiStaticConfig').types.FB_EMOJI_EXTENDED);}};}),null);
__d("EmojiRendererData",[],(function a(b,c,d,e,f,g){h.isEmoji=function(i){"use strict";return i===35||i===42||i>=48&&i<=57||i===169||i===174||i===8252||i===8265||i===8482||i===8505||i>=8596&&i<=8601||i>=8617&&i<=8618||i>=8986&&i<=8987||i===9000||i===9167||i>=9193&&i<=9203||i>=9208&&i<=9210||i===9410||i>=9642&&i<=9643||i===9654||i===9664||i>=9723&&i<=9726||i>=9728&&i<=9732||i===9742||i===9745||i>=9748&&i<=9749||i===9752||i===9760||i>=9762&&i<=9763||i===9766||i===9770||i>=9774&&i<=9775||i>=9784&&i<=9786||i===9792||i===9794||i>=9800&&i<=9811||i===9824||i===9827||i>=9829&&i<=9830||i===9832||i===9851||i===9855||i>=9874&&i<=9879||i===9881||i>=9883&&i<=9884||i>=9888&&i<=9889||i>=9898&&i<=9899||i>=9904&&i<=9905||i>=9917&&i<=9918||i>=9924&&i<=9925||i===9928||i>=9934&&i<=9935||i===9937||i>=9939&&i<=9940||i>=9961&&i<=9962||i>=9968&&i<=9973||i>=9975&&i<=9976||i===9978||i===9981||i===9986||i===9989||i>=9992&&i<=9993||i===9999||i===10002||i===10004||i===10006||i===10013||i===10017||i===10024||i>=10035&&i<=10036||i===10052||i===10055||i===10060||i===10062||i>=10067&&i<=10069||i===10071||i>=10083&&i<=10084||i>=10133&&i<=10135||i===10145||i===10160||i===10175||i>=10548&&i<=10549||i>=11013&&i<=11015||i>=11035&&i<=11036||i===11088||i===11093||i===12336||i===12349||i===12951||i===12953||i===126980||i===127183||i>=127344&&i<=127345||i>=127358&&i<=127359||i===127374||i>=127377&&i<=127386||i>=127462&&i<=127487||i>=127489&&i<=127490||i===127514||i===127535||i>=127538&&i<=127546||i>=127568&&i<=127569||i>=127744&&i<=127777||i>=127780&&i<=127876||i>=127878&&i<=127891||i>=127894&&i<=127895||i>=127897&&i<=127899||i>=127902&&i<=127937||i>=127941&&i<=127942||i>=127944&&i<=127945||i>=127949&&i<=127984||i>=127987&&i<=127989||i>=127991&&i<=127994||i>=128000&&i<=128065||i>=128068&&i<=128069||i>=128081&&i<=128101||i>=128106&&i<=128109||i===128111||i>=128121&&i<=128123||i>=128125&&i<=128128||i===128132||i>=128136&&i<=128169||i>=128171&&i<=128253||i>=128255&&i<=128317||i>=128329&&i<=128334||i>=128336&&i<=128359||i>=128367&&i<=128368||i===128371||i>=128374&&i<=128377||i===128391||i>=128394&&i<=128397||i>=128420&&i<=128421||i===128424||i>=128433&&i<=128434||i===128444||i>=128450&&i<=128452||i>=128465&&i<=128467||i>=128476&&i<=128478||i===128481||i===128483||i===128488||i===128495||i===128499||i>=128506&&i<=128580||i>=128584&&i<=128586||i>=128640&&i<=128674||i>=128676&&i<=128691||i>=128695&&i<=128703||i>=128705&&i<=128709||i===128715||i>=128717&&i<=128722||i>=128736&&i<=128741||i===128745||i>=128747&&i<=128748||i===128752||i>=128755&&i<=128760||i>=129296&&i<=129303||i===129309||i>=129312&&i<=129317||i>=129319&&i<=129327||i===129338||i===129340||i>=129344&&i<=129349||i>=129351&&i<=129356||i>=129360&&i<=129387||i>=129408&&i<=129431||i===129472||i===129488||i>=129502&&i<=129510||i>=983040&&i<=983041;};h.isEmojiModifier=function(i){"use strict";return i>=127995&&i<=127999;};h.isEmojiModifierBase=function(i){"use strict";return i===9757||i===9977||i>=9994&&i<=9997||i===127877||i>=127938&&i<=127940||i===127943||i>=127946&&i<=127948||i>=128066&&i<=128067||i>=128070&&i<=128080||i>=128102&&i<=128105||i===128110||i>=128112&&i<=128120||i===128124||i>=128129&&i<=128131||i>=128133&&i<=128135||i===128170||i>=128372&&i<=128373||i===128378||i===128400||i>=128405&&i<=128406||i>=128581&&i<=128583||i>=128587&&i<=128591||i===128675||i>=128692&&i<=128694||i===128704||i===128716||i>=129304&&i<=129308||i>=129310&&i<=129311||i===129318||i>=129328&&i<=129337||i>=129341&&i<=129342||i>=129489&&i<=129501;};h.isEmojiVariationSelector=function(i){"use strict";return i===65039;};h.isNonSpacingCombiningMark=function(i){"use strict";return i===8419||i===8416;};h.isRegionalIndicator=function(i){"use strict";return i>=127462&&i<=127487;};h.isTagSpec=function(i){"use strict";return i>=917536&&i<=917568||i>=917595&&i<=917630;};h.isTagTerm=function(i){"use strict";return i===917631;};h.isText=function(i){"use strict";return i===35||i===42||i>=48&&i<=57;};h.isTextVariationSelector=function(i){"use strict";return i===65038;};h.isDefaultTextPresentation=function(i){"use strict";return i===35||i===42||i>=48&&i<=57||i===169||i===174||i===8252||i===8265||i===8482||i===8505||i>=8596&&i<=8597||i>=8617&&i<=8618||i===9000||i===9167||i>=9197&&i<=9199||i>=9201&&i<=9202||i>=9208&&i<=9210||i===9410||i===9654||i===9664||i>=9730&&i<=9732||i===9745||i===9752||i===9760||i>=9762&&i<=9763||i===9766||i===9770||i>=9774&&i<=9775||i>=9784&&i<=9785||i===9792||i===9794||i===9851||i===9874||i>=9876&&i<=9879||i===9881||i>=9883&&i<=9884||i>=9904&&i<=9905||i===9928||i===9935||i===9937||i===9939||i===9961||i>=9968&&i<=9969||i===9972||i>=9975&&i<=9977||i===9997||i===9999||i===10002||i===10004||i===10013||i===10017||i===10052||i===10055||i===10083||i===12336||i>=127344&&i<=127345||i>=127358&&i<=127359||i===127777||i>=127780&&i<=127788||i===127798||i===127869||i>=127894&&i<=127895||i>=127897&&i<=127899||i>=127902&&i<=127903||i>=127947&&i<=127950||i>=127956&&i<=127967||i===127987||i===127989||i===127991||i===128063||i===128065||i===128253||i>=128329&&i<=128330||i>=128367&&i<=128368||i>=128371&&i<=128377||i===128391||i>=128394&&i<=128397||i===128400||i===128421||i===128424||i>=128433&&i<=128434||i===128444||i>=128450&&i<=128452||i>=128465&&i<=128467||i>=128476&&i<=128478||i===128481||i===128483||i===128488||i===128495||i===128499||i===128506||i===128715||i>=128717&&i<=128719||i>=128736&&i<=128741||i===128745||i===128752||i===128755;};h.isSymbol=function(i){"use strict";return i===169||i===174||i===8482;};h.isZWJ=function(i){"use strict";return i===8205;};function h(){"use strict";}f.exports=h;}),null);
__d('UnicodeUtils',['invariant'],(function a(b,c,d,e,f,g,h){'use strict';var i=55296,j=56319,k=56320,l=57343,m=/[\uD800-\uDFFF]/;function n(w){return i<=w&&w<=l;}function o(w,x){0<=x&&x<w.length||h(0);if(x+1===w.length)return false;var y=w.charCodeAt(x),z=w.charCodeAt(x+1);return i<=y&&y<=j&&k<=z&&z<=l;}function p(w){return m.test(w);}function q(w,x){return 1+n(w.charCodeAt(x));}function r(w){if(!p(w))return w.length;var x=0;for(var y=0;y<w.length;y+=q(w,y))x++;return x;}function s(w,x,y){x=x||0;y=y===undefined?Infinity:y||0;if(!p(w))return w.substr(x,y);var z=w.length;if(z<=0||x>z||y<=0)return '';var aa=0;if(x>0){for(;x>0&&aa<z;x--)aa+=q(w,aa);if(aa>=z)return '';}else if(x<0){for(aa=z;x<0&&0<aa;x++)aa-=q(w,aa-1);if(aa<0)aa=0;}var ba=z;if(y<z)for(ba=aa;y>0&&ba<z;y--)ba+=q(w,ba);return w.substring(aa,ba);}function t(w,x,y){x=x||0;y=y===undefined?Infinity:y||0;if(x<0)x=0;if(y<0)y=0;var z=Math.abs(y-x);x=x<y?x:y;return s(w,x,z);}function u(w){var x=[];for(var y=0;y<w.length;y+=q(w,y))x.push(w.codePointAt(y));return x;}var v={getCodePoints:u,getUTF16Length:q,hasSurrogateUnit:p,isCodeUnitInSurrogateRange:n,isSurrogatePair:o,strlen:r,substring:t,substr:s};f.exports=v;}),null);
__d('EmojiRenderer',['EmojiRendererData','UnicodeUtils'],(function a(b,c,d,e,f,g){var h=0,i=1,j=2,k=3,l=4,m=5,n=6,o=7,p=8,q=9,r=10,s=11;function t(v){var w=v[0];if(w===undefined)return false;var x=v.length,y=v[x-1];if(y){y=y.charCodeAt(0);if(c('EmojiRendererData').isTagSpec(y))return false;}w=w.charCodeAt(0);if(c('EmojiRendererData').isSymbol(w)&&x<2)return false;if(c('EmojiRendererData').isText(w))if(x===1){return false;}else if(v.length==2){return c('EmojiRendererData').isNonSpacingCombiningMark(v[1].charCodeAt(0));}else{var z=1;if(c('EmojiRendererData').isEmojiVariationSelector(v[z].charCodeAt(0)))z++;while(z<v.length){if(!c('EmojiRendererData').isNonSpacingCombiningMark(v[z].charCodeAt(0)))return false;z++;}return true;}return true;}var u={parse:function v(w,x){var y=null,z=[],aa=p,ba=0,ca=w.length;while(ba<ca){var da=w.codePointAt(ba),ea=c('UnicodeUtils').getUTF16Length(w,ba),fa=w.substr(ba,ea);switch(aa){case q:if(c('EmojiRendererData').isRegionalIndicator(da)){aa=k;}else aa=p;break;case l:if(c('EmojiRendererData').isEmojiModifier(da)){aa=m;break;}case h:if(c('EmojiRendererData').isZWJ(da)){aa=o;}else if(c('EmojiRendererData').isEmojiVariationSelector(da)){aa=j;}else if(c('EmojiRendererData').isTextVariationSelector(da)){aa=s;}else if(c('EmojiRendererData').isNonSpacingCombiningMark(da)){aa=i;}else if(c('EmojiRendererData').isTagSpec(da)){aa=n;}else aa=p;break;case i:case j:if(c('EmojiRendererData').isNonSpacingCombiningMark(da))break;case k:case m:if(c('EmojiRendererData').isZWJ(da)){aa=o;}else if(c('EmojiRendererData').isTagSpec(da)){aa=n;}else aa=p;break;case n:if(c('EmojiRendererData').isTagSpec(da)||c('EmojiRendererData').isTagTerm(da)){aa=n;}else aa=p;break;case o:if(c('EmojiRendererData').isRegionalIndicator(da)){aa=q;}else if(c('EmojiRendererData').isEmojiModifierBase(da)){aa=l;}else if(c('EmojiRendererData').isEmoji(da)){aa=h;}else aa=p;break;case r:if(c('EmojiRendererData').isNonSpacingCombiningMark(da)){aa=i;}else if(c('EmojiRendererData').isEmojiVariationSelector(da)){aa=j;}else aa=p;break;default:aa=p;break;}if(aa===p){if(c('EmojiRendererData').isRegionalIndicator(da)){aa=q;}else if(c('EmojiRendererData').isEmojiModifierBase(da)){aa=l;}else if(c('EmojiRendererData').isText(da)){aa=r;}else if(c('EmojiRendererData').isEmoji(da))aa=h;if(aa!==p){if(y!==null&&t(y.emoji))z.push(y);if(x!==null&&x===z.length){y=null;break;}y={emoji:[fa],length:ea,offset:ba};}}else if(y!==null){y.emoji.push(fa);y.length+=ea;}ba+=ea;}if(y!==null&&t(y.emoji))z.push(y);return z;},render:function v(w,x,y){var z=u.parse(w),aa=[],ba=0;z.forEach(function(ca){var da=ca.offset;if(da>ba)aa.push(w.substr(ba,da-ba));aa.push(x(ca.emoji));ba=da+ca.length;});aa.push(w.substr(ba,w.length-ba));return aa;},containsEmoji:function v(w){return u.parse(w,1).length===1;},countEmoji:function v(w){return u.parse(w).length;}};f.exports=u;}),null);
__d("Utf16",[],(function a(b,c,d,e,f,g){var h={decode:function i(j){switch(j.length){case 1:return j.charCodeAt(0);case 2:return 65536|(j.charCodeAt(0)-55296)*1024|j.charCodeAt(1)-56320;default:return null;}},encode:function i(j){if(j<65536){return String.fromCharCode(j);}else return String.fromCharCode(55296+(j-65536>>10))+String.fromCharCode(56320+j%1024);}};f.exports=h;}),null);
__d('messengerIterateEmoji',['MessengerSupportedEmoji'],(function a(b,c,d,e,f,g){'use strict';function h(i,j,k,l){var m=String(i);while(m){var n=c('MessengerSupportedEmoji').getEmojiMatchObj(m);if(n){var o=n.offset+n.length,p=m.substr(0,n.is_supported?n.offset:o);k(p);if(n.is_supported)j(n.emoji_str,n.emoji_key,l);var q=m.substr(o);m=q;}else break;}k(m);}f.exports=h;}),null);
__d('messengerIterateEmoticons',['EmoticonEmojiList'],(function a(b,c,d,e,f,g){'use strict';function h(i,j,k,l){var m,n,o,p,q,r=String(i);while(r){var s=c('EmoticonEmojiList').regexp.exec(r);if(s){m=s.index+s[1].length;n=r.substr(0,m);o=s[2];p=r.substr(m+o.length);q=c('EmoticonEmojiList').names[o];k(n);j(o,q,l);r=p;}else break;}k(r);}f.exports=h;}),null);
__d('MessengerTextWithEmoticons.react',['cx','fbt','BaseTextWithDecoration.react','EmojiImageURL','EmoticonEmojiList','Image.react','React','messengerIterateEmoji','messengerIterateEmoticons'],(function a(b,c,d,e,f,g,h,i){'use strict';var j,k,l=c('React').PropTypes;function m(q,r,s){var t=s?128:16,u=c('EmojiImageURL').getMessengerURL(r,t),v=s?"_1ift _5m3a":"_1ift _2560";return c('React').createElement(c('Image.react'),{alt:q,className:v,src:u});}function n(q,r,s){var t=s?128:16,u=c('EmoticonEmojiList').emote2emojis[r],v=u?c('EmojiImageURL').getMessengerURL(u,t):null;if(v){var w=String.fromCodePoint(parseInt(u,t)),x=s?"_1ift _5m3a":"_1ift _2560";return c('React').createElement(c('Image.react'),{alt:w,className:x,src:v});}var y=i._("{emoticonName} emoticon",[i.param('emoticonName',r)]);return c('React').createElement('span',{'aria-label':y},q);}function o(q,r,s){return function(t,u,v){var w=function x(y,z,aa){u(r(y,z,aa));};q(String(t),w,v,s);};}j=babelHelpers.inherits(p,c('React').Component);k=j&&j.prototype;p.prototype.shouldComponentUpdate=function(q){return q.text!==this.props.text;};p.prototype.render=function(){var q=[o(c('messengerIterateEmoji'),m,this.props.customSize),o(c('messengerIterateEmoticons'),n,this.props.customSize)];return c('React').createElement(c('BaseTextWithDecoration.react'),babelHelpers['extends']({},this.props,{text:this.props.text,decorators:q}));};function p(){j.apply(this,arguments);}p.propTypes={text:l.string,customSize:l.bool};f.exports=p;}),null);
__d('FluxStore',['invariant','EventEmitter'],(function a(b,c,d,e,f,g,h){'use strict';function i(k){this.__className=this.constructor.name;this.__changed=false;this.__changeEvent='change';this.__dispatcher=k;this.__emitter=new (c('EventEmitter'))();this.$FluxStore1=k.register(function(l){this.__invokeOnDispatch(l);}.bind(this),this.__getIDForDispatcher(),this);}i.prototype.addListener=function(k){return this.__emitter.addListener(this.__changeEvent,k);};i.prototype.getDispatcher=function(){return this.__dispatcher;};i.prototype.getDispatchToken=function(){return this.$FluxStore1;};i.prototype.hasChanged=function(){this.__dispatcher.isDispatching()||h(0);return this.__changed;};i.prototype.__emitChange=function(){this.__dispatcher.isDispatching()||h(0);this.__changed=true;};i.prototype.__invokeOnDispatch=function(k){this.__changed=false;this.__onDispatch(k);if(this.__changed)this.__emitter.emit(this.__changeEvent);};i.prototype.__onDispatch=function(k){h(0);};i.prototype.__getIDForDispatcher=function(){return this.__className;};var j=i;f.exports=i;}),18);