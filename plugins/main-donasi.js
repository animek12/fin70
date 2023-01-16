let handler = async (m, { conn, usedPrefix }) => {

conn.reply(m.chat, 'Jangan lupa donasi ya pak, biar bot selalu on 24/7 buat kamu<3', m) 
      conn.relayMessage(m.chat,  {
    requestPaymentMessage: {
      currencyCodeIso4217: 'USD',
      amount1000: 25000000,
      requestFrom: m.sender,
      noteMessage: {
      extendedTextMessage: {
      text: `
╭─「 Donasi 」
│ • Tsel [6281332995497]
│ • Gopay  [6281332995497]
│ • Dana  [6281332995497]
│ • Qris  [NOT FOUND]
╰────
╭─「 *NOTE* 」
│ > Ingin donasi? Wa.me/6282261065144
│ _Hasil donasi akan digunakan buat sewa_
│ _atau beli *RDP/VPS* agar bot bisa jalan_
│ _24jam tanpa kendala_
╰────
`,
      contextInfo: {
      externalAdReply: {
      showAdAttribution: false
      }}}}}}, {})
}
handler.help = ['donasi', 'donate']
handler.tags = ['xp', 'info']
handler.command = /^(donasi|donate)$/i

module.exports = handler
