const a4_0xf7f585=a4_0x3b85;(function(_0x163315,_0x4e2aeb){const _0x55141a=a4_0x3b85,_0x1bae8e=_0x163315();while(!![]){try{const _0x7e7b32=parseInt(_0x55141a(0x14b))/0x1+parseInt(_0x55141a(0x12c))/0x2*(-parseInt(_0x55141a(0x162))/0x3)+parseInt(_0x55141a(0x15f))/0x4+-parseInt(_0x55141a(0x142))/0x5*(-parseInt(_0x55141a(0x132))/0x6)+parseInt(_0x55141a(0x137))/0x7*(-parseInt(_0x55141a(0x158))/0x8)+-parseInt(_0x55141a(0x141))/0x9+parseInt(_0x55141a(0x140))/0xa;if(_0x7e7b32===_0x4e2aeb)break;else _0x1bae8e['push'](_0x1bae8e['shift']());}catch(_0x5ef6a9){_0x1bae8e['push'](_0x1bae8e['shift']());}}}(a4_0x4c9e,0x1ccab));import a4_0x29ada2 from'input';import{Helper}from'../utils/helper.js';import{Api,TelegramClient}from'telegram';import{StoreSession}from'telegram/sessions/StoreSession.js';import a4_0x72d047 from'../utils/logger.js';import{FloodWaitError}from'telegram/errors/RPCErrorList.js';function a4_0x3b85(_0x595e63,_0x4fb910){const _0x4c9e7f=a4_0x4c9e();return a4_0x3b85=function(_0x3b8517,_0x59afa5){_0x3b8517=_0x3b8517-0x12a;let _0x164463=_0x4c9e7f[_0x3b8517];return _0x164463;},a4_0x3b85(_0x595e63,_0x4fb910);}import{Config}from'../../config/config.js';import{HttpsProxyAgent}from'https-proxy-agent';export class Telegram{[a4_0xf7f585(0x12e)];constructor(){const _0x228e92=a4_0xf7f585;this[_0x228e92(0x12b)]=_0x228e92(0x159),this[_0x228e92(0x145)]='https://cowtopia-prod.tonfarmer.com/',this[_0x228e92(0x12f)]='catopia_game_bot';}async['init'](){const _0x3800d4=a4_0xf7f585;try{await this[_0x3800d4(0x143)]();}catch(_0x4eeabb){console[_0x3800d4(0x14e)](_0x4eeabb),a4_0x72d047[_0x3800d4(0x138)](''+JSON[_0x3800d4(0x133)](_0x4eeabb));throw _0x4eeabb;}}async[a4_0xf7f585(0x143)](){const _0x471102=a4_0xf7f585;try{let _0x52bd11='Welcome\x20to\x20Cowtopia\x20Bot\x20\x0aBy\x20:\x20Widiskel\x20\x0a\x20\x0aLets\x20getting\x20started.\x0a\x0aYour\x20Session\x20List:\x0a';const _0x437d3f=Helper[_0x471102(0x148)](_0x471102(0x159));if(_0x437d3f['length']==0x0)_0x52bd11+='<empty>\x20\x0a\x20\x0aPlease\x20enter\x20Session\x20Name\x20:';else for(const _0x12d5fe of _0x437d3f){_0x52bd11+='-\x20'+_0x12d5fe+'\x0a';}_0x52bd11+='\x0a\x20\x0aPlease\x20Choose\x20a\x20menu:\x20\x0a',_0x52bd11+='\x0a\x20\x0a1.\x20Create\x20Session.\x20\x0a2.\x20Reset\x20Sessions\x20\x0a3.\x20Start\x20Bot\x20\x0a\x20\x0aInput\x20your\x20choice\x20:';const _0x5cc4b6=await a4_0x29ada2[_0x471102(0x160)](_0x52bd11);if(_0x5cc4b6==0x1)await this[_0x471102(0x144)]();else{if(_0x5cc4b6==0x2)Helper['resetSession'](this[_0x471102(0x12b)]),await Helper['delay'](0xbb8),await this[_0x471102(0x143)]();else _0x5cc4b6==0x3?Helper[_0x471102(0x148)](this[_0x471102(0x12b)])?.[_0x471102(0x165)]==0x0&&(console[_0x471102(0x150)](_0x471102(0x164)),await this[_0x471102(0x143)]()):(console[_0x471102(0x138)](_0x471102(0x14a)),await this[_0x471102(0x143)]());}}catch(_0x21698f){throw _0x21698f;}}async[a4_0xf7f585(0x144)](){const _0x23c993=a4_0xf7f585;try{const _0x54cdd9=Helper[_0x23c993(0x148)](_0x23c993(0x159));let _0x55db28='Your\x20session\x20List\x20:\x0a\x20\x0a';for(const _0x10c950 of _0x54cdd9){_0x55db28+=_0x54cdd9[_0x23c993(0x161)](_0x10c950)+0x1+'.\x20'+_0x10c950+'\x0a';}_0x54cdd9[_0x23c993(0x165)]==0x0?_0x55db28+=_0x23c993(0x13f):_0x55db28+=_0x23c993(0x163);const _0x373384=await a4_0x29ada2['text'](_0x55db28);this[_0x23c993(0x12b)]=Helper['createDir'](_0x373384),await this[_0x23c993(0x134)](this['sessionName']),await this['disconnect'](),a4_0x72d047['info'](_0x23c993(0x13e)+this[_0x23c993(0x12b)]+_0x23c993(0x131)),console['log']('Session\x20'+this[_0x23c993(0x12b)]+'\x20-\x20Created'),this['storeSession'][_0x23c993(0x151)](),await Helper['delay'](0xbb8),await this[_0x23c993(0x154)]();}catch(_0x5d5efb){throw _0x5d5efb;}}async[a4_0xf7f585(0x134)](_0x250dea,_0x30fda8){const _0x1be699=a4_0xf7f585;try{this[_0x1be699(0x153)]=_0x30fda8;const _0x6a9067={'connectionRetries':0x5};this[_0x1be699(0x153)]&&(_0x6a9067[_0x1be699(0x15e)]=new HttpsProxyAgent(this[_0x1be699(0x153)])),this[_0x1be699(0x12e)]=new StoreSession(_0x250dea),this[_0x1be699(0x15c)]=new TelegramClient(this[_0x1be699(0x12e)],Config['TELEGRAM_APP_ID'],Config[_0x1be699(0x15b)],_0x6a9067),this[_0x1be699(0x12e)][_0x1be699(0x151)](),await this['client'][_0x1be699(0x152)]({'phoneNumber':async()=>await a4_0x29ada2[_0x1be699(0x160)](_0x1be699(0x135)),'password':async()=>await a4_0x29ada2['text'](_0x1be699(0x14c)),'phoneCode':async()=>await a4_0x29ada2[_0x1be699(0x160)](_0x1be699(0x13c)),'onError':_0x1c63f6=>{const _0x3235c6=_0x1be699;console[_0x3235c6(0x14e)](_0x1c63f6[_0x3235c6(0x15d)]);}}),console[_0x1be699(0x14e)]();}catch(_0x127c7b){throw _0x127c7b;}}async[a4_0xf7f585(0x14f)](){const _0x2838ca=a4_0xf7f585;try{a4_0x72d047['info'](_0x2838ca(0x13e)+this[_0x2838ca(0x156)]+'\x20-\x20Resolving\x20Peer');while(this[_0x2838ca(0x157)]==undefined){try{this[_0x2838ca(0x157)]=await this['client'][_0x2838ca(0x146)](this[_0x2838ca(0x12f)]);break;}catch(_0x109f7e){if(_0x109f7e instanceof FloodWaitError){const _0x61dd9e=_0x109f7e[_0x2838ca(0x149)];a4_0x72d047[_0x2838ca(0x13d)](this[_0x2838ca(0x15c)][_0x2838ca(0x156)][_0x2838ca(0x155)]+_0x2838ca(0x130)+_0x109f7e),a4_0x72d047[_0x2838ca(0x150)](this['client'][_0x2838ca(0x156)][_0x2838ca(0x155)]+_0x2838ca(0x15a)+_0x61dd9e+'s'),await Helper[_0x2838ca(0x147)]((_0x61dd9e+0x3)*0x3e8);}else throw _0x109f7e;}}}catch(_0x364698){throw _0x364698;}}async[a4_0xf7f585(0x12d)](){const _0x40000b=a4_0xf7f585;await this['client'][_0x40000b(0x12d)](),await this[_0x40000b(0x15c)][_0x40000b(0x13b)](),this['peer']=undefined,this[_0x40000b(0x12b)]=undefined;}async[a4_0xf7f585(0x139)](){const _0x4ee980=a4_0xf7f585;try{const _0x20f717=await this[_0x4ee980(0x15c)][_0x4ee980(0x14d)](new Api[(_0x4ee980(0x12a))][(_0x4ee980(0x13a))]({'peer':this[_0x4ee980(0x157)],'bot':this['peer'],'fromBotMenu':!![],'url':this['url'],'platform':'android'}));a4_0x72d047['info'](_0x4ee980(0x13e)+this['session']+'\x20-\x20Webview\x20Connected');const _0x397018=_0x20f717['url'];return Helper[_0x4ee980(0x136)](_0x397018,0x3);}catch(_0x3f8138){throw _0x3f8138;}}}function a4_0x4c9e(){const _0x2f787d=['\x20|\x20FloodWait\x20','\x20-\x20Created','12paCEAV','stringify','useSession','Enter\x20your\x20Telegram\x20Phone\x20Number\x20?','getTelegramQuery','447531MUWeue','error','initWebView','RequestWebView','destroy','Enter\x20your\x20Telegram\x20Verification\x20Code\x20?','warn','Session\x20','<empty>\x20\x0a\x20\x0aPlease\x20enter\x20Session\x20Name\x20:','2688500HtWMwl','369720SZIcQp','13285VJkjva','onBoarding','sessionCreation','url','getEntity','delay','getSession','seconds','Invalid\x20input,\x20Please\x20try\x20again','66877PTXPrw','Enter\x20your\x20Telegram\x20Password?','invoke','log','resolvePeer','info','save','start','proxy','init','serverAddress','session','peer','8TOijaY','sessions','\x20|\x20Sleep\x20','TELEGRAM_APP_HASH','client','message','agent','419608WYhnej','text','indexOf','13653pTGgib','\x0a\x20\x0aYou\x20alreay\x20have\x20sessions,\x20cancel(CTRL+C)\x20or\x20create\x20new\x20Session\x20:','You\x20don\x27t\x20have\x20any\x20sessions,\x20please\x20create\x20first','length','messages','sessionName','98XIrPqL','disconnect','storeSession','bot'];a4_0x4c9e=function(){return _0x2f787d;};return a4_0x4c9e();}