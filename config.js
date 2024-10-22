const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347016294520";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_15_27_10_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA0NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE1LFxuICAgICAgICA2MCxcbiAgICAgICAgMSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjA4LFxuICAgICAgICAyMixcbiAgICAgICAgMTksXG4gICAgICAgIDU4LFxuICAgICAgICA2NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyLFxuICAgICAgICAxMDksXG4gICAgICAgIDIwOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTE4LFxuICAgICAgICAzNSxcbiAgICAgICAgODYsXG4gICAgICAgIDg5LFxuICAgICAgICAxMCxcbiAgICAgICAgMjE4LFxuICAgICAgICAwLFxuICAgICAgICA2OCxcbiAgICAgICAgNjksXG4gICAgICAgIDEzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDMzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDUwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTM5LFxuICAgICAgICA4MixcbiAgICAgICAgMTUyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjA2LFxuICAgICAgICAzM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA3LFxuICAgICAgICA1NyxcbiAgICAgICAgMjEzLFxuICAgICAgICA0MyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxOTksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTMsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTg4LFxuICAgICAgICA5NCxcbiAgICAgICAgMTY1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDkyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY5LFxuICAgICAgICAxNyxcbiAgICAgICAgMTE1LFxuICAgICAgICA0OSxcbiAgICAgICAgMTg3LFxuICAgICAgICA5MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDUzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTA3LFxuICAgICAgICAzMixcbiAgICAgICAgMTk5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDExNSxcbiAgICAgICAgNjksXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIsXG4gICAgICAgIDEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTk4LFxuICAgICAgICA1NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTMzLFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTE0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDM3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDk5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDI2LFxuICAgICAgICA0NixcbiAgICAgICAgMjgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTA5LFxuICAgICAgICAyMyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDc1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDExOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4LFxuICAgICAgICA5NixcbiAgICAgICAgMjAsXG4gICAgICAgIDMzLFxuICAgICAgICAzMyxcbiAgICAgICAgMjIzLFxuICAgICAgICA1MCxcbiAgICAgICAgMjE3LFxuICAgICAgICA4MyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDY2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDY3LFxuICAgICAgICA5NyxcbiAgICAgICAgODUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjI1LFxuICAgICAgICA3MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAzOCxcbiAgICAgICAgMzgsXG4gICAgICAgIDc5LFxuICAgICAgICAxMixcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEwMFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDM0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDk4LFxuICAgICAgICAyNixcbiAgICAgICAgNTYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNTksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNzksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMzAsXG4gICAgICAgIDgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDM0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDc4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDk1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDg2LFxuICAgICAgICA2MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMTksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjE1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEzNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjQwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIm9WdHVPSTNJZExrMGlXWDFxalk1cTdUQnFySFpPNzYyOXBsT2U3VWZtelU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlB6bXlBY1J3UkxPVGU0aTVQMjVrU2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiYWY0M2ZhNDktZjcyNC00NGEwLTk3MzEtZjRhYzE4OTQyNDYwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3NCxcbiAgICAgIDI0NixcbiAgICAgIDE1MixcbiAgICAgIDE3MCxcbiAgICAgIDg1LFxuICAgICAgMjE0LFxuICAgICAgMjgsXG4gICAgICAyMjIsXG4gICAgICAxNzksXG4gICAgICAxODcsXG4gICAgICAxMDUsXG4gICAgICA3NyxcbiAgICAgIDEyOCxcbiAgICAgIDE2LFxuICAgICAgMjU0LFxuICAgICAgMjM2LFxuICAgICAgMTE5LFxuICAgICAgODIsXG4gICAgICAyMzksXG4gICAgICAxOTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIxLFxuICAgICAgMTE4LFxuICAgICAgMTM2LFxuICAgICAgMTM3LFxuICAgICAgODIsXG4gICAgICAyOSxcbiAgICAgIDE4LFxuICAgICAgMTA4LFxuICAgICAgMTgwLFxuICAgICAgNTIsXG4gICAgICAwLFxuICAgICAgMTUxLFxuICAgICAgMjUyLFxuICAgICAgMTMwLFxuICAgICAgMTM5LFxuICAgICAgMzUsXG4gICAgICAyNDAsXG4gICAgICA1MixcbiAgICAgIDEzNSxcbiAgICAgIDE4MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI5MlIxWFM5RFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzAxNjI5NDUyMDoxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkNvYWNoIE1lcmN5J3MgQUNBREVNWVwiLFxuICAgIFwibGlkXCI6IFwiMTA1NDY3NDM1MDMyNjA3OjEwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09mU3B2Y0hFUE9JMzdnR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiK0ZmY0t6RjgzSXYrTk0ybisra0FSb2tkN1hYbmFWQVJMdUZxZmhydWNrST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJmc2Y2bUtVV2FhWDRYRkd2eS96ZHJLUTdocjlrQUN1UW83cGxVMWNTUnlBTlo2QThLbkRNS0I3Zk1TcjdRSVl4aExSSm9Ea2NiRko1U0RPb0drdWFDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJHUkdUT2VSd2FyQUFINXkxKy9PU3VuTWFHQ2RmdkppYkQxUVhzdVhwRE5rdEJ5bE9jai9uekwrR1NESXFQQ0srblhrVVd0dFZxcWd4MklHRkdGYkFodz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDE2Mjk0NTIwOjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDY2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mjk2MTA4NzEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFOS09cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5LTy5qc29uIjogIntcImtleURhdGFcIjpcIjZKaUtUdnFmZ3k1VE11ZEF0NEpmdUd4R3B1eXIyUVFqWXM4L3V0eVJ4RWs9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjEyOTI0MjQ3MSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























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
 
