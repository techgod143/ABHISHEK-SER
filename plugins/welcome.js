const { MessageType, Mimetype } = require('@adiwajshing/baileys');

const welcomeMessage = (participant, user, conn) => {
    return async (m, event) => {
        const group = await conn.groupMetadata(event.jid);
        const welcomeText = `Welcome to ${group.subject}, @${participant.split("@")[0]}!`;
        conn.sendMessage(event.jid, welcomeText, MessageType.text);
        
        // Get the user's profile picture
        const profilePic = await conn.getProfilePicture(participant);
        if (profilePic) {
            const image = await conn.downloadMedia(profilePic);
            conn.sendMessage(event.jid, image, MessageType.image, { mimetype: Mimetype.jpeg });
        }
    };
};

conn.on('group-participants-update', welcomeMessage);
