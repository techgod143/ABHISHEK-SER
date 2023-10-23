
let handler = async (m, { conn, args, text, usedPrefix, command }) => {
if (!text) throw `🎯 Enter The Number You Want To Send A Group Invite Link\n\n📌 Example :\n*${usedPrefix + command}* 919074692450`
if (text.includes('+')) throw  `🎯 Ingrese el número todo junto sin el *+*`
if (isNaN(text)) throw '*📌 Enter Only Numbers With Your Country Code With No Spaces*'
let group = m.chat
let link = 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group)
 
      await conn.reply(text+'@s.whatsapp.net', `≡ *INVITATION TO GROUP*\n\nA User Invited You To Join This Group \n\n${link}`, m, {mentions: [m.sender]})
        m.reply(`✅ An Invite Link Was Sent To The Sser`) 

}
handler.help = ['invite <919xxx>']
handler.tags = ['group']
handler.command = ['invite','invitar'] 
handler.group = true
handler.admin = false
handler.botAdmin = true

export default handler
