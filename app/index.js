(function(_0xae3323,_0x3945eb){const _0x17867c=a0_0xec8a,_0x1be445=_0xae3323();while(!![]){try{const _0x42182a=-parseInt(_0x17867c(0x97))/0x1+parseInt(_0x17867c(0x8f))/0x2+-parseInt(_0x17867c(0x9b))/0x3+-parseInt(_0x17867c(0x8b))/0x4*(-parseInt(_0x17867c(0x99))/0x5)+parseInt(_0x17867c(0x7d))/0x6+parseInt(_0x17867c(0x94))/0x7+parseInt(_0x17867c(0x8e))/0x8;if(_0x42182a===_0x3945eb)break;else _0x1be445['push'](_0x1be445['shift']());}catch(_0x39f5d4){_0x1be445['push'](_0x1be445['shift']());}}}(a0_0x34d0,0xdfed2));import{Config}from'./config/config.js';import{Catopia}from'./src/core/catopia.js';function a0_0xec8a(_0x211619,_0x2d87be){const _0x34d0f7=a0_0x34d0();return a0_0xec8a=function(_0xec8ac6,_0x2bd003){_0xec8ac6=_0xec8ac6-0x6e;let _0xc7ed89=_0x34d0f7[_0xec8ac6];return _0xc7ed89;},a0_0xec8a(_0x211619,_0x2d87be);}import{Telegram}from'./src/core/telegram.js';function a0_0x34d0(){const _0x1700ab=['BOT\x20STARTED','Error\x20During\x20executing\x20bot','sessions/','stringify','Not\x20Enough\x20Coin\x20to\x20Buy\x20Grapes','claimed','disconnect','error','queryToJSON','push','Please\x20configure\x20your\x20TELEGRAM_APP_ID\x20and\x20TELEGRAM_APP_HASH\x20first','79956DPBLLI','BOT\x20STOPPED','land','5484944LsvlPP','1232378XMDDSE','getMe','Error\x20:\x20','By\x20:\x20Widiskel','\x20Processing\x20Complete','7661416IXpaIC','CATOPIA\x20BOT','all','1550924noizqI','delay','35dWzdCX','getAvailablePlant','2103282pvXlsC','then','init','session','plantSeed','log','getLands','Dont\x20forget\x20to\x20run\x20git\x20pull\x20to\x20keep\x20up\x20to\x20date','plant','info',',\x20Retrying\x20after\x2030\x20Second','length','sessions','TELEGRAM_APP_ID','clear','isCompleted','goldenCoin','claimMission','Application\x20Started','getSession','emptyLand','buyingGrapes','map','message','useSession','user','TELEGRAM_APP_HASH','3798012DcMEuV','Account\x20','clearInfo'];a0_0x34d0=function(){return _0x1700ab;};return a0_0x34d0();}import{Helper}from'./src/utils/helper.js';import a0_0x348adc from'./src/utils/logger.js';import a0_0x11be97 from'./src/utils/twist.js';async function operation(_0x16cf75,_0x56b026,_0x3a915f){const _0x36ded0=a0_0xec8a;try{const _0x3da59a=new Catopia(_0x16cf75,_0x56b026,_0x3a915f);await _0x3da59a['login'](),await _0x3da59a['getUser'](!![]),await _0x3da59a[_0x36ded0(0xa1)](!![]);_0x3da59a[_0x36ded0(0x8d)]['occupiedLand']!=0x0&&await _0x3da59a['harvestAll']();await _0x3da59a['getSeedList'](),await _0x3da59a[_0x36ded0(0x9a)](!![]);while(_0x3da59a[_0x36ded0(0xa3)]['length']<0x4){if(_0x3da59a[_0x36ded0(0x7b)][_0x36ded0(0x72)]>0x4e20)await _0x3da59a[_0x36ded0(0x77)]();else{await Helper[_0x36ded0(0x98)](0xbb8,_0x16cf75,_0x36ded0(0x84),_0x3da59a);break;}}for(const _0x59d852 of _0x3da59a['land'][_0x36ded0(0x76)]){_0x3da59a[_0x36ded0(0xa3)][_0x36ded0(0xa6)]>=0x1&&await _0x3da59a[_0x36ded0(0x9f)](_0x59d852['id']);}await _0x3da59a['getMission'](!![]);for(const _0x23e36c of _0x3da59a['missions']){_0x23e36c[_0x36ded0(0x71)]&&!_0x23e36c[_0x36ded0(0x85)]&&await _0x3da59a[_0x36ded0(0x73)](_0x23e36c);}await Helper[_0x36ded0(0x98)](0xea60*0xa,_0x16cf75,_0x36ded0(0x7e)+_0x16cf75['id']+_0x36ded0(0x93),_0x3da59a),await operation(_0x16cf75,_0x56b026,_0x3a915f);}catch(_0x44324e){a0_0x11be97['clear'](_0x16cf75),a0_0x11be97[_0x36ded0(0x7f)](),await Helper[_0x36ded0(0x98)](0x2710,_0x16cf75,_0x36ded0(0x91)+_0x44324e[_0x36ded0(0x79)]+_0x36ded0(0xa5)),await operation(_0x16cf75,_0x56b026,_0x3a915f);}}let init=![];async function startBot(){return new Promise(async(_0x131ac1,_0x3ed821)=>{const _0x4f77a4=a0_0xec8a;try{a0_0x348adc[_0x4f77a4(0xa4)](_0x4f77a4(0x80));if(Config[_0x4f77a4(0x6f)]==undefined||Config[_0x4f77a4(0x7c)]==undefined)throw new Error(_0x4f77a4(0x8a));const _0x232b90=await new Telegram();init==![]&&(await _0x232b90[_0x4f77a4(0x9d)](),init=!![]);const _0x3057b9=Helper[_0x4f77a4(0x75)](_0x4f77a4(0x6e)),_0x95858b=[];for(const _0x4e586d of _0x3057b9){await _0x232b90[_0x4f77a4(0x7a)](_0x4f77a4(0x82)+_0x4e586d),_0x232b90[_0x4f77a4(0x9e)]=_0x4e586d;const _0x5c58e2=await _0x232b90['client'][_0x4f77a4(0x90)](),_0xa3a994=await _0x232b90['resolvePeer']()[_0x4f77a4(0x9c)](async()=>{return await _0x232b90['initWebView']();})['catch'](_0x59feb7=>{throw _0x59feb7;}),_0x37ff7b=Helper[_0x4f77a4(0x88)](_0xa3a994);await _0x232b90[_0x4f77a4(0x86)](),_0x95858b[_0x4f77a4(0x89)]([_0x5c58e2,_0xa3a994,_0x37ff7b]);}const _0x4d0aa8=_0x95858b[_0x4f77a4(0x78)](async _0xa3aba2=>{await operation(_0xa3aba2[0x0],_0xa3aba2[0x1],_0xa3aba2[0x2]);});await Promise[_0x4f77a4(0x96)](_0x4d0aa8),_0x131ac1();}catch(_0x20a17a){a0_0x348adc['info'](_0x4f77a4(0x8c)),a0_0x348adc[_0x4f77a4(0x87)](JSON[_0x4f77a4(0x83)](_0x20a17a)),_0x3ed821(_0x20a17a);}});}((async()=>{const _0x27d366=a0_0xec8a;try{a0_0x348adc[_0x27d366(0x70)](),a0_0x348adc[_0x27d366(0xa4)](''),a0_0x348adc[_0x27d366(0xa4)](_0x27d366(0x74)),console[_0x27d366(0xa0)](_0x27d366(0x95)),console[_0x27d366(0xa0)](_0x27d366(0x92)),console[_0x27d366(0xa0)](_0x27d366(0xa2)),await startBot();}catch(_0xa73d9){a0_0x11be97['clear'](),a0_0x11be97[_0x27d366(0x7f)](),console[_0x27d366(0xa0)](_0x27d366(0x81),_0xa73d9),await startBot();}})());