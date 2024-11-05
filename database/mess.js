require("./global")

const mess = {
   wait: "*⌛ Dalam Proses Kak..*",
   success: "*Success Sayangku..*",
   on: "*`[ On Feature ]` - Sudah Aktif*", 
   off: "*`[ Off Feature ]` - Sudah Off*",
   query: {
       text: "*Teks Nya Mana Kak?*",
       link: "*Link Nya Mana Kak?*",
   },
   error: {
       fitur: "⚠️ *Ada Yang Error Nih, Hubungi Ruzx Ya..",
   },
   only: {
       group: "⚠️ *Fitur Khusus Admin Group!*",
       private: "⚠️ *Fitur Ini Cuma Bisa Di Akses Di Privat Chat*",
       owner: "⚠️ *Fiturnya Buat Ownerku*",
       admin: "⚠️ *Fitur Khusus Admin Group!*",
       badmin: "⚠️ *Fitur Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group!*",
       reseller: "⚠️ *Fiturnya, Buat Reseller  Beb..*",
       premium: "⚠️ *Fiturnya, Buat Member Premium Beb..*",
   }
}

global.mess = mess

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})