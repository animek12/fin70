/*[[Ini untuk setting Bot
Untuk gambar background menu 
ada 
di plugins menu
untuk lainya saran jangan 
di ubah bre nanti eror]]*/

/*global owner*/
global.owner = ['62895604670507']  
global.mods = ['62895604670507'] 
global.prems = ['62895604670507']
/*Nomor Owner & payment*/
global.nameowner = 'Zenss'
global.numberowner = '62895604670507' 
global.mail = 'itszenoxy@gmail.com' //enter your email 🗿
global.dana = '62895604670507'
global.pulsa = '62895604670507'
global.gopay = '62895604670507'
/*Nama Bot & Grouplink*/
global.namebot = '𝑺𝒉𝒆𝒏𝒉𝒆 𝑩𝒐𝒕𝒛'
global.gc = 'https://chat.whatsapp.com/LJsK2qecGOeKCfc97giQFB'
global.web = 'https://github.com/RaaaGH'
global.instagram = 'https://instagram.com/inizenscuy'
/*global wm*/
global.lolkey = 'rey2k22'
global.zenzkey = 'BagasPrdn'
global.wm = '© 𝑺𝒉𝒆𝒏𝒉𝒆'
global.watermark = wm
global.wm2 = '⫹⫺ 𝑺𝒉𝒆𝒏𝒉𝒆 𝑩𝒐𝒕𝒛'
global.wm3 = '© 𝑺𝒉𝒆𝒏𝒉𝒆-𝑴𝑫'
global.wm4 = '© 𝑺𝒉𝒆𝒏𝒉𝒆 By ZenssCuyy'
global.fla = 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text='
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.benar = 'Benar ✅\n'
global.salah = 'Salah ❌\n'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = 'Made with'
global.author = 'Bot WhatsApp\n𝑺𝒉𝒆𝒏𝒉𝒆-𝑴𝑫'
/*Rest api setting*/
global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz',
  dzx: 'https://api.dhamzxploit.my.id',
  zeks: 'https://api.zeks.xyz',
  zekais: 'http://zekais.com',
  lolhuman: 'https://api.lolhuman.xyz',
  tio: 'http://api.tiodevhost.my.id', 
  popcat: 'https://api.popcat.xyz',
  rey: 'https://sekha.me'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://sekha.me': 'apirey',
  'https://api.xteam.xyz': 'd37372311698ed1d',
  'https://pencarikode.xyz': 'pais', 
  'https://zekais.com': 'apikeymu',
  'https://api.lolhuman.xyz': 'Deffbotz',
}

/*Setting Rpg*/
global.multiplier = 45
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      petFood: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

/*Jangan merubah bagian ini!*/
let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})