const a4_0x308832=a4_0x59a9;(function(_0xfcf582,_0x10d72b){const _0x1620fb=a4_0x59a9,_0x5169ea=_0xfcf582();while(!![]){try{const _0x5ab7e9=parseInt(_0x1620fb(0x1e4))/0x1*(-parseInt(_0x1620fb(0x1f1))/0x2)+parseInt(_0x1620fb(0x203))/0x3+parseInt(_0x1620fb(0x1ef))/0x4+parseInt(_0x1620fb(0x207))/0x5+-parseInt(_0x1620fb(0x1e2))/0x6*(parseInt(_0x1620fb(0x1f9))/0x7)+parseInt(_0x1620fb(0x213))/0x8*(parseInt(_0x1620fb(0x1dd))/0x9)+-parseInt(_0x1620fb(0x1de))/0xa*(parseInt(_0x1620fb(0x215))/0xb);if(_0x5ab7e9===_0x10d72b)break;else _0x5169ea['push'](_0x5169ea['shift']());}catch(_0x13dd27){_0x5169ea['push'](_0x5169ea['shift']());}}}(a4_0x1c4e,0x2ee94));import a4_0x2e9c25 from'input';import{Helper}from'../utils/helper.js';import{Api,TelegramClient}from'telegram';import{StoreSession}from'telegram/sessions/StoreSession.js';function a4_0x1c4e(){const _0x5e44e0=['resolvePeer','sessions','indexOf','length','\x20|\x20Sleep\x20','<empty>\x20\x0a\x20\x0aPlease\x20enter\x20Session\x20Name\x20:','destroy','messages','756588ICAMFO','storeSession','121812enhnRr','seconds','\x20-\x20Created','text','serverAddress','Session\x20','Welcome\x20to\x20Cowtopia\x20Bot\x20\x0aBy\x20:\x20Widiskel\x20\x0a\x20\x0aLets\x20getting\x20started.\x0a\x0aYour\x20Session\x20List:\x0a','invoke','2982PzMshh','disconnect','https://cowtopia-prod.tonfarmer.com/','start','\x20|\x20FloodWait\x20','sessionName','onBoarding','\x20-\x20Resolving\x20Peer','TELEGRAM_APP_ID','url','807759eWRKXi','error','\x0a\x20\x0a1.\x20Create\x20Session.\x20\x0a2.\x20Reset\x20Sessions\x20\x0a3.\x20Start\x20Bot\x20\x0a\x20\x0aInput\x20your\x20choice\x20:','peer','1476335bjmPPc','info','Your\x20session\x20List\x20:\x0a\x20\x0a','catopia_game_bot','android','warn','init','agent','Enter\x20your\x20Telegram\x20Verification\x20Code\x20?','log','proxy','delay','3040744xcXqXr','stringify','8614672eNGjXP','\x0a\x20\x0aPlease\x20Choose\x20a\x20menu:\x20\x0a','sessionCreation','getSession','\x0a\x20\x0aYou\x20alreay\x20have\x20sessions,\x20cancel(CTRL+C)\x20or\x20create\x20new\x20Session\x20:','useSession','9mUAjoJ','10YPIJAg','getTelegramQuery','resetSession','client','1374zkUVOX','message','1xeQlVX','You\x20don\x27t\x20have\x20any\x20sessions,\x20please\x20create\x20first','session'];a4_0x1c4e=function(){return _0x5e44e0;};return a4_0x1c4e();}import a4_0xd30cb8 from'../utils/logger.js';import{FloodWaitError}from'telegram/errors/RPCErrorList.js';import{Config}from'../../config/config.js';import{HttpsProxyAgent}from'https-proxy-agent';function a4_0x59a9(_0x161d19,_0x484a5f){const _0x1c4e46=a4_0x1c4e();return a4_0x59a9=function(_0x59a940,_0x221f45){_0x59a940=_0x59a940-0x1dc;let _0x893ae4=_0x1c4e46[_0x59a940];return _0x893ae4;},a4_0x59a9(_0x161d19,_0x484a5f);}export class Telegram{[a4_0x308832(0x1f0)];constructor(){const _0x4e705d=a4_0x308832;this[_0x4e705d(0x1fe)]=_0x4e705d(0x1e8),this[_0x4e705d(0x202)]=_0x4e705d(0x1fb),this['bot']=_0x4e705d(0x20a);}async[a4_0x308832(0x20d)](){const _0x5a578=a4_0x308832;try{await this[_0x5a578(0x1ff)]();}catch(_0x582c83){console[_0x5a578(0x210)](_0x582c83),a4_0xd30cb8[_0x5a578(0x204)](''+JSON[_0x5a578(0x214)](_0x582c83));throw _0x582c83;}}async['onBoarding'](){const _0x2bf875=a4_0x308832;try{let _0x36ef28=_0x2bf875(0x1f7);const _0x454ee6=Helper[_0x2bf875(0x218)]('sessions');if(_0x454ee6['length']==0x0)_0x36ef28+='<empty>\x20\x0a\x20\x0aPlease\x20enter\x20Session\x20Name\x20:';else for(const _0x52137e of _0x454ee6){_0x36ef28+='-\x20'+_0x52137e+'\x0a';}_0x36ef28+=_0x2bf875(0x216),_0x36ef28+=_0x2bf875(0x205);const _0x341553=await a4_0x2e9c25['text'](_0x36ef28);if(_0x341553==0x1)await this['sessionCreation']();else{if(_0x341553==0x2)Helper[_0x2bf875(0x1e0)](this[_0x2bf875(0x1fe)]),await Helper[_0x2bf875(0x212)](0xbb8),await this[_0x2bf875(0x1ff)]();else _0x341553==0x3?Helper[_0x2bf875(0x218)](this[_0x2bf875(0x1fe)])?.['length']==0x0&&(console[_0x2bf875(0x208)](_0x2bf875(0x1e5)),await this['onBoarding']()):(console[_0x2bf875(0x204)]('Invalid\x20input,\x20Please\x20try\x20again'),await this['onBoarding']());}}catch(_0x5646d4){throw _0x5646d4;}}async[a4_0x308832(0x217)](){const _0xc52365=a4_0x308832;try{const _0x4e5ec9=Helper[_0xc52365(0x218)](_0xc52365(0x1e8));let _0x101141=_0xc52365(0x209);for(const _0x3417b5 of _0x4e5ec9){_0x101141+=_0x4e5ec9[_0xc52365(0x1e9)](_0x3417b5)+0x1+'.\x20'+_0x3417b5+'\x0a';}_0x4e5ec9[_0xc52365(0x1ea)]==0x0?_0x101141+=_0xc52365(0x1ec):_0x101141+=_0xc52365(0x219);const _0x4518ef=await a4_0x2e9c25[_0xc52365(0x1f4)](_0x101141);this[_0xc52365(0x1fe)]=Helper['createDir'](_0x4518ef),await this[_0xc52365(0x1dc)](this['sessionName']),await this[_0xc52365(0x1fa)](),a4_0xd30cb8['info'](_0xc52365(0x1f6)+this[_0xc52365(0x1fe)]+_0xc52365(0x1f3)),console[_0xc52365(0x210)](_0xc52365(0x1f6)+this[_0xc52365(0x1fe)]+_0xc52365(0x1f3)),this[_0xc52365(0x1f0)]['save'](),await Helper[_0xc52365(0x212)](0xbb8),await this[_0xc52365(0x20d)]();}catch(_0x304806){throw _0x304806;}}async[a4_0x308832(0x1dc)](_0x32e531,_0x49d8bc){const _0x473310=a4_0x308832;try{this['proxy']=_0x49d8bc;const _0x5ad325={'connectionRetries':0x5};this[_0x473310(0x211)]&&(_0x5ad325[_0x473310(0x20e)]=new HttpsProxyAgent(this[_0x473310(0x211)])),this[_0x473310(0x1f0)]=new StoreSession(_0x32e531),this[_0x473310(0x1e1)]=new TelegramClient(this[_0x473310(0x1f0)],Config[_0x473310(0x201)],Config['TELEGRAM_APP_HASH'],_0x5ad325),this[_0x473310(0x1f0)]['save'](),await this[_0x473310(0x1e1)][_0x473310(0x1fc)]({'phoneNumber':async()=>await a4_0x2e9c25[_0x473310(0x1f4)]('Enter\x20your\x20Telegram\x20Phone\x20Number\x20?'),'password':async()=>await a4_0x2e9c25[_0x473310(0x1f4)]('Enter\x20your\x20Telegram\x20Password?'),'phoneCode':async()=>await a4_0x2e9c25[_0x473310(0x1f4)](_0x473310(0x20f)),'onError':_0x290d7c=>{const _0x45b4b9=_0x473310;console[_0x45b4b9(0x210)](_0x290d7c[_0x45b4b9(0x1e3)]);}}),console[_0x473310(0x210)]();}catch(_0x45fbfa){throw _0x45fbfa;}}async[a4_0x308832(0x1e7)](){const _0x2c2fe7=a4_0x308832;try{a4_0xd30cb8[_0x2c2fe7(0x208)]('Session\x20'+this['session']+_0x2c2fe7(0x200));while(this[_0x2c2fe7(0x206)]==undefined){try{this[_0x2c2fe7(0x206)]=await this['client']['getEntity'](this['bot']);break;}catch(_0x3a2789){if(_0x3a2789 instanceof FloodWaitError){const _0x39494f=_0x3a2789[_0x2c2fe7(0x1f2)];a4_0xd30cb8[_0x2c2fe7(0x20c)](this[_0x2c2fe7(0x1e1)][_0x2c2fe7(0x1e6)][_0x2c2fe7(0x1f5)]+_0x2c2fe7(0x1fd)+_0x3a2789),a4_0xd30cb8['info'](this[_0x2c2fe7(0x1e1)][_0x2c2fe7(0x1e6)][_0x2c2fe7(0x1f5)]+_0x2c2fe7(0x1eb)+_0x39494f+'s'),await Helper[_0x2c2fe7(0x212)]((_0x39494f+0x3)*0x3e8);}else throw _0x3a2789;}}}catch(_0x240a7e){throw _0x240a7e;}}async[a4_0x308832(0x1fa)](){const _0x5a9fb7=a4_0x308832;await this[_0x5a9fb7(0x1e1)]['disconnect'](),await this[_0x5a9fb7(0x1e1)][_0x5a9fb7(0x1ed)](),this['peer']=undefined,this['sessionName']=undefined;}async['initWebView'](){const _0x4377eb=a4_0x308832;try{const _0x5f225f=await this['client'][_0x4377eb(0x1f8)](new Api[(_0x4377eb(0x1ee))]['RequestWebView']({'peer':this['peer'],'bot':this[_0x4377eb(0x206)],'fromBotMenu':!![],'url':this['url'],'platform':_0x4377eb(0x20b)}));a4_0xd30cb8[_0x4377eb(0x208)](_0x4377eb(0x1f6)+this[_0x4377eb(0x1e6)]+'\x20-\x20Webview\x20Connected');const _0x15ee34=_0x5f225f['url'];return Helper[_0x4377eb(0x1df)](_0x15ee34,0x3);}catch(_0x3b397c){throw _0x3b397c;}}}