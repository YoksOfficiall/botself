let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Indosat Ooredoo [085641345088]
│ • Gopay [085641345088]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
