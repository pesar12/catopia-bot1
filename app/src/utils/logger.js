function a6_0x2975(){const _0x57cca3=['logger','8BXSzZS','message','truncate','error','5Axgvrg','warn','File','2591001ZEEcyL','5645524DAGONO','1485utTXYr','debug','clear','678936bDhxOF','340rCJPZM','Log\x20file\x20cleared','7509882vTQEtV','info','9127536OPgiTM',']:\x20','log/app.log','38559RbJeMH'];a6_0x2975=function(){return _0x57cca3;};return a6_0x2975();}const a6_0xc9d8c0=a6_0x272c;function a6_0x272c(_0x5a1d8b,_0x3f4512){const _0x297598=a6_0x2975();return a6_0x272c=function(_0x272ce5,_0x1436d4){_0x272ce5=_0x272ce5-0x16a;let _0xf0da29=_0x297598[_0x272ce5];return _0xf0da29;},a6_0x272c(_0x5a1d8b,_0x3f4512);}(function(_0x29f538,_0x861e8a){const _0x23ca45=a6_0x272c,_0x22d7fd=_0x29f538();while(!![]){try{const _0x1a841e=parseInt(_0x23ca45(0x17a))/0x1*(-parseInt(_0x23ca45(0x17c))/0x2)+-parseInt(_0x23ca45(0x172))/0x3+parseInt(_0x23ca45(0x16e))/0x4+parseInt(_0x23ca45(0x16a))/0x5*(parseInt(_0x23ca45(0x175))/0x6)+-parseInt(_0x23ca45(0x16d))/0x7+-parseInt(_0x23ca45(0x177))/0x8+parseInt(_0x23ca45(0x16f))/0x9*(parseInt(_0x23ca45(0x173))/0xa);if(_0x1a841e===_0x861e8a)break;else _0x22d7fd['push'](_0x22d7fd['shift']());}catch(_0x45141b){_0x22d7fd['push'](_0x22d7fd['shift']());}}}(a6_0x2975,0xbdb2d));import{createLogger,format,transports}from'winston';import a6_0x2bad10 from'fs';const {combine,timestamp,printf,colorize}=format,customFormat=printf(({level:_0x4c9214,message:_0x33c13e,timestamp:_0x481998})=>{const _0xcca32f=a6_0x272c;return _0x481998+'\x20['+_0x4c9214+_0xcca32f(0x178)+_0x33c13e;});class Logger{constructor(){const _0xd5f6cf=a6_0x272c;this[_0xd5f6cf(0x17b)]=createLogger({'level':_0xd5f6cf(0x170),'format':combine(timestamp({'format':'YYYY-MM-DD\x20HH:mm:ss'}),colorize(),customFormat),'transports':[new transports[(_0xd5f6cf(0x16c))]({'filename':_0xd5f6cf(0x179)})],'exceptionHandlers':[new transports['File']({'filename':_0xd5f6cf(0x179)})],'rejectionHandlers':[new transports[(_0xd5f6cf(0x16c))]({'filename':'log/app.log'})]});}[a6_0xc9d8c0(0x176)](_0x35e64c){const _0x1b81cf=a6_0xc9d8c0;this[_0x1b81cf(0x17b)]['info'](_0x35e64c);}[a6_0xc9d8c0(0x16b)](_0x575483){const _0x200647=a6_0xc9d8c0;this[_0x200647(0x17b)]['warn'](_0x575483);}[a6_0xc9d8c0(0x17f)](_0x70c02d){const _0x4c9e4c=a6_0xc9d8c0;this['logger'][_0x4c9e4c(0x17f)](_0x70c02d);}['debug'](_0x44427f){const _0xf7b3b0=a6_0xc9d8c0;this[_0xf7b3b0(0x17b)][_0xf7b3b0(0x170)](_0x44427f);}['setLevel'](_0xfa09ff){const _0x20005e=a6_0xc9d8c0;this[_0x20005e(0x17b)]['level']=_0xfa09ff;}[a6_0xc9d8c0(0x171)](){const _0x564e25=a6_0xc9d8c0;a6_0x2bad10[_0x564e25(0x17e)](_0x564e25(0x179),0x0,_0x1b79ad=>{const _0x6d3aea=_0x564e25;_0x1b79ad?this[_0x6d3aea(0x17b)][_0x6d3aea(0x17f)]('Failed\x20to\x20clear\x20the\x20log\x20file:\x20'+_0x1b79ad[_0x6d3aea(0x17d)]):this[_0x6d3aea(0x17b)]['info'](_0x6d3aea(0x174));});}}export default new Logger();