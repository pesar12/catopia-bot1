const a4_0x49bea4=a4_0x341d;(function(_0x457eb1,_0x26bad0){const _0x46cf54=a4_0x341d,_0x25cd6f=_0x457eb1();while(!![]){try{const _0x32896e=parseInt(_0x46cf54(0x191))/0x1+-parseInt(_0x46cf54(0x1a0))/0x2*(parseInt(_0x46cf54(0x179))/0x3)+parseInt(_0x46cf54(0x183))/0x4+-parseInt(_0x46cf54(0x19d))/0x5*(-parseInt(_0x46cf54(0x18e))/0x6)+-parseInt(_0x46cf54(0x1b3))/0x7*(parseInt(_0x46cf54(0x17b))/0x8)+parseInt(_0x46cf54(0x18a))/0x9+-parseInt(_0x46cf54(0x18b))/0xa*(parseInt(_0x46cf54(0x1a8))/0xb);if(_0x32896e===_0x26bad0)break;else _0x25cd6f['push'](_0x25cd6f['shift']());}catch(_0x3c5e96){_0x25cd6f['push'](_0x25cd6f['shift']());}}}(a4_0x5177,0xb3867));import a4_0x3da411 from'input';import{Helper}from'../utils/helper.js';import{Api,TelegramClient}from'telegram';import{StoreSession}from'telegram/sessions/StoreSession.js';import a4_0x5d7331 from'../utils/logger.js';function a4_0x5177(){const _0x3cc0cd=['\x20-\x20Webview\x20Connected','\x20|\x20Sleep\x20','\x0a\x20\x0aYou\x20alreay\x20have\x20sessions,\x20cancel(CTRL+C)\x20or\x20create\x20new\x20Session\x20:','message','session','useSession','1353wmOMUO','bot','\x20|\x20FloodWait\x20','<empty>\x20\x0a\x20\x0aPlease\x20enter\x20Session\x20Name\x20:','client','disconnect','destroy','\x20-\x20Created','peer','save','serverAddress','420JouhDE','android','Welcome\x20to\x20Cowtopia\x20Bot\x20\x0aBy\x20:\x20Widiskel\x20\x0a\x20\x0aLets\x20getting\x20started.\x0a\x0aYour\x20Session\x20List:\x0a','text','\x0a\x20\x0aPlease\x20Choose\x20a\x20menu:\x20\x0a','indexOf','TELEGRAM_APP_ID','36bdPqkx','sessions','35592XBYGye','messages','getTelegramQuery','Enter\x20your\x20Telegram\x20Verification\x20Code\x20?','seconds','url','sessionName','getSession','3860464jEfpVY','resetSession','agent','createDir','https://cowtopia-prod.tonfarmer.com/','RequestWebView','stringify','8069013yBjrRL','125170EMnMhR','initWebView','onBoarding','503046BoOdJa','sessionCreation','log','930156RsDEvs','\x0a\x20\x0a1.\x20Create\x20Session.\x20\x0a2.\x20Reset\x20Sessions\x20\x0a3.\x20Start\x20Bot\x20\x0a\x20\x0aInput\x20your\x20choice\x20:','Enter\x20your\x20Telegram\x20Phone\x20Number\x20?','Your\x20session\x20List\x20:\x0a\x20\x0a','storeSession','proxy','resolvePeer','Session\x20','error','Enter\x20your\x20Telegram\x20Password?','delay','info','5qVTjam','\x20-\x20Resolving\x20Peer','init','55634lBHZQv','length'];a4_0x5177=function(){return _0x3cc0cd;};return a4_0x5177();}function a4_0x341d(_0x3353ee,_0xcb4696){const _0x517782=a4_0x5177();return a4_0x341d=function(_0x341d53,_0x85d9db){_0x341d53=_0x341d53-0x173;let _0x4d824a=_0x517782[_0x341d53];return _0x4d824a;},a4_0x341d(_0x3353ee,_0xcb4696);}import{FloodWaitError}from'telegram/errors/RPCErrorList.js';import{Config}from'../../config/config.js';import{HttpsProxyAgent}from'https-proxy-agent';export class Telegram{[a4_0x49bea4(0x195)];constructor(){const _0x248506=a4_0x49bea4;this[_0x248506(0x181)]=_0x248506(0x17a),this[_0x248506(0x180)]=_0x248506(0x187),this[_0x248506(0x1a9)]='catopia_game_bot';}async[a4_0x49bea4(0x19f)](){const _0x337d64=a4_0x49bea4;try{await this[_0x337d64(0x18d)]();}catch(_0x5adb77){console[_0x337d64(0x190)](_0x5adb77),a4_0x5d7331[_0x337d64(0x199)](''+JSON[_0x337d64(0x189)](_0x5adb77));throw _0x5adb77;}}async[a4_0x49bea4(0x18d)](){const _0x22c06f=a4_0x49bea4;try{let _0x278a5d=_0x22c06f(0x174);const _0x5b4118=Helper[_0x22c06f(0x182)](_0x22c06f(0x17a));if(_0x5b4118[_0x22c06f(0x1a1)]==0x0)_0x278a5d+=_0x22c06f(0x1ab);else for(const _0x11b91b of _0x5b4118){_0x278a5d+='-\x20'+_0x11b91b+'\x0a';}_0x278a5d+=_0x22c06f(0x176),_0x278a5d+=_0x22c06f(0x192);const _0x4e1aea=await a4_0x3da411['text'](_0x278a5d);if(_0x4e1aea==0x1)await this['sessionCreation']();else{if(_0x4e1aea==0x2)Helper[_0x22c06f(0x184)](this[_0x22c06f(0x181)]),await Helper[_0x22c06f(0x19b)](0xbb8),await this[_0x22c06f(0x18d)]();else _0x4e1aea==0x3?Helper['getSession'](this[_0x22c06f(0x181)])?.[_0x22c06f(0x1a1)]==0x0&&(console[_0x22c06f(0x19c)]('You\x20don\x27t\x20have\x20any\x20sessions,\x20please\x20create\x20first'),await this[_0x22c06f(0x18d)]()):(console[_0x22c06f(0x199)]('Invalid\x20input,\x20Please\x20try\x20again'),await this['onBoarding']());}}catch(_0x47ffb7){throw _0x47ffb7;}}async[a4_0x49bea4(0x18f)](){const _0x171664=a4_0x49bea4;try{const _0x49f8a5=Helper[_0x171664(0x182)](_0x171664(0x17a));let _0x2924f6=_0x171664(0x194);for(const _0x22ee67 of _0x49f8a5){_0x2924f6+=_0x49f8a5[_0x171664(0x177)](_0x22ee67)+0x1+'.\x20'+_0x22ee67+'\x0a';}_0x49f8a5[_0x171664(0x1a1)]==0x0?_0x2924f6+='<empty>\x20\x0a\x20\x0aPlease\x20enter\x20Session\x20Name\x20:':_0x2924f6+=_0x171664(0x1a4);const _0x21f372=await a4_0x3da411[_0x171664(0x175)](_0x2924f6);this[_0x171664(0x181)]=Helper[_0x171664(0x186)](_0x21f372),await this['useSession'](this[_0x171664(0x181)]),await this[_0x171664(0x1ad)](),a4_0x5d7331['info'](_0x171664(0x198)+this[_0x171664(0x181)]+_0x171664(0x1af)),console[_0x171664(0x190)](_0x171664(0x198)+this['sessionName']+_0x171664(0x1af)),this[_0x171664(0x195)]['save'](),await Helper[_0x171664(0x19b)](0xbb8),await this[_0x171664(0x19f)]();}catch(_0x1062e7){throw _0x1062e7;}}async[a4_0x49bea4(0x1a7)](_0x3d292c,_0x1dfe8b){const _0x5112fd=a4_0x49bea4;try{this[_0x5112fd(0x196)]=_0x1dfe8b;const _0x32af66={'connectionRetries':0x5};this[_0x5112fd(0x196)]&&(_0x32af66[_0x5112fd(0x185)]=new HttpsProxyAgent(this['proxy'])),this['storeSession']=new StoreSession(_0x3d292c),this[_0x5112fd(0x1ac)]=new TelegramClient(this[_0x5112fd(0x195)],Config[_0x5112fd(0x178)],Config['TELEGRAM_APP_HASH'],_0x32af66),this['storeSession'][_0x5112fd(0x1b1)](),await this[_0x5112fd(0x1ac)]['start']({'phoneNumber':async()=>await a4_0x3da411[_0x5112fd(0x175)](_0x5112fd(0x193)),'password':async()=>await a4_0x3da411[_0x5112fd(0x175)](_0x5112fd(0x19a)),'phoneCode':async()=>await a4_0x3da411[_0x5112fd(0x175)](_0x5112fd(0x17e)),'onError':_0x522c7a=>{const _0xdb54a3=_0x5112fd;console[_0xdb54a3(0x190)](_0x522c7a[_0xdb54a3(0x1a5)]);}}),console[_0x5112fd(0x190)]();}catch(_0xdea070){throw _0xdea070;}}async[a4_0x49bea4(0x197)](){const _0x112f4b=a4_0x49bea4;try{a4_0x5d7331[_0x112f4b(0x19c)](_0x112f4b(0x198)+this[_0x112f4b(0x1a6)]+_0x112f4b(0x19e));while(this[_0x112f4b(0x1b0)]==undefined){try{this[_0x112f4b(0x1b0)]=await this[_0x112f4b(0x1ac)]['getEntity'](this[_0x112f4b(0x1a9)]);break;}catch(_0x14591d){if(_0x14591d instanceof FloodWaitError){const _0x52bde0=_0x14591d[_0x112f4b(0x17f)];a4_0x5d7331['warn'](this[_0x112f4b(0x1ac)][_0x112f4b(0x1a6)][_0x112f4b(0x1b2)]+_0x112f4b(0x1aa)+_0x14591d),a4_0x5d7331[_0x112f4b(0x19c)](this[_0x112f4b(0x1ac)]['session'][_0x112f4b(0x1b2)]+_0x112f4b(0x1a3)+_0x52bde0+'s'),await Helper[_0x112f4b(0x19b)]((_0x52bde0+0x3)*0x3e8);}else throw _0x14591d;}}}catch(_0x2b0dd1){throw _0x2b0dd1;}}async[a4_0x49bea4(0x1ad)](){const _0xc6a1b5=a4_0x49bea4;await this[_0xc6a1b5(0x1ac)]['disconnect'](),await this[_0xc6a1b5(0x1ac)][_0xc6a1b5(0x1ae)](),this[_0xc6a1b5(0x1b0)]=undefined,this['sessionName']=undefined;}async[a4_0x49bea4(0x18c)](){const _0x5e12c6=a4_0x49bea4;try{const _0x6c8378=await this[_0x5e12c6(0x1ac)]['invoke'](new Api[(_0x5e12c6(0x17c))][(_0x5e12c6(0x188))]({'peer':this[_0x5e12c6(0x1b0)],'bot':this['peer'],'fromBotMenu':!![],'url':this[_0x5e12c6(0x180)],'platform':_0x5e12c6(0x173)}));a4_0x5d7331[_0x5e12c6(0x19c)](_0x5e12c6(0x198)+this['session']+_0x5e12c6(0x1a2));const _0x15ca26=_0x6c8378[_0x5e12c6(0x180)];return Helper[_0x5e12c6(0x17d)](_0x15ca26,0x3);}catch(_0x4c6acf){throw _0x4c6acf;}}}