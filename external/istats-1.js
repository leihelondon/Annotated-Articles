define("istats-1",[],function(){var X={version:"2.0.0"},b=X,c=[],q={},g,h="",f=false,Y="sa_labels",E="istats-notrack",ad="_istats_"+Math.random(),F={internal:true,external:true,download:true,clickthrough:true,promoimage:true},d={type:"",url:""},M=[],S=2000,K=10000,ac=500,x=null,e={ignore:/.+\.(jpe?g|gif|png)$/i,webUrl:/^(\.\.?\/|\/|https?:\/\/|[^\/.:]+([\/.]|$))/i,pseudoProtocol:/^(mailto:|javascript:|about:|view-source:|data:)/i,internalUrl:/^(?:\/\/|https?:\/\/)?(?:[^.]+\.)*((bbc|bbci)(?:\.co\.uk|\.com)|doubleclick\.net)(:|\/|$)/i,storeUrl:/^https?:\/\/.*store\.bbc\.(co\.uk|com).*$/i,downloadUrl:/.+\.(pdf|te?xt|rtf|docx?|xlsx?|pptx?|od[tpsgbf]|mp[234]|m4a|mpeg|exe|dmg|zip|tgz)$/i,relativeUrl:/^(\.\.?\/|\/[^\/]|([^\/.:]+([\/.]|$)))/i,clickThrough:/^#sa-(.*?)(?:-sa(.*))?$/,hashLabels:/^ct_|ns_(fee|campaign|linkname|mchannel|source)=(.+?)$/,domain:/(bbc(?:\.co\.uk|\.com))(:\d+)?$/i},H={},P={types:{"trackingfail.istats":true,"trackingsuccess.istats":true,"redirect.istats":true,"cookiecreated.istats":true}},j={},A=[],O=[],J=function(){var af={};for(var ag in P.types){af[ag]=[]}return af},Z=N(Y);v(window);Z=(Z||(r())._trackingCookie);y(Y);function v(af){(typeof af.istats==="undefined")&&(af.istats={});(typeof af.istats.enabled==="undefined")&&(af.istats.enabled=true);return af}function r(af){return af?v(af).istats:window.istats}X.getConfig=r;function D(){return f}X.isReady=D;function p(){if(typeof Z==="string"){d.type="internal";return ae(decodeURIComponent(Z))}}function Q(af){af=af.replace(/\+/g,"%20");return decodeURIComponent(af)}function ae(af){var ah={};var aj=af.split("&");for(var ag=0;ag<aj.length;ag++){var ai=aj[ag].split("=");ah[ai[0]]=ai[1]}return ah}X._getLabelsFromString=ae;function u(ah){if(history.replaceState){var af=location.protocol+"//"+location.host+(location.pathname?location.pathname:"");try{history.replaceState({},"",af+ah)}catch(ag){if(window.console&&console.log){console.log(ag)}}}else{location.hash=ah}}function a(af){af||(af=location.hash);if(af!==""){var aj=af.match(e.clickThrough),ah,ai="",ak=[];if(aj===null){return}if(aj[2]){ai="#"+aj[2]}u(ai);ah=aj[1];if(ah===""){return}d.type="click through";ak=ah.split("&");for(var ag in ak){if(ak.hasOwnProperty(ag)&&!e.hashLabels.test(ak[ag])){ak[ag]="ct_"+ak[ag]}}return ak}}function I(){var ag=true,ah=true,af=(r()).enabled;if(window.bbcFlagpoles_istats){ah=!(window.bbcFlagpoles_istats==="ON")}if(ah||!af){ag=false}return ag}X.isEnabled=I;X.setCountername=function(af){g=af};X.getCountername=function(){if(!g){g=aa()}if(!g.match(/\.page$/)){g+=".page"}return g};function aa(){var af=window.location.pathname.replace(/\/$/,"").replace(/^\//,"").replace(/\//g,".");return af+".page"}function U(af){if(typeof(af)!=="string"){throw (Error("'site' must be a string"))}af=af.toLowerCase().replace(/_/g,"-");return af}X._normaliseLabelValue=U;X.setSite=function(af){h=U(af)};X.getSite=function(){if(!h){if(typeof(q.bbc_site)==="string"){b.setSite(q.bbc_site)}}return h};X.getDefaultURL=function(){try{var af=b.getCollector("default")}catch(ag){return""}return af.url+"?"+W(n({}),"&")};function T(ag,af){if(!ag.className){return false}return(" "+ag.className+" ").indexOf(" "+af+" ")===-1?false:true}function C(ah,ag){var af=(ah.className)?ah.className+" ":"";if(!T(ah,ag)){ah.className=af+ag}}function s(ai,ag){var af=ai.className.split(" "),aj=[],ah=af.length;while(ah--){if(af[ah]!==ag){aj.unshift(af[ah])}}ai.className=(aj.length)?aj.join(" "):""}X.track=function(af,ai){if(!I()){return}if(!F[af]){throw ('Given linkType, "'+af+'" is not valid.')}ai=ai||{};if(!ai.region){ai.region=[document.body]}if(typeof ai.region.push==="undefined"){ai.region=[ai.region]}var ah=ai.region.length;while(ah--){var aj=ai.region[ah];k(aj,af);var ag=aj[ad];ag.linkTypesTracked[af]=(ai||{});if(!ag.trackerAttached){(function(ak){H.attach(ak,"click",function(al){j.dispatch(ak,al)})})(aj);ag.trackerAttached=true}}};X.observe=function(af,ah,ai){if(!P.types[ah]){throw ('Cannot observe: Given eventType, "'+ah+'" in unknown.')}if(typeof af.push==="undefined"){af=[af]}var ag=af.length;while(ag--){k(af[ag]);O[af[ag][ad].eventsKey][ah].push(ai)}};X._isInternal=function(af){return X._isWebUrl(af)&&(e.relativeUrl.test(af)||e.internalUrl.test(af))&&(!e.storeUrl.test(af))};X._isExternal=function(af){return X._isWebUrl(af)&&!b._isInternal(af)};X._isDownload=function(af){return e.webUrl.test(af)&&e.downloadUrl.test(af)};X._isWebUrl=function(af){return e.webUrl.test(af)&&!e.ignore.test(af)&&!e.pseudoProtocol.test(af)};X._getDomainFromHost=G;function G(af){var ag=af.match(e.domain);return ag?ag[1]:af}X._getLabelsFromHashString=a;X._createCookie=V;X._inspectTracking=function(af){if(typeof af!=="undefined"){d=af}return d};X.log=function(ag,af,ah,ai){ah=ah||{};if(!I()){return}if(ag.toLowerCase()!=="pageview"){ah.ns_type="hidden";ah.action_name=af;ah.action_type=ag}d.type="logging actions";z(ah,ai)};X.addNoTrack=function(af){C(af,E)};X.removeNoTrack=function(af){s(af,E)};function W(ai,ah){ah=ah||"&";var ag=[];if(ai.hasOwnProperty("name")){ag.push(encodeURIComponent("name")+"="+encodeURIComponent(ai.name))}for(var af in ai){if(ai.hasOwnProperty(af)&&typeof(ai[af])!="object"){if(af==="linkLocation"){ag.push(encodeURIComponent("link_location")+"="+encodeURIComponent(ai[af]))}else{if(af!=="name"&&af!=="ns_referrer"){ag.push(encodeURIComponent(af)+"="+encodeURIComponent(ai[af]))}}}}if(ai.hasOwnProperty("ns_referrer")){ag.push(encodeURIComponent("ns_referrer")+"="+encodeURIComponent(ai.ns_referrer))}return ag.join(ah)}X.addLabels=function(af){if(typeof(af)=="string"){af=ae(Q(af))}o(q,af)};X._getLabels=function(){return q};function o(ah,ag){for(var af in ag){ah[af]=ag[af]}return ah}P.notify=function(aj,ah,ak){var af=O[aj[ad].eventsKey][ah];for(var ag=0,ai=af.length;ag<ai;ag++){if(typeof af[ag]==="function"){if(af[ag](ak)===false){return false}}}};H.attach=function(af,ah,ag){if(af.addEventListener){af.addEventListener(ah,ag,false)}else{if(af.attachEvent){af.attachEvent("on"+ah,ag)}else{af["on"+ah]=ag}}};H.detach=function(af,ah,ag){if(af.removeEventListener){af.removeEventListener(ah,ag,false)}else{if(af.detachEvent){af.detachEvent("on"+ah,ag)}else{af["on"+ah]=null}}};H.getTarget=function(af){af=af||window.event;return af.target||af.srcElement};function l(ag,af){var ah=ag;do{if(ah.nodeName=="A"){return ah}if(ah===af){return false}}while(ah=ah.parentNode)}function ab(af){if(!b._isWebUrl(af)){return}if(b._isExternal(af)){return"external"}else{if(b._isDownload(af)){return"download"}else{if(b._isInternal(af)){return"internal"}}}}function t(aj,ag,ai,af,ah){aj.istats=aj.istats||{};aj.istats.linkType=ag,aj.istats.linkTrackerUrl=ai,aj.istats.linkLocation=af,aj.istats.linkElement=ah}j.dispatch=function(am,al){var ag=l(H.getTarget(al),this),af,ah,aj,ai,ak;if(!ag||!ag.href){return}ai=new Date().getTime();ak=(ag.istatsTimestamp&&(ai-ag.istatsTimestamp)<ac);if(ak||T(ag,E)){return}af=ab(ag.href);ah=j[af];aj=am[ad].linkTypesTracked[af];if(!af||!ah||!aj){return}ag.istatsTimestamp=ai;al.istats=al.istats||{};j[af](am,ag,al)};j.external=function(ai,ag,ah){var af=ai[ad].linkTypesTracked.external||{};af.extlink_url=ag.href;af.ns_type="hidden";af.action_type="extlink";af.ns_referrer=B();if(ag.id){af.extlink_id=ag.id}o(af,L(ag));if(!af.linkLocation){af.linkLocation=""}d.type="external";t(ah,"external",W(af),af.linkLocation,ag);w(af,ai,ag,ah)};j.download=function(ai,ag,ah){var af=ai[ad].linkTypesTracked.download||{};af.download_url=ag.href;af.ns_type="hidden";af.action_type="download";af.ns_referrer=B();if(ag.id){af.download_id=ag.id}o(af,L(ag));if(!af.linkLocation){af.linkLocation=""}d.type="download";t(ah,"download",W(af),af.linkLocation,ag);w(af,ai,ag,ah)};j.internal=function(ai,ag,ah){var af=ai[ad].linkTypesTracked.internal||{};af.intlink_from_url=location.href;af.intlink_ts=new Date().getTime();if(ag.id){af.intlink_id=ag.id}o(af,L(ag));if(!af.linkLocation){af.linkLocation=""}Z=W(af);V(Y,Z,K);P.notify(ai,"cookiecreated.istats",ah)};function L(ag){var af={};while(ag){if(ag.linktrack){if(typeof(ag.linktrack)==="string"){af=ae(Q(ag.linktrack))}if(typeof(ag.linktrack)==="object"){af=ag.linktrack}break}ag=ag.parentNode}return af}function w(al,ak,ag,ah){var af=ah.altKey||ah.ctrlKey||ah.metaKey||ah.shiftKey,aj=function(){};var ai=af||(ag.target&&!ag.target.match(/^_(self|parent|top)$/i));if(!ai){aj=function(){if(P.notify(ak,"redirect.istats",ah)!==false){window.location.href=ag.href}}}clearTimeout(x);x=setTimeout(function(){P.notify(ak,"trackingfail.istats",ah);aj()},S);z(al,function(){clearTimeout(x);if(P.notify(ak,"trackingsuccess.istats",ah)!==false){aj()}},ah);if(!ai){if(ah.preventDefault){ah.preventDefault()}else{event.returnValue=false}}}function k(af){if(typeof af[ad]!=="undefined"){return}af[ad]={eventsKey:O.length,linkTypesTracked:{}};O.push(J())}function V(af,al,ah){var ai=new Date(),ak=365*24*60*60*1000,an=window.location.host,aj,am,ag;if(typeof ah==="undefined"){ah=ak}ai.setTime(ai.getTime()+ah);am="; expires="+ai.toGMTString();aj=G(an);ag=af+"="+al+am+"; domain="+aj+"; path=/";document.cookie=ag;return ag}function N(ah){var ak=ah+"=",aj=document.cookie.split(";"),ag;for(var ai=0,af=aj.length;ai<af;ai++){ag=aj[ai];while(ag.charAt(0)===" "){ag=ag.substring(1,ag.length)}if(ag.indexOf(ak)===0){return decodeURIComponent(ag.substring(ak.length,ag.length))}}return null}function y(af){if(N(af)!==null){V(af,"",-1)}}X.addCollector=function(af){if(typeof(af)!=="object"){throw new Error("Only an object can be passed in as a collector")}if(!af.name){throw new Error("Collector must have a name")}if(!af.url){throw new Error("Collector must have a url")}if(af.seperator){af.separator=af.seperator;delete af.seperator}c.push(af);return true};X.getCollector=function(af){for(var ag=0;ag<c.length;ag++){if(c[ag].name===af){return c[ag]}}throw Error("Unable to find "+af+" in collectors")};function n(ag){if(typeof(ag)==="undefined"){ag={}}for(var af in q){if(typeof(ag[af])==="undefined"){ag[af]=q[af]}}ag.bbc_site=b.getSite();ag.name=b.getCountername();ag.ns_ti=document.title;ag.ns_c=(document.characterSet?document.characterSet:document.defaultCharset);ag.ns__t=(new Date().getTime());ag.ns_jspageurl=location&&location.href?location.href:document.URL;ag.ns_referrer=B();return ag}function B(){return encodeURI(((window.orb.referrer)?window.orb.referrer:document.referrer))}function z(aj,al,ak,af){if(!I()){return}if(!f){if(!af){A.push({labels:aj,callback:al,event:ak})}return}if(c.length==0){throw Error("No data collectors available")}aj=n(aj);M.push(aj);var ai=0;for(var ah=0;ah<c.length;ah++){collector=c[ah];separator=collector.separator||"&";var ag=new Image();ag.src=collector.url+"?"+W(aj,separator);if(typeof al==="function"){ag.onload=function(){ai++;if(ai==c.length){al()}}}}}X._sendData=z;X.labelsSent=function(){return M};function i(ag){if(!ag.intlink_from_url){return false}var af=B();if(ag.intlink_from_url.split("?")[0].split("#")[0]===af.split("?")[0].split("#")[0]){return true}else{b.log("error","istats-internal-link-tracking",ag);return false}}function R(){if(f){return}var ah;if(!I()){return}ah=p()||a();f=true;var ag=o({},q);if(ah){if(i(ah)){ag=o(ag,ah)}(r())._linkTracked=true}b.log("pageview",b.getCountername(),ag);if(A.length>0){for(var af in A){z(A[af]["labels"],A[af]["callback"],A[af]["event"],true)}}}X.invoke=R;function m(){if(typeof(istatsTrackingUrl)==="string"&&!D()){var ai=document.createElement("a");ai.href=istatsTrackingUrl;var af="//"+ai.hostname+ai.pathname;b.addCollector({name:"default",url:af,separator:"&"});var ag=ai.search.replace(/&amp;/g,"&").replace(/^\?/,"");var ah=ae(Q(ag));b.setCountername(ah.name);b.addLabels(ah);b.invoke()}}setTimeout(m,300);return X});