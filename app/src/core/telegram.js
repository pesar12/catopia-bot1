const a4_0x30a3f8=a4_0x3de4;function a4_0x3de4(_0x432a2c,_0x28ca73){const _0x3b8150=a4_0x3b81();return a4_0x3de4=function(_0x3de49e,_0x43767b){_0x3de49e=_0x3de49e-0x170;let _0xc82efe=_0x3b8150[_0x3de49e];return _0xc82efe;},a4_0x3de4(_0x432a2c,_0x28ca73);}(function(_0x2f11cb,_0x157e71){const _0x4d474c=a4_0x3de4,_0x2ba7f5=_0x2f11cb();while(!![]){try{const _0x4618b3=parseInt(_0x4d474c(0x185))/0x1+-parseInt(_0x4d474c(0x18d))/0x2+parseInt(_0x4d474c(0x190))/0x3+parseInt(_0x4d474c(0x1a6))/0x4+-parseInt(_0x4d474c(0x199))/0x5+-parseInt(_0x4d474c(0x1ac))/0x6*(parseInt(_0x4d474c(0x1a5))/0x7)+parseInt(_0x4d474c(0x17e))/0x8*(parseInt(_0x4d474c(0x1a9))/0x9);if(_0x4618b3===_0x157e71)break;else _0x2ba7f5['push'](_0x2ba7f5['shift']());}catch(_0x32b8d5){_0x2ba7f5['push'](_0x2ba7f5['shift']());}}}(a4_0x3b81,0x1ce9a));import a4_0x38d645 from'input';function a4_0x3b81(){const _0x123f0e=['https://cowtopia-prod.tonfarmer.com/','bot','\x20-\x20Created','client','You\x20don\x27t\x20have\x20any\x20sessions,\x20please\x20create\x20first','onBoarding','\x20|\x20FloodWait\x20','info','save','indexOf','\x20|\x20Sleep\x20','16iTecef','useSession','url','catopia_game_bot','destroy','invoke','disconnect','40711WlwSVM','RequestWebView','\x20-\x20Resolving\x20Peer','session','proxy','resolvePeer','error','warn','58524xUtuiQ','resetSession','agent','520497VmMIwP','storeSession','getTelegramQuery','messages','Welcome\x20to\x20Cowtopia\x20Bot\x20\x0aBy\x20:\x20Widiskel\x20\x0a\x20\x0aLets\x20getting\x20started.\x0a\x0aYour\x20Session\x20List:\x0a','sessionCreation','\x20-\x20Webview\x20Connected','createDir','sessions','839580fCxzPv','log','text','delay','TELEGRAM_APP_HASH','Session\x20','getEntity','<empty>\x20\x0a\x20\x0aPlease\x20enter\x20Session\x20Name\x20:','seconds','sessionName','\x0a\x20\x0a1.\x20Create\x20Session.\x20\x0a2.\x20Reset\x20Sessions\x20\x0a3.\x20Start\x20Bot\x20\x0a\x20\x0aInput\x20your\x20choice\x20:','serverAddress','667877iLycXn','604368lQsUCK','init','getSession','635058HrswFa','length','stringify','12IJsaiL','Enter\x20your\x20Telegram\x20Verification\x20Code\x20?','TELEGRAM_APP_ID','Your\x20session\x20List\x20:\x0a\x20\x0a','peer','Invalid\x20input,\x20Please\x20try\x20again'];a4_0x3b81=function(){return _0x123f0e;};return a4_0x3b81();}import{Helper}from'../utils/helper.js';import{Api,TelegramClient}from'telegram';import{StoreSession}from'telegram/sessions/StoreSession.js';import a4_0x27272f from'../utils/logger.js';import{FloodWaitError}from'telegram/errors/RPCErrorList.js';import{Config}from'../../config/config.js';import{HttpsProxyAgent}from'https-proxy-agent';export class Telegram{[a4_0x30a3f8(0x191)];constructor(){const _0x2b0c1e=a4_0x30a3f8;this[_0x2b0c1e(0x1a2)]=_0x2b0c1e(0x198),this[_0x2b0c1e(0x180)]=_0x2b0c1e(0x173),this[_0x2b0c1e(0x174)]=_0x2b0c1e(0x181);}async[a4_0x30a3f8(0x1a7)](){const _0x2c801f=a4_0x30a3f8;try{await this[_0x2c801f(0x178)]();}catch(_0x253276){console['log'](_0x253276),a4_0x27272f[_0x2c801f(0x18b)](''+JSON[_0x2c801f(0x1ab)](_0x253276));throw _0x253276;}}async[a4_0x30a3f8(0x178)](){const _0x35544e=a4_0x30a3f8;try{let _0x33c73f=_0x35544e(0x194);const _0x378c95=Helper[_0x35544e(0x1a8)]('sessions');if(_0x378c95[_0x35544e(0x1aa)]==0x0)_0x33c73f+=_0x35544e(0x1a0);else for(const _0x28b8c9 of _0x378c95){_0x33c73f+='-\x20'+_0x28b8c9+'\x0a';}_0x33c73f+='\x0a\x20\x0aPlease\x20Choose\x20a\x20menu:\x20\x0a',_0x33c73f+=_0x35544e(0x1a3);const _0x800bf8=await a4_0x38d645[_0x35544e(0x19b)](_0x33c73f);if(_0x800bf8==0x1)await this[_0x35544e(0x195)]();else{if(_0x800bf8==0x2)Helper[_0x35544e(0x18e)](this['sessionName']),await Helper[_0x35544e(0x19c)](0xbb8),await this[_0x35544e(0x178)]();else _0x800bf8==0x3?Helper[_0x35544e(0x1a8)](this[_0x35544e(0x1a2)])?.[_0x35544e(0x1aa)]==0x0&&(console[_0x35544e(0x17a)](_0x35544e(0x177)),await this['onBoarding']()):(console[_0x35544e(0x18b)](_0x35544e(0x172)),await this[_0x35544e(0x178)]());}}catch(_0x5d2c4b){throw _0x5d2c4b;}}async['sessionCreation'](){const _0xdf3321=a4_0x30a3f8;try{const _0x2d2941=Helper[_0xdf3321(0x1a8)]('sessions');let _0x5271c3=_0xdf3321(0x170);for(const _0x5dc43c of _0x2d2941){_0x5271c3+=_0x2d2941[_0xdf3321(0x17c)](_0x5dc43c)+0x1+'.\x20'+_0x5dc43c+'\x0a';}_0x2d2941['length']==0x0?_0x5271c3+=_0xdf3321(0x1a0):_0x5271c3+='\x0a\x20\x0aYou\x20alreay\x20have\x20sessions,\x20cancel(CTRL+C)\x20or\x20create\x20new\x20Session\x20:';const _0x1ebd2b=await a4_0x38d645['text'](_0x5271c3);this['sessionName']=Helper[_0xdf3321(0x197)](_0x1ebd2b),await this[_0xdf3321(0x17f)](this['sessionName']),await this[_0xdf3321(0x184)](),a4_0x27272f['info'](_0xdf3321(0x19e)+this['sessionName']+'\x20-\x20Created'),console[_0xdf3321(0x19a)]('Session\x20'+this['sessionName']+_0xdf3321(0x175)),this[_0xdf3321(0x191)][_0xdf3321(0x17b)](),await Helper[_0xdf3321(0x19c)](0xbb8),await this[_0xdf3321(0x1a7)]();}catch(_0x20daba){throw _0x20daba;}}async[a4_0x30a3f8(0x17f)](_0xd9e96e,_0xbc0998){const _0x57870c=a4_0x30a3f8;try{this[_0x57870c(0x189)]=_0xbc0998;const _0x4e334a={'connectionRetries':0x5};this[_0x57870c(0x189)]&&(_0x4e334a[_0x57870c(0x18f)]=new HttpsProxyAgent(this[_0x57870c(0x189)])),this[_0x57870c(0x191)]=new StoreSession(_0xd9e96e),this['client']=new TelegramClient(this['storeSession'],Config[_0x57870c(0x1ae)],Config[_0x57870c(0x19d)],_0x4e334a),this[_0x57870c(0x191)]['save'](),await this[_0x57870c(0x176)]['start']({'phoneNumber':async()=>await a4_0x38d645[_0x57870c(0x19b)]('Enter\x20your\x20Telegram\x20Phone\x20Number\x20?'),'password':async()=>await a4_0x38d645[_0x57870c(0x19b)]('Enter\x20your\x20Telegram\x20Password?'),'phoneCode':async()=>await a4_0x38d645[_0x57870c(0x19b)](_0x57870c(0x1ad)),'onError':_0x5a46c0=>{const _0x2c8505=_0x57870c;console[_0x2c8505(0x19a)](_0x5a46c0['message']);}}),console[_0x57870c(0x19a)]();}catch(_0x48589f){throw _0x48589f;}}async[a4_0x30a3f8(0x18a)](){const _0x58d1eb=a4_0x30a3f8;try{a4_0x27272f[_0x58d1eb(0x17a)](_0x58d1eb(0x19e)+this[_0x58d1eb(0x188)]+_0x58d1eb(0x187));while(this[_0x58d1eb(0x171)]==undefined){try{this[_0x58d1eb(0x171)]=await this[_0x58d1eb(0x176)][_0x58d1eb(0x19f)](this[_0x58d1eb(0x174)]);break;}catch(_0x2156a0){if(_0x2156a0 instanceof FloodWaitError){const _0x2c8295=_0x2156a0[_0x58d1eb(0x1a1)];a4_0x27272f[_0x58d1eb(0x18c)](this[_0x58d1eb(0x176)][_0x58d1eb(0x188)][_0x58d1eb(0x1a4)]+_0x58d1eb(0x179)+_0x2156a0),a4_0x27272f['info'](this[_0x58d1eb(0x176)][_0x58d1eb(0x188)][_0x58d1eb(0x1a4)]+_0x58d1eb(0x17d)+_0x2c8295+'s'),await Helper[_0x58d1eb(0x19c)]((_0x2c8295+0x3)*0x3e8);}else throw _0x2156a0;}}}catch(_0x5dc787){throw _0x5dc787;}}async[a4_0x30a3f8(0x184)](){const _0x376f13=a4_0x30a3f8;await this[_0x376f13(0x176)][_0x376f13(0x184)](),await this[_0x376f13(0x176)][_0x376f13(0x182)](),this[_0x376f13(0x171)]=undefined,this[_0x376f13(0x1a2)]=undefined;}async['initWebView'](){const _0x59210b=a4_0x30a3f8;try{const _0x443433=await this[_0x59210b(0x176)][_0x59210b(0x183)](new Api[(_0x59210b(0x193))][(_0x59210b(0x186))]({'peer':this[_0x59210b(0x171)],'bot':this[_0x59210b(0x171)],'fromBotMenu':!![],'url':this[_0x59210b(0x180)],'platform':'android'}));a4_0x27272f[_0x59210b(0x17a)]('Session\x20'+this['session']+_0x59210b(0x196));const _0x551bdb=_0x443433[_0x59210b(0x180)];return Helper[_0x59210b(0x192)](_0x551bdb,0x3);}catch(_0x40181b){throw _0x40181b;}}}