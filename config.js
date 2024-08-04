const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,2349011328586";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_24_08_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDU2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMzcsXG4gICAgICAgIDYyLFxuICAgICAgICA1MyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDY1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDcxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgOCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjAsXG4gICAgICAgIDI5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDU4LFxuICAgICAgICA5LFxuICAgICAgICAxNixcbiAgICAgICAgODgsXG4gICAgICAgIDMzLFxuICAgICAgICAxOCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjQzLFxuICAgICAgICAzNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDkzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTg2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTY1LFxuICAgICAgICAxODQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMzAsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDk0LFxuICAgICAgICAzNSxcbiAgICAgICAgMjM3LFxuICAgICAgICA1OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMDksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDc5LFxuICAgICAgICA5MCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMTksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDMwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyOSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDkxLFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTU5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDExNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTgzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTc5LFxuICAgICAgICA3NSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNDksXG4gICAgICAgIDgwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDY2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE1MixcbiAgICAgICAgNzUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDgsXG4gICAgICAgIDM2LFxuICAgICAgICA2NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDcsXG4gICAgICAgIDE0LFxuICAgICAgICA1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTMyLFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMyxcbiAgICAgICAgMTcwLFxuICAgICAgICA3MixcbiAgICAgICAgNTEsXG4gICAgICAgIDk3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI1MixcbiAgICAgICAgODcsXG4gICAgICAgIDg3LFxuICAgICAgICAxMyxcbiAgICAgICAgODQsXG4gICAgICAgIDkwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDExNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjMzLFxuICAgICAgICA2MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDQsXG4gICAgICAgIDg5LFxuICAgICAgICAxNTksXG4gICAgICAgIDg0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjAyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDMzLFxuICAgICAgICAwLFxuICAgICAgICA4MyxcbiAgICAgICAgMTEyLFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDk1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDU5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTg2LFxuICAgICAgICA2NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDYzLFxuICAgICAgICA0MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDQyLFxuICAgICAgICA0OSxcbiAgICAgICAgODQsXG4gICAgICAgIDQyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDcwLFxuICAgICAgICA3NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDgzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNjcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgOCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDg0LFxuICAgICAgICA0NixcbiAgICAgICAgMTQyLFxuICAgICAgICA1MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDI2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjMzLFxuICAgICAgICA1MCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE2LFxuICAgICAgICA0MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDg5LFxuICAgICAgICA5NCxcbiAgICAgICAgMSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTMzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNTMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidUZCRFVqYXdsemw5L3FXKzAwa0dBZ1Y0NTNWY2JUV2NaRjVTSHExd3JrTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiV1JqSGkzM1NSN0dhUnNNZV82d0lGd1wiLFxuICBcInBob25lSWRcIjogXCJjNmM4NzNmMy00NTExLTRhNWYtOWNmZC01YWI4ODFiYTdiYTBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIyLFxuICAgICAgMTIwLFxuICAgICAgMTM3LFxuICAgICAgMTQ2LFxuICAgICAgNTUsXG4gICAgICAyMTcsXG4gICAgICA4NyxcbiAgICAgIDExLFxuICAgICAgMTUzLFxuICAgICAgMzYsXG4gICAgICAxMCxcbiAgICAgIDEwMyxcbiAgICAgIDE0MCxcbiAgICAgIDk4LFxuICAgICAgMjAyLFxuICAgICAgMTc3LFxuICAgICAgNixcbiAgICAgIDE5NSxcbiAgICAgIDIxMyxcbiAgICAgIDE1N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzYsXG4gICAgICAyMTcsXG4gICAgICAxOTEsXG4gICAgICAxOTIsXG4gICAgICAxNDIsXG4gICAgICAyNDQsXG4gICAgICAzNSxcbiAgICAgIDE1MixcbiAgICAgIDUzLFxuICAgICAgNzcsXG4gICAgICA1OSxcbiAgICAgIDg1LFxuICAgICAgMjQwLFxuICAgICAgODIsXG4gICAgICAyMDksXG4gICAgICAxNCxcbiAgICAgIDEyOCxcbiAgICAgIDMwLFxuICAgICAgMjQyLFxuICAgICAgMTkxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjFHSFZONjVWXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDExMzI4NTg2OjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMTEzMzQyODUyNDI1MDI6MTBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTW5VbkljSEVNMzF2TFVHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ5K0V6UlV3OHBtVmxJbHdLeTh4bWQyaWFpbDlsSTR6aE91TW11a0IxTTFFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlA4UmdkR2VWNGN0Y3JCcUlyMENlZUIycjg2MlRESlVKTTRtTXFYNVlCY1dUeDhpOWIzZ1lVNlpmdUxtTFBUR3JYczJOZDhvWHhRbHJiOTZOam5CRkJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkdiZHk1d204QWJSUEdWa2NQTEc1OGVac2Q4Q1cwaHg2TUVXeG82cGMrT2liZVV0b0xpU3VRTnYyczVmdFdQckN2QnJzY1ZWYzFpQnA2VFpYanVTamdBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwMTEzMjg1ODY6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA4MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNzU5ODg5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTkVOXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFORU4uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJHMWF1ZmxwUmdXZ0YvaWU2eWtOVzNyQ2xBSDdJbVJidHRpZmNPS2dzQ0hnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4OTQxOTc4MzMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxNDk5NjAzNzQwOFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || " Fabian",
  ownername:process.env.OWNER_NAME|| "Ryder",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "Ryder"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
