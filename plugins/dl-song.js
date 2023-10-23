import ytdl from 'ytdl-core';
import yts from 'yt-search';
import fs from 'fs';
import { pipeline } from 'stream';
import { promisify } from 'util';
import os from 'os';

const streamPipeline = promisify(pipeline);

var handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `Use example ${usedPrefix}${command} Heat Waves `; // Add "music" at the end to specify that it's music.

  await m.reply('*⬇️𝙰𝙱𝙷𝙸𝚂𝙷𝙴𝙺-𝚂𝙴𝚁 Downloading Your Song🎧*');

  // Add a filter to search for song-related content
  let search = await yts(`${text} Song`);
  if (!search.videos.length) throw 'Song Not Found, Try Another Title';

  // Get the first video from the search results
  let vid = search.videos[0];

  let { title, thumbnail, url } = vid;

  // Send the search results message
  let searchResultsMessage = `Search Results For "${text} Song":\n\n`;
  for (let i = 0; i < search.videos.length; i++) {
    searchResultsMessage += `${i + 1}. ${search.videos[i].title}\n`;
  }

  conn.sendMessage(m.chat, searchResultsMessage, { quoted: m });

  const audioStream = ytdl(url, {
    filter: 'audioonly',
    quality: 'highestaudio',
  });

  // Get the path to the system's temporary directory
  const tmpDir = os.tmpdir();

  // Create writable stream in the temporary directory
  const writableStream = fs.createWriteStream(`${tmpDir}/${title}.mp3`);

  // Start the download
  await streamPipeline(audioStream, writableStream);

  await m.reply('*⬆️𝙰𝙱𝙷𝙸𝚂𝙷𝙴𝙺-𝚂𝙴𝚁 Uploading Your Song🎧*');

  let doc = {
    audio: {
      url: `${tmpDir}/${title}.mp3`
    },
    mimetype: 'audio/mp4',
    fileName: `${title}`
  };

  await conn.sendMessage(m.chat, doc, { quoted: m });

  // Delete the audio file
  fs.unlink(`${tmpDir}/${title}.mp3`, (err) => {
    if (err) {
      console.error(`Failed to delete audio file: ${err}`);
    } else {
      console.log(`Deleted audio file: ${tmpDir}/${title}.mp3`);
    }
  });
};

handler.help = ['song'].map((v) => v + ' <query>');
handler.tags = ['downloader'];
handler.command = /^song$/i;

handler.exp = 0;
handler.diamond = false;

export default handler;
