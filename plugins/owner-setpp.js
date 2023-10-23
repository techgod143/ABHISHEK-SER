let handler = async (m, { conn }) => {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || q.mediaType || ''
    if (/image/.test(mime)) {
        let img = await q.download()
        if (!img) throw '*REPLY TO AN IMAGE.*'
        await conn.updateProfilePicture(conn.user.jid, img).then(_ => m.reply('_Updated Profile Pic✅_'))
    } else throw '*REPLY TO AN IMAGE.*'
}

handler.command = /^setpp/i;
handler.group = false; // No need for this to be group-specific
handler.owner = true; // Adjust the access control as needed
handler.botAdmin = false; // You don't need bot admin for setting profile picture

export default handler;
