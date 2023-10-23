let handler = async (m, { conn, usedPrefix, command}) => {
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `❌ The User Is Not Found In My Database`
let pp = './Abhi.jpg'
let more = String.fromCharCode(8206)
let readMore = more.repeat(850) 
let lkr = `╭───❮ *𝙱𝙾𝚃 𝙼𝙴𝙽𝚄* ❯
│ _${usedPrefix}ping_
│ _${usedPrefix}uptime_
│ _${usedPrefix}enable_
│ _${usedPrefix}alive_
│ _${usedPrefix}owner_
│ _${usedPrefix}report_
│ _${usedPrefix}bot_
│ _${usedPrefix}script_
│ _${usedPrefix}runtime_
│ _${usedPrefix}infobot_
│ _${usedPrefix}donate_
│ _${usedPrefix}groups_
│ _${usedPrefix}blocklist_
│ _${usedPrefix}listprem_
╰─────────────⦁

╭───❮ *𝙾𝚆𝙽𝙴𝚁 𝙼𝙴𝙽𝚄* ❯
│ _${usedPrefix}*on/off* public_
│ _${usedPrefix}*on/off* autoreact_
│ _${usedPrefix}update_
│ _${usedPrefix}sudo_
│ _${usedPrefix}autoadmin_
│ _${usedPrefix}left_
│ _${usedPrefix}banchat_
│ _${usedPrefix}unbanchat_
│ _${usedPrefix}ban_
│ _${usedPrefix}unban_
│ _${usedPrefix}banlist_
│ _${usedPrefix}block_
│ _${usedPrefix}unblock_
│ _${usedPrefix}blocklist_
│ _${usedPrefix}bc_
│ _${usedPrefix}bcgc_
│ _${usedPrefix}join_ 
│ _${usedPrefix}restart_
│ _${usedPrefix}setpp_
│ _${usedPrefix}setprefix_
│ _${usedPrefix}resetprefix_
│ _${usedPrefix}resetuser_
│ _${usedPrefix}getfile_
│ _${usedPrefix}getplugin_
╰─────────────⦁
${readMore} 
╭───❮ *𝙶𝚁𝙾𝚄𝙿 𝙼𝙴𝙽𝚄* ❯
│ _${usedPrefix}kick *@tag*_
│ _${usedPrefix}promote *@tag*_
│ _${usedPrefix}demote *@tag*_
│ _${usedPrefix}infogroup_
│ _${usedPrefix}getbio *@tag*_
│ _${usedPrefix}resetlink_
│ _${usedPrefix}link_
│ _${usedPrefix}*on/off* antilink_
│ _${usedPrefix}*on/off* antidelete_
│ _${usedPrefix}invite_
│ _${usedPrefix}setppgc *image*_
│ _${usedPrefix}setname *text*_
│ _${usedPrefix}setdesc *text*_
│ _${usedPrefix}setwelcome *text*_
│ _${usedPrefix}setbye *text*_
│ _${usedPrefix}hidetag *text/image/audio/vid*_
│ _${usedPrefix}warn *@tag*_
│ _${usedPrefix}unwarn *@tag*_
│ _${usedPrefix}listwarn_
│ _${usedPrefix}listnum_
│ _${usedPrefix}kicknum_
│ _${usedPrefix}group *open/close*_
│ _${usedPrefix}tagall_
╰─────────────⦁

╭───❮ *𝙵𝚄𝙽 𝙼𝙴𝙽𝚄* ❯
│ _${usedPrefix}hearts_
│ _${usedPrefix}moon_
│ _${usedPrefix}question_
│ _${usedPrefix}character_
│ _${usedPrefix}truth_
│ _${usedPrefix}dare_
│ _${usedPrefix}flirt_
│ _${usedPrefix}gay_
│ _${usedPrefix}meme_
│ _${usedPrefix}ship_
│ _${usedPrefix}kill_
│ _${usedPrefix}kiss_
│ _${usedPrefix}pat_
│ _${usedPrefix}slap_
│ _${usedPrefix}waste_
│ _${usedPrefix}simpcard_
│ _${usedPrefix}hornycard_
│ _${usedPrefix}ytcomment_
│ _${usedPrefix}stupid_
│ _${usedPrefix}lolicon_
╰─────────────⦁

╭───❮ *𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳 𝙼𝙴𝙽𝚄* ❯
│ _${usedPrefix}song_
│ _${usedPrefix}play_
│ _${usedPrefix}yts_
│ _${usedPrefix}insta *link*_
│ _${usedPrefix}img_
│ _${usedPrefix}pinterest_
│ _${usedPrefix}mediafire *link*_
│ _${usedPrefix}gdrive *link*_
│ _${usedPrefix}gitclone *link*_
│ _${usedPrefix}twitter *link*_
│ _${usedPrefix}tiktok *link*_
│ _${usedPrefix}tiktokstalk_
│ _${usedPrefix}spotify_
│ _${usedPrefix}fb *link*_
╰─────────────⦁

╭───❮ *𝙴𝙲𝙾𝙽𝙾𝙼𝚈 𝙼𝙴𝙽𝚄* ❯
│ _${usedPrefix}claim/daily_
│ _${usedPrefix}weekly_
│ _${usedPrefix}monthly_
│ _${usedPrefix}leaderboard_
│ _${usedPrefix}bet_
│ _${usedPrefix}heal_
│ _${usedPrefix}craft_
│ _${usedPrefix}balance_
│ _${usedPrefix}shop_
│ _${usedPrefix}sell_
│ _${usedPrefix}adventure_
│ _${usedPrefix}opencrate_
│ _${usedPrefix}mine_
│ _${usedPrefix}work_
│ _${usedPrefix}transfer_
│ _${usedPrefix}todiamond_
│ _${usedPrefix}tomoney_
╰─────────────⦁

╭───❮ *𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙴𝚁 𝙼𝙴𝙽𝚄* ❯
│ _${usedPrefix}toanime_
│ _${usedPrefix}tomp3_
│ _${usedPrefix}toimg_
│ _${usedPrefix}tovid_
╰─────────────⦁

╭───❮ *𝚁𝙰𝙽𝙳𝙾𝙼 𝙼𝙴𝙽𝚄* ❯
│ _${usedPrefix}bts_
│ _${usedPrefix}cr7_
│ _${usedPrefix}cat_
│ _${usedPrefix}coffee_
│ _${usedPrefix}cartoon_
│ _${usedPrefix}cyberspace_
│ _${usedPrefix}couplepp_
│ _${usedPrefix}dog_
│ _${usedPrefix}doraemon_
│ _${usedPrefix}ff_
│ _${usedPrefix}hacker_
│ _${usedPrefix}messi_
│ _${usedPrefix}pubg_
│ _${usedPrefix}pentol_
│ _${usedPrefix}planet_
│ _${usedPrefix}tech_
│ _${usedPrefix}wpmountain_
│ _${usedPrefix}wpgaming_
│ _${usedPrefix}wprandom_
╰─────────────⦁

╭───❮ *𝙰𝚄𝙳𝙸𝙾 𝙼𝙴𝙽𝚄* ❯
│ _${usedPrefix}bass_
│ _${usedPrefix}blown_
│ _${usedPrefix}deep_
│ _${usedPrefix}earrape_
│ _${usedPrefix}fat_
│ _${usedPrefix}fast_
│ _${usedPrefix}nightcore_
│ _${usedPrefix}reverse_
│ _${usedPrefix}squrrel_
│ _${usedPrefix}slow_
╰─────────────⦁

╭───❮ *𝙰𝙽𝙸𝙼𝙴 𝙼𝙴𝙽𝚄* ❯
│ _${usedPrefix}waifu_
│ _${usedPrefix}neko_
│ _${usedPrefix}loli_
│ _${usedPrefix}naruto_
│ _${usedPrefix}itachi_
│ _${usedPrefix}akira_
│ _${usedPrefix}asuna_
│ _${usedPrefix}akiyama_
│ _${usedPrefix}boruto_
│ _${usedPrefix}hornycard_
│ _${usedPrefix}ayuzawa_
│ _${usedPrefix}anna_
│ _${usedPrefix}chiho_
│ _${usedPrefix}chitoge_
│ _${usedPrefix}deidara_
│ _${usedPrefix}erza_
│ _${usedPrefix}elaina_
│ _${usedPrefix}emilia_
│ _${usedPrefix}hestia_
│ _${usedPrefix}hinata_
│ _${usedPrefix}inori_
│ _${usedPrefix}isuzu_
│ _${usedPrefix}kagura_
│ _${usedPrefix}kaori_
│ _${usedPrefix}keneki_
│ _${usedPrefix}kurumi_
│ _${usedPrefix}madara_
│ _${usedPrefix}mikasa_
│ _${usedPrefix}miku_
│ _${usedPrefix}minato_
│ _${usedPrefix}nezuko_
│ _${usedPrefix}sagiri_
│ _${usedPrefix}sasuke_
│ _${usedPrefix}sakura_
│ _${usedPrefix}kotori_
╰─────────────⦁

╭───❮ *𝙶𝙰𝙼𝙴 𝙼𝙴𝙽𝚄* ❯
│ _${usedPrefix}tictactoe_
│ _${usedPrefix}delttt_
│ _${usedPrefix}math_
│ _${usedPrefix}math answer_
│ _${usedPrefix}ppt_
│ _${usedPrefix}slot_
│ _${usedPrefix}casino_
╰─────────────⦁

╭───❮ *𝚂𝚃𝙸𝙲𝙺𝙴𝚁  𝙼𝙴𝙽𝚄* ❯
│ _${usedPrefix}sticker_
│ _${usedPrefix}take_
│ _${usedPrefix}smaker_
│ _${usedPrefix}getsticker_
│ _${usedPrefix}emix_
│ _${usedPrefix}attp_
╰─────────────⦁

╭───❮ *𝚃𝙾𝙾𝙻𝚂 𝙼𝙴𝙽𝚄* ❯
│ _${usedPrefix}autosticker_
│ _${usedPrefix}pdf_
│ _${usedPrefix}whatmusic_
│ _${usedPrefix}tempmail_
│ _${usedPrefix}checkmail_
│ _${usedPrefix}pokedex_
│ _${usedPrefix}calc_
│ _${usedPrefix}google_
│ _${usedPrefix}lyrics_
│ _${usedPrefix}readmore_
│ _${usedPrefix}ssweb_
│ _${usedPrefix}tts_
│ _${usedPrefix}trt_
│ _${usedPrefix}wiki_
│ _${usedPrefix}nowa_
│ _${usedPrefix}qrmaker_
│ _${usedPrefix}true_
│ _${usedPrefix}fancy_
│ _${usedPrefix}weather_
│ _${usedPrefix}alexa_
│ _${usedPrefix}itunes_
│ _${usedPrefix}technews_
╰─────────────⦁

╭───❮ *𝙽𝚂𝙵𝚆 𝙼𝙴𝙽𝚄* ❯
│ _${usedPrefix}on nsfw_
│ _${usedPrefix}off nsfw_
│ _${usedPrefix}hentais *text*_
│ _${usedPrefix}xnxxdl *link*_
╰────────────⦁

╭───❮  *🎯𝙰𝙱𝙷𝙸𝚂𝙷𝙴𝙺-𝚂𝙴𝚁* ❯
│      𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈
│   𝙰𝙱𝙷𝙸𝚂𝙷𝙴𝙺 𝚂𝚄𝚁𝙴𝚂𝙷☘️
╰────────────⦁`  
conn.sendFile(m.chat, pp, 'perfil.jpg', lkr, m, false, { mentions: [who] })
m.react('📃')
}
handler.help = ['allmenu']
handler.tags = ['main']
handler.command = ['allmenu', 'menu'] 

export default handler
