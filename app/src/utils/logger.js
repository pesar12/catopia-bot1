const a6_0x4367de=a6_0x1fd9;(function(_0x505e4c,_0x501cdb){const _0x4de247=a6_0x1fd9,_0x2c898e=_0x505e4c();while(!![]){try{const _0x23e793=parseInt(_0x4de247(0x1a2))/0x1+-parseInt(_0x4de247(0x1a9))/0x2+-parseInt(_0x4de247(0x1a0))/0x3*(parseInt(_0x4de247(0x1ac))/0x4)+parseInt(_0x4de247(0x1a4))/0x5*(parseInt(_0x4de247(0x1a8))/0x6)+-parseInt(_0x4de247(0x1a3))/0x7*(parseInt(_0x4de247(0x1b0))/0x8)+parseInt(_0x4de247(0x1a5))/0x9*(-parseInt(_0x4de247(0x1ab))/0xa)+-parseInt(_0x4de247(0x1b3))/0xb*(-parseInt(_0x4de247(0x1af))/0xc);if(_0x23e793===_0x501cdb)break;else _0x2c898e['push'](_0x2c898e['shift']());}catch(_0x16943f){_0x2c898e['push'](_0x2c898e['shift']());}}}(a6_0x58db,0xb14e0));import{createLogger,format,transports}from'winston';import a6_0x3b7704 from'fs';const {combine,timestamp,printf,colorize}=format,customFormat=printf(({level:_0xa1e042,message:_0x4c8913,timestamp:_0x14598c})=>{return _0x14598c+'\x20['+_0xa1e042+']:\x20'+_0x4c8913;});function a6_0x1fd9(_0x15effa,_0x3cf990){const _0x58db3d=a6_0x58db();return a6_0x1fd9=function(_0x1fd99e,_0xe672f4){_0x1fd99e=_0x1fd99e-0x19d;let _0x5c9d44=_0x58db3d[_0x1fd99e];return _0x5c9d44;},a6_0x1fd9(_0x15effa,_0x3cf990);}class Logger{constructor(){const _0x18a519=a6_0x1fd9;this[_0x18a519(0x1a1)]=createLogger({'level':_0x18a519(0x1a6),'format':combine(timestamp({'format':_0x18a519(0x19e)}),colorize(),customFormat),'transports':[new transports[(_0x18a519(0x1b2))]({'filename':_0x18a519(0x1aa)})],'exceptionHandlers':[new transports[(_0x18a519(0x1b2))]({'filename':'log/app.log'})],'rejectionHandlers':[new transports['File']({'filename':_0x18a519(0x1aa)})]});}[a6_0x4367de(0x1a7)](_0x2ff856){const _0x14fd7a=a6_0x4367de;this[_0x14fd7a(0x1a1)][_0x14fd7a(0x1a7)](_0x2ff856);}[a6_0x4367de(0x19f)](_0x7e6563){const _0x6e6376=a6_0x4367de;this[_0x6e6376(0x1a1)]['warn'](_0x7e6563);}['error'](_0x427e89){this['logger']['error'](_0x427e89);}[a6_0x4367de(0x1a6)](_0x46d511){const _0x3c194c=a6_0x4367de;this[_0x3c194c(0x1a1)]['debug'](_0x46d511);}[a6_0x4367de(0x1b1)](_0x144f75){const _0x53e3bc=a6_0x4367de;this[_0x53e3bc(0x1a1)][_0x53e3bc(0x19d)]=_0x144f75;}[a6_0x4367de(0x1b6)](){const _0x5a65cb=a6_0x4367de;a6_0x3b7704[_0x5a65cb(0x1ad)](_0x5a65cb(0x1aa),0x0,_0x134f37=>{const _0x44a811=_0x5a65cb;_0x134f37?this['logger']['error'](_0x44a811(0x1ae)+_0x134f37[_0x44a811(0x1b5)]):this[_0x44a811(0x1a1)][_0x44a811(0x1a7)](_0x44a811(0x1b4));});}}function a6_0x58db(){const _0x4f65fc=['964FiDXMX','truncate','Failed\x20to\x20clear\x20the\x20log\x20file:\x20','296916yPDDIU','64DZBQjo','setLevel','File','858XmvQkM','Log\x20file\x20cleared','message','clear','level','YYYY-MM-DD\x20HH:mm:ss','warn','10095OGkovc','logger','1113420UUYICe','158116uChrcg','179160yobUTf','11441277SJVyzI','debug','info','54kCXYbV','753400RnQZzV','log/app.log','10nABCJl'];a6_0x58db=function(){return _0x4f65fc;};return a6_0x58db();}export default new Logger();