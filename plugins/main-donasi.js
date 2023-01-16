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
│ • Three [62895604670507]
│ • Gopay  [62895604670507]
│ • Dana  [62895604670507]
│ • Qris  [Chat OWNER]
╰────
╭─「 *NOTE* 」
│ > Ingin donasi? Wa.me/62895604670507
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