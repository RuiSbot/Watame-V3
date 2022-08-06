require('./settings')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
const nexusnw = require('xfarr-api')

//rpg function\\
   const { 
     addInventoriDarah,
      cekDuluJoinAdaApaKagaDiJson, 
      addDarah, 
      kurangDarah, 
     getDarah 
   }  = require('./storage/user/darah.js')
   const { 
     cekInventoryAdaAtauGak, 
      addInventori,  
       addBesi, 
       addEmas, 
       addEmerald,
       addUmpan,
       addPotion,
       kurangBesi, 
       kurangEmas, 
       kurangEmerald, 
       kurangUmpan,
       kurangPotion,
       getBesi, 
      getEmas, 
     getEmerald,
     getUmpan,
    getPotion
   } = require('./storage/user/alat_tukar.js')
   const { 
    addInventoriMonay, 
    cekDuluJoinAdaApaKagaMonaynyaDiJson, 
    addMonay, 
    kurangMonay, 
   getMonay 
   } = require('./storage/user/monay.js')
   const { 
    addInventoriLimit, 
    cekDuluJoinAdaApaKagaLimitnyaDiJson, 
    addLimit, 
    kurangLimit, 
    getLimit 
   } = require('./storage/user/limit.js')
   const { 
    cekDuluHasilBuruanNya, 
     addInventoriBuruan, 
     addIkan,
      addAyam, 
      addKelinci, 
      addDomba, 
      addSapi,
      addGajah,
      kurangIkan,
      kurangAyam, 
      kurangKelinci, 
      kurangDomba, 
      kurangSapi,
      kurangGajah,
      getIkan,
      getAyam, 
      getKelinci, 
      getDomba,
     getSapi,
    getGajah
   } = require('./storage/user/buruan.js')
   let DarahAwal =  global.rpg.darahawal
   const isDarah = cekDuluJoinAdaApaKagaDiJson(m.sender)   
   const isCekDarah = getDarah(m.sender)
   const isUmpan = getUmpan(m.sender)
   const isPotion = getPotion(m.sender)
   const isIkan = getIkan(m.sender)
   const isAyam = getAyam(m.sender)
   const isKelinci = getKelinci(m.sender)
   const isDomba = getDomba(m.sender)
   const isSapi = getSapi(m.sender)
   const isGajah = getGajah(m.sender)
   const isMonay = getMonay(m.sender)
   const isLimit = getLimit(m.sender)
   const isBesi = getBesi(m.sender)
   const isEmas = getEmas(m.sender)
   const isEmerald = getEmerald(m.sender)
   const isInventory = cekInventoryAdaAtauGak(m.sender)
   const isInventoriBuruan = cekDuluHasilBuruanNya(m.sender)
   const isInventoryLimit = cekDuluJoinAdaApaKagaLimitnyaDiJson(m.sender)
   const isInventoryMonay = cekDuluJoinAdaApaKagaMonaynyaDiJson(m.sender)
   const ikan = ['🐟','🐠','🐡']   

//rpg database\\
 let _limit = JSON.parse(fs.readFileSync('./storage/user/limit.json'));
 let _buruan = JSON.parse(fs.readFileSync('./storage/user/hasil_buruan.json'));
 let _darahOrg = JSON.parse(fs.readFileSync('./storage/user/darah.json'))

//Database\\
let setik = JSON.parse(fs.readFileSync('./database/setik.json'));
let vien = JSON.parse(fs.readFileSync('./database/vien.json'));
let imagi = JSON.parse(fs.readFileSync('./database/imagi.json'))
let videox = JSON.parse(fs.readFileSync('./database/video.json'))

//read database\\
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []

module.exports = GojoMdNx = async (GojoMdNx, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await GojoMdNx.decodeJid(GojoMdNx.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
	    const from = mek.key.remoteJid
	    const type = Object.keys(mek.message)[0]        
	    const content = JSON.stringify(mek.message)

        //group\\
        const groupMetadata = m.isGroup ? await GojoMdNx.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false

        //member\\
        let picaks = [flaming,fluming,flarun,flasmurf]
		let picak = picaks[Math.floor(Math.random() * picaks.length)]

          try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }

            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
            }

	    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
	    }

        } catch (err) {
            console.error(err)
        }

	//group target \\
const reply = (teks) => {
            GojoMdNx.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` ${global.botname}`,"body": `BOT DE WHATSAPP`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./GojoMedia/watame.jpg`)}}})
        }

        const replay = (teks) => {
            GojoMdNx.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` ${global.botname}`,"body": `BOT DE WHATSAPP`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./GojoMedia/watame.jpg`)}}})
        }

        //Public & Self\\
        if (!GojoMdNx.public) {
            if (!m.key.fromMe) return
        }

        //Push Message To Console && Auto Read\\
        if (m.message) {
            GojoMdNx.sendReadReceipt(m.chat, m.sender, [m.key.id])
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }

	//reset limit every 12 hours\\
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Limit Reseted')
        }, {
            scheduled: true,
            timezone: "Asia/Kolkata"
        })

	//auto set bio\\
	if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await GojoMdNx.setStatus(`${GojoMdNx.user.name} | Runtime : ${runtime(uptime)}`)
		setting.status = new Date() * 1
	    }
	}

	  //antilink\\
        if (db.data.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        reply(`「 ANTI LINK 」\n\nYou have been detected sending a group link, sorry you will be kicked !`)
        if (!isBotAdmins) return reply(`I Am Not An Admin, How Could I Kick Somebody Who Send Link 😒`)
        let gclink = (`https://chat.whatsapp.com/`+await GojoMdNx.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return reply(`Group Is Installed With Anti-Link But I Won't Kick You 😉, Because You Sent This Group Link❤️`)
        if (isAdmins) return reply(`Group Is Installed With Anti-Link But I Won't Kick You 😉, Because You Are An Admin Of The Group❤️`)
        if (isCreator) return reply(`Group Is Installed With Anti-Link But I Won't Kick You 😉, Because You Are My Owner Hahahahah🤣😘, You Think I Will Betray You Huh🐦`)
        GojoMdNx.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }

        //auto reply 
        for (let anji of setik){
				if (budy === anji){
					result = fs.readFileSync(`./GojoMedia/sticker/${anji}.webp`)
					GojoMdNx.sendMessage(m.chat, { sticker: result }, { quoted: m })
					}
			}
			for (let anju of vien){
				if (budy === anju){
					result = fs.readFileSync(`./GojoMedia/vn/${anju}.mp3`)
					GojoMdNx.sendMessage(m.chat, { audio: result, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
					}
			}
			for (let anjh of imagi){
				if (budy === anjh){
					result = fs.readFileSync(`./GojoMedia/image/${anjh}.jpg`)
					GojoMdNx.sendMessage(m.chat, { image: result }, { quoted: m })
					}
			}
					for (let anjh of videox){
				if (budy === anjh){
					result = fs.readFileSync(`./GojoMedia/vid/${anjh}.mp4`)
					GojoMdNx.sendMessage(m.chat, { video: result }, { quoted: m })
					}
				  }

      //Mute Chat\\
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }

        //media detect \\
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')

        //Respon Cmd with media\\
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: GojoMdNx.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, GojoMdNx.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        GojoMdNx.ev.emit('messages.upsert', msg)
        }

	if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?give up|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Answer The Following Questions :\n${room.soal}\n\n\nThere Is ${room.jawaban.length} Answer ${room.jawaban.find(v => v.includes(' ')) ? `(Some Answers Have Spaces)` : ''}
${isWin ? `All Answers Answered` : isSurender ? 'Surrender!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            GojoMdNx.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await GojoMdNx.sendButtonText(m.chat, [{ buttonId: 'guess song', buttonText: { displayText: 'Guess The Song' }, type: 1 }], `🎮 Guess The Music 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, GojoMdNx.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await reply(`🎮 Math Quiz 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Send ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await GojoMdNx.sendButtonText(m.chat, [{ buttonId: 'guess picture', buttonText: { displayText: 'Guess The Picture' }, type: 1 }], `🎮 Guess The Picture 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, GojoMdNx.user.name, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await GojoMdNx.sendButtonText(m.chat, [{ buttonId: 'guess word', buttonText: { displayText: 'Guess The Word' }, type: 1 }], `🎮 Guess The Word 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, GojoMdNx.user.name, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await GojoMdNx.sendButtonText(m.chat, [{ buttonId: 'guess blank', buttonText: { displayText: 'Guess The Blank' }, type: 1 }], `🎮 Guess The Blank 🎮\n\nCorrect Answer 🎉\n*${deskripsi}*\n\nWant To Play Again? Press The Button Below`, GojoMdNx.user.name, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await GojoMdNx.sendButtonText(m.chat, [{ buttonId: 'guess sentence', buttonText: { displayText: 'Guess The Sentence' }, type: 1 }], `🎮 Guess The Sentence 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, GojoMdNx.user.name, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await GojoMdNx.sendButtonText(m.chat, [{ buttonId: 'guess lyrics', buttonText: { displayText: 'Guess The Lyrics' }, type: 1 }], `🎮 Guess The Lyrics 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, GojoMdNx.user.name, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await GojoMdNx.sendButtonText(m.chat, [{ buttonId: 'guess riddle', buttonText: { displayText: 'Guess The Riddle' }, type: 1 }], `🎮 Guess The Riddle 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, GojoMdNx.user.name, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        //TicTacToe\\
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    //reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?give up|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { 
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    reply({
	    '-3': 'Game Has Ended',
	    '-2': 'Invalid',
	    '-1': 'Invalid Position',
	    0: 'Invalid Position',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}
${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}
${isWin ? `@${winner.split('@')[0]} Won!` : isTie ? `Game Over` : `Turn ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}
Typed *surrender* to surrender and admited defeat`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await GojoMdNx.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await GojoMdNx.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

        //Suit PvP\\
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|accept|yes|okay?|reject|no|later|nope(k.)?yes|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(reject|no|later|n|nope(k.)?yes)/i.test(m.text)) {
	    GojoMdNx.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} Refuse Suit, Suit Canceled`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    GojoMdNx.sendText(m.chat, `Suit Has Been Sent To Chat
@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}
Please Choose A Suit In The Respective Chat"
Click https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) GojoMdNx.sendText(roof.p, `Please Select \n\Rock🗿\nPaper📄\nScissors✂️`, m)
	    if (!roof.pilih2) GojoMdNx.sendText(roof.p2, `Please Select \n\nRock🗿\nPaper📄\nScissors✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) GojoMdNx.sendText(m.chat, `Both Players Don't Want To Play,\nSuit Canceled`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    GojoMdNx.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} Didn't Choose Suit, Game Over!`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /scissors/i
	    let b = /rock/i
	    let k = /paper/i
	    let reg = /^(scissors|rock|paper)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    reply(`You Have Chosen ${m.text} ${!roof.pilih2 ? `\n\nWaiting For The Opponent To Choose` : ''}`)
	    if (!roof.pilih2) GojoMdNx.sendText(roof.p2, '_The Opponent Has Chosen_\nNow It Is Your Turn', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    reply(`You Have Chosen ${m.text} ${!roof.pilih ? `\n\nWaiting For The Opponent To Choose` : ''}`)
	    if (!roof.pilih) GojoMdNx.sendText(roof.p, '_The Opponent Has Chosen_\nNow It Is Your Turn', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    GojoMdNx.sendText(roof.asal, `_*Suit Results*_${tie ? '\nSERIES' : ''}
@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Win \n` : ` Lost \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Win \n` : ` Lost \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }

	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            reply(`
Don't tag him!
He's in AFK/Offline ${reason ? 'dengan alasan ' + reason : 'no reason'}
It's been ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            reply(`
You Came Back Online From AFK${user.afkReason ? ' after ' + user.afkReason : ''}
In ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
switch(command) {
        case 'inventori': case 'inventory': case 'profile':{
if (q.includes('--help')) return reply(examkosong) 
  if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
  if (!isInventory){ addInventori(m.sender) }
  if (!isInventoriBuruan){ addInventoriBuruan(m.sender) }

     var GojoMdNx = await getBuffer(picak+`User's Inventory`)
     let teksehmazeh = `_[ 👩🏻‍💼INFO USER👨🏻‍💼 ]_\n\n`
     teksehmazeh += `*❤️Your Blood* : ${getDarah(m.sender)}\n`
     teksehmazeh += `*◻️️Your Iron* : ${getBesi(m.sender)}\n`
     teksehmazeh += `*🌟Your Gold* : ${getEmas(m.sender)}\n`
     teksehmazeh += `*💎Your Emerald* : ${getEmerald(m.sender)}\n`
     teksehmazeh += `*⏺️Your Limit* : ${getLimit(m.sender)}\n`
     teksehmazeh += `*🧪Your Potion* : ${getPotion(m.sender)}\n\n`
     teksehmazeh += `_[ 🐺HUNT RESULT🐺 ]_\n`
     teksehmazeh += `*🐟Fish* : ${getIkan(m.sender)}\n`
     teksehmazeh += `*🐔Chicken* : ${getAyam(m.sender)}\n`
     teksehmazeh += `*🐇Rabbit* : ${getKelinci(m.sender)}\n`
     teksehmazeh += `*🐑Sheep* : ${getDomba(m.sender)}\n`
     teksehmazeh += `*🐄Cow* : ${getSapi(m.sender)}\n`
     teksehmazeh += `*🐘Elephant* : ${getGajah(m.sender)}\n\n`
     teksehmazeh += `_*${pushname}*_`
     await GojoMdNx.send5ButImg(from, `` + '' + teksehmazeh, `© ${footer}`, GojoMdNx, [{"urlButton": {"displayText": "YouTube📍","url": `${myweb}`}}])
  }
  break
        case 'userlimit': 
{      
   let txt = `「 *ALL LIMIT USER* 」\n\n`
     for (let i of _limit){
     txt += `➸ *ID :* @${i.id.split("@")[0]}\n➸ *Limit* : ${i.limit}\n`
     }
    reply(txt)       
  }
 break
 case 'leaderboard':
{      
   let txt = `「 *LEADERBOARD* 」\n\n`
     for (let i of _buruan){
     txt += `➸ *ID :* ${i.id}\n`
     txt += `*🐟Fish* : ${i.ikan}\n`
     txt += `*🐔Chicken* : ${i.ayam}\n`
     txt += `*🐇Rabbit* : ${i.kelinci}\n`
     txt += `*🐑Sheep* : ${i.domba}\n`
     txt += `*🐄Cow* : ${i.sapi}\n`
     txt += `*🐘Elephant* : ${i.gajah}\n\n`
     }
    reply(txt)       
  }
 break
case 'mining': case 'mine':{
if (q.includes('--help')) return reply(examkosong) 
  if (!isInventory){ addInventori(m.sender) }
  if (isCekDarah < 1) return reply(`You're Tired!, Try To Heal Using Potions`) 
  let besi = [1,2,5,0,3,0,1,1,4,1,5,0,0]
  let emas = [0,1,2,3,0,0,0,1,1,0,0,2]
  let emerald = [0,0,1,0,0,1,0,2,1,0,0,1]
  var besinya = besi[Math.floor(Math.random() * besi.length)]  
  var emasnya = emas[Math.floor(Math.random() * emas.length)]  
  var emeraldnya = emerald[Math.floor(Math.random() * emerald.length)]  
  setTimeout( () => {
  let caption = `[ MINING RESULT ]\n*Iron* : ${besinya}\n*Gold* : ${emasnya}\n*Emerald* : ${emeraldnya}`
  let buttons = [
      {
       buttonId: `${prefix + command}`, 
       buttonText: {
        displayText: 'Mine Again⛏️'
      }, type: 1},
    ]
    let buttonMessage = {
      image: { url: './storage/image/tambang.jpg' },
      caption: caption,
      footer: pushname,
      buttons: buttons,
      headerType: 4
     }
     GojoMdNx.sendMessage(from, buttonMessage, { quoted: m })

   }, 7000)  
  setTimeout( () => {
  reply(`@${m.sender.split("@")[0]} Started Mining🎣`)     
  }, 1500)
  kurangDarah(m.sender, 10)
  addBesi(m.sender, besinya)
  addEmas(m.sended, emasnya)
  addEmerald(m.sender, emeraldnya)	     
  }   
  break  
  //transaction\\
 case 'beli': case 'buy':{
if (q.includes('--help')) return reply(examkosong) 
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
 if (!isInventoryMonay){ addInventoriMonay(m.sender) }
 if (!isInventory){ addInventori(m.sender) }
 if (!q) return reply(`What Do You Want To Buy?\n\n1.potion\n2.baitfood\n3.limit\n\nExample: ${prefix + command} baitfood`)
 var anu = args[1]
  if (args[0] === 'potion'){
  let noh = 100000 * anu
 if (!args[1]) return reply(`Example : ${prefix + command} potion 2\n 1 Potion = 100000 Money`)
 if (isMonay < noh) return reply('Your Remaining Money Is Not Sufficient For This Purchase')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addPotion(m.sender, apalu)
  setTimeout( () => {
  reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Potion* : ${getPotion(m.sender)}`)
  }, 2000) 
 } else 
 if (args[0] === 'baitfood'){
  let noh = 5000 * anu
 if (!args[1]) return reply(`Example : ${prefix + command} baitfood 2\n 1 Bait Food = 2500 Money`)
 if (isMonay < noh) return reply('Your Remaining Money Is Not Sufficient For This Purchase')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addUmpan(m.sender, apalu)
  setTimeout( () => {
  reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Bait Food* : ${getUmpan(m.sender)}`)
  }, 2000) 
  } else 
  if (args[0] === 'limit'){
  let noh = 35000 * anu
 if (!args[1]) return reply(`Example : ${prefix + command} limit 2\n 1 Limit = 35000 Money`)
 if (isMonay < noh) return reply('Your Remaining Money Is Not Sufficient For This Purchase')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addLimit(m.sender, apalu)
  setTimeout( () => {
  reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Limit* : ${getLimit(m.sender)}`)
  }, 2000) 
  } else { reply("Incorrect Format!") }
 }
 break
 case 'sell': case 'jual':{
 if (!q) return  reply(`What Do You Want To Sell??\nExample : ${prefix + command} fish 2`)
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
 if (!isInventoryMonay){ addInventoriMonay(m.sender) }
 if (!isInventory){ addInventori(m.sender) }
 var anu = args[1]
 if (args[0] === 'fish'){
 if (isIkan < anu) return reply(`You Don't Have Enough Fish(es) For This Transaction`)
 if (!args[1]) return reply(`Example : ${prefix + command} fish 2\n 1 Fish = 1500 Money`)
 kurangIkan(m.sender, anu)
 let monaynya = 1500 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Remaining Fish(es)* : ${getIkan(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'chicken'){
 if (isAyam < anu) return reply(`You Don't Have Enough Chicken(s) For This Transaction`)
 if (!args[1]) return reply(`Example : ${prefix + command} chicken 2\n 1 Chicken = 2500 Money`)
 kurangAyam(m.sender, anu)
 let monaynya = 2500 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Remaining Chicken* : ${getAyam(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'rabbit'){
 if (isKelinci < anu) return reply(`You Don't Have Enough Rabbit(s) For This Transaction`)
 if (!args[1]) return reply(`Example : ${prefix + command} rabbit 2\n 1 Rabbit = 3000 Money`)
 kurangKelinci(m.sender, anu)
 let monaynya = 3000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Remaining Rabbit(s)* : ${getKelinci(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'sheep'){
 if (isDomba < anu) return reply(`You Don't Have Enough Sheep(s) For This Transaction`)
 if (!args[1]) return reply(`Example : ${prefix + command} domba 2\n 1 Sheep = 5000 money`)
 kurangDomba(m.sender, anu)
 let monaynya = 5000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Remaining Sheep(s)* : ${getDomba(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'cow'){
 if (isSapi < anu) return reply(`You Don't Have Enough Cow(s) For This Transaction`)
 if (!args[1]) return reply(`Example : ${prefix + command} cow 2\n 1 Cow = 10000 Money`)
 kurangSapi(m.sender, anu)
 let monaynya = 10000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Remaining Cow(s)* : ${getSapi(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'elephant'){
 if (isGajah < anu) return reply(`You Don't Have Enough Elephant(s) For This Transaction`)
 if (!args[1]) return reply(`Example : ${prefix + command} elephant 2\n 1 Elephant = 15000 Money`)
 kurangGajah(m.sender, anu)
 let monaynya = 15000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Remaining Elephant(s)* : ${getGajah(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'iron'){
 if (isBesi < anu) return reply(`You Don't Have Enough Iron(s) For This Transaction`)
 if (!args[1]) return reply(`Example : ${prefix + command} iron 2\n 1 Iron = 15000 Money`)
 kurangBesi(m.sender, anu)
 let monaynya = 16000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Remaining Iron(s)* : ${getBesi(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'gold'){
 if (isEmas < anu) return reply(`You Don't Have Enough Gold(s) For This Transaction`)
 if (!args[1]) return reply(`Example : ${prefix + command} gold 2\n 1 Gold = 50000 Money`)
 kurangEmas(m.sender, anu)
 let monaynya = 50000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaction Successful ✔️\n*Your Money* : ${getMonay(m.sender)}\n*Your Remaining Gold(s)* : ${getEmas(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'emerald'){
 if (isEmerald < anu) return reply(`You Don't Have Enough Emerald(s) For This Transaction`)
 if (!args[1]) return reply(`Example : ${prefix + command} emerald 2\n 1 Emerald = 100000 Money`)
 kurangEmerald(m.sender, anu)
 let monaynya = 100000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*You Don't Have Enough Emerald(s) For This Transaction* : ${getEmerald(m.sender)}`)
  }, 2000) 
 } else { reply("Incorrect Format!") }

 }
 break

 case 'heal':{
if (q.includes('--help')) return reply(examkosong) 
 if (!isCekDarah < 1) return reply('You Can Only Heal When Your Blood Is 0')
 if (isCekDarah > 100) return reply('Your Blood Is Full')
 if (isPotion < 1) return reply(`You Don't Have A Potion, Try Buying It This Way #buypotion _amount_`) 
 addDarah(m.sender, 100)
 kurangPotion(m.sender, 1)
 reply('Success! Your Bood Is Full')
 }
 break
 case 'hunt': case 'hunting': {
if (q.includes('--help')) return reply(examkosong) 
 if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
 if (isCekDarah < 1) return reply('Your Blood Is Gone, Try To Heal Using Potions') 
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
  let luka = ["Pierced by a thorn while hunting","Slipped into the abyss while hunting","Scratched by a wild animal","Not careful","Entangled in roots","Fall while hunting"]
  let location = ["Jungle","Amazon forest","Tropical forest","Meadow","African forest","Mountains"]
   var ikanmu = Math.ceil(Math.random() * 10)
   var ayam = Math.ceil(Math.random() * 8)
   var kelinci = Math.ceil(Math.random() * 7)
   var dombanya = [3,0,4,0,5,4,6,0,1,0,2,3,0,3,0,1]
   var sapinya = [2,0,3,0,4,0,5,0,1,0,2,0,3,0,1]
   var gajahnya = [1,0,4,0,2,0,1,0,2,1,3,0,1]
   var domba = dombanya[Math.floor(Math.random() * dombanya.length)] 
   var sapi = sapinya[Math.floor(Math.random() * sapinya.length)] 
   var gajah = gajahnya[Math.floor(Math.random() * gajahnya.length)]    
   var lukanya = luka[Math.floor(Math.random() * luka.length)]
   var lokasinya = location[Math.floor(Math.random() * location.length)]
 if (lokasinya === 'Jungle') {
    var image = './storage/image/rimba.jpg'
   } else
 if (lokasinya === 'Amazon forest') {
    var image =  './storage/image/amazon.jpg'
   } else
 if (lokasinya === 'Tropical forest') {
    var image = './storage/image/tropis.jpg'
   } else
 if (lokasinya === 'Meadow') {
    var image = './storage/image/padang_rumput.jpg'
   } else
 if (lokasinya === 'African forest') {
    var image = './storage/image/afrika.jpg'
   } else
 if (lokasinya === 'Mountains') {
   var image = './storage/image/pegunungan.jpg'
   }
 setTimeout( () => {
  let teksehmazeh = `_[ HUNT RESULT ]_\n`
     teksehmazeh += `*🐟Fish* : ${ikanmu}\n`
     teksehmazeh += `*🐔Chicken* : ${ayam}\n`
     teksehmazeh += `*🐇Rabbit* : ${kelinci}\n`
     teksehmazeh += `*🐑Sheep* : ${domba}\n`
     teksehmazeh += `*🐄Cow* : ${sapi}\n`
     teksehmazeh += `*🐘Elephant* : ${gajah}\n\n`
     teksehmazeh += `_[ INFO ]_\n`
     teksehmazeh += `*Location* : ${lokasinya}\n`
     teksehmazeh += `*Wounded* : ${lukanya}, blood - 10\n`
     teksehmazeh += `*Remaining blood* : ${getDarah(m.sender)}\n`
    let buttons = [
      {
       buttonId: `${prefix + command}`, 
       buttonText: {
        displayText: 'Hunt Again️🏹'
      }, type: 1},
    ]
    let buttonMessage = {
      image: { url: image },
      caption: teksehmazeh,
      footer: pushname,
      buttons: buttons,
      headerType: 4
     }
     GojoMdNx.sendMessage(from, buttonMessage, { quoted: m })      
  }, 5000)  
 setTimeout( () => {
  reply(`@${m.sender.split("@")[0]} Started Hunting In ${lokasinya}`)     
  }, 1000) 
 addIkan(m.sender, ikanmu) 
   addAyam(m.sender, ayam) 
   addKelinci(m.sender, kelinci)
   addDomba(m.sender, domba)
   addSapi(m.sender, sapi)
  addGajah(m.sender, gajah)
 kurangDarah(m.sender, 10)
 }
 break
	    case 'afk': {
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                reply(`${m.pushName} Has Gone Afk/Offline${text ? ': ' + text : ''}`)
            }
            break	
        case 'ttc': case 'ttt': case 'tictactoe': {
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return replay(`You Are Still In The Game`)
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            reply('Partner found!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}
${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}
Waiting @${room.game.currentTurn.split('@')[0]}
Type *surrender* to surrender and admit defeat`
            if (room.x !== room.o) await GojoMdNx.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await GojoMdNx.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            reply('Waiting For Partner' + (text ? ` Type The Command Below ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case 'delttc': case 'delttt': {
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            GojoMdNx.sendText(m.chat, `Successfully Deleted The TicTacToe Session`, m)
            } else if (!this.game) {
            reply(`TicTacToe🎮 Session Does Not Exist`)
            } else reply('?')
            } catch (e) {
            reply('Damaged')
            }
            }
            break
            case 'suitpvp': case 'suit': {
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) return replay(`Complete Your Previous Suit`)
	    if (m.mentionedJid[0] === m.sender) return reply(`Can't Play With Myself !`)
            if (!m.mentionedJid[0]) return reply(`_Who Do You Want To Challenge?_\nTag The Person..\n\nExample : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0])))  reply(`The Person You Are Challenging Is Playing Suit With Someone Else :(`)
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_
@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} To Play Suit
Please @${m.mentionedJid[0].split`@`[0]} To Type Accept/Reject`
            this.suit[id] = {
            chat: await GojoMdNx.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) GojoMdNx.sendText(m.chat, `_Suit Time Out_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
            case 'chat': {
                if (!isCreator) return replay(`${mess.owner}`)
                if (!q) return replay(`Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete`)
                if (args[0] === 'mute') {
                    GojoMdNx.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    GojoMdNx.chatModify({ mute: null }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    GojoMdNx.chatModify({  archive: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    GojoMdNx.chatModify({ archive: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    GojoMdNx.chatModify({ markRead: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    GojoMdNx.chatModify({ markRead: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    GojoMdNx.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                }
            }
            break
	    case 'family100': {
                if ('family100'+m.chat in _family100) {
                    reply('There Are Still Unfinished Sessions!')
                    reply(false)
                }
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                let hasil = `*Answer The Following Questions :*\n${random.soal}\n\nThere Is *${random.jawaban.length}* Answer ${random.jawaban.find(v => v.includes(' ')) ? `(Some Answers Have Spaces)` : ''}`.trim()
                _family100['family100'+m.chat] = {
                    id: 'family100'+m.chat,
                    pesan: await GojoMdNx.sendText(m.chat, hasil, m),
                    ...random,
                    terjawab: Array.from(random.jawaban, () => false),
                    hadiah: 6,
                }
            }
            break
            case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
            if (!m.quoted && !text) return replay(`Send/Reply Text With Caption ${prefix + command}`)
            ter = command[1].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            break
            case 'guess': {
                if (!text) return replay(`Example : ${prefix + command} song\n\nOption : \n1. music\n2. picture (indo)\n3. word\n4. sentence\n5. lyrics (indo)\n6. blank (indo)`)
                if (args[0] === "song") {
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) return replay(`There Are Still Unfinished Sessions`)
                    let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let msg = await GojoMdNx.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
                    GojoMdNx.sendText(m.chat, `What Is The Name Of This Song?\n\nArtist : ${result.artist}\nTime : 60 seconds`, msg).then(() => {
                    tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    GojoMdNx.sendButtonText(m.chat, [{ buttonId: 'guess song', buttonText: { displayText: 'Guess The Song' }, type: 1 }], `Time Has Run Out\nAnswer:  ${tebaklagu[m.sender.split('@')[0]]}\n\nWant To Play? Press The Button Below`, GojoMdNx.user.name, m)
                    delete tebaklagu[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'picture') {
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) return replay(`There Are Still Unfinished Sessions!`)
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    GojoMdNx.sendImage(m.chat, result.img, `Please Answer The Questions Above\n\nDescription : ${result.deskripsi}\nTime : 60 seconds`, m).then(() => {
                    tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    GojoMdNx.sendButtonText(m.chat, [{ buttonId: 'guess picture', buttonText: { displayText: 'Guess The Picture' }, type: 1 }], `Time Has Run Out\nAnswer:  ${tebakgambar[m.sender.split('@')[0]]}\n\nWant To Play Again? PressThe Button Below`, GojoMdNx.user.name, m)
                    delete tebakgambar[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'word') {
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) return replay(`There Are Still Unfinished Sessions!`)
                    let anu = await fetchJson('https://raw.githubusercontent.com/nexusnw/fungames/main/GuessTheWord.js')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    GojoMdNx.sendText(m.chat, `Please Answer The Following Question\n\n${result.soal}\nTime : 60 seconds`, m).then(() => {
                    tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    GojoMdNx.sendButtonText(m.chat, [{ buttonId: 'guess word', buttonText: { displayText: 'Guess The Word' }, type: 1 }], `Time Out\nAnswer:  ${tebakkata[m.sender.split('@')[0]]}\n\nWant To Play Again? PressThe Button Below`, GojoMdNx.user.name, m)
                    delete tebakkata[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'sentence') {
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) return replay(`There Are Still Unfinished Sessions!`)
                    let anu = await fetchJson('https://raw.githubusercontent.com/nexusnw/fungames/main/GuessTheSentence.js')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    GojoMdNx.sendText(m.chat, `Please Answer The Following Question\n\n${result.soal}\nTime : 60 seconds`, m).then(() => {
                    tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    GojoMdNx.sendButtonText(m.chat, [{ buttonId: 'guess sentence', buttonText: { displayText: 'Guess The Sentence' }, type: 1 }], `Time Out\nAnswer:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nWant To Play Again? PressThe Button Below`, GojoMdNx.user.name, m)
                    delete tebakkalimat[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lyrics') {
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) return replay(`There Are Still Unfinished Sessions!`)
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    GojoMdNx.sendText(m.chat, `These Are The Lyrics Of Which Song? : *${result.soal}*?\nTime : 60 seconds`, m).then(() => {
                    tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    GojoMdNx.sendButtonText(m.chat, [{ buttonId: 'guess lyrics', buttonText: { displayText: 'Guess The Lyrics' }, type: 1 }], `Time Out\nAnswer:  ${tebaklirik[m.sender.split('@')[0]]}\n\Want To Play Again? PressThe Button Below`, GojoMdNx.user.name, m)
                    delete tebaklirik[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'blank') {
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) return replay(`There Are Still Unfinished Sessions!`)
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    GojoMdNx.sendText(m.chat, `*Answer The Following Questions :*\n${result.soal}*\nTime : 60 seconds`, m).then(() => {
                    caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
		    caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
                    })
                    await sleep(60000)
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    GojoMdNx.sendButtonText(m.chat, [{ buttonId: 'guess blank', buttonText: { displayText: 'Guess The Blank' }, type: 1 }], `Time Out\nAnswer:  ${caklontong[m.sender.split('@')[0]]}\nDescription : ${caklontong_desk[m.sender.split('@')[0]]}\n\Want To Play Again? PressThe Button Below`, GojoMdNx.user.name, m)
                    delete caklontong[m.sender.split('@')[0]]
		    delete caklontong_desk[m.sender.split('@')[0]]
                    }
                }
            }
            break

	case 'react': {
                if (!isCreator) throw mess.owner
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                GojoMdNx.sendMessage(m.chat, reactionMessage)
            }
            break


            case 'kuismath': case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) return replay(`There Are Still Unfinished Sessions!`)
                let { genMath, modes } = require('./lib/math')
                if (!text) return replay(`Mode: ${Object.keys(modes).join(' | ')}\nFor Examples: ${prefix}math medium`)
                let result = await genMath(text.toLowerCase())
                GojoMdNx.sendText(m.chat, `*What Is The Result Of: ${result.soal.toLowerCase()}*?\n\nTime: ${(result.waktu / 1000).toFixed(2)} second`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    reply("Time Out\nAnswer: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            case 'mysoulmate': {
            if (!m.isGroup) return replay(`${mess.group}`)
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫Your Match Is
@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: '❤️', buttonText: { displayText: '❤️' }, type: 1 }
                    ]
                    await GojoMdNx.sendButtonText(m.chat, buttons, jawab, GojoMdNx.user.name, m, {mentions: ments})
            }
            break
            case 'couple': {
            if (!m.isGroup) return replay(`${mess.group}`)
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}
Cieeee, What's Going On❤️💖👀`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: '❤️', buttonText: { displayText: '❤️' }, type: 1 }
                    ]
                    await GojoMdNx.sendButtonText(m.chat, buttons, jawab, GojoMdNx.user.name, m, {mentions: menst})
            }
            break
            case 'is':
				if (!text) return replay(`Use Text, Example : ${prefix + command} he married `)
					const apa = [`Yes`, `No`, `It Could Be`, `Thats right`]
					const kah = apa[Math.floor(Math.random() * apa.length)]
GojoMdNx.sendMessage(from, { text: `Question : Is ${q}\nAnswer : ${kah}` }, { quoted: m })

					break
					            case 'what':
				if (!text) return replay(`Use Text, Example : ${prefix + command} he married `)
					const lel = [`Ask Your Gf`, `I Dont Know`, `I Don't Know, Ask Your Father`]
					const kahk = lel[Math.floor(Math.random() * lel.length)]
GojoMdNx.sendMessage(from, { text: `Question : What ${q}\nAnswer : ${kahk}` }, { quoted: m })

					break
case 'can':
				if (!text) return replay(`Use Text, Example : ${prefix + command} you fuck her lol `)
					const bisa = [`Can`,`Can't`,`Cannot`,`Of Course You Can!!!`]
					const ga = bisa[Math.floor(Math.random() * bisa.length)]
GojoMdNx.sendMessage(from, { text: `Question : Can ${q}\nAnswer : ${ga}` }, { quoted: m })

					break
case 'how':
				if (!text) return replay(`Use Text, Example : ${prefix + command} is my face`)
					const gimana = [`It's Okay`, `It's Difficult Bro`, `Sorry Bot Can't Answer`, `Try Searching On Google`,`Holy Cow! Really???`,`Dizzy Ah`,`Ohhh I See:(`,`The Patient, Boss:(`,`How Are You?`]
					const ya = gimana[Math.floor(Math.random() * gimana.length)]
GojoMdNx.sendMessage(from, { text: `Question : ${q}\nAnswer : How ${ya}` }, { quoted: m })

					break
case 'rate':
				if (!text) return replay(`Use Text, Example : ${prefix + command} My Dp`)
					const ra = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const te = ra[Math.floor(Math.random() * ra.length)]
GojoMdNx.sendMessage(from, { text: `Rate : ${q}\nAnswer : *${te}%*` }, { quoted: m })

					break
  case 'handsomecheck':
				if (!text) return replay(`Tag Someone, Example : ${prefix + command} @Xeon`)
					const gan = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
GojoMdNx.sendMessage(from, { text: `*${command}*\n\nName : ${q}\nAnswer : *${teng}%*` }, { quoted: m })

					break
case 'beautifulcheck':
				if (!text) return replay(`Tag Someone, Example : ${prefix + command} @Xeon`)
					const can = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const tik = can[Math.floor(Math.random() * can.length)]
GojoMdNx.sendMessage(from, { text: `*${command}*\n\nNama : ${q}\nAnswer : *${tik}%*` }, { quoted: m })

					break
case 'awesomecheck':
  case 'greatcheck':
    case 'gaycheck':
      case 'cutecheck':
        case 'lesbicheck':
          case 'lesbiancheck':
             case 'hornycheck':
                 case 'prettycheck':
                    case 'lovelycheck':
                      case 'uglycheck':
				if (!text) return replay(`Tag Someone, Example : ${prefix + command} @Xeon`)
					const sangeh = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
GojoMdNx.sendMessage(from, { text: `*${command}*\n\nName : ${q}\nAnswer : *${sange}%*` }, { quoted: m })
					break
					case 'charactercheck':
					if (!text) return replay(`Tag Someone, Example : ${prefix + command} @Xeon`)
					const xeony =['Compassionate','Generous','Grumpy','Forgiving','Obedient','Good','Simp','Kind-Hearted','patient','UwU','top, anyway','Helpful']
					const taky = xeony[Math.floor(Math.random() * xeony.length)]
					GojoMdNx.sendMessage(from, { text: `Character Check : ${q}\nAnswer : *${taky}*` }, { quoted: m })
				     break
                    case 'stupid':
      case 'foolish':
      case 'smart':
      case 'idiot':
      case 'gay':
      case 'lesbi':
      case 'bastard':
      case 'stubble':
      case 'dog':
      case 'fuck':
      case 'ape':
      case 'noob':
      case 'great':
      case 'horny':
      case 'wibu':
      case 'asshole':
      case 'handsome':
      case 'beautiful':
      case 'cute':
      case 'kind':
      case 'ugly':
      case 'pretty':
      case 'lesbian':
      case 'randi':
      case 'gandu':
      case 'madarchod':
      case 'kala':
      case 'gora':
      case 'chutiya':
      case 'nibba':
      case 'nibbi':
      case 'bhosdiwala':
      case 'chutmarika':
      case 'bokachoda':
      case 'suarerbaccha':
      case 'bolochoda':
      case 'muthal':
      case 'muthbaaz':
      case 'randibaaz':
      case 'topibaaz':
      case 'cunt':
      case 'nerd':
      case 'behenchod':
      case 'behnchoda':
      case 'bhosdika':
      case 'bc':
      case 'nerd':
      case 'mc':
      case 'bsdk':
      case 'bhosdk':
      case 'nigger':
      case 'loda':
      case 'laund':
      case 'nigga':
      case 'sexy':
      case 'hot': {
            if (!m.isGroup) return replay(`${mess.group}`)
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `The Most *${command}* Here Is @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: '👀', buttonText: { displayText: '👀😂' }, type: 1 }
                    ]
                    await GojoMdNx.sendButtonText(m.chat, buttons, jawab, GojoMdNx.user.name, m, {mentions: ments})
            }
            break
case 'when':
				if (!text) return replay(`Use Text, Example : ${prefix + command} will i get married `)
					const kapan = ['5 More Days', '10 More Days', '15 More Days','20 More Days', '25 More Days','30 More Days','35 More Days','40 More Days','45 More Days','50 More Days','55 More Days','60 More Days','65 More Days','70 More Days','75 More Days','80 More Days','85 More Days','90 More Days','100 More Days','5 Months More', '10 Months More', '15 Months More','20 Months More', '25 Months More','30 Months More','35 Months More','40 Months More','45 Months More','50 Months More','55 Months More','60 Months More','65 Months More','70 Months More','75 Months More','80 Months More','85 Months More','90 Months More','100 Months More','1 More Year','2 More Years','3 More Years','4 More Years','5 More Years','Tomorrow','The Day After Tomorrow',`After This Command, You Too ${q}`]
					const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
GojoMdNx.sendMessage(from, { text: `Question : ${q}\nAnswer : *${kapankah}*` }, { quoted: m })
					break
case 'wangy':
              if (!text) return replay(`Use Text, Example : ${prefix + command} hinata`)
              qq = q.toUpperCase()
              awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaah the smell of hair ${qq} smelly i want to smell the fragrance ${qq} AAAAAAAAH ~ Her hair.... aaah i want to stroke her hair too ~~ AAAAAH ${qq} first time out in anime is cute too ❤️ ❤️ ❤️ so AAAAAAAH ${qq} AAAAAA LUCCUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️what ? ${qq} it's not real ? Just HELL you say ? no, no no no no no no no no no no no no no no no !! I DON'T CARE ABOUT THE REALITY, I DON'T CARE. ❤️ ❤️ ❤️ ${qq} me ... ${qq} on the laptop watching me, ${qq} .. you believe in me ? aaaaaaaaaaah thanks ${q} I don't want to give up ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH I STILL HAVE ${qq} ALSO NOT THE SAME AAAAAAAAAAAAAAH`
             reply(awikwok)
              break
case 'checkdeath':
             if (!text) return replay(`Use Someone's Name, Example : ${prefix + command} nexus`)
              predea = await axios.get(`https://api.agify.io/?name=${q}`)
              reply(`Name : ${predea.data.name}\n*Dead At Age :* ${predea.data.age} Year.\n\n_Quick, Quick, Repent Bro, Because No One Knows About Death_`)
              break
case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
            if (!m.quoted && !text) return replay(`Send/Reply Text With Caption ${prefix + command}`)
            ter = command[1].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            break
            case 'reactxxx': {
                if (!isCreator) return replay(`${mess.owner}`)
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                GojoMdNx.sendMessage(m.chat, reactionMessage)
            }
            break  
            case 'join': {
                if (!isCreator) return replay(`${mess.owner}`)
                if (!text) return replay(`Enter The Group Link!`)
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return replay(`Invalid Link!`)
                reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await GojoMdNx.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            }
            break
            case 'leave': {
                if (!isCreator) return replay(`${mess.owner}`)
                await GojoMdNx.groupLeave(m.chat).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            }
            break
            case 'setexif': {
               if (!isCreator) return replay(`${mess.owner}`)
               if (!text) return replay(`Example : ${prefix + command} packname|author`)
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          reply(`Exif Has Been Successfully Changed to\n\n🐦 Packname : ${global.packname}\n🐦 Author : ${global.author}`)
            }
            break
	case 'kick': {
		if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await GojoMdNx.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	case 'add': {
		if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await GojoMdNx.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	case 'promote': {
		if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await GojoMdNx.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	case 'demote': {
		if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await GojoMdNx.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
        case 'block': {
		if (!isCreator) return replay(`${mess.owner}`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await GojoMdNx.updateBlockStatus(users, 'block').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
        case 'unblock': {
		if (!isCreator) return replay(`${mess.owner}`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await GojoMdNx.updateBlockStatus(users, 'unblock').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	    case 'setname': case 'setgcname': case 'setsubject': {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) replay(`${mess.admin}`)
                if (!text) replay(`Where Is The Text?`)
                await GojoMdNx.groupUpdateSubject(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdesk': {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) replay(`${mess.admin}`)
                if (!text) replay(`Where Is The Text?`)
                await GojoMdNx.groupUpdateDescription(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
            }
            break
          case 'setbotpp': {
                if (!isCreator) return replay(`${mess.owner}`)
                if (!quoted) return replay(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
                if (/webp/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
                let media = await GojoMdNx.downloadAndSaveMediaMessage(quoted)
                await GojoMdNx.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                reply(mess.success)
                }
                break
           case 'setgrouppp': case 'setgruppp': case 'setgcpp': {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isAdmins) return replay(`${mess.admin}`)
                if (!quoted) return replay(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
                if (/webp/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
                let media = await GojoMdNx.downloadAndSaveMediaMessage(quoted)
                await GojoMdNx.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                reply(mess.success)
                }
                break

            case 'todos': {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
let teks = `╚»˙·٠•●♥ *COMUNICADO* ♥●•٠·˙«╝ 
 
 *Mensaje : ${q ? q : 'no message'}*\n\n`
                for (let mem of participants) {
                teks += `@${mem.id.split('@')[0]}\n`
                }
                GojoMdNx.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break

case 'ayuda': {
	let teks = `┌─────┤AYUDA├─────
├ *Nombre : 🌸Watame-BOT🌸*
│
├ *Creador : 🔰Manuel🔰*
│
├ *Número:*
├‣ +51931655706
│
├ *Grupo Oficial :*
├‣ https://bit.ly/3u6WPL0
└────────────────`
GojoMdNx.sendMessage(m.chat, { text: teks }, { quoted: m })
}
break

                case 'notif': {
            if (!m.isGroup) return replay(`${mess.group}`)
            if (!isBotAdmins) return replay(`${mess.botAdmin}`)
            if (!isAdmins) return replay(`${mess.admin}`)
            GojoMdNx.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break

	    case 'style': case 'styletext': {
	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //wont response when limit runs out\\
		db.data.users[m.sender].limit -= 1 // -1 limit
		let { styletext } = require('./lib/scraper')
		if (!text) return replay(`Enter Query Text!`)
                let anu = await styletext(text)
                let teks = `Entered Text ${text}\n\n`
                for (let i of anu) {
                    teks += `🐦 *${i.name}* : ${i.result}\n\n`
                }
                reply(teks)
	    }
	    break
               case 'vote': {
            if (!m.isGroup) return replay(`${mess.group}`)
            if (m.chat in vote) replay(`_There Are Still Votes In This Chat!_\n\n*${prefix}delvote* - To Delete Vote Session`)
            if (!text) return replay(`Enter Reason For Vote, Example: *${prefix + command} Handsome Owner*`)
            reply(`Voting Starts!\n\n*${prefix}upvote* - For Upvote\n*${prefix}devote* - For Devote\n*${prefix}checkvote* - To Check The Vote\n*${prefix}delvote* - To Delete Vote Session`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `*「 VOTE 」*
*Reason:* ${vote[m.chat][0]}
┌〔 UPVOTE 〕
│ 
┃╠ Total: ${vote[m.chat][1].length}
│
│ 
└────
┌〔 DEVOTE 〕
│ 
┃╠ Total: ${vote[m.chat][2].length}
│
│ 
└────
*${prefix}delvote* - To Delete Vote Session`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: 'Upvote'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: 'Devote'}, type: 1}
]

            let buttonMessageVote = {
                text: teks_vote,
                footer: GojoMdNx.user.name,
                buttons: buttonsVote,
                headerType: 1
            }
            GojoMdNx.sendMessage(m.chat, buttonMessageVote)
	    }
            break
               case 'upvote': {
            if (!m.isGroup) return replay(`${mess.group}`)
            if (!(m.chat in vote)) return replay(`_*No Voting In This Group!*_\n\n*${prefix}vote* - To Start Voting`)
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) replay(`You've Voted`)
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*
*Reason:* ${vote[m.chat][0]}
┌〔 UPVOTE 〕
│ 
┃╠ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `┃╠ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────
┌〔 DEVOTE 〕
│ 
┃╠ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `┃╠ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────
*${prefix}delvote* - To Delete Vote Session`
            let buttonsUpvote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: 'Upvote'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: 'Devote'}, type: 1}
            ]

            let buttonMessageUpvote = {
                text: teks_vote,
                footer: GojoMdNx.user.name,
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            GojoMdNx.sendMessage(m.chat, buttonMessageUpvote)
	    }
             break
                case 'devote': {
            if (!m.isGroup) return replay(`${mess.group}`)
            if (!(m.chat in vote)) return replay(`_*No Voting In This Group!*_\n\n*${prefix}vote* - To Start Voting`)
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) return replay(`You've Voted`)
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*
*Reason:* ${vote[m.chat][0]}
┌〔 UPVOTE 〕
│ 
┃╠ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `┃╠ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────
┌〔 DEVOTE 〕
│ 
┃╠ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `┃╠ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────
*${prefix}delvote* - To Delete Vote Session`
            let buttonsDevote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: 'Upvote'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: 'Devote'}, type: 1}
            ]

            let buttonMessageDevote = {
                text: teks_vote,
                footer: GojoMdNx.user.name,
                buttons: buttonsDevote,
                headerType: 1,
                mentions: menvote
            }
            GojoMdNx.sendMessage(m.chat, buttonMessageDevote)
	}
            break

case 'checkvote':
if (!m.isGroup) return replay(`${mess.group}`)
if (!(m.chat in vote)) return replay(`_*No Voting In This Group!*_\n\n*${prefix}vote* - To Start Voting`)
teks_vote = `*「 VOTE 」*
*Reason:* ${vote[m.chat][0]}
┌〔 UPVOTE 〕
│ 
┃╠ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `┃╠ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────
┌〔 DEVOTE 〕
│ 
┃╠ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `┃╠ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────
*${prefix}delvote* - To Delete Vote Session
©${GojoMdNx.user.id}
`
GojoMdNx.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': case 'hapusvote': {
            if (!m.isGroup) return replay(`${mess.group}`)
            if (!(m.chat in vote)) return replay(`_*No Voting In This Group!*_\n\n*${prefix}vote* - To Start Voting`)
            delete vote[m.chat]
            reply('Successfully Deleted The Vote Session In This Group')
	    }
            break
               case 'group': case 'grup': {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
                if (args[0] === 'close'){
                    await GojoMdNx.groupSettingUpdate(m.chat, 'announcement').then((res) => reply(`Successful Closing The Group`)).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await GojoMdNx.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(`Successful Opening The Group`)).catch((err) => reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: 'group open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'group close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await GojoMdNx.sendButtonText(m.chat, buttons, `Group Mode`, GojoMdNx.user.name, m)

             }
            }
            break
            case 'editinfo': {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
             if (args[0] === 'open'){
                await GojoMdNx.groupSettingUpdate(m.chat, 'unlocked').then((res) => reply(`Successfully Opened Edit Group Info`)).catch((err) => reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await GojoMdNx.groupSettingUpdate(m.chat, 'locked').then((res) => reply(`Successfully Closed Edit Group Info`)).catch((err) => reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: 'editinfo open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'editinfo close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await GojoMdNx.sendButtonText(m.chat, buttons, `Mode Edit Info`, GojoMdNx.user.name, m)

            }
            }
            break
            case 'antilink': {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
                if (args[0] === "on") {
                if (db.data.chats[m.chat].antilink) return reply(`Activated`)
                db.data.chats[m.chat].antilink = true
                reply(`Antilink Active !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].antilink) return reply(`Deactivated`)
                db.data.chats[m.chat].antilink = false
                reply(`Antilink Inactive !`)
                } else {
                 let buttons = [
                        { buttonId: 'antilink on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'antilink off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await GojoMdNx.sendButtonText(m.chat, buttons, `Antilink Mode`, GojoMdNx.user.name, m)
                }
             }
             break
             case 'mute': {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
                if (args[0] === "on") {
                if (db.data.chats[m.chat].mute) return reply(`Previously Active`)
                db.data.chats[m.chat].mute = true
                reply(`${GojoMdNx.user.name} Has Been Muted In This Group !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].mute) return reply(`Previously Inactive`)
                db.data.chats[m.chat].mute = false
                reply(`${GojoMdNx.user.name} Has Been Unmuted In This Group!`)
                } else {
                 let buttons = [
                        { buttonId: 'mute on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'mute off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await GojoMdNx.sendButtonText(m.chat, buttons, `Mute Bot`, GojoMdNx.user.name, m)
                }
             }
             break

            case 'linkgroup': {
                if (!m.isGroup) return replay(`${mess.group}`)
                let response = await GojoMdNx.groupInviteCode(m.chat)
                GojoMdNx.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\n*Link del grupo:* ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break

            case 'ephemeral': {
                if (!m.isGroup) replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
                if (!text) return replay(`Enter The enable/disable Values`)
                if (args[0] === 'enable') {
                    await GojoMdNx.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'disable') {
                    await GojoMdNx.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                }
            }
            break
            case 'delete': case 'del': {
                if (!m.quoted) reply(false)
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) return replay(`The Message Was Not Sent By A Bot!`)
                GojoMdNx.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'bcgroup': {
                if (!isCreator) return replay(`${mess.owner}`)
                if (!text) return replay(`Where Is The Text?\n\nExample : ${prefix + command} Nexus Handsome`)
                let getGroups = await GojoMdNx.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                reply(`ENVIANDO MENSAJE A ${anu.length} GRUPOS`)
                for (let i of anu) {
                    await sleep(1500)
                    let btn = [{
                                quickReplyButton: {
                                    displayText: '🎀Menu🎀',
                                    id: 'menu'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '👤Owner👤',
                                    id: 'owner'
                                }
                            }]
                      let txt = `「 ANUNCIO GLOBAL 🎉」\n\n${text}`
                      GojoMdNx.send5ButImg(i, txt, GojoMdNx.user.name, global.thumb01, btn)
                    }
                reply(`SE ENVIÓ CORRECTAMENTE A ${anu.length} GRUPOS`)
            }
            break
            case 'bc': case 'broadcast': case 'bcall': {
                if (!isCreator) return replay(`${mess.owner}`)
                if (!text) return replay(`Where Is The Text?\n\nExample : ${prefix + command} Nexus`)
                let anu = await store.chats.all().map(v => v.id)
                reply(`Send Broadcast To ${anu.length} Chat\nFinish Time ${anu.length * 1.5} Seconds`)
		for (let yoi of anu) {
		    await sleep(1500)
		    let btn = [{
                                quickReplyButton: {
                                    displayText: '🎀Menu🎀',
                                    id: 'menu'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '👤Owner👤',
                                    id: 'owner'
                                }
                            }]
                      let txt = `「 ANUNCIO GLOBAL 🎉」\n\n${text}`
                      GojoMdNx.send5ButImg(yoi, txt, GojoMdNx.user.name, global.thumb, btn)
		}
		reply('SE ENVIÓ CORRECTAMENTE')
            }
            break
           
            case 'listpc': case 'pclist': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `⬣ *PERSONAL CHAT LIST*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `💫 *Name :* ${nama}\n💫 *User :* @${i.split('@')[0]}\n💫 *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 GojoMdNx.sendTextWithMentions(m.chat, teks, m)
             }
             break
                case 'listgc': case 'gclist': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `⬣ *GROUP CHAT LIST*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await GojoMdNx.groupMetadata(i)
                     teks += `💫 *Name :* ${metadata.subject}\n💫 *Owner :* @${metadata.owner.split('@')[0]}\n💫 *ID :* ${metadata.id}\n💫 *Made :* ${moment(metadata.creation * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss')}\n💫 *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 GojoMdNx.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case 'listonlinexxx': case 'onlinelistxxx': {
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    GojoMdNx.sendText(m.chat, 'Online List:\n\n' + online.map(v => '🐦 @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break

            case 'sticker': {
            if (!quoted) return replay(`Etiqueta una imagen o video (máximo: 10 segundos)👈`)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await GojoMdNx.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return reply('Máximo 10 segundos! 😾')
                let media = await quoted.download()
                let encmedia = await GojoMdNx.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                reply(`Etiqueta una imagen o video (máximo: 10 segundos)👈`)
                }
            }
            break

case 'smemex': case 'stickermemex': case 'stickmemex': {
let { TelegraPh } = require('./lib/uploader')
if (!text) return reply(`Send/Reply Photo With Caption ${prefix + command} *Text*`)
if (text.includes('|')) return reply(`Send/Reply Photo With Caption ${prefix + command} *Text*`)
if (!/image/.test(mime)) return reply(`Send/Reply Photo With Caption ${prefix + command} *Text*`)
reply(mess.wait)
mee = await GojoMdNx.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
meme = `https://api.memegen.link/images/custom/-/${text}.png?background=${mem}`
memek = await GojoMdNx.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(memek)
}
break
            case 'ebinary': {
            if (!m.quoted.text && !text) return replay(`Reply Text With Caption ${prefix + command}`)
            let { eBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let eb = await eBinary(teks)
            reply(eb)
        }
        break
            case 'dbinary': {
            if (!m.quoted.text && !text) return replay(`Reply Text With Caption ${prefix + command}`)
            let { dBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let db = await dBinary(teks)
            reply(db)
        }
        break
            case 'emojimix': {
	        if (!text) return replay(`*Ejemplo:* ${prefix + command} 😅+🤔`)
		let [emoji1, emoji2] = text.split`+`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await GojoMdNx.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break

            case 'toimage': case 'toimg': {
                if (!quoted) return reply(`Reply Image`)
                if (!/webp/.test(mime)) reply(`Reply Sticker With Caption *${prefix + command}*`)
                reply(mess.wait)
                let media = await GojoMdNx.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) reply(err)
                    let buffer = fs.readFileSync(ran)
                    GojoMdNx.sendMessage(m.chat, { image: buffer })
                    fs.unlinkSync(ran)
                })
            }
            break

	        case 'tomp4': case 'tovideo': {
                if (!quoted) reply(`Reply Image`)
                if (!/webp/.test(mime)) return replay(`Reply Sticker With Caption *${prefix + command}*`)
                reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await GojoMdNx.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await GojoMdNx.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'toaud': case 'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) return replay(`Send/Reply Video/Audio You Want To Use As Audio With Caption ${prefix + command}`)
            if (!quoted) return reply(`Send/Reply Video/Audio You Want To Convert To Audio With Caption ${prefix + command}`)
            reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            GojoMdNx.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'tomp3': {
            if (/document/.test(mime)) return reply(`Send/Reply Video/Audio You Want to Convert Into MP3 With Caption ${prefix + command}`)
            if (!/video/.test(mime) && !/audio/.test(mime)) return replay(`Send/Reply Video/Audio You Want To Convert into MP3 With Caption ${prefix + command}`)
            if (!quoted) return replay(`Send/Reply Video/Audio You Want To Convert Into MP3 With Caption ${prefix + command}`)
            reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            GojoMdNx.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Converted By ${GojoMdNx.user.name}.mp3`}, { quoted : m })
            }
            break
            case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`)
            if (!quoted) return reply(`Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`)
            reply(mess.wait)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            GojoMdNx.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break

            case 'togif': {
                if (!quoted) return reply(`Reply Image`)
                if (!/webp/.test(mime)) return reply(`Reply Sticker With Caption *${prefix + command}*`)
                reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await GojoMdNx.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await GojoMdNx.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break

            case 'violar': {
const viola = ['https://files.catbox.moe/ddlyt9.mp4',
'https://files.catbox.moe/1v2fyo.mp4',
'https://files.catbox.moe/45zjio.mp4',
'https://files.catbox.moe/2ryrfc.mp4',
'https://files.catbox.moe/444j78.mp4',
'https://files.catbox.moe/ezkkzl.mp4']
const viiol = viola[Math.floor(Math.random() * viola.length)]
GojoMdNx.sendMessage(m.chat, { video: { url: viiol }, gifPlayback: true })
            }
break

case 'abrazar': {
const abra = ['https://files.catbox.moe/4mg5ik.mp4',
'https://files.catbox.moe/clghfo.mp4',
'https://files.catbox.moe/tue6s4.mp4',
'https://files.catbox.moe/r3dz0j.mp4',
'https://files.catbox.moe/2o5fkw.mp4',
'https://files.catbox.moe/tunn2c.mp4']
const abras = abra[Math.floor(Math.random() * abra.length)]				
GojoMdNx.sendMessage(m.chat, { video: { url: abras }, gifPlayback: true })
            }
break

	        case 'tourl': {
                reply(mess.wait)
		        let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await GojoMdNx.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break

            case 'imagenobgxxx': case 'removebgxxx': case 'remove-bgxxx': {
	    if (!quoted) return replay(`Send/Reply Image With Caption ${prefix + command}`)
	    if (!/image/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
	    if (/webp/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await GojoMdNx.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    reply(mess.wait)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    GojoMdNx.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break

        case 'gimage': {
        if (!text) return reply(`*Ejemplo:* ${prefix + command} Auronplay`)
        let gis = require('g-i-s')
        gis(text, async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)].url
        success = global.send[Math.floor(Math.random() * global.send.length)]
        let buttons = [
                    {buttonId: `gimage ${text}`, buttonText: {displayText: 'Siguiente'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `${success}`,
                    buttons: buttons,
                    headerType: 4
                }
                GojoMdNx.sendMessage(m.chat, buttonMessage, { quoted: m })
        })
        }
        break

	    case 'play': {
                if (!text) return reply(`*Ejemplo:* ${prefix + command} The Strokes`)
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttons = [
                    {buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: 'Audio'}, type: 1},
                    {buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: 'Video'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: anu.thumbnail },
                    caption: `❒═════❬ *𝐏𝐋𝐀𝐘* ❭═════╾❒
├‣ *Nombre* : 
┴
${anu.title}
┬
├‣ *Canal* : 
┴
${anu.author.name}
┬
├‣ *Visitas*
┴
${anu.views}
┬
❒═════════════════╾❒`,
                    footer: GojoMdNx.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                GojoMdNx.sendMessage(m.chat, buttonMessage)
            }
            break

	    case 'ytmp3': {
                let { yta } = require('./lib/y2mate')
                if (!text) return reply(`*Ejemplo:* ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`)
                let quality = args[1] ? args[1] : '320kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 99999) return reply('EL ARCHIVO MUY GRANDE 😿\nMAXIMO: 100MB')
                GojoMdNx.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` })
            }
            break

            case 'ytmp4': {
                let { ytv } = require('./lib/y2mate')
                if (!text) return reply(`*Ejemplo:* ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`)
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 99999) return reply('EL ARCHIVO MUY GRANDE 😿\nMAXIMO: 100MB')
                GojoMdNx.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `Aquí tienes 💕` })
            }
            break
            
            case 'pinterest': {
                reply(mess.wait)
		let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                GojoMdNx.sendMessage(m.chat, { image: { url: result }, caption: '🐦 Media Url : '+result }, { quoted: m })
            }
            break

            case 'waifu': case 'husbu': case 'neko': case 'shinobu': case 'megumin': case 'waifus': case 'nekos': case 'trap': case 'blowjob': {
                GojoMdNx.sendMessage(m.chat, { image: { url: api('zenz', '/randomanime/'+command, {}, 'apikey') }, caption: 'Aquí tienes 💕🦈'}, { quoted: m })
            }
            break

case 'thighs': {
                GojoMdNx.sendMessage(m.chat, { image: { url: api('zenz', '/api/morensfw/'+command, {}, 'apikey') }, caption: 'Aquí tienes 💕🦈'}, { quoted: m })
            }
            break

	case 'cum': case 'yuri': case 'femdom': case'pussy': {
                GojoMdNx.sendMessage(m.chat, { image: { url: api('lolhuman', '/api/random2/'+command, {}, 'apikey') }, caption: 'Aquí tienes 💕🦈'}, { quoted: m })
            }
            break

case 'yaoi': {
                GojoMdNx.sendMessage(m.chat, { image: { url: api('lolhuman', '/api/random/nsfw/'+command, {}, 'apikey') }, caption: 'Aquí tienes 💕🦈'}, { quoted: m })
            }
            break

case 'patas': {
                GojoMdNx.sendMessage(m.chat, { image: { url: 'https://api.lolhuman.xyz/api/random2/feet?apikey=c9b3628121d4a8adfbff2e11' }, caption: 'Aquí tienes 💕🦈'}, { quoted: m })
            }
            break

case 'foxgirl': {
                GojoMdNx.sendMessage(m.chat, { image: { url: 'https://api.lolhuman.xyz/api/random2/fox_girl?apikey=c9b3628121d4a8adfbff2e11' }, caption: 'Aquí tienes 💕🦈'}, { quoted: m })
            }
            break

	    case 'couplepp':  case 'ppcouple': {
                reply(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                GojoMdNx.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male🙎🏻‍♂️` }, { quoted: m })
                GojoMdNx.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female🙎🏻‍♀️` }, { quoted: m })
            }
	    break
            case 'coffee': case 'kopi': {
            let buttons = [
                    {buttonId: `coffe`, buttonText: {displayText: '➡️Next Image➡️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `☕ Random Coffee`,
                    footer: GojoMdNx.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                GojoMdNx.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wallpaper': {
                if (!text) return reply(`Enter Query Title`)
		let { wallpaper } = require('./lib/scraper')
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `wallpaper ${text}`, buttonText: {displayText: '➡️Next Image➡️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `🐦 Title : ${result.title}\n🐦 Category : ${result.type}\n🐦 Detail : ${result.source}\n🐦 Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: GojoMdNx.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                GojoMdNx.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wikimedia': {
                if (!text) return reply(`Enter Query Title`)
		let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `wikimedia ${text}`, buttonText: {displayText: '➡️Next Image➡️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `🐦 Title : ${result.title}\n🐦 Source : ${result.source}\n🐦 Media Url : ${result.image}`,
                    footer: GojoMdNx.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                GojoMdNx.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'quotesanime': case 'animequotes': case 'animequote': case 'quoteanime': {
		let { quotesAnime } = require('./lib/scraper')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `quotesanime`, buttonText: {displayText: '➡️Next➡️'}, type: 1}
                ]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                GojoMdNx.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	        case 'motivasi': case 'motivationalquote': case 'bucinquote': case 'katasenja': case 'puisi': {
                let anu = await fetchJson(api('zenz', '/api/'+command, {}, 'apikey'))
                let buttons = [
                    {buttonId: `motivasi`, buttonText: {displayText: '➡️Next➡️'}, type: 1}
                ]
                let buttonMessage = {
                    text: anu.result.message,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                GojoMdNx.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case '3dchristmas': case '3ddeepsea': case 'americanflag': case '3dscifi': case '3drainbow': case '3dwaterpipe': case 'halloweenskeleton': case 'sketch': case 'bluecircuit': case 'space': case 'metallic': case 'fiction': case 'greenhorror': case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dcrackedstone': case '3dneonlight': case 'impressiveglitch': case 'naturalleaves': case 'fireworksparkle': case 'matrix': case 'dropwater':  case 'harrypotter': case 'foggywindow': case 'neondevils': case 'christmasholiday': case '3dgradient': case 'blackpink': case 'gluetext': {
                if (!text) return reply(`Enter Text, Example : ${prefix + command} Xeon`)
                reply(mess.wait)
                GojoMdNx.sendMessage(m.chat, { image: { url: api('zenz', '/textpro/' + command, { text: text }, 'apikey') }, caption: `Text Pro ${command}` })
	    }
            break
	    case 'nomerhoki': case 'nomorhoki': {
                if (!Number(text)) return reply(`Example : ${prefix + command} 916909137213`)
                let anu = await primbon.nomer_hoki(Number(text))
                if (anu.status == false) return reply(anu.message)
                GojoMdNx.sendText(m.chat, `🐦 *Phone Number :* ${anu.message.nomer_hp}\n🐦 *Shuzi Angka Figures :* ${anu.message.angka_shuzi}\n🐦 *Positive Energy :*\n- Riches : ${anu.message.energi_positif.kekayaan}\n- Health : ${anu.message.energi_positif.kesehatan}\n- Love : ${anu.message.energi_positif.cinta}\n- Stability : ${anu.message.energi_positif.kestabilan}\n- Percentage : ${anu.message.energi_positif.persentase}\n🐦 *Negative Energy :*\n- Dispute : ${anu.message.energi_negatif.perselisihan}\n- Lost : ${anu.message.energi_negatif.kehilangan}\n- Catastrophe : ${anu.message.energi_negatif.malapetaka}\n- Destruction : ${anu.message.energi_negatif.kehancuran}\n- Percentage : ${anu.message.energi_negatif.persentase}`, m)
            }
            break
            case 'artimimpi': case 'tafsirmimpi': {
                if (!text) return reply(`Example : ${prefix + command} belanja`)
                let anu = await primbon.tafsir_mimpi(text)
                if (anu.status == false) return reply(anu.message)
                GojoMdNx.sendText(m.chat, `🐦 *Dream :* ${anu.message.mimpi}\n🐦 *Meaning :* ${anu.message.arti}\n🐦 *Solution :* ${anu.message.solusi}`, m)
            }
            break
            case 'ramalanjodoh': case 'ramaljodoh': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return reply(anu.message)
                GojoMdNx.sendText(m.chat, `🐦 *Your Name :* ${anu.message.nama_anda.nama}\n🐦 *Your Birth :* ${anu.message.nama_anda.tgl_lahir}\n🐦 *Couple Name :* ${anu.message.nama_pasangan.nama}\n🐦 *Born Couple :* ${anu.message.nama_pasangan.tgl_lahir}\n🐦 *Results :* ${anu.message.result}\n🐦 *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalanjodohbali': case 'ramaljodohbali': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return reply(anu.message)
                GojoMdNx.sendText(m.chat, `🐦 *Your Name :* ${anu.message.nama_anda.nama}\n🐦 *Your Birth :* ${anu.message.nama_anda.tgl_lahir}\n🐦 *Couple Name :* ${anu.message.nama_pasangan.nama}\n🐦 *Born Couple :* ${anu.message.nama_pasangan.tgl_lahir}\n🐦 *Results :* ${anu.message.result}\n🐦 *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'suamiistri': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return reply(anu.message)
                GojoMdNx.sendText(m.chat, `🐦 *Husband's Name :* ${anu.message.suami.nama}\n🐦 *Husband Born :* ${anu.message.suami.tgl_lahir}\n🐦 *Wife's Name :* ${anu.message.istri.nama}\n🐦 *Born Wife :* ${anu.message.istri.tgl_lahir}\n🐦 *Results :* ${anu.message.result}\n🐦 *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalancinta': case 'ramalcinta': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return reply(anu.message)
                GojoMdNx.sendText(m.chat, `🐦 *Your Name :* ${anu.message.nama_anda.nama}\n🐦 *Your Birth :* ${anu.message.nama_anda.tgl_lahir}\n🐦 *Couple Name :* ${anu.message.nama_pasangan.nama}\n🐦 *Born Couple :* ${anu.message.nama_pasangan.tgl_lahir}\n🐦 *Positive Side :* ${anu.message.sisi_positif}\n🐦 *Negative Side :* ${anu.message.sisi_negatif}\n🐦 *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'artinama': {
                if (!text) throw `Example : ${prefix + command} Dika Ardianta`
                let anu = await primbon.arti_nama(text)
                if (anu.status == false) return reply(anu.message)
                GojoMdNx.sendText(m.chat, `🐦 *Name :* ${anu.message.nama}\n🐦 *Meaning :* ${anu.message.arti}\n🐦 *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'kecocokannama': case 'cocoknama': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                GojoMdNx.sendText(m.chat, `🐦 *Name :* ${anu.message.nama}\n🐦 *Born :* ${anu.message.tgl_lahir}\n🐦 *Life Path :* ${anu.message.life_path}\n🐦 *Destiny :* ${anu.message.destiny}\n🐦 *Destiny Desire :* ${anu.message.destiny_desire}\n🐦 *Personality :* ${anu.message.personality}\n🐦 *Percentage :* ${anu.message.persentase_kecocokan}`, m)
            }
            break
            case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
                if (!text) throw `Example : ${prefix + command} Dika|Novia`
                let [nama1, nama2] = text.split`|`
                let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
                if (anu.status == false) return reply(anu.message)
                GojoMdNx.sendImage(m.chat,  anu.message.gambar, `🐦 *Your Name :* ${anu.message.nama_anda}\n🐦 *Couple Name :* ${anu.message.nama_pasangan}\n🐦 *Positive Side :* ${anu.message.sisi_positif}\n🐦 *Negative Side :* ${anu.message.sisi_negatif}`, m)
            }
            break
            case 'jadianpernikahan': case 'jadiannikah': {
                if (!text) throw `Example : ${prefix + command} 6, 12, 2020`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                GojoMdNx.sendText(m.chat, `🐦 *Wedding Date :* ${anu.message.tanggal}\n🐦 *Characteristics :* ${anu.message.karakteristik}`, m)
            }
            break
            case 'sifatusaha': {
                if (!ext)throw `Example : ${prefix+ command} 28, 12, 2021`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                GojoMdNx.sendText(m.chat, `🐦 *Born :* ${anu.message.hari_lahir}\n🐦 *Business :* ${anu.message.usaha}`, m)
            }
            break
            case 'rejeki': case 'rezeki': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                GojoMdNx.sendText(m.chat, `🐦 *Born :* ${anu.message.hari_lahir}\n🐦 *Sustenance :* ${anu.message.rejeki}\n🐦 *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'pekerjaan': case 'kerja': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                GojoMdNx.sendText(m.chat, `🐦 *Born :* ${anu.message.hari_lahir}\n🐦 *Profession :* ${anu.message.pekerjaan}\n🐦 *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalannasib': case 'ramalnasib': case 'nasib': {
                if (!text) throw `Example : 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.ramalan_nasib(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                GojoMdNx.sendText(m.chat, `🐦 *Analysis :* ${anu.message.analisa}\n🐦 *Root Number :* ${anu.message.angka_akar}\n🐦 *Nature :* ${anu.message.sifat}\n🐦 *Element :* ${anu.message.elemen}\n🐦 *Lucky Numbers :* ${anu.message.angka_keberuntungan}`, m)
            }
            break
            case 'potensipenyakit': case 'penyakit': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                GojoMdNx.sendText(m.chat, `🐦 *Analysis :* ${anu.message.analisa}\n🐦 *Sector :* ${anu.message.sektor}\n?? *Element :* ${anu.message.elemen}\n🐦 *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'artitarot': case 'tarot': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                GojoMdNx.sendImage(m.chat, anu.message.image, `🐦 *Born :* ${anu.message.tgl_lahir}\n🐦 *Tarot Symbol :* ${anu.message.simbol_tarot}\n🐦 *Meaning :* ${anu.message.arti}\n🐦 *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'fengshui': {
                if (!text) throw `Example : ${prefix + command} Dika, 1, 2005\n\nNote : ${prefix + command} Name, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
                let [nama, gender, tahun] = text.split`,`
                let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
                if (anu.status == false) return reply(anu.message)
                GojoMdNx.sendText(m.chat, `🐦 *Name :* ${anu.message.nama}\n🐦 *Born :* ${anu.message.tahun_lahir}\n🐦 *Gender :* ${anu.message.jenis_kelamin}\n🐦 *Kua Number :* ${anu.message.angka_kua}\n🐦 *Group :* ${anu.message.kelompok}\n🐦 *Character :* ${anu.message.karakter}\n🐦 *Good Sector :* ${anu.message.sektor_baik}\n🐦 *Bad Sector :* ${anu.message.sektor_buruk}`, m)
            }
            break
            case 'haribaik': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.petung_hari_baik(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                GojoMdNx.sendText(m.chat, `🐦 *Born :* ${anu.message.tgl_lahir}\n🐦 *When Challenged :* ${anu.message.kala_tinantang}\n🐦 *Info :* ${anu.message.info}\n🐦 *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'harisangar': case 'taliwangke': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                GojoMdNx.sendText(m.chat, `🐦 *Born :* ${anu.message.tgl_lahir}\n🐦 *Results :* ${anu.message.result}\n🐦 *Info :* ${anu.message.info}\n🐦 *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'harinaas': case 'harisial': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                GojoMdNx.sendText(m.chat, `🐦 *Day Of Birth :* ${anu.message.hari_lahir}\n🐦 *Date Of Birth :* ${anu.message.tgl_lahir}\n🐦 *Fateful Day :* ${anu.message.hari_naas}\n🐦 *Info :* ${anu.message.catatan}\n🐦 *Notes :* ${anu.message.info}`, m)
            }
            break
            case 'nagahari': case 'harinaga': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                GojoMdNx.sendText(m.chat, `🐦 *Day Of Birth :* ${anu.message.hari_lahir}\n🐦 *Date Of Birth :* ${anu.message.tgl_lahir}\n🐦 *Dragon Day Direction :* ${anu.message.arah_naga_hari}\n🐦 *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'arahrejeki': case 'arahrezeki': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                GojoMdNx.sendText(m.chat, `🐦 *Day Of Birth :* ${anu.message.hari_lahir}\n🐦 *Date Of Birth :* ${anu.message.tgl_lahir}\n🐦 *Sustenance Direction :* ${anu.message.arah_rejeki}\n🐦 *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'peruntungan': {
                if (!text) throw `Example : ${prefix + command} DIka, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Name, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
                let [nama, tgl, bln, thn, untuk] = text.split`,`
                let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
                if (anu.status == false) return reply(anu.message)
                GojoMdNx.sendText(m.chat, `?? *Name :* ${anu.message.nama}\n🐦 *Born :* ${anu.message.tgl_lahir}\n🐦 *Fortune Of The Year :* ${anu.message.peruntungan_tahun}\n🐦 *Results :* ${anu.message.result}\n🐦 *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'weton': case 'wetonjawa': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.weton_jawa(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                GojoMdNx.sendText(m.chat, `🐦 *Date :* ${anu.message.tanggal}\n🐦 *Number Of Neptune :* ${anu.message.jumlah_neptu}\n🐦 *Day Character :* ${anu.message.watak_hari}\n🐦 *Dragon Day :* ${anu.message.naga_hari}\n🐦 *Good Hour :* ${anu.message.jam_baik}\n🐦 *Birth Character :* ${anu.message.watak_kelahiran}`, m)
            }
            break
            case 'sifat': case 'karakter': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                GojoMdNx.sendText(m.chat, `🐦 *Name :* ${anu.message.nama}\n🐦 *Born :* ${anu.message.tgl_lahir}\n🐦 *Lifeline :* ${anu.message.garis_hidup}`, m)
            }
            break
            case 'keberuntungan': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                GojoMdNx.sendText(m.chat, `🐦 *Name :* ${anu.message.nama}\n🐦 *Born :* ${anu.message.tgl_lahir}\n🐦 *Results :* ${anu.message.result}`, m)
            }
            break
            case 'memancing': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                GojoMdNx.sendText(m.chat, `🐦 *Date :* ${anu.message.tgl_memancing}\n🐦 *Results :* ${anu.message.result}\n🐦 *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'masasubur': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} First Day Of Menstruation Cycle`
                let [tgl, bln, thn, siklus] = text.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return reply(anu.message)
                GojoMdNx.sendText(m.chat, `🐦 *Results :* ${anu.message.result}\n🐦 *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'zodiak': case 'zodiac': {
                if (!text) throw `Example : ${prefix+ command} 7 7 2005`
                let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
                ].reverse()

                function getZodiac(month, day) {
                    let d = new Date(1970, month - 1, day)
                    return zodiak.find(([_,_d]) => d >= _d)[0]
                }
                let date = new Date(text)
                if (date == 'Invalid Date') throw date
                let d = new Date()
                let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
                let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

                let zodiac = await getZodiac(birth[1], birth[2])

                let anu = await primbon.zodiak(zodiac)
                if (anu.status == false) return reply(anu.message)
                GojoMdNx.sendText(m.chat, `🐦 *Zodiac :* ${anu.message.zodiak}\n🐦 *Number :* ${anu.message.nomor_keberuntungan}\n🐦 *Aroma :* ${anu.message.aroma_keberuntungan}\n🐦 *Planet :* ${anu.message.planet_yang_mengitari}\n🐦 *Flower :* ${anu.message.bunga_keberuntungan}\n🐦 *Color :* ${anu.message.warna_keberuntungan}\n🐦 *Stone :* ${anu.message.batu_keberuntungan}\n🐦 *Element :* ${anu.message.elemen_keberuntungan}\n🐦 *Zodiac Couple :* ${anu.message.pasangan_zodiak}\n🐦 *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'shio': {
                if (!text) throw `Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
                let anu = await primbon.shio(text)
                if (anu.status == false) return reply(anu.message)
                GojoMdNx.sendText(m.chat, `🐦 *Results :* ${anu.message}`, m)
            }
            break
	    case 'stalker': case 'stalk': {
		if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply('Your Daily Limit Has Expired')
                if (!text) return reply(`Example : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                let [type, id, zone] = args
                if (type.toLowerCase() == 'ff') {
                    if (!id) return reply(`No Query id, Example ${prefix + command} ff 552992060`)
                    let anu = await fetchJson(api('zenz', '/api/nickff', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return reply(anu.result.message)
                    reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'ml') {
                    if (!id) return reply(`No Query id, Example : ${prefix + command} ml 214885010 2253`)
                    if (!zone) return reply(`No Query id, Example : ${prefix + command} ml 214885010 2253`)
                    let anu = await fetchJson(api('zenz', '/api/nickml', { apikey: global.APIKeys[global.APIs['zenz']], query: id, query2: zone }))
                    if (anu.status == false) return reply(anu.result.message)
                    reply(`ID : ${anu.result.gameId}\nZone : ${anu.result.zoneId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'aov') {
                    if (!id) return reply(`No Query id, Example ${prefix + command} aov 293306941441181`)
                    let anu = await fetchJson(api('zenz', '/api/nickaov', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return reply(anu.result.message)
                    reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'cod') {
                    if (!id) return reply(`No Query id, Example ${prefix + command} cod 6290150021186841472`)
                    let anu = await fetchJson(api('zenz', '/api/nickcod', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return reply(anu.result.message)
                    reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'pb') {
                    if (!id) return reply(`No Query id, Example ${prefix + command} pb riio46`)
                    let anu = await fetchJson(api('zenz', '/api/nickpb', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return reply(anu.result.message)
                    reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'ig') {
                    if (!id) return reply(`No Query username, Example : ${prefix + command} ig josephxeon13`)
                    let { result: anu } = await fetchJson(api('zenz', '/api/stalker/ig', { username: id }, 'apikey'))
                    if (anu.status == false) return reply(anu.result.message)
                    GojoMdNx.sendMedia(m.chat, anu.caption.profile_hd, '', `🐦 Full Name : ${anu.caption.full_name}\n🐦 User Name : ${anu.caption.user_name}\n🐦 ID ${anu.caption.user_id}\n🐦 Following : ${anu.caption.followers}\n🐦 Followers : ${anu.caption.following}\n🐦 Bussines : ${anu.caption.bussines}\n🐦 Professional : ${anu.caption.profesional}\n🐦 Verified : ${anu.caption.verified}\n🐦 Private : ${anu.caption.private}\n🐦 Bio : ${anu.caption.biography}\n🐦 Bio Url : ${anu.caption.bio_url}`, m)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'npm') {
                    if (!id) return reply(`No Query username, Example : ${prefix + command} npm scrape-primbon`)
                    let { result: anu } = await fetchJson(api('zenz', '/api/stalker/npm', { query: id }, 'apikey'))
                    if (anu.status == false) return reply(anu.result.message)
                    reply(`🐦 Name : ${anu.name}\n🐦 Version : ${Object.keys(anu.versions)}\n🐦 Created : ${tanggal(anu.time.created)}\n🐦 Modified : ${tanggal(anu.time.modified)}\n🐦 Maintainers :\n ${anu.maintainers.map(v => `- ${v.name} : ${v.email}`).join('\n')}\n\n🐦 Description : ${anu.description}\n🐦 Homepage : ${anu.homepage}\n🐦 Keywords : ${anu.keywords}\n🐦 Author : ${anu.author.name}\n🐦 License : ${anu.license}\n🐦 Readme : ${anu.readme}`)
		    db.data.users[m.sender].limit -= 1
                } else {
                    reply(`Example : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                }
            }
            break

	    case 'tiktok': {
                if (!text) return reply(`*Colcoca el enlace!*\nEjemplo: .tiktok https://vm.tiktok.com/ZMNNkth4X/?k=1`)
		reply(mess.wait)
                tikttok = await fetchJson(`https://api.lolhuman.xyz/api/tiktok?apikey=c9b3628121d4a8adfbff2e11&url=${text}`)
		        tikktok = await getBuffer(tikttok.result.link)
                let buttonMessage = {
                    video: (tikktok),
		    caption: `Aquí tienes 💕🦈`,
                    headerType: 5
                }
                GojoMdNx.sendMessage(m.chat, buttonMessage)
            }
            break

            case 'tiktokmark': {
                if (!text) return reply(`Enter Query Link!`)
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/tiktok', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '🥬No Watermark🥬'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '🎵Audio🎵'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.watermark },
                    caption: `Aquí tienes `,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                GojoMdNx.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'tiktokmp3x': case 'tiktokaudiox': {
                if (!text) return reply(`Enter Query Link!`)
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/musically', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '🥬No Watermark🥬'}, type: 1},
                    {buttonId: `tiktokwm ${text}`, buttonText: {displayText: '🥬With Watermark🥬'}, type: 1}
                ]
                let buttonMessage = {
                    text: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                let msg = await GojoMdNx.sendMessage(m.chat, buttonMessage, { quoted: m })
                GojoMdNx.sendMessage(m.chat, { audio: { url: anu.result.audio }, mimetype: 'audio/mpeg'}, { quoted: msg })
            }
            break

	        case 'inst': {
                if (!text) return reply(`*Colcoca el enlace!*\n*Ejemplo:* .inst https://www.instagram.com/reel/CeHY7swFRlA/?igshid=YmMyMTA2M2Y=\nSolo para Reels de Instagram`)
		reply(mess.wait)
                insm = await fetchJson(`https://api.lolhuman.xyz/api/instagram?apikey=c9b3628121d4a8adfbff2e11&url=${text}`)
		        dinst = insm.result
		for (result_ in dinst) {buffer = await getBuffer(dinst[result_])
                let buttonMessage = {
                    video: (buffer),
		    caption: `Aquí tienes 💕🦈`,
                    headerType: 5
                }
                GojoMdNx.sendMessage(m.chat, buttonMessage)
            }}
            break

		//Backup, for example, the video above doesn't come out\\
		case 'igeh': case 'instagram2x': case 'ig2': case 'igdl2': {
                if (!text) return reply(`Enter Query Link!`)
                reply(mess.wait)

                let anu = await fetchJson(api('zenz', '/downloader/instagram2', { url:text }, 'apikey'))
                GojoMdNx.sendMessage(m.chat, { video: { url: anu.data[0] } }, { quoted: m })
            }
            break
            case 'joox': case 'jooxdl': {
                if (!text) return reply(`No Query Title`)
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/joox', { query: text }, 'apikey'))
                let msg = await GojoMdNx.sendImage(m.chat, anu.result.img, `🐦 Title : ${anu.result.lagu}\n🐦 Album : ${anu.result.album}\n🐦 Singer : ${anu.result.penyanyi}\n🐦 Publish : ${anu.result.publish}\n🐦 Lyrics :\n${anu.result.lirik.result}`, m)
                GojoMdNx.sendMessage(m.chat, { audio: { url: anu.result.mp4aLink }, mimetype: 'audio/mpeg', fileName: anu.result.lagu+'.m4a' }, { quoted: msg })
            }
            break
            case 'soundcloud': case 'scdl': {
                if (!text) return reply(`No Query Title`)
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/soundcloud', { url: isUrl(text)[0] }, 'apikey'))
                let msg = await GojoMdNx.sendImage(m.chat, anu.result.thumb, `🐦 Title : ${anu.result.title}\n🐦 Url : ${isUrl(text)[0]}`)
                GojoMdNx.sendMessage(m.chat, { audio: { url: anu.result.url }, mimetype: 'audio/mpeg', fileName: anu.result.title+'.m4a' }, { quoted: msg })
            }
            break

	        case 'twitter': {
                if (!text) return reply(`*Coloca el enlce!*\Ejemplo: .twitter https://twitter.com/SuccubaeVA/status/1535585662132436992?t=He81LE28MNQ2yccV37w8tQ&s=19`)
                reply(mess.wait)
                twiter = await fetchJson(`https://kocakz.herokuapp.com/api/media/twvid?url=${text}`)
		twtt = await getBuffer(twiter.getVideo)
                let buttonMessage = {
                    video: (twtt),
		    caption: `Aquí tienes 💕🦈`,
                    headerType: 5
                }
                GojoMdNx.sendMessage(m.chat, buttonMessage)
            }
            break

            case 'twittermp3x': case 'twitteraudiox': {
                if (!text) return reply(`Enter Query Link!`)
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twitter ${text}`, buttonText: {displayText: '📽️Video📽️'}, type: 1}
                ]
                let buttonMessage = {
		    image: { url: anu.result.thumb },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 4
                }
                let msg = await GojoMdNx.sendMessage(m.chat, buttonMessage, { quoted: m })
                GojoMdNx.sendMessage(m.chat, { audio: { url: anu.result.audio } }, { quoted: msg })
            }
            break
	        case 'facebook': {
                if (!text) return reply(`Enter Query Link!`)
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/facebook', { url: text }, 'apikey'))
                GojoMdNx.sendMessage(m.chat, { video: { url: anu.result.url }, caption: `🐦 Title : ${anu.result.title}`}, { quoted: m })
            }
            break
	        case 'pindl': case 'pinterestdl': {
                if (!text) return reply(`Enter Query Link!`)
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/pinterestdl', { url: text }, 'apikey'))
                GojoMdNx.sendMessage(m.chat, { video: { url: anu.result }, caption: `Download From ${text}` }, { quoted: m })
            }
            break
            case 'umma': case 'ummadl': {
	        if (!text) return reply(`Example : ${prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`)
                let { umma } = require('./lib) scraper')
		let anu = await umma(isUrl(text)[0])
		if (anu.type == 'video') {
		    let buttons = [
                        {buttonId: `ytmp3 ${anu.media[0]} 128kbps`, buttonText: {displayText: '🎵Audio🎵'}, type: 1},
                        {buttonId: `ytmp4 ${anu.media[0]} 360p`, buttonText: {displayText: '📽️Video📽️'}, type: 1}
                    ]
		    let buttonMessage = {
		        image: { url: anu.author.profilePic },
			caption: `
🐦 Title : ${anu.title}
🐦 Author : ${anu.author.name}
🐦 Like : ${anu.like}
🐦 Caption : ${anu.caption}
🐦 Url : ${anu.media[0]}
To Download Media, Please Click One Of The Buttons Below Or Enter The ytmp3/ytmp4 Command With The Url Above
`,
			footer: GojoMdNx.user.name,
			buttons,
			headerType: 4
		    }
		    GojoMdNx.sendMessage(m.chat, buttonMessage, { quoted: m })
		} else if (anu.type == 'image') {
		    anu.media.map(async (url) => {
		        GojoMdNx.sendMessage(m.chat, { image: { url }, caption: `🐦 Title : ${anu.title}\n🐦 Author : ${anu.author.name}\n🐦 Like : ${anu.like}\n🐦 Caption : ${anu.caption}` }, { quoted: m })
		    })
		}
	    }
	    break
        case 'ringtone': {
		if (!text) return reply(`Example : ${prefix + command} black rover`)
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		GojoMdNx.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
		case 'iqraxxx': {
		oh = `Example : ${prefix + command} 3\n\nIQRA Which Is Available : 1,2,3,4,5,6`
		if (!text) return reply(oh)
		yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
		GojoMdNx.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => reply(oh))
		}
		break
		case 'juzamma': {
		if (args[0] === 'pdf') {
		reply(mess.wait)
		GojoMdNx.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:m})
		} else if (args[0] === 'docx') {
		reply(mess.wait)
		GojoMdNx.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:m})
		} else if (args[0] === 'pptx') {
		reply(mess.wait)
		GojoMdNx.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:m})
		} else if (args[0] === 'xlsx') {
		reply(mess.wait)
		GojoMdNx.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:m})
		} else {
		reply(`What Format Do You Want? ? Example : ${prefix + command} pdf
Available Formats: pdf, docx, pptx, xlsx`)
		}
		}
		break
		case 'hadisxxx': case 'hadistxxx': {
		if (!args[0]) return reply(`Example:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1
Options Available:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`)
		if (!args[1]) return reply(`Which Hadith??\n\nExample:\n${prefix + command} muslim 1`)
		try {
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
		let { number, arab, id } = res.find(v => v.number == args[1])
		reply(`No. ${number}
${arab}
${id}`)
		} catch (e) {
		reply(`Hadith Not Found !`)
		}
		}
		break
		case 'alquranxxx': {
		if (!args[0]) return reply(`Usage Examples:\n${prefix + command} 1 2\n\nThen The Result Is Surah Al-Fatihah Verse 2 Along With The Audio, And The Verse Is Just 1`)
		if (!args[1]) return reply(`Usage Examples:\n${prefix + command} 1 2\n\nThen The Result Is Surah Al-Fatihah Verse 2 Along With The Audio, And The Verse Is Just 1`)
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}
( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		reply(txt)
		GojoMdNx.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : m })
		}
		break
		case 'tafsirsurahxxx': {
		if (!args[0]) return reply(`Usage Examples:\n${prefix + command} 1 2\n\nThen The Result Is The Interpretation Of Surah Al-Fatihah Verse 2`)
		if (!args[1]) return reply(`Usage Examples:\n${prefix + command} 1 2\n\nThen The Result Is The Interpretation Of Surah Al-Fatihah Verse 2`)
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `「 *Tafsir Surah*  」
*Short* : ${res.result.data.tafsir.id.short}
*Long* : ${res.result.data.tafsir.id.long}
( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		reply(txt)
		}
		break
		   case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                reply(mess.wait)
                let media = await GojoMdNx.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return reply(err)
                let buff = fs.readFileSync(ran)
                GojoMdNx.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else reply(`Reply To The Audio You Want To Change With Caption *${prefix + command}*`)
                } catch (e) {
                reply(e)
                }
                break
            case 'setcmd': {
                if (!m.quoted) return reply(`Reply Message!`)
                if (!m.quoted.fileSha256) return reply(`SHA256 Hash Missing`)
                if (!text) return reply(`For What Command?`)
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) return reply(`You Have No Permission To Change This Sticker Command`)
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                reply(`Done!`)
            }
            break
            case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) return reply(`No Hashes`)
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) return reply(`You Have No Permission To Delete This Sticker Command`)
                delete global.db.data.sticker[hash]
                reply(`Done!`)
            }
            break
            case 'listcmd': {
                let teks = `
*Hash List*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                GojoMdNx.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
                if (!isCreator) return replay(`${mess.owner}`)
                if (!m.quoted) return reply(`Reply Message!`)
                if (!m.quoted.fileSha256) return reply(`SHA256 Hash Missing`)
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) return reply(`Hash Not Found In Database`)
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                reply('Done!')
            }
            break
            case 'addmsg': {
                if (!m.quoted) return reply(`Reply Message You Want To Save In Database`)
                if (!text) return reply(`Example : ${prefix + command} File Name`)
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) return reply(`'${text}' Has Been Registered In The Message List`)
                msgs[text.toLowerCase()] = quoted.fakeObj
reply(`Successfully Added Message In Message List As '${text}'
    
Access With ${prefix}getmsg ${text}
View List Of Messages With ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (!text) return reply(`Example : ${prefix + command} file name\n\nView Message List With ${prefix}listmsg`)
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) return reply(`'${text}' Not Listed In The Message List`)
                GojoMdNx.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./database/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 DATABASE LIST 」\n\n'
		for (let i of seplit) {
		    teks += `💫 *Name :* ${i.nama}\n💫 *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return reply(`'${text}' Not Listed In The Message List`)
		delete msgs[text.toLowerCase()]
		reply(`Delete Successfully '${text}' From The Message list`)
            }
	    break
	    case 'anonymous': {
                if (m.isGroup) return reply('Features Cannot Be Used For Groups!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [
                    { buttonId: 'Start', buttonText: { displayText: '🚶Start🚶' }, type: 1 }
                ]
                GojoMdNx.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await GojoMdNx.getName(m.sender)} Welcome To Anonymous Chat\n\nClick The Button Below To Find A Partner\`\`\``, GojoMdNx.user.name, m)
            }
			break
            case 'keluar': case 'leave': {
                if (m.isGroup) return reply('Features Cannot Be Used For Groups!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: '🚶Start🚶' }, type: 1 }
                    ]
                    await GojoMdNx.sendButtonText(m.chat, buttons, `\`\`\`You Are Not In An Anonymous Session, Press The Button To Find A Partner \`\`\``)
                   reply(false)
                }
                reply('Ok')
                let other = room.other(m.sender)
                if (other) await GojoMdNx.sendText(other, `\`\`\`Partner Has Left Anonymous Session\`\`\``, m)
                delete this.anonymous[room.id]
                if (command === 'leave') break
            }
            case 'mulai': case 'start': {
                if (m.isGroup) return reply('Features Cannot Be Used For Groups!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: '🛑Stop🛑' }, type: 1 }
                    ]
                    await GojoMdNx.sendButtonText(m.chat, buttons, `\`\`\`You Are Still In An Anonymous Session, Press The Button Below To Terminate Your Anonymous Session\`\`\``, GojoMdNx.user.name, m)
                    reply(false)
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: '⏩Skip⏩' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: '🛑Stop🛑' }, type: 1 }
                    ]
                    await GojoMdNx.sendButtonText(room.a, buttons, `\`\`\`Successfully Found Partner, Now You Can Send Message\`\`\``, GojoMdNx.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await GojoMdNx.sendButtonText(room.b, buttons, `\`\`\`Successfully Found Partner, Now You Can Send Message\`\`\``, GojoMdNx.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: '🛑Stop🛑' }, type: 1 }
                    ]
                    await GojoMdNx.sendButtonText(m.chat, buttons, `\`\`\`Please Wait, Looking For A Partner\`\`\``, GojoMdNx.user.name, m)
                }
                break
            }
            case 'next': case 'lanjut': {
                if (m.isGroup) return reply('Features Cannot Be Used For Groups!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: '🚶Start🚶' }, type: 1 }
                    ]
                    await GojoMdNx.sendButtonText(m.chat, buttons, `\`\`\`You Are Not In An Anonymous Session, Press The Button To Find A Partner\`\`\``)
                    reply(false)
                }
                let other = romeo.other(m.sender)
                if (other) await GojoMdNx.sendText(other, `\`\`\`Partner Has Left Anonymous Session\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: '⏩Skip⏩' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: '🛑Stop🛑' }, type: 1 }
                    ]
                    await GojoMdNx.sendButtonText(room.a, buttons, `\`\`\`Successfully Found Partner, Now You Can Send Message\`\`\``, GojoMdNx.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await GojoMdNx.sendButtonText(room.b, buttons, `\`\`\`Successfully Found Partner, Now You Can Send Message\`\`\``, GojoMdNx.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: '🛑Stop🛑' }, type: 1 }
                    ]
                    await GojoMdNx.sendButtonText(m.chat, buttons, `\`\`\`Please Wait, Looking For A Partner\`\`\``, GojoMdNx.user.name, m)
                }
                break
            }
            case 'public': {
                if (!isCreator) return replay(`${mess.owner}`)
                GojoMdNx.public = true
                reply('Successful Change To Public Usage')
            }
            break
            case 'self': {
                if (!isCreator) return replay(`${mess.owner}`)
                GojoMdNx.public = false
                reply('Successful Change To Self Usage')
            }
            break
            case 'ping': case 'botstatus': case 'statusbot': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Response Speed ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}
💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}
${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                reply(respon)
            }
            break
            case 'speedtest': {
            reply('Testing Speed...')
            let cp = require('child_process')
            let { promisify } = require('util')
            let exec = promisify(cp.exec).bind(cp)
          let o
          try {
          o = await exec('python speed.py')
          } catch (e) {
          o = e
         } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) reply(stdout)
        if (stderr.trim()) reply(stderr)
            }
            }
            break

            case 'owner': {
                GojoMdNx.sendContact(m.chat, global.owner, m)
            }
            break

case 'cry':case 'kill':case 'hug':case 'pat':case 'lick':case 'kiss':case 'bite':case 'yeet':case 'neko':case 'bully':case 'bonk':case 'wink':case 'poke':case 'nom':case 'slap':case 'smile':case 'wave':case 'awoo':case 'blush':case 'smug':case 'glomp':case 'happy':case 'dance':case 'cringe':case 'cuddle':case 'highfive':case 'shinobu':case 'megumin':case 'handhold':
					axios.get(`https://api.waifu.pics/sfw/${command}`)
					.then(({data}) => {
						GojoMdNx.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
					})
					break

case "setmenuxxx": 
if (!text) return reply("1. image\n2. list\n3. catalog\n\nExample .setmenu image")
if (q == "image") {
typemenu = 'image'
reply("Success Changing Menu To "+q)
} else if (q == "list") {
typemenu = 'list'
reply("Success Changing Menu To "+q)
} else if (q == "catalog") {
typemenu = 'catalog'
reply("Success Changing Menu To "+q)
}
break
                    case 'bug': case 'report': {
                    	if(!text) return reply(`Enter The Bug\n\nExample: ${command} Menu Error`)
                    	GojoMdNx.sendMessage(`918129624395@s.whatsapp.net`, {text: `*Bug Report From:* wa.me/${m.sender.split("@")[0]}
Report Message: ${text}` })
reply(`Successfully Reported To The Owner\n\nPlease Make Sure The Bug Is Valid, If You Play With This, Use This Feature Again And Again For No Reason, You Will Be Blocked For Sure !`)
                    }
                    break

                     case 'info':{
                           	timestampe = speed();
latensie = speed() - timestampe
 anu = ` `
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./GojoMedia/gojo.jpg')},
                            hydratedFooterText: `┌─❖
│「 Hi 👋 」
└┬❖ 「 ${pushname} 」
│└───────────────┈ ⳹
│ 「 INFO BOT 」
│✙ ENCENDIDO : ${runtime(process.uptime())}
│✙ MI NOMBRE : ${global.botname}
│✙ CREADOR : ${global.ownername}
│✙ NUMERO : ${global.owner}
│✙ PLATAFORMA : Heroku
│✙ USUARIOS : ${Object.keys(global.db.data.users).length}
└┬──────────────┈ ⳹
   │✑  SELECCIONA UN BOTON
   └───────────────┈ ⳹`,
                            hydratedButtons: [{
                                quickReplyButton: {
                                    displayText: '🍇All Menu🍇',
                                    id: `${prefix}allmenu`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: '🍒List Menu🍒',
                                    id: `${prefix}command`
                                }
                                }]
                        }
                    }
                }), { userJid: m.chat })
                GojoMdNx.relayMessage(m.chat, template.message, { messageId: template.key.id })
                }
break

//══════════════════════════════════════════//
//
//                 🌸WATAME🌸
//              LISTA DE MENUES
//
//══════════════════════════════════════════//

            case'menu': {
menuimg =['https://files.catbox.moe/crm2et.jpg','https://files.catbox.moe/0dplrb.jpg','https://files.catbox.moe/24oma3.jpg','https://files.catbox.moe/jhaejp.jpg','https://files.catbox.moe/xzj325.jpg','https://files.catbox.moe/d3mbzg.jpg','https://files.catbox.moe/v690fe.jpg','https://files.catbox.moe/dh6pxn.jpg','https://files.catbox.moe/hfs417.jpg','https://files.catbox.moe/wffpwl.jpg']
igmm = menuimg[Math.floor(Math.random() * menuimg.length)]
unicorn = await getBuffer(igmm)
let buttons = [
                    {buttonId: `nsfwmenu`, buttonText: {displayText: 'NSFWMENU 😽'}, type: 1}
                ]
                let buttonMessage = {
                    image: (unicorn),
                    caption: `*╭✦┅╡ MENU PRINCIPAL ╞┅✦╮*
*╟X* ‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎
*┠━➣PRINCIPAL* ‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎
*╟X* ‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎
*╟ ❒ Importante* ‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎
*╟* _No uses tildes o símbolos_
*╟ ❒ ${prefix}ayuda*
*╟* _Comenta tus dudas al creador_
*╟ ❒ ${prefix}sticker*
*╟* _Imagen, gif o video (máximo 6s)_
*╟ ❒ ${prefix}meme*
*╟X* ‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎
*┠━➣DESCARGAS*
*╟X* ‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎
*╟ ❒ ${prefix}play*
*╟* _Música y videos de Youtube_
*╟ ❒ ${prefix}ytmp3*
*╟ ❒ ${prefix}ytmp4*
*╟* _Solo con enlaces de YouTube_
*╟ ❒ ${prefix}nh*
*╟* _Adjunta el código de manga_
*╟* _Abre tus documentos para verlo_
*╟ ❒ ${prefix}spoti*
*╟* _Descarga música de spotify_
*╟ ❒ ${prefix}gimage*
*╟* _Busca en imágenes de google_
*╟ ❒ ${prefix}inst*
*╟* _Descarga Reels de Instagram_
*╟ ❒ ${prefix}tiktok*
*╟* _Videos sin marca de agua_
*╟ ❒ ${prefix}nhimagen*
*╟* _Adjunta el código de manga_
*╟ ❒ ${prefix}telesticker*
*╟* _Descarga stickers de Telegram_
*╟ ❒ ${prefix}twitter (video)*
*╟* _Adjunta el enlace de Twitter_
*╟X* ‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎
*┠━➣OTAKU*
*╟X* ‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎
*╟* _Solicita imágenes_
*╟ ❒ ${prefix}kill*
*╟ ❒ ${prefix}cry*
*╟ ❒ ${prefix}lick*
*╟ ❒ ${prefix}pat*
*╟ ❒ ${prefix}bite*
*╟ ❒ ${prefix}hug*
*╟ ❒ ${prefix}kiss*
*╟ ❒ ${prefix}yeet*
*╟ ❒ ${prefix}slap*
*╟ ❒ ${prefix}nom*
*╟ ❒ ${prefix}wink*
*╟ ❒ ${prefix}bully*
*╟ ❒ ${prefix}neko*
*╟ ❒ ${prefix}poke*
*╟ ❒ ${prefix}bonk*
*╟ ❒ ${prefix}wave*
*╟ ❒ ${prefix}awoo*
*╟ ❒ ${prefix}smile*
*╟ ❒ ${prefix}waifu*
*╟ ❒ ${prefix}blush*
*╟ ❒ ${prefix}smug*
*╟ ❒ ${prefix}foxgirl*
*╟ ❒ ${prefix}dance*
*╟ ❒ ${prefix}cringe*
*╟ ❒ ${prefix}glomp*
*╟ ❒ ${prefix}cuddle*
*╟ ❒ ${prefix}megumin*
*╟ ❒ ${prefix}highfive*
*╟ ❒ ${prefix}handhold*
*╟X* ‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎
*┠━➣REACCIONES*
*╟X* ‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎
*╟* _Etiqueta a alguien para..._
*╟ ❒ ${prefix}besar @*
*╟ ❒ ${prefix}patear @*
*╟ ❒ ${prefix}abrazar @*
*╟ ❒ ${prefix}palmaditas @*
*╟ ❒ ${prefix}violar @*
*╟X*
*┠━➣MODIFICADOR DE VOZ*
*╟X*
*╟* _Etiqueta un audio_
*╟ ❒ ${prefix}fat*
*╟ ❒ ${prefix}bass*
*╟ ❒ ${prefix}fast*
*╟ ❒ ${prefix}slow*
*╟ ❒ ${prefix}deep*
*╟ ❒ ${prefix}blown*
*╟ ❒ ${prefix}robot*
*╟ ❒ ${prefix}earrape*
*╟ ❒ ${prefix}reverse*
*╟ ❒ ${prefix}squirrel*
*╟ ❒ ${prefix}nightcore*
*╟X* ‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎
*┠━➣NSFW*
*╟X* ‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎
*╟* _Lista de comandos +18_
*╟ ❒ ${prefix}nsfwmenu*
*╟X* ‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎
*┠━➣GAMES*
*╟X* ‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎
*╟* _Preuba suerte al jugar_
*╟ ❒ ${prefix}gay*
*╟ ❒ ${prefix}reto*
*╟ ❒ ${prefix}lesbi*
*╟ ❒ ${prefix}juego*
*╟ ❒ ${prefix}hetero*
*╟ ❒ ${prefix}verdad*
*╟ ❒ ${prefix}charlie*
*╟ ❒ ${prefix}rankfeo*
*╟ ❒ ${prefix}rankgay*
*╟ ❒ ${prefix}tictactoe*
*╟ ❒ ${prefix}ranksexy*
*╟ ❒ ${prefix}rankfurry*
*╟ ❒ ${prefix}ranklindo*
*╟* _Puede tener errores si hay_
*╟* _muchos miembros en el chat_
*╟X* ‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎
*┠━➣CREADOR*
*╟X* ‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎
*╟* _Imágen con el texto escrito_
*╟* _(Usa solo letras sin tildes)_
*╟ ❒ ${prefix}ice*
*╟ ❒ ${prefix}box*
*╟ ❒ ${prefix}phub*
*╟ ❒ ${prefix}love*
*╟ ❒ ${prefix}toxic*
*╟ ❒ ${prefix}love2*
*╟ ❒ ${prefix}blood*
*╟ ❒ ${prefix}luxury*
*╟ ❒ ${prefix}bokeh*
*╟ ❒ ${prefix}blood2*
*╟ ❒ ${prefix}emojimix*
*╟X* ‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎
*┠━➣OTROS*
*╟X* ‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎
*╟ ❒ ${prefix}getpic @*
*╟* _Obtén el perfil de la persona_
*╟ ❒ ${prefix}wame*
*╟* _Tu enlace directo de Whatsapp_
*╟ ❒ ${prefix}frases*
*╟ ❒ ${prefix}piropos*
*╟ ❒ ${prefix}toimg*
*╟* _Convierte un sticker en imágen_
*╟ ❒ ${prefix}tomp3*
*╟* _Convierte un video en audio_
*╟X* ‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎
*┠━➣ADMINS*
*╟X* ‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎
*╟* _1: Activar_
*╟* _0: Desactivar_
*╟ ❒ ${prefix}info*
*╟* _Información de Watame_
*╟ ❒ ${prefix}ping*
*╟* _Tiempo de actividad y respuesta_
*╟ ❒ ${prefix}notif*
*╟* _Notifica a todos los miembros_
*╟ ❒ ${prefix}todos*
*╟* _Menciona a todos los miembros_
*╟ ❒ ${prefix}kick @*
*╟* _Expulsión del grupo_
*╟ ❒ ${prefix}chatlist*
*╟* _Lista de chats de Watame_
*╟ ❒ ${prefix}getbio @*
*╟* _Biografía del usuario_
*╟ ❒ ${prefix}linkgroup*
*╟* _Enlace del grupo_
*╟ ❒ ${prefix}listadmin*
*╟* _Lista de administradores_
*╟ ❒ ${prefix}promover @*
*╟* _Convierte en administrador_
*╟ ❒ ${prefix}degradar @*
*╟* _Elimina como administrador_
*╟ ❒ ${prefix}listonline*
*╟* _Menciona a todos en linea_
*╟ ❒ ${prefix}antilink [1/0]*
*╟* _Expulsa a quienes envíen enlaces_
*╟ ❒ ${prefix}welcome [1/0]*
*╟* _Bienvenida a nuevos miembros_
*╟ ❒ ${prefix}grupo [abrir/cerrar]*
*╟* _Abre o cierra el grupo_
*╟ ❒ ${prefix}status*
*╟* _Estado de las solicitudes_
*╟ ❒ ${prefix}shutdown*
*╟* _Apaga y reinicia a Watame_
*╟X* ‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎
*┠ೋ━ೋ✧ೋ━ೋ┓*
*║        🌸Watame🌸*
*┗ೋ━ೋ✧ೋ━ೋ┛*
*║*
*┠━➣NOTA:*
No uses tildes o símbolos al realizar peticiones, si alguna función no responde espera algunas horas hasta que se reestablezca o ponte en contacto con el creador.`,
                    footer: GojoMdNx.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                GojoMdNx.sendMessage(m.chat, buttonMessage)
            }
            break

case 'nsfwmenu':{
	imn = await getBuffer ('https://files.catbox.moe/wetl38.jpg')
	let buttons = [
                    {buttonId: `command`, buttonText: {displayText: '🎀MENU🎀'}, type: 1}
                ]
                let buttonMessage = {
                    image: (imn),
                    caption: `*╭✦┅╡ NSFW MENU ╞┅✦╮*
*╟* ‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎
*╟ ✎_𝑴𝒆𝒏𝒖 +18_*
*╟* ‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎
*┠━➣ANIMES* ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎
*╟X* ‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎
*╟ ❒ ${prefix}dbz*
*╟ ❒ ${prefix}hero*
*╟ ❒ ${prefix}uzaki*
*╟ ❒ ${prefix}rezero*
*╟ ❒ ${prefix}naruto*
*╟ ❒ ${prefix}darling*
*╟ ❒ ${prefix}genshin*
*╟ ❒ ${prefix}kimetsu*
*╟ ❒ ${prefix}pokemon*
*╟ ❒ ${prefix}nintendo*
*╟ ❒ ${prefix}konosuba*
*╟ ❒ ${prefix}hololive*
*╟ ❒ ${prefix}toloveru*
*╟ ❒ ${prefix}tatsumaki*
*╟ ❒ ${prefix}dragonmaid*
*╟X* ‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎
*┠━➣IMAGENES* ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎
*╟X* ‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ 
*╟ ❒ ${prefix}cum*
*╟ ❒ ${prefix}yuri*
*╟ ❒ ${prefix}patas*
*╟ ❒ ${prefix}pussy*
*╟ ❒ ${prefix}thighs*
*╟ ❒ ${prefix}hentai*
*╟ ❒ ${prefix}femdom*
*╟ ❒ ${prefix}cosplay*
*╟ ❒ ${prefix}blowjob*
*╟ ❒ ${prefix}futanari*
*╟ ❒ ${prefix}hardcore*
*╟ ❒ ${prefix}lolihentai*
*╟ ❒ ${prefix}nekohentai*
*╟X* ‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ ‏‏‎‎ 
*╰❍┅ EN AMPLIACIÓN ┅❍*`,
                    footer: GojoMdNx.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                GojoMdNx.sendMessage(m.chat, buttonMessage)
            }
            break

                case 'command': {
let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                listMessage :{
                    title: `HOLA ${pushname} 😺`,
                    description: `POR FAVOR ESCOGE UN MENU\n`,
                    buttonText: "MENU",
                    footerText: `${global.footer}`,
                    listType: "SINGLE_SELECT",
                    sections: [{
								"title": "MENU PRINCIPAL",
								"rows": [
									{
										"title": "MENU POPULAR",
										"description": "MUESTRA LAS FUNCIONES MAS USADAS",
										"rowId": `${prefix}mainmenu`
									}
								]
							},
							{
								"title": "LISTA DE MENUES",
								"rows": [
									{
										"title": "ALL MENU",
										"description": "MUESTRA TODAS LAS FUNCIONES",
										"rowId": `${prefix}allmenu`
									},
									{
										"title": "MENÚ DE CREADOR",
										"description": "SOLO PARA LOS CREADORES",
										"rowId": `${prefix}ownermenu`
										},
									{
										"title": "MENÚ GRUPAL",
										"description": "MUESTRA FUNCIONES GRUPALES",
										"rowId": `${prefix}groupmenu`
										},
									{
										"title": "MENU RPG",
										"description": "MUESTRA MISIONES Y TAREAS",
										"rowId": `${prefix}rpgmenu`
									},
									{
										"title": "MENU DE DESCARGAS",
										"description": "FUNCIONES DE DESCARGAS EN REDES",
										"rowId": `${prefix}downloadmenu`
									},
									{
										"title": "MENU DE BUSQUEDAS",
										"description": "BUSCA IMAGENES U OTROS  EN REDES",
										"rowId": `${prefix}searchmenu`
									},
									{
											"title": "MENU RANDOM",
										"description": "COMANDOS ALEATORIOS",
										"rowId": `${prefix}randommenu`
										},
										{
											"title": "MENU OTAKU",
										"description": "WAIFUS, LOLIS Y MÁS",
										"rowId": `${prefix}randomanimemenu`
										},
										{
											"title": "OTROS",
										"description": "COMANDOS SIN CATEGORIA",
										"rowId": `${prefix}funmenu`
										},
										{
											"title": "MENU DE CONVERSION",
										"description": "CONVIERTE IMAGENES U OTROS",
										"rowId": `${prefix}convertmenu`
										},
										{
											"title": "BASE DE DATOS",
										"description": "CARACTERÍSTICAS ADICIONALES",
										"rowId": `${prefix}databasemenu`
										},
										{
											"title": "MENU DE CAMBIO DE VOZ",
										"description": "CAMBIA TU VOZ COMO GUSTES",
										"rowId": `${prefix}voicechangermenu`
										},
										{
											"title": "TEXTO A IMAGEN",
										"description": "HAS IMAGENES CON LETRAS",
										"rowId": `${prefix}textpromenu`
										},
								]
							}
						],
          listType: 1
                }
            }), {})
            GojoMdNx.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break

    case 'donasi': case 'donate': case 'sewabot': case 'sewa': {
                GojoMdNx.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/c15f725add0381fb69c4b.jpg' }, caption: `*Hi Bro ${m.pushName}*\nDonation section is currently down🥲 , I know you are happy but me 🥲💔\n` }, { quoted: m })
            }
            break

case 'allmenu': {
  	anu = `
┏━「 *${botname}* 」━━⭓ 
┃╔══☯︎「 MAIN 」☯︎
┃╠ ${prefix}speedtest
┃╠ ${prefix}ping
┃╠ ${prefix}owner
┃╠ ${prefix}menu
┃╠ ${prefix}delete
┃╠ ${prefix}quoted
┃╠ ${prefix}listpc
┃╠ ${prefix}listgc
┃╠ ${prefix}donate
┃╠ ${prefix}report [bug]
┃╠══✪「 OWNER 」 ☯︎
┃╠ ${prefix}chat [option]
┃╠ ${prefix}join [link]
┃╠ ${prefix}leave
┃╠ ${prefix}block [user]
┃╠ ${prefix}unblock [user]
┃╠ ${prefix}bcgroup [text]
┃╠ ${prefix}bcall [text]
┃╠ ${prefix}setppbot [image]
┃╠ ${prefix}setexif
┃╠══✪「 GROUP 」 ☯︎      
┃╠${prefix}grouplink
┃╠${prefix}ephemeral [option]
┃╠${prefix}setgcpp [image]
┃╠${prefix}setname [text]
┃╠${prefix}setdesc [text]
┃╠${prefix}group [text]
┃╠${prefix}editinfo [option]
┃╠${prefix}add [user]
┃╠${prefix}kick [reply/tag]
┃╠${prefix}hidetag [text]
┃╠${prefix}tagall [text]
┃╠${prefix}antilink [on/off]
┃╠${prefix}mute [on/off]
┃╠${prefix}promote [reply/tag]
┃╠${prefix}demote [reply/tag]
┃╠${prefix}vote
┃╠${prefix}devote
┃╠${prefix}upvote
┃╠${prefix}checkvote
┃╠${prefix}delvote
┃╠══☯︎「 RPG 」 ☯︎
┃╠${prefix}hunting
┃╠${prefix}mining
┃╠${prefix}heal
┃╠${prefix}userlimit
┃╠${prefix}profile
┃╠${prefix}inventory
┃╠${prefix}leaderboard
┃╠${prefix}buy [option]
┃╠${prefix}sell [option]
┃╠═✪「 DOWNLOADER 」☯︎
┃╠${prefix}ytmp3 [url|quality]
┃╠${prefix}ytmp4 [url|quality]
┃╠${prefix}getmusic [yt link]
┃╠${prefix}getvideo [yt link]
┃╠${prefix}umma [query]
┃╠${prefix}joox [query]
┃╠${prefix}soundcloud [url]
┃╠══✪「 SEARCHER 」 ☯︎
┃╠${prefix}play [query]
┃╠${prefix}song [query]
┃╠${prefix}yts [query]
┃╠${prefix}google [query]
┃╠${prefix}gimage [query]
┃╠${prefix}pinterest [query]
┃╠${prefix}wallpaper [query]
┃╠${prefix}wikimedia [query]
┃╠${prefix}ytsearch [query]
┃╠${prefix}ringtone [query]
┃╠${prefix}webtoon [query]
┃╠══✪「 RANDOM 」☯︎
┃╠${prefix}coffee
┃╠${prefix}animequote (indo)
┃╠${prefix}couplepp
┃╠═✪「 RANDOM ANIME 」☯︎
┃╠${prefix}loli
┃╠${prefix}bully
┃╠${prefix}cuddle
┃╠${prefix}cry
┃╠${prefix}hug
┃╠${prefix}awoo
┃╠${prefix}kiss
┃╠${prefix}lick
┃╠${prefix}pat
┃╠${prefix}smug
┃╠${prefix}bonk
┃╠${prefix}yeet
┃╠${prefix}blush
┃╠${prefix}smile
┃╠${prefix}wave
┃╠${prefix}highfive
┃╠${prefix}handhold
┃╠${prefix}nom
┃╠${prefix}glomp
┃╠${prefix}bite
┃╠${prefix}slap
┃╠${prefix}kill
┃╠${prefix}happy
┃╠${prefix}wink
┃╠${prefix}poke
┃╠${prefix}dance
┃╠${prefix}cringe
┃╠══✪「 FUN 」 ☯︎
┃╠ ${prefix}how [text
┃╠ ${prefix}when [text]
┃╠ ${prefix}is [text]
┃╠ ${prefix}what [text]
┃╠ ${prefix}can [text]
┃╠ ${prefix}rate [text]
┃╠ ${prefix}wangy [text]
┃╠ ${prefix}beautifulcheck [tag]
┃╠ ${prefix}awesomecheck [tag]
┃╠ ${prefix}prettycheck [tag]
┃╠ ${prefix}lesbiancheck [tag]
┃╠ ${prefix}gaycheck [tag]
┃╠ ${prefix}cutecheck [tag]
┃╠ ${prefix}uglycheck [tag]
┃╠ ${prefix}hornycheck [tag]
┃╠ ${prefix}charactercheck [tag]
┃╠ ${prefix}lovelycheck [tag]
┃╠ ${prefix}couple
┃╠ ${prefix}mysoulmate
┃╠ ${prefix}hot
┃╠ ${prefix}sexy
┃╠ ${prefix}kind
┃╠ ${prefix}idiot
┃╠ ${prefix}handsome
┃╠ ${prefix}beautiful
┃╠ ${prefix}cute
┃╠ ${prefix}pretty
┃╠ ${prefix}lesbian
┃╠ ${prefix}noob
┃╠ ${prefix}bastard
┃╠ ${prefix}foolish
┃╠ ${prefix}nerd
┃╠ ${prefix}asshole
┃╠ ${prefix}gay
┃╠ ${prefix}smart
┃╠ ${prefix}stubble
┃╠ ${prefix}dog
┃╠ ${prefix}horny
┃╠ ${prefix}cunt
┃╠ ${prefix}wibu
┃╠ ${prefix}tictactoe
┃╠ ${prefix}delttt
┃╠ ${prefix}guess [option]
┃╠ ${prefix}math [mode]
┃╠ ${prefix}suitpvp [tag]
┃╠═══✪「 CONVERTER 」 ☯︎
┃╠ ${prefix}toimage [reply stick]
┃╠ ${prefix}sticker [reply img|gif]
┃╠ ${prefix}emojimix [moji+moji]
┃╠ ${prefix}tovideo [reply img]
┃╠ ${prefix}togif [reply stick]
┃╠ ${prefix}tourl [reply img]
┃╠ ${prefix}tovn [reply aud]
┃╠ ${prefix}tomp3 [reply vn]
┃╠ ${prefix}toaudio [reply vid]
┃╠ ${prefix}ebinary [reply txt]
┃╠ ${prefix}dbinary [reply txt]
┃╠ ${prefix}styletext [text]
┃╠══✪「 DATABASE 」 ☯︎
┃╠ ${prefix}setcmd
┃╠ ${prefix}listcmd
┃╠ ${prefix}delcmd
┃╠ ${prefix}lockcmd
┃╠ ${prefix}addmsg
┃╠ ${prefix}listmsg
┃╠ ${prefix}getmsg
┃╠ ${prefix}delmsg
┃╠═✪「 ANONYMOUS CHAT 」☯︎
┃╠${prefix}anonymous
┃╠${prefix}start
┃╠${prefix}next
┃╠${prefix}leave
┃╠═✪「 VOICE CHANGER 」☯︎
┃╠${prefix}bass [reply aud]
┃╠${prefix}blown [reply aud]
┃╠${prefix}deep [reply aud]
┃╠${prefix}earrape [reply aud]
┃╠${prefix}fast [reply aud]
┃╠${prefix}fat [reply aud]
┃╠${prefix}nightcore [reply aud]
┃╠${prefix}reverse [reply aud]
┃╠${prefix}robot [reply aud]
┃╠${prefix}slow [reply aud]
┃╠${prefix}squirrel [reply aud]
┃╠══✪「 ISLAMIC 」☯︎
┃╠${prefix}juzamma
┃╠══✪「 HOROSCOPE 」☯︎
┃╠${prefix}nomorhoki (indo)
┃╠${prefix}artimimpi (indo)
┃╠${prefix}artinama (indo)
┃╠${prefix}ramaljodoh (indo)
┃╠${prefix}ramaljodohbali (indo)
┃╠${prefix}suamiistri (indo)
┃╠${prefix}ramalcinta (indo)
┃╠${prefix}cocoknama (indo)
┃╠${prefix}pasangan (indo)
┃╠${prefix}jadiannikah (indo)
┃╠${prefix}sifatusaha (indo)
┃╠${prefix}rezeki (indo)
┃╠${prefix}pekerjaan (indo)
┃╠${prefix}nasib (indo)
┃╠${prefix}penyakit (indo)
┃╠${prefix}tarot (indo)
┃╠${prefix}fengshui (indo)
┃╠${prefix}haribaik (indo)
┃╠${prefix}harisangar (indo)
┃╠${prefix}harisial (indo)
┃╠${prefix}nagahari (indo)
┃╠${prefix}arahrezeki (indo)
┃╠${prefix}peruntungan (indo)
┃╠${prefix}weton (indo)
┃╠${prefix}karakter (indo)
┃╠${prefix}keberuntungan (indo)
┃╠${prefix}memancing (indo)
┃╠${prefix}masasubur (indo)
┃╠${prefix}zodiak (indo)
┃╠${prefix}shio (indo)
┃╚═══════✍︎𝑁𝑒𝑥𝑢𝑠𝑁𝑤
┗━「 *Created By ${ownername}*  𖠌」━⭓`
    const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./GojoMedia/gojo.jpg')},
                            hydratedFooterText: `${pushname}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'YouTube📍',
                                    url: `${myweb}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '👤Owner👤',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                GojoMdNx.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'mainmenu':
var unicorn = await getBuffer(picak+'Main Menu')
await GojoMdNx.send5ButImg(from, `` + '' + ' ', `
┏━「 ${botname} 」━━⭓ 
┃╔═✪「 MAIN 」
┃╠ ${prefix}speedtest
┃╠ ${prefix}ping
┃╠ ${prefix}owner
┃╠ ${prefix}menu
┃╠ ${prefix}delete
┃╠ ${prefix}quoted
┃╠ ${prefix}listpc
┃╠ ${prefix}listgc
┃╠ ${prefix}donate
┃╠ ${prefix}report [bug]
┃╚═════════════✪
┗━━「 ${pushname} 」━⭓`,unicorn, [{"urlButton": {"displayText": "YouTube 📍","url": `${myweb}`}},{"urlButton": {"displayText": "Script🔖","url": `${sc}`}},{"quickReplyButton": {"displayText": "🍜Donate🍜","id": 'donate'}},{"quickReplyButton": {"displayText": "👤Owner👤","id": 'owner'}}] )
break

case 'grupmenu': case 'groupmenu':
var unicorn = await getBuffer(picak+'Group Menu')
await GojoMdNx.send5ButImg(from, `` + '' + ' ', `
┏━「 ${botname} 」━━⭓ 
┃╔═✪「 GROUP 」	        
┃╠${prefix}ephemeral [option]
┃╠${prefix}setgcpp [image]
┃╠${prefix}setname [text]
┃╠${prefix}setdesc [text]
┃╠${prefix}group [text]
┃╠${prefix}editinfo [option]
┃╠${prefix}add [user]
┃╠${prefix}kick [reply/tag]
┃╠${prefix}hidetag [text]
┃╠${prefix}tagall [text]
┃╠${prefix}antilink [on/off]
┃╠${prefix}mute [on/off]
┃╠${prefix}promote [reply/tag]
┃╠${prefix}demote [reply/tag]
┃╠${prefix}vote
┃╠${prefix}devote
┃╠${prefix}upvote
┃╠${prefix}checkvote
┃╠${prefix}delvote
┃╚═════════════✪
┗━━「 ${pushname} 」━⭓`,unicorn, [{"urlButton": {"displayText": "YouTube📍","url": `${myweb}`}},{"urlButton": {"displayText": "Script🔖","url": `${sc}`}},{"quickReplyButton": {"displayText": "🍜Donate🍜","id": 'donate'}},{"quickReplyButton": {"displayText": "👤Owner👤","id": 'owner'}}] )
break

case 'rpgmenu':
var unicorn = await getBuffer(picak+'Rpg Menu')
await GojoMdNx.send5ButImg(from, `` + '' + ' ', `
┏━「 ${botname} 」━━⭓ 
┃╔═✪「 RPG 」	        
┃╠${prefix}hunting
┃╠${prefix}mining
┃╠${prefix}heal
┃╠${prefix}limituser
┃╠${prefix}profile
┃╠${prefix}inventory
┃╠${prefix}leaderboard
┃╠${prefix}buy [option]
┃╠${prefix}sell [option]
┃╚═════════════✪
┗━━「 ${pushname} 」━⭓`,unicorn, [{"urlButton": {"displayText": "YouTube📍","url": `${myweb}`}},{"urlButton": {"displayText": "Script🔖","url": `${sc}`}},{"quickReplyButton": {"displayText": "🍜Donate🍜","id": 'donate'}},{"quickReplyButton": {"displayText": "👤Owner👤","id": 'owner'}}] )
break

case 'funmenu':
var unicorn = await getBuffer(picak+'Fun Menu')
await GojoMdNx.send5ButImg(from, `` + '' + ' ', `
┏━「 ${botname} 」━━⭓ 
┃╔═✪「 FUN 」	        
┃╠ ${prefix}how [text
┃╠ ${prefix}when [text]
┃╠ ${prefix}is [text]
┃╠ ${prefix}what [text]
┃╠ ${prefix}can [text]
┃╠ ${prefix}rate [text]
┃╠ ${prefix}wangy [text]
┃╠ ${prefix}beautifulcheck [tag]
┃╠ ${prefix}awesomecheck [tag]
┃╠ ${prefix}prettycheck [tag]
┃╠ ${prefix}lesbiancheck [tag]
┃╠ ${prefix}gaycheck [tag]
┃╠ ${prefix}cutecheck [tag]
┃╠ ${prefix}uglycheck [tag]
┃╠ ${prefix}hornycheck [tag]
┃╠ ${prefix}charactercheck [tag]
┃╠ ${prefix}lovelycheck [tag]
┃╠ ${prefix}couple
┃╠ ${prefix}mysoulmate
┃╠ ${prefix}hot
┃╠ ${prefix}sexy
┃╠ ${prefix}kind
┃╠ ${prefix}handsome
┃╠ ${prefix}beautiful
┃╠ ${prefix}cute
┃╠ ${prefix}pretty
┃╠ ${prefix}lesbian
┃╠ ${prefix}noob
┃╠ ${prefix}bastard
┃╠ ${prefix}foolish
┃╠ ${prefix}nerd
┃╠ ${prefix}asshole
┃╠ ${prefix}gay
┃╠ ${prefix}smart
┃╠ ${prefix}stubble
┃╠ ${prefix}dog
┃╠ ${prefix}horny
┃╠ ${prefix}cunt
┃╠ ${prefix}wibu
┃╠ ${prefix}tictactoe
┃╠ ${prefix}delttt
┃╠ ${prefix}guess [option]
┃╠ ${prefix}math [mode]
┃╠ ${prefix}suitpvp [tag]
┃╚═════════════✪
┗━━「 ${pushname} 」━⭓`,unicorn, [{"urlButton": {"displayText": "YouTube📍","url": `${myweb}`}},{"urlButton": {"displayText": "Script🔖","url": `${sc}`}},{"quickReplyButton": {"displayText": "🍜Donate🍜","id": 'donate'}},{"quickReplyButton": {"displayText": "👤Owner👤","id": 'owner'}}] )
break

case 'ownermenu':
var unicorn = await getBuffer(picak+'Owner Menu')
await GojoMdNx.send5ButImg(from, `` + '' + ' ', `
┏━「 ${botname} 」━━⭓ 
┃╔═✪「 OWNER 」	        
┃╠${prefix}grouplink
┃╠${prefix}ephemeral [option]
┃╠${prefix}setgcpp [image]
┃╠${prefix}setname [text]
┃╠${prefix}setdesc [text]
┃╠${prefix}group [text]
┃╠${prefix}editinfo [option]
┃╠${prefix}add [user]
┃╠${prefix}kick [reply/tag]
┃╠${prefix}hidetag [text]
┃╠${prefix}tagall [text]
┃╠${prefix}antilink [on/off]
┃╠${prefix}mute [on/off]
┃╠${prefix}promote [reply/tag]
┃╠${prefix}demote [reply/tag]
┃╠${prefix}vote
┃╠${prefix}devote
┃╠${prefix}upvote
┃╠${prefix}checkvote
┃╠${prefix}delvote
┃╚═════════════✪
┗━━「 ${pushname} 」━⭓`,unicorn, [{"urlButton": {"displayText": "YouTube📍","url": `${myweb}`}},{"urlButton": {"displayText": "Script🔖","url": `${sc}`}},{"quickReplyButton": {"displayText": "🍜Donate🍜","id": 'donate'}},{"quickReplyButton": {"displayText": "👤Owner👤","id": 'owner'}}] )
break
case 'downloadmenu':
var unicorn = await getBuffer(picak+'Downloader Menu')
await GojoMdNx.send5ButImg(from, `` + '' + ' ', `
┏━「 ${botname} 」━━⭓ 
┃╔═✪「 DOWNLOADER 」	        
┃╠${prefix}ytmp3 [url|quality]
┃╠${prefix}ytmp4 [url|quality]
┃╠${prefix}getmusic [yt link]
┃╠${prefix}getvideo [yt link]
┃╠${prefix}umma [query]
┃╠${prefix}joox [query]
┃╠${prefix}soundcloud [url]
┃╚═════════════✪
┗━━「 ${pushname} 」━⭓`,unicorn, [{"urlButton": {"displayText": "YouTube📍","url": `${myweb}`}},{"urlButton": {"displayText": "Script🔖","url": `${sc}`}},{"quickReplyButton": {"displayText": "??Donate🍜","id": 'donate'}},{"quickReplyButton": {"displayText": "👤Owner👤","id": 'owner'}}] )
break
case 'searchmenu':
var unicorn = await getBuffer(picak+'Search Menu')
await GojoMdNx.send5ButImg(from, `` + '' + ' ', `
┏━「 ${botname} 」━━⭓ 
┃╔══✪「 SEARCHER 」	        
┃╠${prefix}play [query]
┃╠${prefix}song [query]
┃╠${prefix}yts [query]
┃╠${prefix}google [query]
┃╠${prefix}gimage [query]
┃╠${prefix}pinterest [query]
┃╠${prefix}wallpaper [query]
┃╠${prefix}wikimedia [query]
┃╠${prefix}ytsearch [query]
┃╠${prefix}ringtone [query]
┃╠${prefix}webtoon [query]
┃╚═════════════✪
┗━━「 ${pushname} 」━⭓`,unicorn, [{"urlButton": {"displayText": "YouTube📍","url": `${myweb}`}},{"urlButton": {"displayText": "Script🔖","url": `${sc}`}},{"quickReplyButton": {"displayText": "🍜Donate🍜","id": 'donate'}},{"quickReplyButton": {"displayText": "👤Owner👤","id": 'owner'}}] )
break
case 'randommenu':
var unicorn = await getBuffer(picak+'Random Menu')
await GojoMdNx.send5ButImg(from, `` + '' + ' ', `
┏━「 ${botname} 」━━⭓ 
┃╔══✪「 RANDOM 」	        
┃╠${prefix}coffee
┃╠${prefix}animequote (indo)
┃╠${prefix}couplepp
┃╚═════════════✪
┗━━「 ${pushname} 」━⭓`,unicorn, [{"urlButton": {"displayText": "YouTube📍","url": `${myweb}`}},{"urlButton": {"displayText": "Script🔖","url": `${sc}`}},{"quickReplyButton": {"displayText": "🍜Donate🍜","id": 'donate'}},{"quickReplyButton": {"displayText": "👤Owner👤","id": 'owner'}}] )
break
case 'randomanimemenu':
var unicorn = await getBuffer(picak+'Random Anime Menu')
await GojoMdNx.send5ButImg(from, `` + '' + ' ', `
┏━「 ${botname} 」━━⭓ 
┃╔✪「 RANDOM ANIME 」	        
┃╠${prefix}loli
┃╠${prefix}bully
┃╠${prefix}cuddle
┃╠${prefix}cry
┃╠${prefix}hug
┃╠${prefix}awoo
┃╠${prefix}kiss
┃╠${prefix}lick
┃╠${prefix}pat
┃╠${prefix}smug
┃╠${prefix}bonk
┃╠${prefix}yeet
┃╠${prefix}blush
┃╠${prefix}smile
┃╠${prefix}wave
┃╠${prefix}highfive
┃╠${prefix}handhold
┃╠${prefix}nom
┃╠${prefix}glomp
┃╠${prefix}bite
┃╠${prefix}slap
┃╠${prefix}kill
┃╠${prefix}happy
┃╠${prefix}wink
┃╠${prefix}poke
┃╠${prefix}dance
┃╠${prefix}cringe
┃╚═════════════✪
┗━━「 ${pushname} 」━⭓`,unicorn, [{"urlButton": {"displayText": "YouTube📍","url": `${myweb}`}},{"urlButton": {"displayText": "Script🔖","url": `${sc}`}},{"quickReplyButton": {"displayText": "🍜Donate🍜","id": 'donate'}},{"quickReplyButton": {"displayText": "👤Owner👤","id": 'owner'}}] )
break
case 'textpromenu':
var unicorn = await getBuffer(picak+'Text Pro Menu')
await GojoMdNx.send5ButImg(from, `` + '' + ' ', `
┏━「 ${botname} 」━━⭓ 
┃╔═✪「 TEXT PRO 」	        
┃╠ ${prefix}3dchristmas [txt]
┃╠ ${prefix}3ddeepsea [txt]
┃╠ ${prefix}americanflag [txt]
┃╠ ${prefix}3dscifi [txt]
┃╠ ${prefix}3drainbow [txt]
┃╠ ${prefix}3dwaterpipe [txt]
┃╠ ${prefix}halloweenskeleton [txt]
┃╠ ${prefix}sketch [txt]
┃╠ ${prefix}bluecircuit [txt]
┃╠ ${prefix}space [txt]
┃╠ ${prefix}metallic [txt]
┃╠ ${prefix}fiction [txt]
┃╠ ${prefix}greenhorror [txt]
┃╠ ${prefix}transformer [txt]
┃╠ ${prefix}berry [txt]
┃╠ ${prefix}thunder [txt]
┃╠ ${prefix}magma [txt]
┃╠ ${prefix}3dcrackedstone [txt]
┃╠ ${prefix}3dneonlight [txt]
┃╠ ${prefix}impressiveglitch [txt]
┃╠ ${prefix}naturalleaves [txt]
┃╠ ${prefix}fireworksparkle [txt]
┃╠ ${prefix}matrix [txt]
┃╠ ${prefix}dropwater [txt]
┃╠ ${prefix}harrypotter [txt]
┃╠ ${prefix}foggywindow [txt]
┃╠ ${prefix}neondevils [txt]
┃╠ ${prefix}christmasholiday [txt]
┃╠ ${prefix}3dgradient [txt]
┃╠ ${prefix}blackpink [txt]
┃╠ ${prefix}gluetext [txt]
┃╚═════════════✪
┗━━「 ${pushname} 」━⭓`,unicorn, [{"urlButton": {"displayText": "YouTube📍","url": `${myweb}`}},{"urlButton": {"displayText": "Script🔖","url": `${sc}`}},{"quickReplyButton": {"displayText": "🍜Donate🍜","id": 'donate'}},{"quickReplyButton": {"displayText": "👤Owner👤","id": 'owner'}}] )
break
case 'convertmenu':
var unicorn = await getBuffer(picak+'Converter Menu')
await GojoMdNx.send5ButImg(from, `` + '' + ' ', `
┏━「 ${botname} 」━━⭓ 
┃╔══✪「 CONVERTER 」	        
┃╠ ${prefix}toimage [reply stick]
┃╠ ${prefix}sticker [reply img|gif]
┃╠ ${prefix}emojimix [moji+moji]
┃╠ ${prefix}tovideo [reply img]
┃╠ ${prefix}togif [reply stick]
┃╠ ${prefix}tourl [reply media]
┃╠ ${prefix}tovn [reply aud]
┃╠ ${prefix}tomp3 [reply vn]
┃╠ ${prefix}toaudio [reply vid]
┃╠ ${prefix}ebinary [reply txt]
┃╠ ${prefix}dbinary [reply txt]
┃╚═════════════✪
┗━━「 ${pushname} 」━⭓`,unicorn, [{"urlButton": {"displayText": "YouTube📍","url": `${myweb}`}},{"urlButton": {"displayText": "Script🔖","url": `${sc}`}},{"quickReplyButton": {"displayText": "🍜Donate🍜","id": 'donate'}},{"quickReplyButton": {"displayText": "👤Owner👤","id": 'owner'}}] )
break
case 'databasemenu':
var unicorn = await getBuffer(picak+'Database Menu')
await GojoMdNx.send5ButImg(from, `` + '' + ' ', `
┏━「 ${botname} 」━━⭓ 
┃╔═══✪「 DATABASE 」	        
┃╠ ${prefix}setcmd
┃╠ ${prefix}listcmd
┃╠ ${prefix}delcmd
┃╠ ${prefix}lockcmd
┃╠ ${prefix}addmsg
┃╠ ${prefix}listmsg
┃╠ ${prefix}getmsg
┃╠ ${prefix}delmsg
┃╚═════════════✪
┗━━「 ${pushname} 」━⭓`,unicorn, [{"urlButton": {"displayText": "YouTube📍","url": `${myweb}`}},{"urlButton": {"displayText": "Script🔖","url": `${sc}`}},{"quickReplyButton": {"displayText": "🍜Donate🍜","id": 'donate'}},{"quickReplyButton": {"displayText": "👤Owner👤","id": 'owner'}}] )
break
case 'databasemenu':
var unicorn = await getBuffer(picak+'Database Menu')
await GojoMdNx.send5ButImg(from, `` + '' + ' ', `
┏━「 ${botname} 」━━⭓ 
┃╔══✪「 ANONYMOUS CHAT 」	        
┃╠${prefix}anonymous
┃╠${prefix}start
┃╠${prefix}next
┃╠${prefix}leave
┃╚═════════════✪
┗━━「 ${pushname} 」━⭓`,unicorn, [{"urlButton": {"displayText": "YouTube📍","url": `${myweb}`}},{"urlButton": {"displayText": "Script🔖","url": `${sc}`}},{"quickReplyButton": {"displayText": "🍜Donate🍜","id": 'donate'}},{"quickReplyButton": {"displayText": "👤Owner👤","id": 'owner'}}] )
break
case 'islamicmenu':
var unicorn = await getBuffer(picak+'Islamic Menu')
await GojoMdNx.send5ButImg(from, `` + '' + ' ', `
┏━「 ${botname} 」━━⭓ 
┃╔══✪「 ISLAMIC 」	        
┃╠${prefix}juzamma
┃╚═════════════✪
┗━━「 ${pushname} 」━⭓`,unicorn, [{"urlButton": {"displayText": "YouTube📍","url": `${myweb}`}},{"urlButton": {"displayText": "Script🔖","url": `${sc}`}},{"quickReplyButton": {"displayText": "🍜Donate🍜","id": 'donate'}},{"quickReplyButton": {"displayText": "👤Owner👤","id": 'owner'}}] )
break
case 'voicechangermenu':
var unicorn = await getBuffer(picak+'Voice Changer Menu')
await GojoMdNx.send5ButImg(from, `` + '' + ' ', `
┏━「 ${botname} 」━━⭓ 
┃╔══✪「 VOICE CHANGER 」	        
┃╠${prefix}bass [reply aud]
┃╠${prefix}blown [reply aud]
┃╠${prefix}deep [reply aud]
┃╠${prefix}earrape [reply aud]
┃╠${prefix}fast [reply aud]
┃╠${prefix}fat [reply aud]
┃╠${prefix}nightcore [reply aud]
┃╠${prefix}reverse [reply aud]
┃╠${prefix}robot [reply aud]
┃╠${prefix}slow [reply aud]
┃╠${prefix}squirrel [reply aud]
┃╚═════════════✪
┗━━「 ${pushname} 」━⭓`,unicorn, [{"urlButton": {"displayText": "YouTube📍","url": `${myweb}`}},{"urlButton": {"displayText": "Script🔖","url": `${sc}`}},{"quickReplyButton": {"displayText": "🍜Donate🍜","id": 'donate'}},{"quickReplyButton": {"displayText": "👤Owner👤","id": 'owner'}}] )
break
case 'horoscopemenu':
var unicorn = await getBuffer(picak+'Horoscope Menu')
await GojoMdNx.send5ButImg(from, `` + '' + ' ', `
┏━「 ${botname} 」━━⭓ 
┃╔══✪「 HOROSCOPE 」	        
┃╠${prefix}nomorhoki (indo)
┃╠${prefix}artimimpi (indo)
┃╠${prefix}artinama (indo)
┃╠${prefix}ramaljodoh (indo)
┃╠${prefix}ramaljodohbali (indo)
┃╠${prefix}suamiistri (indo)
┃╠${prefix}ramalcinta (indo)
┃╠${prefix}cocoknama (indo)
┃╠${prefix}pasangan (indo)
┃╠${prefix}jadiannikah (indo)
┃╠${prefix}sifatusaha (indo)
┃╠${prefix}rezeki (indo)
┃╠${prefix}pekerjaan (indo)
┃╠${prefix}nasib (indo)
┃╠${prefix}penyakit (indo)
┃╠${prefix}tarot (indo)
┃╠${prefix}fengshui (indo)
┃╠${prefix}haribaik (indo)
┃╠${prefix}harisangar (indo)
┃╠${prefix}harisial (indo)
┃╠${prefix}nagahari (indo)
┃╠${prefix}arahrezeki (indo)
┃╠${prefix}peruntungan (indo)
┃╠${prefix}weton (indo)
┃╠${prefix}karakter (indo)
┃╠${prefix}keberuntungan (indo)
┃╠${prefix}memancing (indo)
┃╠${prefix}masasubur (indo)
┃╠${prefix}zodiak (indo)
┃╠${prefix}shio (indo)
┃╚═════════════✪
┗━━「 ${pushname} 」━⭓`,unicorn, [{"urlButton": {"displayText": "YouTube📍","url": `${myweb}`}},{"urlButton": {"displayText": "Script🔖","url": `${sc}`}},{"quickReplyButton": {"displayText": "🍜Donate🍜","id": 'donate'}},{"quickReplyButton": {"displayText": "👤Owner👤","id": 'owner'}}] )
break

//══════════════════════════════════════════//
//
//                 🌸WATAME🌸
//              LISTA DE MENUES
//                     FIN
//
//══════════════════════════════════════════//

case 'thanksto': case 'tqto': case 'tqtt':
var unicorn = await getBuffer(picak+'Developer')
await GojoMdNx.send5ButImg(from, `` + '' + ' ', `
Thanks to Me ( NexusNw)
Alien-Alfa (For helping me to deploy qr in replit and answered my every doubts regard this project)
DGXeon ( 45% Credits goes to him ,in this script)
And Again Me (King Nexus 🎉) 🐦 Who Helped Assemble This Sexy Script !!!`,unicorn, [{"urlButton": {"displayText": "YouTube📍","url": `${myweb}`}},{"urlButton": {"displayText": "Script🔖","url": `${sc}`}},{"quickReplyButton": {"displayText": "🍜Donate🍜","id": 'donate'}},{"quickReplyButton": {"displayText": "👤Owner👤","id": 'owner'}}] )
break

//══════════════════════════════════════════//
//
//                 🌸WATAME🌸
//          LISTA DE COMANDOS HENTAI
//
//══════════════════════════════════════════//

case 'hero': {
const ura =['https://img.nickpic.host/q1hKQ1.jpg',
'https://img.nickpic.host/q1h8rW.jpg',
'https://img.nickpic.host/q1hzkc.jpg',
'https://img.nickpic.host/q1hwMz.jpg',
'https://img.nickpic.host/q1h1ZA.jpg',
'https://img.nickpic.host/q1hD5G.jpg',
'https://img.nickpic.host/q1hMAp.jpg',
'https://img.nickpic.host/q1hRzY.jpg',
'https://img.nickpic.host/q1hiNf.jpg',
'https://img.nickpic.host/q1hto6.jpg',
'https://img.nickpic.host/q1hYVj.jpg',
'https://img.nickpic.host/q1hNoJ.jpg',
'https://img.nickpic.host/q1hVAn.jpg',
'https://img.nickpic.host/q1hf7s.jpg',
'https://img.nickpic.host/q1h0Z2.jpg',
'https://img.nickpic.host/q1h95Q.jpg',
'https://img.nickpic.host/q1heRx.jpg',
'https://img.nickpic.host/q1hLsO.jpg',
'https://img.nickpic.host/q1hkkN.jpg',
'https://img.nickpic.host/q1hPUm.jpg',
'https://img.nickpic.host/q1hTV8.jpg',
'https://img.nickpic.host/q1hZpq.jpg',
'https://img.nickpic.host/q1hy7D.jpg',
'https://img.nickpic.host/q1hdAd.jpg',
'https://img.nickpic.host/q16oRM.jpg',
'https://img.nickpic.host/q16Gd5.jpg',
'https://img.nickpic.host/q16m5P.jpg',
'https://img.nickpic.host/q16pJF.jpg',
'https://img.nickpic.host/q16xse.jpg',
'https://img.nickpic.host/q16BUX.jpg',
'https://img.nickpic.host/q16bfb.jpg',
'https://img.nickpic.host/q16spf.jpg',
'https://img.nickpic.host/q163E6.jpg',
'https://img.nickpic.host/q16F8p.jpg',
'https://img.nickpic.host/q16adY.jpg',
'https://img.nickpic.host/q16lSA.jpg',
'https://img.nickpic.host/q1651G.jpg',
'https://img.nickpic.host/q16SJz.jpg',
'https://img.nickpic.host/q16g3c.jpg',
'https://img.nickpic.host/q16qUW.jpg',
'https://img.nickpic.host/q16uf1.jpg',
'https://img.nickpic.host/q16Evj.jpg',
'https://img.nickpic.host/q16OEJ.jpg',
'https://img.nickpic.host/q16h8n.jpg',
'https://img.nickpic.host/q166ys.jpg',
'https://img.nickpic.host/q16QS2.jpg',
'https://img.nickpic.host/q16U1Q.jpg',
'https://img.nickpic.host/q16XLx.jpg',
'https://img.nickpic.host/q16n3N.jpg',
'https://img.nickpic.host/q16tXO.jpg',
'https://img.nickpic.host/q161v8.jpg',
'https://img.nickpic.host/q16M0m.jpg',
'https://img.nickpic.host/q164Oq.jpg',
'https://img.nickpic.host/q16wyD.jpg',
'https://img.nickpic.host/q16D8d.jpg',
'https://img.nickpic.host/q167c5.jpg',
'https://img.nickpic.host/q1681P.jpg',
'https://img.nickpic.host/q16KLM.jpg',
'https://img.nickpic.host/q16HFF.jpg',
'https://img.nickpic.host/q16NXe.jpg',
'https://img.nickpic.host/q16V0X.jpg',
'https://img.nickpic.host/q162Of.jpg',
'https://img.nickpic.host/q160xb.jpg',
'https://img.nickpic.host/q169K6.jpg',
'https://img.nickpic.host/q16kGp.jpg',
'https://img.nickpic.host/q16JcY.jpg',
'https://img.nickpic.host/q16PPG.jpg',
'https://img.nickpic.host/q16L4A.jpg',
'https://img.nickpic.host/q16WFz.jpg',
'https://img.nickpic.host/q16Zic.jpg',
'https://img.nickpic.host/q16d0W.jpg',
'https://img.nickpic.host/q1CGx1.jpg',
'https://img.nickpic.host/q1CIhj.jpg',
'https://img.nickpic.host/q1CmKJ.jpg',
'https://img.nickpic.host/q1CpGn.jpg',
'https://img.nickpic.host/q1Cvgs.jpg',
'https://img.nickpic.host/q1Cx42.jpg',
'https://img.nickpic.host/q1CBPQ.jpg',
'https://img.nickpic.host/q1Crax.jpg',
'https://img.nickpic.host/q1CsiN.jpg',
'https://img.nickpic.host/q1C32O.jpg',
'https://img.nickpic.host/q1CaBm.jpg',
'https://img.nickpic.host/q1Cjh8.jpg',
'https://img.nickpic.host/q1ClYq.jpg',
'https://img.nickpic.host/q1CSGd.jpg',
'https://img.nickpic.host/q1CcgD.jpg',
'https://img.nickpic.host/q1CgD5.jpg',
'https://img.nickpic.host/q1CqPP.jpg',
'https://img.nickpic.host/q1CAaM.jpg',
'https://img.nickpic.host/q1CEnF.jpg',
'https://img.nickpic.host/q1CO2e.jpg',
'https://img.nickpic.host/q1C6BX.jpg',
'https://img.nickpic.host/q1CC6b.jpg',
'https://img.nickpic.host/q1CQYf.jpg',
'https://img.nickpic.host/q1CXI6.jpg',
'https://img.nickpic.host/q1Ciqp.jpg',
'https://img.nickpic.host/q1CnDY.jpg',
'https://img.nickpic.host/q1CtTA.jpg',
'https://img.nickpic.host/q1CRjG.jpg',
'https://img.nickpic.host/q1C1nz.jpg',
'https://img.nickpic.host/q1C49c.jpg',
'https://img.nickpic.host/q1CwBW.jpg',
'https://img.nickpic.host/q1Cz61.jpg',
'https://img.nickpic.host/q1C7Hj.jpg',
'https://img.nickpic.host/q1CKIJ.jpg',
'https://img.nickpic.host/q1CYqn.jpg',
'https://img.nickpic.host/q1CHws.jpg',
'https://img.nickpic.host/q1CNT2.jpg',
'https://img.nickpic.host/q1CfjQ.jpg',
'https://img.nickpic.host/q1C0tx.jpg',
'https://img.nickpic.host/q1C29N.jpg',
'https://img.nickpic.host/q1CebO.jpg',
'https://img.nickpic.host/q1CkCm.jpg',
'https://img.nickpic.host/q1CJH8.jpg',
'https://img.nickpic.host/q1CPmq.jpg',
'https://img.nickpic.host/q1CTqd.jpg',
'https://img.nickpic.host/q1CWwD.jpg',
'https://img.nickpic.host/q1CZW5.jpg',
'https://img.nickpic.host/q1CyjP.jpg',
'https://img.nickpic.host/q1QGtM.jpg',
'https://img.nickpic.host/q1QIeF.jpg',
'https://img.nickpic.host/q1Qobe.jpg',
'https://img.nickpic.host/q1QpCX.jpg',
'https://img.nickpic.host/q1QvNb.jpg',
'https://img.nickpic.host/q1QBmf.jpg',
'https://img.nickpic.host/q1Qbu6.jpg',
'https://img.nickpic.host/q1Qrzp.jpg',
'https://img.nickpic.host/q1QsWY.jpg',
'https://img.nickpic.host/q1QFlA.jpg',
'https://img.nickpic.host/q1QaMG.jpg',
'https://img.nickpic.host/q1Qjez.jpg',
'https://img.nickpic.host/q1Q5rc.jpg',
'https://img.nickpic.host/q1QSCW.jpg',
'https://img.nickpic.host/q1QcN1.jpg',
'https://img.nickpic.host/q1Qqoj.jpg',
'https://img.nickpic.host/q1QuuJ.jpg',
'https://img.nickpic.host/q1QAzn.jpg',
'https://img.nickpic.host/q1QEZs.jpg',
'https://img.nickpic.host/q1Qhl2.jpg',
'https://img.nickpic.host/q1Q6MQ.jpg',
'https://img.nickpic.host/q1QCkx.jpg',
'https://img.nickpic.host/q1QUrN.jpg',
'https://img.nickpic.host/q1QXQO.jpg',
'https://img.nickpic.host/q1QiVm.jpg',
'https://img.nickpic.host/q1Qto8.jpg',
'https://img.nickpic.host/q1QMAq.jpg',
'https://img.nickpic.host/q1QRzd.jpg',
'https://img.nickpic.host/q1Q1ZD.jpg',
'https://img.nickpic.host/q1QD55.jpg',
'https://img.nickpic.host/q1QwMP.jpg',
'https://img.nickpic.host/q1QzkM.jpg',
'https://img.nickpic.host/q1Q8sF.jpg',
'https://img.nickpic.host/q1QKQe.jpg',
'https://img.nickpic.host/q1QYVX.jpg',
'https://img.nickpic.host/q1QNpb.jpg',
'https://img.nickpic.host/q1QVAf.jpg',
'https://img.nickpic.host/q1Qf76.jpg',
'https://img.nickpic.host/q1Q0dp.jpg',
'https://img.nickpic.host/q1Q95Y.jpg',
'https://img.nickpic.host/q1QeRA.jpg',
'https://img.nickpic.host/q1QkJG.jpg',
'https://img.nickpic.host/q1QLsz.jpg',
'https://img.nickpic.host/q1QPUc.jpg',
'https://img.nickpic.host/q1QTVW.jpg',
'https://img.nickpic.host/q1QZp1.jpg',
'https://img.nickpic.host/q1QdEj.jpg',
'https://img.nickpic.host/q1Qy7J.jpg',
'https://img.nickpic.host/q1UGdn.jpg',
'https://img.nickpic.host/q1UmSs.jpg',
'https://img.nickpic.host/q1UoR2.jpg',
'https://img.nickpic.host/q1Ux3x.jpg',
'https://img.nickpic.host/q1UpJQ.jpg',
'https://img.nickpic.host/q1UBUN.jpg',
'https://img.nickpic.host/q1UbfO.jpg',
'https://img.nickpic.host/q1Usvm.jpg',
'https://img.nickpic.host/q1U3E8.jpg',
'https://img.nickpic.host/q1UF8q.jpg',
'https://img.nickpic.host/q1UlSD.jpg',
'https://img.nickpic.host/q1Uadd.jpg',
'https://img.nickpic.host/q1U515.jpg',
'https://img.nickpic.host/q1USJP.jpg',
'https://img.nickpic.host/q1Ug3M.jpg',
'https://img.nickpic.host/q1UqXF.jpg',
'https://img.nickpic.host/q1Uufe.jpg',
'https://img.nickpic.host/q1UEvX.jpg',
'https://img.nickpic.host/q1UOOb.jpg',
'https://img.nickpic.host/q1Uh8f.jpg',
'https://img.nickpic.host/q1U6y6.jpg',
'https://img.nickpic.host/q1UQcp.jpg',
'https://img.nickpic.host/q1UU1Y.jpg',
'https://img.nickpic.host/q1UXLA.jpg',
'https://img.nickpic.host/q1UnFG.jpg',
'https://img.nickpic.host/q1UtXz.jpg',
'https://img.nickpic.host/q1UM0c.jpg',
'https://img.nickpic.host/q1U1vW.jpg',
'https://img.nickpic.host/q1U4O1.jpg',
'https://img.nickpic.host/q1UDKj.jpg',
'https://img.nickpic.host/q1UwyJ.jpg',
'https://img.nickpic.host/q1U7cn.jpg',
'https://img.nickpic.host/q1U84s.jpg',
'https://img.nickpic.host/q1UKL2.jpg',
'https://img.nickpic.host/q1UHFQ.jpg',
'https://img.nickpic.host/q1UNix.jpg',
'https://img.nickpic.host/q1UV0N.jpg',
'https://img.nickpic.host/q1U0xO.jpg',
'https://img.nickpic.host/q1U2hm.jpg',
'https://img.nickpic.host/q1U9K8.jpg',
'https://img.nickpic.host/q1UkGq.jpg',
'https://img.nickpic.host/q1UJcd.jpg',
'https://img.nickpic.host/q1UL4D.jpg',
'https://img.nickpic.host/q1UPP5.jpg',
'https://img.nickpic.host/q1UWFP.jpg',
'https://img.nickpic.host/q1UZiM.jpg',
'https://img.nickpic.host/q1Ud2F.jpg',
'https://img.nickpic.host/q1XGxe.jpg',
'https://img.nickpic.host/q1XIhX.jpg',
'https://img.nickpic.host/q1XmYb.jpg',
'https://img.nickpic.host/q1Xvg6.jpg',
'https://img.nickpic.host/q1XpGf.jpg',
'https://img.nickpic.host/q1XBPY.jpg',
'https://img.nickpic.host/q1XxDp.jpg',
'https://img.nickpic.host/q1XraA.jpg',
'https://img.nickpic.host/q1XsnG.jpg',
'https://img.nickpic.host/q1X32z.jpg',
'https://img.nickpic.host/q1XaBc.jpg',
'https://img.nickpic.host/q1XjhW.jpg',
'https://img.nickpic.host/q1XlY1.jpg',
'https://img.nickpic.host/q1XSIj.jpg',
'https://img.nickpic.host/q1XcgJ.jpg',
'https://img.nickpic.host/q1XgDn.jpg',
'https://img.nickpic.host/q1XqTs.jpg',
'https://img.nickpic.host/q1XAa2.jpg',
'https://img.nickpic.host/q1XEnQ.jpg',
'https://img.nickpic.host/q1XO9x.jpg',
'https://img.nickpic.host/q1X6BN.jpg',
'https://img.nickpic.host/q1XC6O.jpg',
'https://img.nickpic.host/q1XXI8.jpg',
'https://img.nickpic.host/q1XQHm.jpg',
'https://img.nickpic.host/q1Xiqq.jpg',
'https://img.nickpic.host/q1XnDd.jpg',
'https://img.nickpic.host/q1XtTD.jpg',
'https://img.nickpic.host/q1XRj5.jpg',
'https://img.nickpic.host/q1X1nP.jpg',
'https://img.nickpic.host/q1XKmb.jpg',
'https://img.nickpic.host/q1X49M.jpg',
'https://img.nickpic.host/q1XwbF.jpg',
'https://img.nickpic.host/q1X7HX.jpg',
'https://img.nickpic.host/q1Xz6e.jpg',
'https://img.nickpic.host/q1XYqf.jpg',
'https://img.nickpic.host/q1XHw6.jpg',
'https://img.nickpic.host/q1XNWp.jpg',
'https://img.nickpic.host/q1XfjY.jpg',
'https://img.nickpic.host/q1X0tA.jpg',
'https://img.nickpic.host/q1Xebz.jpg',
'https://img.nickpic.host/q1X2eG.jpg',
'https://img.nickpic.host/q1XkCc.jpg',
'https://img.nickpic.host/q1XJHW.jpg',
'https://img.nickpic.host/q1XPm1.jpg',
'https://img.nickpic.host/q1XTuj.jpg',
'https://img.nickpic.host/q1XWwJ.jpg',
'https://img.nickpic.host/q1XZWn.jpg',
'https://img.nickpic.host/q1Xyls.jpg',
'https://img.nickpic.host/q1iGt2.jpg',
'https://img.nickpic.host/q1iIeQ.jpg',
'https://img.nickpic.host/q1iorx.jpg',
'https://img.nickpic.host/q1iBom.jpg',
'https://img.nickpic.host/q1ivNO.jpg',
'https://img.nickpic.host/q1ipCN.jpg',
'https://img.nickpic.host/q1ibu8.jpg',
'https://img.nickpic.host/q1irzq.jpg',
'https://img.nickpic.host/q1iFlD.jpg',
'https://img.nickpic.host/q1isWd.jpg',
'https://img.nickpic.host/q1iaM5.jpg',
'https://img.nickpic.host/q1ijeP.jpg',
'https://img.nickpic.host/q1i5rM.jpg',
'https://img.nickpic.host/q1iSQF.jpg',
'https://img.nickpic.host/q1icNe.jpg',
'https://img.nickpic.host/q1iqoX.jpg',
'https://img.nickpic.host/q1iuAb.jpg',
'https://img.nickpic.host/q1iAzf.jpg',
'https://img.nickpic.host/q1iEZ6.jpg',
'https://img.nickpic.host/q1i6MY.jpg',
'https://img.nickpic.host/q1ih5p.jpg',
'https://img.nickpic.host/q1iCkA.jpg',
'https://img.nickpic.host/q1iUsG.jpg',
'https://img.nickpic.host/q1iXQz.jpg',
'https://img.nickpic.host/q1iiVc.jpg',
'https://img.nickpic.host/q1itoW.jpg',
'https://img.nickpic.host/q1iMA1.jpg',
'https://img.nickpic.host/q1iR7j.jpg',
'https://img.nickpic.host/q1i1ZJ.jpg',
'https://img.nickpic.host/q1iD5n.jpg',
'https://img.nickpic.host/q1iwRs.jpg',
'https://img.nickpic.host/q1izk2.jpg',
'https://img.nickpic.host/q1i8sQ.jpg',
'https://img.nickpic.host/q1iKUx.jpg',
'https://img.nickpic.host/q1iNpO.jpg',
'https://img.nickpic.host/q1iYVN.jpg',
'https://img.nickpic.host/q1iVEm.jpg',
'https://img.nickpic.host/q1if78.jpg',
'https://img.nickpic.host/q1i0dq.jpg',
'https://img.nickpic.host/q1ieRD.jpg',
'https://img.nickpic.host/q1i95d.jpg',
'https://img.nickpic.host/q1ikJ5.jpg',
'https://img.nickpic.host/q1iLsP.jpg',
'https://img.nickpic.host/q1iPUM.jpg',
'https://img.nickpic.host/q1iZpe.jpg',
'https://img.nickpic.host/q1iTfF.jpg',
'https://img.nickpic.host/q1idEX.jpg',
'https://img.nickpic.host/q1iy8b.jpg',
'https://img.nickpic.host/q1nGdf.jpg',
'https://img.nickpic.host/q1nmS6.jpg',
'https://img.nickpic.host/q1no1p.jpg',
'https://img.nickpic.host/q1npJY.jpg',
'https://img.nickpic.host/q1nBXG.jpg',
'https://img.nickpic.host/q1nsvc.jpg',
'https://img.nickpic.host/q1nx3A.jpg',
'https://img.nickpic.host/q1nbfz.jpg',
'https://img.nickpic.host/q1n3EW.jpg',
'https://img.nickpic.host/q1nayj.jpg',
'https://img.nickpic.host/q1nF81.jpg',
'https://img.nickpic.host/q1n51n.jpg',
'https://img.nickpic.host/q1nlSJ.jpg',
'https://img.nickpic.host/q1nSLs.jpg',
'https://img.nickpic.host/q1nqXQ.jpg',
'https://img.nickpic.host/q1ng32.jpg',
'https://img.nickpic.host/q1nu0x.jpg',
'https://img.nickpic.host/q1nEvN.jpg',
'https://img.nickpic.host/q1nOOO.jpg',
'https://img.nickpic.host/q1n6y8.jpg',
'https://img.nickpic.host/q1nhKm.jpg',
'https://img.nickpic.host/q1nXLD.jpg',
'https://img.nickpic.host/q1nQcq.jpg',
'https://img.nickpic.host/q1nU1d.jpg',
'https://img.nickpic.host/q1nnF5.jpg',
'https://img.nickpic.host/q1ntXP.jpg',
'https://img.nickpic.host/q1n1xF.jpg',
'https://img.nickpic.host/q1nM0M.jpg',
'https://img.nickpic.host/q1n4Oe.jpg',
'https://img.nickpic.host/q1n7cf.jpg',
'https://img.nickpic.host/q1nzGb.jpg',
'https://img.nickpic.host/q1nDKX.jpg',
'https://img.nickpic.host/q1n846.jpg',
'https://img.nickpic.host/q1nHFY.jpg',
'https://img.nickpic.host/q1nKPp.jpg',
'https://img.nickpic.host/q1nNiA.jpg',
'https://img.nickpic.host/q1n0xz.jpg',
'https://img.nickpic.host/q1nV2G.jpg',
'https://img.nickpic.host/q1n2hc.jpg',
'https://img.nickpic.host/q1n9KW.jpg',
'https://img.nickpic.host/q1nJgj.jpg',
'https://img.nickpic.host/q1nkG1.jpg',
'https://img.nickpic.host/q1nL4J.jpg',
'https://img.nickpic.host/q1nPPn.jpg',
'https://img.nickpic.host/q1nZi2.jpg',
'https://img.nickpic.host/q1nWas.jpg',
'https://img.nickpic.host/q1nd2Q.jpg',
'https://img.nickpic.host/q1tGBx.jpg',
'https://img.nickpic.host/q1tIhN.jpg',
'https://img.nickpic.host/q1tmYO.jpg',
'https://img.nickpic.host/q1tpIm.jpg',
'https://img.nickpic.host/q1tBPd.jpg',
'https://img.nickpic.host/q1tvg8.jpg',
'https://img.nickpic.host/q1txDq.jpg',
'https://img.nickpic.host/q1traD.jpg']
let dek = ura[Math.floor(Math.random() * ura.length)]
hero = await getBuffer(dek)
const dkk =['Aquí tienes 💕🦈','¿Linda foto no?','Pedido entregado 🕊','¿Qué tal está?','¿Te gusta?','Tengo muchas más 😽']
const fsfs = dkk[Math.floor(Math.random() * dkk.length)]
let buttons = [
                    {buttonId: `hero`, buttonText: {displayText: 'Siguiente'}, type: 1}
                ]
                let buttonMessage = {
                    image: (hero),
                    caption: (fsfs),
                    buttons: buttons,
                    headerType: 4
                }
                GojoMdNx.sendMessage(m.chat, buttonMessage)
            }
break

case 'hololive': {
const holo =['https://img.nickpic.host/uYPNTc.jpg',
'https://img.nickpic.host/uYPJHs.jpg',
'https://img.nickpic.host/uYPWwx.jpg',
'https://img.nickpic.host/uYPYqG.jpg',
'https://img.nickpic.host/uYPKIA.jpg',
'https://img.nickpic.host/uYP0n1.jpg',
'https://img.nickpic.host/uYPHDz.jpg',
'https://img.nickpic.host/uYT5bf.jpg',
'https://img.nickpic.host/uYPRaX.jpg',
'https://img.nickpic.host/uYPz6p.jpg',
'https://img.nickpic.host/uYPfaW.jpg',
'https://img.nickpic.host/uYPwB6.jpg',
'https://img.nickpic.host/uYP1nb.jpg',
'https://img.nickpic.host/uYP7YY.jpg',
'https://img.nickpic.host/uYP42f.jpg',
'https://img.nickpic.host/uYPZTN.jpg',
'https://img.nickpic.host/uYP29j.jpg',
'https://img.nickpic.host/uYPk6n.jpg',
'https://img.nickpic.host/uYPeBJ.jpg',
'https://img.nickpic.host/uYPPI2.jpg',
'https://img.nickpic.host/uYTvHD.jpg',
'https://img.nickpic.host/uYTGtm.jpg',
'https://img.nickpic.host/uYPTqQ.jpg',
'https://img.nickpic.host/uYPyjO.jpg',
'https://img.nickpic.host/uYTI98.jpg',
'https://img.nickpic.host/uYTsWF.jpg',
'https://img.nickpic.host/uYTBm5.jpg',
'https://img.nickpic.host/uYTobq.jpg',
'https://img.nickpic.host/uYTp6d.jpg',
'https://img.nickpic.host/uYTFje.jpg',
'https://img.nickpic.host/uYTrwM.jpg',
'https://img.nickpic.host/uYTatX.jpg',
'https://img.nickpic.host/uYTbqP.jpg',
'https://img.nickpic.host/uYTEWz.jpg',
'https://img.nickpic.host/uYT6tW.jpg',
'https://img.nickpic.host/uYTcNp.jpg',
'https://img.nickpic.host/uYTjeb.jpg',
'https://img.nickpic.host/uYTqmY.jpg',
'https://img.nickpic.host/uYTMu2.jpg',
'https://img.nickpic.host/uYTAzG.jpg',
'https://img.nickpic.host/uYTSC6.jpg',
'https://img.nickpic.host/uYTuuA.jpg',
'https://img.nickpic.host/uYTXCJ.jpg',
'https://img.nickpic.host/uYTCe1.jpg',
'https://img.nickpic.host/uYTUrj.jpg',
'https://img.nickpic.host/uYThlc.jpg',
'https://img.nickpic.host/uYTiNn.jpg',
'https://img.nickpic.host/uYT1Zx.jpg',
'https://img.nickpic.host/uYTzkm.jpg',
'https://img.nickpic.host/uYTDlN.jpg',
'https://img.nickpic.host/uYTtos.jpg',
'https://img.nickpic.host/uYTRzQ.jpg',
'https://img.nickpic.host/uYTwMO.jpg',
'https://img.nickpic.host/uYT8r8.jpg',
'https://img.nickpic.host/uYTKQq.jpg',
'https://img.nickpic.host/uYTy7A.jpg',
'https://img.nickpic.host/uYT0ZM.jpg',
'https://img.nickpic.host/uYTYNd.jpg',
'https://img.nickpic.host/uYTLsb.jpg',
'https://img.nickpic.host/uYTNoD.jpg',
'https://img.nickpic.host/uYTdAY.jpg',
'https://img.nickpic.host/uYTVA5.jpg',
'https://img.nickpic.host/uYTeMe.jpg',
'https://img.nickpic.host/uYTfzP.jpg',
'https://img.nickpic.host/uYTZpp.jpg',
'https://img.nickpic.host/uYT95F.jpg',
'https://img.nickpic.host/uYTkkX.jpg',
'https://img.nickpic.host/uYTTV6.jpg',
'https://img.nickpic.host/uYTPQf.jpg',
'https://img.nickpic.host/uYWpkW.jpg',
'https://img.nickpic.host/uYWBUj.jpg',
'https://img.nickpic.host/uYWF72.jpg',
'https://img.nickpic.host/uYWGdG.jpg',
'https://img.nickpic.host/uYWxs1.jpg',
'https://img.nickpic.host/uYWm5z.jpg',
'https://img.nickpic.host/uYWbVJ.jpg',
'https://img.nickpic.host/uYWoRc.jpg',
'https://img.nickpic.host/uYW3Es.jpg',
'https://img.nickpic.host/uYWqU8.jpg',
'https://img.nickpic.host/uYWg3m.jpg',
'https://img.nickpic.host/uYWEpd.jpg',
'https://img.nickpic.host/uYWspn.jpg',
'https://img.nickpic.host/uYWadQ.jpg',
'https://img.nickpic.host/uYWSJO.jpg',
'https://img.nickpic.host/uYW5RN.jpg',
'https://img.nickpic.host/uYWXJe.jpg',
'https://img.nickpic.host/uYWlSx.jpg',
'https://img.nickpic.host/uYWh85.jpg',
'https://img.nickpic.host/uYWufq.jpg',
'https://img.nickpic.host/uYWOED.jpg',
'https://img.nickpic.host/uYW1v6.jpg',
'https://img.nickpic.host/uYWMff.jpg',
'https://img.nickpic.host/uYWU1F.jpg',
'https://img.nickpic.host/uYW9Ks.jpg',
'https://img.nickpic.host/uYW6dP.jpg',
'https://img.nickpic.host/uYWQSM.jpg',
'https://img.nickpic.host/uYWn3X.jpg',
'https://img.nickpic.host/uYWKLc.jpg',
'https://img.nickpic.host/uYWtXb.jpg',
'https://img.nickpic.host/uYW4Op.jpg',
'https://img.nickpic.host/uYWwyA.jpg',
'https://img.nickpic.host/uYZGxq.jpg',
'https://img.nickpic.host/uYWD8Y.jpg',
'https://img.nickpic.host/uYWNX1.jpg',
'https://img.nickpic.host/uYWH3W.jpg',
'https://img.nickpic.host/uYW7cG.jpg',
'https://img.nickpic.host/uYW81z.jpg',
'https://img.nickpic.host/uYW0vJ.jpg',
'https://img.nickpic.host/uYWV0j.jpg',
'https://img.nickpic.host/uYW2On.jpg',
'https://img.nickpic.host/uYWWFO.jpg',
'https://img.nickpic.host/uYWd08.jpg',
'https://img.nickpic.host/uYWL4x.jpg',
'https://img.nickpic.host/uYWey2.jpg',
'https://img.nickpic.host/uYWJcQ.jpg',
'https://img.nickpic.host/uYWPLN.jpg',
'https://img.nickpic.host/uYWZim.jpg',
'https://img.nickpic.host/uYZBPF.jpg',
'https://img.nickpic.host/uYZmKD.jpg',
'https://img.nickpic.host/uYZXIs.jpg',
'https://img.nickpic.host/uYZvcP.jpg',
'https://img.nickpic.host/uYZSGY.jpg',
'https://img.nickpic.host/uYZIOd.jpg',
'https://img.nickpic.host/uYZrFe.jpg',
'https://img.nickpic.host/uYZx4M.jpg',
'https://img.nickpic.host/uYZlYp.jpg',
'https://img.nickpic.host/uYZpG5.jpg',
'https://img.nickpic.host/uYZsiX.jpg',
'https://img.nickpic.host/uYZjh6.jpg',
'https://img.nickpic.host/uYZaxf.jpg',
'https://img.nickpic.host/uYZ32b.jpg',
'https://img.nickpic.host/uYZO21.jpg',
'https://img.nickpic.host/uYZ49m.jpg',
'https://img.nickpic.host/uYZqPz.jpg',
'https://img.nickpic.host/uYZcgA.jpg',
'https://img.nickpic.host/uYZgDG.jpg',
'https://img.nickpic.host/uYZChJ.jpg',
'https://img.nickpic.host/uYZAac.jpg',
'https://img.nickpic.host/uYZtTx.jpg',
'https://img.nickpic.host/uYZ6Bj.jpg',
'https://img.nickpic.host/uYZEiW.jpg',
'https://img.nickpic.host/uYZQYn.jpg',
'https://img.nickpic.host/uYZnDQ.jpg',
'https://img.nickpic.host/uYZig2.jpg',
'https://img.nickpic.host/uYZRaN.jpg',
'https://img.nickpic.host/uYZ29X.jpg',
'https://img.nickpic.host/uYZwB8.jpg',
'https://img.nickpic.host/uYZ7Yd.jpg',
'https://img.nickpic.host/uYZ1nO.jpg',
'https://img.nickpic.host/uYZz6q.jpg',
'https://img.nickpic.host/uYZebb.jpg',
'https://img.nickpic.host/uYZYq5.jpg',
'https://img.nickpic.host/uYZKID.jpg',
'https://img.nickpic.host/uYZfjF.jpg',
'https://img.nickpic.host/uYZHDP.jpg',
'https://img.nickpic.host/uYZNTM.jpg',
'https://img.nickpic.host/uYZ0ne.jpg',
'https://img.nickpic.host/uYZJH6.jpg',
'https://img.nickpic.host/uYdrw2.jpg',
'https://img.nickpic.host/uYZk6f.jpg',
'https://img.nickpic.host/uYdatN.jpg',
'https://img.nickpic.host/uYZTqY.jpg',
'https://img.nickpic.host/uYZWwA.jpg',
'https://img.nickpic.host/uYZPmp.jpg',
'https://img.nickpic.host/uYdI9W.jpg',
'https://img.nickpic.host/uYZyjz.jpg',
'https://img.nickpic.host/uYdBmn.jpg',
'https://img.nickpic.host/uYdGtc.jpg',
'https://img.nickpic.host/uYdbus.jpg',
'https://img.nickpic.host/uYZZWG.jpg',
'https://img.nickpic.host/uYdvHJ.jpg',
'https://img.nickpic.host/uYdob1.jpg',
'https://img.nickpic.host/uYdjeO.jpg',
'https://img.nickpic.host/uYdpCj.jpg',
'https://img.nickpic.host/uYd5rm.jpg',
'https://img.nickpic.host/uYdFlx.jpg',
'https://img.nickpic.host/uYdqmd.jpg',
'https://img.nickpic.host/uYdsWQ.jpg',
'https://img.nickpic.host/uYdUrX.jpg',
'https://img.nickpic.host/uYdEWP.jpg',
'https://img.nickpic.host/uYdcNq.jpg',
'https://img.nickpic.host/uYdSC8.jpg',
'https://img.nickpic.host/uYdCee.jpg',
'https://img.nickpic.host/uYduuD.jpg',
'https://img.nickpic.host/uYdhlM.jpg',
'https://img.nickpic.host/uYdAz5.jpg',
'https://img.nickpic.host/uYd6MF.jpg',
'https://img.nickpic.host/uYdXQb.jpg',
'https://img.nickpic.host/uYdYVj.jpg',
'https://img.nickpic.host/uYdRzY.jpg',
'https://img.nickpic.host/uYdto6.jpg',
'https://img.nickpic.host/uYdiNf.jpg',
'https://img.nickpic.host/uYdMAp.jpg',
'https://img.nickpic.host/uYd8rW.jpg',
'https://img.nickpic.host/uYdD5G.jpg',
'https://img.nickpic.host/uYdzkc.jpg',
'https://img.nickpic.host/uYdwMz.jpg',
'https://img.nickpic.host/uYdLsO.jpg',
'https://img.nickpic.host/uYd1ZA.jpg',
'https://img.nickpic.host/uYdNoJ.jpg',
'https://img.nickpic.host/uYdKQ1.jpg',
'https://img.nickpic.host/uYdPUm.jpg',
'https://img.nickpic.host/uYdVAn.jpg',
'https://img.nickpic.host/uYdeRx.jpg',
'https://img.nickpic.host/uYyxse.jpg',
'https://img.nickpic.host/uYd0Z2.jpg',
'https://img.nickpic.host/uYdf7s.jpg',
'https://img.nickpic.host/uYd95Q.jpg',
'https://img.nickpic.host/uYyGd5.jpg',
'https://img.nickpic.host/uYdTV8.jpg',
'https://img.nickpic.host/uYdkkN.jpg',
'https://img.nickpic.host/uYddAd.jpg',
'https://img.nickpic.host/uYdy7D.jpg',
'https://img.nickpic.host/uYym5P.jpg',
'https://img.nickpic.host/uYytXO.jpg',
'https://img.nickpic.host/uYdZpq.jpg',
'https://img.nickpic.host/uYyg3c.jpg',
'https://img.nickpic.host/uYypJF.jpg',
'https://img.nickpic.host/uYyBUX.jpg',
'https://img.nickpic.host/uYyoRM.jpg',
'https://img.nickpic.host/uYyadY.jpg',
'https://img.nickpic.host/uYy3E6.jpg',
'https://img.nickpic.host/uYyqUW.jpg',
'https://img.nickpic.host/uYyF8p.jpg',
'https://img.nickpic.host/uYybfb.jpg',
'https://img.nickpic.host/uYyspf.jpg',
'https://img.nickpic.host/uYySJz.jpg',
'https://img.nickpic.host/uYy51G.jpg',
'https://img.nickpic.host/uYyh8n.jpg',
'https://img.nickpic.host/uYylSA.jpg',
'https://img.nickpic.host/uYyuf1.jpg',
'https://img.nickpic.host/uYyOEJ.jpg',
'https://img.nickpic.host/uYyQS2.jpg',
'https://img.nickpic.host/uYyEvj.jpg',
'https://img.nickpic.host/uYyn3N.jpg',
'https://img.nickpic.host/uYy2Of.jpg',
'https://img.nickpic.host/uYyU1Q.jpg',
'https://img.nickpic.host/uYy6ys.jpg',
'https://img.nickpic.host/uYyL4A.jpg',
'https://img.nickpic.host/uYy1v8.jpg',
'https://img.nickpic.host/uYyKLM.jpg',
'https://img.nickpic.host/uYyXLx.jpg',
'https://img.nickpic.host/uYyM0m.jpg',
'https://img.nickpic.host/uYywyD.jpg',
'https://img.nickpic.host/uYyD8d.jpg',
'https://img.nickpic.host/uYy4Oq.jpg',
'https://img.nickpic.host/uYy7c5.jpg',
'https://img.nickpic.host/uYy81P.jpg',
'https://img.nickpic.host/uYyZic.jpg',
'https://img.nickpic.host/uYyNXe.jpg',
'https://img.nickpic.host/uYyHFF.jpg',
'https://img.nickpic.host/uYy0xb.jpg',
'https://img.nickpic.host/uYyV0X.jpg',
'https://img.nickpic.host/uYyWFz.jpg',
'https://img.nickpic.host/uYyJcY.jpg',
'https://img.nickpic.host/uHGGx1.jpg',
'https://img.nickpic.host/uYy9K6.jpg',
'https://img.nickpic.host/uYykGp.jpg',
'https://img.nickpic.host/uYyPPG.jpg',
'https://img.nickpic.host/uHGjh8.jpg',
'https://img.nickpic.host/uHGIhj.jpg',
'https://img.nickpic.host/uYyd0W.jpg',
'https://img.nickpic.host/uHGmKJ.jpg',
'https://img.nickpic.host/uHGpGn.jpg',
'https://img.nickpic.host/uHGBPQ.jpg',
'https://img.nickpic.host/uHGsiN.jpg',
'https://img.nickpic.host/uHGaBm.jpg',
'https://img.nickpic.host/uHGvgs.jpg',
'https://img.nickpic.host/uHGlYq.jpg',
'https://img.nickpic.host/uHGx42.jpg',
'https://img.nickpic.host/uHGrax.jpg',
'https://img.nickpic.host/uHGgD5.jpg',
'https://img.nickpic.host/uHGnDY.jpg',
'https://img.nickpic.host/uHGAaM.jpg',
'https://img.nickpic.host/uHG32O.jpg',
'https://img.nickpic.host/uHGqPP.jpg',
'https://img.nickpic.host/uHGSGd.jpg',
'https://img.nickpic.host/uHGcgD.jpg',
'https://img.nickpic.host/uHG6BX.jpg',
'https://img.nickpic.host/uHGEnF.jpg',
'https://img.nickpic.host/uHGXI6.jpg',
'https://img.nickpic.host/uHGC6b.jpg',
'https://img.nickpic.host/uHGO2e.jpg',
'https://img.nickpic.host/uHGtTA.jpg',
'https://img.nickpic.host/uHGQYf.jpg',
'https://img.nickpic.host/uHG49c.jpg',
'https://img.nickpic.host/uHGz61.jpg',
'https://img.nickpic.host/uHG1nz.jpg',
'https://img.nickpic.host/uHGiqp.jpg',
'https://img.nickpic.host/uHGRjG.jpg',
'https://img.nickpic.host/uHG7Hj.jpg',
'https://img.nickpic.host/uHGHws.jpg',
'https://img.nickpic.host/uHGwBW.jpg',
'https://img.nickpic.host/uHGYqn.jpg',
'https://img.nickpic.host/uHIGtM.jpg',
'https://img.nickpic.host/uHGKIJ.jpg',
'https://img.nickpic.host/uHG0tx.jpg',
'https://img.nickpic.host/uHGebO.jpg',
'https://img.nickpic.host/uHGkCm.jpg',
'https://img.nickpic.host/uHGNT2.jpg',
'https://img.nickpic.host/uHGfjQ.jpg',
'https://img.nickpic.host/uHIIeF.jpg',
'https://img.nickpic.host/uHIvNb.jpg',
'https://img.nickpic.host/uHGJH8.jpg',
'https://img.nickpic.host/uHG29N.jpg',
'https://img.nickpic.host/uHGZW5.jpg',
'https://img.nickpic.host/uHGPmq.jpg',
'https://img.nickpic.host/uHGTqd.jpg',
'https://img.nickpic.host/uHGWwD.jpg',
'https://img.nickpic.host/uHIrzp.jpg',
'https://img.nickpic.host/uHGyjP.jpg',
'https://img.nickpic.host/uHIpCX.jpg',
'https://img.nickpic.host/uHIUrN.jpg',
'https://img.nickpic.host/uHID55.jpg',
'https://img.nickpic.host/uHIobe.jpg',
'https://img.nickpic.host/uHIbu6.jpg',
'https://img.nickpic.host/uHIaMG.jpg',
'https://img.nickpic.host/uHIBmf.jpg',
'https://img.nickpic.host/uHIFlA.jpg',
'https://img.nickpic.host/uHIsWY.jpg',
'https://img.nickpic.host/uHIjez.jpg',
'https://img.nickpic.host/uHI5rc.jpg',
'https://img.nickpic.host/uHIcN1.jpg',
'https://img.nickpic.host/uHISCW.jpg',
'https://img.nickpic.host/uHIiVm.jpg',
'https://img.nickpic.host/uHIuuJ.jpg',
'https://img.nickpic.host/uHIqoj.jpg',
'https://img.nickpic.host/uHIAzn.jpg',
'https://img.nickpic.host/uHICkx.jpg',
'https://img.nickpic.host/uHIwMP.jpg',
'https://img.nickpic.host/uHIEZs.jpg',
'https://img.nickpic.host/uHIhl2.jpg',
'https://img.nickpic.host/uHIXQO.jpg',
'https://img.nickpic.host/uHIRzd.jpg',
'https://img.nickpic.host/uHI6MQ.jpg',
'https://img.nickpic.host/uHIf76.jpg',
'https://img.nickpic.host/uHI1ZD.jpg',
'https://img.nickpic.host/uHIto8.jpg',
'https://img.nickpic.host/uHIMAq.jpg',
'https://img.nickpic.host/uHIKQe.jpg',
'https://img.nickpic.host/uHINpb.jpg',
'https://img.nickpic.host/uHI8sF.jpg',
'https://img.nickpic.host/uHIYVX.jpg',
'https://img.nickpic.host/uHIZp1.jpg',
'https://img.nickpic.host/uHIzkM.jpg',
'https://img.nickpic.host/uHIkJG.jpg',
'https://img.nickpic.host/uHIVAf.jpg',
'https://img.nickpic.host/uHI95Y.jpg',
'https://img.nickpic.host/uHIdEj.jpg',
'https://img.nickpic.host/uHILsz.jpg',
'https://img.nickpic.host/uHI0dp.jpg',
'https://img.nickpic.host/uHIPUc.jpg',
'https://img.nickpic.host/uHIeRA.jpg',
'https://img.nickpic.host/uHITVW.jpg']
let live = holo[Math.floor(Math.random() * holo.length)]
hololi = await getBuffer(live)
const sich =['Aquí tienes 💕🦈','¿Linda foto no?','Pedido entregado 🕊','¿Qué tal está?','¿Te gusta?','Tengo muchas más 😽']
const seseh = sich[Math.floor(Math.random() * sich.length)]
let buttons = [
                    {buttonId: `hololive`, buttonText: {displayText: 'Siguiente'}, type: 1}
                ]
                let buttonMessage = {
                    image: (hololi),
                    caption: (seseh),
                    buttons: buttons,
                    headerType: 4
                }
                GojoMdNx.sendMessage(m.chat, buttonMessage)
            }
break

case 'nintendo': {
const sasu =['https://img.nickpic.host/q10CJP.jpg',
'https://img.nickpic.host/q10615.jpg',
'https://img.nickpic.host/q10hSD.jpg',
'https://img.nickpic.host/q10Edd.jpg',
'https://img.nickpic.host/q10A8q.jpg',
'https://img.nickpic.host/q10cfO.jpg',
'https://img.nickpic.host/q10SUN.jpg',
'https://img.nickpic.host/q10uE8.jpg',
'https://img.nickpic.host/q1053x.jpg',
'https://img.nickpic.host/q10qvm.jpg',
'https://img.nickpic.host/q10XXF.jpg',
'https://img.nickpic.host/q10U3M.jpg',
'https://img.nickpic.host/q10ife.jpg',
'https://img.nickpic.host/q10tvX.jpg',
'https://img.nickpic.host/q10MOb.jpg',
'https://img.nickpic.host/q10R8f.jpg',
'https://img.nickpic.host/q101y6.jpg',
'https://img.nickpic.host/q10Dcp.jpg',
'https://img.nickpic.host/q10w1Y.jpg',
'https://img.nickpic.host/q10zLA.jpg',
'https://img.nickpic.host/q108FG.jpg',
'https://img.nickpic.host/q10KXz.jpg',
'https://img.nickpic.host/q10Y0c.jpg',
'https://img.nickpic.host/q10NvW.jpg',
'https://img.nickpic.host/q10VO1.jpg',
'https://img.nickpic.host/q10fKj.jpg',
'https://img.nickpic.host/q100yJ.jpg',
'https://img.nickpic.host/q109cn.jpg',
'https://img.nickpic.host/q10e4s.jpg',
'https://img.nickpic.host/q10kL2.jpg',
'https://img.nickpic.host/q10LFQ.jpg',
'https://img.nickpic.host/q10Pix.jpg',
'https://img.nickpic.host/q10T0N.jpg',
'https://img.nickpic.host/q10ZxO.jpg',
'https://img.nickpic.host/q10dhm.jpg',
'https://img.nickpic.host/q10yK8.jpg',
'https://img.nickpic.host/q12IGq.jpg',
'https://img.nickpic.host/q12mcd.jpg',
'https://img.nickpic.host/q12o4D.jpg',
'https://img.nickpic.host/q12pP5.jpg',
'https://img.nickpic.host/q12xFP.jpg',
'https://img.nickpic.host/q12BiM.jpg',
'https://img.nickpic.host/q12b2F.jpg',
'https://img.nickpic.host/q12sxe.jpg',
'https://img.nickpic.host/q123hX.jpg',
'https://img.nickpic.host/q12FYb.jpg',
'https://img.nickpic.host/q12lg6.jpg',
'https://img.nickpic.host/q12jGf.jpg',
'https://img.nickpic.host/q125Dp.jpg',
'https://img.nickpic.host/q12SPY.jpg',
'https://img.nickpic.host/q12gaA.jpg',
'https://img.nickpic.host/q12qnG.jpg',
'https://img.nickpic.host/q12u2z.jpg',
'https://img.nickpic.host/q12EBc.jpg',
'https://img.nickpic.host/q12OhW.jpg',
'https://img.nickpic.host/q12hY1.jpg',
'https://img.nickpic.host/q12CIj.jpg',
'https://img.nickpic.host/q12QgJ.jpg',
'https://img.nickpic.host/q12UDn.jpg',
'https://img.nickpic.host/q12XTs.jpg',
'https://img.nickpic.host/q12na2.jpg',
'https://img.nickpic.host/q12tnQ.jpg',
'https://img.nickpic.host/q12M9x.jpg',
'https://img.nickpic.host/q121BN.jpg',
'https://img.nickpic.host/q1246O.jpg',
'https://img.nickpic.host/q12DHm.jpg',
'https://img.nickpic.host/q127qq.jpg',
'https://img.nickpic.host/q12zI8.jpg',
'https://img.nickpic.host/q128Dd.jpg',
'https://img.nickpic.host/q12KTD.jpg',
'https://img.nickpic.host/q12Hj5.jpg',
'https://img.nickpic.host/q12NnP.jpg',
'https://img.nickpic.host/q12V9M.jpg',
'https://img.nickpic.host/q120bF.jpg',
'https://img.nickpic.host/q1226e.jpg',
'https://img.nickpic.host/q129HX.jpg',
'https://img.nickpic.host/q12kmb.jpg',
'https://img.nickpic.host/q12Jqf.jpg',
'https://img.nickpic.host/q12Lw6.jpg',
'https://img.nickpic.host/q12PWp.jpg',
'https://img.nickpic.host/q12WjY.jpg',
'https://img.nickpic.host/q12ZtA.jpg',
'https://img.nickpic.host/q12deG.jpg',
'https://img.nickpic.host/q19Gbz.jpg',
'https://img.nickpic.host/q19ICc.jpg',
'https://img.nickpic.host/q19mHW.jpg',
'https://img.nickpic.host/q19pm1.jpg',
'https://img.nickpic.host/q19vuj.jpg',
'https://img.nickpic.host/q19xwJ.jpg',
'https://img.nickpic.host/q19BWn.jpg',
'https://img.nickpic.host/q19rls.jpg',
'https://img.nickpic.host/q19arx.jpg',
'https://img.nickpic.host/q19st2.jpg',
'https://img.nickpic.host/q193eQ.jpg',
'https://img.nickpic.host/q19jCN.jpg',
'https://img.nickpic.host/q19gzq.jpg',
'https://img.nickpic.host/q19lNO.jpg',
'https://img.nickpic.host/q19cu8.jpg',
'https://img.nickpic.host/q19Som.jpg',
'https://img.nickpic.host/q19qWd.jpg',
'https://img.nickpic.host/q19AlD.jpg',
'https://img.nickpic.host/q19OeP.jpg',
'https://img.nickpic.host/q19EM5.jpg',
'https://img.nickpic.host/q196rM.jpg',
'https://img.nickpic.host/q19CQF.jpg',
'https://img.nickpic.host/q19QNe.jpg',
'https://img.nickpic.host/q19XoX.jpg',
'https://img.nickpic.host/q19iAb.jpg',
'https://img.nickpic.host/q19nzf.jpg',
'https://img.nickpic.host/q19tZ6.jpg',
'https://img.nickpic.host/q19R5p.jpg',
'https://img.nickpic.host/q191MY.jpg',
'https://img.nickpic.host/q19wsG.jpg',
'https://img.nickpic.host/q194kA.jpg',
'https://img.nickpic.host/q19zQz.jpg',
'https://img.nickpic.host/q197Vc.jpg',
'https://img.nickpic.host/q19KoW.jpg',
'https://img.nickpic.host/q19YA1.jpg',
'https://img.nickpic.host/q19H7j.jpg',
'https://img.nickpic.host/q19NZJ.jpg',
'https://img.nickpic.host/q19f5n.jpg',
'https://img.nickpic.host/q190Rs.jpg',
'https://img.nickpic.host/q192k2.jpg',
'https://img.nickpic.host/q19esQ.jpg',
'https://img.nickpic.host/q19kUx.jpg',
'https://img.nickpic.host/q19JVN.jpg',
'https://img.nickpic.host/q19PpO.jpg',
'https://img.nickpic.host/q19TEm.jpg',
'https://img.nickpic.host/q19Zdq.jpg',
'https://img.nickpic.host/q19W78.jpg',
'https://img.nickpic.host/q19y5d.jpg',
'https://img.nickpic.host/q1eGRD.jpg',
'https://img.nickpic.host/q1eIJ5.jpg',
'https://img.nickpic.host/q1eosP.jpg',
'https://img.nickpic.host/q1epUM.jpg',
'https://img.nickpic.host/q1evfF.jpg',
'https://img.nickpic.host/q1eBpe.jpg',
'https://img.nickpic.host/q1ebEX.jpg',
'https://img.nickpic.host/q1er8b.jpg',
'https://img.nickpic.host/q1esdf.jpg',
'https://img.nickpic.host/q1eFS6.jpg',
'https://img.nickpic.host/q1ea1p.jpg',
'https://img.nickpic.host/q1ejJY.jpg',
'https://img.nickpic.host/q1e53A.jpg',
'https://img.nickpic.host/q1eSXG.jpg',
'https://img.nickpic.host/q1ecfz.jpg',
'https://img.nickpic.host/q1eqvc.jpg',
'https://img.nickpic.host/q1euEW.jpg',
'https://img.nickpic.host/q1eA81.jpg',
'https://img.nickpic.host/q1eEyj.jpg',
'https://img.nickpic.host/q1ehSJ.jpg',
'https://img.nickpic.host/q1e61n.jpg',
'https://img.nickpic.host/q1eCLs.jpg',
'https://img.nickpic.host/q1eU32.jpg',
'https://img.nickpic.host/q1eXXQ.jpg',
'https://img.nickpic.host/q1ei0x.jpg',
'https://img.nickpic.host/q1etvN.jpg',
'https://img.nickpic.host/q1eMOO.jpg',
'https://img.nickpic.host/q1eRKm.jpg',
'https://img.nickpic.host/q1e1y8.jpg',
'https://img.nickpic.host/q1eDcq.jpg',
'https://img.nickpic.host/q1ew1d.jpg',
'https://img.nickpic.host/q1ezLD.jpg',
'https://img.nickpic.host/q1e8F5.jpg',
'https://img.nickpic.host/q1eKXP.jpg',
'https://img.nickpic.host/q1eY0M.jpg',
'https://img.nickpic.host/q1eNxF.jpg',
'https://img.nickpic.host/q1eVOe.jpg',
'https://img.nickpic.host/q1efKX.jpg',
'https://img.nickpic.host/q1e2Gb.jpg',
'https://img.nickpic.host/q1e9cf.jpg',
'https://img.nickpic.host/q1ee46.jpg',
'https://img.nickpic.host/q1ekPp.jpg',
'https://img.nickpic.host/q1ePiA.jpg',
'https://img.nickpic.host/q1eLFY.jpg',
'https://img.nickpic.host/q1eT2G.jpg',
'https://img.nickpic.host/q1eZxz.jpg',
'https://img.nickpic.host/q1edhc.jpg',
'https://img.nickpic.host/q1eyKW.jpg',
'https://img.nickpic.host/q1kIG1.jpg',
'https://img.nickpic.host/q1kmgj.jpg',
'https://img.nickpic.host/q1ko4J.jpg',
'https://img.nickpic.host/q1kpPn.jpg',
'https://img.nickpic.host/q1kxas.jpg',
'https://img.nickpic.host/q1kBi2.jpg',
'https://img.nickpic.host/q1kb2Q.jpg',
'https://img.nickpic.host/q1ksBx.jpg',
'https://img.nickpic.host/q1k3hN.jpg',
'https://img.nickpic.host/q1kFYO.jpg',
'https://img.nickpic.host/q1kjIm.jpg',
'https://img.nickpic.host/q1klg8.jpg',
'https://img.nickpic.host/q1k5Dq.jpg',
'https://img.nickpic.host/q1kSPd.jpg',
'https://img.nickpic.host/q1kgaD.jpg',
'https://img.nickpic.host/q1kqn5.jpg',
'https://img.nickpic.host/q1ku2P.jpg',
'https://img.nickpic.host/q1kEBM.jpg',
'https://img.nickpic.host/q1kO6F.jpg',
'https://img.nickpic.host/q1khYe.jpg',
'https://img.nickpic.host/q1kCIX.jpg',
'https://img.nickpic.host/q1kUDf.jpg',
'https://img.nickpic.host/q1kQqb.jpg',
'https://img.nickpic.host/q1kXT6.jpg',
'https://img.nickpic.host/q1knjp.jpg',
'https://img.nickpic.host/q1ktnY.jpg',
'https://img.nickpic.host/q1kM9A.jpg',
'https://img.nickpic.host/q1k1bG.jpg',
'https://img.nickpic.host/q1k46z.jpg',
'https://img.nickpic.host/q1kDHc.jpg',
'https://img.nickpic.host/q1kzIW.jpg',
'https://img.nickpic.host/q1k7q1.jpg',
'https://img.nickpic.host/q1k8wj.jpg',
'https://img.nickpic.host/q1kKTJ.jpg',
'https://img.nickpic.host/q1kHjn.jpg',
'https://img.nickpic.host/q1kNts.jpg',
'https://img.nickpic.host/q1kV92.jpg',
'https://img.nickpic.host/q1k0bQ.jpg',
'https://img.nickpic.host/q1k2Cx.jpg',
'https://img.nickpic.host/q1k9HN.jpg',
'https://img.nickpic.host/q1kkmO.jpg',
'https://img.nickpic.host/q1kJum.jpg',
'https://img.nickpic.host/q1kLw8.jpg',
'https://img.nickpic.host/q1kPWq.jpg',
'https://img.nickpic.host/q1kWjd.jpg',
'https://img.nickpic.host/q1kZtD.jpg',
'https://img.nickpic.host/q1kde5.jpg',
'https://img.nickpic.host/q1JGbP.jpg',
'https://img.nickpic.host/q1JICM.jpg',
'https://img.nickpic.host/q1JmNF.jpg',
'https://img.nickpic.host/q1Jpme.jpg',
'https://img.nickpic.host/q1JvuX.jpg',
'https://img.nickpic.host/q1Jxzb.jpg',
'https://img.nickpic.host/q1JBWf.jpg',
'https://img.nickpic.host/q1Jrl6.jpg',
'https://img.nickpic.host/q1JsMp.jpg',
'https://img.nickpic.host/q1J3eY.jpg',
'https://img.nickpic.host/q1JarA.jpg',
'https://img.nickpic.host/q1JjQG.jpg',
'https://img.nickpic.host/q1JlNz.jpg',
'https://img.nickpic.host/q1JSoc.jpg',
'https://img.nickpic.host/q1JcuW.jpg',
'https://img.nickpic.host/q1Jgz1.jpg',
'https://img.nickpic.host/q1JqZj.jpg',
'https://img.nickpic.host/q1JAlJ.jpg',
'https://img.nickpic.host/q1JEMn.jpg',
'https://img.nickpic.host/q1JOks.jpg',
'https://img.nickpic.host/q1J6r2.jpg',
'https://img.nickpic.host/q1JCQQ.jpg',
'https://img.nickpic.host/q1JQVx.jpg',
'https://img.nickpic.host/q1JXoN.jpg',
'https://img.nickpic.host/q1JiAO.jpg',
'https://img.nickpic.host/q1Jn7m.jpg',
'https://img.nickpic.host/q1JtZ8.jpg',
'https://img.nickpic.host/q1JR5q.jpg',
'https://img.nickpic.host/q1J4kD.jpg',
'https://img.nickpic.host/q1JzQP.jpg',
'https://img.nickpic.host/q1J7VM.jpg',
'https://img.nickpic.host/q1JKpF.jpg',
'https://img.nickpic.host/q1JH7X.jpg',
'https://img.nickpic.host/q1JNdb.jpg',
'https://img.nickpic.host/q1Jf5f.jpg',
'https://img.nickpic.host/q1J0R6.jpg',
'https://img.nickpic.host/q1J2Jp.jpg',
'https://img.nickpic.host/q1JesY.jpg',
'https://img.nickpic.host/q1JJfG.jpg',
'https://img.nickpic.host/q1JkUA.jpg',
'https://img.nickpic.host/q1JTEc.jpg',
'https://img.nickpic.host/q1JW7W.jpg',
'https://img.nickpic.host/q1JZd1.jpg',
'https://img.nickpic.host/q1JySj.jpg',
'https://img.nickpic.host/q1LGRJ.jpg',
'https://img.nickpic.host/q1LIJn.jpg',
'https://img.nickpic.host/q1Lo3s.jpg',
'https://img.nickpic.host/q1LpU2.jpg',
'https://img.nickpic.host/q1LvfQ.jpg',
'https://img.nickpic.host/q1LBvx.jpg',
'https://img.nickpic.host/q1LbEN.jpg',
'https://img.nickpic.host/q1Lr8O.jpg',
'https://img.nickpic.host/q1Lsym.jpg',
'https://img.nickpic.host/q1LFS8.jpg',
'https://img.nickpic.host/q1La1q.jpg',
'https://img.nickpic.host/q1LjJd.jpg',
'https://img.nickpic.host/q1L53D.jpg',
'https://img.nickpic.host/q1LSX5.jpg',
'https://img.nickpic.host/q1LqvM.jpg',
'https://img.nickpic.host/q1LcfP.jpg',
'https://img.nickpic.host/q1LuOF.jpg',
'https://img.nickpic.host/q1LA8e.jpg',
'https://img.nickpic.host/q1LEyX.jpg',
'https://img.nickpic.host/q1Lhcb.jpg',
'https://img.nickpic.host/q1L61f.jpg',
'https://img.nickpic.host/q1LUFp.jpg',
'https://img.nickpic.host/q1LCL6.jpg',
'https://img.nickpic.host/q1LXXY.jpg',
'https://img.nickpic.host/q1Li0A.jpg',
'https://img.nickpic.host/q1LtxG.jpg',
'https://img.nickpic.host/q1LMOz.jpg',
'https://img.nickpic.host/q1LRKc.jpg',
'https://img.nickpic.host/q1L1yW.jpg',
'https://img.nickpic.host/q1LDc1.jpg',
'https://img.nickpic.host/q1Lw4j.jpg',
'https://img.nickpic.host/q1LzLJ.jpg',
'https://img.nickpic.host/q1L8Fn.jpg',
'https://img.nickpic.host/q1LKis.jpg',
'https://img.nickpic.host/q1LY02.jpg',
'https://img.nickpic.host/q1LNxQ.jpg',
'https://img.nickpic.host/q1LVhx.jpg',
'https://img.nickpic.host/q1L9gm.jpg',
'https://img.nickpic.host/q1LfKN.jpg',
'https://img.nickpic.host/q1L2GO.jpg',
'https://img.nickpic.host/q1LkPq.jpg',
'https://img.nickpic.host/q1Le48.jpg',
'https://img.nickpic.host/q1LLFd.jpg',
'https://img.nickpic.host/q1LPiD.jpg',
'https://img.nickpic.host/q1LT25.jpg',
'https://img.nickpic.host/q1LdhM.jpg',
'https://img.nickpic.host/q1LyYF.jpg',
'https://img.nickpic.host/q1LZxP.jpg',
'https://img.nickpic.host/q1PIGe.jpg',
'https://img.nickpic.host/q1PmgX.jpg',
'https://img.nickpic.host/q1PoDb.jpg',
'https://img.nickpic.host/q1PpPf.jpg',
'https://img.nickpic.host/q1Pxa6.jpg',
'https://img.nickpic.host/q1PBnp.jpg',
'https://img.nickpic.host/q1Pb2Y.jpg',
'https://img.nickpic.host/q1PsBA.jpg',
'https://img.nickpic.host/q1P36G.jpg',
'https://img.nickpic.host/q1PFYz.jpg',
'https://img.nickpic.host/q1PjIc.jpg',
'https://img.nickpic.host/q1PlgW.jpg',
'https://img.nickpic.host/q1P5D1.jpg',
'https://img.nickpic.host/q1PSTj.jpg',
'https://img.nickpic.host/q1Pqnn.jpg',
'https://img.nickpic.host/q1PgaJ.jpg',
'https://img.nickpic.host/q1Pu9s.jpg',
'https://img.nickpic.host/q1PEB2.jpg',
'https://img.nickpic.host/q1PO6Q.jpg',
'https://img.nickpic.host/q1PCIN.jpg',
'https://img.nickpic.host/q1PhHx.jpg',
'https://img.nickpic.host/q1PQqO.jpg',
'https://img.nickpic.host/q1PUwm.jpg',
'https://img.nickpic.host/q1PXT8.jpg',
'https://img.nickpic.host/q1Pnjq.jpg',
'https://img.nickpic.host/q1Ptnd.jpg',
'https://img.nickpic.host/q1PM9D.jpg',
'https://img.nickpic.host/q1P46P.jpg',
'https://img.nickpic.host/q1P1b5.jpg',
'https://img.nickpic.host/q1PDHM.jpg',
'https://img.nickpic.host/q1PzmF.jpg',
'https://img.nickpic.host/q1P7qe.jpg',
'https://img.nickpic.host/q1P8wX.jpg',
'https://img.nickpic.host/q1PKWb.jpg',
'https://img.nickpic.host/q1PHjf.jpg',
'https://img.nickpic.host/q1PNt6.jpg',
'https://img.nickpic.host/q1PVep.jpg',
'https://img.nickpic.host/q1P0bY.jpg',
'https://img.nickpic.host/q1P2CA.jpg',
'https://img.nickpic.host/q1P9NG.jpg',
'https://img.nickpic.host/q1Pkmz.jpg',
'https://img.nickpic.host/q1PJuc.jpg']
let ke = sasu[Math.floor(Math.random() * sasu.length)]
ninte = await getBuffer(ke)
const sic =['Aquí tienes 💕🦈','¿Linda foto no?','Pedido entregado 🕊','¿Qué tal está?','¿Te gusta?','Tengo muchas más 😽']
const sese = sic[Math.floor(Math.random() * sic.length)]
let buttons = [
                    {buttonId: `nintendo`, buttonText: {displayText: 'Siguiente'}, type: 1}
                ]
                let buttonMessage = {
                    image: (ninte),
                    caption: (sese),
                    buttons: buttons,
                    headerType: 4
                }
                GojoMdNx.sendMessage(m.chat, buttonMessage)
            }
break

case 'uzaki': {
const uza =['https://img.nickpic.host/q1HiuD.jpg',
'https://img.nickpic.host/q1HXmd.jpg',
'https://img.nickpic.host/q1HQNq.jpg',
'https://img.nickpic.host/q1HCC8.jpg',
'https://img.nickpic.host/q1HEtN.jpg',
'https://img.nickpic.host/q1H6rm.jpg',
'https://img.nickpic.host/q1HOeO.jpg',
'https://img.nickpic.host/q1HAlx.jpg',
'https://img.nickpic.host/q1Hgw2.jpg',
'https://img.nickpic.host/q1HqWQ.jpg',
'https://img.nickpic.host/q1Hnz5.jpg',
'https://img.nickpic.host/q1HtWP.jpg',
'https://img.nickpic.host/q1HRlM.jpg',
'https://img.nickpic.host/q1H1MF.jpg',
'https://img.nickpic.host/q1H4ee.jpg',
'https://img.nickpic.host/q1HwrX.jpg',
'https://img.nickpic.host/q1H7Nf.jpg',
'https://img.nickpic.host/q1HKo6.jpg',
'https://img.nickpic.host/q1HzQb.jpg',
'https://img.nickpic.host/q1HYAp.jpg',
'https://img.nickpic.host/q1HHzY.jpg',
'https://img.nickpic.host/q1HNZA.jpg',
'https://img.nickpic.host/q1Hf5G.jpg',
'https://img.nickpic.host/q1H0Mz.jpg',
'https://img.nickpic.host/q1H2kc.jpg',
'https://img.nickpic.host/q1HerW.jpg',
'https://img.nickpic.host/q1HkQ1.jpg',
'https://img.nickpic.host/q1HJVj.jpg',
'https://img.nickpic.host/q1HPoJ.jpg',
'https://img.nickpic.host/q1HTAn.jpg',
'https://img.nickpic.host/q1HW7s.jpg',
'https://img.nickpic.host/q1HZZ2.jpg',
'https://img.nickpic.host/q1Hy5Q.jpg',
'https://img.nickpic.host/q1NGRx.jpg',
'https://img.nickpic.host/q1NIkN.jpg',
'https://img.nickpic.host/q1NosO.jpg',
'https://img.nickpic.host/q1NpUm.jpg',
'https://img.nickpic.host/q1NvV8.jpg',
'https://img.nickpic.host/q1NBpq.jpg',
'https://img.nickpic.host/q1NbAd.jpg',
'https://img.nickpic.host/q1Nr7D.jpg',
'https://img.nickpic.host/q1Nsd5.jpg',
'https://img.nickpic.host/q1NF5P.jpg',
'https://img.nickpic.host/q1NaRM.jpg',
'https://img.nickpic.host/q1NjJF.jpg',
'https://img.nickpic.host/q1N5se.jpg',
'https://img.nickpic.host/q1NSUX.jpg',
'https://img.nickpic.host/q1Ncfb.jpg',
'https://img.nickpic.host/q1Nqpf.jpg',
'https://img.nickpic.host/q1NuE6.jpg',
'https://img.nickpic.host/q1NA8p.jpg',
'https://img.nickpic.host/q1NEdY.jpg',
'https://img.nickpic.host/q1NhSA.jpg',
'https://img.nickpic.host/q1N61G.jpg',
'https://img.nickpic.host/q1NCJz.jpg',
'https://img.nickpic.host/q1NU3c.jpg',
'https://img.nickpic.host/q1NXUW.jpg',
'https://img.nickpic.host/q1Nif1.jpg',
'https://img.nickpic.host/q1Ntvj.jpg',
'https://img.nickpic.host/q1NMEJ.jpg',
'https://img.nickpic.host/q1NR8n.jpg',
'https://img.nickpic.host/q1N1ys.jpg',
'https://img.nickpic.host/q1NDS2.jpg',
'https://img.nickpic.host/q1Nw1Q.jpg',
'https://img.nickpic.host/q1NzLx.jpg',
'https://img.nickpic.host/q1N83N.jpg',
'https://img.nickpic.host/q1NKXO.jpg',
'https://img.nickpic.host/q1NNv8.jpg',
'https://img.nickpic.host/q1NY0m.jpg',
'https://img.nickpic.host/q1NVOq.jpg',
'https://img.nickpic.host/q1Nf8d.jpg',
'https://img.nickpic.host/q1N0yD.jpg',
'https://img.nickpic.host/q1N9c5.jpg',
'https://img.nickpic.host/q1Ne1P.jpg',
'https://img.nickpic.host/q1NkLM.jpg',
'https://img.nickpic.host/q1NLFF.jpg',
'https://img.nickpic.host/q1NPXe.jpg',
'https://img.nickpic.host/q1NT0X.jpg',
'https://img.nickpic.host/q1NZxb.jpg',
'https://img.nickpic.host/q1NdOf.jpg',
'https://img.nickpic.host/q1NyK6.jpg',
'https://img.nickpic.host/q1VIGp.jpg',
'https://img.nickpic.host/q1VmcY.jpg',
'https://img.nickpic.host/q1Vo4A.jpg',
'https://img.nickpic.host/q1VpPG.jpg',
'https://img.nickpic.host/q1VxFz.jpg',
'https://img.nickpic.host/q1VBic.jpg',
'https://img.nickpic.host/q1Vb0W.jpg',
'https://img.nickpic.host/q1V3hj.jpg',
'https://img.nickpic.host/q1Vsx1.jpg',
'https://img.nickpic.host/q1VFKJ.jpg',
'https://img.nickpic.host/q1Vlgs.jpg',
'https://img.nickpic.host/q1VjGn.jpg',
'https://img.nickpic.host/q1VSPQ.jpg',
'https://img.nickpic.host/q1V542.jpg',
'https://img.nickpic.host/q1Vgax.jpg',
'https://img.nickpic.host/q1VqiN.jpg',
'https://img.nickpic.host/q1VEBm.jpg',
'https://img.nickpic.host/q1Vu2O.jpg',
'https://img.nickpic.host/q1VOh8.jpg',
'https://img.nickpic.host/q1VhYq.jpg',
'https://img.nickpic.host/q1VCGd.jpg',
'https://img.nickpic.host/q1VQgD.jpg',
'https://img.nickpic.host/q1VUD5.jpg',
'https://img.nickpic.host/q1VXPP.jpg',
'https://img.nickpic.host/q1VnaM.jpg',
'https://img.nickpic.host/q1VtnF.jpg',
'https://img.nickpic.host/q1VM2e.jpg',
'https://img.nickpic.host/q1V46b.jpg',
'https://img.nickpic.host/q1V1BX.jpg',
'https://img.nickpic.host/q1VDYf.jpg',
'https://img.nickpic.host/q1V7qp.jpg',
'https://img.nickpic.host/q1VzI6.jpg',
'https://img.nickpic.host/q1V8DY.jpg',
'https://img.nickpic.host/q1VKTA.jpg',
'https://img.nickpic.host/q1VHjG.jpg',
'https://img.nickpic.host/q1VV9c.jpg',
'https://img.nickpic.host/q1VNnz.jpg',
'https://img.nickpic.host/q1V261.jpg',
'https://img.nickpic.host/q1V0BW.jpg',
'https://img.nickpic.host/q1VkIJ.jpg',
'https://img.nickpic.host/q1V9Hj.jpg',
'https://img.nickpic.host/q1VJqn.jpg',
'https://img.nickpic.host/q1VLws.jpg',
'https://img.nickpic.host/q1VPT2.jpg',
'https://img.nickpic.host/q1VZtx.jpg',
'https://img.nickpic.host/q1VWjQ.jpg',
'https://img.nickpic.host/q1Vd9N.jpg',
'https://img.nickpic.host/q1fGbO.jpg',
'https://img.nickpic.host/q1fICm.jpg',
'https://img.nickpic.host/q1fpmq.jpg',
'https://img.nickpic.host/q1fmH8.jpg',
'https://img.nickpic.host/q1fvqd.jpg',
'https://img.nickpic.host/q1fxwD.jpg',
'https://img.nickpic.host/q1fBW5.jpg',
'https://img.nickpic.host/q1fstM.jpg',
'https://img.nickpic.host/q1frjP.jpg',
'https://img.nickpic.host/q1f3eF.jpg',
'https://img.nickpic.host/q1fabe.jpg',
'https://img.nickpic.host/q1fjCX.jpg',
'https://img.nickpic.host/q1flNb.jpg',
'https://img.nickpic.host/q1fSmf.jpg',
'https://img.nickpic.host/q1fcu6.jpg',
'https://img.nickpic.host/q1fgzp.jpg',
'https://img.nickpic.host/q1fAlA.jpg',
'https://img.nickpic.host/q1fqWY.jpg',
'https://img.nickpic.host/q1fEMG.jpg',
'https://img.nickpic.host/q1fOez.jpg',
'https://img.nickpic.host/q1f6rc.jpg',
'https://img.nickpic.host/q1fCCW.jpg',
'https://img.nickpic.host/q1fQN1.jpg',
'https://img.nickpic.host/q1fXoj.jpg',
'https://img.nickpic.host/q1fiuJ.jpg',
'https://img.nickpic.host/q1fnzn.jpg',
'https://img.nickpic.host/q1ftZs.jpg',
'https://img.nickpic.host/q1f1MQ.jpg',
'https://img.nickpic.host/q1fRl2.jpg',
'https://img.nickpic.host/q1f4kx.jpg',
'https://img.nickpic.host/q1fwrN.jpg',
'https://img.nickpic.host/q1fzQO.jpg']
let ki = uza[Math.floor(Math.random() * uza.length)]
uzaki = await getBuffer(ki)
const chan =['Aquí tienes 💕🦈','¿Linda foto no?','Pedido entregado 🕊','¿Qué tal está?','¿Te gusta?','Tengo muchas más 😽']
const kich = chan[Math.floor(Math.random() * chan.length)]
let buttons = [
                    {buttonId: `uzaki`, buttonText: {displayText: 'Siguiente'}, type: 1}
                ]
                let buttonMessage = {
                    image: (uzaki),
                    caption: (kich),
                    buttons: buttons,
                    headerType: 4
                }
                GojoMdNx.sendMessage(m.chat, buttonMessage)
            }
break

case 'hardcore': {
const hard =['https://images2.imgbox.com/22/e4/8TlGS9AD_o.jpg','https://images2.imgbox.com/2e/c5/Yg75xKVD_o.jpg','https://images2.imgbox.com/f9/dd/0rmJGHSd_o.jpg','https://images2.imgbox.com/cc/97/kPer1x0C_o.jpg','https://images2.imgbox.com/33/11/uToROkZb_o.jpg','https://images2.imgbox.com/c0/2c/W4npduHE_o.jpg','https://images2.imgbox.com/8c/4b/8i0ggI5p_o.jpg','https://images2.imgbox.com/69/50/2kHhYrlK_o.jpg','https://images2.imgbox.com/fe/44/qdJmqtuh_o.jpg','https://images2.imgbox.com/0c/9e/xyMelcl5_o.jpg','https://images2.imgbox.com/a1/5d/0DfrATrO_o.jpg','https://images2.imgbox.com/c3/06/6vZNrhTT_o.jpg','https://images2.imgbox.com/56/cb/gi7kMG3p_o.jpg','https://images2.imgbox.com/64/e5/3l9f6QbX_o.jpg','https://images2.imgbox.com/77/05/IC6VxGd7_o.jpg','https://images2.imgbox.com/63/60/wtU6tikf_o.jpg','https://images2.imgbox.com/38/ec/7WS5v37w_o.jpg','https://images2.imgbox.com/c1/cf/iYC8QYDd_o.jpg','https://images2.imgbox.com/b3/fd/5jq1sGdG_o.jpg','https://images2.imgbox.com/91/47/L6b1I6tQ_o.jpg','https://images2.imgbox.com/ea/59/iUVJI7Ov_o.jpg','https://images2.imgbox.com/59/62/LXQ9nBN0_o.jpg','https://images2.imgbox.com/f1/30/u1wjp3G3_o.jpg','https://images2.imgbox.com/f8/dc/OCeIGLWU_o.jpg','https://images2.imgbox.com/15/17/aMWA5wTz_o.jpg','https://images2.imgbox.com/86/6a/MHeVnCLR_o.jpg','https://images2.imgbox.com/64/ff/PJTnIQFJ_o.jpg','https://images2.imgbox.com/57/4a/wW0dhisN_o.jpg','https://images2.imgbox.com/4f/20/kHD2Cg2O_o.jpg','https://images2.imgbox.com/8d/83/9Ul3avZp_o.jpg','https://images2.imgbox.com/29/e2/1CziWTB6_o.jpg','https://images2.imgbox.com/dd/47/YXI1ybTw_o.jpg','https://images2.imgbox.com/67/ce/XdW9AKqf_o.jpg','https://images2.imgbox.com/f2/66/jFe0L8zS_o.jpg','https://images2.imgbox.com/f3/dc/SXelsvoJ_o.jpg','https://images2.imgbox.com/00/49/FHIpUzCN_o.jpg','https://images2.imgbox.com/f1/ad/GJtUOokC_o.jpg','https://images2.imgbox.com/8b/d4/L29qW9ti_o.jpg','https://images2.imgbox.com/e3/25/MGYDTrc0_o.jpg','https://images2.imgbox.com/b1/0e/9bPFme3A_o.jpg','https://images2.imgbox.com/80/a6/WMP2N6gJ_o.jpg','https://images2.imgbox.com/88/b0/9YZiHxtA_o.jpg','https://images2.imgbox.com/f7/06/4mS9Po2i_o.jpg','https://images2.imgbox.com/af/1c/lYu7Qxtr_o.jpg','https://images2.imgbox.com/bb/49/o5Puq8vG_o.jpg','https://images2.imgbox.com/61/9a/xkV5cXtc_o.jpg','https://images2.imgbox.com/1d/11/wG8rhAKD_o.jpg','https://images2.imgbox.com/d1/7a/A3ciO8sm_o.jpg','https://images2.imgbox.com/e9/f2/HoHwxdiY_o.jpg','https://images2.imgbox.com/e9/e7/ZgCKmZod_o.jpg','https://images2.imgbox.com/8e/a1/VMf9w4QG_o.jpg','https://images2.imgbox.com/f1/c6/8aT3u4Dv_o.jpg','https://images2.imgbox.com/be/79/lWmB7rsk_o.jpg','https://images2.imgbox.com/ca/90/6EkcfYRX_o.jpg','https://images2.imgbox.com/80/8f/vqnETfma_o.jpg','https://images2.imgbox.com/ee/5a/55WBDfF1_o.jpg','https://images2.imgbox.com/ce/79/EF2RhVWo_o.jpg','https://images2.imgbox.com/a3/51/MinQ1lew_o.jpg','https://images2.imgbox.com/9b/ef/qHRMU5p1_o.jpg','https://images2.imgbox.com/be/5b/yVDygb0B_o.pnghttps://images2.imgbox.com/82/7e/LSnstUdE_o.pnghttps://images2.imgbox.com/20/34/qrLs7RFi_o.pnghttps://images2.imgbox.com/a2/67/opmFTmj2_o.pnghttps://images2.imgbox.com/15/62/dJ01vhkP_o.pnghttps://images2.imgbox.com/bd/51/xnup8Jg7_o.pnghttps://images2.imgbox.com/8c/02/VZMKUojO_o.pnghttps://images2.imgbox.com/66/ef/IUsxbWir_o.pnghttps://images2.imgbox.com/d4/59/nAJvzkTk_o.pnghttps://images2.imgbox.com/d6/02/6oYku1mK_o.pnghttps://images2.imgbox.com/20/22/VCversLb_o.pnghttps://images2.imgbox.com/0a/40/uF8wlkP3_o.pnghttps://images2.imgbox.com/86/22/DsCDxaT0_o.pnghttps://images2.imgbox.com/a5/0e/AF7TIUpD_o.pnghttps://images2.imgbox.com/f0/35/ZykjHTRw_o.pnghttps://images2.imgbox.com/63/e7/5mrJGqMA_o.pnghttps://images2.imgbox.com/9f/50/bvLT4bvo_o.pnghttps://images2.imgbox.com/ed/b1/GAGhixjY_o.pnghttps://images2.imgbox.com/18/b3/iRixioS4_o.jpg','https://images2.imgbox.com/40/6e/UJGmIfz6_o.pnghttps://images2.imgbox.com/ee/68/Og8pLAfh_o.pnghttps://images2.imgbox.com/28/69/x2BYd3aN_o.jpg','https://images2.imgbox.com/12/7f/YPJVK2V2_o.pnghttps://images2.imgbox.com/dc/cc/MuZvxcyX_o.jpg','https://images2.imgbox.com/14/8e/KSlK15Cd_o.jpg','https://images2.imgbox.com/b2/23/Mt4ozqNR_o.jpg','https://images2.imgbox.com/fe/d1/I6ucWp2z_o.jpg','https://images2.imgbox.com/60/66/IjLRxW0l_o.jpg','https://images2.imgbox.com/0d/68/OITukUMo_o.jpg','https://images2.imgbox.com/75/68/gg1uKfNv_o.jpg','https://images2.imgbox.com/43/06/tfTjvGa0_o.jpg','https://images2.imgbox.com/52/ea/QNdZaMn4_o.jpg','https://images2.imgbox.com/22/22/jPJmDpSM_o.jpg','https://images2.imgbox.com/08/96/qKNrmErZ_o.jpg','https://images2.imgbox.com/10/8a/KHdNRThM_o.jpg','https://images2.imgbox.com/ab/93/zESKBNRb_o.jpg','https://images2.imgbox.com/81/69/9QQfvbIN_o.jpg','https://images2.imgbox.com/26/ff/ekeJBAMG_o.jpg','https://images2.imgbox.com/3c/23/ZVDSZSZH_o.jpg','https://images2.imgbox.com/29/40/2HFbS4Jg_o.jpg','https://images2.imgbox.com/fb/ef/Ye2QAr4M_o.jpg','https://images2.imgbox.com/b4/f9/AcQmsLdb_o.jpg','https://images2.imgbox.com/d7/4b/lLUMd8GC_o.jpg',
'https://images2.imgbox.com/d7/36/FdAANnHy_o.jpg','https://images2.imgbox.com/06/26/ftq9AgQ3_o.jpg','https://images2.imgbox.com/d2/b6/nGCSVEM2_o.jpg','https://images2.imgbox.com/56/f7/HDPDTyIE_o.jpg','https://images2.imgbox.com/c9/fc/OveuvW3w_o.jpg','https://images2.imgbox.com/0b/36/gnpHKxlL_o.jpg','https://images2.imgbox.com/c1/1a/FTmQlLmI_o.jpg','https://images2.imgbox.com/e9/2d/MO0dvlOs_o.jpg','https://images2.imgbox.com/c8/a0/kE1HWr1J_o.jpg','https://images2.imgbox.com/96/e1/JjzeuMav_o.jpg','https://images2.imgbox.com/03/47/Ofx2EDQ1_o.jpg','https://images2.imgbox.com/05/77/JP8HSJbz_o.jpg','https://images2.imgbox.com/88/74/XJ09uLK7_o.jpg','https://images2.imgbox.com/48/dd/MsDsCY98_o.jpg','https://images2.imgbox.com/0b/20/4eLqg1XN_o.jpg','https://images2.imgbox.com/ba/bd/MpKdPmhR_o.jpg','https://images2.imgbox.com/10/bf/KduY2fuV_o.jpg','https://images2.imgbox.com/c2/84/bWonSasV_o.jpg','https://images2.imgbox.com/06/63/o2rU4oNs_o.jpg','https://images2.imgbox.com/34/2f/emoDyvEi_o.jpg','https://images2.imgbox.com/31/79/Q7LwkiEG_o.jpg','https://images2.imgbox.com/b0/65/tMHswPk3_o.jpg','https://images2.imgbox.com/8d/a8/hrgfrOaA_o.jpg','https://images2.imgbox.com/9f/2e/WUBghzNZ_o.jpg','https://images2.imgbox.com/26/10/wD7L6X96_o.jpg','https://images2.imgbox.com/64/11/RiJOnnjA_o.jpg','https://images2.imgbox.com/e4/75/D1KsDteF_o.jpg','https://images2.imgbox.com/12/77/aXgdENcO_o.jpg','https://images2.imgbox.com/fc/8c/ZX4YTTGX_o.jpg','https://images2.imgbox.com/3c/e3/I3PzkcjJ_o.jpg','https://images2.imgbox.com/2b/79/E7AsjwY6_o.jpg','https://images2.imgbox.com/51/94/3NglMYhv_o.jpg','https://images2.imgbox.com/03/94/BnaWDIdN_o.jpg','https://images2.imgbox.com/63/33/tDlF8jGk_o.jpg','https://images2.imgbox.com/e9/aa/9pRoLXOe_o.jpg','https://images2.imgbox.com/34/94/x6VJ0mXz_o.jpg','https://images2.imgbox.com/b3/b4/ABFqIkDZ_o.jpg','https://images2.imgbox.com/7e/31/wW6FhnlO_o.jpg','https://images2.imgbox.com/36/66/ZMFukcjr_o.jpg','https://images2.imgbox.com/d9/5e/KHBkWiIj_o.jpg','https://images2.imgbox.com/cb/d4/fB1ZQTgw_o.jpg','https://images2.imgbox.com/1f/33/tPdOAB3f_o.jpg','https://images2.imgbox.com/82/bf/1AHbSsK8_o.jpg','https://images2.imgbox.com/b0/3d/G9FqO7OP_o.jpg','https://images2.imgbox.com/e3/57/e3ljQK8e_o.jpg','https://images2.imgbox.com/2a/f9/3Go1SHll_o.jpg','https://images2.imgbox.com/59/f7/MNhQVi4A_o.jpg','https://images2.imgbox.com/a8/95/VAXyliJl_o.jpg','https://images2.imgbox.com/a8/8c/0Uc54iF6_o.jpg','https://images2.imgbox.com/7d/c3/IQo8eVAS_o.jpg','https://images2.imgbox.com/32/6f/mlLT7xfh_o.jpg','https://images2.imgbox.com/09/86/anT3XEGY_o.jpg','https://images2.imgbox.com/b3/4e/aHDLce9g_o.jpg','https://images2.imgbox.com/6c/03/nBDDQBXi_o.jpg','https://images2.imgbox.com/e0/b9/vxPZ1NUJ_o.jpg','https://images2.imgbox.com/b5/06/8lAqMB9p_o.jpg','https://images2.imgbox.com/2b/fe/hMJ1joqK_o.jpg','https://images2.imgbox.com/f8/41/qJmHaSBc_o.jpg','https://images2.imgbox.com/cf/8b/BHdtsAf0_o.jpg','https://images2.imgbox.com/b2/cd/bC6cVQu4_o.jpg','https://images2.imgbox.com/23/f7/dL4YoC7C_o.jpg','https://images2.imgbox.com/4d/94/ExQqzPiy_o.jpg','https://images2.imgbox.com/9c/99/609wFnJh_o.jpg','https://images2.imgbox.com/dc/01/jQLUc0Ym_o.jpg','https://images2.imgbox.com/33/6f/he7cSAUe_o.jpg','https://images2.imgbox.com/d1/a0/bkS0NUY2_o.jpg','https://images2.imgbox.com/f8/23/LfFlEsUd_o.jpg','https://images2.imgbox.com/30/80/ESExoiXH_o.jpg','https://images2.imgbox.com/2f/72/EKa3AO6y_o.jpg','https://images2.imgbox.com/3d/8f/9VT9qtdo_o.jpg','https://images2.imgbox.com/03/92/5zuacszK_o.jpg','https://images2.imgbox.com/59/af/bffd6qUH_o.jpg','https://images2.imgbox.com/9c/69/mmTsrYeo_o.jpg','https://images2.imgbox.com/ac/54/GugseMkO_o.jpg','https://images2.imgbox.com/ed/0a/Pb6EbdVK_o.jpg','https://images2.imgbox.com/df/09/khBQtMHD_o.jpg','https://images2.imgbox.com/a5/23/BsCvdh6y_o.jpg','https://images2.imgbox.com/bf/8a/0pSwAGSy_o.jpg','https://images2.imgbox.com/c8/b7/LZpYsr5p_o.jpg','https://images2.imgbox.com/1e/18/AM9YUvQi_o.jpg','https://images2.imgbox.com/47/47/Pq07Vlan_o.jpg','https://images2.imgbox.com/f1/49/4lrhzUPM_o.jpg','https://images2.imgbox.com/4f/22/tk5gxLrj_o.jpg','https://images2.imgbox.com/fa/c6/QBFOBwrU_o.jpg','https://images2.imgbox.com/29/9d/hHuM56Ay_o.jpg','https://images2.imgbox.com/24/78/VGS2OV3s_o.jpg','https://images2.imgbox.com/98/23/6t7d4HMn_o.jpg','https://images2.imgbox.com/cc/fe/IpbdbfuH_o.jpg','https://images2.imgbox.com/fb/3e/vMWlz3Eh_o.jpg','https://images2.imgbox.com/10/6c/zWYFK3k1_o.jpg','https://images2.imgbox.com/f1/54/nvdhttWK_o.jpg','https://images2.imgbox.com/d3/c8/dmwEPMj1_o.jpg','https://images2.imgbox.com/d1/f2/o2U5yKtH_o.jpg','https://images2.imgbox.com/3e/38/jii3aDD7_o.jpg','https://images2.imgbox.com/84/86/zmqLDoHR_o.jpg','https://images2.imgbox.com/b4/3d/1eTObRPx_o.jpg','https://images2.imgbox.com/2c/a4/vThUj4dW_o.jpg','https://images2.imgbox.com/bb/c3/2aiSTbbK_o.jpg','https://images2.imgbox.com/65/b4/bEXOkScQ_o.jpg','https://images2.imgbox.com/64/99/UTaUWF55_o.jpg','https://images2.imgbox.com/5c/29/hP6SGtxO_o.jpg','https://images2.imgbox.com/34/de/REn9CAhz_o.jpg',
'https://images2.imgbox.com/eb/d8/rrKZ01gJ_o.jpg','https://images2.imgbox.com/56/5f/Zv7Emzhk_o.jpg','https://images2.imgbox.com/71/34/kAovKtvq_o.jpg','https://images2.imgbox.com/a0/86/4gKrbSVx_o.jpg','https://images2.imgbox.com/f9/ef/muh5avwf_o.jpg','https://images2.imgbox.com/ba/66/gKRNDD6g_o.jpg','https://images2.imgbox.com/d1/91/v3mVyFKR_o.jpg','https://images2.imgbox.com/50/f7/5esmWPpX_o.jpg','https://images2.imgbox.com/8b/b6/6xJhfD62_o.jpg','https://images2.imgbox.com/28/dc/60m0vdPU_o.jpg','https://images2.imgbox.com/3b/af/H9C5cdA0_o.jpg','https://images2.imgbox.com/cd/da/k9HybKDN_o.jpg','https://images2.imgbox.com/e6/1c/M51b3J4q_o.jpg','https://images2.imgbox.com/a0/f0/lYaFaHxH_o.jpg','https://images2.imgbox.com/42/3e/Rh5BtwA3_o.jpg','https://images2.imgbox.com/32/94/Z7riOhsv_o.jpg','https://images2.imgbox.com/ac/63/adfzPkI6_o.jpg','https://images2.imgbox.com/08/12/nd3vwdZM_o.jpg','https://images2.imgbox.com/28/5d/7tqaHYat_o.jpg','https://images2.imgbox.com/18/de/vFBiVvCF_o.jpg','https://images2.imgbox.com/92/58/nRIJQBos_o.jpg','https://images2.imgbox.com/07/f3/QCkgY4k1_o.jpg','https://images2.imgbox.com/63/13/n2icUoyE_o.jpg','https://images2.imgbox.com/df/31/NhkB9gFz_o.jpg','https://images2.imgbox.com/dd/63/VOokPVLq_o.jpg','https://images2.imgbox.com/c0/fa/2fnAMHv5_o.jpg','https://images2.imgbox.com/9f/d0/uW0o1GY1_o.jpg','https://images2.imgbox.com/4d/a7/RjT3Hnfv_o.jpg','https://images2.imgbox.com/09/d4/oTl21bL9_o.jpg','https://images2.imgbox.com/4d/da/YzH3lX8N_o.jpg','https://images2.imgbox.com/4d/75/pRevG1mq_o.jpg','https://images2.imgbox.com/ed/a6/pB58Qfv0_o.jpg','https://images2.imgbox.com/ff/ec/N7hZtvOS_o.jpg','https://images2.imgbox.com/79/48/kLmFcVsl_o.jpg','https://images2.imgbox.com/05/52/bcOzBg9h_o.jpg','https://images2.imgbox.com/3b/16/vyK3tgel_o.jpg','https://images2.imgbox.com/92/89/gkrlbEHy_o.jpg','https://images2.imgbox.com/e7/58/4m4o0bAR_o.jpg','https://images2.imgbox.com/60/61/C7gaznFN_o.jpg','https://images2.imgbox.com/3a/41/RPV8t7iz_o.jpg','https://images2.imgbox.com/09/39/4CdtwK6t_o.jpg','https://images2.imgbox.com/ce/f2/yk3IosKS_o.jpg','https://images2.imgbox.com/7c/15/kNlXdnZD_o.jpg','https://images2.imgbox.com/20/0d/rmnuOpuz_o.jpg','https://images2.imgbox.com/b7/07/ujrVmfaH_o.jpg','https://images2.imgbox.com/e5/f8/B1LS6L9p_o.jpg','https://images2.imgbox.com/38/2d/VWVFR9vJ_o.jpg','https://images2.imgbox.com/a3/99/drz8lHMk_o.jpg','https://images2.imgbox.com/95/00/spxjq1NT_o.jpg','https://images2.imgbox.com/84/c6/XdwZ3ROz_o.jpg','https://images2.imgbox.com/5c/49/b38qhvoe_o.jpg','https://images2.imgbox.com/33/b2/xmm6AVRX_o.jpg','https://images2.imgbox.com/1e/d1/YjUacM3k_o.jpg','https://images2.imgbox.com/38/aa/VmCXB5qY_o.jpg','https://images2.imgbox.com/9a/a8/3Mcm1KN5_o.jpg','https://images2.imgbox.com/87/84/MKmjQwUn_o.jpg','https://images2.imgbox.com/a1/94/D90MWCR2_o.jpg','https://images2.imgbox.com/6e/32/dbcLy0Rn_o.jpg','https://images2.imgbox.com/b2/28/tD4nWOka_o.jpg','https://images2.imgbox.com/71/bd/qWqJXRFo_o.jpg','https://images2.imgbox.com/a8/92/oocysRPQ_o.jpg','https://images2.imgbox.com/54/a6/zyKJDixs_o.jpg','https://images2.imgbox.com/d3/8d/0wdQ8LQa_o.jpg','https://images2.imgbox.com/b6/aa/ewO2BOR3_o.jpg','https://images2.imgbox.com/aa/a5/NsgmCJlV_o.jpg','https://images2.imgbox.com/75/46/GqHaiAlc_o.jpg','https://images2.imgbox.com/aa/97/XsSbvIZu_o.jpg','https://images2.imgbox.com/dd/ec/w4pmiuVy_o.jpg','https://images2.imgbox.com/a0/d9/CSeIEiLR_o.jpg','https://images2.imgbox.com/19/dc/xI8geAHK_o.jpg','https://images2.imgbox.com/76/ee/Q6mWx3Ty_o.jpg','https://images2.imgbox.com/70/49/7BhwMgZb_o.jpg','https://images2.imgbox.com/15/31/4mmfL6gx_o.jpg','https://images2.imgbox.com/a2/9f/igqhzOku_o.jpg','https://images2.imgbox.com/cb/4d/XW2DgOia_o.jpg','https://images2.imgbox.com/cb/63/eYV6mRsK_o.jpg','https://images2.imgbox.com/30/2e/a1Vq5MF9_o.jpg','https://images2.imgbox.com/56/12/isLsjVNC_o.jpg','https://images2.imgbox.com/b1/6b/RSXieWHm_o.jpg','https://images2.imgbox.com/0e/82/c3prD2FW_o.jpg','https://images2.imgbox.com/b8/10/7nkz5S4L_o.jpg','https://images2.imgbox.com/66/47/T7JSaKmV_o.jpg','https://images2.imgbox.com/d4/9d/SBQd9xCs_o.jpg','https://images2.imgbox.com/a0/ef/omUBBxYR_o.jpg','https://images2.imgbox.com/83/77/NXCaSnef_o.jpg','https://images2.imgbox.com/19/e4/KxcwA8YR_o.jpg','https://images2.imgbox.com/f9/05/D9X8jaGz_o.jpg','https://images2.imgbox.com/05/49/Umm6dXum_o.jpg','https://images2.imgbox.com/44/5c/bGxN7ETv_o.jpg','https://images2.imgbox.com/3d/02/8MiEwAXy_o.jpg','https://images2.imgbox.com/1f/ae/4FcJsUPb_o.jpg','https://images2.imgbox.com/3c/34/encnsMXz_o.jpg','https://images2.imgbox.com/0b/75/bxzVBMua_o.jpg','https://images2.imgbox.com/9a/63/Vel5s25o_o.jpg','https://images2.imgbox.com/a9/16/ilOZsNLo_o.jpg','https://images2.imgbox.com/1a/4a/pKZXgXX3_o.jpg','https://images2.imgbox.com/f0/12/uovZVepp_o.jpg','https://images2.imgbox.com/57/48/kOcOiVyU_o.jpg','https://images2.imgbox.com/62/20/I9Pzt2vG_o.jpg','https://images2.imgbox.com/95/85/lNnFlcok_o.jpg','https://images2.imgbox.com/fb/e0/DcRjMJ1B_o.jpg','https://images2.imgbox.com/d1/6b/vnLDlxys_o.jpg',
'https://images2.imgbox.com/38/8f/C46UtK0C_o.jpg','https://images2.imgbox.com/05/b5/uR6aB3lM_o.jpg','https://images2.imgbox.com/64/fd/qjNxwo3O_o.jpg','https://images2.imgbox.com/44/09/hB65Hrn7_o.jpg','https://images2.imgbox.com/cb/2a/D7QXqV3f_o.jpg','https://images2.imgbox.com/95/86/MniVgixC_o.jpg','https://images2.imgbox.com/c2/03/RCv2s9VO_o.jpg','https://images2.imgbox.com/19/06/H0aS1OVV_o.jpg','https://images2.imgbox.com/89/b7/c6eczGXW_o.jpg','https://thumbs2.imgbox.com/13/80/mpeDF7Pb_t.jpg','https://thumbs2.imgbox.com/50/64/6wCWzOXT_t.jpg','https://thumbs2.imgbox.com/08/42/7b4sBSiu_t.jpg','https://thumbs2.imgbox.com/72/81/VCIBRQw2_t.jpg','https://thumbs2.imgbox.com/32/d4/oSHGulZn_t.jpg','https://thumbs2.imgbox.com/37/7e/qV6sP9v7_t.jpg','https://thumbs2.imgbox.com/17/dd/Hm76zIZO_t.jpg','https://thumbs2.imgbox.com/40/3c/sSdIjuhd_t.jpg','https://thumbs2.imgbox.com/e8/09/h8CJOK1V_t.jpg','https://thumbs2.imgbox.com/b4/f4/aR4VeCFj_t.jpg','https://thumbs2.imgbox.com/2a/7d/VywLBESN_t.jpg','https://thumbs2.imgbox.com/24/e5/uFwTUcN0_t.jpg','https://thumbs2.imgbox.com/87/0a/Lkie8xD5_t.jpg','https://thumbs2.imgbox.com/c8/29/e7zAI8Gb_t.jpg','https://thumbs2.imgbox.com/f7/8c/6TzORnLR_t.jpg','https://thumbs2.imgbox.com/59/aa/i5miJPWC_t.jpg','https://thumbs2.imgbox.com/46/81/1RkTtBmD_t.jpg','https://thumbs2.imgbox.com/47/ed/fRInr3Et_t.jpg','https://thumbs2.imgbox.com/52/93/QC6mPago_t.jpg','https://thumbs2.imgbox.com/a6/5a/AW8UqRaZ_t.jpg','https://thumbs2.imgbox.com/f4/f0/yXW4Sis9_t.jpg','https://thumbs2.imgbox.com/d7/f8/RNXNnLSF_t.jpg','https://thumbs2.imgbox.com/31/d3/eMBb5rVu_t.jpg','https://thumbs2.imgbox.com/e3/9d/FLbfOtLn_t.jpg','https://thumbs2.imgbox.com/35/93/FbXVr0Hi_t.jpg','https://thumbs2.imgbox.com/8f/9e/Dywr8UDj_t.jpg','https://thumbs2.imgbox.com/76/bd/78rES4KK_t.jpg','https://thumbs2.imgbox.com/24/f8/y5IXhzV0_t.jpg','https://thumbs2.imgbox.com/c7/59/GadDM10p_t.jpg','https://thumbs2.imgbox.com/25/64/Bk88YMHd_t.jpg','https://thumbs2.imgbox.com/be/fa/NiFckiql_t.jpg','https://thumbs2.imgbox.com/96/a9/D9urxTRF_t.jpg','https://thumbs2.imgbox.com/65/e1/eOH7tbFL_t.jpg','https://thumbs2.imgbox.com/c4/34/S8ahMqh6_t.jpg','https://thumbs2.imgbox.com/be/c3/bvclKuE5_t.jpg','https://thumbs2.imgbox.com/46/61/AwzvKZ0q_t.jpg','https://thumbs2.imgbox.com/08/67/mxi0jkHh_t.jpg','https://thumbs2.imgbox.com/ba/d1/tvnscMkF_t.jpg','https://thumbs2.imgbox.com/e4/68/b7Jrav3j_t.jpg','https://thumbs2.imgbox.com/cc/55/BLES4ujw_t.jpg','https://thumbs2.imgbox.com/79/9d/ESkaLTHg_t.jpg','https://thumbs2.imgbox.com/d8/35/8iiXIdHf_t.jpg','https://thumbs2.imgbox.com/56/20/OigKIPL3_t.jpg','https://thumbs2.imgbox.com/47/ec/Y5VMK7K4_t.jpg','https://thumbs2.imgbox.com/12/75/dcmoQIu6_t.jpg','https://thumbs2.imgbox.com/f8/ee/c9S0POM9_t.jpg','https://thumbs2.imgbox.com/ab/b6/XyUO10D5_t.jpg','https://thumbs2.imgbox.com/29/2c/SeO9xXHD_t.jpg','https://thumbs2.imgbox.com/c8/e9/wmTO2cJL_t.jpg','https://thumbs2.imgbox.com/cd/66/qWFCx7iF_t.jpg','https://thumbs2.imgbox.com/1d/58/cAx4y8fD_t.jpg','https://thumbs2.imgbox.com/12/ec/fSx7xmeB_t.jpg','https://thumbs2.imgbox.com/14/7f/0Q6msydQ_t.jpg','https://thumbs2.imgbox.com/eb/a3/s6VKAGFD_t.jpg','https://thumbs2.imgbox.com/b2/fe/3QDuWs38_t.jpg','https://thumbs2.imgbox.com/55/ee/vz0qC5qv_t.jpg','https://thumbs2.imgbox.com/ac/5f/NbmqUlA1_t.jpg','https://thumbs2.imgbox.com/0c/72/g7TSs2pF_t.jpg','https://thumbs2.imgbox.com/fe/39/ZsQFx1HR_t.jpg','https://thumbs2.imgbox.com/ec/2a/cCFKYOdY_t.jpg','https://thumbs2.imgbox.com/cf/4f/ge2DFFbX_t.jpg','https://thumbs2.imgbox.com/3b/88/0uWqkqLM_t.jpg','https://thumbs2.imgbox.com/8d/31/CZJHwJbZ_t.jpg','https://thumbs2.imgbox.com/ff/17/1rBO6iIo_t.jpg','https://thumbs2.imgbox.com/36/ac/ZrgWmxvM_t.jpg','https://thumbs2.imgbox.com/2c/70/OuzkDXF7_t.jpg','https://thumbs2.imgbox.com/8d/ad/1of1yYLF_t.jpg','https://thumbs2.imgbox.com/b6/e7/Y8y0GP49_t.jpg','https://thumbs2.imgbox.com/d4/5d/opKk2GVU_t.jpg','https://thumbs2.imgbox.com/d0/0d/GFSa1mj6_t.jpg','https://thumbs2.imgbox.com/df/cd/A8SG2hok_t.jpg','https://thumbs2.imgbox.com/c5/9e/78t532Sb_t.jpg','https://thumbs2.imgbox.com/20/28/8DRGuqsk_t.jpg','https://thumbs2.imgbox.com/72/12/PxPHp4P7_t.jpg','https://thumbs2.imgbox.com/bf/90/8Hyuw9VX_t.jpg','https://thumbs2.imgbox.com/22/ff/w1a7TubF_t.jpg','https://thumbs2.imgbox.com/01/a3/VPLAw2D4_t.jpg','https://thumbs2.imgbox.com/d7/03/ZrP3zL8i_t.jpg','https://thumbs2.imgbox.com/a2/b1/uSx3ipZF_t.jpg','https://thumbs2.imgbox.com/69/5b/ZQRGm06y_t.jpg','https://thumbs2.imgbox.com/cf/d5/uwvuymSr_t.jpg','https://thumbs2.imgbox.com/9f/5f/QSJfeMmK_t.jpg','https://thumbs2.imgbox.com/df/52/WoFDs9Sf_t.jpg','https://thumbs2.imgbox.com/c4/8a/OGsZQ33q_t.jpg','https://thumbs2.imgbox.com/ba/2b/eslvXH8S_t.jpg','https://thumbs2.imgbox.com/ae/52/uEyogZja_t.jpg','https://thumbs2.imgbox.com/4f/a5/nRU3uyxi_t.jpg','https://thumbs2.imgbox.com/29/ca/pZ1AXkyi_t.jpg','https://thumbs2.imgbox.com/8c/e3/nsso4p4I_t.jpg','https://thumbs2.imgbox.com/ad/cb/Gder3yUa_t.jpg','https://thumbs2.imgbox.com/a4/13/agxecGF9_t.jpg','https://thumbs2.imgbox.com/b7/de/i5Wgq6xg_t.jpg','https://thumbs2.imgbox.com/e0/1e/VRWtVTx0_t.jpg',
'https://thumbs2.imgbox.com/36/c1/TP2yIoQ4_t.jpg','https://thumbs2.imgbox.com/67/54/ZJbSYagO_t.jpg','https://thumbs2.imgbox.com/d8/93/tUvxKK5n_t.jpg','https://thumbs2.imgbox.com/4e/0c/K1ERBLEZ_t.jpg','https://thumbs2.imgbox.com/e5/90/ooGrrXU1_t.jpg','https://thumbs2.imgbox.com/46/93/BcwfsMHG_t.jpg','https://thumbs2.imgbox.com/1b/8d/b8xTvlzp_t.jpg','https://thumbs2.imgbox.com/03/75/FfFzIKHY_t.jpg','https://thumbs2.imgbox.com/ca/17/9dRdqbps_t.jpg','https://thumbs2.imgbox.com/51/af/74RadXOp_t.jpg','https://thumbs2.imgbox.com/31/10/m2p4MP5I_t.jpg','https://thumbs2.imgbox.com/46/93/T3qJbY97_t.jpg','https://thumbs2.imgbox.com/63/34/rA8gixk7_t.jpg','https://thumbs2.imgbox.com/32/b2/OxhtqgkG_t.jpg','https://thumbs2.imgbox.com/a4/8e/1vzq7RaJ_t.jpg','https://thumbs2.imgbox.com/ac/9f/yLOyi4wd_t.jpg','https://thumbs2.imgbox.com/8f/bd/3ZMV6bDW_t.jpg','https://thumbs2.imgbox.com/81/e9/uLaAGAjJ_t.jpg','https://thumbs2.imgbox.com/3a/2f/XE2y9rZg_t.jpg','https://thumbs2.imgbox.com/d6/0d/XBj7tbzV_t.jpg','https://thumbs2.imgbox.com/93/f3/3d8c3yyU_t.jpg','https://thumbs2.imgbox.com/f8/b3/NAOBoxOc_t.jpg','https://thumbs2.imgbox.com/3e/55/qNsjgMvf_t.jpg','https://thumbs2.imgbox.com/a6/c1/ZafSP1oj_t.jpg','https://thumbs2.imgbox.com/e7/2c/eLkzsS5k_t.jpg','https://thumbs2.imgbox.com/45/52/kjaiHwjq_t.jpg','https://thumbs2.imgbox.com/fb/6c/r7CRgML7_t.jpg','https://thumbs2.imgbox.com/35/65/bpaUWSjt_t.jpg','https://thumbs2.imgbox.com/62/71/M67glRow_t.jpg','https://thumbs2.imgbox.com/8c/74/VcwkyH8O_t.jpg','https://thumbs2.imgbox.com/af/42/qEQ9LDli_t.jpg','https://thumbs2.imgbox.com/85/c8/FOPp0Lml_t.jpg','https://thumbs2.imgbox.com/59/bc/KTp1Ew8R_t.jpg','https://thumbs2.imgbox.com/a0/1c/KSE3hRe2_t.jpg','https://thumbs2.imgbox.com/e1/f4/v9pfTYKi_t.jpg','https://thumbs2.imgbox.com/41/c9/O66na7bW_t.jpg','https://thumbs2.imgbox.com/e8/7a/wWZ8Ie2e_t.jpg','https://thumbs2.imgbox.com/94/dd/cfSGWB8M_t.jpg','https://thumbs2.imgbox.com/d6/7f/pvCZv2bR_t.jpg','https://thumbs2.imgbox.com/91/29/wOCVGa4q_t.jpg','https://thumbs2.imgbox.com/0d/a1/SKh6NLse_t.jpg','https://thumbs2.imgbox.com/00/28/jKm7CPRf_t.jpg','https://thumbs2.imgbox.com/46/b1/4sTc4fbo_t.jpg','https://thumbs2.imgbox.com/9c/27/aOmeVMKm_t.jpg','https://thumbs2.imgbox.com/69/19/iRBWhJHk_t.jpg','https://thumbs2.imgbox.com/66/fd/nQrdhmsu_t.jpg','https://thumbs2.imgbox.com/76/74/AlVMCtjD_t.jpg','https://thumbs2.imgbox.com/a4/97/OVuQ6a3a_t.jpg','https://thumbs2.imgbox.com/3f/24/8PCCmLu1_t.jpg','https://thumbs2.imgbox.com/31/f3/kg1LhRNX_t.jpg','https://thumbs2.imgbox.com/82/90/DGlfXAiB_t.jpg','https://thumbs2.imgbox.com/14/44/cJyknWkV_t.jpg','https://thumbs2.imgbox.com/71/b0/e0urIOn9_t.jpg','https://thumbs2.imgbox.com/67/7e/VCHdYbwe_t.jpg','https://thumbs2.imgbox.com/0b/92/oaG9IVz2_t.jpg','https://thumbs2.imgbox.com/7f/33/ACSsR8UD_t.jpg','https://thumbs2.imgbox.com/91/55/YTK5JnZb_t.jpg','https://thumbs2.imgbox.com/e2/da/qyPOY5d4_t.jpg','https://thumbs2.imgbox.com/e0/31/nFZGZJXN_t.jpg','https://thumbs2.imgbox.com/a5/38/B63qd5P8_t.jpg','https://thumbs2.imgbox.com/b0/3c/liHedCd9_t.jpg','https://thumbs2.imgbox.com/ab/24/3XS0BeUf_t.jpg','https://thumbs2.imgbox.com/25/f1/JUxTfz7p_t.jpg','https://thumbs2.imgbox.com/69/2f/eFH95Xzf_t.jpg','https://thumbs2.imgbox.com/b3/74/uIuTGylr_t.jpg','https://thumbs2.imgbox.com/a0/e3/m23zV0Kr_t.jpg','https://thumbs2.imgbox.com/3a/a8/YuyM5yNr_t.jpg','https://thumbs2.imgbox.com/81/a1/RXGxmCgY_t.jpg','https://thumbs2.imgbox.com/c0/37/HIfZUrhh_t.jpg','https://thumbs2.imgbox.com/09/1b/QKbw4IBu_t.jpg','https://thumbs2.imgbox.com/06/37/437ZqjFP_t.jpg','https://thumbs2.imgbox.com/6b/72/nQGKIgyh_t.jpg','https://thumbs2.imgbox.com/c5/cd/TM2AleyH_t.jpg','https://thumbs2.imgbox.com/90/00/BBlthdmL_t.jpg','https://thumbs2.imgbox.com/b7/2c/vKBg08sQ_t.jpg','https://thumbs2.imgbox.com/57/a1/mSmxEC89_t.jpg','https://thumbs2.imgbox.com/cf/63/oieTQsSe_t.jpg','https://thumbs2.imgbox.com/61/a7/hfw7Fzwf_t.jpg','https://images2.imgbox.com/d2/24/MGXJln4f_o.jpg','https://images2.imgbox.com/48/14/ETXkzb0z_o.jpg','https://images2.imgbox.com/02/a0/CTtAyv3z_o.jpg','https://images2.imgbox.com/23/17/xi6GP4gg_o.jpg','https://images2.imgbox.com/0c/e5/D3XzbcmD_o.jpg','https://images2.imgbox.com/90/44/YVEYI8CJ_o.jpg','https://images2.imgbox.com/f9/d5/Jrlqb02T_o.jpg','https://images2.imgbox.com/41/c5/wP1zY9zO_o.jpg','https://images2.imgbox.com/e2/d9/2pbjA6uj_o.jpg','https://images2.imgbox.com/a3/15/UJCZn8JO_o.jpg','https://images2.imgbox.com/ad/9c/0wR11TCz_o.jpg','https://images2.imgbox.com/60/32/fRgeLi6j_o.jpg','https://images2.imgbox.com/68/93/7FgtujJq_o.jpg','https://images2.imgbox.com/b5/1a/yfA7r3fj_o.jpg','https://images2.imgbox.com/46/da/pgopgwoW_o.jpg','https://images2.imgbox.com/9b/31/OHDcowS8_o.jpg','https://images2.imgbox.com/6b/45/a93Rjm00_o.jpg','https://images2.imgbox.com/83/e4/Fe0A8g02_o.jpg','https://images2.imgbox.com/64/6c/4Bm4mEem_o.jpg','https://images2.imgbox.com/18/d1/03oFMsUR_o.jpg','https://images2.imgbox.com/5c/c3/WI83hE7L_o.jpg','https://images2.imgbox.com/3d/c7/2t27PLpL_o.jpg','https://images2.imgbox.com/5e/f4/ZrNOXklh_o.jpg','https://images2.imgbox.com/05/a4/HxWKO9YH_o.jpg',
'https://images2.imgbox.com/9a/c5/iH3iCxj7_o.jpg','https://images2.imgbox.com/6a/54/kmHMhGXL_o.jpg','https://images2.imgbox.com/8a/fc/VeL5GbRe_o.jpg','https://images2.imgbox.com/d8/2a/f8JIpe7A_o.jpg','https://images2.imgbox.com/56/77/qENlaFVy_o.jpg','https://images2.imgbox.com/c8/bb/i3aEsYHd_o.jpg']
let coreh = hard[Math.floor(Math.random() * hard.length)]
hardcore = await getBuffer(coreh)
const hkre =['Aquí tienes 💕🦈','¿Linda foto no?','Pedido entregado 🕊','¿Qué tal está?','¿Te gusta?','Tengo muchas más 😽']
const hark = hkre[Math.floor(Math.random() * hkre.length)]
let buttons = [
                    {buttonId: `hardcore`, buttonText: {displayText: 'Siguiente'}, type: 1}
                ]
                let buttonMessage = {
                    image: (hardcore),
                    caption: (hark),
                    buttons: buttons,
                    headerType: 4
                }
                GojoMdNx.sendMessage(m.chat, buttonMessage)
            }
break

case 'tatsumaki': {
const tatsu =['https://img.nickpic.host/qLC16Q.jpg',
'https://img.nickpic.host/qLC4Hx.jpg',
'https://img.nickpic.host/qLCwIN.jpg',
'https://img.nickpic.host/qLCzqO.jpg',
'https://img.nickpic.host/qLC7wm.jpg',
'https://img.nickpic.host/qLC8T8.jpg',
'https://img.nickpic.host/qLCYjq.jpg',
'https://img.nickpic.host/qLCHnd.jpg',
'https://img.nickpic.host/qLCN9D.jpg',
'https://img.nickpic.host/qLCfb5.jpg',
'https://img.nickpic.host/qLC06P.jpg',
'https://img.nickpic.host/qLC2HM.jpg',
'https://img.nickpic.host/qLCemF.jpg',
'https://img.nickpic.host/qLCkqe.jpg',
'https://img.nickpic.host/qLCJwX.jpg',
'https://img.nickpic.host/qLCLWb.jpg',
'https://img.nickpic.host/qLCTjf.jpg',
'https://img.nickpic.host/qLCWt6.jpg',
'https://img.nickpic.host/qLCZep.jpg',
'https://img.nickpic.host/qLCybY.jpg',
'https://img.nickpic.host/qLQGCA.jpg',
'https://img.nickpic.host/qLQING.jpg',
'https://img.nickpic.host/qLQomz.jpg',
'https://img.nickpic.host/qLQpuc.jpg',
'https://img.nickpic.host/qLQvwW.jpg',
'https://img.nickpic.host/qLQxW1.jpg',
'https://img.nickpic.host/qLQblj.jpg',
'https://img.nickpic.host/qLQrtJ.jpg',
'https://img.nickpic.host/qLQsen.jpg',
'https://img.nickpic.host/qLQFrs.jpg',
'https://img.nickpic.host/qLQaC2.jpg',
'https://img.nickpic.host/qLQjNQ.jpg',
'https://img.nickpic.host/qLQ5ox.jpg',
'https://img.nickpic.host/qLQSuN.jpg',
'https://img.nickpic.host/qLQczO.jpg',
'https://img.nickpic.host/qLQgZm.jpg',
'https://img.nickpic.host/qLQul8.jpg',
'https://img.nickpic.host/qLQAMq.jpg',
'https://img.nickpic.host/qLQEed.jpg',
'https://img.nickpic.host/qLQhrD.jpg',
'https://img.nickpic.host/qLQ6Q5.jpg',
'https://img.nickpic.host/qLQCNP.jpg',
'https://img.nickpic.host/qLQUoM.jpg',
'https://img.nickpic.host/qLQXAF.jpg',
'https://img.nickpic.host/qLQize.jpg',
'https://img.nickpic.host/qLQnZX.jpg',
'https://img.nickpic.host/qLQM5b.jpg',
'https://img.nickpic.host/qLQRMf.jpg',
'https://img.nickpic.host/qLQ1k6.jpg',
'https://img.nickpic.host/qLQDsp.jpg',
'https://img.nickpic.host/qLQwQY.jpg',
'https://img.nickpic.host/qLQzVA.jpg',
'https://img.nickpic.host/qLQ8pG.jpg',
'https://img.nickpic.host/qLQKAz.jpg',
'https://img.nickpic.host/qLQY7c.jpg',
'https://img.nickpic.host/qLQHZW.jpg',
'https://img.nickpic.host/qLQV51.jpg',
'https://img.nickpic.host/qLQfRj.jpg',
'https://img.nickpic.host/qLQ0kJ.jpg',
'https://img.nickpic.host/qLQ9sn.jpg',
'https://img.nickpic.host/qLQeUs.jpg',
'https://img.nickpic.host/qLQkV2.jpg',
'https://img.nickpic.host/qLQLpQ.jpg',
'https://img.nickpic.host/qLQPEx.jpg',
'https://img.nickpic.host/qLQT7N.jpg',
'https://img.nickpic.host/qLQWdO.jpg',
'https://img.nickpic.host/qLQdSm.jpg',
'https://img.nickpic.host/qLQyR8.jpg',
'https://img.nickpic.host/qLUGJq.jpg',
'https://img.nickpic.host/qLUmsd.jpg',
'https://img.nickpic.host/qLUoUD.jpg',
'https://img.nickpic.host/qLUpf5.jpg',
'https://img.nickpic.host/qLUxpP.jpg',
'https://img.nickpic.host/qLUBEM.jpg',
'https://img.nickpic.host/qLUb8F.jpg',
'https://img.nickpic.host/qLUrde.jpg',
'https://img.nickpic.host/qLU3SX.jpg',
'https://img.nickpic.host/qLUF1b.jpg',
'https://img.nickpic.host/qLUaJf.jpg',
'https://img.nickpic.host/qLUl36.jpg',
'https://img.nickpic.host/qLU5Xp.jpg',
'https://img.nickpic.host/qLUSfY.jpg',
'https://img.nickpic.host/qLUgvA.jpg',
'https://img.nickpic.host/qLUqOG.jpg',
'https://img.nickpic.host/qLUu8z.jpg',
'https://img.nickpic.host/qLUAyc.jpg',
'https://img.nickpic.host/qLUOSW.jpg',
'https://img.nickpic.host/qLUh11.jpg',
'https://img.nickpic.host/qLU6Lj.jpg',
'https://img.nickpic.host/qLUQ3J.jpg',
'https://img.nickpic.host/qLUUXn.jpg',
'https://img.nickpic.host/qLUX0s.jpg',
'https://img.nickpic.host/qLUnv2.jpg',
'https://img.nickpic.host/qLUtOQ.jpg',
'https://img.nickpic.host/qLUMKx.jpg',
'https://img.nickpic.host/qLURyN.jpg',
'https://img.nickpic.host/qLU4cO.jpg',
'https://img.nickpic.host/qLUD4m.jpg',
'https://img.nickpic.host/qLUwL8.jpg',
'https://img.nickpic.host/qLU7Fq.jpg',
'https://img.nickpic.host/qLU8Xd.jpg',
'https://img.nickpic.host/qLUK0D.jpg',
'https://img.nickpic.host/qLUHx5.jpg',
'https://img.nickpic.host/qLUNOP.jpg',
'https://img.nickpic.host/qLUVKM.jpg',
'https://img.nickpic.host/qLU0GF.jpg',
'https://img.nickpic.host/qLU2ce.jpg',
'https://img.nickpic.host/qLU94X.jpg',
'https://img.nickpic.host/qLUePb.jpg',
'https://img.nickpic.host/qLUJFf.jpg',
'https://img.nickpic.host/qLULi6.jpg',
'https://img.nickpic.host/qLUP2p.jpg',
'https://img.nickpic.host/qLUWxY.jpg',
'https://img.nickpic.host/qLUZhA.jpg',
'https://img.nickpic.host/qLUdYG.jpg',
'https://img.nickpic.host/qLXGGz.jpg',
'https://img.nickpic.host/qLXIgc.jpg',
'https://img.nickpic.host/qLXm4W.jpg',
'https://img.nickpic.host/qLXoP1.jpg',
'https://img.nickpic.host/qLXvaj.jpg',
'https://img.nickpic.host/qLXxiJ.jpg',
'https://img.nickpic.host/qLXB2n.jpg',
'https://img.nickpic.host/qLXrBs.jpg',
'https://img.nickpic.host/qLXsh2.jpg',
'https://img.nickpic.host/qLX3YQ.jpg',
'https://img.nickpic.host/qLXaIx.jpg',
'https://img.nickpic.host/qLXjgN.jpg',
'https://img.nickpic.host/qLXlDO.jpg',
'https://img.nickpic.host/qLX5Tm.jpg',
'https://img.nickpic.host/qLXca8.jpg',
'https://img.nickpic.host/qLXgnq.jpg',
'https://img.nickpic.host/qLXq2d.jpg',
'https://img.nickpic.host/qLXABD.jpg',
'https://img.nickpic.host/qLXE65.jpg',
'https://img.nickpic.host/qLXOYP.jpg',
'https://img.nickpic.host/qLX6IM.jpg',
'https://img.nickpic.host/qLXCqF.jpg',
'https://img.nickpic.host/qLXQDe.jpg',
'https://img.nickpic.host/qLXUTX.jpg',
'https://img.nickpic.host/qLXijb.jpg',
'https://img.nickpic.host/qLXnnf.jpg',
'https://img.nickpic.host/qLXt96.jpg',
'https://img.nickpic.host/qLXRbp.jpg',
'https://img.nickpic.host/qLX16Y.jpg',
'https://img.nickpic.host/qLX4HA.jpg',
'https://img.nickpic.host/qLXwmG.jpg',
'https://img.nickpic.host/qLXzqz.jpg',
'https://img.nickpic.host/qLX7wc.jpg',
'https://img.nickpic.host/qLX8TW.jpg',
'https://img.nickpic.host/qLXYj1.jpg',
'https://img.nickpic.host/qLXHtj.jpg',
'https://img.nickpic.host/qLXN9J.jpg',
'https://img.nickpic.host/qLXfbn.jpg',
'https://img.nickpic.host/qLX0Cs.jpg',
'https://img.nickpic.host/qLX2H2.jpg',
'https://img.nickpic.host/qLXkux.jpg',
'https://img.nickpic.host/qLXemQ.jpg',
'https://img.nickpic.host/qLXJwN.jpg',
'https://img.nickpic.host/qLXLWO.jpg',
'https://img.nickpic.host/qLXTlm.jpg',
'https://img.nickpic.host/qLXWt8.jpg',
'https://img.nickpic.host/qLXZeq.jpg',
'https://img.nickpic.host/qLXybd.jpg',
'https://img.nickpic.host/qLiGCD.jpg',
'https://img.nickpic.host/qLiIN5.jpg',
'https://img.nickpic.host/qLiomP.jpg',
'https://img.nickpic.host/qLipuM.jpg',
'https://img.nickpic.host/qLixWe.jpg',
'https://img.nickpic.host/qLivzF.jpg',
'https://img.nickpic.host/qLiblX.jpg',
'https://img.nickpic.host/qLirMb.jpg',
'https://img.nickpic.host/qLisef.jpg',
'https://img.nickpic.host/qLiFr6.jpg',
'https://img.nickpic.host/qLiaQp.jpg',
'https://img.nickpic.host/qLijNY.jpg',
'https://img.nickpic.host/qLi5oA.jpg',
'https://img.nickpic.host/qLiSAG.jpg',
'https://img.nickpic.host/qLiczz.jpg',
'https://img.nickpic.host/qLigZc.jpg',
'https://img.nickpic.host/qLiulW.jpg',
'https://img.nickpic.host/qLiAM1.jpg',
'https://img.nickpic.host/qLiEkj.jpg',
'https://img.nickpic.host/qLihrJ.jpg',
'https://img.nickpic.host/qLi6Qn.jpg',
'https://img.nickpic.host/qLiCVs.jpg',
'https://img.nickpic.host/qLiUo2.jpg',
'https://img.nickpic.host/qLiXAQ.jpg',
'https://img.nickpic.host/qLii7x.jpg',
'https://img.nickpic.host/qLinZN.jpg',
'https://img.nickpic.host/qLiM5O.jpg',
'https://img.nickpic.host/qLiRRm.jpg',
'https://img.nickpic.host/qLi1k8.jpg',
'https://img.nickpic.host/qLiDsq.jpg',
'https://img.nickpic.host/qLiwQd.jpg',
'https://img.nickpic.host/qLizVD.jpg',
'https://img.nickpic.host/qLi8p5.jpg',
'https://img.nickpic.host/qLiKAP.jpg',
'https://img.nickpic.host/qLiY7M.jpg',
'https://img.nickpic.host/qLiHdF.jpg',
'https://img.nickpic.host/qLiV5e.jpg',
'https://img.nickpic.host/qLifRX.jpg',
'https://img.nickpic.host/qLi0Jb.jpg',
'https://img.nickpic.host/qLi9sf.jpg',
'https://img.nickpic.host/qLieU6.jpg',
'https://img.nickpic.host/qLikfp.jpg',
'https://img.nickpic.host/qLiLpY.jpg',
'https://img.nickpic.host/qLiPEA.jpg',
'https://img.nickpic.host/qLiT8G.jpg',
'https://img.nickpic.host/qLiWdz.jpg',
'https://img.nickpic.host/qLidSc.jpg',
'https://img.nickpic.host/qLiyRW.jpg',
'https://img.nickpic.host/qLnGJ1.jpg',
'https://img.nickpic.host/qLnm3j.jpg',
'https://img.nickpic.host/qLnoUJ.jpg',
'https://img.nickpic.host/qLnpfn.jpg',
'https://img.nickpic.host/qLnxvs.jpg',
'https://img.nickpic.host/qLnBE2.jpg',
'https://img.nickpic.host/qLnb8Q.jpg',
'https://img.nickpic.host/qLnryx.jpg',
'https://img.nickpic.host/qLn3SN.jpg',
'https://img.nickpic.host/qLnF1O.jpg',
'https://img.nickpic.host/qLnaLm.jpg',
'https://img.nickpic.host/qLnl38.jpg',
'https://img.nickpic.host/qLn5Xq.jpg',
'https://img.nickpic.host/qLnSfd.jpg',
'https://img.nickpic.host/qLngvD.jpg',
'https://img.nickpic.host/qLnqO5.jpg',
'https://img.nickpic.host/qLnu8P.jpg',
'https://img.nickpic.host/qLnAyM.jpg',
'https://img.nickpic.host/qLnOcF.jpg',
'https://img.nickpic.host/qLnh1e.jpg',
'https://img.nickpic.host/qLn6LX.jpg',
'https://img.nickpic.host/qLnQFb.jpg',
'https://img.nickpic.host/qLnUXf.jpg',
'https://img.nickpic.host/qLnX06.jpg',
'https://img.nickpic.host/qLnnxp.jpg',
'https://img.nickpic.host/qLntOY.jpg',
'https://img.nickpic.host/qLn1GG.jpg',
'https://img.nickpic.host/qLnMKA.jpg',
'https://img.nickpic.host/qLn4cz.jpg',
'https://img.nickpic.host/qLnD4c.jpg',
'https://img.nickpic.host/qLnwLW.jpg',
'https://img.nickpic.host/qLn7F1.jpg',
'https://img.nickpic.host/qLn8ij.jpg',
'https://img.nickpic.host/qLnK0J.jpg',
'https://img.nickpic.host/qLnHxn.jpg',
'https://img.nickpic.host/qLnNhs.jpg',
'https://img.nickpic.host/qLnVK2.jpg',
'https://img.nickpic.host/qLn0GQ.jpg',
'https://img.nickpic.host/qLn2gx.jpg',
'https://img.nickpic.host/qLn94N.jpg',
'https://img.nickpic.host/qLnePO.jpg',
'https://img.nickpic.host/qLnJam.jpg',
'https://img.nickpic.host/qLnLi8.jpg',
'https://img.nickpic.host/qLnP2q.jpg',
'https://img.nickpic.host/qLnWxd.jpg',
'https://img.nickpic.host/qLnZhD.jpg',
'https://img.nickpic.host/qLndY5.jpg',
'https://img.nickpic.host/qLtGGP.jpg',
'https://img.nickpic.host/qLtIgM.jpg',
'https://img.nickpic.host/qLtmDF.jpg',
'https://img.nickpic.host/qLtoPe.jpg',
'https://img.nickpic.host/qLtvaX.jpg',
'https://img.nickpic.host/qLtxnb.jpg',
'https://img.nickpic.host/qLtB2f.jpg',
'https://img.nickpic.host/qLtrB6.jpg',
'https://img.nickpic.host/qLts6p.jpg',
'https://img.nickpic.host/qLt3YY.jpg',
'https://img.nickpic.host/qLtaIA.jpg',
'https://img.nickpic.host/qLtjqG.jpg',
'https://img.nickpic.host/qLtlDz.jpg',
'https://img.nickpic.host/qLt5Tc.jpg',
'https://img.nickpic.host/qLtcaW.jpg',
'https://img.nickpic.host/qLtgn1.jpg',
'https://img.nickpic.host/qLtq9j.jpg',
'https://img.nickpic.host/qLtABJ.jpg',
'https://img.nickpic.host/qLtE6n.jpg',
'https://img.nickpic.host/qLtOHs.jpg',
'https://img.nickpic.host/qLt6I2.jpg',
'https://img.nickpic.host/qLtCqQ.jpg',
'https://img.nickpic.host/qLtQwx.jpg',
'https://img.nickpic.host/qLtUTN.jpg',
'https://img.nickpic.host/qLtijO.jpg',
'https://img.nickpic.host/qLtntm.jpg',
'https://img.nickpic.host/qLtt98.jpg',
'https://img.nickpic.host/qLtRbq.jpg',
'https://img.nickpic.host/qLt16d.jpg',
'https://img.nickpic.host/qLt4HD.jpg',
'https://img.nickpic.host/qLtwm5.jpg',
'https://img.nickpic.host/qLtzqP.jpg']
let maki = tatsu[Math.floor(Math.random() * tatsu.length)]
sait = await getBuffer(maki)
const fubu =['Aquí tienes 💕🦈','¿Linda foto no?','Pedido entregado 🕊','¿Qué tal está?','¿Te gusta?','Tengo muchas más 😽']
const fubuki = fubu[Math.floor(Math.random() * fubu.length)]
let buttons = [
                    {buttonId: `tatsumaki`, buttonText: {displayText: 'Siguiente'}, type: 1}
                ]
                let buttonMessage = {
                    image: (sait),
                    caption: (fubuki),
                    buttons: buttons,
                    headerType: 4
                }
                GojoMdNx.sendMessage(m.chat, buttonMessage)
            }
break

case 'konosuba': {
const kono =['https://img.nickpic.host/q4MGFn.jpg',
'https://img.nickpic.host/q4tdLJ.jpg',
'https://img.nickpic.host/q4tZ4j.jpg',
'https://img.nickpic.host/q4tWc1.jpg',
'https://img.nickpic.host/q4tPyW.jpg',
'https://img.nickpic.host/q4tJOz.jpg',
'https://img.nickpic.host/q4tLKc.jpg',
'https://img.nickpic.host/q4tkxG.jpg',
'https://img.nickpic.host/q4t90A.jpg',
'https://img.nickpic.host/q4t2XY.jpg',
'https://img.nickpic.host/q4Mm02.jpg',
'https://img.nickpic.host/q4MIis.jpg',
'https://img.nickpic.host/q4MxKN.jpg',
'https://img.nickpic.host/q4MpxQ.jpg',
'https://img.nickpic.host/q4Mvhx.jpg',
'https://img.nickpic.host/q4MbGO.jpg',
'https://img.nickpic.host/q4Mrgm.jpg',
'https://img.nickpic.host/q4M3Pq.jpg',
'https://img.nickpic.host/q4Ms48.jpg',
'https://img.nickpic.host/q4MaFd.jpg',
'https://img.nickpic.host/q4Ml25.jpg',
'https://img.nickpic.host/q4MjiD.jpg',
'https://img.nickpic.host/q4MSxP.jpg',
'https://img.nickpic.host/q4MchM.jpg',
'https://img.nickpic.host/q4MgYF.jpg',
'https://img.nickpic.host/q4MuGe.jpg',
'https://img.nickpic.host/q4MAgX.jpg',
'https://img.nickpic.host/q4MEDb.jpg',
'https://img.nickpic.host/q4MOPf.jpg',
'https://img.nickpic.host/q4M6a6.jpg',
'https://img.nickpic.host/q4MCnp.jpg',
'https://img.nickpic.host/q4MQ2Y.jpg',
'https://img.nickpic.host/q4MXBA.jpg',
'https://img.nickpic.host/q4Mi6G.jpg',
'https://img.nickpic.host/q4MnYz.jpg',
'https://img.nickpic.host/q4MMIc.jpg',
'https://img.nickpic.host/q4M1D1.jpg',
'https://img.nickpic.host/q4MRgW.jpg',
'https://img.nickpic.host/q4M4Tj.jpg',
'https://img.nickpic.host/q4MwaJ.jpg',
'https://img.nickpic.host/q4Mznn.jpg',
'https://img.nickpic.host/q4M79s.jpg',
'https://img.nickpic.host/q4MKB2.jpg',
'https://img.nickpic.host/q4MY6Q.jpg',
'https://img.nickpic.host/q4MHHx.jpg',
'https://img.nickpic.host/q4MfqO.jpg',
'https://img.nickpic.host/q4MVIN.jpg',
'https://img.nickpic.host/q4M0wm.jpg',
'https://img.nickpic.host/q4M2T8.jpg',
'https://img.nickpic.host/q4Mejq.jpg',
'https://img.nickpic.host/q4MJ9D.jpg',
'https://img.nickpic.host/q4Mknd.jpg',
'https://img.nickpic.host/q4MPb5.jpg',
'https://img.nickpic.host/q4MT6P.jpg',
'https://img.nickpic.host/q4Myqe.jpg',
'https://img.nickpic.host/q4MdmF.jpg',
'https://img.nickpic.host/q4MWHM.jpg',
'https://img.nickpic.host/q4RIWb.jpg',
'https://img.nickpic.host/q4RGwX.jpg',
'https://img.nickpic.host/q4Rojf.jpg',
'https://img.nickpic.host/q4Rpt6.jpg',
'https://img.nickpic.host/q4RBbY.jpg',
'https://img.nickpic.host/q4RbCA.jpg',
'https://img.nickpic.host/q4Rvep.jpg',
'https://img.nickpic.host/q4RrNG.jpg',
'https://img.nickpic.host/q4R3mz.jpg',
'https://img.nickpic.host/q4RFuc.jpg',
'https://img.nickpic.host/q4RawW.jpg',
'https://img.nickpic.host/q4RjW1.jpg',
'https://img.nickpic.host/q4Rcen.jpg',
'https://img.nickpic.host/q4R5lj.jpg',
'https://img.nickpic.host/q4RStJ.jpg',
'https://img.nickpic.host/q4Rqrs.jpg',
'https://img.nickpic.host/q4RuC2.jpg',
'https://img.nickpic.host/q4RhuN.jpg',
'https://img.nickpic.host/q4RANQ.jpg',
'https://img.nickpic.host/q4ROox.jpg',
'https://img.nickpic.host/q4RCZm.jpg',
'https://img.nickpic.host/q4R6zO.jpg',
'https://img.nickpic.host/q4RUl8.jpg',
'https://img.nickpic.host/q4RXMq.jpg',
'https://img.nickpic.host/q4Ried.jpg',
'https://img.nickpic.host/q4RMQ5.jpg',
'https://img.nickpic.host/q4RtrD.jpg',
'https://img.nickpic.host/q4R4oM.jpg',
'https://img.nickpic.host/q4RRNP.jpg',
'https://img.nickpic.host/q4RDAF.jpg',
'https://img.nickpic.host/q4Rwze.jpg',
'https://img.nickpic.host/q4RzZX.jpg',
'https://img.nickpic.host/q4RKMf.jpg',
'https://img.nickpic.host/q4R85b.jpg',
'https://img.nickpic.host/q4RYk6.jpg',
'https://img.nickpic.host/q4RVQY.jpg',
'https://img.nickpic.host/q4RNsp.jpg',
'https://img.nickpic.host/q4RfVA.jpg',
'https://img.nickpic.host/q4R9Az.jpg',
'https://img.nickpic.host/q4Re7c.jpg',
'https://img.nickpic.host/q4R2pG.jpg',
'https://img.nickpic.host/q4RL51.jpg',
'https://img.nickpic.host/q4RkZW.jpg',
'https://img.nickpic.host/q4RPRj.jpg',
'https://img.nickpic.host/q4RTkJ.jpg',
'https://img.nickpic.host/q4RyV2.jpg',
'https://img.nickpic.host/q4RZsn.jpg',
'https://img.nickpic.host/q4RdUs.jpg',
'https://img.nickpic.host/q41IpQ.jpg',
'https://img.nickpic.host/q41mEx.jpg',
'https://img.nickpic.host/q41o7N.jpg',
'https://img.nickpic.host/q41pdO.jpg',
'https://img.nickpic.host/q41xSm.jpg',
'https://img.nickpic.host/q41BR8.jpg',
'https://img.nickpic.host/q41ssd.jpg',
'https://img.nickpic.host/q41bJq.jpg',
'https://img.nickpic.host/q413UD.jpg',
'https://img.nickpic.host/q41lEM.jpg',
'https://img.nickpic.host/q41Ff5.jpg',
'https://img.nickpic.host/q41jpP.jpg',
'https://img.nickpic.host/q41Sde.jpg',
'https://img.nickpic.host/q4158F.jpg',
'https://img.nickpic.host/q41gSX.jpg',
'https://img.nickpic.host/q41q1b.jpg',
'https://img.nickpic.host/q41uJf.jpg',
'https://img.nickpic.host/q41OXp.jpg',
'https://img.nickpic.host/q41E36.jpg',
'https://img.nickpic.host/q41CvA.jpg',
'https://img.nickpic.host/q41hfY.jpg',
'https://img.nickpic.host/q41QOG.jpg',
'https://img.nickpic.host/q41Xyc.jpg',
'https://img.nickpic.host/q41U8z.jpg',
'https://img.nickpic.host/q41nSW.jpg',
'https://img.nickpic.host/q41MLj.jpg',
'https://img.nickpic.host/q41t11.jpg',
'https://img.nickpic.host/q4113J.jpg',
'https://img.nickpic.host/q414Xn.jpg',
'https://img.nickpic.host/q41D0s.jpg',
'https://img.nickpic.host/q417OQ.jpg',
'https://img.nickpic.host/q41zv2.jpg',
'https://img.nickpic.host/q418Kx.jpg',
'https://img.nickpic.host/q41KyN.jpg',
'https://img.nickpic.host/q41HcO.jpg',
'https://img.nickpic.host/q41N4m.jpg',
'https://img.nickpic.host/q41VL8.jpg',
'https://img.nickpic.host/q412Xd.jpg',
'https://img.nickpic.host/q410Fq.jpg',
'https://img.nickpic.host/q41LKM.jpg',
'https://img.nickpic.host/q4190D.jpg',
'https://img.nickpic.host/q41TGF.jpg',
'https://img.nickpic.host/q41kx5.jpg',
'https://img.nickpic.host/q41JOP.jpg',
'https://img.nickpic.host/q41Wce.jpg',
'https://img.nickpic.host/q41Z4X.jpg',
'https://img.nickpic.host/q41dPb.jpg',
'https://img.nickpic.host/q44GFf.jpg',
'https://img.nickpic.host/q44xYG.jpg',
'https://img.nickpic.host/q44pxY.jpg',
'https://img.nickpic.host/q44Ii6.jpg',
'https://img.nickpic.host/q44m2p.jpg',
'https://img.nickpic.host/q44vhA.jpg',
'https://img.nickpic.host/q44bGz.jpg',
'https://img.nickpic.host/q44rgc.jpg',
'https://img.nickpic.host/q44aaj.jpg',
'https://img.nickpic.host/q44s4W.jpg',
'https://img.nickpic.host/q44jiJ.jpg',
'https://img.nickpic.host/q443P1.jpg',
'https://img.nickpic.host/q44SBs.jpg',
'https://img.nickpic.host/q44l2n.jpg',
'https://img.nickpic.host/q44ch2.jpg',
'https://img.nickpic.host/q44gYQ.jpg',
'https://img.nickpic.host/q44AgN.jpg',
'https://img.nickpic.host/q44uIx.jpg',
'https://img.nickpic.host/q44EDO.jpg',
'https://img.nickpic.host/q44OTm.jpg',
'https://img.nickpic.host/q446a8.jpg',
'https://img.nickpic.host/q44Q2d.jpg',
'https://img.nickpic.host/q44Cnq.jpg',
'https://img.nickpic.host/q44i65.jpg',
'https://img.nickpic.host/q44XBD.jpg',
'https://img.nickpic.host/q44nYP.jpg',
'https://img.nickpic.host/q44MIM.jpg',
'https://img.nickpic.host/q44RqF.jpg',
'https://img.nickpic.host/q441De.jpg',
'https://img.nickpic.host/q444TX.jpg',
'https://img.nickpic.host/q44wjb.jpg',
'https://img.nickpic.host/q44znf.jpg',
'https://img.nickpic.host/q44HHA.jpg',
'https://img.nickpic.host/q44796.jpg',
'https://img.nickpic.host/q44Kbp.jpg',
'https://img.nickpic.host/q44Y6Y.jpg',
'https://img.nickpic.host/q44VmG.jpg',
'https://img.nickpic.host/q44fqz.jpg',
'https://img.nickpic.host/q440wc.jpg',
'https://img.nickpic.host/q442TW.jpg',
'https://img.nickpic.host/q44ej1.jpg',
'https://img.nickpic.host/q44ktj.jpg',
'https://img.nickpic.host/q44J9J.jpg',
'https://img.nickpic.host/q44Pbn.jpg',
'https://img.nickpic.host/q44TCs.jpg',
'https://img.nickpic.host/q44WH2.jpg',
'https://img.nickpic.host/q44dmQ.jpg',
'https://img.nickpic.host/q44yux.jpg',
'https://img.nickpic.host/q4DGwN.jpg',
'https://img.nickpic.host/q4DIWO.jpg',
'https://img.nickpic.host/q4Dolm.jpg',
'https://img.nickpic.host/q4Dpt8.jpg',
'https://img.nickpic.host/q4Dveq.jpg',
'https://img.nickpic.host/q4DBbd.jpg',
'https://img.nickpic.host/q4DrN5.jpg',
'https://img.nickpic.host/q4DbCD.jpg',
'https://img.nickpic.host/q4DFuM.jpg',
'https://img.nickpic.host/q4D3mP.jpg',
'https://img.nickpic.host/q4DazF.jpg',
'https://img.nickpic.host/q4DjWe.jpg',
'https://img.nickpic.host/q4D5lX.jpg',
'https://img.nickpic.host/q4Dqr6.jpg',
'https://img.nickpic.host/q4DSMb.jpg',
'https://img.nickpic.host/q4Dcef.jpg',
'https://img.nickpic.host/q4DuQp.jpg',
'https://img.nickpic.host/q4DhAG.jpg',
'https://img.nickpic.host/q4DANY.jpg',
'https://img.nickpic.host/q4DOoA.jpg',
'https://img.nickpic.host/q4D6zz.jpg',
'https://img.nickpic.host/q4DUlW.jpg',
'https://img.nickpic.host/q4DCZc.jpg',
'https://img.nickpic.host/q4DXM1.jpg',
'https://img.nickpic.host/q4Dikj.jpg',
'https://img.nickpic.host/q4DtrJ.jpg',
'https://img.nickpic.host/q4DMQn.jpg',
'https://img.nickpic.host/q4DRVs.jpg',
'https://img.nickpic.host/q4DDAQ.jpg',
'https://img.nickpic.host/q4D4o2.jpg',
'https://img.nickpic.host/q4Dw7x.jpg',
'https://img.nickpic.host/q4DzZN.jpg',
'https://img.nickpic.host/q4D85O.jpg',
'https://img.nickpic.host/q4DKRm.jpg',
'https://img.nickpic.host/q4DYk8.jpg',
'https://img.nickpic.host/q4DfVD.jpg',
'https://img.nickpic.host/q4DNsq.jpg',
'https://img.nickpic.host/q4DVQd.jpg',
'https://img.nickpic.host/q4D2p5.jpg',
'https://img.nickpic.host/q4D9AP.jpg',
'https://img.nickpic.host/q4De7M.jpg',
'https://img.nickpic.host/q4DkdF.jpg',
'https://img.nickpic.host/q4DL5e.jpg',
'https://img.nickpic.host/q4DPRX.jpg',
'https://img.nickpic.host/q4DTJb.jpg',
'https://img.nickpic.host/q4DZsf.jpg',
'https://img.nickpic.host/q4DdU6.jpg',
'https://img.nickpic.host/q4Dyfp.jpg',
'https://img.nickpic.host/q4wIpY.jpg',
'https://img.nickpic.host/q4wmEA.jpg',
'https://img.nickpic.host/q4wo8G.jpg',
'https://img.nickpic.host/q4wpdz.jpg',
'https://img.nickpic.host/q4wxSc.jpg',
'https://img.nickpic.host/q4wBRW.jpg',
'https://img.nickpic.host/q4wbJ1.jpg',
'https://img.nickpic.host/q4ws3j.jpg',
'https://img.nickpic.host/q4wFfn.jpg',
'https://img.nickpic.host/q4w3UJ.jpg',
'https://img.nickpic.host/q4wjvs.jpg',
'https://img.nickpic.host/q4w58Q.jpg',
'https://img.nickpic.host/q4wlE2.jpg',
'https://img.nickpic.host/q4wSyx.jpg',
'https://img.nickpic.host/q4wgSN.jpg',
'https://img.nickpic.host/q4wq1O.jpg',
'https://img.nickpic.host/q4wuLm.jpg',
'https://img.nickpic.host/q4wE38.jpg',
'https://img.nickpic.host/q4wOXq.jpg',
'https://img.nickpic.host/q4whfd.jpg',
'https://img.nickpic.host/q4wCvD.jpg',
'https://img.nickpic.host/q4wU8P.jpg',
'https://img.nickpic.host/q4wQO5.jpg',
'https://img.nickpic.host/q4wXyM.jpg',
'https://img.nickpic.host/q4wncF.jpg',
'https://img.nickpic.host/q4wMLX.jpg',
'https://img.nickpic.host/q4wt1e.jpg',
'https://img.nickpic.host/q4w4Xf.jpg',
'https://img.nickpic.host/q4w1Fb.jpg',
'https://img.nickpic.host/q4w7OY.jpg',
'https://img.nickpic.host/q4wD06.jpg',
'https://img.nickpic.host/q4wzxp.jpg',
'https://img.nickpic.host/q4wYGG.jpg',
'https://img.nickpic.host/q4w8KA.jpg',
'https://img.nickpic.host/q4wN4c.jpg',
'https://img.nickpic.host/q4wHcz.jpg',
'https://img.nickpic.host/q4wVLW.jpg',
'https://img.nickpic.host/q4w2ij.jpg',
'https://img.nickpic.host/q4w0F1.jpg',
'https://img.nickpic.host/q4wkxn.jpg',
'https://img.nickpic.host/q4w90J.jpg',
'https://img.nickpic.host/q4wJhs.jpg',
'https://img.nickpic.host/q4wLK2.jpg',
'https://img.nickpic.host/q4wTGQ.jpg',
'https://img.nickpic.host/q4wZ4N.jpg',
'https://img.nickpic.host/q4wWgx.jpg',
'https://img.nickpic.host/q4wdPO.jpg',
'https://img.nickpic.host/q4zGam.jpg',
'https://img.nickpic.host/q4zIi8.jpg',
'https://img.nickpic.host/q4zpxd.jpg',
'https://img.nickpic.host/q4zm2q.jpg',
'https://img.nickpic.host/q4zvhD.jpg',
'https://img.nickpic.host/q4zxY5.jpg',
'https://img.nickpic.host/q4zrgM.jpg',
'https://img.nickpic.host/q4zsDF.jpg',
'https://img.nickpic.host/q4zbGP.jpg',
'https://img.nickpic.host/q4z3Pe.jpg',
'https://img.nickpic.host/q4zaaX.jpg',
'https://img.nickpic.host/q4zl2f.jpg',
'https://img.nickpic.host/q4zjnb.jpg',
'https://img.nickpic.host/q4zSB6.jpg',
'https://img.nickpic.host/q4zc6p.jpg',
'https://img.nickpic.host/q4zgYY.jpg',
'https://img.nickpic.host/q4zuIA.jpg',
'https://img.nickpic.host/q4zAqG.jpg',
'https://img.nickpic.host/q4zEDz.jpg',
'https://img.nickpic.host/q4zOTc.jpg',
'https://img.nickpic.host/q4z6aW.jpg',
'https://img.nickpic.host/q4zQ9j.jpg',
'https://img.nickpic.host/q4zCn1.jpg',
'https://img.nickpic.host/q4zXBJ.jpg',
'https://img.nickpic.host/q4zi6n.jpg',
'https://img.nickpic.host/q4znHs.jpg',
'https://img.nickpic.host/q4zRqQ.jpg',
'https://img.nickpic.host/q4zMI2.jpg',
'https://img.nickpic.host/q4z1wx.jpg',
'https://img.nickpic.host/q4z4TN.jpg',
'https://img.nickpic.host/q4zwjO.jpg',
'https://img.nickpic.host/q4z798.jpg',
'https://img.nickpic.host/q4zztm.jpg',
'https://img.nickpic.host/q4zKbq.jpg',
'https://img.nickpic.host/q4zY6d.jpg',
'https://img.nickpic.host/q4zHHD.jpg',
'https://img.nickpic.host/q4zfqP.jpg',
'https://img.nickpic.host/q4zVm5.jpg',
'https://img.nickpic.host/q4z0wM.jpg',
'https://img.nickpic.host/q4zeje.jpg',
'https://img.nickpic.host/q4z2WF.jpg',
'https://img.nickpic.host/q4zJeb.jpg',
'https://img.nickpic.host/q4zktX.jpg',
'https://img.nickpic.host/q4zPbf.jpg',
'https://img.nickpic.host/q4zTC6.jpg',
'https://img.nickpic.host/q4zWNp.jpg',
'https://img.nickpic.host/q4zyuA.jpg',
'https://img.nickpic.host/q4zdmY.jpg',
'https://img.nickpic.host/q47GzG.jpg',
'https://img.nickpic.host/q47IWz.jpg',
'https://img.nickpic.host/q47ptW.jpg',
'https://img.nickpic.host/q47olc.jpg',
'https://img.nickpic.host/q47ve1.jpg',
'https://img.nickpic.host/q47Brj.jpg',
'https://img.nickpic.host/q47bCJ.jpg',
'https://img.nickpic.host/q473os.jpg',
'https://img.nickpic.host/q47rNn.jpg',
'https://img.nickpic.host/q47azQ.jpg',
'https://img.nickpic.host/q47Fu2.jpg',
'https://img.nickpic.host/q47jZx.jpg',
'https://img.nickpic.host/q47SMO.jpg',
'https://img.nickpic.host/q475lN.jpg',
'https://img.nickpic.host/q47qr8.jpg',
'https://img.nickpic.host/q47ckm.jpg',
'https://img.nickpic.host/q47uQq.jpg',
'https://img.nickpic.host/q47ANd.jpg',
'https://img.nickpic.host/q47hA5.jpg',
'https://img.nickpic.host/q47OoD.jpg',
'https://img.nickpic.host/q476zP.jpg',
'https://img.nickpic.host/q47CZM.jpg',
'https://img.nickpic.host/q47XMe.jpg',
'https://img.nickpic.host/q47U5F.jpg',
'https://img.nickpic.host/q47MQf.jpg',
'https://img.nickpic.host/q47tsb.jpg',
'https://img.nickpic.host/q47RV6.jpg',
'https://img.nickpic.host/q47ikX.jpg',
'https://img.nickpic.host/q474pp.jpg',
'https://img.nickpic.host/q47DAY.jpg',
'https://img.nickpic.host/q47w7A.jpg',
'https://img.nickpic.host/q47zdG.jpg',
'https://img.nickpic.host/q4785z.jpg',
'https://img.nickpic.host/q47YkW.jpg',
'https://img.nickpic.host/q47KRc.jpg',
'https://img.nickpic.host/q47Ns1.jpg',
'https://img.nickpic.host/q47VUj.jpg',
'https://img.nickpic.host/q47fVJ.jpg',
'https://img.nickpic.host/q472pn.jpg',
'https://img.nickpic.host/q479Es.jpg',
'https://img.nickpic.host/q47kdQ.jpg',
'https://img.nickpic.host/q47e72.jpg',
'https://img.nickpic.host/q47LSx.jpg',
'https://img.nickpic.host/q47PRN.jpg',
'https://img.nickpic.host/q47dU8.jpg',
'https://img.nickpic.host/q47TJO.jpg',
'https://img.nickpic.host/q47Z3m.jpg',
'https://img.nickpic.host/q47yfq.jpg',
'https://img.nickpic.host/q48Ipd.jpg',
'https://img.nickpic.host/q48o85.jpg',
'https://img.nickpic.host/q48mED.jpg',
'https://img.nickpic.host/q48pdP.jpg',
'https://img.nickpic.host/q48xSM.jpg',
'https://img.nickpic.host/q48B1F.jpg',
'https://img.nickpic.host/q48bJe.jpg',
'https://img.nickpic.host/q48s3X.jpg',
'https://img.nickpic.host/q483Xb.jpg',
'https://img.nickpic.host/q48Fff.jpg',
'https://img.nickpic.host/q48jv6.jpg',
'https://img.nickpic.host/q48lOp.jpg',
'https://img.nickpic.host/q4858Y.jpg',
'https://img.nickpic.host/q48SyA.jpg',
'https://img.nickpic.host/q48gcG.jpg',
'https://img.nickpic.host/q48uLc.jpg',
'https://img.nickpic.host/q48q1z.jpg',
'https://img.nickpic.host/q48E3W.jpg',
'https://img.nickpic.host/q48OX1.jpg',
'https://img.nickpic.host/q48h0j.jpg',
'https://img.nickpic.host/q48CvJ.jpg',
'https://img.nickpic.host/q48QOn.jpg',
'https://img.nickpic.host/q48UKs.jpg',
'https://img.nickpic.host/q48Xy2.jpg',
'https://img.nickpic.host/q48ncQ.jpg',
'https://img.nickpic.host/q48t4x.jpg',
'https://img.nickpic.host/q48MLN.jpg',
'https://img.nickpic.host/q481FO.jpg',
'https://img.nickpic.host/q484im.jpg']
let dark = kono[Math.floor(Math.random() * kono.length)]
konosuba = await getBuffer(dark)
const kodecir =['Aquí tienes 💕🦈','¿Linda foto no?','Pedido entregado 🕊','¿Qué tal está?','¿Te gusta?','Tengo muchas más 😽']
const kofrase = kodecir[Math.floor(Math.random() * kodecir.length)]
let buttons = [
                    {buttonId: `konosuba`, buttonText: {displayText: 'Siguiente'}, type: 1}
                ]
                let buttonMessage = {
                    image: (konosuba),
                    caption: (kofrase),
                    buttons: buttons,
                    headerType: 4
                }
                GojoMdNx.sendMessage(m.chat, buttonMessage)
            }
break
	
case 'dbz': {
const dragon =['https://img.nickpic.host/q1MbuW.jpg',
'https://img.nickpic.host/q1MvNz.jpg',
'https://img.nickpic.host/q1MpQG.jpg',
'https://img.nickpic.host/q1MorA.jpg',
'https://img.nickpic.host/q1MIeY.jpg',
'https://img.nickpic.host/q1MGMp.jpg',
'https://img.nickpic.host/q1tWzb.jpg',
'https://img.nickpic.host/q1tyl6.jpg',
'https://img.nickpic.host/q1tZWf.jpg',
'https://img.nickpic.host/q1tTuX.jpg',
'https://img.nickpic.host/q1MBoc.jpg',
'https://img.nickpic.host/q1Mrz1.jpg',
'https://img.nickpic.host/q1MsZj.jpg',
'https://img.nickpic.host/q1MFlJ.jpg',
'https://img.nickpic.host/q1MaMn.jpg',
'https://img.nickpic.host/q1Mjks.jpg',
'https://img.nickpic.host/q1M5r2.jpg',
'https://img.nickpic.host/q1MSQQ.jpg',
'https://img.nickpic.host/q1McVx.jpg',
'https://img.nickpic.host/q1MqoN.jpg',
'https://img.nickpic.host/q1MuAO.jpg',
'https://img.nickpic.host/q1MA7m.jpg',
'https://img.nickpic.host/q1MEZ8.jpg',
'https://img.nickpic.host/q1Mh5q.jpg',
'https://img.nickpic.host/q1M6Md.jpg',
'https://img.nickpic.host/q1MCkD.jpg',
'https://img.nickpic.host/q1MUs5.jpg',
'https://img.nickpic.host/q1MXQP.jpg',
'https://img.nickpic.host/q1MiVM.jpg',
'https://img.nickpic.host/q1MtpF.jpg',
'https://img.nickpic.host/q1MMAe.jpg',
'https://img.nickpic.host/q1MR7X.jpg',
'https://img.nickpic.host/q1M1db.jpg',
'https://img.nickpic.host/q1MD5f.jpg',
'https://img.nickpic.host/q1MwR6.jpg',
'https://img.nickpic.host/q1MzJp.jpg',
'https://img.nickpic.host/q1M8sY.jpg',
'https://img.nickpic.host/q1MKUA.jpg',
'https://img.nickpic.host/q1MYfG.jpg',
'https://img.nickpic.host/q1MNpz.jpg',
'https://img.nickpic.host/q1MVEc.jpg',
'https://img.nickpic.host/q1Mf7W.jpg',
'https://img.nickpic.host/q1M0d1.jpg',
'https://img.nickpic.host/q1M9Sj.jpg',
'https://img.nickpic.host/q1MeRJ.jpg',
'https://img.nickpic.host/q1MkJn.jpg',
'https://img.nickpic.host/q1ML3s.jpg',
'https://img.nickpic.host/q1MPU2.jpg',
'https://img.nickpic.host/q1MTfQ.jpg',
'https://img.nickpic.host/q1MZvx.jpg',
'https://img.nickpic.host/q1MdEN.jpg',
'https://img.nickpic.host/q1My8O.jpg',
'https://img.nickpic.host/q1RGym.jpg',
'https://img.nickpic.host/q1RmS8.jpg',
'https://img.nickpic.host/q1Ro1q.jpg',
'https://img.nickpic.host/q1RpJd.jpg',
'https://img.nickpic.host/q1Rx3D.jpg',
'https://img.nickpic.host/q1RBX5.jpg',
'https://img.nickpic.host/q1RbfP.jpg',
'https://img.nickpic.host/q1RsvM.jpg',
'https://img.nickpic.host/q1R3OF.jpg',
'https://img.nickpic.host/q1RF8e.jpg',
'https://img.nickpic.host/q1RayX.jpg',
'https://img.nickpic.host/q1Rlcb.jpg',
'https://img.nickpic.host/q1R51f.jpg',
'https://img.nickpic.host/q1RSL6.jpg',
'https://img.nickpic.host/q1RgFp.jpg',
'https://img.nickpic.host/q1RqXY.jpg',
'https://img.nickpic.host/q1Ru0A.jpg',
'https://img.nickpic.host/q1RExG.jpg',
'https://img.nickpic.host/q1ROOz.jpg',
'https://img.nickpic.host/q1RhKc.jpg',
'https://img.nickpic.host/q1R6yW.jpg',
'https://img.nickpic.host/q1RQc1.jpg',
'https://img.nickpic.host/q1RU4j.jpg',
'https://img.nickpic.host/q1RXLJ.jpg',
'https://img.nickpic.host/q1RnFn.jpg',
'https://img.nickpic.host/q1Rtis.jpg',
'https://img.nickpic.host/q1RM02.jpg',
'https://img.nickpic.host/q1R1xQ.jpg',
'https://img.nickpic.host/q1R4hx.jpg',
'https://img.nickpic.host/q1RDKN.jpg',
'https://img.nickpic.host/q1RzGO.jpg',
'https://img.nickpic.host/q1R7gm.jpg',
'https://img.nickpic.host/q1R848.jpg',
'https://img.nickpic.host/q1RKPq.jpg',
'https://img.nickpic.host/q1RHFd.jpg',
'https://img.nickpic.host/q1RNiD.jpg',
'https://img.nickpic.host/q1RV25.jpg',
'https://img.nickpic.host/q1R0xP.jpg',
'https://img.nickpic.host/q1R2hM.jpg',
'https://img.nickpic.host/q1R9YF.jpg',
'https://img.nickpic.host/q1RkGe.jpg',
'https://img.nickpic.host/q1RJgX.jpg',
'https://img.nickpic.host/q1RPPf.jpg',
'https://img.nickpic.host/q1RLDb.jpg',
'https://img.nickpic.host/q1RWa6.jpg',
'https://img.nickpic.host/q1RZnp.jpg',
'https://img.nickpic.host/q11GBA.jpg',
'https://img.nickpic.host/q11I6G.jpg',
'https://img.nickpic.host/q1Rd2Y.jpg',
'https://img.nickpic.host/q11mYz.jpg',
'https://img.nickpic.host/q11pIc.jpg',
'https://img.nickpic.host/q11xD1.jpg',
'https://img.nickpic.host/q11vgW.jpg',
'https://img.nickpic.host/q11BTj.jpg',
'https://img.nickpic.host/q11raJ.jpg',
'https://img.nickpic.host/q11snn.jpg',
'https://img.nickpic.host/q11aB2.jpg',
'https://img.nickpic.host/q1139s.jpg',
'https://img.nickpic.host/q11j6Q.jpg',
'https://img.nickpic.host/q11lHx.jpg',
'https://img.nickpic.host/q11SIN.jpg',
'https://img.nickpic.host/q11gwm.jpg',
'https://img.nickpic.host/q11cqO.jpg',
'https://img.nickpic.host/q11qT8.jpg',
'https://img.nickpic.host/q11Ajq.jpg',
'https://img.nickpic.host/q11End.jpg',
'https://img.nickpic.host/q116b5.jpg',
'https://img.nickpic.host/q11O9D.jpg',
'https://img.nickpic.host/q11C6P.jpg',
'https://img.nickpic.host/q11QHM.jpg',
'https://img.nickpic.host/q11XmF.jpg',
'https://img.nickpic.host/q11nwX.jpg',
'https://img.nickpic.host/q11iqe.jpg',
'https://img.nickpic.host/q11tWb.jpg',
'https://img.nickpic.host/q11Rjf.jpg',
'https://img.nickpic.host/q111t6.jpg',
'https://img.nickpic.host/q114ep.jpg',
'https://img.nickpic.host/q117NG.jpg',
'https://img.nickpic.host/q11wbY.jpg',
'https://img.nickpic.host/q11zCA.jpg',
'https://img.nickpic.host/q11Kmz.jpg',
'https://img.nickpic.host/q11Yuc.jpg',
'https://img.nickpic.host/q11HwW.jpg',
'https://img.nickpic.host/q11NW1.jpg',
'https://img.nickpic.host/q11flj.jpg',
'https://img.nickpic.host/q110tJ.jpg',
'https://img.nickpic.host/q112en.jpg',
'https://img.nickpic.host/q11ers.jpg',
'https://img.nickpic.host/q11kC2.jpg',
'https://img.nickpic.host/q11JNQ.jpg',
'https://img.nickpic.host/q11Pox.jpg',
'https://img.nickpic.host/q11TuN.jpg',
'https://img.nickpic.host/q11yl8.jpg',
'https://img.nickpic.host/q11WzO.jpg',
'https://img.nickpic.host/q14GMq.jpg',
'https://img.nickpic.host/q14Ied.jpg',
'https://img.nickpic.host/q14orD.jpg',
'https://img.nickpic.host/q14pQ5.jpg',
'https://img.nickpic.host/q14vNP.jpg',
'https://img.nickpic.host/q14BoM.jpg',
'https://img.nickpic.host/q14bAF.jpg',
'https://img.nickpic.host/q14rze.jpg',
'https://img.nickpic.host/q14sZX.jpg',
'https://img.nickpic.host/q14aMf.jpg',
'https://img.nickpic.host/q14F5b.jpg',
'https://img.nickpic.host/q14jk6.jpg',
'https://img.nickpic.host/q145sp.jpg',
'https://img.nickpic.host/q14cVA.jpg',
'https://img.nickpic.host/q14qpG.jpg',
'https://img.nickpic.host/q14SQY.jpg',
'https://img.nickpic.host/q14uAz.jpg',
'https://img.nickpic.host/q14A7c.jpg',
'https://img.nickpic.host/q14h51.jpg',
'https://img.nickpic.host/q14EZW.jpg',
'https://img.nickpic.host/q146Rj.jpg',
'https://img.nickpic.host/q14CkJ.jpg',
'https://img.nickpic.host/q14Usn.jpg',
'https://img.nickpic.host/q14XUs.jpg',
'https://img.nickpic.host/q14iV2.jpg',
'https://img.nickpic.host/q14tpQ.jpg',
'https://img.nickpic.host/q14MEx.jpg',
'https://img.nickpic.host/q141dO.jpg',
'https://img.nickpic.host/q14R7N.jpg',
'https://img.nickpic.host/q14DSm.jpg',
'https://img.nickpic.host/q14wR8.jpg',
'https://img.nickpic.host/q148sd.jpg',
'https://img.nickpic.host/q14zJq.jpg',
'https://img.nickpic.host/q14KUD.jpg',
'https://img.nickpic.host/q14Yf5.jpg',
'https://img.nickpic.host/q14NpP.jpg',
'https://img.nickpic.host/q14VEM.jpg',
'https://img.nickpic.host/q14f8F.jpg',
'https://img.nickpic.host/q140de.jpg',
'https://img.nickpic.host/q149SX.jpg',
'https://img.nickpic.host/q14e1b.jpg',
'https://img.nickpic.host/q14kJf.jpg',
'https://img.nickpic.host/q14L36.jpg',
'https://img.nickpic.host/q14PXp.jpg',
'https://img.nickpic.host/q14TfY.jpg',
'https://img.nickpic.host/q14ZvA.jpg',
'https://img.nickpic.host/q14dOG.jpg',
'https://img.nickpic.host/q14y8z.jpg',
'https://img.nickpic.host/q1DGyc.jpg',
'https://img.nickpic.host/q1DmSW.jpg',
'https://img.nickpic.host/q1Do11.jpg',
'https://img.nickpic.host/q1DpLj.jpg',
'https://img.nickpic.host/q1Dx3J.jpg',
'https://img.nickpic.host/q1DBXn.jpg',
'https://img.nickpic.host/q1Db0s.jpg',
'https://img.nickpic.host/q1Dsv2.jpg',
'https://img.nickpic.host/q1D3OQ.jpg',
'https://img.nickpic.host/q1DFKx.jpg',
'https://img.nickpic.host/q1DayN.jpg',
'https://img.nickpic.host/q1DlcO.jpg',
'https://img.nickpic.host/q1D54m.jpg',
'https://img.nickpic.host/q1DSL8.jpg',
'https://img.nickpic.host/q1DgFq.jpg',
'https://img.nickpic.host/q1DqXd.jpg',
'https://img.nickpic.host/q1Du0D.jpg',
'https://img.nickpic.host/q1DEx5.jpg',
'https://img.nickpic.host/q1DOOP.jpg',
'https://img.nickpic.host/q1DhKM.jpg',
'https://img.nickpic.host/q1DCGF.jpg',
'https://img.nickpic.host/q1DQce.jpg',
'https://img.nickpic.host/q1DU4X.jpg',
'https://img.nickpic.host/q1DXPb.jpg',
'https://img.nickpic.host/q1Dti6.jpg',
'https://img.nickpic.host/q1DnFf.jpg',
'https://img.nickpic.host/q1DM2p.jpg',
'https://img.nickpic.host/q1D1xY.jpg',
'https://img.nickpic.host/q1D4hA.jpg',
'https://img.nickpic.host/q1DzGz.jpg',
'https://img.nickpic.host/q1DDYG.jpg',
'https://img.nickpic.host/q1D7gc.jpg',
'https://img.nickpic.host/q1D84W.jpg',
'https://img.nickpic.host/q1DHaj.jpg',
'https://img.nickpic.host/q1DKP1.jpg',
'https://img.nickpic.host/q1DNiJ.jpg',
'https://img.nickpic.host/q1DV2n.jpg',
'https://img.nickpic.host/q1D0Bs.jpg',
'https://img.nickpic.host/q1D9YQ.jpg',
'https://img.nickpic.host/q1D2h2.jpg',
'https://img.nickpic.host/q1DkIx.jpg',
'https://img.nickpic.host/q1DJgN.jpg',
'https://img.nickpic.host/q1DLDO.jpg',
'https://img.nickpic.host/q1DPTm.jpg',
'https://img.nickpic.host/q1DWa8.jpg',
'https://img.nickpic.host/q1DZnq.jpg',
'https://img.nickpic.host/q1wI65.jpg',
'https://img.nickpic.host/q1wGBD.jpg',
'https://img.nickpic.host/q1Dd2d.jpg',
'https://img.nickpic.host/q1wmYP.jpg',
'https://img.nickpic.host/q1wpIM.jpg',
'https://img.nickpic.host/q1wvqF.jpg',
'https://img.nickpic.host/q1wxDe.jpg',
'https://img.nickpic.host/q1wBTX.jpg',
'https://img.nickpic.host/q1wsnf.jpg',
'https://img.nickpic.host/q1wrjb.jpg',
'https://img.nickpic.host/q1w396.jpg',
'https://img.nickpic.host/q1wj6Y.jpg',
'https://img.nickpic.host/q1wabp.jpg',
'https://img.nickpic.host/q1wlHA.jpg',
'https://img.nickpic.host/q1wSmG.jpg',
'https://img.nickpic.host/q1wcqz.jpg',
'https://img.nickpic.host/q1wqTW.jpg',
'https://img.nickpic.host/q1wgwc.jpg',
'https://img.nickpic.host/q1wAj1.jpg',
'https://img.nickpic.host/q1wEtj.jpg',
'https://img.nickpic.host/q1wO9J.jpg',
'https://img.nickpic.host/q1wCCs.jpg',
'https://img.nickpic.host/q1w6bn.jpg',
'https://img.nickpic.host/q1wQH2.jpg',
'https://img.nickpic.host/q1wXmQ.jpg',
'https://img.nickpic.host/q1wiux.jpg',
'https://img.nickpic.host/q1wnwN.jpg',
'https://img.nickpic.host/q1wtWO.jpg',
'https://img.nickpic.host/q1wRlm.jpg',
'https://img.nickpic.host/q1w1t8.jpg',
'https://img.nickpic.host/q1w4eq.jpg',
'https://img.nickpic.host/q1wwbd.jpg',
'https://img.nickpic.host/q1wzCD.jpg',
'https://img.nickpic.host/q1w7N5.jpg',
'https://img.nickpic.host/q1wKmP.jpg',
'https://img.nickpic.host/q1wYuM.jpg',
'https://img.nickpic.host/q1wHzF.jpg',
'https://img.nickpic.host/q1wNWe.jpg',
'https://img.nickpic.host/q1wflX.jpg',
'https://img.nickpic.host/q1w0Mb.jpg',
'https://img.nickpic.host/q1w2ef.jpg',
'https://img.nickpic.host/q1wer6.jpg',
'https://img.nickpic.host/q1wkQp.jpg',
'https://img.nickpic.host/q1wJNY.jpg',
'https://img.nickpic.host/q1wPoA.jpg',
'https://img.nickpic.host/q1wTAG.jpg',
'https://img.nickpic.host/q1wWzz.jpg',
'https://img.nickpic.host/q1wZZc.jpg',
'https://img.nickpic.host/q1wylW.jpg',
'https://img.nickpic.host/q1zIkj.jpg',
'https://img.nickpic.host/q1zGM1.jpg',
'https://img.nickpic.host/q1zorJ.jpg',
'https://img.nickpic.host/q1zpQn.jpg',
'https://img.nickpic.host/q1zvVs.jpg',
'https://img.nickpic.host/q1zBo2.jpg',
'https://img.nickpic.host/q1zbAQ.jpg',
'https://img.nickpic.host/q1zr7x.jpg',
'https://img.nickpic.host/q1zsZN.jpg',
'https://img.nickpic.host/q1zF5O.jpg',
'https://img.nickpic.host/q1zaRm.jpg',
'https://img.nickpic.host/q1zjk8.jpg',
'https://img.nickpic.host/q1z5sq.jpg',
'https://img.nickpic.host/q1zSQd.jpg',
'https://img.nickpic.host/q1zcVD.jpg',
'https://img.nickpic.host/q1zqp5.jpg',
'https://img.nickpic.host/q1zuAP.jpg',
'https://img.nickpic.host/q1zA7M.jpg',
'https://img.nickpic.host/q1zEdF.jpg',
'https://img.nickpic.host/q1zh5e.jpg',
'https://img.nickpic.host/q1z6RX.jpg',
'https://img.nickpic.host/q1zCJb.jpg',
'https://img.nickpic.host/q1zXU6.jpg',
'https://img.nickpic.host/q1zUsf.jpg',
'https://img.nickpic.host/q1zifp.jpg',
'https://img.nickpic.host/q1ztpY.jpg',
'https://img.nickpic.host/q1zMEA.jpg',
'https://img.nickpic.host/q1zR8G.jpg',
'https://img.nickpic.host/q1z1dz.jpg',
'https://img.nickpic.host/q1zDSc.jpg',
'https://img.nickpic.host/q1zwRW.jpg',
'https://img.nickpic.host/q1zzJ1.jpg',
'https://img.nickpic.host/q1z83j.jpg',
'https://img.nickpic.host/q1zKUJ.jpg',
'https://img.nickpic.host/q1zYfn.jpg',
'https://img.nickpic.host/q1zVE2.jpg',
'https://img.nickpic.host/q1zNvs.jpg',
'https://img.nickpic.host/q1zf8Q.jpg',
'https://img.nickpic.host/q1z0yx.jpg',
'https://img.nickpic.host/q1z9SN.jpg',
'https://img.nickpic.host/q1zkLm.jpg',
'https://img.nickpic.host/q1ze1O.jpg',
'https://img.nickpic.host/q1zL38.jpg',
'https://img.nickpic.host/q1zPXq.jpg',
'https://img.nickpic.host/q1zTfd.jpg',
'https://img.nickpic.host/q1zdO5.jpg',
'https://img.nickpic.host/q1zZvD.jpg',
'https://img.nickpic.host/q17GyM.jpg',
'https://img.nickpic.host/q1zy8P.jpg',
'https://img.nickpic.host/q17mcF.jpg',
'https://img.nickpic.host/q17pLX.jpg',
'https://img.nickpic.host/q17o1e.jpg',
'https://img.nickpic.host/q17BXf.jpg',
'https://img.nickpic.host/q17xFb.jpg',
'https://img.nickpic.host/q17b06.jpg',
'https://img.nickpic.host/q173OY.jpg',
'https://img.nickpic.host/q17sxp.jpg',
'https://img.nickpic.host/q17jGG.jpg',
'https://img.nickpic.host/q17FKA.jpg',
'https://img.nickpic.host/q17lcz.jpg',
'https://img.nickpic.host/q1754c.jpg',
'https://img.nickpic.host/q17SLW.jpg',
'https://img.nickpic.host/q17qij.jpg',
'https://img.nickpic.host/q17gF1.jpg',
'https://img.nickpic.host/q17Exn.jpg',
'https://img.nickpic.host/q17u0J.jpg',
'https://img.nickpic.host/q17Ohs.jpg',
'https://img.nickpic.host/q17hK2.jpg',
'https://img.nickpic.host/q17CGQ.jpg',
'https://img.nickpic.host/q17U4N.jpg',
'https://img.nickpic.host/q17Qgx.jpg',
'https://img.nickpic.host/q17nam.jpg',
'https://img.nickpic.host/q17XPO.jpg',
'https://img.nickpic.host/q17ti8.jpg',
'https://img.nickpic.host/q17M2q.jpg',
'https://img.nickpic.host/q171xd.jpg',
'https://img.nickpic.host/q17DY5.jpg',
'https://img.nickpic.host/q174hD.jpg',
'https://img.nickpic.host/q177gM.jpg',
'https://img.nickpic.host/q17zGP.jpg',
'https://img.nickpic.host/q178DF.jpg',
'https://img.nickpic.host/q17KPe.jpg',
'https://img.nickpic.host/q17HaX.jpg',
'https://img.nickpic.host/q17V2f.jpg',
'https://img.nickpic.host/q17Nnb.jpg',
'https://img.nickpic.host/q1726p.jpg',
'https://img.nickpic.host/q170B6.jpg',
'https://img.nickpic.host/q17kIA.jpg',
'https://img.nickpic.host/q179YY.jpg',
'https://img.nickpic.host/q17JqG.jpg',
'https://img.nickpic.host/q17LDz.jpg',
'https://img.nickpic.host/q17PTc.jpg',
'https://img.nickpic.host/q17Zn1.jpg',
'https://img.nickpic.host/q17WaW.jpg',
'https://img.nickpic.host/q17d9j.jpg',
'https://img.nickpic.host/q18I6n.jpg',
'https://img.nickpic.host/q18GBJ.jpg',
'https://img.nickpic.host/q18pI2.jpg',
'https://img.nickpic.host/q18mHs.jpg',
'https://img.nickpic.host/q18xwx.jpg',
'https://img.nickpic.host/q18vqQ.jpg',
'https://img.nickpic.host/q18BTN.jpg',
'https://img.nickpic.host/q18rjO.jpg',
'https://img.nickpic.host/q18stm.jpg',
'https://img.nickpic.host/q18abq.jpg',
'https://img.nickpic.host/q18398.jpg',
'https://img.nickpic.host/q18j6d.jpg',
'https://img.nickpic.host/q18lHD.jpg',
'https://img.nickpic.host/q18cqP.jpg',
'https://img.nickpic.host/q18Sm5.jpg',
'https://img.nickpic.host/q18gwM.jpg',
'https://img.nickpic.host/q18qWF.jpg',
'https://img.nickpic.host/q18Aje.jpg',
'https://img.nickpic.host/q18EtX.jpg',
'https://img.nickpic.host/q18Oeb.jpg',
'https://img.nickpic.host/q18CC6.jpg',
'https://img.nickpic.host/q186bf.jpg',
'https://img.nickpic.host/q18QNp.jpg',
'https://img.nickpic.host/q18iuA.jpg',
'https://img.nickpic.host/q18XmY.jpg',
'https://img.nickpic.host/q18nzG.jpg',
'https://img.nickpic.host/q18tWz.jpg',
'https://img.nickpic.host/q18Rlc.jpg',
'https://img.nickpic.host/q184e1.jpg',
'https://img.nickpic.host/q181tW.jpg',
'https://img.nickpic.host/q18zCJ.jpg',
'https://img.nickpic.host/q187Nn.jpg',
'https://img.nickpic.host/q18wrj.jpg',
'https://img.nickpic.host/q18Kos.jpg',
'https://img.nickpic.host/q18Yu2.jpg',
'https://img.nickpic.host/q18NZx.jpg',
'https://img.nickpic.host/q18HzQ.jpg',
'https://img.nickpic.host/q18flN.jpg',
'https://img.nickpic.host/q180MO.jpg',
'https://img.nickpic.host/q182km.jpg',
'https://img.nickpic.host/q18er8.jpg',
'https://img.nickpic.host/q18kQq.jpg',
'https://img.nickpic.host/q18JNd.jpg',
'https://img.nickpic.host/q18TA5.jpg',
'https://img.nickpic.host/q18ZZM.jpg',
'https://img.nickpic.host/q18PoD.jpg',
'https://img.nickpic.host/q18y5F.jpg',
'https://img.nickpic.host/q18WzP.jpg',
'https://img.nickpic.host/q1KGMe.jpg',
'https://img.nickpic.host/q1KIkX.jpg',
'https://img.nickpic.host/q1KpQf.jpg',
'https://img.nickpic.host/q1Kosb.jpg',
'https://img.nickpic.host/q1KvV6.jpg',
'https://img.nickpic.host/q1KBpp.jpg',
'https://img.nickpic.host/q1KbAY.jpg',
'https://img.nickpic.host/q1Kr7A.jpg',
'https://img.nickpic.host/q1KsdG.jpg',
'https://img.nickpic.host/q1KF5z.jpg',
'https://img.nickpic.host/q1KjkW.jpg',
'https://img.nickpic.host/q1KSUj.jpg',
'https://img.nickpic.host/q1KaRc.jpg',
'https://img.nickpic.host/q1K5s1.jpg',
'https://img.nickpic.host/q1KcVJ.jpg',
'https://img.nickpic.host/q1Kqpn.jpg',
'https://img.nickpic.host/q1KuEs.jpg',
'https://img.nickpic.host/q1KEdQ.jpg',
'https://img.nickpic.host/q1KA72.jpg',
'https://img.nickpic.host/q1KhSx.jpg',
'https://img.nickpic.host/q1K6RN.jpg',
'https://img.nickpic.host/q1KXU8.jpg',
'https://img.nickpic.host/q1KCJO.jpg',
'https://img.nickpic.host/q1KU3m.jpg',
'https://img.nickpic.host/q1Kifq.jpg',
'https://img.nickpic.host/q1Ktpd.jpg',
'https://img.nickpic.host/q1KR85.jpg',
'https://img.nickpic.host/q1KMED.jpg',
'https://img.nickpic.host/q1K1dP.jpg',
'https://img.nickpic.host/q1KDSM.jpg',
'https://img.nickpic.host/q1Kw1F.jpg',
'https://img.nickpic.host/q1KzJe.jpg',
'https://img.nickpic.host/q1K83X.jpg',
'https://img.nickpic.host/q1KKXb.jpg',
'https://img.nickpic.host/q1KYff.jpg',
'https://img.nickpic.host/q1Kf8Y.jpg',
'https://img.nickpic.host/q1KNv6.jpg',
'https://img.nickpic.host/q1KVOp.jpg',
'https://img.nickpic.host/q1K0yA.jpg',
'https://img.nickpic.host/q1K9cG.jpg',
'https://img.nickpic.host/q1Ke1z.jpg',
'https://img.nickpic.host/q1KkLc.jpg',
'https://img.nickpic.host/q1KL3W.jpg',
'https://img.nickpic.host/q1KT0j.jpg',
'https://img.nickpic.host/q1KPX1.jpg',
'https://img.nickpic.host/q1KZvJ.jpg',
'https://img.nickpic.host/q1KyKs.jpg',
'https://img.nickpic.host/q1KdOn.jpg',
'https://img.nickpic.host/q1YGy2.jpg',
'https://img.nickpic.host/q1YmcQ.jpg',
'https://img.nickpic.host/q1YpLN.jpg',
'https://img.nickpic.host/q1Yo4x.jpg',
'https://img.nickpic.host/q1YxFO.jpg',
'https://img.nickpic.host/q1Yb08.jpg',
'https://img.nickpic.host/q1Ysxq.jpg',
'https://img.nickpic.host/q1YBim.jpg',
'https://img.nickpic.host/q1Y3Od.jpg',
'https://img.nickpic.host/q1YjG5.jpg',
'https://img.nickpic.host/q1YFKD.jpg',
'https://img.nickpic.host/q1YlcP.jpg',
'https://img.nickpic.host/q1Y54M.jpg',
'https://img.nickpic.host/q1YgFe.jpg',
'https://img.nickpic.host/q1YSPF.jpg',
'https://img.nickpic.host/q1Yu2b.jpg',
'https://img.nickpic.host/q1YqiX.jpg',
'https://img.nickpic.host/q1YExf.jpg',
'https://img.nickpic.host/q1YhYp.jpg',
'https://img.nickpic.host/q1YOh6.jpg',
'https://img.nickpic.host/q1YQgA.jpg',
'https://img.nickpic.host/q1YCGY.jpg',
'https://img.nickpic.host/q1YXPz.jpg',
'https://img.nickpic.host/q1YUDG.jpg',
'https://img.nickpic.host/q1Ynac.jpg',
'https://img.nickpic.host/q1YtiW.jpg',
'https://img.nickpic.host/q1Y1Bj.jpg',
'https://img.nickpic.host/q1YM21.jpg',
'https://img.nickpic.host/q1Y4hJ.jpg',
'https://img.nickpic.host/q1YDYn.jpg',
'https://img.nickpic.host/q1YzIs.jpg',
'https://img.nickpic.host/q1Y7g2.jpg',
'https://img.nickpic.host/q1Y8DQ.jpg',
'https://img.nickpic.host/q1YKTx.jpg',
'https://img.nickpic.host/q1YHaN.jpg',
'https://img.nickpic.host/q1YNnO.jpg',
'https://img.nickpic.host/q1Y26q.jpg',
'https://img.nickpic.host/q1YV9m.jpg',
'https://img.nickpic.host/q1Y0B8.jpg',
'https://img.nickpic.host/q1Y9Yd.jpg',
'https://img.nickpic.host/q1YJq5.jpg',
'https://img.nickpic.host/q1YPTM.jpg',
'https://img.nickpic.host/q1YkID.jpg',
'https://img.nickpic.host/q1YLDP.jpg',
'https://img.nickpic.host/q1YWjF.jpg',
'https://img.nickpic.host/q1YZne.jpg',
'https://img.nickpic.host/q1Yd9X.jpg',
'https://img.nickpic.host/q1HGbb.jpg',
'https://img.nickpic.host/q1HI6f.jpg',
'https://img.nickpic.host/q1HmH6.jpg']
let zuper = dragon[Math.floor(Math.random() * dragon.length)]
dbz = await getBuffer(zuper)
const del =['Aquí tienes 💕🦈','¿Linda foto no?','Pedido entregado 🕊','¿Qué tal está?','¿Te gusta?','Tengo muchas más 😽']
const dra = del[Math.floor(Math.random() * del.length)]
let buttons = [
                    {buttonId: `dbz`, buttonText: {displayText: 'Siguiente'}, type: 1}
                ]
                let buttonMessage = {
                    image: (dbz),
                    caption: (dra),
                    buttons: buttons,
                    headerType: 4
                }
                GojoMdNx.sendMessage(m.chat, buttonMessage)
            }
break

case 'dragonmaid': {
const kann1 =['https://img.nickpic.host/qzZPkc.jpg',
'https://img.nickpic.host/qzZJ5G.jpg',
'https://img.nickpic.host/qzZeZA.jpg',
'https://img.nickpic.host/qzZLMz.jpg',
'https://img.nickpic.host/qzZVNf.jpg',
'https://img.nickpic.host/qzZHrX.jpg',
'https://img.nickpic.host/qzZ9zY.jpg',
'https://img.nickpic.host/qzZ0o6.jpg',
'https://img.nickpic.host/qzZ2Ap.jpg',
'https://img.nickpic.host/qzZNQb.jpg',
'https://img.nickpic.host/qzZWrW.jpg',
'https://img.nickpic.host/qzZZQ1.jpg',
'https://img.nickpic.host/qzZdVj.jpg',
'https://img.nickpic.host/qzdIAn.jpg',
'https://img.nickpic.host/qzdm7s.jpg',
'https://img.nickpic.host/qzdGoJ.jpg',
'https://img.nickpic.host/qzdoZ2.jpg',
'https://img.nickpic.host/qzdv5Q.jpg',
'https://img.nickpic.host/qzdxRx.jpg',
'https://img.nickpic.host/qzdBkN.jpg',
'https://img.nickpic.host/qzdrsO.jpg',
'https://img.nickpic.host/qzdapq.jpg',
'https://img.nickpic.host/qzdsUm.jpg',
'https://img.nickpic.host/qzd3V8.jpg',
'https://img.nickpic.host/qzdjAd.jpg',
'https://img.nickpic.host/qzdl7D.jpg',
'https://img.nickpic.host/qzd5d5.jpg',
'https://img.nickpic.host/qzdc5P.jpg',
'https://img.nickpic.host/qzdqJF.jpg',
'https://img.nickpic.host/qzdAse.jpg',
'https://img.nickpic.host/qzdgRM.jpg',
'https://img.nickpic.host/qzdEUX.jpg',
'https://img.nickpic.host/qzdOfb.jpg',
'https://img.nickpic.host/qzd6pf.jpg',
'https://img.nickpic.host/qzdCE6.jpg',
'https://img.nickpic.host/qzdUdY.jpg',
'https://img.nickpic.host/qzdQ8p.jpg',
'https://img.nickpic.host/qzdiSA.jpg',
'https://img.nickpic.host/qzdn1G.jpg',
'https://img.nickpic.host/qzdtJz.jpg',
'https://img.nickpic.host/qzdR3c.jpg',
'https://img.nickpic.host/qzd1UW.jpg',
'https://img.nickpic.host/qzd4f1.jpg',
'https://img.nickpic.host/qzdwvj.jpg',
'https://img.nickpic.host/qzd78n.jpg',
'https://img.nickpic.host/qzdzEJ.jpg',
'https://img.nickpic.host/qzd8ys.jpg',
'https://img.nickpic.host/qzdNLx.jpg',
'https://img.nickpic.host/qzdYS2.jpg',
'https://img.nickpic.host/qzdH1Q.jpg',
'https://img.nickpic.host/qzdf3N.jpg',
'https://img.nickpic.host/qzd0XO.jpg',
'https://img.nickpic.host/qzd20m.jpg',
'https://img.nickpic.host/qzdev8.jpg',
'https://img.nickpic.host/qzdkOq.jpg',
'https://img.nickpic.host/qzdJ8d.jpg',
'https://img.nickpic.host/qzdLyD.jpg',
'https://img.nickpic.host/qzdTc5.jpg',
'https://img.nickpic.host/qzdW1P.jpg',
'https://img.nickpic.host/qzdZLM.jpg',
'https://img.nickpic.host/qzdyFF.jpg',
'https://img.nickpic.host/qzyGXe.jpg',
'https://img.nickpic.host/qzyI0X.jpg',
'https://img.nickpic.host/qzyoxb.jpg',
'https://img.nickpic.host/qzypOf.jpg',
'https://img.nickpic.host/qzyvK6.jpg',
'https://img.nickpic.host/qzyBGp.jpg',
'https://img.nickpic.host/qzybcY.jpg',
'https://img.nickpic.host/qzyr4A.jpg',
'https://img.nickpic.host/qzyFFz.jpg',
'https://img.nickpic.host/qzysPG.jpg',
'https://img.nickpic.host/qzyaic.jpg',
'https://img.nickpic.host/qzyj0W.jpg',
'https://img.nickpic.host/qzy5x1.jpg',
'https://img.nickpic.host/qzyShj.jpg',
'https://img.nickpic.host/qzycKJ.jpg',
'https://img.nickpic.host/qzyqGn.jpg',
'https://img.nickpic.host/qzyugs.jpg',
'https://img.nickpic.host/qzyA42.jpg',
'https://img.nickpic.host/qzyEPQ.jpg',
'https://img.nickpic.host/qzyhax.jpg',
'https://img.nickpic.host/qzy6iN.jpg',
'https://img.nickpic.host/qzyC2O.jpg',
'https://img.nickpic.host/qzyUBm.jpg',
'https://img.nickpic.host/qzyXh8.jpg',
'https://img.nickpic.host/qzytGd.jpg',
'https://img.nickpic.host/qzyiYq.jpg',
'https://img.nickpic.host/qzyRD5.jpg',
'https://img.nickpic.host/qzyMgD.jpg',
'https://img.nickpic.host/qzy1PP.jpg',
'https://img.nickpic.host/qzywnF.jpg',
'https://img.nickpic.host/qzyDaM.jpg',
'https://img.nickpic.host/qzyz2e.jpg',
'https://img.nickpic.host/qzy8BX.jpg',
'https://img.nickpic.host/qzyK6b.jpg',
'https://img.nickpic.host/qzyYYf.jpg',
'https://img.nickpic.host/qzyNI6.jpg',
'https://img.nickpic.host/qzyVqp.jpg',
'https://img.nickpic.host/qzy9jG.jpg',
'https://img.nickpic.host/qzyfDY.jpg',
'https://img.nickpic.host/qzy0TA.jpg',
'https://img.nickpic.host/qzyenz.jpg',
'https://img.nickpic.host/qzyk9c.jpg',
'https://img.nickpic.host/qzyLBW.jpg',
'https://img.nickpic.host/qzyTHj.jpg',
'https://img.nickpic.host/qzyP61.jpg',
'https://img.nickpic.host/qzyZIJ.jpg',
'https://img.nickpic.host/qzydqn.jpg',
'https://img.nickpic.host/qzyyws.jpg',
'https://img.nickpic.host/q7GGT2.jpg',
'https://img.nickpic.host/q7GmjQ.jpg',
'https://img.nickpic.host/q7GxbO.jpg',
'https://img.nickpic.host/q7Gp9N.jpg',
'https://img.nickpic.host/q7Gotx.jpg',
'https://img.nickpic.host/q7GBCm.jpg',
'https://img.nickpic.host/q7Gsmq.jpg',
'https://img.nickpic.host/q7GbH8.jpg',
'https://img.nickpic.host/q7G3qd.jpg',
'https://img.nickpic.host/q7GFwD.jpg',
'https://img.nickpic.host/q7GljP.jpg',
'https://img.nickpic.host/q7GaW5.jpg',
'https://img.nickpic.host/q7G5tM.jpg',
'https://img.nickpic.host/q7GSeF.jpg',
'https://img.nickpic.host/q7Ggbe.jpg',
'https://img.nickpic.host/q7GqCX.jpg',
'https://img.nickpic.host/q7GuNb.jpg',
'https://img.nickpic.host/q7GEmf.jpg',
'https://img.nickpic.host/q7GOu6.jpg',
'https://img.nickpic.host/q7G6WY.jpg',
'https://img.nickpic.host/q7Ghzp.jpg',
'https://img.nickpic.host/q7GQlA.jpg',
'https://img.nickpic.host/q7GUMG.jpg',
'https://img.nickpic.host/q7GXez.jpg',
'https://img.nickpic.host/q7Gnrc.jpg',
'https://img.nickpic.host/q7GtCW.jpg',
'https://img.nickpic.host/q7GMN1.jpg',
'https://img.nickpic.host/q7G1oj.jpg',
'https://img.nickpic.host/q7G4uJ.jpg',
'https://img.nickpic.host/q7GDzn.jpg',
'https://img.nickpic.host/q7GwZs.jpg',
'https://img.nickpic.host/q7G7l2.jpg',
'https://img.nickpic.host/q7G8MQ.jpg',
'https://img.nickpic.host/q7GKkx.jpg',
'https://img.nickpic.host/q7GNQO.jpg',
'https://img.nickpic.host/q7GHrN.jpg',
'https://img.nickpic.host/q7GVVm.jpg',
'https://img.nickpic.host/q7G0o8.jpg',
'https://img.nickpic.host/q7G2Aq.jpg',
'https://img.nickpic.host/q7G9zd.jpg',
'https://img.nickpic.host/q7GeZD.jpg',
'https://img.nickpic.host/q7GJ55.jpg',
'https://img.nickpic.host/q7GLMP.jpg',
'https://img.nickpic.host/q7GPkM.jpg',
'https://img.nickpic.host/q7GWsF.jpg',
'https://img.nickpic.host/q7GZQe.jpg',
'https://img.nickpic.host/q7GdVX.jpg',
'https://img.nickpic.host/q7IIAf.jpg',
'https://img.nickpic.host/q7IGpb.jpg',
'https://img.nickpic.host/q7Iodp.jpg',
'https://img.nickpic.host/q7Im76.jpg',
'https://img.nickpic.host/q7Iv5Y.jpg',
'https://img.nickpic.host/q7IxRA.jpg',
'https://img.nickpic.host/q7IBJG.jpg',
'https://img.nickpic.host/q7Irsz.jpg',
'https://img.nickpic.host/q7IsUc.jpg',
'https://img.nickpic.host/q7I3VW.jpg',
'https://img.nickpic.host/q7Iap1.jpg',
'https://img.nickpic.host/q7IjEj.jpg',
'https://img.nickpic.host/q7Il7J.jpg',
'https://img.nickpic.host/q7I5dn.jpg',
'https://img.nickpic.host/q7IcSs.jpg',
'https://img.nickpic.host/q7IgR2.jpg',
'https://img.nickpic.host/q7IqJQ.jpg',
'https://img.nickpic.host/q7IA3x.jpg',
'https://img.nickpic.host/q7IEUN.jpg',
'https://img.nickpic.host/q7IOfO.jpg',
'https://img.nickpic.host/q7I6vm.jpg',
'https://img.nickpic.host/q7ICE8.jpg',
'https://img.nickpic.host/q7IQ8q.jpg',
'https://img.nickpic.host/q7IUdd.jpg',
'https://img.nickpic.host/q7IiSD.jpg',
'https://img.nickpic.host/q7In15.jpg',
'https://img.nickpic.host/q7ItJP.jpg',
'https://img.nickpic.host/q7I1XF.jpg',
'https://img.nickpic.host/q7IR3M.jpg',
'https://img.nickpic.host/q7I4fe.jpg',
'https://img.nickpic.host/q7IwvX.jpg',
'https://img.nickpic.host/q7I78f.jpg',
'https://img.nickpic.host/q7IzOb.jpg',
'https://img.nickpic.host/q7I8y6.jpg',
'https://img.nickpic.host/q7IYcp.jpg',
'https://img.nickpic.host/q7IH1Y.jpg',
'https://img.nickpic.host/q7INLA.jpg',
'https://img.nickpic.host/q7IfFG.jpg',
'https://img.nickpic.host/q7I0Xz.jpg',
'https://img.nickpic.host/q7I20c.jpg',
'https://img.nickpic.host/q7IevW.jpg',
'https://img.nickpic.host/q7IkO1.jpg',
'https://img.nickpic.host/q7IJKj.jpg',
'https://img.nickpic.host/q7ILyJ.jpg',
'https://img.nickpic.host/q7ITcn.jpg',
'https://img.nickpic.host/q7IW4s.jpg',
'https://img.nickpic.host/q7IZL2.jpg',
'https://img.nickpic.host/q7IyFQ.jpg',
'https://img.nickpic.host/q7mGix.jpg',
'https://img.nickpic.host/q7mI0N.jpg',
'https://img.nickpic.host/q7mvK8.jpg',
'https://img.nickpic.host/q7moxO.jpg',
'https://img.nickpic.host/q7mphm.jpg',
'https://img.nickpic.host/q7mBGq.jpg',
'https://img.nickpic.host/q7mbcd.jpg',
'https://img.nickpic.host/q7mr4D.jpg',
'https://img.nickpic.host/q7msP5.jpg',
'https://img.nickpic.host/q7mFFP.jpg',
'https://img.nickpic.host/q7maiM.jpg',
'https://img.nickpic.host/q7mj2F.jpg',
'https://img.nickpic.host/q7m5xe.jpg',
'https://img.nickpic.host/q7mShX.jpg',
'https://img.nickpic.host/q7mcYb.jpg',
'https://img.nickpic.host/q7mqGf.jpg',
'https://img.nickpic.host/q7mug6.jpg',
'https://img.nickpic.host/q7mEPY.jpg',
'https://img.nickpic.host/q7mADp.jpg',
'https://img.nickpic.host/q7mhaA.jpg',
'https://img.nickpic.host/q7m6nG.jpg',
'https://img.nickpic.host/q7mC2z.jpg',
'https://img.nickpic.host/q7mUBc.jpg',
'https://img.nickpic.host/q7mXhW.jpg',
'https://img.nickpic.host/q7miY1.jpg',
'https://img.nickpic.host/q7mMgJ.jpg',
'https://img.nickpic.host/q7mtIj.jpg',
'https://img.nickpic.host/q7mRDn.jpg',
'https://img.nickpic.host/q7m1Ts.jpg',
'https://img.nickpic.host/q7mDa2.jpg',
'https://img.nickpic.host/q7mwnQ.jpg',
'https://img.nickpic.host/q7mz9x.jpg',
'https://img.nickpic.host/q7m8BN.jpg',
'https://img.nickpic.host/q7mK6O.jpg',
'https://img.nickpic.host/q7mYHm.jpg',
'https://img.nickpic.host/q7mNI8.jpg',
'https://img.nickpic.host/q7mVqq.jpg',
'https://img.nickpic.host/q7mfDd.jpg',
'https://img.nickpic.host/q7m0TD.jpg',
'https://img.nickpic.host/q7m9j5.jpg',
'https://img.nickpic.host/q7menP.jpg',
'https://img.nickpic.host/q7mLbF.jpg',
'https://img.nickpic.host/q7mk9M.jpg',
'https://img.nickpic.host/q7mP6e.jpg',
'https://img.nickpic.host/q7mTHX.jpg',
'https://img.nickpic.host/q7mZmb.jpg',
'https://img.nickpic.host/q7myw6.jpg',
'https://img.nickpic.host/q7mdqf.jpg',
'https://img.nickpic.host/q7oGWp.jpg',
'https://img.nickpic.host/q7omjY.jpg',
'https://img.nickpic.host/q7ootA.jpg',
'https://img.nickpic.host/q7opeG.jpg',
'https://img.nickpic.host/q7oxbz.jpg',
'https://img.nickpic.host/q7obHW.jpg',
'https://img.nickpic.host/q7oBCc.jpg',
'https://img.nickpic.host/q7osm1.jpg',
'https://img.nickpic.host/q7o3uj.jpg',
'https://img.nickpic.host/q7oFwJ.jpg',
'https://img.nickpic.host/q7oaWn.jpg',
'https://img.nickpic.host/q7olls.jpg',
'https://img.nickpic.host/q7o5t2.jpg',
'https://img.nickpic.host/q7oSeQ.jpg',
'https://img.nickpic.host/q7ogrx.jpg',
'https://img.nickpic.host/q7ouNO.jpg',
'https://img.nickpic.host/q7oqCN.jpg',
'https://img.nickpic.host/q7oEom.jpg',
'https://img.nickpic.host/q7oOu8.jpg',
'https://img.nickpic.host/q7ohzq.jpg',
'https://img.nickpic.host/q7o6Wd.jpg',
'https://img.nickpic.host/q7oQlD.jpg',
'https://img.nickpic.host/q7oUM5.jpg',
'https://img.nickpic.host/q7oXeP.jpg',
'https://img.nickpic.host/q7onrM.jpg',
'https://img.nickpic.host/q7otQF.jpg',
'https://img.nickpic.host/q7oMNe.jpg',
'https://img.nickpic.host/q7o1oX.jpg',
'https://img.nickpic.host/q7o4Ab.jpg',
'https://img.nickpic.host/q7oDzf.jpg',
'https://img.nickpic.host/q7owZ6.jpg',
'https://img.nickpic.host/q7o75p.jpg',
'https://img.nickpic.host/q7o8MY.jpg',
'https://img.nickpic.host/q7oKkA.jpg',
'https://img.nickpic.host/q7oHsG.jpg',
'https://img.nickpic.host/q7oNQz.jpg',
'https://img.nickpic.host/q7oVVc.jpg',
'https://img.nickpic.host/q7o0oW.jpg',
'https://img.nickpic.host/q7o2A1.jpg',
'https://img.nickpic.host/q7o97j.jpg',
'https://img.nickpic.host/q7oeZJ.jpg',
'https://img.nickpic.host/q7oJ5n.jpg',
'https://img.nickpic.host/q7oLRs.jpg',
'https://img.nickpic.host/q7oPk2.jpg',
'https://img.nickpic.host/q7oWsQ.jpg',
'https://img.nickpic.host/q7oZUx.jpg',
'https://img.nickpic.host/q7odVN.jpg',
'https://img.nickpic.host/q7pGpO.jpg',
'https://img.nickpic.host/q7pIEm.jpg',
'https://img.nickpic.host/q7pm78.jpg',
'https://img.nickpic.host/q7podq.jpg',
'https://img.nickpic.host/q7pv5d.jpg',
'https://img.nickpic.host/q7prsP.jpg',
'https://img.nickpic.host/q7pxRD.jpg',
'https://img.nickpic.host/q7pBJ5.jpg',
'https://img.nickpic.host/q7psUM.jpg',
'https://img.nickpic.host/q7p3fF.jpg',
'https://img.nickpic.host/q7pape.jpg',
'https://img.nickpic.host/q7pjEX.jpg',
'https://img.nickpic.host/q7pl8b.jpg',
'https://img.nickpic.host/q7p5df.jpg',
'https://img.nickpic.host/q7pcS6.jpg',
'https://img.nickpic.host/q7pqJY.jpg',
'https://img.nickpic.host/q7pg1p.jpg',
'https://img.nickpic.host/q7pA3A.jpg',
'https://img.nickpic.host/q7pEXG.jpg',
'https://img.nickpic.host/q7pOfz.jpg',
'https://img.nickpic.host/q7p6vc.jpg',
'https://img.nickpic.host/q7pCEW.jpg',
'https://img.nickpic.host/q7pQ81.jpg',
'https://img.nickpic.host/q7pUyj.jpg',
'https://img.nickpic.host/q7piSJ.jpg',
'https://img.nickpic.host/q7pn1n.jpg',
'https://img.nickpic.host/q7ptLs.jpg',
'https://img.nickpic.host/q7pR32.jpg',
'https://img.nickpic.host/q7p1XQ.jpg',
'https://img.nickpic.host/q7p40x.jpg',
'https://img.nickpic.host/q7pwvN.jpg',
'https://img.nickpic.host/q7pzOO.jpg',
'https://img.nickpic.host/q7p7Km.jpg',
'https://img.nickpic.host/q7p8y8.jpg',
'https://img.nickpic.host/q7pYcq.jpg',
'https://img.nickpic.host/q7pH1d.jpg',
'https://img.nickpic.host/q7pNLD.jpg',
'https://img.nickpic.host/q7pfF5.jpg',
'https://img.nickpic.host/q7p0XP.jpg',
'https://img.nickpic.host/q7p20M.jpg',
'https://img.nickpic.host/q7pexF.jpg',
'https://img.nickpic.host/q7pkOe.jpg',
'https://img.nickpic.host/q7pJKX.jpg',
'https://img.nickpic.host/q7pPGb.jpg',
'https://img.nickpic.host/q7pTcf.jpg',
'https://img.nickpic.host/q7pW46.jpg',
'https://img.nickpic.host/q7pZPp.jpg',
'https://img.nickpic.host/q7pyFY.jpg',
'https://img.nickpic.host/q7vGiA.jpg',
'https://img.nickpic.host/q7vI2G.jpg',
'https://img.nickpic.host/q7voxz.jpg',
'https://img.nickpic.host/q7vphc.jpg',
'https://img.nickpic.host/q7vvKW.jpg',
'https://img.nickpic.host/q7vBG1.jpg',
'https://img.nickpic.host/q7vbgj.jpg',
'https://img.nickpic.host/q7vr4J.jpg',
'https://img.nickpic.host/q7vsPn.jpg',
'https://img.nickpic.host/q7vFas.jpg',
'https://img.nickpic.host/q7vai2.jpg',
'https://img.nickpic.host/q7vj2Q.jpg',
'https://img.nickpic.host/q7v5Bx.jpg',
'https://img.nickpic.host/q7vShN.jpg',
'https://img.nickpic.host/q7vcYO.jpg',
'https://img.nickpic.host/q7vqIm.jpg',
'https://img.nickpic.host/q7vug8.jpg',
'https://img.nickpic.host/q7vADq.jpg',
'https://img.nickpic.host/q7vEPd.jpg',
'https://img.nickpic.host/q7vhaD.jpg',
'https://img.nickpic.host/q7v6n5.jpg',
'https://img.nickpic.host/q7vC2P.jpg',
'https://img.nickpic.host/q7vUBM.jpg',
'https://img.nickpic.host/q7vX6F.jpg',
'https://img.nickpic.host/q7viYe.jpg',
'https://img.nickpic.host/q7vtIX.jpg',
'https://img.nickpic.host/q7vMqb.jpg',
'https://img.nickpic.host/q7vRDf.jpg',
'https://img.nickpic.host/q7v1T6.jpg',
'https://img.nickpic.host/q7vDjp.jpg',
'https://img.nickpic.host/q7vwnY.jpg',
'https://img.nickpic.host/q7vz9A.jpg',
'https://img.nickpic.host/q7v8bG.jpg',
'https://img.nickpic.host/q7vK6z.jpg',
'https://img.nickpic.host/q7vYHc.jpg',
'https://img.nickpic.host/q7vNIW.jpg',
'https://img.nickpic.host/q7vVq1.jpg',
'https://img.nickpic.host/q7vfwj.jpg',
'https://img.nickpic.host/q7v0TJ.jpg',
'https://img.nickpic.host/q7v9jn.jpg',
'https://img.nickpic.host/q7vets.jpg',
'https://img.nickpic.host/q7vk92.jpg',
'https://img.nickpic.host/q7vLbQ.jpg',
'https://img.nickpic.host/q7vPCx.jpg',
'https://img.nickpic.host/q7vTHN.jpg',
'https://img.nickpic.host/q7vZmO.jpg',
'https://img.nickpic.host/q7vdum.jpg',
'https://img.nickpic.host/q7vyw8.jpg',
'https://img.nickpic.host/q7xGWq.jpg',
'https://img.nickpic.host/q7xmjd.jpg',
'https://img.nickpic.host/q7xotD.jpg',
'https://img.nickpic.host/q7xpe5.jpg',
'https://img.nickpic.host/q7xxbP.jpg',
'https://img.nickpic.host/q7xBCM.jpg',
'https://img.nickpic.host/q7xbNF.jpg',
'https://img.nickpic.host/q7xsme.jpg',
'https://img.nickpic.host/q7x3uX.jpg',
'https://img.nickpic.host/q7xFzb.jpg',
'https://img.nickpic.host/q7xaWf.jpg',
'https://img.nickpic.host/q7xll6.jpg',
'https://img.nickpic.host/q7x5Mp.jpg',
'https://img.nickpic.host/q7xSeY.jpg',
'https://img.nickpic.host/q7xgrA.jpg',
'https://img.nickpic.host/q7xqQG.jpg',
'https://img.nickpic.host/q7xuNz.jpg',
'https://img.nickpic.host/q7xEoc.jpg',
'https://img.nickpic.host/q7xOuW.jpg',
'https://img.nickpic.host/q7xhz1.jpg',
'https://img.nickpic.host/q7x6Zj.jpg',
'https://img.nickpic.host/q7xQlJ.jpg',
'https://img.nickpic.host/q7xUMn.jpg',
'https://img.nickpic.host/q7xXks.jpg',
'https://img.nickpic.host/q7xnr2.jpg',
'https://img.nickpic.host/q7xtQQ.jpg',
'https://img.nickpic.host/q7xMVx.jpg',
'https://img.nickpic.host/q7x1oN.jpg',
'https://img.nickpic.host/q7x4AO.jpg',
'https://img.nickpic.host/q7xD7m.jpg',
'https://img.nickpic.host/q7xwZ8.jpg',
'https://img.nickpic.host/q7x75q.jpg',
'https://img.nickpic.host/q7x8Md.jpg',
'https://img.nickpic.host/q7xKkD.jpg',
'https://img.nickpic.host/q7xHs5.jpg',
'https://img.nickpic.host/q7xNQP.jpg',
'https://img.nickpic.host/q7xVVM.jpg',
'https://img.nickpic.host/q7x0pF.jpg',
'https://img.nickpic.host/q7x2Ae.jpg',
'https://img.nickpic.host/q7x97X.jpg',
'https://img.nickpic.host/q7xedb.jpg',
'https://img.nickpic.host/q7xJ5f.jpg',
'https://img.nickpic.host/q7xLR6.jpg',
'https://img.nickpic.host/q7xPJp.jpg',
'https://img.nickpic.host/q7xWsY.jpg',
'https://img.nickpic.host/q7xZUA.jpg',
'https://img.nickpic.host/q7xdfG.jpg',
'https://img.nickpic.host/q7BGpz.jpg',
'https://img.nickpic.host/q7BIEc.jpg',
'https://img.nickpic.host/q7Bm7W.jpg',
'https://img.nickpic.host/q7Bod1.jpg',
'https://img.nickpic.host/q7BvSj.jpg',
'https://img.nickpic.host/q7BxRJ.jpg',
'https://img.nickpic.host/q7BBJn.jpg',
'https://img.nickpic.host/q7Br3s.jpg',
'https://img.nickpic.host/q7BsU2.jpg',
'https://img.nickpic.host/q7B3fQ.jpg',
'https://img.nickpic.host/q7Bavx.jpg',
'https://img.nickpic.host/q7BjEN.jpg',
'https://img.nickpic.host/q7Bl8O.jpg',
'https://img.nickpic.host/q7BcS8.jpg',
'https://img.nickpic.host/q7B5ym.jpg',
'https://img.nickpic.host/q7BqJd.jpg',
'https://img.nickpic.host/q7Bg1q.jpg',
'https://img.nickpic.host/q7BA3D.jpg',
'https://img.nickpic.host/q7BEX5.jpg',
'https://img.nickpic.host/q7BOfP.jpg',
'https://img.nickpic.host/q7B6vM.jpg',
'https://img.nickpic.host/q7BCOF.jpg',
'https://img.nickpic.host/q7BQ8e.jpg',
'https://img.nickpic.host/q7BUyX.jpg',
'https://img.nickpic.host/q7Bicb.jpg',
'https://img.nickpic.host/q7Bn1f.jpg',
'https://img.nickpic.host/q7BtL6.jpg',
'https://img.nickpic.host/q7BRFp.jpg',
'https://img.nickpic.host/q7B1XY.jpg',
'https://img.nickpic.host/q7B40A.jpg',
'https://img.nickpic.host/q7BwxG.jpg',
'https://img.nickpic.host/q7BzOz.jpg',
'https://img.nickpic.host/q7B7Kc.jpg',
'https://img.nickpic.host/q7B8yW.jpg',
'https://img.nickpic.host/q7BYc1.jpg',
'https://img.nickpic.host/q7BH4j.jpg',
'https://img.nickpic.host/q7BNLJ.jpg',
'https://img.nickpic.host/q7BfFn.jpg',
'https://img.nickpic.host/q7B0is.jpg',
'https://img.nickpic.host/q7B202.jpg',
'https://img.nickpic.host/q7BexQ.jpg',
'https://img.nickpic.host/q7Bkhx.jpg',
'https://img.nickpic.host/q7BJKN.jpg',
'https://img.nickpic.host/q7BPGO.jpg',
'https://img.nickpic.host/q7BTgm.jpg',
'https://img.nickpic.host/q7BW48.jpg',
'https://img.nickpic.host/q7BZPq.jpg',
'https://img.nickpic.host/q7ByFd.jpg',
'https://img.nickpic.host/q7bGiD.jpg',
'https://img.nickpic.host/q7bI25.jpg',
'https://img.nickpic.host/q7bphM.jpg',
'https://img.nickpic.host/q7boxP.jpg',
'https://img.nickpic.host/q7bvYF.jpg',
'https://img.nickpic.host/q7bBGe.jpg',
'https://img.nickpic.host/q7bbgX.jpg',
'https://img.nickpic.host/q7brDb.jpg',
'https://img.nickpic.host/q7bsPf.jpg',
'https://img.nickpic.host/q7bFa6.jpg',
'https://img.nickpic.host/q7banp.jpg',
'https://img.nickpic.host/q7bj2Y.jpg',
'https://img.nickpic.host/q7b5BA.jpg',
'https://img.nickpic.host/q7bS6G.jpg',
'https://img.nickpic.host/q7bcYz.jpg',
'https://img.nickpic.host/q7bqIc.jpg',
'https://img.nickpic.host/q7bugW.jpg',
'https://img.nickpic.host/q7bETj.jpg',
'https://img.nickpic.host/q7bAD1.jpg',
'https://img.nickpic.host/q7bhaJ.jpg',
'https://img.nickpic.host/q7b6nn.jpg',
'https://img.nickpic.host/q7bX6Q.jpg',
'https://img.nickpic.host/q7bC9s.jpg',
'https://img.nickpic.host/q7bUB2.jpg',
'https://img.nickpic.host/q7biHx.jpg',
'https://img.nickpic.host/q7btIN.jpg',
'https://img.nickpic.host/q7bRwm.jpg',
'https://img.nickpic.host/q7bMqO.jpg',
'https://img.nickpic.host/q7bDjq.jpg',
'https://img.nickpic.host/q7b1T8.jpg',
'https://img.nickpic.host/q7bwnd.jpg',
'https://img.nickpic.host/q7b8b5.jpg',
'https://img.nickpic.host/q7bz9D.jpg',
'https://img.nickpic.host/q7bK6P.jpg',
'https://img.nickpic.host/q7bYHM.jpg',
'https://img.nickpic.host/q7bVqe.jpg',
'https://img.nickpic.host/q7bfwX.jpg',
'https://img.nickpic.host/q7bNmF.jpg',
'https://img.nickpic.host/q7b0Wb.jpg',
'https://img.nickpic.host/q7b9jf.jpg',
'https://img.nickpic.host/q7bet6.jpg',
'https://img.nickpic.host/q7bkep.jpg',
'https://img.nickpic.host/q7bLbY.jpg',
'https://img.nickpic.host/q7bPCA.jpg',
'https://img.nickpic.host/q7bTNG.jpg',
'https://img.nickpic.host/q7bZmz.jpg',
'https://img.nickpic.host/q7bywW.jpg',
'https://img.nickpic.host/q7bduc.jpg',
'https://img.nickpic.host/q7rotJ.jpg',
'https://img.nickpic.host/q7rGW1.jpg',
'https://img.nickpic.host/q7rmlj.jpg',
'https://img.nickpic.host/q7rxrs.jpg',
'https://img.nickpic.host/q7rpen.jpg',
'https://img.nickpic.host/q7rsox.jpg',
'https://img.nickpic.host/q7rBC2.jpg',
'https://img.nickpic.host/q7rbNQ.jpg',
'https://img.nickpic.host/q7rFzO.jpg',
'https://img.nickpic.host/q7r3uN.jpg',
'https://img.nickpic.host/q7raZm.jpg',
'https://img.nickpic.host/q7rll8.jpg',
'https://img.nickpic.host/q7r5Mq.jpg',
'https://img.nickpic.host/q7rSed.jpg',
'https://img.nickpic.host/q7rgrD.jpg',
'https://img.nickpic.host/q7rqQ5.jpg',
'https://img.nickpic.host/q73et8.jpg']
let elm = kann1[Math.floor(Math.random() * kann1.length)]
dragonmaid = await getBuffer(elm)
const drdecir =['Aquí tienes 💕🦈','¿Linda foto no?','Pedido entregado 🕊','¿Qué tal está?','¿Te gusta?','Tengo muchas más 😽']
const drfrase = drdecir[Math.floor(Math.random() * drdecir.length)]
let buttons = [
                    {buttonId: `dragonmaid`, buttonText: {displayText: 'Siguiente'}, type: 1}
                ]
                let buttonMessage = {
                    image: (dragonmaid),
                    caption: (drfrase),
                    buttons: buttons,
                    headerType: 4
                }
                GojoMdNx.sendMessage(m.chat, buttonMessage)
            }
break

case 'rezero': {
const emili =['https://img.nickpic.host/q4YjZA.jpg',
'https://img.nickpic.host/q4YazY.jpg',
'https://img.nickpic.host/q4YFAp.jpg',
'https://img.nickpic.host/q4Y3o6.jpg',
'https://img.nickpic.host/q4YrNf.jpg',
'https://img.nickpic.host/q4YBrX.jpg',
'https://img.nickpic.host/q4YbQb.jpg',
'https://img.nickpic.host/q4Yvee.jpg',
'https://img.nickpic.host/q4YpMF.jpg',
'https://img.nickpic.host/q4YolM.jpg',
'https://img.nickpic.host/q4Y55G.jpg',
'https://img.nickpic.host/q4Yckc.jpg',
'https://img.nickpic.host/q4YSMz.jpg',
'https://img.nickpic.host/q4YqrW.jpg',
'https://img.nickpic.host/q4YuQ1.jpg',
'https://img.nickpic.host/q4YhAn.jpg',
'https://img.nickpic.host/q4YOoJ.jpg',
'https://img.nickpic.host/q4YAVj.jpg',
'https://img.nickpic.host/q4Y67s.jpg',
'https://img.nickpic.host/q4YCZ2.jpg',
'https://img.nickpic.host/q4YU5Q.jpg',
'https://img.nickpic.host/q4YXRx.jpg',
'https://img.nickpic.host/q4YikN.jpg',
'https://img.nickpic.host/q4YtsO.jpg',
'https://img.nickpic.host/q4YMUm.jpg',
'https://img.nickpic.host/q4YRV8.jpg',
'https://img.nickpic.host/q4Y4pq.jpg',
'https://img.nickpic.host/q4YDAd.jpg',
'https://img.nickpic.host/q4Yw7D.jpg',
'https://img.nickpic.host/q4Yzd5.jpg',
'https://img.nickpic.host/q4Y85P.jpg',
'https://img.nickpic.host/q4YKRM.jpg',
'https://img.nickpic.host/q4YYJF.jpg',
'https://img.nickpic.host/q4YNse.jpg',
'https://img.nickpic.host/q4YVUX.jpg',
'https://img.nickpic.host/q4Yffb.jpg',
'https://img.nickpic.host/q4Y2pf.jpg',
'https://img.nickpic.host/q4Y9E6.jpg',
'https://img.nickpic.host/q4Ye8p.jpg',
'https://img.nickpic.host/q4YkdY.jpg',
'https://img.nickpic.host/q4YLSA.jpg',
'https://img.nickpic.host/q4YP1G.jpg',
'https://img.nickpic.host/q4YTJz.jpg',
'https://img.nickpic.host/q4HIvj.jpg',
'https://img.nickpic.host/q4YZ3c.jpg',
'https://img.nickpic.host/q4YdUW.jpg',
'https://img.nickpic.host/q4Yyf1.jpg',
'https://img.nickpic.host/q4HmEJ.jpg',
'https://img.nickpic.host/q4Ho8n.jpg',
'https://img.nickpic.host/q4Hpys.jpg',
'https://img.nickpic.host/q4HxS2.jpg',
'https://img.nickpic.host/q4HB1Q.jpg',
'https://img.nickpic.host/q4HbLx.jpg',
'https://img.nickpic.host/q4Hs3N.jpg',
'https://img.nickpic.host/q4H3XO.jpg',
'https://img.nickpic.host/q4HF0m.jpg',
'https://img.nickpic.host/q4Hjv8.jpg',
'https://img.nickpic.host/q4H58d.jpg',
'https://img.nickpic.host/q4HlOq.jpg',
'https://img.nickpic.host/q4HSyD.jpg',
'https://img.nickpic.host/q4Hgc5.jpg',
'https://img.nickpic.host/q4Hq1P.jpg',
'https://img.nickpic.host/q4HuLM.jpg',
'https://img.nickpic.host/q4HEFF.jpg',
'https://img.nickpic.host/q4HOXe.jpg',
'https://img.nickpic.host/q4Hh0X.jpg',
'https://img.nickpic.host/q4HCxb.jpg',
'https://img.nickpic.host/q4HQOf.jpg',
'https://img.nickpic.host/q4HUK6.jpg',
'https://img.nickpic.host/q4HiGp.jpg',
'https://img.nickpic.host/q4HncY.jpg',
'https://img.nickpic.host/q4Ht4A.jpg',
'https://img.nickpic.host/q4HMPG.jpg',
'https://img.nickpic.host/q4H1Fz.jpg',
'https://img.nickpic.host/q4H4ic.jpg',
'https://img.nickpic.host/q4HD0W.jpg',
'https://img.nickpic.host/q4H7hj.jpg',
'https://img.nickpic.host/q4Hzx1.jpg',
'https://img.nickpic.host/q4H8KJ.jpg',
'https://img.nickpic.host/q4HYGn.jpg',
'https://img.nickpic.host/q4HHgs.jpg',
'https://img.nickpic.host/q4HN42.jpg',
'https://img.nickpic.host/q4HVPQ.jpg',
'https://img.nickpic.host/q4H0ax.jpg',
'https://img.nickpic.host/q4H2iN.jpg',
'https://img.nickpic.host/q4H92O.jpg',
'https://img.nickpic.host/q4HkBm.jpg',
'https://img.nickpic.host/q4HJh8.jpg',
'https://img.nickpic.host/q4HLYq.jpg',
'https://img.nickpic.host/q4HTGd.jpg',
'https://img.nickpic.host/q4HWgD.jpg',
'https://img.nickpic.host/q4HZD5.jpg',
'https://img.nickpic.host/q4HdPP.jpg',
'https://img.nickpic.host/q4NGaM.jpg',
'https://img.nickpic.host/q4NInF.jpg',
'https://img.nickpic.host/q4NpBX.jpg',
'https://img.nickpic.host/q4Nm2e.jpg',
'https://img.nickpic.host/q4Nv6b.jpg',
'https://img.nickpic.host/q4NxYf.jpg',
'https://img.nickpic.host/q4NbI6.jpg',
'https://img.nickpic.host/q4Nrqp.jpg',
'https://img.nickpic.host/q4NsDY.jpg',
'https://img.nickpic.host/q4NajG.jpg',
'https://img.nickpic.host/q4N3TA.jpg',
'https://img.nickpic.host/q4Njnz.jpg',
'https://img.nickpic.host/q4Nl9c.jpg',
'https://img.nickpic.host/q4NSBW.jpg',
'https://img.nickpic.host/q4Nc61.jpg',
'https://img.nickpic.host/q4NgHj.jpg',
'https://img.nickpic.host/q4NOT2.jpg',
'https://img.nickpic.host/q4NuIJ.jpg',
'https://img.nickpic.host/q4NAqn.jpg',
'https://img.nickpic.host/q4NEws.jpg',
'https://img.nickpic.host/q4N6jQ.jpg',
'https://img.nickpic.host/q4NCtx.jpg',
'https://img.nickpic.host/q4NQ9N.jpg',
'https://img.nickpic.host/q4NXbO.jpg',
'https://img.nickpic.host/q4NiCm.jpg',
'https://img.nickpic.host/q4NMmq.jpg',
'https://img.nickpic.host/q4NnH8.jpg',
'https://img.nickpic.host/q4NRqd.jpg',
'https://img.nickpic.host/q4N1wD.jpg',
'https://img.nickpic.host/q4N4W5.jpg',
'https://img.nickpic.host/q4NwjP.jpg',
'https://img.nickpic.host/q4NztM.jpg',
'https://img.nickpic.host/q4NKbe.jpg',
'https://img.nickpic.host/q4NYCX.jpg',
'https://img.nickpic.host/q4N7eF.jpg',
'https://img.nickpic.host/q4NHNb.jpg',
'https://img.nickpic.host/q4NVmf.jpg',
'https://img.nickpic.host/q4Nfu6.jpg',
'https://img.nickpic.host/q4N0zp.jpg',
'https://img.nickpic.host/q4N2WY.jpg',
'https://img.nickpic.host/q4NelA.jpg',
'https://img.nickpic.host/q4NJez.jpg',
'https://img.nickpic.host/q4NkMG.jpg',
'https://img.nickpic.host/q4NTCW.jpg',
'https://img.nickpic.host/q4NPrc.jpg',
'https://img.nickpic.host/q4NWN1.jpg',
'https://img.nickpic.host/q4NyuJ.jpg',
'https://img.nickpic.host/q4Ndoj.jpg',
'https://img.nickpic.host/q4VGzn.jpg',
'https://img.nickpic.host/q4VIZs.jpg',
'https://img.nickpic.host/q4VpMQ.jpg',
'https://img.nickpic.host/q4Vol2.jpg',
'https://img.nickpic.host/q4Vvkx.jpg',
'https://img.nickpic.host/q4VBrN.jpg',
'https://img.nickpic.host/q4VbQO.jpg',
'https://img.nickpic.host/q4VrVm.jpg',
'https://img.nickpic.host/q4VFAq.jpg',
'https://img.nickpic.host/q4V3o8.jpg',
'https://img.nickpic.host/q4Vazd.jpg',
'https://img.nickpic.host/q4VjZD.jpg',
'https://img.nickpic.host/q4V555.jpg',
'https://img.nickpic.host/q4VSMP.jpg',
'https://img.nickpic.host/q4VckM.jpg',
'https://img.nickpic.host/q4VAVX.jpg',
'https://img.nickpic.host/q4V4p1.jpg',
'https://img.nickpic.host/q4VOpb.jpg',
'https://img.nickpic.host/q4VqsF.jpg',
'https://img.nickpic.host/q4VuQe.jpg',
'https://img.nickpic.host/q4VhAf.jpg',
'https://img.nickpic.host/q4V676.jpg',
'https://img.nickpic.host/q4VCdp.jpg',
'https://img.nickpic.host/q4VU5Y.jpg',
'https://img.nickpic.host/q4VXRA.jpg',
'https://img.nickpic.host/q4ViJG.jpg',
'https://img.nickpic.host/q4Vtsz.jpg',
'https://img.nickpic.host/q4VMUc.jpg',
'https://img.nickpic.host/q4VRVW.jpg',
'https://img.nickpic.host/q4VDEj.jpg',
'https://img.nickpic.host/q4Vw7J.jpg',
'https://img.nickpic.host/q4Vzdn.jpg',
'https://img.nickpic.host/q4V8Ss.jpg',
'https://img.nickpic.host/q4VKR2.jpg',
'https://img.nickpic.host/q4VVUN.jpg',
'https://img.nickpic.host/q4VYJQ.jpg',
'https://img.nickpic.host/q4VN3x.jpg',
'https://img.nickpic.host/q4VffO.jpg',
'https://img.nickpic.host/q4V2vm.jpg',
'https://img.nickpic.host/q4Ve8q.jpg',
'https://img.nickpic.host/q4V9E8.jpg',
'https://img.nickpic.host/q4Vkdd.jpg',
'https://img.nickpic.host/q4VTJP.jpg',
'https://img.nickpic.host/q4VLSD.jpg',
'https://img.nickpic.host/q4VP15.jpg',
'https://img.nickpic.host/q4VZ3M.jpg',
'https://img.nickpic.host/q4VdXF.jpg',
'https://img.nickpic.host/q4fIvX.jpg',
'https://img.nickpic.host/q4Vyfe.jpg',
'https://img.nickpic.host/q4fo8f.jpg',
'https://img.nickpic.host/q4fmOb.jpg',
'https://img.nickpic.host/q4fpy6.jpg',
'https://img.nickpic.host/q4fxcp.jpg',
'https://img.nickpic.host/q4fB1Y.jpg',
'https://img.nickpic.host/q4fsFG.jpg',
'https://img.nickpic.host/q4fF0c.jpg',
'https://img.nickpic.host/q4fbLA.jpg',
'https://img.nickpic.host/q4f3Xz.jpg',
'https://img.nickpic.host/q4flO1.jpg',
'https://img.nickpic.host/q4fjvW.jpg',
'https://img.nickpic.host/q4fgcn.jpg',
'https://img.nickpic.host/q4f5Kj.jpg',
'https://img.nickpic.host/q4fSyJ.jpg',
'https://img.nickpic.host/q4fq4s.jpg',
'https://img.nickpic.host/q4fuL2.jpg',
'https://img.nickpic.host/q4fEFQ.jpg',
'https://img.nickpic.host/q4fOix.jpg',
'https://img.nickpic.host/q4fh0N.jpg',
'https://img.nickpic.host/q4fCxO.jpg',
'https://img.nickpic.host/q4fUK8.jpg',
'https://img.nickpic.host/q4fiGq.jpg',
'https://img.nickpic.host/q4fQhm.jpg',
'https://img.nickpic.host/q4fncd.jpg',
'https://img.nickpic.host/q4ft4D.jpg',
'https://img.nickpic.host/q4f1FP.jpg',
'https://img.nickpic.host/q4fMP5.jpg',
'https://img.nickpic.host/q4f4iM.jpg',
'https://img.nickpic.host/q4fD2F.jpg',
'https://img.nickpic.host/q4fzxe.jpg',
'https://img.nickpic.host/q4f8Yb.jpg',
'https://img.nickpic.host/q4f7hX.jpg',
'https://img.nickpic.host/q4fYGf.jpg',
'https://img.nickpic.host/q4fHg6.jpg',
'https://img.nickpic.host/q4fNDp.jpg',
'https://img.nickpic.host/q4fVPY.jpg',
'https://img.nickpic.host/q4f0aA.jpg',
'https://img.nickpic.host/q4f2nG.jpg',
'https://img.nickpic.host/q4fJhW.jpg',
'https://img.nickpic.host/q4f92z.jpg',
'https://img.nickpic.host/q4fkBc.jpg',
'https://img.nickpic.host/q4fTIj.jpg',
'https://img.nickpic.host/q4fLY1.jpg',
'https://img.nickpic.host/q4fWgJ.jpg',
'https://img.nickpic.host/q4fZDn.jpg',
'https://img.nickpic.host/q4fdTs.jpg',
'https://img.nickpic.host/q40InQ.jpg',
'https://img.nickpic.host/q40Ga2.jpg',
'https://img.nickpic.host/q40m9x.jpg',
'https://img.nickpic.host/q40pBN.jpg',
'https://img.nickpic.host/q40xHm.jpg',
'https://img.nickpic.host/q40v6O.jpg',
'https://img.nickpic.host/q40bI8.jpg',
'https://img.nickpic.host/q40rqq.jpg',
'https://img.nickpic.host/q40sDd.jpg',
'https://img.nickpic.host/q40aj5.jpg',
'https://img.nickpic.host/q403TD.jpg',
'https://img.nickpic.host/q40jnP.jpg',
'https://img.nickpic.host/q40l9M.jpg',
'https://img.nickpic.host/q40SbF.jpg',
'https://img.nickpic.host/q40gHX.jpg',
'https://img.nickpic.host/q40c6e.jpg',
'https://img.nickpic.host/q40umb.jpg',
'https://img.nickpic.host/q40Aqf.jpg',
'https://img.nickpic.host/q40Ew6.jpg',
'https://img.nickpic.host/q406jY.jpg',
'https://img.nickpic.host/q40OWp.jpg',
'https://img.nickpic.host/q40CtA.jpg',
'https://img.nickpic.host/q40QeG.jpg',
'https://img.nickpic.host/q40Xbz.jpg',
'https://img.nickpic.host/q40iCc.jpg',
'https://img.nickpic.host/q40nHW.jpg',
'https://img.nickpic.host/q40Mm1.jpg',
'https://img.nickpic.host/q40Ruj.jpg',
'https://img.nickpic.host/q40zt2.jpg',
'https://img.nickpic.host/q401wJ.jpg',
'https://img.nickpic.host/q404Wn.jpg',
'https://img.nickpic.host/q40wls.jpg',
'https://img.nickpic.host/q407eQ.jpg',
'https://img.nickpic.host/q40Krx.jpg',
'https://img.nickpic.host/q40HNO.jpg',
'https://img.nickpic.host/q40Vom.jpg',
'https://img.nickpic.host/q40YCN.jpg',
'https://img.nickpic.host/q40fu8.jpg',
'https://img.nickpic.host/q402Wd.jpg',
'https://img.nickpic.host/q400zq.jpg',
'https://img.nickpic.host/q40elD.jpg',
'https://img.nickpic.host/q40kM5.jpg',
'https://img.nickpic.host/q40JeP.jpg',
'https://img.nickpic.host/q40PrM.jpg',
'https://img.nickpic.host/q42IZ6.jpg',
'https://img.nickpic.host/q40TQF.jpg',
'https://img.nickpic.host/q40WNe.jpg',
'https://img.nickpic.host/q40doX.jpg',
'https://img.nickpic.host/q40yAb.jpg',
'https://img.nickpic.host/q42Gzf.jpg',
'https://img.nickpic.host/q42pMY.jpg',
'https://img.nickpic.host/q42o5p.jpg',
'https://img.nickpic.host/q42BsG.jpg',
'https://img.nickpic.host/q42vkA.jpg',
'https://img.nickpic.host/q42bQz.jpg',
'https://img.nickpic.host/q42rVc.jpg',
'https://img.nickpic.host/q423oW.jpg',
'https://img.nickpic.host/q42a7j.jpg',
'https://img.nickpic.host/q42FA1.jpg',
'https://img.nickpic.host/q42jZJ.jpg',
'https://img.nickpic.host/q4255n.jpg',
'https://img.nickpic.host/q42ck2.jpg',
'https://img.nickpic.host/q42SRs.jpg',
'https://img.nickpic.host/q42qsQ.jpg',
'https://img.nickpic.host/q42uUx.jpg',
'https://img.nickpic.host/q42OpO.jpg',
'https://img.nickpic.host/q42AVN.jpg',
'https://img.nickpic.host/q42hEm.jpg',
'https://img.nickpic.host/q42678.jpg',
'https://img.nickpic.host/q42Cdq.jpg',
'https://img.nickpic.host/q42U5d.jpg',
'https://img.nickpic.host/q42XRD.jpg',
'https://img.nickpic.host/q42MUM.jpg',
'https://img.nickpic.host/q42iJ5.jpg',
'https://img.nickpic.host/q42tsP.jpg',
'https://img.nickpic.host/q42RfF.jpg',
'https://img.nickpic.host/q424pe.jpg',
'https://img.nickpic.host/q42DEX.jpg',
'https://img.nickpic.host/q42w8b.jpg',
'https://img.nickpic.host/q42zdf.jpg',
'https://img.nickpic.host/q428S6.jpg',
'https://img.nickpic.host/q42K1p.jpg',
'https://img.nickpic.host/q42YJY.jpg',
'https://img.nickpic.host/q42ffz.jpg',
'https://img.nickpic.host/q42N3A.jpg',
'https://img.nickpic.host/q42VXG.jpg',
'https://img.nickpic.host/q422vc.jpg',
'https://img.nickpic.host/q42e81.jpg',
'https://img.nickpic.host/q42P1n.jpg',
'https://img.nickpic.host/q429EW.jpg',
'https://img.nickpic.host/q42kyj.jpg',
'https://img.nickpic.host/q42LSJ.jpg',
'https://img.nickpic.host/q42TLs.jpg',
'https://img.nickpic.host/q42dXQ.jpg',
'https://img.nickpic.host/q49IvN.jpg',
'https://img.nickpic.host/q42y0x.jpg',
'https://img.nickpic.host/q49mOO.jpg',
'https://img.nickpic.host/q49oKm.jpg',
'https://img.nickpic.host/q49py8.jpg',
'https://img.nickpic.host/q49xcq.jpg',
'https://img.nickpic.host/q49B1d.jpg',
'https://img.nickpic.host/q49bLD.jpg',
'https://img.nickpic.host/q49sF5.jpg',
'https://img.nickpic.host/q493XP.jpg',
'https://img.nickpic.host/q49F0M.jpg',
'https://img.nickpic.host/q49jxF.jpg',
'https://img.nickpic.host/q49lOe.jpg',
'https://img.nickpic.host/q495KX.jpg',
'https://img.nickpic.host/q49cGb.jpg',
'https://img.nickpic.host/q49gcf.jpg',
'https://img.nickpic.host/q49q46.jpg',
'https://img.nickpic.host/q49uPp.jpg',
'https://img.nickpic.host/q49EFY.jpg',
'https://img.nickpic.host/q49h2G.jpg',
'https://img.nickpic.host/q49OiA.jpg',
'https://img.nickpic.host/q49Qhc.jpg',
'https://img.nickpic.host/q49Cxz.jpg',
'https://img.nickpic.host/q49UKW.jpg',
'https://img.nickpic.host/q49iG1.jpg',
'https://img.nickpic.host/q49MPn.jpg',
'https://img.nickpic.host/q494i2.jpg',
'https://img.nickpic.host/q49ngj.jpg',
'https://img.nickpic.host/q49t4J.jpg',
'https://img.nickpic.host/q491as.jpg',
'https://img.nickpic.host/q49D2Q.jpg',
'https://img.nickpic.host/q49zBx.jpg',
'https://img.nickpic.host/q498YO.jpg',
'https://img.nickpic.host/q497hN.jpg',
'https://img.nickpic.host/q49YIm.jpg',
'https://img.nickpic.host/q49NDq.jpg',
'https://img.nickpic.host/q49Hg8.jpg',
'https://img.nickpic.host/q490aD.jpg',
'https://img.nickpic.host/q49VPd.jpg',
'https://img.nickpic.host/q492n5.jpg',
'https://img.nickpic.host/q4992P.jpg',
'https://img.nickpic.host/q49kBM.jpg',
'https://img.nickpic.host/q49LYe.jpg',
'https://img.nickpic.host/q49J6F.jpg',
'https://img.nickpic.host/q49TIX.jpg',
'https://img.nickpic.host/q49Wqb.jpg',
'https://img.nickpic.host/q4eGjp.jpg',
'https://img.nickpic.host/q49ZDf.jpg',
'https://img.nickpic.host/q49dT6.jpg',
'https://img.nickpic.host/q4eInY.jpg',
'https://img.nickpic.host/q4em9A.jpg',
'https://img.nickpic.host/q4ev6z.jpg',
'https://img.nickpic.host/q4epbG.jpg',
'https://img.nickpic.host/q4exHc.jpg',
'https://img.nickpic.host/q4ebIW.jpg',
'https://img.nickpic.host/q4eswj.jpg',
'https://img.nickpic.host/q4erq1.jpg',
'https://img.nickpic.host/q4eajn.jpg',
'https://img.nickpic.host/q4e3TJ.jpg',
'https://img.nickpic.host/q4ejts.jpg',
'https://img.nickpic.host/q4eSbQ.jpg',
'https://img.nickpic.host/q4el92.jpg',
'https://img.nickpic.host/q4ecCx.jpg',
'https://img.nickpic.host/q4egHN.jpg',
'https://img.nickpic.host/q4eumO.jpg',
'https://img.nickpic.host/q4eAum.jpg',
'https://img.nickpic.host/q4eEw8.jpg',
'https://img.nickpic.host/q4e6jd.jpg',
'https://img.nickpic.host/q4eOWq.jpg',
'https://img.nickpic.host/q4eCtD.jpg',
'https://img.nickpic.host/q4eQe5.jpg',
'https://img.nickpic.host/q4eXbP.jpg',
'https://img.nickpic.host/q4eiCM.jpg',
'https://img.nickpic.host/q4enNF.jpg',
'https://img.nickpic.host/q4eMme.jpg',
'https://img.nickpic.host/q4eRuX.jpg',
'https://img.nickpic.host/q4e1zb.jpg',
'https://img.nickpic.host/q4e4Wf.jpg',
'https://img.nickpic.host/q4ewl6.jpg',
'https://img.nickpic.host/q4ezMp.jpg',
'https://img.nickpic.host/q4e7eY.jpg',
'https://img.nickpic.host/q4eKrA.jpg',
'https://img.nickpic.host/q4eYQG.jpg',
'https://img.nickpic.host/q4eHNz.jpg',
'https://img.nickpic.host/q4eVoc.jpg',
'https://img.nickpic.host/q4efuW.jpg',
'https://img.nickpic.host/q4e0z1.jpg',
'https://img.nickpic.host/q4e2Zj.jpg',
'https://img.nickpic.host/q4eelJ.jpg',
'https://img.nickpic.host/q4ekMn.jpg',
'https://img.nickpic.host/q4ePr2.jpg',
'https://img.nickpic.host/q4eJks.jpg',
'https://img.nickpic.host/q4eTQQ.jpg',
'https://img.nickpic.host/q4edoN.jpg',
'https://img.nickpic.host/q4eWVx.jpg',
'https://img.nickpic.host/q4kG7m.jpg',
'https://img.nickpic.host/q4eyAO.jpg',
'https://img.nickpic.host/q4kIZ8.jpg',
'https://img.nickpic.host/q4kpMd.jpg',
'https://img.nickpic.host/q4ko5q.jpg',
'https://img.nickpic.host/q4kBs5.jpg',
'https://img.nickpic.host/q4kvkD.jpg',
'https://img.nickpic.host/q4kbQP.jpg',
'https://img.nickpic.host/q4k3pF.jpg',
'https://img.nickpic.host/q4krVM.jpg',
'https://img.nickpic.host/q4ka7X.jpg',
'https://img.nickpic.host/q4kFAe.jpg',
'https://img.nickpic.host/q4k55f.jpg',
'https://img.nickpic.host/q4kjdb.jpg',
'https://img.nickpic.host/q4kSR6.jpg',
'https://img.nickpic.host/q4kcJp.jpg',
'https://img.nickpic.host/q4kqsY.jpg',
'https://img.nickpic.host/q4kuUA.jpg',
'https://img.nickpic.host/q4kAfG.jpg',
'https://img.nickpic.host/q4kOpz.jpg',
'https://img.nickpic.host/q4k67W.jpg',
'https://img.nickpic.host/q4khEc.jpg',
'https://img.nickpic.host/q4kCd1.jpg',
'https://img.nickpic.host/q4kUSj.jpg',
'https://img.nickpic.host/q4kXRJ.jpg',
'https://img.nickpic.host/q4kiJn.jpg',
'https://img.nickpic.host/q4kt3s.jpg',
'https://img.nickpic.host/q4kMU2.jpg',
'https://img.nickpic.host/q4k4vx.jpg',
'https://img.nickpic.host/q4kRfQ.jpg',
'https://img.nickpic.host/q4kDEN.jpg',
'https://img.nickpic.host/q4kw8O.jpg',
'https://img.nickpic.host/q4kzym.jpg',
'https://img.nickpic.host/q4k8S8.jpg',
'https://img.nickpic.host/q4kK1q.jpg',
'https://img.nickpic.host/q4kYJd.jpg',
'https://img.nickpic.host/q4kN3D.jpg',
'https://img.nickpic.host/q4kVX5.jpg',
'https://img.nickpic.host/q4kffP.jpg',
'https://img.nickpic.host/q4k2vM.jpg',
'https://img.nickpic.host/q4k9OF.jpg',
'https://img.nickpic.host/q4ke8e.jpg',
'https://img.nickpic.host/q4kkyX.jpg',
'https://img.nickpic.host/q4kLcb.jpg',
'https://img.nickpic.host/q4kP1f.jpg',
'https://img.nickpic.host/q4kTL6.jpg',
'https://img.nickpic.host/q4kZFp.jpg',
'https://img.nickpic.host/q4kdXY.jpg',
'https://img.nickpic.host/q4ky0A.jpg',
'https://img.nickpic.host/q4JIxG.jpg',
'https://img.nickpic.host/q4JmOz.jpg',
'https://img.nickpic.host/q4JoKc.jpg',
'https://img.nickpic.host/q4JpyW.jpg',
'https://img.nickpic.host/q4Jxc1.jpg',
'https://img.nickpic.host/q4JB4j.jpg',
'https://img.nickpic.host/q4JbLJ.jpg',
'https://img.nickpic.host/q4JsFn.jpg',
'https://img.nickpic.host/q4J3is.jpg',
'https://img.nickpic.host/q4JjxQ.jpg',
'https://img.nickpic.host/q4JF02.jpg',
'https://img.nickpic.host/q4Jlhx.jpg',
'https://img.nickpic.host/q4J5KN.jpg',
'https://img.nickpic.host/q4JcGO.jpg',
'https://img.nickpic.host/q4Jq48.jpg',
'https://img.nickpic.host/q4Jggm.jpg',
'https://img.nickpic.host/q4JuPq.jpg',
'https://img.nickpic.host/q4JEFd.jpg',
'https://img.nickpic.host/q4JOiD.jpg',
'https://img.nickpic.host/q4JQhM.jpg',
'https://img.nickpic.host/q4Jh25.jpg',
'https://img.nickpic.host/q4JCxP.jpg',
'https://img.nickpic.host/q4JUYF.jpg',
'https://img.nickpic.host/q4JiGe.jpg',
'https://img.nickpic.host/q4JtDb.jpg',
'https://img.nickpic.host/q4JngX.jpg',
'https://img.nickpic.host/q4JMPf.jpg',
'https://img.nickpic.host/q4J1a6.jpg',
'https://img.nickpic.host/q4J4np.jpg',
'https://img.nickpic.host/q4JD2Y.jpg',
'https://img.nickpic.host/q4JzBA.jpg',
'https://img.nickpic.host/q4J76G.jpg',
'https://img.nickpic.host/q4JND1.jpg',
'https://img.nickpic.host/q4JYIc.jpg',
'https://img.nickpic.host/q4J8Yz.jpg',
'https://img.nickpic.host/q4JHgW.jpg',
'https://img.nickpic.host/q4JVTj.jpg',
'https://img.nickpic.host/q4J2nn.jpg',
'https://img.nickpic.host/q4J0aJ.jpg',
'https://img.nickpic.host/q4J99s.jpg',
'https://img.nickpic.host/q4JkB2.jpg',
'https://img.nickpic.host/q4JJ6Q.jpg',
'https://img.nickpic.host/q4JTIN.jpg',
'https://img.nickpic.host/q4JLHx.jpg',
'https://img.nickpic.host/q4JWqO.jpg',
'https://img.nickpic.host/q4JZwm.jpg',
'https://img.nickpic.host/q4JdT8.jpg',
'https://img.nickpic.host/q4LGjq.jpg',
'https://img.nickpic.host/q4LInd.jpg',
'https://img.nickpic.host/q4Lpb5.jpg',
'https://img.nickpic.host/q4Lm9D.jpg',
'https://img.nickpic.host/q4Lv6P.jpg',
'https://img.nickpic.host/q4LxHM.jpg',
'https://img.nickpic.host/q4LbmF.jpg',
'https://img.nickpic.host/q4Lrqe.jpg',
'https://img.nickpic.host/q4LswX.jpg',
'https://img.nickpic.host/q4L3Wb.jpg',
'https://img.nickpic.host/q4Lajf.jpg',
'https://img.nickpic.host/q4Ljt6.jpg',
'https://img.nickpic.host/q4Llep.jpg',
'https://img.nickpic.host/q4LSbY.jpg',
'https://img.nickpic.host/q4LgNG.jpg',
'https://img.nickpic.host/q4LcCA.jpg',
'https://img.nickpic.host/q4Lumz.jpg',
'https://img.nickpic.host/q4LAuc.jpg',
'https://img.nickpic.host/q4LEwW.jpg',
'https://img.nickpic.host/q4LOW1.jpg',
'https://img.nickpic.host/q4L6lj.jpg',
'https://img.nickpic.host/q4LCtJ.jpg',
'https://img.nickpic.host/q4LQen.jpg',
'https://img.nickpic.host/q4LXrs.jpg',
'https://img.nickpic.host/q4LiC2.jpg',
'https://img.nickpic.host/q4LnNQ.jpg',
'https://img.nickpic.host/q4LMox.jpg',
'https://img.nickpic.host/q4LRuN.jpg',
'https://img.nickpic.host/q4L1zO.jpg',
'https://img.nickpic.host/q4L4Zm.jpg',
'https://img.nickpic.host/q4Lwl8.jpg',
'https://img.nickpic.host/q4LzMq.jpg',
'https://img.nickpic.host/q4L7ed.jpg',
'https://img.nickpic.host/q4LYQ5.jpg',
'https://img.nickpic.host/q4LKrD.jpg',
'https://img.nickpic.host/q4LHNP.jpg',
'https://img.nickpic.host/q4LVoM.jpg',
'https://img.nickpic.host/q4LfAF.jpg',
'https://img.nickpic.host/q4L0ze.jpg',
'https://img.nickpic.host/q4L2ZX.jpg',
'https://img.nickpic.host/q4Le5b.jpg',
'https://img.nickpic.host/q4LkMf.jpg',
'https://img.nickpic.host/q4LJk6.jpg',
'https://img.nickpic.host/q4LWVA.jpg',
'https://img.nickpic.host/q4LPsp.jpg',
'https://img.nickpic.host/q4LTQY.jpg',
'https://img.nickpic.host/q4LyAz.jpg',
'https://img.nickpic.host/q4LdpG.jpg',
'https://img.nickpic.host/q4PIZW.jpg',
'https://img.nickpic.host/q4PG7c.jpg',
'https://img.nickpic.host/q4Po51.jpg',
'https://img.nickpic.host/q4PvkJ.jpg',
'https://img.nickpic.host/q4PbUs.jpg',
'https://img.nickpic.host/q4PpRj.jpg',
'https://img.nickpic.host/q4PrV2.jpg',
'https://img.nickpic.host/q4PFEx.jpg',
'https://img.nickpic.host/q4P3pQ.jpg',
'https://img.nickpic.host/q4Pa7N.jpg',
'https://img.nickpic.host/q4PjdO.jpg',
'https://img.nickpic.host/q4P5Sm.jpg',
'https://img.nickpic.host/q4PSR8.jpg',
'https://img.nickpic.host/q4PuUD.jpg',
'https://img.nickpic.host/q4Pqsd.jpg',
'https://img.nickpic.host/q4PcJq.jpg',
'https://img.nickpic.host/q4PAf5.jpg',
'https://img.nickpic.host/q4POpP.jpg',
'https://img.nickpic.host/q4PhEM.jpg',
'https://img.nickpic.host/q4P68F.jpg',
'https://img.nickpic.host/q4PCde.jpg']
let rem = emili[Math.floor(Math.random() * emili.length)]
rezero = await getBuffer(rem)
const bnbn =['Aquí tienes 💕🦈','¿Linda foto no?','Pedido entregado 🕊','¿Qué tal está?','¿Te gusta?','Tengo muchas más 😽']
const puck = bnbn[Math.floor(Math.random() * bnbn.length)]
let buttons = [
                    {buttonId: `rezero`, buttonText: {displayText: 'Siguiente'}, type: 1}
                ]
                let buttonMessage = {
                    image: (rezero),
                    caption: (puck),
                    buttons: buttons,
                    headerType: 4
                }
                GojoMdNx.sendMessage(m.chat, buttonMessage)
            }
break

case 'darling':{
const zero =['https://img.nickpic.host/q7SLrX.jpg',
'https://img.nickpic.host/q7STNf.jpg',
'https://img.nickpic.host/q7Skee.jpg',
'https://img.nickpic.host/q7SeMF.jpg',
'https://img.nickpic.host/q7S9lM.jpg',
'https://img.nickpic.host/q7S0WP.jpg',
'https://img.nickpic.host/q7Sfz5.jpg',
'https://img.nickpic.host/q7SVuD.jpg',
'https://img.nickpic.host/q7SNmd.jpg',
'https://img.nickpic.host/q7SYNq.jpg',
'https://img.nickpic.host/q7SPQb.jpg',
'https://img.nickpic.host/q7SZo6.jpg',
'https://img.nickpic.host/q7SdAp.jpg',
'https://img.nickpic.host/q7SyzY.jpg',
'https://img.nickpic.host/q7cGZA.jpg',
'https://img.nickpic.host/q7cm5G.jpg',
'https://img.nickpic.host/q7coMz.jpg',
'https://img.nickpic.host/q7cxrW.jpg',
'https://img.nickpic.host/q7cpkc.jpg',
'https://img.nickpic.host/q7cBQ1.jpg',
'https://img.nickpic.host/q7cbVj.jpg',
'https://img.nickpic.host/q7csoJ.jpg',
'https://img.nickpic.host/q7c3An.jpg',
'https://img.nickpic.host/q7cF7s.jpg',
'https://img.nickpic.host/q7caZ2.jpg',
'https://img.nickpic.host/q7cl5Q.jpg',
'https://img.nickpic.host/q7c5Rx.jpg',
'https://img.nickpic.host/q7cSkN.jpg',
'https://img.nickpic.host/q7cgsO.jpg',
'https://img.nickpic.host/q7cqUm.jpg',
'https://img.nickpic.host/q7cuV8.jpg',
'https://img.nickpic.host/q7cEpq.jpg',
'https://img.nickpic.host/q7ch7D.jpg',
'https://img.nickpic.host/q7cOAd.jpg',
'https://img.nickpic.host/q7c6d5.jpg',
'https://img.nickpic.host/q7cQ5P.jpg',
'https://img.nickpic.host/q7cURM.jpg',
'https://img.nickpic.host/q7cXJF.jpg',
'https://img.nickpic.host/q7cnse.jpg',
'https://img.nickpic.host/q7ctUX.jpg',
'https://img.nickpic.host/q7cMfb.jpg',
'https://img.nickpic.host/q7c1pf.jpg',
'https://img.nickpic.host/q7c4E6.jpg',
'https://img.nickpic.host/q7cD8p.jpg',
'https://img.nickpic.host/q7cwdY.jpg',
'https://img.nickpic.host/q7c7SA.jpg',
'https://img.nickpic.host/q7c81G.jpg',
'https://img.nickpic.host/q7cH3c.jpg',
'https://img.nickpic.host/q7cKJz.jpg',
'https://img.nickpic.host/q7cNUW.jpg',
'https://img.nickpic.host/q7cVf1.jpg',
'https://img.nickpic.host/q7c2EJ.jpg',
'https://img.nickpic.host/q7c0vj.jpg',
'https://img.nickpic.host/q7c98n.jpg',
'https://img.nickpic.host/q7ceys.jpg',
'https://img.nickpic.host/q7cL1Q.jpg',
'https://img.nickpic.host/q7cJS2.jpg',
'https://img.nickpic.host/q7cPLx.jpg',
'https://img.nickpic.host/q7cW3N.jpg',
'https://img.nickpic.host/q7cZXO.jpg',
'https://img.nickpic.host/q7gGv8.jpg',
'https://img.nickpic.host/q7cd0m.jpg',
'https://img.nickpic.host/q7gIOq.jpg',
'https://img.nickpic.host/q7goyD.jpg',
'https://img.nickpic.host/q7gm8d.jpg',
'https://img.nickpic.host/q7gvc5.jpg',
'https://img.nickpic.host/q7gx1P.jpg',
'https://img.nickpic.host/q7grFF.jpg',
'https://img.nickpic.host/q7gBLM.jpg',
'https://img.nickpic.host/q7gsXe.jpg',
'https://img.nickpic.host/q7g30X.jpg',
'https://img.nickpic.host/q7gaxb.jpg',
'https://img.nickpic.host/q7gjOf.jpg',
'https://img.nickpic.host/q7glK6.jpg',
'https://img.nickpic.host/q7gSGp.jpg',
'https://img.nickpic.host/q7gccY.jpg',
'https://img.nickpic.host/q7gg4A.jpg',
'https://img.nickpic.host/q7gqPG.jpg',
'https://img.nickpic.host/q7gEic.jpg',
'https://img.nickpic.host/q7gAFz.jpg',
'https://img.nickpic.host/q7gO0W.jpg',
'https://img.nickpic.host/q7gChj.jpg',
'https://img.nickpic.host/q7gQKJ.jpg',
'https://img.nickpic.host/q7g6x1.jpg',
'https://img.nickpic.host/q7gXGn.jpg',
'https://img.nickpic.host/q7gigs.jpg',
'https://img.nickpic.host/q7gn42.jpg',
'https://img.nickpic.host/q7gtPQ.jpg',
'https://img.nickpic.host/q7g1iN.jpg',
'https://img.nickpic.host/q7gRax.jpg',
'https://img.nickpic.host/q7g42O.jpg',
'https://img.nickpic.host/q7gwBm.jpg',
'https://img.nickpic.host/q7g7Yq.jpg',
'https://img.nickpic.host/q7gzh8.jpg',
'https://img.nickpic.host/q7gKGd.jpg',
'https://img.nickpic.host/q7gYgD.jpg',
'https://img.nickpic.host/q7gHD5.jpg',
'https://img.nickpic.host/q7gfaM.jpg',
'https://img.nickpic.host/q7gNPP.jpg',
'https://img.nickpic.host/q7g0nF.jpg',
'https://img.nickpic.host/q7g22e.jpg',
'https://img.nickpic.host/q7geBX.jpg',
'https://img.nickpic.host/q7gPI6.jpg',
'https://img.nickpic.host/q7gk6b.jpg',
'https://img.nickpic.host/q7gJYf.jpg',
'https://img.nickpic.host/q7gTqp.jpg',
'https://img.nickpic.host/q7gWDY.jpg',
'https://img.nickpic.host/q7gZTA.jpg',
'https://img.nickpic.host/q7qGnz.jpg',
'https://img.nickpic.host/q7gyjG.jpg',
'https://img.nickpic.host/q7qI9c.jpg',
'https://img.nickpic.host/q7qoBW.jpg',
'https://img.nickpic.host/q7qp61.jpg',
'https://img.nickpic.host/q7qBIJ.jpg',
'https://img.nickpic.host/q7qvHj.jpg',
'https://img.nickpic.host/q7qbqn.jpg',
'https://img.nickpic.host/q7qrws.jpg',
'https://img.nickpic.host/q7qFjQ.jpg',
'https://img.nickpic.host/q7qsT2.jpg',
'https://img.nickpic.host/q7qatx.jpg',
'https://img.nickpic.host/q7qj9N.jpg',
'https://img.nickpic.host/q7qcH8.jpg',
'https://img.nickpic.host/q7q5bO.jpg',
'https://img.nickpic.host/q7qSCm.jpg',
'https://img.nickpic.host/q7qqmq.jpg']
let hichi = zero[Math.floor(Math.random() * zero.length)]
two = await getBuffer(hichi)
const ttwo =['Aquí tienes 💕🦈','¿Linda foto no?','Pedido entregado 🕊','¿Qué tal está?','¿Te gusta?','Tengo muchas más 😽']
const virm = ttwo[Math.floor(Math.random() * ttwo.length)]
let buttons = [
                    {buttonId: `darling`, buttonText: {displayText: 'Siguiente'}, type: 1}
                ]
                let buttonMessage = {
                    image: (two),
                    caption: (virm),
                    buttons: buttons,
                    headerType: 4
                }
                GojoMdNx.sendMessage(m.chat, buttonMessage)
            }
break

case 'kimetsu': {
const kime =['https://img.nickpic.host/q8bqdO.jpg',
'https://img.nickpic.host/q8bg7N.jpg',
'https://img.nickpic.host/q8bSpQ.jpg',
'https://img.nickpic.host/q8bcEx.jpg',
'https://img.nickpic.host/q8bjUs.jpg',
'https://img.nickpic.host/q8basn.jpg',
'https://img.nickpic.host/q8blV2.jpg',
'https://img.nickpic.host/q8b3kJ.jpg',
'https://img.nickpic.host/q8bsRj.jpg',
'https://img.nickpic.host/q8br51.jpg',
'https://img.nickpic.host/q8bASm.jpg',
'https://img.nickpic.host/q8bOJq.jpg',
'https://img.nickpic.host/q8bER8.jpg',
'https://img.nickpic.host/q8b6sd.jpg',
'https://img.nickpic.host/q8bQf5.jpg',
'https://img.nickpic.host/q8bCUD.jpg',
'https://img.nickpic.host/q8bXpP.jpg',
'https://img.nickpic.host/q8biEM.jpg',
'https://img.nickpic.host/q8bn8F.jpg',
'https://img.nickpic.host/q8btde.jpg',
'https://img.nickpic.host/q8bYOG.jpg',
'https://img.nickpic.host/q8bRSX.jpg',
'https://img.nickpic.host/q8b11b.jpg',
'https://img.nickpic.host/q8b4Jf.jpg',
'https://img.nickpic.host/q8bw36.jpg',
'https://img.nickpic.host/q8bzXp.jpg',
'https://img.nickpic.host/q8bKvA.jpg',
'https://img.nickpic.host/q8b7fY.jpg',
'https://img.nickpic.host/q8bH8z.jpg',
'https://img.nickpic.host/q8bNyc.jpg',
'https://img.nickpic.host/q8bfSW.jpg',
'https://img.nickpic.host/q8b011.jpg',
'https://img.nickpic.host/q8bZyN.jpg',
'https://img.nickpic.host/q8b2Lj.jpg',
'https://img.nickpic.host/q8be3J.jpg',
'https://img.nickpic.host/q8bkXn.jpg',
'https://img.nickpic.host/q8bJ0s.jpg',
'https://img.nickpic.host/q8bPv2.jpg',
'https://img.nickpic.host/q8bWKx.jpg',
'https://img.nickpic.host/q8bTOQ.jpg',
'https://img.nickpic.host/q8bycO.jpg',
'https://img.nickpic.host/q8rG4m.jpg',
'https://img.nickpic.host/q8rIL8.jpg',
'https://img.nickpic.host/q8roFq.jpg',
'https://img.nickpic.host/q8rpXd.jpg',
'https://img.nickpic.host/q8rv0D.jpg',
'https://img.nickpic.host/q8rBx5.jpg',
'https://img.nickpic.host/q8rbOP.jpg',
'https://img.nickpic.host/q8r3GF.jpg',
'https://img.nickpic.host/q8r5Ff.jpg',
'https://img.nickpic.host/q8rFce.jpg',
'https://img.nickpic.host/q8ra4X.jpg',
'https://img.nickpic.host/q8rjPb.jpg',
'https://img.nickpic.host/q8rSi6.jpg',
'https://img.nickpic.host/q8rqxY.jpg',
'https://img.nickpic.host/q8rc2p.jpg',
'https://img.nickpic.host/q8ruhA.jpg',
'https://img.nickpic.host/q8rOGz.jpg',
'https://img.nickpic.host/q8rhgc.jpg',
'https://img.nickpic.host/q8r64W.jpg',
'https://img.nickpic.host/q8rXiJ.jpg',
'https://img.nickpic.host/q8rCP1.jpg',
'https://img.nickpic.host/q8ri2n.jpg',
'https://img.nickpic.host/q8rUaj.jpg',
'https://img.nickpic.host/q8rRYQ.jpg',
'https://img.nickpic.host/q8rtBs.jpg',
'https://img.nickpic.host/q8rMh2.jpg',
'https://img.nickpic.host/q8r4Ix.jpg',
'https://img.nickpic.host/q8r8a8.jpg',
'https://img.nickpic.host/q8rwDO.jpg',
'https://img.nickpic.host/q8rDgN.jpg',
'https://img.nickpic.host/q8rKnq.jpg',
'https://img.nickpic.host/q8rzTm.jpg',
'https://img.nickpic.host/q8r2IM.jpg',
'https://img.nickpic.host/q8rY2d.jpg',
'https://img.nickpic.host/q8rfYP.jpg',
'https://img.nickpic.host/q8rNBD.jpg',
'https://img.nickpic.host/q8rV65.jpg',
'https://img.nickpic.host/q8r9qF.jpg',
'https://img.nickpic.host/q8reDe.jpg',
'https://img.nickpic.host/q8rPnf.jpg',
'https://img.nickpic.host/q8rkTX.jpg',
'https://img.nickpic.host/q8rLjb.jpg',
'https://img.nickpic.host/q8rT96.jpg',
'https://img.nickpic.host/q8rZbp.jpg',
'https://img.nickpic.host/q8ryHA.jpg',
'https://img.nickpic.host/q8rd6Y.jpg',
'https://img.nickpic.host/q8sImG.jpg',
'https://img.nickpic.host/q8sowc.jpg',
'https://img.nickpic.host/q8smqz.jpg',
'https://img.nickpic.host/q8sxj1.jpg',
'https://img.nickpic.host/q8spTW.jpg',
'https://img.nickpic.host/q8sBtj.jpg',
'https://img.nickpic.host/q8sb9J.jpg',
'https://img.nickpic.host/q8ssbn.jpg',
'https://img.nickpic.host/q8sFH2.jpg',
'https://img.nickpic.host/q8s3Cs.jpg',
'https://img.nickpic.host/q8sjmQ.jpg',
'https://img.nickpic.host/q8slux.jpg',
'https://img.nickpic.host/q8s5wN.jpg',
'https://img.nickpic.host/q8sSWO.jpg',
'https://img.nickpic.host/q8sglm.jpg',
'https://img.nickpic.host/q8sqt8.jpg',
'https://img.nickpic.host/q8sueq.jpg',
'https://img.nickpic.host/q8sEbd.jpg',
'https://img.nickpic.host/q8sOCD.jpg',
'https://img.nickpic.host/q8shN5.jpg',
'https://img.nickpic.host/q8sCmP.jpg',
'https://img.nickpic.host/q8sQuM.jpg',
'https://img.nickpic.host/q8sUzF.jpg',
'https://img.nickpic.host/q8snlX.jpg',
'https://img.nickpic.host/q8sXWe.jpg',
'https://img.nickpic.host/q8stMb.jpg',
'https://img.nickpic.host/q8s1r6.jpg',
'https://img.nickpic.host/q8sMef.jpg',
'https://img.nickpic.host/q8s4Qp.jpg',
'https://img.nickpic.host/q8sDNY.jpg',
'https://img.nickpic.host/q8szoA.jpg',
'https://img.nickpic.host/q8s7AG.jpg',
'https://img.nickpic.host/q8s8zz.jpg',
'https://img.nickpic.host/q8sKZc.jpg',
'https://img.nickpic.host/q8sHlW.jpg',
'https://img.nickpic.host/q8sNM1.jpg',
'https://img.nickpic.host/q8sVkj.jpg',
'https://img.nickpic.host/q8s0rJ.jpg',
'https://img.nickpic.host/q8s2Qn.jpg',
'https://img.nickpic.host/q8s9Vs.jpg',
'https://img.nickpic.host/q8sko2.jpg',
'https://img.nickpic.host/q8sJAQ.jpg',
'https://img.nickpic.host/q8sL7x.jpg',
'https://img.nickpic.host/q8sPZN.jpg',
'https://img.nickpic.host/q8sW5O.jpg',
'https://img.nickpic.host/q8sdk8.jpg',
'https://img.nickpic.host/q8sZRm.jpg',
'https://img.nickpic.host/q83pp5.jpg',
'https://img.nickpic.host/q83IQd.jpg',
'https://img.nickpic.host/q83x7M.jpg',
'https://img.nickpic.host/q83mVD.jpg',
'https://img.nickpic.host/q83vAP.jpg',
'https://img.nickpic.host/q83r5e.jpg',
'https://img.nickpic.host/q83BdF.jpg',
'https://img.nickpic.host/q833Jb.jpg',
'https://img.nickpic.host/q83sRX.jpg',
'https://img.nickpic.host/q83lfp.jpg',
'https://img.nickpic.host/q83asf.jpg',
'https://img.nickpic.host/q83jU6.jpg',
'https://img.nickpic.host/q83SpY.jpg',
'https://img.nickpic.host/q83g8G.jpg',
'https://img.nickpic.host/q83cEA.jpg',
'https://img.nickpic.host/q83qdz.jpg',
'https://img.nickpic.host/q83ASc.jpg',
'https://img.nickpic.host/q83OJ1.jpg',
'https://img.nickpic.host/q83ERW.jpg',
'https://img.nickpic.host/q8363j.jpg',
'https://img.nickpic.host/q83CUJ.jpg',
'https://img.nickpic.host/q83Qfn.jpg',
'https://img.nickpic.host/q83Xvs.jpg',
'https://img.nickpic.host/q83iE2.jpg',
'https://img.nickpic.host/q83n8Q.jpg',
'https://img.nickpic.host/q83RSN.jpg',
'https://img.nickpic.host/q83tyx.jpg',
'https://img.nickpic.host/q8311O.jpg',
'https://img.nickpic.host/q83w38.jpg',
'https://img.nickpic.host/q834Lm.jpg',
'https://img.nickpic.host/q83zXq.jpg',
'https://img.nickpic.host/q837fd.jpg',
'https://img.nickpic.host/q83YO5.jpg',
'https://img.nickpic.host/q83KvD.jpg',
'https://img.nickpic.host/q83H8P.jpg',
'https://img.nickpic.host/q83NyM.jpg',
'https://img.nickpic.host/q8301e.jpg',
'https://img.nickpic.host/q83fcF.jpg',
'https://img.nickpic.host/q832LX.jpg',
'https://img.nickpic.host/q83eFb.jpg',
'https://img.nickpic.host/q83kXf.jpg',
'https://img.nickpic.host/q83J06.jpg',
'https://img.nickpic.host/q83Pxp.jpg',
'https://img.nickpic.host/q83TOY.jpg',
'https://img.nickpic.host/q83WKA.jpg',
'https://img.nickpic.host/q83dGG.jpg',
'https://img.nickpic.host/q83ycz.jpg',
'https://img.nickpic.host/q8FG4c.jpg',
'https://img.nickpic.host/q8FoF1.jpg',
'https://img.nickpic.host/q8FILW.jpg',
'https://img.nickpic.host/q8Fpij.jpg',
'https://img.nickpic.host/q8Fv0J.jpg',
'https://img.nickpic.host/q8FBxn.jpg',
'https://img.nickpic.host/q8Fbhs.jpg',
'https://img.nickpic.host/q8FrK2.jpg',
'https://img.nickpic.host/q8F3GQ.jpg',
'https://img.nickpic.host/q8FFgx.jpg',
'https://img.nickpic.host/q8Fa4N.jpg',
'https://img.nickpic.host/q8F5am.jpg',
'https://img.nickpic.host/q8FjPO.jpg',
'https://img.nickpic.host/q8FSi8.jpg',
'https://img.nickpic.host/q8Fc2q.jpg',
'https://img.nickpic.host/q8FuhD.jpg',
'https://img.nickpic.host/q8Fqxd.jpg',
'https://img.nickpic.host/q8FAY5.jpg',
'https://img.nickpic.host/q8FOGP.jpg',
'https://img.nickpic.host/q8FhgM.jpg',
'https://img.nickpic.host/q8F6DF.jpg',
'https://img.nickpic.host/q8FXnb.jpg',
'https://img.nickpic.host/q8FCPe.jpg',
'https://img.nickpic.host/q8FUaX.jpg',
'https://img.nickpic.host/q8Fi2f.jpg',
'https://img.nickpic.host/q8FtB6.jpg',
'https://img.nickpic.host/q8FM6p.jpg',
'https://img.nickpic.host/q8FRYY.jpg',
'https://img.nickpic.host/q8F4IA.jpg',
'https://img.nickpic.host/q8FDqG.jpg',
'https://img.nickpic.host/q8FwDz.jpg',
'https://img.nickpic.host/q8FzTc.jpg',
'https://img.nickpic.host/q8FKn1.jpg',
'https://img.nickpic.host/q8FY9j.jpg',
'https://img.nickpic.host/q8F8aW.jpg',
'https://img.nickpic.host/q8FNBJ.jpg',
'https://img.nickpic.host/q8FV6n.jpg',
'https://img.nickpic.host/q8FfHs.jpg',
'https://img.nickpic.host/q8Fewx.jpg',
'https://img.nickpic.host/q8F2I2.jpg',
'https://img.nickpic.host/q8F9qQ.jpg',
'https://img.nickpic.host/q8FkTN.jpg',
'https://img.nickpic.host/q8FZbq.jpg',
'https://img.nickpic.host/q8FLjO.jpg',
'https://img.nickpic.host/q8FT98.jpg',
'https://img.nickpic.host/q8FPtm.jpg',
'https://img.nickpic.host/q8FyHD.jpg',
'https://img.nickpic.host/q8Fd6d.jpg',
'https://img.nickpic.host/q8aIm5.jpg',
'https://img.nickpic.host/q8aowM.jpg',
'https://img.nickpic.host/q8amqP.jpg',
'https://img.nickpic.host/q8apWF.jpg',
'https://img.nickpic.host/q8axje.jpg',
'https://img.nickpic.host/q8abeb.jpg',
'https://img.nickpic.host/q8aFNp.jpg',
'https://img.nickpic.host/q8aBtX.jpg',
'https://img.nickpic.host/q8asbf.jpg',
'https://img.nickpic.host/q8a3C6.jpg',
'https://img.nickpic.host/q8ajmY.jpg',
'https://img.nickpic.host/q8a5zG.jpg',
'https://img.nickpic.host/q8aluA.jpg',
'https://img.nickpic.host/q8aSWz.jpg',
'https://img.nickpic.host/q8aglc.jpg',
'https://img.nickpic.host/q8aqtW.jpg',
'https://img.nickpic.host/q8aOCJ.jpg',
'https://img.nickpic.host/q8aue1.jpg',
'https://img.nickpic.host/q8aErj.jpg',
'https://img.nickpic.host/q8aUzQ.jpg',
'https://img.nickpic.host/q8aCos.jpg',
'https://img.nickpic.host/q8ahNn.jpg',
'https://img.nickpic.host/q8aQu2.jpg',
'https://img.nickpic.host/q8atMO.jpg',
'https://img.nickpic.host/q8aXZx.jpg',
'https://img.nickpic.host/q8anlN.jpg',
'https://img.nickpic.host/q8a1r8.jpg',
'https://img.nickpic.host/q8aMkm.jpg',
'https://img.nickpic.host/q8azoD.jpg',
'https://img.nickpic.host/q8a4Qq.jpg',
'https://img.nickpic.host/q8aDNd.jpg',
'https://img.nickpic.host/q8a7A5.jpg',
'https://img.nickpic.host/q8a8zP.jpg',
'https://img.nickpic.host/q8aNMe.jpg',
'https://img.nickpic.host/q8aKZM.jpg',
'https://img.nickpic.host/q8aH5F.jpg',
'https://img.nickpic.host/q8aVkX.jpg',
'https://img.nickpic.host/q8a0sb.jpg',
'https://img.nickpic.host/q8akpp.jpg',
'https://img.nickpic.host/q8a2Qf.jpg',
'https://img.nickpic.host/q8a9V6.jpg',
'https://img.nickpic.host/q8aL7A.jpg',
'https://img.nickpic.host/q8aJAY.jpg',
'https://img.nickpic.host/q8adkW.jpg',
'https://img.nickpic.host/q8aPdG.jpg',
'https://img.nickpic.host/q8aW5z.jpg',
'https://img.nickpic.host/q8aZRc.jpg',
'https://img.nickpic.host/q8jIUj.jpg',
'https://img.nickpic.host/q8jGs1.jpg',
'https://img.nickpic.host/q8jBdQ.jpg',
'https://img.nickpic.host/q8jmVJ.jpg',
'https://img.nickpic.host/q8jppn.jpg',
'https://img.nickpic.host/q8jx72.jpg',
'https://img.nickpic.host/q8jvEs.jpg',
'https://img.nickpic.host/q8jsRN.jpg',
'https://img.nickpic.host/q8jrSx.jpg',
'https://img.nickpic.host/q8j3JO.jpg',
'https://img.nickpic.host/q8jg85.jpg',
'https://img.nickpic.host/q8ja3m.jpg',
'https://img.nickpic.host/q8jjU8.jpg',
'https://img.nickpic.host/q8jcED.jpg',
'https://img.nickpic.host/q8jSpd.jpg',
'https://img.nickpic.host/q8jlfq.jpg',
'https://img.nickpic.host/q8jASM.jpg',
'https://img.nickpic.host/q8jqdP.jpg',
'https://img.nickpic.host/q8j63X.jpg',
'https://img.nickpic.host/q8jXv6.jpg',
'https://img.nickpic.host/q8jE1F.jpg',
'https://img.nickpic.host/q8jOJe.jpg',
'https://img.nickpic.host/q8jCXb.jpg',
'https://img.nickpic.host/q8jQff.jpg',
'https://img.nickpic.host/q8jiOp.jpg',
'https://img.nickpic.host/q8jRcG.jpg',
'https://img.nickpic.host/q8jn8Y.jpg',
'https://img.nickpic.host/q8jtyA.jpg',
'https://img.nickpic.host/q8jw3W.jpg',
'https://img.nickpic.host/q8j11z.jpg',
'https://img.nickpic.host/q8j4Lc.jpg',
'https://img.nickpic.host/q8jKvJ.jpg',
'https://img.nickpic.host/q8jzX1.jpg',
'https://img.nickpic.host/q8j70j.jpg',
'https://img.nickpic.host/q8jHKs.jpg',
'https://img.nickpic.host/q8jYOn.jpg',
'https://img.nickpic.host/q8j04x.jpg',
'https://img.nickpic.host/q8jNy2.jpg',
'https://img.nickpic.host/q8jfcQ.jpg',
'https://img.nickpic.host/q8jeFO.jpg',
'https://img.nickpic.host/q8j2LN.jpg',
'https://img.nickpic.host/q8jkim.jpg',
'https://img.nickpic.host/q8jTOd.jpg',
'https://img.nickpic.host/q8jJ08.jpg',
'https://img.nickpic.host/q8jPxq.jpg',
'https://img.nickpic.host/q8jdG5.jpg',
'https://img.nickpic.host/q8jWKD.jpg',
'https://img.nickpic.host/q8jycP.jpg',
'https://img.nickpic.host/q8loFe.jpg',
'https://img.nickpic.host/q8lG4M.jpg',
'https://img.nickpic.host/q8lIPF.jpg',
'https://img.nickpic.host/q8lpiX.jpg',
'https://img.nickpic.host/q8lv2b.jpg',
'https://img.nickpic.host/q8lBxf.jpg',
'https://img.nickpic.host/q8ljPz.jpg',
'https://img.nickpic.host/q8lbh6.jpg',
'https://img.nickpic.host/q8lrYp.jpg',
'https://img.nickpic.host/q8l3GY.jpg',
'https://img.nickpic.host/q8lFgA.jpg',
'https://img.nickpic.host/q8laDG.jpg',
'https://img.nickpic.host/q8l5ac.jpg',
'https://img.nickpic.host/q8lSiW.jpg',
'https://img.nickpic.host/q8lc21.jpg',
'https://img.nickpic.host/q8lqBj.jpg',
'https://img.nickpic.host/q8luhJ.jpg',
'https://img.nickpic.host/q8lhg2.jpg',
'https://img.nickpic.host/q8lOIs.jpg',
'https://img.nickpic.host/q8lAYn.jpg',
'https://img.nickpic.host/q8l6DQ.jpg',
'https://img.nickpic.host/q8lCTx.jpg',
'https://img.nickpic.host/q8lUaN.jpg',
'https://img.nickpic.host/q8lXnO.jpg',
'https://img.nickpic.host/q8li9m.jpg',
'https://img.nickpic.host/q8ltB8.jpg',
'https://img.nickpic.host/q8lRYd.jpg',
'https://img.nickpic.host/q8lM6q.jpg',
'https://img.nickpic.host/q8l4ID.jpg',
'https://img.nickpic.host/q8lDq5.jpg',
'https://img.nickpic.host/q8lwDP.jpg',
'https://img.nickpic.host/q8lzTM.jpg',
'https://img.nickpic.host/q8l8jF.jpg',
'https://img.nickpic.host/q8lKne.jpg',
'https://img.nickpic.host/q8lY9X.jpg',
'https://img.nickpic.host/q8lNbb.jpg',
'https://img.nickpic.host/q8lV6f.jpg',
'https://img.nickpic.host/q8lfH6.jpg',
'https://img.nickpic.host/q8l2mp.jpg',
'https://img.nickpic.host/q8l9qY.jpg',
'https://img.nickpic.host/q8lewA.jpg',
'https://img.nickpic.host/q8lkWG.jpg',
'https://img.nickpic.host/q8lLjz.jpg',
'https://img.nickpic.host/q8lPtc.jpg',
'https://img.nickpic.host/q8lT9W.jpg',
'https://img.nickpic.host/q8lZb1.jpg',
'https://img.nickpic.host/q8ldCj.jpg',
'https://img.nickpic.host/q8lyHJ.jpg',
'https://img.nickpic.host/q85Imn.jpg',
'https://img.nickpic.host/q85mus.jpg',
'https://img.nickpic.host/q85ow2.jpg',
'https://img.nickpic.host/q85pWQ.jpg',
'https://img.nickpic.host/q85xlx.jpg',
'https://img.nickpic.host/q85BtN.jpg',
'https://img.nickpic.host/q85beO.jpg',
'https://img.nickpic.host/q85srm.jpg',
'https://img.nickpic.host/q853C8.jpg',
'https://img.nickpic.host/q85luD.jpg',
'https://img.nickpic.host/q85FNq.jpg',
'https://img.nickpic.host/q85jmd.jpg',
'https://img.nickpic.host/q855z5.jpg',
'https://img.nickpic.host/q85SWP.jpg',
'https://img.nickpic.host/q85glM.jpg',
'https://img.nickpic.host/q85qMF.jpg',
'https://img.nickpic.host/q85OQb.jpg',
'https://img.nickpic.host/q85uee.jpg',
'https://img.nickpic.host/q85ErX.jpg',
'https://img.nickpic.host/q85hNf.jpg',
'https://img.nickpic.host/q85Co6.jpg',
'https://img.nickpic.host/q85QAp.jpg',
'https://img.nickpic.host/q85XZA.jpg',
'https://img.nickpic.host/q85UzY.jpg',
'https://img.nickpic.host/q85n5G.jpg',
'https://img.nickpic.host/q85tMz.jpg',
'https://img.nickpic.host/q85Mkc.jpg',
'https://img.nickpic.host/q851rW.jpg',
'https://img.nickpic.host/q854Q1.jpg',
'https://img.nickpic.host/q85DVj.jpg',
'https://img.nickpic.host/q85zoJ.jpg',
'https://img.nickpic.host/q857An.jpg',
'https://img.nickpic.host/q8587s.jpg',
'https://img.nickpic.host/q85KZ2.jpg',
'https://img.nickpic.host/q85H5Q.jpg',
'https://img.nickpic.host/q85NRx.jpg',
'https://img.nickpic.host/q85VkN.jpg',
'https://img.nickpic.host/q850sO.jpg',
'https://img.nickpic.host/q852Um.jpg',
'https://img.nickpic.host/q859V8.jpg',
'https://img.nickpic.host/q85kpq.jpg',
'https://img.nickpic.host/q85JAd.jpg',
'https://img.nickpic.host/q85L7D.jpg',
'https://img.nickpic.host/q85Pd5.jpg',
'https://img.nickpic.host/q85W5P.jpg',
'https://img.nickpic.host/q85ZRM.jpg',
'https://img.nickpic.host/q85dJF.jpg',
'https://img.nickpic.host/q8SGse.jpg',
'https://img.nickpic.host/q8SIUX.jpg',
'https://img.nickpic.host/q8Smfb.jpg',
'https://img.nickpic.host/q8Sppf.jpg',
'https://img.nickpic.host/q8SvE6.jpg',
'https://img.nickpic.host/q8Sx8p.jpg',
'https://img.nickpic.host/q8SBdY.jpg',
'https://img.nickpic.host/q8Ss1G.jpg',
'https://img.nickpic.host/q8SrSA.jpg',
'https://img.nickpic.host/q8S3Jz.jpg',
'https://img.nickpic.host/q8Sa3c.jpg',
'https://img.nickpic.host/q8SjUW.jpg',
'https://img.nickpic.host/q8Slf1.jpg',
'https://img.nickpic.host/q8SSvj.jpg',
'https://img.nickpic.host/q8ScEJ.jpg',
'https://img.nickpic.host/q8Sg8n.jpg',
'https://img.nickpic.host/q8Sqys.jpg',
'https://img.nickpic.host/q8SE1Q.jpg',
'https://img.nickpic.host/q8SAS2.jpg',
'https://img.nickpic.host/q8SOLx.jpg',
'https://img.nickpic.host/q8S63N.jpg',
'https://img.nickpic.host/q8SCXO.jpg',
'https://img.nickpic.host/q8SQ0m.jpg',
'https://img.nickpic.host/q8SXv8.jpg',
'https://img.nickpic.host/q8SiOq.jpg',
'https://img.nickpic.host/q8StyD.jpg',
'https://img.nickpic.host/q8Sn8d.jpg',
'https://img.nickpic.host/q8SRc5.jpg',
'https://img.nickpic.host/q8S11P.jpg',
'https://img.nickpic.host/q8S4LM.jpg',
'https://img.nickpic.host/q8SzXe.jpg',
'https://img.nickpic.host/q8S70X.jpg',
'https://img.nickpic.host/q8SwFF.jpg',
'https://img.nickpic.host/q8SKxb.jpg',
'https://img.nickpic.host/q8SYOf.jpg',
'https://img.nickpic.host/q8SVGp.jpg',
'https://img.nickpic.host/q8SHK6.jpg',
'https://img.nickpic.host/q8SfcY.jpg',
'https://img.nickpic.host/q8S04A.jpg',
'https://img.nickpic.host/q8S2PG.jpg',
'https://img.nickpic.host/q8SeFz.jpg',
'https://img.nickpic.host/q8Skic.jpg',
'https://img.nickpic.host/q8SPx1.jpg',
'https://img.nickpic.host/q8SJ0W.jpg',
'https://img.nickpic.host/q8SThj.jpg',
'https://img.nickpic.host/q8SWKJ.jpg',
'https://img.nickpic.host/q8SdGn.jpg',
'https://img.nickpic.host/q8Sygs.jpg',
'https://img.nickpic.host/q8cG42.jpg',
'https://img.nickpic.host/q8cIPQ.jpg',
'https://img.nickpic.host/q8coax.jpg',
'https://img.nickpic.host/q8cpiN.jpg',
'https://img.nickpic.host/q8cv2O.jpg',
'https://img.nickpic.host/q8cBBm.jpg',
'https://img.nickpic.host/q8cbh8.jpg',
'https://img.nickpic.host/q8crYq.jpg',
'https://img.nickpic.host/q8c3Gd.jpg',
'https://img.nickpic.host/q8cFgD.jpg',
'https://img.nickpic.host/q8cjPP.jpg',
'https://img.nickpic.host/q8caD5.jpg',
'https://img.nickpic.host/q8c5aM.jpg',
'https://img.nickpic.host/q8cSnF.jpg',
'https://img.nickpic.host/q8cc2e.jpg',
'https://img.nickpic.host/q8cqBX.jpg',
'https://img.nickpic.host/q8cu6b.jpg',
'https://img.nickpic.host/q8cAYf.jpg',
'https://img.nickpic.host/q8chqp.jpg',
'https://img.nickpic.host/q8cOI6.jpg',
'https://img.nickpic.host/q8c6DY.jpg',
'https://img.nickpic.host/q8cCTA.jpg',
'https://img.nickpic.host/q8cUjG.jpg',
'https://img.nickpic.host/q8cXnz.jpg',
'https://img.nickpic.host/q8ci9c.jpg',
'https://img.nickpic.host/q8ctBW.jpg',
'https://img.nickpic.host/q8cM61.jpg',
'https://img.nickpic.host/q8cRHj.jpg',
'https://img.nickpic.host/q8c4IJ.jpg',
'https://img.nickpic.host/q8cDqn.jpg',
'https://img.nickpic.host/q8cwws.jpg',
'https://img.nickpic.host/q8czT2.jpg',
'https://img.nickpic.host/q8c8jQ.jpg',
'https://img.nickpic.host/q8cKtx.jpg',
'https://img.nickpic.host/q8cY9N.jpg',
'https://img.nickpic.host/q8cNbO.jpg',
'https://img.nickpic.host/q8cVCm.jpg',
'https://img.nickpic.host/q8cfH8.jpg',
'https://img.nickpic.host/q8c2mq.jpg',
'https://img.nickpic.host/q8c9qd.jpg',
'https://img.nickpic.host/q8cewD.jpg',
'https://img.nickpic.host/q8ckW5.jpg',
'https://img.nickpic.host/q8cLjP.jpg',
'https://img.nickpic.host/q8cPtM.jpg',
'https://img.nickpic.host/q8cTeF.jpg',
'https://img.nickpic.host/q8cZbe.jpg',
'https://img.nickpic.host/q8cdCX.jpg',
'https://img.nickpic.host/q8cyNb.jpg',
'https://img.nickpic.host/q8gImf.jpg',
'https://img.nickpic.host/q8gmu6.jpg',
'https://img.nickpic.host/q8gozp.jpg',
'https://img.nickpic.host/q8gpWY.jpg',
'https://img.nickpic.host/q8gxlA.jpg',
'https://img.nickpic.host/q8gBMG.jpg',
'https://img.nickpic.host/q8gbez.jpg',
'https://img.nickpic.host/q8gsrc.jpg',
'https://img.nickpic.host/q8g3CW.jpg',
'https://img.nickpic.host/q8gFN1.jpg',
'https://img.nickpic.host/q8gjoj.jpg',
'https://img.nickpic.host/q8gluJ.jpg',
'https://img.nickpic.host/q8g5zn.jpg',
'https://img.nickpic.host/q8gqMQ.jpg',
'https://img.nickpic.host/q8gSZs.jpg',
'https://img.nickpic.host/q8ggl2.jpg',
'https://img.nickpic.host/q8gukx.jpg',
'https://img.nickpic.host/q8gErN.jpg',
'https://img.nickpic.host/q8gOQO.jpg',
'https://img.nickpic.host/q8ghVm.jpg',
'https://img.nickpic.host/q8gCo8.jpg',
'https://img.nickpic.host/q8gQAq.jpg',
'https://img.nickpic.host/q8gUzd.jpg',
'https://img.nickpic.host/q8gXZD.jpg',
'https://img.nickpic.host/q8gn55.jpg',
'https://img.nickpic.host/q8gtMP.jpg',
'https://img.nickpic.host/q8gMkM.jpg',
'https://img.nickpic.host/q8g1sF.jpg',
'https://img.nickpic.host/q8g4Qe.jpg',
'https://img.nickpic.host/q8gDVX.jpg',
'https://img.nickpic.host/q8gzpb.jpg',
'https://img.nickpic.host/q8g7Af.jpg',
'https://img.nickpic.host/q8g876.jpg',
'https://img.nickpic.host/q8gKdp.jpg',
'https://img.nickpic.host/q8gH5Y.jpg',
'https://img.nickpic.host/q8gNRA.jpg',
'https://img.nickpic.host/q8gVJG.jpg',
'https://img.nickpic.host/q8g0sz.jpg',
'https://img.nickpic.host/q8g2Uc.jpg',
'https://img.nickpic.host/q8g9VW.jpg',
'https://img.nickpic.host/q8gkp1.jpg',
'https://img.nickpic.host/q8gJEj.jpg',
'https://img.nickpic.host/q8gPdn.jpg',
'https://img.nickpic.host/q8gL7J.jpg',
'https://img.nickpic.host/q8gWSs.jpg',
'https://img.nickpic.host/q8gZR2.jpg',
'https://img.nickpic.host/q8gdJQ.jpg',
'https://img.nickpic.host/q8qG3x.jpg',
'https://img.nickpic.host/q8qIUN.jpg',
'https://img.nickpic.host/q8qmfO.jpg',
'https://img.nickpic.host/q8qpvm.jpg',
'https://img.nickpic.host/q8qvE8.jpg',
'https://img.nickpic.host/q8qx8q.jpg',
'https://img.nickpic.host/q8qrSD.jpg',
'https://img.nickpic.host/q8qBdd.jpg',
'https://img.nickpic.host/q8qs15.jpg',
'https://img.nickpic.host/q8qcOb.jpg',
'https://img.nickpic.host/q8qlfe.jpg',
'https://img.nickpic.host/q8qSvX.jpg',
'https://img.nickpic.host/q8qg8f.jpg',
'https://img.nickpic.host/q8qqy6.jpg',
'https://img.nickpic.host/q8qAcp.jpg',
'https://img.nickpic.host/q8qE1Y.jpg',
'https://img.nickpic.host/q8qOLA.jpg',
'https://img.nickpic.host/q8q6FG.jpg',
'https://img.nickpic.host/q8qCXz.jpg',
'https://img.nickpic.host/q8qQ0c.jpg',
'https://img.nickpic.host/q8qXvW.jpg',
'https://img.nickpic.host/q8qiO1.jpg',
'https://img.nickpic.host/q8qnKj.jpg',
'https://img.nickpic.host/q8qtyJ.jpg',
'https://img.nickpic.host/q8qRcn.jpg',
'https://img.nickpic.host/q8q14s.jpg',
'https://img.nickpic.host/q8q4L2.jpg',
'https://img.nickpic.host/q8qwFQ.jpg',
'https://img.nickpic.host/q8qzix.jpg',
'https://img.nickpic.host/q8q70N.jpg',
'https://img.nickpic.host/q8qKxO.jpg',
'https://img.nickpic.host/q8qYhm.jpg',
'https://img.nickpic.host/q8qHK8.jpg',
'https://img.nickpic.host/q8qVGq.jpg',
'https://img.nickpic.host/q8qfcd.jpg',
'https://img.nickpic.host/q8q04D.jpg',
'https://img.nickpic.host/q8q2P5.jpg',
'https://img.nickpic.host/q8qeFP.jpg',
'https://img.nickpic.host/q8qkiM.jpg',
'https://img.nickpic.host/q8qJ2F.jpg',
'https://img.nickpic.host/q8qPxe.jpg',
'https://img.nickpic.host/q8qThX.jpg',
'https://img.nickpic.host/q8qWYb.jpg',
'https://img.nickpic.host/q8qdGf.jpg',
'https://img.nickpic.host/q8qyg6.jpg',
'https://img.nickpic.host/q8uGDp.jpg',
'https://img.nickpic.host/q8uIPY.jpg',
'https://img.nickpic.host/q8uoaA.jpg',
'https://img.nickpic.host/q8upnG.jpg',
'https://img.nickpic.host/q8uv2z.jpg',
'https://img.nickpic.host/q8uBBc.jpg',
'https://img.nickpic.host/q8ubhW.jpg',
'https://img.nickpic.host/q8urY1.jpg',
'https://img.nickpic.host/q8u3Ij.jpg',
'https://img.nickpic.host/q8uFgJ.jpg',
'https://img.nickpic.host/q8uaDn.jpg',
'https://img.nickpic.host/q8ujTs.jpg',
'https://img.nickpic.host/q8uSnQ.jpg',
'https://img.nickpic.host/q8u5a2.jpg',
'https://img.nickpic.host/q8uc9x.jpg',
'https://img.nickpic.host/q8uu6O.jpg',
'https://img.nickpic.host/q8uqBN.jpg',
'https://img.nickpic.host/q8uAHm.jpg',
'https://img.nickpic.host/q8uOI8.jpg',
'https://img.nickpic.host/q8uhqq.jpg',
'https://img.nickpic.host/q8u6Dd.jpg',
'https://img.nickpic.host/q8uUj5.jpg',
'https://img.nickpic.host/q8uCTD.jpg',
'https://img.nickpic.host/q8uXnP.jpg',
'https://img.nickpic.host/q8ui9M.jpg',
'https://img.nickpic.host/q8u4mb.jpg',
'https://img.nickpic.host/q8uM6e.jpg',
'https://img.nickpic.host/q8utbF.jpg',
'https://img.nickpic.host/q8uRHX.jpg',
'https://img.nickpic.host/q8uDqf.jpg',
'https://img.nickpic.host/q8uww6.jpg',
'https://img.nickpic.host/q8uKtA.jpg',
'https://img.nickpic.host/q8uzWp.jpg',
'https://img.nickpic.host/q8u8jY.jpg',
'https://img.nickpic.host/q8uYeG.jpg',
'https://img.nickpic.host/q8uNbz.jpg',
'https://img.nickpic.host/q8uVCc.jpg',
'https://img.nickpic.host/q8ufHW.jpg',
'https://img.nickpic.host/q8u2m1.jpg',
'https://img.nickpic.host/q8u9uj.jpg',
'https://img.nickpic.host/q8uewJ.jpg',
'https://img.nickpic.host/q8uPt2.jpg',
'https://img.nickpic.host/q8ukWn.jpg',
'https://img.nickpic.host/q8uLls.jpg',
'https://img.nickpic.host/q8uTeQ.jpg',
'https://img.nickpic.host/q8uZrx.jpg',
'https://img.nickpic.host/q8udCN.jpg',
'https://img.nickpic.host/q8uyNO.jpg',
'https://img.nickpic.host/q8Amu8.jpg',
'https://img.nickpic.host/q8AIom.jpg',
'https://img.nickpic.host/q8Aozq.jpg',
'https://img.nickpic.host/q8ApWd.jpg',
'https://img.nickpic.host/q8AxlD.jpg',
'https://img.nickpic.host/q8ABM5.jpg',
'https://img.nickpic.host/q8AbeP.jpg',
'https://img.nickpic.host/q8AsrM.jpg',
'https://img.nickpic.host/q8A3QF.jpg',
'https://img.nickpic.host/q8AFNe.jpg',
'https://img.nickpic.host/q8AjoX.jpg',
'https://img.nickpic.host/q8AlAb.jpg',
'https://img.nickpic.host/q8A5zf.jpg',
'https://img.nickpic.host/q8ASZ6.jpg',
'https://img.nickpic.host/q8Ag5p.jpg',
'https://img.nickpic.host/q8AqMY.jpg',
'https://img.nickpic.host/q8AukA.jpg',
'https://img.nickpic.host/q8AEsG.jpg',
'https://img.nickpic.host/q8AOQz.jpg',
'https://img.nickpic.host/q8AhVc.jpg',
'https://img.nickpic.host/q8AQA1.jpg',
'https://img.nickpic.host/q8ACoW.jpg',
'https://img.nickpic.host/q8AU7j.jpg',
'https://img.nickpic.host/q8AtRs.jpg',
'https://img.nickpic.host/q8AXZJ.jpg',
'https://img.nickpic.host/q8AMk2.jpg',
'https://img.nickpic.host/q8An5n.jpg',
'https://img.nickpic.host/q8A1sQ.jpg',
'https://img.nickpic.host/q8A4Ux.jpg',
'https://img.nickpic.host/q8ADVN.jpg',
'https://img.nickpic.host/q8AzpO.jpg',
'https://img.nickpic.host/q8A7Em.jpg',
'https://img.nickpic.host/q8A878.jpg',
'https://img.nickpic.host/q8AKdq.jpg',
'https://img.nickpic.host/q8ANRD.jpg',
'https://img.nickpic.host/q8AVJ5.jpg',
'https://img.nickpic.host/q8A0sP.jpg',
'https://img.nickpic.host/q8A2UM.jpg',
'https://img.nickpic.host/q8A9fF.jpg',
'https://img.nickpic.host/q8Akpe.jpg',
'https://img.nickpic.host/q8AJEX.jpg',
'https://img.nickpic.host/q8AL8b.jpg',
'https://img.nickpic.host/q8APdf.jpg',
'https://img.nickpic.host/q8AWS6.jpg',
'https://img.nickpic.host/q8AZ1p.jpg',
'https://img.nickpic.host/q8AdJY.jpg',
'https://img.nickpic.host/q8EG3A.jpg',
'https://img.nickpic.host/q8EIXG.jpg',
'https://img.nickpic.host/q8Emfz.jpg',
'https://img.nickpic.host/q8Epvc.jpg',
'https://img.nickpic.host/q8EvEW.jpg',
'https://img.nickpic.host/q8Ex81.jpg',
'https://img.nickpic.host/q8EByj.jpg',
'https://img.nickpic.host/q8Es1n.jpg',
'https://img.nickpic.host/q8ErSJ.jpg',
'https://img.nickpic.host/q8E3Ls.jpg',
'https://img.nickpic.host/q8Ea32.jpg',
'https://img.nickpic.host/q8EjXQ.jpg',
'https://img.nickpic.host/q8El0x.jpg',
'https://img.nickpic.host/q8ESvN.jpg',
'https://img.nickpic.host/q8EcOO.jpg',
'https://img.nickpic.host/q8EgKm.jpg',
'https://img.nickpic.host/q8Eqy8.jpg',
'https://img.nickpic.host/q8EAcq.jpg',
'https://img.nickpic.host/q8EE1d.jpg',
'https://img.nickpic.host/q8EOLD.jpg',
'https://img.nickpic.host/q8E6F5.jpg',
'https://img.nickpic.host/q8ECXP.jpg',
'https://img.nickpic.host/q8EQ0M.jpg',
'https://img.nickpic.host/q8EXxF.jpg',
'https://img.nickpic.host/q8EiOe.jpg',
'https://img.nickpic.host/q8EnKX.jpg',
'https://img.nickpic.host/q8EMGb.jpg',
'https://img.nickpic.host/q8ERcf.jpg',
'https://img.nickpic.host/q8E146.jpg',
'https://img.nickpic.host/q8E4Pp.jpg',
'https://img.nickpic.host/q8EwFY.jpg',
'https://img.nickpic.host/q8EziA.jpg',
'https://img.nickpic.host/q8E72G.jpg',
'https://img.nickpic.host/q8EKxz.jpg',
'https://img.nickpic.host/q8EHKW.jpg',
'https://img.nickpic.host/q8EYhc.jpg',
'https://img.nickpic.host/q8EVG1.jpg',
'https://img.nickpic.host/q8Efgj.jpg',
'https://img.nickpic.host/q8E2Pn.jpg',
'https://img.nickpic.host/q8E04J.jpg',
'https://img.nickpic.host/q8Eeas.jpg',
'https://img.nickpic.host/q8Eki2.jpg',
'https://img.nickpic.host/q8EJ2Q.jpg',
'https://img.nickpic.host/q8EPBx.jpg',
'https://img.nickpic.host/q8EdIm.jpg',
'https://img.nickpic.host/q8EThN.jpg',
'https://img.nickpic.host/q8EWYO.jpg',
'https://img.nickpic.host/q8Eyg8.jpg',
'https://img.nickpic.host/q8OGDq.jpg',
'https://img.nickpic.host/q8OoaD.jpg',
'https://img.nickpic.host/q8OIPd.jpg',
'https://img.nickpic.host/q8Opn5.jpg',
'https://img.nickpic.host/q8Ov2P.jpg',
'https://img.nickpic.host/q8Ob6F.jpg',
'https://img.nickpic.host/q8OBBM.jpg',
'https://img.nickpic.host/q8OrYe.jpg',
'https://img.nickpic.host/q8O3IX.jpg',
'https://img.nickpic.host/q8OFqb.jpg',
'https://img.nickpic.host/q8OaDf.jpg',
'https://img.nickpic.host/q8OSnY.jpg',
'https://img.nickpic.host/q8OjT6.jpg',
'https://img.nickpic.host/q8O5jp.jpg',
'https://img.nickpic.host/q8Oc9A.jpg',
'https://img.nickpic.host/q8OqbG.jpg',
'https://img.nickpic.host/q8OAHc.jpg',
'https://img.nickpic.host/q8Ou6z.jpg',
'https://img.nickpic.host/q8OOIW.jpg',
'https://img.nickpic.host/q8Ohq1.jpg',
'https://img.nickpic.host/q8O6wj.jpg',
'https://img.nickpic.host/q8OCTJ.jpg',
'https://img.nickpic.host/q8OUjn.jpg',
'https://img.nickpic.host/q8OXts.jpg',
'https://img.nickpic.host/q8Oi92.jpg',
'https://img.nickpic.host/q8OMCx.jpg',
'https://img.nickpic.host/q8OtbQ.jpg',
'https://img.nickpic.host/q8ORHN.jpg',
'https://img.nickpic.host/q8O4mO.jpg',
'https://img.nickpic.host/q8ODum.jpg',
'https://img.nickpic.host/q8OzWq.jpg',
'https://img.nickpic.host/q8Oww8.jpg',
'https://img.nickpic.host/q8O8jd.jpg',
'https://img.nickpic.host/q8OKtD.jpg',
'https://img.nickpic.host/q8OYe5.jpg',
'https://img.nickpic.host/q8ONbP.jpg',
'https://img.nickpic.host/q8OVCM.jpg',
'https://img.nickpic.host/q8OfNF.jpg',
'https://img.nickpic.host/q8O2me.jpg',
'https://img.nickpic.host/q8O9uX.jpg',
'https://img.nickpic.host/q8Oezb.jpg',
'https://img.nickpic.host/q8OkWf.jpg',
'https://img.nickpic.host/q8OLl6.jpg',
'https://img.nickpic.host/q8OPMp.jpg',
'https://img.nickpic.host/q8OTeY.jpg',
'https://img.nickpic.host/q8OZrA.jpg',
'https://img.nickpic.host/q8OdQG.jpg',
'https://img.nickpic.host/q8OyNz.jpg',
'https://img.nickpic.host/q8hIoc.jpg',
'https://img.nickpic.host/q8hoz1.jpg',
'https://img.nickpic.host/q8hmuW.jpg',
'https://img.nickpic.host/q8hpZj.jpg',
'https://img.nickpic.host/q8hxlJ.jpg',
'https://img.nickpic.host/q8hBMn.jpg',
'https://img.nickpic.host/q8hbks.jpg',
'https://img.nickpic.host/q8hsr2.jpg',
'https://img.nickpic.host/q8hFVx.jpg',
'https://img.nickpic.host/q8h3QQ.jpg',
'https://img.nickpic.host/q8hjoN.jpg',
'https://img.nickpic.host/q8hlAO.jpg',
'https://img.nickpic.host/q8h57m.jpg',
'https://img.nickpic.host/q8hSZ8.jpg',
'https://img.nickpic.host/q8hg5q.jpg',
'https://img.nickpic.host/q8hqMd.jpg',
'https://img.nickpic.host/q8hukD.jpg',
'https://img.nickpic.host/q8hEs5.jpg',
'https://img.nickpic.host/q8hOQP.jpg',
'https://img.nickpic.host/q8hhVM.jpg',
'https://img.nickpic.host/q8hCpF.jpg',
'https://img.nickpic.host/q8hQAe.jpg',
'https://img.nickpic.host/q8hXdb.jpg',
'https://img.nickpic.host/q8hU7X.jpg',
'https://img.nickpic.host/q8hn5f.jpg',
'https://img.nickpic.host/q8htR6.jpg',
'https://img.nickpic.host/q8hMJp.jpg',
'https://img.nickpic.host/q8h1sY.jpg',
'https://img.nickpic.host/q8hDfG.jpg',
'https://img.nickpic.host/q8h4UA.jpg',
'https://img.nickpic.host/q8hzpz.jpg',
'https://img.nickpic.host/q8h7Ec.jpg',
'https://img.nickpic.host/q8h87W.jpg',
'https://img.nickpic.host/q8hHSj.jpg',
'https://img.nickpic.host/q8hKd1.jpg',
'https://img.nickpic.host/q8hNRJ.jpg',
'https://img.nickpic.host/q8h2U2.jpg',
'https://img.nickpic.host/q8hVJn.jpg',
'https://img.nickpic.host/q8h03s.jpg',
'https://img.nickpic.host/q8h9fQ.jpg',
'https://img.nickpic.host/q8hkvx.jpg',
'https://img.nickpic.host/q8hJEN.jpg',
'https://img.nickpic.host/q8hL8O.jpg',
'https://img.nickpic.host/q8hPym.jpg',
'https://img.nickpic.host/q8hWS8.jpg',
'https://img.nickpic.host/q8hZ1q.jpg',
'https://img.nickpic.host/q8hdJd.jpg',
'https://img.nickpic.host/q86G3D.jpg',
'https://img.nickpic.host/q86IX5.jpg',
'https://img.nickpic.host/q86mfP.jpg',
'https://img.nickpic.host/q86vOF.jpg',
'https://img.nickpic.host/q86pvM.jpg',
'https://img.nickpic.host/q86x8e.jpg',
'https://img.nickpic.host/q86rcb.jpg',
'https://img.nickpic.host/q86ByX.jpg',
'https://img.nickpic.host/q86s1f.jpg',
'https://img.nickpic.host/q863L6.jpg',
'https://img.nickpic.host/q86aFp.jpg',
'https://img.nickpic.host/q86jXY.jpg',
'https://img.nickpic.host/q86l0A.jpg',
'https://img.nickpic.host/q86SxG.jpg',
'https://img.nickpic.host/q86cOz.jpg',
'https://img.nickpic.host/q86gKc.jpg',
'https://img.nickpic.host/q86qyW.jpg',
'https://img.nickpic.host/q86Ac1.jpg',
'https://img.nickpic.host/q86E4j.jpg',
'https://img.nickpic.host/q866Fn.jpg',
'https://img.nickpic.host/q86OLJ.jpg',
'https://img.nickpic.host/q86Cis.jpg',
'https://img.nickpic.host/q86Q02.jpg',
'https://img.nickpic.host/q86XxQ.jpg',
'https://img.nickpic.host/q86ihx.jpg',
'https://img.nickpic.host/q86nKN.jpg',
'https://img.nickpic.host/q86MGO.jpg',
'https://img.nickpic.host/q86Rgm.jpg',
'https://img.nickpic.host/q86148.jpg',
'https://img.nickpic.host/q864Pq.jpg',
'https://img.nickpic.host/q86wFd.jpg',
'https://img.nickpic.host/q86ziD.jpg',
'https://img.nickpic.host/q86KxP.jpg',
'https://img.nickpic.host/q86725.jpg',
'https://img.nickpic.host/q86YhM.jpg',
'https://img.nickpic.host/q86HYF.jpg',
'https://img.nickpic.host/q86VGe.jpg',
'https://img.nickpic.host/q86fgX.jpg',
'https://img.nickpic.host/q860Db.jpg',
'https://img.nickpic.host/q862Pf.jpg',
'https://img.nickpic.host/q86ea6.jpg',
'https://img.nickpic.host/q86knp.jpg',
'https://img.nickpic.host/q86J2Y.jpg',
'https://img.nickpic.host/q86PBA.jpg',
'https://img.nickpic.host/q86T6G.jpg',
'https://img.nickpic.host/q86WYz.jpg',
'https://img.nickpic.host/q86dIc.jpg',
'https://img.nickpic.host/q86ygW.jpg',
'https://img.nickpic.host/q8CGD1.jpg',
'https://img.nickpic.host/q8CITj.jpg',
'https://img.nickpic.host/q8CoaJ.jpg',
'https://img.nickpic.host/q8Cpnn.jpg',
'https://img.nickpic.host/q8Cv9s.jpg',
'https://img.nickpic.host/q8CBB2.jpg',
'https://img.nickpic.host/q8Cb6Q.jpg',
'https://img.nickpic.host/q8CrHx.jpg',
'https://img.nickpic.host/q8C3IN.jpg',
'https://img.nickpic.host/q8CFqO.jpg',
'https://img.nickpic.host/q8Cawm.jpg',
'https://img.nickpic.host/q8CjT8.jpg',
'https://img.nickpic.host/q8C5jq.jpg',
'https://img.nickpic.host/q8CSnd.jpg',
'https://img.nickpic.host/q8Cc9D.jpg',
'https://img.nickpic.host/q8Cqb5.jpg',
'https://img.nickpic.host/q8Cu6P.jpg',
'https://img.nickpic.host/q8COmF.jpg',
'https://img.nickpic.host/q8CAHM.jpg',
'https://img.nickpic.host/q8Chqe.jpg',
'https://img.nickpic.host/q8C6wX.jpg',
'https://img.nickpic.host/q8CCWb.jpg',
'https://img.nickpic.host/q8CUjf.jpg',
'https://img.nickpic.host/q8CXt6.jpg',
'https://img.nickpic.host/q8Ciep.jpg',
'https://img.nickpic.host/q8CtbY.jpg',
'https://img.nickpic.host/q8CMCA.jpg',
'https://img.nickpic.host/q8CRNG.jpg',
'https://img.nickpic.host/q8C4mz.jpg',
'https://img.nickpic.host/q8CDuc.jpg',
'https://img.nickpic.host/q8CwwW.jpg',
'https://img.nickpic.host/q8CzW1.jpg',
'https://img.nickpic.host/q8C8lj.jpg',
'https://img.nickpic.host/q8CKtJ.jpg',
'https://img.nickpic.host/q8CYen.jpg',
'https://img.nickpic.host/q8CNrs.jpg',
'https://img.nickpic.host/q8CVC2.jpg',
'https://img.nickpic.host/q8CfNQ.jpg',
'https://img.nickpic.host/q8C2ox.jpg',
'https://img.nickpic.host/q8CezO.jpg',
'https://img.nickpic.host/q8C9uN.jpg',
'https://img.nickpic.host/q8CkZm.jpg',
'https://img.nickpic.host/q8CLl8.jpg',
'https://img.nickpic.host/q8CPMq.jpg',
'https://img.nickpic.host/q8CTed.jpg',
'https://img.nickpic.host/q8CZrD.jpg',
'https://img.nickpic.host/q8CdQ5.jpg',
'https://img.nickpic.host/q8CyNP.jpg',
'https://img.nickpic.host/q8QIoM.jpg',
'https://img.nickpic.host/q8QmAF.jpg',
'https://img.nickpic.host/q8Qoze.jpg',
'https://img.nickpic.host/q8Qx5b.jpg',
'https://img.nickpic.host/q8QpZX.jpg',
'https://img.nickpic.host/q8QBMf.jpg',
'https://img.nickpic.host/q8Qbk6.jpg',
'https://img.nickpic.host/q8Q3QY.jpg',
'https://img.nickpic.host/q8Qssp.jpg',
'https://img.nickpic.host/q8QFVA.jpg',
'https://img.nickpic.host/q8QjpG.jpg',
'https://img.nickpic.host/q8QlAz.jpg',
'https://img.nickpic.host/q8Q57c.jpg',
'https://img.nickpic.host/q8Qg51.jpg',
'https://img.nickpic.host/q8QSZW.jpg',
'https://img.nickpic.host/q8QqRj.jpg',
'https://img.nickpic.host/q8QukJ.jpg',
'https://img.nickpic.host/q8QEsn.jpg',
'https://img.nickpic.host/q8QCpQ.jpg',
'https://img.nickpic.host/q8QhV2.jpg',
'https://img.nickpic.host/q8QOUs.jpg',
'https://img.nickpic.host/q8QQEx.jpg',
'https://img.nickpic.host/q8QXdO.jpg',
'https://img.nickpic.host/q8QU7N.jpg',
'https://img.nickpic.host/q8QnSm.jpg',
'https://img.nickpic.host/q8Q1sd.jpg',
'https://img.nickpic.host/q8QtR8.jpg',
'https://img.nickpic.host/q8QMJq.jpg',
'https://img.nickpic.host/q8Q4UD.jpg',
'https://img.nickpic.host/q8QDf5.jpg',
'https://img.nickpic.host/q8Q7EM.jpg',
'https://img.nickpic.host/q8QzpP.jpg',
'https://img.nickpic.host/q8Q88F.jpg',
'https://img.nickpic.host/q8QHSX.jpg',
'https://img.nickpic.host/q8QKde.jpg',
'https://img.nickpic.host/q8QN1b.jpg',
'https://img.nickpic.host/q8QVJf.jpg',
'https://img.nickpic.host/q8Q036.jpg',
'https://img.nickpic.host/q8Q2Xp.jpg',
'https://img.nickpic.host/q8Q9fY.jpg',
'https://img.nickpic.host/q8QkvA.jpg',
'https://img.nickpic.host/q8QJOG.jpg',
'https://img.nickpic.host/q8QL8z.jpg',
'https://img.nickpic.host/q8QPyc.jpg',
'https://img.nickpic.host/q8QWSW.jpg',
'https://img.nickpic.host/q8QZ11.jpg',
'https://img.nickpic.host/q8UG3J.jpg',
'https://img.nickpic.host/q8QdLj.jpg',
'https://img.nickpic.host/q8UIXn.jpg',
'https://img.nickpic.host/q8Um0s.jpg',
'https://img.nickpic.host/q8UvOQ.jpg',
'https://img.nickpic.host/q8Upv2.jpg',
'https://img.nickpic.host/q8UxKx.jpg',
'https://img.nickpic.host/q8UByN.jpg',
'https://img.nickpic.host/q8UrcO.jpg',
'https://img.nickpic.host/q8Us4m.jpg',
'https://img.nickpic.host/q8UaFq.jpg',
'https://img.nickpic.host/q8U3L8.jpg',
'https://img.nickpic.host/q8UjXd.jpg',
'https://img.nickpic.host/q8Ul0D.jpg',
'https://img.nickpic.host/q8USx5.jpg',
'https://img.nickpic.host/q8UgKM.jpg',
'https://img.nickpic.host/q8UcOP.jpg',
'https://img.nickpic.host/q8UAce.jpg',
'https://img.nickpic.host/q8UuGF.jpg',
'https://img.nickpic.host/q8UE4X.jpg',
'https://img.nickpic.host/q8UOPb.jpg',
'https://img.nickpic.host/q8U6Ff.jpg',
'https://img.nickpic.host/q8UCi6.jpg',
'https://img.nickpic.host/q8UXxY.jpg',
'https://img.nickpic.host/q8UihA.jpg',
'https://img.nickpic.host/q8UQ2p.jpg',
'https://img.nickpic.host/q8UnYG.jpg',
'https://img.nickpic.host/q8UMGz.jpg',
'https://img.nickpic.host/q8U14W.jpg',
'https://img.nickpic.host/q8URgc.jpg',
'https://img.nickpic.host/q8U4P1.jpg',
'https://img.nickpic.host/q8Uwaj.jpg',
'https://img.nickpic.host/q8UziJ.jpg',
'https://img.nickpic.host/q8UKBs.jpg',
'https://img.nickpic.host/q8U72n.jpg',
'https://img.nickpic.host/q8UVIx.jpg',
'https://img.nickpic.host/q8UYh2.jpg',
'https://img.nickpic.host/q8UHYQ.jpg',
'https://img.nickpic.host/q8UfgN.jpg',
'https://img.nickpic.host/q8U0DO.jpg',
'https://img.nickpic.host/q8U2Tm.jpg',
'https://img.nickpic.host/q8Uknq.jpg',
'https://img.nickpic.host/q8Uea8.jpg',
'https://img.nickpic.host/q8UJ2d.jpg',
'https://img.nickpic.host/q8UPBD.jpg',
'https://img.nickpic.host/q8UT65.jpg',
'https://img.nickpic.host/q8UdIM.jpg',
'https://img.nickpic.host/q8UWYP.jpg',
'https://img.nickpic.host/q8UyqF.jpg',
'https://img.nickpic.host/q8XITX.jpg',
'https://img.nickpic.host/q8XGDe.jpg',
'https://img.nickpic.host/q8Xojb.jpg',
'https://img.nickpic.host/q8Xv96.jpg',
'https://img.nickpic.host/q8Xpnf.jpg',
'https://img.nickpic.host/q8XBbp.jpg',
'https://img.nickpic.host/q8Xb6Y.jpg',
'https://img.nickpic.host/q8XrHA.jpg',
'https://img.nickpic.host/q8X3mG.jpg',
'https://img.nickpic.host/q8XFqz.jpg',
'https://img.nickpic.host/q8Xawc.jpg',
'https://img.nickpic.host/q8XjTW.jpg',
'https://img.nickpic.host/q8X5j1.jpg',
'https://img.nickpic.host/q8XStj.jpg',
'https://img.nickpic.host/q8Xqbn.jpg',
'https://img.nickpic.host/q8Xc9J.jpg',
'https://img.nickpic.host/q8XuCs.jpg',
'https://img.nickpic.host/q8XCWO.jpg',
'https://img.nickpic.host/q8XOmQ.jpg',
'https://img.nickpic.host/q8X6wN.jpg',
'https://img.nickpic.host/q8Xhux.jpg',
'https://img.nickpic.host/q8XUlm.jpg',
'https://img.nickpic.host/q8XXt8.jpg',
'https://img.nickpic.host/q8Xieq.jpg',
'https://img.nickpic.host/q8XMCD.jpg',
'https://img.nickpic.host/q8Xtbd.jpg',
'https://img.nickpic.host/q8XRN5.jpg',
'https://img.nickpic.host/q8X4mP.jpg',
'https://img.nickpic.host/q8XDuM.jpg',
'https://img.nickpic.host/q8XwzF.jpg',
'https://img.nickpic.host/q8XzWe.jpg',
'https://img.nickpic.host/q8X8lX.jpg',
'https://img.nickpic.host/q8XYef.jpg',
'https://img.nickpic.host/q8XKMb.jpg',
'https://img.nickpic.host/q8XNr6.jpg',
'https://img.nickpic.host/q8XVQp.jpg',
'https://img.nickpic.host/q8X2oA.jpg',
'https://img.nickpic.host/q8XfNY.jpg',
'https://img.nickpic.host/q8X9AG.jpg',
'https://img.nickpic.host/q8Xezz.jpg',
'https://img.nickpic.host/q8XkZc.jpg',
'https://img.nickpic.host/q8XLlW.jpg',
'https://img.nickpic.host/q8XPM1.jpg',
'https://img.nickpic.host/q8XTkj.jpg',
'https://img.nickpic.host/q8XZrJ.jpg',
'https://img.nickpic.host/q8XdQn.jpg',
'https://img.nickpic.host/q8iIo2.jpg',
'https://img.nickpic.host/q8XyVs.jpg',
'https://img.nickpic.host/q8ipZN.jpg',
'https://img.nickpic.host/q8imAQ.jpg',
'https://img.nickpic.host/q8io7x.jpg',
'https://img.nickpic.host/q8ix5O.jpg',
'https://img.nickpic.host/q8iBRm.jpg',
'https://img.nickpic.host/q8issq.jpg',
'https://img.nickpic.host/q8ibk8.jpg',
'https://img.nickpic.host/q8i3Qd.jpg',
'https://img.nickpic.host/q8iFVD.jpg',
'https://img.nickpic.host/q8ijp5.jpg',
'https://img.nickpic.host/q8ilAP.jpg',
'https://img.nickpic.host/q8i57M.jpg',
'https://img.nickpic.host/q8iSdF.jpg',
'https://img.nickpic.host/q8ig5e.jpg',
'https://img.nickpic.host/q8iqRX.jpg',
'https://img.nickpic.host/q8iEsf.jpg',
'https://img.nickpic.host/q8ihfp.jpg',
'https://img.nickpic.host/q8iuJb.jpg',
'https://img.nickpic.host/q8iOU6.jpg',
'https://img.nickpic.host/q8iCpY.jpg',
'https://img.nickpic.host/q8iQEA.jpg',
'https://img.nickpic.host/q8iXdz.jpg',
'https://img.nickpic.host/q8iU8G.jpg',
'https://img.nickpic.host/q8inSc.jpg',
'https://img.nickpic.host/q8itRW.jpg',
'https://img.nickpic.host/q8i13j.jpg',
'https://img.nickpic.host/q8iMJ1.jpg',
'https://img.nickpic.host/q8i4UJ.jpg',
'https://img.nickpic.host/q8izvs.jpg',
'https://img.nickpic.host/q8iDfn.jpg',
'https://img.nickpic.host/q8iKyx.jpg',
'https://img.nickpic.host/q8i7E2.jpg',
'https://img.nickpic.host/q8i88Q.jpg',
'https://img.nickpic.host/q8iN1O.jpg',
'https://img.nickpic.host/q8iHSN.jpg',
'https://img.nickpic.host/q8iVLm.jpg',
'https://img.nickpic.host/q8i038.jpg',
'https://img.nickpic.host/q8i9fd.jpg',
'https://img.nickpic.host/q8i2Xq.jpg',
'https://img.nickpic.host/q8iJO5.jpg',
'https://img.nickpic.host/q8ikvD.jpg',
'https://img.nickpic.host/q8iL8P.jpg',
'https://img.nickpic.host/q8iPyM.jpg',
'https://img.nickpic.host/q8iZ1e.jpg',
'https://img.nickpic.host/q8iWcF.jpg',
'https://img.nickpic.host/q8idLX.jpg',
'https://img.nickpic.host/q8nIXf.jpg',
'https://img.nickpic.host/q8nGFb.jpg',
'https://img.nickpic.host/q8npxp.jpg',
'https://img.nickpic.host/q8nm06.jpg',
'https://img.nickpic.host/q8nvOY.jpg',
'https://img.nickpic.host/q8nxKA.jpg',
'https://img.nickpic.host/q8naF1.jpg',
'https://img.nickpic.host/q8n3LW.jpg',
'https://img.nickpic.host/q8nbGG.jpg',
'https://img.nickpic.host/q8ns4c.jpg',
'https://img.nickpic.host/q8nrcz.jpg',
'https://img.nickpic.host/q8njij.jpg',
'https://img.nickpic.host/q8nl0J.jpg',
'https://img.nickpic.host/q8nchs.jpg',
'https://img.nickpic.host/q8nSxn.jpg',
'https://img.nickpic.host/q8nE4N.jpg',
'https://img.nickpic.host/q8ngK2.jpg',
'https://img.nickpic.host/q8nuGQ.jpg',
'https://img.nickpic.host/q8nAgx.jpg',
'https://img.nickpic.host/q8n6am.jpg',
'https://img.nickpic.host/q8nOPO.jpg',
'https://img.nickpic.host/q8nQ2q.jpg',
'https://img.nickpic.host/q8nCi8.jpg',
'https://img.nickpic.host/q8nXxd.jpg',
'https://img.nickpic.host/q8nMGP.jpg',
'https://img.nickpic.host/q8nnY5.jpg',
'https://img.nickpic.host/q8nihD.jpg',
'https://img.nickpic.host/q8n4Pe.jpg',
'https://img.nickpic.host/q8nRgM.jpg',
'https://img.nickpic.host/q8n1DF.jpg',
'https://img.nickpic.host/q8nwaX.jpg',
'https://img.nickpic.host/q8nKB6.jpg',
'https://img.nickpic.host/q8nznb.jpg',
'https://img.nickpic.host/q8n72f.jpg',
'https://img.nickpic.host/q8nVIA.jpg',
'https://img.nickpic.host/q8nY6p.jpg',
'https://img.nickpic.host/q8nHYY.jpg',
'https://img.nickpic.host/q8n2Tc.jpg',
'https://img.nickpic.host/q8nfqG.jpg',
'https://img.nickpic.host/q8nJ9j.jpg',
'https://img.nickpic.host/q8n0Dz.jpg',
'https://img.nickpic.host/q8neaW.jpg',
'https://img.nickpic.host/q8nkn1.jpg',
'https://img.nickpic.host/q8ndI2.jpg',
'https://img.nickpic.host/q8nPBJ.jpg',
'https://img.nickpic.host/q8nyqQ.jpg',
'https://img.nickpic.host/q8nT6n.jpg',
'https://img.nickpic.host/q8nWHs.jpg',
'https://img.nickpic.host/q8tITN.jpg',
'https://img.nickpic.host/q8tGwx.jpg',
'https://img.nickpic.host/q8tptm.jpg',
'https://img.nickpic.host/q8tv98.jpg',
'https://img.nickpic.host/q8tojO.jpg',
'https://img.nickpic.host/q8tBbq.jpg',
'https://img.nickpic.host/q8tb6d.jpg',
'https://img.nickpic.host/q8trHD.jpg',
'https://img.nickpic.host/q8tFqP.jpg',
'https://img.nickpic.host/q8tawM.jpg',
'https://img.nickpic.host/q8t3m5.jpg',
'https://img.nickpic.host/q8tjWF.jpg',
'https://img.nickpic.host/q8t5je.jpg',
'https://img.nickpic.host/q8tStX.jpg',
'https://img.nickpic.host/q8tqbf.jpg',
'https://img.nickpic.host/q8tceb.jpg',
'https://img.nickpic.host/q8tANp.jpg',
'https://img.nickpic.host/q8tOmY.jpg',
'https://img.nickpic.host/q8tuC6.jpg',
'https://img.nickpic.host/q8thuA.jpg',
'https://img.nickpic.host/q8tCWz.jpg',
'https://img.nickpic.host/q8t6zG.jpg',
'https://img.nickpic.host/q8tUlc.jpg',
'https://img.nickpic.host/q8tie1.jpg',
'https://img.nickpic.host/q8tXtW.jpg',
'https://img.nickpic.host/q8ttrj.jpg',
'https://img.nickpic.host/q8tMCJ.jpg',
'https://img.nickpic.host/q8tRNn.jpg',
'https://img.nickpic.host/q8tDu2.jpg',
'https://img.nickpic.host/q8t4os.jpg',
'https://img.nickpic.host/q8twzQ.jpg',
'https://img.nickpic.host/q8tzZx.jpg',
'https://img.nickpic.host/q8t8lN.jpg',
'https://img.nickpic.host/q8tYkm.jpg',
'https://img.nickpic.host/q8tKMO.jpg',
'https://img.nickpic.host/q8tNr8.jpg',
'https://img.nickpic.host/q8tVQq.jpg',
'https://img.nickpic.host/q8tfNd.jpg',
'https://img.nickpic.host/q8t9A5.jpg',
'https://img.nickpic.host/q8t2oD.jpg',
'https://img.nickpic.host/q8tezP.jpg',
'https://img.nickpic.host/q8tkZM.jpg',
'https://img.nickpic.host/q8tL5F.jpg',
'https://img.nickpic.host/q8tPMe.jpg',
'https://img.nickpic.host/q8tZsb.jpg',
'https://img.nickpic.host/q8tdQf.jpg',
'https://img.nickpic.host/q8MIpp.jpg',
'https://img.nickpic.host/q8tyV6.jpg',
'https://img.nickpic.host/q8MmAY.jpg',
'https://img.nickpic.host/q8Mo7A.jpg',
'https://img.nickpic.host/q8MpdG.jpg',
'https://img.nickpic.host/q8MBRc.jpg',
'https://img.nickpic.host/q8Mx5z.jpg',
'https://img.nickpic.host/q8Mss1.jpg',
'https://img.nickpic.host/q8MbkW.jpg',
'https://img.nickpic.host/q8M3Uj.jpg',
'https://img.nickpic.host/q8MFVJ.jpg',
'https://img.nickpic.host/q8Mjpn.jpg',
'https://img.nickpic.host/q8MlEs.jpg',
'https://img.nickpic.host/q8MgSx.jpg',
'https://img.nickpic.host/q8M572.jpg',
'https://img.nickpic.host/q8MSdQ.jpg',
'https://img.nickpic.host/q8MqRN.jpg',
'https://img.nickpic.host/q8MuJO.jpg',
'https://img.nickpic.host/q8MOU8.jpg',
'https://img.nickpic.host/q8ME3m.jpg',
'https://img.nickpic.host/q8Mhfq.jpg',
'https://img.nickpic.host/q8MCpd.jpg',
'https://img.nickpic.host/q8MQED.jpg',
'https://img.nickpic.host/q8MU85.jpg',
'https://img.nickpic.host/q8MXdP.jpg',
'https://img.nickpic.host/q8MnSM.jpg',
'https://img.nickpic.host/q8MMJe.jpg',
'https://img.nickpic.host/q8Mt1F.jpg',
'https://img.nickpic.host/q8M13X.jpg',
'https://img.nickpic.host/q8M4Xb.jpg',
'https://img.nickpic.host/q8MDff.jpg',
'https://img.nickpic.host/q8Mzv6.jpg',
'https://img.nickpic.host/q8M7Op.jpg',
'https://img.nickpic.host/q8MKyA.jpg',
'https://img.nickpic.host/q8M88Y.jpg',
'https://img.nickpic.host/q8MHcG.jpg',
'https://img.nickpic.host/q8MN1z.jpg',
'https://img.nickpic.host/q8MVLc.jpg',
'https://img.nickpic.host/q8M03W.jpg',
'https://img.nickpic.host/q8M2X1.jpg',
'https://img.nickpic.host/q8M90j.jpg',
'https://img.nickpic.host/q8MkvJ.jpg',
'https://img.nickpic.host/q8MJOn.jpg',
'https://img.nickpic.host/q8MLKs.jpg',
'https://img.nickpic.host/q8MPy2.jpg',
'https://img.nickpic.host/q8MZ4x.jpg',
'https://img.nickpic.host/q8MWcQ.jpg',
'https://img.nickpic.host/q8MdLN.jpg',
'https://img.nickpic.host/q8RGFO.jpg',
'https://img.nickpic.host/q8RIim.jpg',
'https://img.nickpic.host/q8Rm08.jpg',
'https://img.nickpic.host/q8Rpxq.jpg',
'https://img.nickpic.host/q8RvOd.jpg',
'https://img.nickpic.host/q8RxKD.jpg',
'https://img.nickpic.host/q8RbG5.jpg',
'https://img.nickpic.host/q8RrcP.jpg',
'https://img.nickpic.host/q8Rs4M.jpg',
'https://img.nickpic.host/q8RaFe.jpg',
'https://img.nickpic.host/q8R3PF.jpg',
'https://img.nickpic.host/q8RjiX.jpg',
'https://img.nickpic.host/q8Rl2b.jpg',
'https://img.nickpic.host/q8RSxf.jpg',
'https://img.nickpic.host/q8Rch6.jpg',
'https://img.nickpic.host/q8RgYp.jpg',
'https://img.nickpic.host/q8RAgA.jpg',
'https://img.nickpic.host/q8RuGY.jpg',
'https://img.nickpic.host/q8R6ac.jpg',
'https://img.nickpic.host/q8REDG.jpg',
'https://img.nickpic.host/q8ROPz.jpg',
'https://img.nickpic.host/q8RCiW.jpg',
'https://img.nickpic.host/q8RXBj.jpg',
'https://img.nickpic.host/q8RQ21.jpg',
'https://img.nickpic.host/q8RihJ.jpg',
'https://img.nickpic.host/q8RnYn.jpg',
'https://img.nickpic.host/q8RRg2.jpg',
'https://img.nickpic.host/q8RMIs.jpg',
'https://img.nickpic.host/q8R1DQ.jpg',
'https://img.nickpic.host/q8R4Tx.jpg',
'https://img.nickpic.host/q8RwaN.jpg',
'https://img.nickpic.host/q8R79m.jpg',
'https://img.nickpic.host/q8RznO.jpg',
'https://img.nickpic.host/q8RY6q.jpg',
'https://img.nickpic.host/q8RKB8.jpg',
'https://img.nickpic.host/q8RVID.jpg',
'https://img.nickpic.host/q8RHYd.jpg',
'https://img.nickpic.host/q8Rfq5.jpg',
'https://img.nickpic.host/q8R2TM.jpg',
'https://img.nickpic.host/q8R0DP.jpg',
'https://img.nickpic.host/q8RejF.jpg',
'https://img.nickpic.host/q8Rkne.jpg',
'https://img.nickpic.host/q8RJ9X.jpg',
'https://img.nickpic.host/q8RPbb.jpg',
'https://img.nickpic.host/q8RWH6.jpg',
'https://img.nickpic.host/q8RT6f.jpg',
'https://img.nickpic.host/q8Rdmp.jpg',
'https://img.nickpic.host/q8RyqY.jpg',
'https://img.nickpic.host/q81GwA.jpg',
'https://img.nickpic.host/q81IWG.jpg',
'https://img.nickpic.host/q81ojz.jpg',
'https://img.nickpic.host/q81ptc.jpg',
'https://img.nickpic.host/q81v9W.jpg',
'https://img.nickpic.host/q81Bb1.jpg',
'https://img.nickpic.host/q81rHJ.jpg',
'https://img.nickpic.host/q81bCj.jpg',
'https://img.nickpic.host/q81aw2.jpg',
'https://img.nickpic.host/q81Fus.jpg',
'https://img.nickpic.host/q813mn.jpg',
'https://img.nickpic.host/q81jWQ.jpg',
'https://img.nickpic.host/q81StN.jpg',
'https://img.nickpic.host/q815lx.jpg',
'https://img.nickpic.host/q81ceO.jpg',
'https://img.nickpic.host/q81qrm.jpg',
'https://img.nickpic.host/q81uC8.jpg',
'https://img.nickpic.host/q81ANq.jpg',
'https://img.nickpic.host/q81huD.jpg',
'https://img.nickpic.host/q81Omd.jpg',
'https://img.nickpic.host/q816z5.jpg',
'https://img.nickpic.host/q81CWP.jpg',
'https://img.nickpic.host/q81UlM.jpg',
'https://img.nickpic.host/q81iee.jpg',
'https://img.nickpic.host/q81XMF.jpg',
'https://img.nickpic.host/q81trX.jpg',
'https://img.nickpic.host/q81MQb.jpg',
'https://img.nickpic.host/q81DAp.jpg',
'https://img.nickpic.host/q81RNf.jpg',
'https://img.nickpic.host/q814o6.jpg',
'https://img.nickpic.host/q81zZA.jpg',
'https://img.nickpic.host/q81wzY.jpg',
'https://img.nickpic.host/q81KMz.jpg',
'https://img.nickpic.host/q8185G.jpg',
'https://img.nickpic.host/q81Ykc.jpg',
'https://img.nickpic.host/q81VQ1.jpg',
'https://img.nickpic.host/q81NrW.jpg',
'https://img.nickpic.host/q81fVj.jpg',
'https://img.nickpic.host/q812oJ.jpg',
'https://img.nickpic.host/q81e7s.jpg',
'https://img.nickpic.host/q819An.jpg',
'https://img.nickpic.host/q81L5Q.jpg',
'https://img.nickpic.host/q81kZ2.jpg',
'https://img.nickpic.host/q81ZsO.jpg',
'https://img.nickpic.host/q81TkN.jpg',
'https://img.nickpic.host/q81PRx.jpg',
'https://img.nickpic.host/q81dUm.jpg',
'https://img.nickpic.host/q84Ipq.jpg',
'https://img.nickpic.host/q81yV8.jpg',
'https://img.nickpic.host/q84mAd.jpg',
'https://img.nickpic.host/q84o7D.jpg',
'https://img.nickpic.host/q84x5P.jpg',
'https://img.nickpic.host/q84pd5.jpg',
'https://img.nickpic.host/q84BRM.jpg',
'https://img.nickpic.host/q84bJF.jpg',
'https://img.nickpic.host/q84sse.jpg',
'https://img.nickpic.host/q843UX.jpg',
'https://img.nickpic.host/q84Ffb.jpg',
'https://img.nickpic.host/q84jpf.jpg',
'https://img.nickpic.host/q84lE6.jpg',
'https://img.nickpic.host/q8458p.jpg',
'https://img.nickpic.host/q84SdY.jpg',
'https://img.nickpic.host/q84gSA.jpg',
'https://img.nickpic.host/q84q1G.jpg',
'https://img.nickpic.host/q84uJz.jpg',
'https://img.nickpic.host/q84E3c.jpg',
'https://img.nickpic.host/q84OUW.jpg',
'https://img.nickpic.host/q84hf1.jpg',
'https://img.nickpic.host/q84Cvj.jpg',
'https://img.nickpic.host/q84QEJ.jpg',
'https://img.nickpic.host/q84U8n.jpg',
'https://img.nickpic.host/q84Xys.jpg',
'https://img.nickpic.host/q84nS2.jpg',
'https://img.nickpic.host/q84t1Q.jpg',
'https://img.nickpic.host/q84MLx.jpg',
'https://img.nickpic.host/q844XO.jpg',
'https://img.nickpic.host/q8413N.jpg',
'https://img.nickpic.host/q84D0m.jpg',
'https://img.nickpic.host/q84zv8.jpg',
'https://img.nickpic.host/q847Oq.jpg',
'https://img.nickpic.host/q8488d.jpg',
'https://img.nickpic.host/q84KyD.jpg',
'https://img.nickpic.host/q84Hc5.jpg',
'https://img.nickpic.host/q84N1P.jpg',
'https://img.nickpic.host/q84VLM.jpg',
'https://img.nickpic.host/q840FF.jpg',
'https://img.nickpic.host/q842Xe.jpg',
'https://img.nickpic.host/q8490X.jpg',
'https://img.nickpic.host/q84kxb.jpg',
'https://img.nickpic.host/q84JOf.jpg',
'https://img.nickpic.host/q84LK6.jpg',
'https://img.nickpic.host/q84TGp.jpg',
'https://img.nickpic.host/q84WcY.jpg',
'https://img.nickpic.host/q84Z4A.jpg',
'https://img.nickpic.host/q84dPG.jpg',
'https://img.nickpic.host/q8DGFz.jpg',
'https://img.nickpic.host/q8DIic.jpg',
'https://img.nickpic.host/q8Dm0W.jpg',
'https://img.nickpic.host/q8Dpx1.jpg',
'https://img.nickpic.host/q8Dvhj.jpg',
'https://img.nickpic.host/q8DxKJ.jpg',
'https://img.nickpic.host/q8DbGn.jpg',
'https://img.nickpic.host/q8Drgs.jpg',
'https://img.nickpic.host/q8Ds42.jpg',
'https://img.nickpic.host/q8D3PQ.jpg',
'https://img.nickpic.host/q8Daax.jpg',
'https://img.nickpic.host/q8DjiN.jpg',
'https://img.nickpic.host/q8Dl2O.jpg',
'https://img.nickpic.host/q8Dch8.jpg',
'https://img.nickpic.host/q8DSBm.jpg',
'https://img.nickpic.host/q8DgYq.jpg',
'https://img.nickpic.host/q8DAgD.jpg',
'https://img.nickpic.host/q8DuGd.jpg',
'https://img.nickpic.host/q8DED5.jpg',
'https://img.nickpic.host/q8DOPP.jpg',
'https://img.nickpic.host/q8D6aM.jpg',
'https://img.nickpic.host/q8DCnF.jpg',
'https://img.nickpic.host/q8DQ2e.jpg',
'https://img.nickpic.host/q8DXBX.jpg',
'https://img.nickpic.host/q8Di6b.jpg',
'https://img.nickpic.host/q8DnYf.jpg',
'https://img.nickpic.host/q8DMI6.jpg',
'https://img.nickpic.host/q8DRqp.jpg',
'https://img.nickpic.host/q8D1DY.jpg',
'https://img.nickpic.host/q8D4TA.jpg',
'https://img.nickpic.host/q8DwjG.jpg',
'https://img.nickpic.host/q8Dznz.jpg',
'https://img.nickpic.host/q8D79c.jpg',
'https://img.nickpic.host/q8DKBW.jpg',
'https://img.nickpic.host/q8DY61.jpg',
'https://img.nickpic.host/q8DVIJ.jpg',
'https://img.nickpic.host/q8DHHj.jpg',
'https://img.nickpic.host/q8Dfqn.jpg',
'https://img.nickpic.host/q8D0ws.jpg',
'https://img.nickpic.host/q8D2T2.jpg',
'https://img.nickpic.host/q8DejQ.jpg',
'https://img.nickpic.host/q8Dktx.jpg',
'https://img.nickpic.host/q8DJ9N.jpg',
'https://img.nickpic.host/q8DPbO.jpg',
'https://img.nickpic.host/q8DTCm.jpg',
'https://img.nickpic.host/q8DWH8.jpg',
'https://img.nickpic.host/q8Ddmq.jpg',
'https://img.nickpic.host/q8wGwD.jpg',
'https://img.nickpic.host/q8Dyqd.jpg',
'https://img.nickpic.host/q8wIW5.jpg',
'https://img.nickpic.host/q8wptM.jpg',
'https://img.nickpic.host/q8wojP.jpg',
'https://img.nickpic.host/q8wveF.jpg',
'https://img.nickpic.host/q8wbCX.jpg',
'https://img.nickpic.host/q8wBbe.jpg',
'https://img.nickpic.host/q8wrNb.jpg',
'https://img.nickpic.host/q8w3mf.jpg',
'https://img.nickpic.host/q8wFu6.jpg',
'https://img.nickpic.host/q8wazp.jpg',
'https://img.nickpic.host/q8wjWY.jpg',
'https://img.nickpic.host/q8w5lA.jpg',
'https://img.nickpic.host/q8wcez.jpg',
'https://img.nickpic.host/q8wSMG.jpg',
'https://img.nickpic.host/q8wqrc.jpg',
'https://img.nickpic.host/q8wuCW.jpg',
'https://img.nickpic.host/q8wAN1.jpg',
'https://img.nickpic.host/q8wOoj.jpg',
'https://img.nickpic.host/q8whuJ.jpg',
'https://img.nickpic.host/q8w6zn.jpg',
'https://img.nickpic.host/q8wCZs.jpg',
'https://img.nickpic.host/q8wUl2.jpg',
'https://img.nickpic.host/q8wXMQ.jpg',
'https://img.nickpic.host/q8wikx.jpg',
'https://img.nickpic.host/q8wtrN.jpg',
'https://img.nickpic.host/q8wMQO.jpg',
'https://img.nickpic.host/q8wRVm.jpg',
'https://img.nickpic.host/q8w4o8.jpg',
'https://img.nickpic.host/q8wDAq.jpg',
'https://img.nickpic.host/q8wwzd.jpg',
'https://img.nickpic.host/q8wzZD.jpg',
'https://img.nickpic.host/q8w855.jpg',
'https://img.nickpic.host/q8wKMP.jpg',
'https://img.nickpic.host/q8wYkM.jpg',
'https://img.nickpic.host/q8wNsF.jpg',
'https://img.nickpic.host/q8wVQe.jpg',
'https://img.nickpic.host/q8w2pb.jpg',
'https://img.nickpic.host/q8wfVX.jpg',
'https://img.nickpic.host/q8w9Af.jpg',
'https://img.nickpic.host/q8we76.jpg',
'https://img.nickpic.host/q8wkdp.jpg',
'https://img.nickpic.host/q8wL5Y.jpg',
'https://img.nickpic.host/q8wTJG.jpg',
'https://img.nickpic.host/q8wPRA.jpg',
'https://img.nickpic.host/q8wdUc.jpg',
'https://img.nickpic.host/q8wZsz.jpg',
'https://img.nickpic.host/q8wyVW.jpg',
'https://img.nickpic.host/q8zIp1.jpg',
'https://img.nickpic.host/q8zmEj.jpg',
'https://img.nickpic.host/q8zo7J.jpg',
'https://img.nickpic.host/q8zpdn.jpg',
'https://img.nickpic.host/q8zxSs.jpg',
'https://img.nickpic.host/q8zbJQ.jpg',
'https://img.nickpic.host/q8zBR2.jpg',
'https://img.nickpic.host/q8zs3x.jpg',
'https://img.nickpic.host/q8z3UN.jpg',
'https://img.nickpic.host/q8zFfO.jpg',
'https://img.nickpic.host/q8zjvm.jpg',
'https://img.nickpic.host/q8zlE8.jpg',
'https://img.nickpic.host/q8z58q.jpg',
'https://img.nickpic.host/q8zSdd.jpg',
'https://img.nickpic.host/q8zgSD.jpg',
'https://img.nickpic.host/q8zq15.jpg',
'https://img.nickpic.host/q8zuJP.jpg',
'https://img.nickpic.host/q8zE3M.jpg',
'https://img.nickpic.host/q8zOXF.jpg',
'https://img.nickpic.host/q8zhfe.jpg',
'https://img.nickpic.host/q8zQOb.jpg',
'https://img.nickpic.host/q8zCvX.jpg',
'https://img.nickpic.host/q8zU8f.jpg',
'https://img.nickpic.host/q8zXy6.jpg',
'https://img.nickpic.host/q8zncp.jpg',
'https://img.nickpic.host/q8zt1Y.jpg',
'https://img.nickpic.host/q8zMLA.jpg',
'https://img.nickpic.host/q8z1FG.jpg',
'https://img.nickpic.host/q8zD0c.jpg',
'https://img.nickpic.host/q8z4Xz.jpg',
'https://img.nickpic.host/q8zzvW.jpg',
'https://img.nickpic.host/q8z7O1.jpg',
'https://img.nickpic.host/q8zKyJ.jpg',
'https://img.nickpic.host/q8z8Kj.jpg',
'https://img.nickpic.host/q8zHcn.jpg',
'https://img.nickpic.host/q8zVL2.jpg',
'https://img.nickpic.host/q8zN4s.jpg',
'https://img.nickpic.host/q8z0FQ.jpg',
'https://img.nickpic.host/q8z2ix.jpg',
'https://img.nickpic.host/q8z90N.jpg',
'https://img.nickpic.host/q8zkxO.jpg',
'https://img.nickpic.host/q8zJhm.jpg',
'https://img.nickpic.host/q8zLK8.jpg',
'https://img.nickpic.host/q8zTGq.jpg',
'https://img.nickpic.host/q8zWcd.jpg',
'https://img.nickpic.host/q8zZ4D.jpg',
'https://img.nickpic.host/q8zdP5.jpg',
'https://img.nickpic.host/q87GFP.jpg',
'https://img.nickpic.host/q87IiM.jpg',
'https://img.nickpic.host/q87pxe.jpg',
'https://img.nickpic.host/q87m2F.jpg',
'https://img.nickpic.host/q87vhX.jpg',
'https://img.nickpic.host/q87xYb.jpg',
'https://img.nickpic.host/q87rg6.jpg',
'https://img.nickpic.host/q87bGf.jpg',
'https://img.nickpic.host/q87sDp.jpg',
'https://img.nickpic.host/q873PY.jpg',
'https://img.nickpic.host/q87aaA.jpg',
'https://img.nickpic.host/q87jnG.jpg',
'https://img.nickpic.host/q87l2z.jpg',
'https://img.nickpic.host/q87SBc.jpg',
'https://img.nickpic.host/q87chW.jpg',
'https://img.nickpic.host/q87uIj.jpg',
'https://img.nickpic.host/q87gY1.jpg',
'https://img.nickpic.host/q87AgJ.jpg',
'https://img.nickpic.host/q87EDn.jpg',
'https://img.nickpic.host/q87OTs.jpg',
'https://img.nickpic.host/q876a2.jpg',
'https://img.nickpic.host/q87CnQ.jpg',
'https://img.nickpic.host/q87Q9x.jpg',
'https://img.nickpic.host/q87XBN.jpg',
'https://img.nickpic.host/q87i6O.jpg',
'https://img.nickpic.host/q87MI8.jpg',
'https://img.nickpic.host/q87nHm.jpg',
'https://img.nickpic.host/q87Rqq.jpg',
'https://img.nickpic.host/q874TD.jpg',
'https://img.nickpic.host/q871Dd.jpg',
'https://img.nickpic.host/q87wj5.jpg',
'https://img.nickpic.host/q87znP.jpg',
'https://img.nickpic.host/q8779M.jpg',
'https://img.nickpic.host/q87KbF.jpg',
'https://img.nickpic.host/q87Y6e.jpg',
'https://img.nickpic.host/q87HHX.jpg',
'https://img.nickpic.host/q87Vmb.jpg',
'https://img.nickpic.host/q870w6.jpg',
'https://img.nickpic.host/q87fqf.jpg',
'https://img.nickpic.host/q87ktA.jpg',
'https://img.nickpic.host/q87Pbz.jpg',
'https://img.nickpic.host/q87JeG.jpg',
'https://img.nickpic.host/q87TCc.jpg',
'https://img.nickpic.host/q87yuj.jpg',
'https://img.nickpic.host/q87WHW.jpg',
'https://img.nickpic.host/q87dm1.jpg',
'https://img.nickpic.host/q88GwJ.jpg',
'https://img.nickpic.host/q88IWn.jpg',
'https://img.nickpic.host/q88veQ.jpg',
'https://img.nickpic.host/q88ols.jpg',
'https://img.nickpic.host/q88pt2.jpg',
'https://img.nickpic.host/q88Brx.jpg',
'https://img.nickpic.host/q88bCN.jpg',
'https://img.nickpic.host/q883om.jpg',
'https://img.nickpic.host/q88rNO.jpg',
'https://img.nickpic.host/q88Fu8.jpg',
'https://img.nickpic.host/q88azq.jpg',
'https://img.nickpic.host/q88jWd.jpg',
'https://img.nickpic.host/q885lD.jpg',
'https://img.nickpic.host/q88SM5.jpg',
'https://img.nickpic.host/q88ceP.jpg',
'https://img.nickpic.host/q88qrM.jpg',
'https://img.nickpic.host/q88uQF.jpg',
'https://img.nickpic.host/q88ANe.jpg',
'https://img.nickpic.host/q88OoX.jpg',
'https://img.nickpic.host/q88hAb.jpg',
'https://img.nickpic.host/q886zf.jpg',
'https://img.nickpic.host/q88CZ6.jpg',
'https://img.nickpic.host/q88U5p.jpg',
'https://img.nickpic.host/q88XMY.jpg',
'https://img.nickpic.host/q88tsG.jpg',
'https://img.nickpic.host/q88ikA.jpg',
'https://img.nickpic.host/q88MQz.jpg',
'https://img.nickpic.host/q88RVc.jpg',
'https://img.nickpic.host/q884oW.jpg',
'https://img.nickpic.host/q88DA1.jpg',
'https://img.nickpic.host/q88w7j.jpg',
'https://img.nickpic.host/q88zZJ.jpg',
'https://img.nickpic.host/q8885n.jpg',
'https://img.nickpic.host/q88KRs.jpg',
'https://img.nickpic.host/q88Yk2.jpg',
'https://img.nickpic.host/q88NsQ.jpg',
'https://img.nickpic.host/q88VUx.jpg',
'https://img.nickpic.host/q88fVN.jpg',
'https://img.nickpic.host/q882pO.jpg',
'https://img.nickpic.host/q889Em.jpg',
'https://img.nickpic.host/q88e78.jpg',
'https://img.nickpic.host/q88kdq.jpg',
'https://img.nickpic.host/q88L5d.jpg',
'https://img.nickpic.host/q88PRD.jpg',
'https://img.nickpic.host/q88TJ5.jpg',
'https://img.nickpic.host/q88ZsP.jpg',
'https://img.nickpic.host/q88dUM.jpg',
'https://img.nickpic.host/q88yfF.jpg',
'https://img.nickpic.host/q8KIpe.jpg',
'https://img.nickpic.host/q8KmEX.jpg',
'https://img.nickpic.host/q8Ko8b.jpg',
'https://img.nickpic.host/q8Kpdf.jpg',
'https://img.nickpic.host/q8KxS6.jpg',
'https://img.nickpic.host/q8KB1p.jpg',
'https://img.nickpic.host/q8KbJY.jpg',
'https://img.nickpic.host/q8K3XG.jpg',
'https://img.nickpic.host/q8Ks3A.jpg',
'https://img.nickpic.host/q8KFfz.jpg',
'https://img.nickpic.host/q8Kjvc.jpg',
'https://img.nickpic.host/q8KlEW.jpg',
'https://img.nickpic.host/q8KSyj.jpg',
'https://img.nickpic.host/q8K581.jpg',
'https://img.nickpic.host/q8Kq1n.jpg',
'https://img.nickpic.host/q8KgSJ.jpg',
'https://img.nickpic.host/q8KuLs.jpg',
'https://img.nickpic.host/q8KE32.jpg',
'https://img.nickpic.host/q8KOXQ.jpg',
'https://img.nickpic.host/q8Kh0x.jpg',
'https://img.nickpic.host/q8KCvN.jpg',
'https://img.nickpic.host/q8KQOO.jpg',
'https://img.nickpic.host/q8KUKm.jpg',
'https://img.nickpic.host/q8KXy8.jpg',
'https://img.nickpic.host/q8Kncq.jpg',
'https://img.nickpic.host/q8Kt1d.jpg',
'https://img.nickpic.host/q8KMLD.jpg',
'https://img.nickpic.host/q8K4XP.jpg',
'https://img.nickpic.host/q8K1F5.jpg',
'https://img.nickpic.host/q8KD0M.jpg',
'https://img.nickpic.host/q8KzxF.jpg',
'https://img.nickpic.host/q8K7Oe.jpg',
'https://img.nickpic.host/q8K8KX.jpg',
'https://img.nickpic.host/q8KYGb.jpg',
'https://img.nickpic.host/q8KN46.jpg',
'https://img.nickpic.host/q8KHcf.jpg',
'https://img.nickpic.host/q8KVPp.jpg',
'https://img.nickpic.host/q8K0FY.jpg',
'https://img.nickpic.host/q8K92G.jpg',
'https://img.nickpic.host/q8K2iA.jpg',
'https://img.nickpic.host/q8Kkxz.jpg',
'https://img.nickpic.host/q8KJhc.jpg',
'https://img.nickpic.host/q8KWgj.jpg',
'https://img.nickpic.host/q8KLKW.jpg',
'https://img.nickpic.host/q8KTG1.jpg',
'https://img.nickpic.host/q8YGas.jpg',
'https://img.nickpic.host/q8KZ4J.jpg',
'https://img.nickpic.host/q8KdPn.jpg',
'https://img.nickpic.host/q8YIi2.jpg',
'https://img.nickpic.host/q8Ym2Q.jpg',
'https://img.nickpic.host/q8YpBx.jpg',
'https://img.nickpic.host/q8YvhN.jpg',
'https://img.nickpic.host/q8YxYO.jpg',
'https://img.nickpic.host/q8YbIm.jpg',
'https://img.nickpic.host/q8Yrg8.jpg',
'https://img.nickpic.host/q8YsDq.jpg',
'https://img.nickpic.host/q8YaaD.jpg',
'https://img.nickpic.host/q8Y3Pd.jpg',
'https://img.nickpic.host/q8Yjn5.jpg',
'https://img.nickpic.host/q8Yl2P.jpg',
'https://img.nickpic.host/q8Yc6F.jpg',
'https://img.nickpic.host/q8YSBM.jpg',
'https://img.nickpic.host/q8YgYe.jpg',
'https://img.nickpic.host/q8YuIX.jpg',
'https://img.nickpic.host/q8YAqb.jpg',
'https://img.nickpic.host/q8YEDf.jpg',
'https://img.nickpic.host/q8Y6jp.jpg',
'https://img.nickpic.host/q8YOT6.jpg',
'https://img.nickpic.host/q8YCnY.jpg',
'https://img.nickpic.host/q8YQ9A.jpg',
'https://img.nickpic.host/q8YXbG.jpg',
'https://img.nickpic.host/q8YnHc.jpg',
'https://img.nickpic.host/q8Yi6z.jpg',
'https://img.nickpic.host/q8YMIW.jpg',
'https://img.nickpic.host/q8YRq1.jpg',
'https://img.nickpic.host/q8Y1wj.jpg',
'https://img.nickpic.host/q8Y4TJ.jpg',
'https://img.nickpic.host/q8Ywjn.jpg',
'https://img.nickpic.host/q8Yzts.jpg',
'https://img.nickpic.host/q8YYCx.jpg',
'https://img.nickpic.host/q8Y792.jpg',
'https://img.nickpic.host/q8YKbQ.jpg',
'https://img.nickpic.host/q8Yfum.jpg',
'https://img.nickpic.host/q8YHHN.jpg',
'https://img.nickpic.host/q8YVmO.jpg',
'https://img.nickpic.host/q8Y0w8.jpg',
'https://img.nickpic.host/q8Y2Wq.jpg',
'https://img.nickpic.host/q8Yejd.jpg',
'https://img.nickpic.host/q8YktD.jpg',
'https://img.nickpic.host/q8YJe5.jpg',
'https://img.nickpic.host/q8YPbP.jpg',
'https://img.nickpic.host/q8YTCM.jpg',
'https://img.nickpic.host/q8YWNF.jpg',
'https://img.nickpic.host/q8YyuX.jpg',
'https://img.nickpic.host/q8Ydme.jpg',
'https://img.nickpic.host/q8HGzb.jpg',
'https://img.nickpic.host/q8Hol6.jpg',
'https://img.nickpic.host/q8HIWf.jpg',
'https://img.nickpic.host/q8HpMp.jpg',
'https://img.nickpic.host/q8HveY.jpg',
'https://img.nickpic.host/q8HbQG.jpg',
'https://img.nickpic.host/q8HBrA.jpg',
'https://img.nickpic.host/q8HrNz.jpg',
'https://img.nickpic.host/q8H3oc.jpg',
'https://img.nickpic.host/q8HFuW.jpg',
'https://img.nickpic.host/q8Haz1.jpg',
'https://img.nickpic.host/q8H5lJ.jpg',
'https://img.nickpic.host/q8HjZj.jpg',
'https://img.nickpic.host/q8HSMn.jpg',
'https://img.nickpic.host/q8Hqr2.jpg',
'https://img.nickpic.host/q8Hcks.jpg',
'https://img.nickpic.host/q8HuQQ.jpg',
'https://img.nickpic.host/q8HAVx.jpg',
'https://img.nickpic.host/q8HhAO.jpg',
'https://img.nickpic.host/q8HOoN.jpg',
'https://img.nickpic.host/q8H67m.jpg',
'https://img.nickpic.host/q8HU5q.jpg',
'https://img.nickpic.host/q8HCZ8.jpg',
'https://img.nickpic.host/q8HikD.jpg',
'https://img.nickpic.host/q8Hts5.jpg',
'https://img.nickpic.host/q8HXMd.jpg',
'https://img.nickpic.host/q8HMQP.jpg',
'https://img.nickpic.host/q8HRVM.jpg',
'https://img.nickpic.host/q8HDAe.jpg',
'https://img.nickpic.host/q8H4pF.jpg',
'https://img.nickpic.host/q8Hw7X.jpg',
'https://img.nickpic.host/q8H85f.jpg',
'https://img.nickpic.host/q8HKR6.jpg',
'https://img.nickpic.host/q8Hzdb.jpg',
'https://img.nickpic.host/q8HNsY.jpg',
'https://img.nickpic.host/q8HYJp.jpg',
'https://img.nickpic.host/q8HVUA.jpg',
'https://img.nickpic.host/q8HffG.jpg',
'https://img.nickpic.host/q8H9Ec.jpg',
'https://img.nickpic.host/q8H2pz.jpg',
'https://img.nickpic.host/q8He7W.jpg',
'https://img.nickpic.host/q8HLSj.jpg',
'https://img.nickpic.host/q8Hkd1.jpg',
'https://img.nickpic.host/q8HPRJ.jpg',
'https://img.nickpic.host/q8HTJn.jpg',
'https://img.nickpic.host/q8HZ3s.jpg',
'https://img.nickpic.host/q8HdU2.jpg',
'https://img.nickpic.host/q8NIvx.jpg',
'https://img.nickpic.host/q8HyfQ.jpg',
'https://img.nickpic.host/q8NmEN.jpg',
'https://img.nickpic.host/q8Npym.jpg',
'https://img.nickpic.host/q8No8O.jpg',
'https://img.nickpic.host/q8N3X5.jpg',
'https://img.nickpic.host/q8NxS8.jpg',
'https://img.nickpic.host/q8NB1q.jpg',
'https://img.nickpic.host/q8Ns3D.jpg',
'https://img.nickpic.host/q8NbJd.jpg',
'https://img.nickpic.host/q8NFfP.jpg',
'https://img.nickpic.host/q8NjvM.jpg',
'https://img.nickpic.host/q8NlOF.jpg',
'https://img.nickpic.host/q8N58e.jpg',
'https://img.nickpic.host/q8NSyX.jpg',
'https://img.nickpic.host/q8Nq1f.jpg',
'https://img.nickpic.host/q8Ngcb.jpg',
'https://img.nickpic.host/q8NuL6.jpg',
'https://img.nickpic.host/q8NEFp.jpg',
'https://img.nickpic.host/q8NOXY.jpg',
'https://img.nickpic.host/q8NCxG.jpg',
'https://img.nickpic.host/q8Nh0A.jpg',
'https://img.nickpic.host/q8NQOz.jpg',
'https://img.nickpic.host/q8NXyW.jpg',
'https://img.nickpic.host/q8NUKc.jpg',
'https://img.nickpic.host/q8Nnc1.jpg',
'https://img.nickpic.host/q8Nt4j.jpg',
'https://img.nickpic.host/q8NMLJ.jpg',
'https://img.nickpic.host/q8N4is.jpg',
'https://img.nickpic.host/q8N1Fn.jpg',
'https://img.nickpic.host/q8ND02.jpg',
'https://img.nickpic.host/q8N7hx.jpg',
'https://img.nickpic.host/q8NzxQ.jpg',
'https://img.nickpic.host/q8NYGO.jpg',
'https://img.nickpic.host/q8N8KN.jpg',
'https://img.nickpic.host/q8NHgm.jpg',
'https://img.nickpic.host/q8NVPq.jpg',
'https://img.nickpic.host/q8NN48.jpg',
'https://img.nickpic.host/q8N2iD.jpg',
'https://img.nickpic.host/q8N0Fd.jpg',
'https://img.nickpic.host/q8N925.jpg',
'https://img.nickpic.host/q8NkxP.jpg',
'https://img.nickpic.host/q8NTGe.jpg',
'https://img.nickpic.host/q8NJhM.jpg',
'https://img.nickpic.host/q8NLYF.jpg',
'https://img.nickpic.host/q8NWgX.jpg',
'https://img.nickpic.host/q8NdPf.jpg',
'https://img.nickpic.host/q8NZDb.jpg',
'https://img.nickpic.host/q8VGa6.jpg',
'https://img.nickpic.host/q8VInp.jpg',
'https://img.nickpic.host/q8Vm2Y.jpg',
'https://img.nickpic.host/q8VpBA.jpg',
'https://img.nickpic.host/q8VxYz.jpg',
'https://img.nickpic.host/q8Vv6G.jpg',
'https://img.nickpic.host/q8VbIc.jpg',
'https://img.nickpic.host/q8VrgW.jpg',
'https://img.nickpic.host/q8V3Tj.jpg',
'https://img.nickpic.host/q8VsD1.jpg',
'https://img.nickpic.host/q8VaaJ.jpg',
'https://img.nickpic.host/q8Vjnn.jpg',
'https://img.nickpic.host/q8Vl9s.jpg',
'https://img.nickpic.host/q8VSB2.jpg',
'https://img.nickpic.host/q8Vc6Q.jpg',
'https://img.nickpic.host/q8VgHx.jpg',
'https://img.nickpic.host/q8VAqO.jpg',
'https://img.nickpic.host/q8VuIN.jpg',
'https://img.nickpic.host/q8VOT8.jpg',
'https://img.nickpic.host/q8VEwm.jpg',
'https://img.nickpic.host/q8V6jq.jpg',
'https://img.nickpic.host/q8VCnd.jpg',
'https://img.nickpic.host/q8VXb5.jpg',
'https://img.nickpic.host/q8VQ9D.jpg',
'https://img.nickpic.host/q8Vi6P.jpg',
'https://img.nickpic.host/q8VnHM.jpg',
'https://img.nickpic.host/q8VMmF.jpg',
'https://img.nickpic.host/q8VRqe.jpg',
'https://img.nickpic.host/q8V1wX.jpg',
'https://img.nickpic.host/q8V4Wb.jpg',
'https://img.nickpic.host/q8Vwjf.jpg',
'https://img.nickpic.host/q8Vzt6.jpg',
'https://img.nickpic.host/q8V7ep.jpg',
'https://img.nickpic.host/q8VKbY.jpg',
'https://img.nickpic.host/q8VYCA.jpg',
'https://img.nickpic.host/q8VHNG.jpg',
'https://img.nickpic.host/q8VVmz.jpg',
'https://img.nickpic.host/q8Vfuc.jpg',
'https://img.nickpic.host/q8V0wW.jpg',
'https://img.nickpic.host/q8Velj.jpg',
'https://img.nickpic.host/q8V2W1.jpg',
'https://img.nickpic.host/q8VktJ.jpg',
'https://img.nickpic.host/q8VJen.jpg',
'https://img.nickpic.host/q8VPrs.jpg',
'https://img.nickpic.host/q8VTC2.jpg',
'https://img.nickpic.host/q8VWNQ.jpg',
'https://img.nickpic.host/q8Vdox.jpg',
'https://img.nickpic.host/q8VyuN.jpg',
'https://img.nickpic.host/q8fGzO.jpg',
'https://img.nickpic.host/q8fIZm.jpg',
'https://img.nickpic.host/q8fol8.jpg',
'https://img.nickpic.host/q8fpMq.jpg',
'https://img.nickpic.host/q8fved.jpg',
'https://img.nickpic.host/q8fBrD.jpg',
'https://img.nickpic.host/q8fbQ5.jpg',
'https://img.nickpic.host/q8frNP.jpg',
'https://img.nickpic.host/q8fFAF.jpg',
'https://img.nickpic.host/q8f3oM.jpg',
'https://img.nickpic.host/q8faze.jpg',
'https://img.nickpic.host/q8fjZX.jpg',
'https://img.nickpic.host/q8f55b.jpg',
'https://img.nickpic.host/q8fSMf.jpg',
'https://img.nickpic.host/q8fck6.jpg',
'https://img.nickpic.host/q8fqsp.jpg',
'https://img.nickpic.host/q8fuQY.jpg',
'https://img.nickpic.host/q8fAVA.jpg',
'https://img.nickpic.host/q8fOpG.jpg',
'https://img.nickpic.host/q8fhAz.jpg',
'https://img.nickpic.host/q8f67c.jpg',
'https://img.nickpic.host/q8fCZW.jpg',
'https://img.nickpic.host/q8fU51.jpg',
'https://img.nickpic.host/q8fXRj.jpg',
'https://img.nickpic.host/q8fikJ.jpg',
'https://img.nickpic.host/q8ftsn.jpg',
'https://img.nickpic.host/q8fMUs.jpg',
'https://img.nickpic.host/q8fRV2.jpg',
'https://img.nickpic.host/q8f4pQ.jpg',
'https://img.nickpic.host/q8fDEx.jpg',
'https://img.nickpic.host/q8fw7N.jpg',
'https://img.nickpic.host/q8fzdO.jpg',
'https://img.nickpic.host/q8f8Sm.jpg',
'https://img.nickpic.host/q8fKR8.jpg',
'https://img.nickpic.host/q8fYJq.jpg',
'https://img.nickpic.host/q8fNsd.jpg',
'https://img.nickpic.host/q8fVUD.jpg',
'https://img.nickpic.host/q8fff5.jpg',
'https://img.nickpic.host/q8f2pP.jpg',
'https://img.nickpic.host/q8f9EM.jpg',
'https://img.nickpic.host/q8fe8F.jpg',
'https://img.nickpic.host/q8fkde.jpg',
'https://img.nickpic.host/q8fLSX.jpg',
'https://img.nickpic.host/q8fP1b.jpg',
'https://img.nickpic.host/q8fTJf.jpg',
'https://img.nickpic.host/q8fZ36.jpg',
'https://img.nickpic.host/q8fdXp.jpg',
'https://img.nickpic.host/q8fyfY.jpg',
'https://img.nickpic.host/q80IvA.jpg',
'https://img.nickpic.host/q80mOG.jpg',
'https://img.nickpic.host/q80pyc.jpg',
'https://img.nickpic.host/q80o8z.jpg',
'https://img.nickpic.host/q80xSW.jpg',
'https://img.nickpic.host/q80B11.jpg',
'https://img.nickpic.host/q80bLj.jpg',
'https://img.nickpic.host/q80s3J.jpg',
'https://img.nickpic.host/q803Xn.jpg',
'https://img.nickpic.host/q80F0s.jpg',
'https://img.nickpic.host/q80jv2.jpg',
'https://img.nickpic.host/q80lOQ.jpg',
'https://img.nickpic.host/q805Kx.jpg',
'https://img.nickpic.host/q80SyN.jpg',
'https://img.nickpic.host/q80gcO.jpg',
'https://img.nickpic.host/q80q4m.jpg',
'https://img.nickpic.host/q80uL8.jpg',
'https://img.nickpic.host/q80EFq.jpg',
'https://img.nickpic.host/q80OXd.jpg',
'https://img.nickpic.host/q80h0D.jpg',
'https://img.nickpic.host/q80Cx5.jpg',
'https://img.nickpic.host/q80QOP.jpg',
'https://img.nickpic.host/q80UKM.jpg',
'https://img.nickpic.host/q80iGF.jpg',
'https://img.nickpic.host/q80nce.jpg',
'https://img.nickpic.host/q80t4X.jpg',
'https://img.nickpic.host/q80MPb.jpg',
'https://img.nickpic.host/q801Ff.jpg',
'https://img.nickpic.host/q804i6.jpg',
'https://img.nickpic.host/q80D2p.jpg',
'https://img.nickpic.host/q80zxY.jpg',
'https://img.nickpic.host/q807hA.jpg',
'https://img.nickpic.host/q808YG.jpg',
'https://img.nickpic.host/q80YGz.jpg',
'https://img.nickpic.host/q80Hgc.jpg',
'https://img.nickpic.host/q80N4W.jpg',
'https://img.nickpic.host/q80VP1.jpg',
'https://img.nickpic.host/q800aj.jpg',
'https://img.nickpic.host/q80kBs.jpg',
'https://img.nickpic.host/q802iJ.jpg',
'https://img.nickpic.host/q8092n.jpg',
'https://img.nickpic.host/q80Jh2.jpg',
'https://img.nickpic.host/q80LYQ.jpg',
'https://img.nickpic.host/q80TIx.jpg',
'https://img.nickpic.host/q80WgN.jpg',
'https://img.nickpic.host/q80ZDO.jpg',
'https://img.nickpic.host/q82Ga8.jpg',
'https://img.nickpic.host/q80dTm.jpg',
'https://img.nickpic.host/q82Inq.jpg',
'https://img.nickpic.host/q82m2d.jpg',
'https://img.nickpic.host/q82pBD.jpg',
'https://img.nickpic.host/q82v65.jpg',
'https://img.nickpic.host/q82xYP.jpg',
'https://img.nickpic.host/q82bIM.jpg',
'https://img.nickpic.host/q82rqF.jpg',
'https://img.nickpic.host/q82sDe.jpg',
'https://img.nickpic.host/q823TX.jpg',
'https://img.nickpic.host/q82ajb.jpg',
'https://img.nickpic.host/q82jnf.jpg',
'https://img.nickpic.host/q82l96.jpg',
'https://img.nickpic.host/q82Sbp.jpg',
'https://img.nickpic.host/q82c6Y.jpg',
'https://img.nickpic.host/q82gHA.jpg',
'https://img.nickpic.host/q82umG.jpg',
'https://img.nickpic.host/q82Aqz.jpg',
'https://img.nickpic.host/q82Ewc.jpg',
'https://img.nickpic.host/q82OTW.jpg',
'https://img.nickpic.host/q826j1.jpg',
'https://img.nickpic.host/q82Ctj.jpg',
'https://img.nickpic.host/q82Q9J.jpg',
'https://img.nickpic.host/q82Xbn.jpg',
'https://img.nickpic.host/q82iCs.jpg',
'https://img.nickpic.host/q82nH2.jpg',
'https://img.nickpic.host/q82Rux.jpg',
'https://img.nickpic.host/q82MmQ.jpg',
'https://img.nickpic.host/q821wN.jpg',
'https://img.nickpic.host/q824WO.jpg',
'https://img.nickpic.host/q82wlm.jpg',
'https://img.nickpic.host/q82zt8.jpg',
'https://img.nickpic.host/q827eq.jpg',
'https://img.nickpic.host/q82Kbd.jpg',
'https://img.nickpic.host/q82YCD.jpg',
'https://img.nickpic.host/q82VmP.jpg',
'https://img.nickpic.host/q82HN5.jpg',
'https://img.nickpic.host/q82fuM.jpg',
'https://img.nickpic.host/q820zF.jpg',
'https://img.nickpic.host/q82elX.jpg',
'https://img.nickpic.host/q822We.jpg',
'https://img.nickpic.host/q82Jef.jpg',
'https://img.nickpic.host/q82kMb.jpg',
'https://img.nickpic.host/q82Pr6.jpg',
'https://img.nickpic.host/q82TQp.jpg',
'https://img.nickpic.host/q82doA.jpg',
'https://img.nickpic.host/q82WNY.jpg',
'https://img.nickpic.host/q82yAG.jpg',
'https://img.nickpic.host/q89Gzz.jpg',
'https://img.nickpic.host/q89IZc.jpg',
'https://img.nickpic.host/q89olW.jpg',
'https://img.nickpic.host/q89pM1.jpg',
'https://img.nickpic.host/q89vkj.jpg',
'https://img.nickpic.host/q89BrJ.jpg',
'https://img.nickpic.host/q89bQn.jpg',
'https://img.nickpic.host/q89rVs.jpg',
'https://img.nickpic.host/q89FAQ.jpg',
'https://img.nickpic.host/q893o2.jpg',
'https://img.nickpic.host/q89a7x.jpg',
'https://img.nickpic.host/q89jZN.jpg',
'https://img.nickpic.host/q8955O.jpg',
'https://img.nickpic.host/q89SRm.jpg',
'https://img.nickpic.host/q89ck8.jpg',
'https://img.nickpic.host/q89qsq.jpg',
'https://img.nickpic.host/q89uQd.jpg',
'https://img.nickpic.host/q89AVD.jpg',
'https://img.nickpic.host/q89Op5.jpg',
'https://img.nickpic.host/q89hAP.jpg',
'https://img.nickpic.host/q8967M.jpg',
'https://img.nickpic.host/q89U5e.jpg',
'https://img.nickpic.host/q89CdF.jpg',
'https://img.nickpic.host/q89XRX.jpg',
'https://img.nickpic.host/q89iJb.jpg',
'https://img.nickpic.host/q89tsf.jpg',
'https://img.nickpic.host/q89Rfp.jpg',
'https://img.nickpic.host/q89MU6.jpg',
'https://img.nickpic.host/q894pY.jpg',
'https://img.nickpic.host/q89DEA.jpg',
'https://img.nickpic.host/q89w8G.jpg',
'https://img.nickpic.host/q898Sc.jpg',
'https://img.nickpic.host/q89KRW.jpg',
'https://img.nickpic.host/q89zdz.jpg',
'https://img.nickpic.host/q89N3j.jpg',
'https://img.nickpic.host/q89YJ1.jpg',
'https://img.nickpic.host/q89VUJ.jpg',
'https://img.nickpic.host/q89ffn.jpg',
'https://img.nickpic.host/q899E2.jpg',
'https://img.nickpic.host/q892vs.jpg',
'https://img.nickpic.host/q89e8Q.jpg',
'https://img.nickpic.host/q89P1O.jpg',
'https://img.nickpic.host/q89TLm.jpg',
'https://img.nickpic.host/q89Z38.jpg',
'https://img.nickpic.host/q89dXq.jpg',
'https://img.nickpic.host/q89yfd.jpg',
'https://img.nickpic.host/q8eIvD.jpg',
'https://img.nickpic.host/q8emO5.jpg',
'https://img.nickpic.host/q8eo8P.jpg',
'https://img.nickpic.host/q8epyM.jpg',
'https://img.nickpic.host/q8excF.jpg',
'https://img.nickpic.host/q8eB1e.jpg',
'https://img.nickpic.host/q8ebLX.jpg',
'https://img.nickpic.host/q8esFb.jpg',
'https://img.nickpic.host/q8e3Xf.jpg',
'https://img.nickpic.host/q8eF06.jpg',
'https://img.nickpic.host/q8ejxp.jpg',
'https://img.nickpic.host/q8e5KA.jpg',
'https://img.nickpic.host/q8elOY.jpg',
'https://img.nickpic.host/q8ecGG.jpg',
'https://img.nickpic.host/q8eq4c.jpg',
'https://img.nickpic.host/q8egcz.jpg',
'https://img.nickpic.host/q8eEF1.jpg',
'https://img.nickpic.host/q8eOij.jpg',
'https://img.nickpic.host/q8euLW.jpg',
'https://img.nickpic.host/q8eh0J.jpg',
'https://img.nickpic.host/q8eUK2.jpg',
'https://img.nickpic.host/q8eCxn.jpg',
'https://img.nickpic.host/q8eQhs.jpg',
'https://img.nickpic.host/q8eiGQ.jpg',
'https://img.nickpic.host/q8et4N.jpg',
'https://img.nickpic.host/q8engx.jpg',
'https://img.nickpic.host/q8eMPO.jpg',
'https://img.nickpic.host/q8e4i8.jpg',
'https://img.nickpic.host/q8e1am.jpg',
'https://img.nickpic.host/q8eD2q.jpg',
'https://img.nickpic.host/q8ezxd.jpg',
'https://img.nickpic.host/q8e7hD.jpg',
'https://img.nickpic.host/q8e8Y5.jpg',
'https://img.nickpic.host/q8eYGP.jpg',
'https://img.nickpic.host/q8eHgM.jpg',
'https://img.nickpic.host/q8eNDF.jpg',
'https://img.nickpic.host/q8eVPe.jpg',
'https://img.nickpic.host/q8e0aX.jpg',
'https://img.nickpic.host/q8e2nb.jpg',
'https://img.nickpic.host/q8e92f.jpg',
'https://img.nickpic.host/q8ekB6.jpg',
'https://img.nickpic.host/q8eJ6p.jpg',
'https://img.nickpic.host/q8eTIA.jpg',
'https://img.nickpic.host/q8eLYY.jpg',
'https://img.nickpic.host/q8eWqG.jpg',
'https://img.nickpic.host/q8edTc.jpg',
'https://img.nickpic.host/q8kIn1.jpg',
'https://img.nickpic.host/q8kGaW.jpg',
'https://img.nickpic.host/q8km9j.jpg',
'https://img.nickpic.host/q8kpBJ.jpg',
'https://img.nickpic.host/q8kxHs.jpg',
'https://img.nickpic.host/q8kv6n.jpg',
'https://img.nickpic.host/q8kbI2.jpg',
'https://img.nickpic.host/q8krqQ.jpg',
'https://img.nickpic.host/q8kajO.jpg',
'https://img.nickpic.host/q8kswx.jpg',
'https://img.nickpic.host/q8k3TN.jpg',
'https://img.nickpic.host/q8kjtm.jpg',
'https://img.nickpic.host/q8kl98.jpg',
'https://img.nickpic.host/q8kSbq.jpg',
'https://img.nickpic.host/q8kgHD.jpg',
'https://img.nickpic.host/q8kc6d.jpg',
'https://img.nickpic.host/q8kum5.jpg',
'https://img.nickpic.host/q8kAqP.jpg',
'https://img.nickpic.host/q8kOWF.jpg',
'https://img.nickpic.host/q8kEwM.jpg',
'https://img.nickpic.host/q8k6je.jpg',
'https://img.nickpic.host/q8kCtX.jpg',
'https://img.nickpic.host/q8kQeb.jpg',
'https://img.nickpic.host/q8knNp.jpg',
'https://img.nickpic.host/q8kXbf.jpg',
'https://img.nickpic.host/q8kiC6.jpg',
'https://img.nickpic.host/q8kRuA.jpg',
'https://img.nickpic.host/q8kMmY.jpg',
'https://img.nickpic.host/q8k1zG.jpg',
'https://img.nickpic.host/q8k4Wz.jpg',
'https://img.nickpic.host/q8kztW.jpg',
'https://img.nickpic.host/q8kwlc.jpg',
'https://img.nickpic.host/q8k7e1.jpg',
'https://img.nickpic.host/q8kYCJ.jpg',
'https://img.nickpic.host/q8kKrj.jpg',
'https://img.nickpic.host/q8kHNn.jpg',
'https://img.nickpic.host/q8kVos.jpg',
'https://img.nickpic.host/q8kfu2.jpg',
'https://img.nickpic.host/q8k2Zx.jpg',
'https://img.nickpic.host/q8k0zQ.jpg',
'https://img.nickpic.host/q8kelN.jpg',
'https://img.nickpic.host/q8kkMO.jpg',
'https://img.nickpic.host/q8kPr8.jpg',
'https://img.nickpic.host/q8kJkm.jpg',
'https://img.nickpic.host/q8kTQq.jpg',
'https://img.nickpic.host/q8kWNd.jpg',
'https://img.nickpic.host/q8kdoD.jpg',
'https://img.nickpic.host/q8kyA5.jpg',
'https://img.nickpic.host/q8JGzP.jpg',
'https://img.nickpic.host/q8JIZM.jpg',
'https://img.nickpic.host/q8Jo5F.jpg',
'https://img.nickpic.host/q8JvkX.jpg',
'https://img.nickpic.host/q8JpMe.jpg',
'https://img.nickpic.host/q8JBsb.jpg',
'https://img.nickpic.host/q8JbQf.jpg',
'https://img.nickpic.host/q8J3pp.jpg',
'https://img.nickpic.host/q8JrV6.jpg',
'https://img.nickpic.host/q8Ja7A.jpg',
'https://img.nickpic.host/q8JFAY.jpg',
'https://img.nickpic.host/q8JjdG.jpg',
'https://img.nickpic.host/q8J55z.jpg',
'https://img.nickpic.host/q8JSRc.jpg',
'https://img.nickpic.host/q8JckW.jpg',
'https://img.nickpic.host/q8Jqs1.jpg',
'https://img.nickpic.host/q8JuUj.jpg',
'https://img.nickpic.host/q8JAVJ.jpg',
'https://img.nickpic.host/q8JOpn.jpg',
'https://img.nickpic.host/q8JhEs.jpg',
'https://img.nickpic.host/q8J672.jpg',
'https://img.nickpic.host/q8JUSx.jpg',
'https://img.nickpic.host/q8JCdQ.jpg',
'https://img.nickpic.host/q8JXRN.jpg',
'https://img.nickpic.host/q8JiJO.jpg',
'https://img.nickpic.host/q8JMU8.jpg',
'https://img.nickpic.host/q8Jt3m.jpg',
'https://img.nickpic.host/q8JRfq.jpg',
'https://img.nickpic.host/q8J4pd.jpg',
'https://img.nickpic.host/q8JDED.jpg',
'https://img.nickpic.host/q8JzdP.jpg',
'https://img.nickpic.host/q8Jw85.jpg',
'https://img.nickpic.host/q8J8SM.jpg',
'https://img.nickpic.host/q8JK1F.jpg',
'https://img.nickpic.host/q8JYJe.jpg',
'https://img.nickpic.host/q8JN3X.jpg',
'https://img.nickpic.host/q8JVXb.jpg',
'https://img.nickpic.host/q8J9Op.jpg',
'https://img.nickpic.host/q8Jfff.jpg',
'https://img.nickpic.host/q8J2v6.jpg',
'https://img.nickpic.host/q8Je8Y.jpg',
'https://img.nickpic.host/q8JkyA.jpg',
'https://img.nickpic.host/q8JLcG.jpg',
'https://img.nickpic.host/q8JTLc.jpg',
'https://img.nickpic.host/q8JP1z.jpg',
'https://img.nickpic.host/q8JdX1.jpg',
'https://img.nickpic.host/q8JZ3W.jpg',
'https://img.nickpic.host/q8Jy0j.jpg',
'https://img.nickpic.host/q8LIvJ.jpg',
'https://img.nickpic.host/q8LmOn.jpg',
'https://img.nickpic.host/q8LoKs.jpg',
'https://img.nickpic.host/q8Lpy2.jpg',
'https://img.nickpic.host/q8LB4x.jpg',
'https://img.nickpic.host/q8LxcQ.jpg',
'https://img.nickpic.host/q8LbLN.jpg',
'https://img.nickpic.host/q8LsFO.jpg',
'https://img.nickpic.host/q8LF08.jpg',
'https://img.nickpic.host/q8L3im.jpg',
'https://img.nickpic.host/q8Ljxq.jpg',
'https://img.nickpic.host/q8LlOd.jpg',
'https://img.nickpic.host/q8L5KD.jpg',
'https://img.nickpic.host/q8LcG5.jpg',
'https://img.nickpic.host/q8LgcP.jpg',
'https://img.nickpic.host/q8Lq4M.jpg',
'https://img.nickpic.host/q8LuPF.jpg',
'https://img.nickpic.host/q8LEFe.jpg',
'https://img.nickpic.host/q8LOiX.jpg',
'https://img.nickpic.host/q8Lh2b.jpg',
'https://img.nickpic.host/q8LCxf.jpg',
'https://img.nickpic.host/q8LQh6.jpg',
'https://img.nickpic.host/q8LUYp.jpg',
'https://img.nickpic.host/q8LiGY.jpg',
'https://img.nickpic.host/q8LngA.jpg',
'https://img.nickpic.host/q8LtDG.jpg',
'https://img.nickpic.host/q8LMPz.jpg',
'https://img.nickpic.host/q8L1ac.jpg',
'https://img.nickpic.host/q8L4iW.jpg',
'https://img.nickpic.host/q8LzBj.jpg',
'https://img.nickpic.host/q8LD21.jpg',
'https://img.nickpic.host/q8L7hJ.jpg',
'https://img.nickpic.host/q8L8Yn.jpg',
'https://img.nickpic.host/q8LHg2.jpg',
'https://img.nickpic.host/q8LYIs.jpg',
'https://img.nickpic.host/q8LVTx.jpg',
'https://img.nickpic.host/q8LNDQ.jpg',
'https://img.nickpic.host/q8L0aN.jpg',
'https://img.nickpic.host/q8L2nO.jpg',
'https://img.nickpic.host/q8LkB8.jpg',
'https://img.nickpic.host/q8L99m.jpg',
'https://img.nickpic.host/q8LJ6q.jpg',
'https://img.nickpic.host/q8LLYd.jpg',
'https://img.nickpic.host/q8LTID.jpg',
'https://img.nickpic.host/q8LWq5.jpg',
'https://img.nickpic.host/q8LZDP.jpg',
'https://img.nickpic.host/q8PGjF.jpg',
'https://img.nickpic.host/q8LdTM.jpg',
'https://img.nickpic.host/q8PIne.jpg',
'https://img.nickpic.host/q8Pm9X.jpg',
'https://img.nickpic.host/q8Pv6f.jpg',
'https://img.nickpic.host/q8Ppbb.jpg',
'https://img.nickpic.host/q8PxH6.jpg',
'https://img.nickpic.host/q8Pbmp.jpg',
'https://img.nickpic.host/q8PswA.jpg',
'https://img.nickpic.host/q8PrqY.jpg',
'https://img.nickpic.host/q8P3WG.jpg',
'https://img.nickpic.host/q8Pajz.jpg',
'https://img.nickpic.host/q8Pjtc.jpg',
'https://img.nickpic.host/q8Pl9W.jpg']
let kime2 = kime[Math.floor(Math.random() * kime.length)]
kimetsu = await getBuffer(kime2)
const kidecir =['Aquí tienes 💕🦈','¿Linda foto no?','Pedido entregado 🕊','¿Qué tal está?','¿Te gusta?','Tengo muchas más 😽']
const kifrase = kidecir[Math.floor(Math.random() * kidecir.length)]
let buttons = [
                    {buttonId: `kimetsu`, buttonText: {displayText: 'Siguiente'}, type: 1}
                ]
                let buttonMessage = {
                    image: (kimetsu),
                    caption: (kifrase),
                    buttons: buttons,
                    headerType: 4
                }
                GojoMdNx.sendMessage(m.chat, buttonMessage)
            }
break

case 'cosplay': {
const cosp1 =['https://img.nickpic.host/qDgksb.jpg',
'https://img.nickpic.host/qDg9kX.jpg',
'https://img.nickpic.host/qDg2Me.jpg',
'https://img.nickpic.host/qDg05F.jpg',
'https://img.nickpic.host/qDgYoD.jpg',
'https://img.nickpic.host/qDgVZM.jpg',
'https://img.nickpic.host/qDgNzP.jpg',
'https://img.nickpic.host/qDg8Nd.jpg',
'https://img.nickpic.host/qDgHA5.jpg',
'https://img.nickpic.host/qDg7Qq.jpg',
'https://img.nickpic.host/qDgJQf.jpg',
'https://img.nickpic.host/qDgLV6.jpg',
'https://img.nickpic.host/qDgTpp.jpg',
'https://img.nickpic.host/qDgWAY.jpg',
'https://img.nickpic.host/qDgddG.jpg',
'https://img.nickpic.host/qDgZ7A.jpg',
'https://img.nickpic.host/qDqG5z.jpg',
'https://img.nickpic.host/qDqIRc.jpg',
'https://img.nickpic.host/qDqmkW.jpg',
'https://img.nickpic.host/qDqvUj.jpg',
'https://img.nickpic.host/qDqxVJ.jpg',
'https://img.nickpic.host/qDqrEs.jpg',
'https://img.nickpic.host/qDqbpn.jpg',
'https://img.nickpic.host/qDqs72.jpg',
'https://img.nickpic.host/qDq3dQ.jpg',
'https://img.nickpic.host/qDqaSx.jpg',
'https://img.nickpic.host/qDqjRN.jpg',
'https://img.nickpic.host/qDqlJO.jpg',
'https://img.nickpic.host/qDqS3m.jpg',
'https://img.nickpic.host/qDqgfq.jpg',
'https://img.nickpic.host/qDqcU8.jpg',
'https://img.nickpic.host/qDqupd.jpg',
'https://img.nickpic.host/qDqAED.jpg',
'https://img.nickpic.host/qDqE85.jpg',
'https://img.nickpic.host/qDqOdP.jpg',
'https://img.nickpic.host/qDq6SM.jpg',
'https://img.nickpic.host/qDqiXb.jpg',
'https://img.nickpic.host/qDqC1F.jpg',
'https://img.nickpic.host/qDqQJe.jpg',
'https://img.nickpic.host/qDqX3X.jpg',
'https://img.nickpic.host/qDqnff.jpg',
'https://img.nickpic.host/qDqMv6.jpg',
'https://img.nickpic.host/qDqROp.jpg',
'https://img.nickpic.host/qDq18Y.jpg',
'https://img.nickpic.host/qDq4yA.jpg',
'https://img.nickpic.host/qDqz1z.jpg',
'https://img.nickpic.host/qDqwcG.jpg',
'https://img.nickpic.host/qDq7Lc.jpg',
'https://img.nickpic.host/qDqK3W.jpg',
'https://img.nickpic.host/qDqH0j.jpg',
'https://img.nickpic.host/qDqVvJ.jpg',
'https://img.nickpic.host/qDqfOn.jpg',
'https://img.nickpic.host/qDqecQ.jpg',
'https://img.nickpic.host/qDq0Ks.jpg',
'https://img.nickpic.host/qDq2y2.jpg',
'https://img.nickpic.host/qDqk4x.jpg',
'https://img.nickpic.host/qDqJLN.jpg',
'https://img.nickpic.host/qDqPFO.jpg',
'https://img.nickpic.host/qDqTim.jpg',
'https://img.nickpic.host/qDqW08.jpg',
'https://img.nickpic.host/qDuGKD.jpg',
'https://img.nickpic.host/qDqdxq.jpg',
'https://img.nickpic.host/qDqyOd.jpg',
'https://img.nickpic.host/qDumG5.jpg',
'https://img.nickpic.host/qDuvPF.jpg',
'https://img.nickpic.host/qDuocP.jpg',
'https://img.nickpic.host/qDup4M.jpg',
'https://img.nickpic.host/qDuBFe.jpg',
'https://img.nickpic.host/qDur2b.jpg',
'https://img.nickpic.host/qDubiX.jpg',
'https://img.nickpic.host/qDu3xf.jpg',
'https://img.nickpic.host/qDuFh6.jpg',
'https://img.nickpic.host/qDulGY.jpg',
'https://img.nickpic.host/qDuaYp.jpg',
'https://img.nickpic.host/qDu5gA.jpg',
'https://img.nickpic.host/qDuSDG.jpg',
'https://img.nickpic.host/qDucPz.jpg',
'https://img.nickpic.host/qDuqac.jpg',
'https://img.nickpic.host/qDuuiW.jpg',
'https://img.nickpic.host/qDuOBj.jpg',
'https://img.nickpic.host/qDuA21.jpg',
'https://img.nickpic.host/qDu6Yn.jpg',
'https://img.nickpic.host/qDuhhJ.jpg',
'https://img.nickpic.host/qDuQIs.jpg',
'https://img.nickpic.host/qDuUg2.jpg',
'https://img.nickpic.host/qDuXDQ.jpg',
'https://img.nickpic.host/qDutaN.jpg',
'https://img.nickpic.host/qDuMnO.jpg',
'https://img.nickpic.host/qDuR9m.jpg',
'https://img.nickpic.host/qDu4B8.jpg',
'https://img.nickpic.host/qDuD6q.jpg',
'https://img.nickpic.host/qDuwYd.jpg',
'https://img.nickpic.host/qDu7ID.jpg',
'https://img.nickpic.host/qDu8q5.jpg',
'https://img.nickpic.host/qDuKDP.jpg',
'https://img.nickpic.host/qDuYTM.jpg',
'https://img.nickpic.host/qDuNjF.jpg',
'https://img.nickpic.host/qDuVne.jpg',
'https://img.nickpic.host/qDuf9X.jpg',
'https://img.nickpic.host/qDu2bb.jpg',
'https://img.nickpic.host/qDu96f.jpg',
'https://img.nickpic.host/qDueH6.jpg',
'https://img.nickpic.host/qDuJmp.jpg',
'https://img.nickpic.host/qDuLqY.jpg',
'https://img.nickpic.host/qDuTWG.jpg',
'https://img.nickpic.host/qDuPwA.jpg',
'https://img.nickpic.host/qDuZjz.jpg',
'https://img.nickpic.host/qDAIb1.jpg',
'https://img.nickpic.host/qDudtc.jpg',
'https://img.nickpic.host/qDuy9W.jpg',
'https://img.nickpic.host/qDAmCj.jpg',
'https://img.nickpic.host/qDAoHJ.jpg',
'https://img.nickpic.host/qDAvmn.jpg',
'https://img.nickpic.host/qDAxus.jpg',
'https://img.nickpic.host/qDABw2.jpg',
'https://img.nickpic.host/qDAbWQ.jpg',
'https://img.nickpic.host/qDAslx.jpg',
'https://img.nickpic.host/qDA3tN.jpg',
'https://img.nickpic.host/qDA5Nq.jpg',
'https://img.nickpic.host/qDAFeO.jpg',
'https://img.nickpic.host/qDAjrm.jpg',
'https://img.nickpic.host/qDAlC8.jpg',
'https://img.nickpic.host/qDAcmd.jpg',
'https://img.nickpic.host/qDAguD.jpg',
'https://img.nickpic.host/qDAqz5.jpg',
'https://img.nickpic.host/qDAElM.jpg',
'https://img.nickpic.host/qDAuWP.jpg',
'https://img.nickpic.host/qDAhee.jpg',
'https://img.nickpic.host/qDAOMF.jpg',
'https://img.nickpic.host/qDACrX.jpg',
'https://img.nickpic.host/qDAQQb.jpg',
'https://img.nickpic.host/qDAUNf.jpg',
'https://img.nickpic.host/qDAio6.jpg',
'https://img.nickpic.host/qDAnAp.jpg',
'https://img.nickpic.host/qDA15G.jpg',
'https://img.nickpic.host/qDAtzY.jpg',
'https://img.nickpic.host/qDAMZA.jpg',
'https://img.nickpic.host/qDA4Mz.jpg',
'https://img.nickpic.host/qDADkc.jpg',
'https://img.nickpic.host/qDAzrW.jpg',
'https://img.nickpic.host/qDA7Q1.jpg',
'https://img.nickpic.host/qDA8Vj.jpg',
'https://img.nickpic.host/qDAHAn.jpg',
'https://img.nickpic.host/qDAYoJ.jpg',
'https://img.nickpic.host/qDAVZ2.jpg',
'https://img.nickpic.host/qDAN7s.jpg',
'https://img.nickpic.host/qDA05Q.jpg',
'https://img.nickpic.host/qDA2Rx.jpg',
'https://img.nickpic.host/qDA9kN.jpg',
'https://img.nickpic.host/qDATpq.jpg',
'https://img.nickpic.host/qDAJUm.jpg',
'https://img.nickpic.host/qDAWAd.jpg',
'https://img.nickpic.host/qDALV8.jpg',
'https://img.nickpic.host/qDAksO.jpg',
'https://img.nickpic.host/qDAZ7D.jpg',
'https://img.nickpic.host/qDAdd5.jpg',
'https://img.nickpic.host/qDEIRM.jpg',
'https://img.nickpic.host/qDEG5P.jpg',
'https://img.nickpic.host/qDEmJF.jpg',
'https://img.nickpic.host/qDEpse.jpg',
'https://img.nickpic.host/qDEvUX.jpg',
'https://img.nickpic.host/qDExfb.jpg',
'https://img.nickpic.host/qDEbpf.jpg',
'https://img.nickpic.host/qDErE6.jpg',
'https://img.nickpic.host/qDE3dY.jpg',
'https://img.nickpic.host/qDEs8p.jpg',
'https://img.nickpic.host/qDEaSA.jpg',
'https://img.nickpic.host/qDEj1G.jpg',
'https://img.nickpic.host/qDElJz.jpg',
'https://img.nickpic.host/qDES3c.jpg',
'https://img.nickpic.host/qDEcUW.jpg',
'https://img.nickpic.host/qDEuvj.jpg',
'https://img.nickpic.host/qDEgf1.jpg',
'https://img.nickpic.host/qDEAEJ.jpg',
'https://img.nickpic.host/qDEE8n.jpg',
'https://img.nickpic.host/qDEOys.jpg',
'https://img.nickpic.host/qDE6S2.jpg',
'https://img.nickpic.host/qDEC1Q.jpg',
'https://img.nickpic.host/qDEX3N.jpg',
'https://img.nickpic.host/qDEQLx.jpg',
'https://img.nickpic.host/qDEiXO.jpg',
'https://img.nickpic.host/qDEn0m.jpg',
'https://img.nickpic.host/qDEMv8.jpg',
'https://img.nickpic.host/qDEROq.jpg',
'https://img.nickpic.host/qDE18d.jpg',
'https://img.nickpic.host/qDEz1P.jpg',
'https://img.nickpic.host/qDE4yD.jpg',
'https://img.nickpic.host/qDEwc5.jpg',
'https://img.nickpic.host/qDEKFF.jpg',
'https://img.nickpic.host/qDE7LM.jpg',
'https://img.nickpic.host/qDEYXe.jpg',
'https://img.nickpic.host/qDEH0X.jpg',
'https://img.nickpic.host/qDEVxb.jpg',
'https://img.nickpic.host/qDE0K6.jpg',
'https://img.nickpic.host/qDEfOf.jpg',
'https://img.nickpic.host/qDEecY.jpg',
'https://img.nickpic.host/qDE9Gp.jpg',
'https://img.nickpic.host/qDEk4A.jpg',
'https://img.nickpic.host/qDEJPG.jpg',
'https://img.nickpic.host/qDEPFz.jpg',
'https://img.nickpic.host/qDEW0W.jpg',
'https://img.nickpic.host/qDETic.jpg',
'https://img.nickpic.host/qDOGKJ.jpg',
'https://img.nickpic.host/qDEdx1.jpg',
'https://img.nickpic.host/qDEyhj.jpg',
'https://img.nickpic.host/qDOmGn.jpg',
'https://img.nickpic.host/qDOogs.jpg',
'https://img.nickpic.host/qDOp42.jpg',
'https://img.nickpic.host/qDOvPQ.jpg',
'https://img.nickpic.host/qDOBax.jpg',
'https://img.nickpic.host/qDOr2O.jpg',
'https://img.nickpic.host/qDObiN.jpg',
'https://img.nickpic.host/qDO3Bm.jpg',
'https://img.nickpic.host/qDOlGd.jpg',
'https://img.nickpic.host/qDOFh8.jpg',
'https://img.nickpic.host/qDOaYq.jpg',
'https://img.nickpic.host/qDOSD5.jpg',
'https://img.nickpic.host/qDO5gD.jpg',
'https://img.nickpic.host/qDOcPP.jpg',
'https://img.nickpic.host/qDOqaM.jpg',
'https://img.nickpic.host/qDOunF.jpg',
'https://img.nickpic.host/qDOOBX.jpg',
'https://img.nickpic.host/qDOA2e.jpg',
'https://img.nickpic.host/qDOh6b.jpg',
'https://img.nickpic.host/qDO6Yf.jpg',
'https://img.nickpic.host/qDOUqp.jpg',
'https://img.nickpic.host/qDOQI6.jpg',
'https://img.nickpic.host/qDOXDY.jpg',
'https://img.nickpic.host/qDOtjG.jpg',
'https://img.nickpic.host/qDOiTA.jpg',
'https://img.nickpic.host/qDOMnz.jpg',
'https://img.nickpic.host/qDOR9c.jpg',
'https://img.nickpic.host/qDO4BW.jpg',
'https://img.nickpic.host/qDOwHj.jpg',
'https://img.nickpic.host/qDOD61.jpg',
'https://img.nickpic.host/qDO7IJ.jpg',
'https://img.nickpic.host/qDO8qn.jpg',
'https://img.nickpic.host/qDOKws.jpg',
'https://img.nickpic.host/qDOYT2.jpg',
'https://img.nickpic.host/qDONjQ.jpg',
'https://img.nickpic.host/qDOVtx.jpg',
'https://img.nickpic.host/qDOf9N.jpg',
'https://img.nickpic.host/qDO2bO.jpg',
'https://img.nickpic.host/qDO9Cm.jpg',
'https://img.nickpic.host/qDOeH8.jpg',
'https://img.nickpic.host/qDOJmq.jpg',
'https://img.nickpic.host/qDOLqd.jpg',
'https://img.nickpic.host/qDOTW5.jpg',
'https://img.nickpic.host/qDOPwD.jpg',
'https://img.nickpic.host/qDOZjP.jpg',
'https://img.nickpic.host/qDOdtM.jpg',
'https://img.nickpic.host/qDOyeF.jpg',
'https://img.nickpic.host/qDhIbe.jpg',
'https://img.nickpic.host/qDhmCX.jpg',
'https://img.nickpic.host/qDhvmf.jpg',
'https://img.nickpic.host/qDhoNb.jpg',
'https://img.nickpic.host/qDhxu6.jpg',
'https://img.nickpic.host/qDhBzp.jpg',
'https://img.nickpic.host/qDhbWY.jpg',
'https://img.nickpic.host/qDhslA.jpg',
'https://img.nickpic.host/qDh3MG.jpg',
'https://img.nickpic.host/qDhjrc.jpg',
'https://img.nickpic.host/qDhFez.jpg',
'https://img.nickpic.host/qDhlCW.jpg',
'https://img.nickpic.host/qDh5N1.jpg',
'https://img.nickpic.host/qDhcoj.jpg',
'https://img.nickpic.host/qDhguJ.jpg',
'https://img.nickpic.host/qDhqzn.jpg',
'https://img.nickpic.host/qDhEl2.jpg',
'https://img.nickpic.host/qDhuZs.jpg',
'https://img.nickpic.host/qDhOMQ.jpg',
'https://img.nickpic.host/qDhCrN.jpg',
'https://img.nickpic.host/qDhhkx.jpg',
'https://img.nickpic.host/qDhQQO.jpg',
'https://img.nickpic.host/qDhUVm.jpg',
'https://img.nickpic.host/qDhnAq.jpg',
'https://img.nickpic.host/qDhio8.jpg',
'https://img.nickpic.host/qDhtzd.jpg',
'https://img.nickpic.host/qDh155.jpg',
'https://img.nickpic.host/qDhMZD.jpg',
'https://img.nickpic.host/qDh4MP.jpg',
'https://img.nickpic.host/qDhDkM.jpg',
'https://img.nickpic.host/qDh7Qe.jpg',
'https://img.nickpic.host/qDhzsF.jpg',
'https://img.nickpic.host/qDh8VX.jpg',
'https://img.nickpic.host/qDhYpb.jpg',
'https://img.nickpic.host/qDhN76.jpg',
'https://img.nickpic.host/qDhVdp.jpg',
'https://img.nickpic.host/qDh05Y.jpg',
'https://img.nickpic.host/qDh9JG.jpg',
'https://img.nickpic.host/qDh2RA.jpg',
'https://img.nickpic.host/qDhksz.jpg',
'https://img.nickpic.host/qDhJUc.jpg',
'https://img.nickpic.host/qDhLVW.jpg',
'https://img.nickpic.host/qDhTp1.jpg',
'https://img.nickpic.host/qDhWEj.jpg',
'https://img.nickpic.host/qDhZ7J.jpg',
'https://img.nickpic.host/qD6GSs.jpg',
'https://img.nickpic.host/qDhddn.jpg',
'https://img.nickpic.host/qD6IR2.jpg',
'https://img.nickpic.host/qD6mJQ.jpg',
'https://img.nickpic.host/qD6p3x.jpg',
'https://img.nickpic.host/qD6vUN.jpg',
'https://img.nickpic.host/qD6xfO.jpg',
'https://img.nickpic.host/qD6rE8.jpg',
'https://img.nickpic.host/qD6bvm.jpg',
'https://img.nickpic.host/qD6s8q.jpg',
'https://img.nickpic.host/qD63dd.jpg',
'https://img.nickpic.host/qD6aSD.jpg',
'https://img.nickpic.host/qD6j15.jpg',
'https://img.nickpic.host/qD6lJP.jpg',
'https://img.nickpic.host/qD6S3M.jpg',
'https://img.nickpic.host/qD6cXF.jpg',
'https://img.nickpic.host/qD6gfe.jpg',
'https://img.nickpic.host/qD6uvX.jpg',
'https://img.nickpic.host/qD6AOb.jpg',
'https://img.nickpic.host/qD6E8f.jpg',
'https://img.nickpic.host/qD6Oy6.jpg',
'https://img.nickpic.host/qD66cp.jpg',
'https://img.nickpic.host/qD6C1Y.jpg',
'https://img.nickpic.host/qD6XFG.jpg',
'https://img.nickpic.host/qD6QLA.jpg',
'https://img.nickpic.host/qD6iXz.jpg',
'https://img.nickpic.host/qD6n0c.jpg',
'https://img.nickpic.host/qD6MvW.jpg',
'https://img.nickpic.host/qD6RO1.jpg',
'https://img.nickpic.host/qD61Kj.jpg',
'https://img.nickpic.host/qD6wcn.jpg',
'https://img.nickpic.host/qD64yJ.jpg',
'https://img.nickpic.host/qD67L2.jpg',
'https://img.nickpic.host/qD6z4s.jpg',
'https://img.nickpic.host/qD6KFQ.jpg',
'https://img.nickpic.host/qD6Yix.jpg',
'https://img.nickpic.host/qD6VxO.jpg',
'https://img.nickpic.host/qD6fhm.jpg',
'https://img.nickpic.host/qD6H0N.jpg',
'https://img.nickpic.host/qD69Gq.jpg',
'https://img.nickpic.host/qD60K8.jpg',
'https://img.nickpic.host/qD6k4D.jpg',
'https://img.nickpic.host/qD6ecd.jpg',
'https://img.nickpic.host/qD6JP5.jpg',
'https://img.nickpic.host/qD6PFP.jpg',
'https://img.nickpic.host/qD6TiM.jpg',
'https://img.nickpic.host/qD6W2F.jpg',
'https://img.nickpic.host/qD6dxe.jpg',
'https://img.nickpic.host/qD6yhX.jpg',
'https://img.nickpic.host/qDCGYb.jpg',
'https://img.nickpic.host/qDCmGf.jpg',
'https://img.nickpic.host/qDCog6.jpg',
'https://img.nickpic.host/qDCpDp.jpg',
'https://img.nickpic.host/qDCvPY.jpg',
'https://img.nickpic.host/qDCBaA.jpg',
'https://img.nickpic.host/qDCbnG.jpg',
'https://img.nickpic.host/qDCr2z.jpg',
'https://img.nickpic.host/qDC3Bc.jpg',
'https://img.nickpic.host/qDCFhW.jpg',
'https://img.nickpic.host/qDCaY1.jpg',
'https://img.nickpic.host/qDClIj.jpg',
'https://img.nickpic.host/qDC5gJ.jpg',
'https://img.nickpic.host/qDCSDn.jpg',
'https://img.nickpic.host/qDCcTs.jpg',
'https://img.nickpic.host/qDCqa2.jpg',
'https://img.nickpic.host/qDCunQ.jpg',
'https://img.nickpic.host/qDCA9x.jpg',
'https://img.nickpic.host/qDCOBN.jpg',
'https://img.nickpic.host/qDCh6O.jpg',
'https://img.nickpic.host/qDC6Hm.jpg',
'https://img.nickpic.host/qDCQI8.jpg',
'https://img.nickpic.host/qDCUqq.jpg',
'https://img.nickpic.host/qDCtj5.jpg',
'https://img.nickpic.host/qDCXDd.jpg',
'https://img.nickpic.host/qDCiTD.jpg',
'https://img.nickpic.host/qDCR9M.jpg',
'https://img.nickpic.host/qDCMnP.jpg',
'https://img.nickpic.host/qDC4bF.jpg',
'https://img.nickpic.host/qDCD6e.jpg',
'https://img.nickpic.host/qDCwHX.jpg',
'https://img.nickpic.host/qDCKw6.jpg',
'https://img.nickpic.host/qDC7mb.jpg',
'https://img.nickpic.host/qDC8qf.jpg',
'https://img.nickpic.host/qDCYWp.jpg',
'https://img.nickpic.host/qDCNjY.jpg',
'https://img.nickpic.host/qDCVtA.jpg',
'https://img.nickpic.host/qDCfeG.jpg',
'https://img.nickpic.host/qDC2bz.jpg',
'https://img.nickpic.host/qDCJm1.jpg',
'https://img.nickpic.host/qDC9Cc.jpg',
'https://img.nickpic.host/qDCeHW.jpg',
'https://img.nickpic.host/qDCLuj.jpg',
'https://img.nickpic.host/qDCPwJ.jpg',
'https://img.nickpic.host/qDCTWn.jpg',
'https://img.nickpic.host/qDCZls.jpg',
'https://img.nickpic.host/qDCdt2.jpg',
'https://img.nickpic.host/qDCyeQ.jpg',
'https://img.nickpic.host/qDQIrx.jpg',
'https://img.nickpic.host/qDQmCN.jpg',
'https://img.nickpic.host/qDQoNO.jpg',
'https://img.nickpic.host/qDQvom.jpg',
'https://img.nickpic.host/qDQxu8.jpg',
'https://img.nickpic.host/qDQBzq.jpg',
'https://img.nickpic.host/qDQbWd.jpg',
'https://img.nickpic.host/qDQslD.jpg',
'https://img.nickpic.host/qDQ3M5.jpg',
'https://img.nickpic.host/qDQFeP.jpg',
'https://img.nickpic.host/qDQjrM.jpg',
'https://img.nickpic.host/qDQlQF.jpg',
'https://img.nickpic.host/qDQ5Ne.jpg',
'https://img.nickpic.host/qDQcoX.jpg',
'https://img.nickpic.host/qDQqzf.jpg',
'https://img.nickpic.host/qDQgAb.jpg',
'https://img.nickpic.host/qDQuZ6.jpg',
'https://img.nickpic.host/qDQOMY.jpg',
'https://img.nickpic.host/qDQE5p.jpg',
'https://img.nickpic.host/qDQhkA.jpg',
'https://img.nickpic.host/qDQCsG.jpg',
'https://img.nickpic.host/qDQQQz.jpg',
'https://img.nickpic.host/qDQUVc.jpg',
'https://img.nickpic.host/qDQioW.jpg',
'https://img.nickpic.host/qDQMZJ.jpg',
'https://img.nickpic.host/qDQnA1.jpg',
'https://img.nickpic.host/qDQt7j.jpg',
'https://img.nickpic.host/qDQ15n.jpg',
'https://img.nickpic.host/qDQ4Rs.jpg',
'https://img.nickpic.host/qDQDk2.jpg',
'https://img.nickpic.host/qDQzsQ.jpg',
'https://img.nickpic.host/qDQ7Ux.jpg',
'https://img.nickpic.host/qDQYpO.jpg',
'https://img.nickpic.host/qDQ8VN.jpg',
'https://img.nickpic.host/qDQHEm.jpg',
'https://img.nickpic.host/qDQN78.jpg',
'https://img.nickpic.host/qDQVdq.jpg',
'https://img.nickpic.host/qDQ05d.jpg',
'https://img.nickpic.host/qDQ2RD.jpg',
'https://img.nickpic.host/qDQksP.jpg',
'https://img.nickpic.host/qDQ9J5.jpg',
'https://img.nickpic.host/qDQJUM.jpg',
'https://img.nickpic.host/qDQLfF.jpg',
'https://img.nickpic.host/qDQTpe.jpg',
'https://img.nickpic.host/qDQWEX.jpg',
'https://img.nickpic.host/qDQZ8b.jpg',
'https://img.nickpic.host/qDQddf.jpg',
'https://img.nickpic.host/qDUGS6.jpg',
'https://img.nickpic.host/qDUI1p.jpg',
'https://img.nickpic.host/qDUmJY.jpg',
'https://img.nickpic.host/qDUp3A.jpg',
'https://img.nickpic.host/qDUvXG.jpg',
'https://img.nickpic.host/qDUxfz.jpg',
'https://img.nickpic.host/qDUbvc.jpg',
'https://img.nickpic.host/qDUrEW.jpg',
'https://img.nickpic.host/qDUs81.jpg',
'https://img.nickpic.host/qDU3yj.jpg',
'https://img.nickpic.host/qDUaSJ.jpg',
'https://img.nickpic.host/qDUj1n.jpg',
'https://img.nickpic.host/qDUlLs.jpg',
'https://img.nickpic.host/qDUcXQ.jpg',
'https://img.nickpic.host/qDUS32.jpg',
'https://img.nickpic.host/qDUg0x.jpg',
'https://img.nickpic.host/qDUuvN.jpg',
'https://img.nickpic.host/qDUAOO.jpg',
'https://img.nickpic.host/qDUEKm.jpg',
'https://img.nickpic.host/qDUOy8.jpg',
'https://img.nickpic.host/qDU6cq.jpg',
'https://img.nickpic.host/qDUC1d.jpg',
'https://img.nickpic.host/qDUQLD.jpg',
'https://img.nickpic.host/qDUXF5.jpg',
'https://img.nickpic.host/qDUiXP.jpg',
'https://img.nickpic.host/qDUn0M.jpg',
'https://img.nickpic.host/qDUROe.jpg',
'https://img.nickpic.host/qDUMxF.jpg',
'https://img.nickpic.host/qDU1KX.jpg',
'https://img.nickpic.host/qDUDGb.jpg',
'https://img.nickpic.host/qDUwcf.jpg',
'https://img.nickpic.host/qDUz46.jpg',
'https://img.nickpic.host/qDU7Pp.jpg',
'https://img.nickpic.host/qDUKFY.jpg',
'https://img.nickpic.host/qDUYiA.jpg',
'https://img.nickpic.host/qDUfhc.jpg',
'https://img.nickpic.host/qDUH2G.jpg',
'https://img.nickpic.host/qDUVxz.jpg',
'https://img.nickpic.host/qDU0KW.jpg',
'https://img.nickpic.host/qDU9G1.jpg',
'https://img.nickpic.host/qDUegj.jpg',
'https://img.nickpic.host/qDUk4J.jpg',
'https://img.nickpic.host/qDUJPn.jpg',
'https://img.nickpic.host/qDUTi2.jpg',
'https://img.nickpic.host/qDUW2Q.jpg',
'https://img.nickpic.host/qDUPas.jpg',
'https://img.nickpic.host/qDUdBx.jpg',
'https://img.nickpic.host/qDUyhN.jpg',
'https://img.nickpic.host/qDXGYO.jpg',
'https://img.nickpic.host/qDXmIm.jpg',
'https://img.nickpic.host/qDXog8.jpg',
'https://img.nickpic.host/qDXpDq.jpg',
'https://img.nickpic.host/qDXvPd.jpg',
'https://img.nickpic.host/qDXBaD.jpg',
'https://img.nickpic.host/qDXbn5.jpg',
'https://img.nickpic.host/qDXr2P.jpg',
'https://img.nickpic.host/qDX3BM.jpg',
'https://img.nickpic.host/qDXaYe.jpg',
'https://img.nickpic.host/qDXF6F.jpg',
'https://img.nickpic.host/qDXlIX.jpg',
'https://img.nickpic.host/qDX5qb.jpg',
'https://img.nickpic.host/qDXSDf.jpg',
'https://img.nickpic.host/qDXcT6.jpg',
'https://img.nickpic.host/qDXqjp.jpg',
'https://img.nickpic.host/qDXunY.jpg',
'https://img.nickpic.host/qDXObG.jpg',
'https://img.nickpic.host/qDXA9A.jpg',
'https://img.nickpic.host/qDXh6z.jpg',
'https://img.nickpic.host/qDXQIW.jpg',
'https://img.nickpic.host/qDX6Hc.jpg',
'https://img.nickpic.host/qDXXwj.jpg',
'https://img.nickpic.host/qDXUq1.jpg',
'https://img.nickpic.host/qDXiTJ.jpg',
'https://img.nickpic.host/qDXtjn.jpg',
'https://img.nickpic.host/qDXMts.jpg',
'https://img.nickpic.host/qDXDCx.jpg',
'https://img.nickpic.host/qDX4bQ.jpg',
'https://img.nickpic.host/qDXwHN.jpg',
'https://img.nickpic.host/qDXR92.jpg',
'https://img.nickpic.host/qDX7mO.jpg',
'https://img.nickpic.host/qDX8um.jpg',
'https://img.nickpic.host/qDXKw8.jpg',
'https://img.nickpic.host/qDXYWq.jpg',
'https://img.nickpic.host/qDXNjd.jpg',
'https://img.nickpic.host/qDXfe5.jpg',
'https://img.nickpic.host/qDXVtD.jpg',
'https://img.nickpic.host/qDX2bP.jpg',
'https://img.nickpic.host/qDX9CM.jpg',
'https://img.nickpic.host/qDXeNF.jpg',
'https://img.nickpic.host/qDXJme.jpg',
'https://img.nickpic.host/qDXLuX.jpg',
'https://img.nickpic.host/qDXTWf.jpg',
'https://img.nickpic.host/qDXPzb.jpg',
'https://img.nickpic.host/qDXZl6.jpg',
'https://img.nickpic.host/qDXdMp.jpg',
'https://img.nickpic.host/qDXyeY.jpg',
'https://img.nickpic.host/qDiIrA.jpg',
'https://img.nickpic.host/qDimQG.jpg',
'https://img.nickpic.host/qDivoc.jpg',
'https://img.nickpic.host/qDioNz.jpg',
'https://img.nickpic.host/qDixuW.jpg',
'https://img.nickpic.host/qDiBz1.jpg',
'https://img.nickpic.host/qDibZj.jpg',
'https://img.nickpic.host/qDi3Mn.jpg',
'https://img.nickpic.host/qDislJ.jpg',
'https://img.nickpic.host/qDiFks.jpg',
'https://img.nickpic.host/qDijr2.jpg',
'https://img.nickpic.host/qDi5Vx.jpg',
'https://img.nickpic.host/qDicoN.jpg',
'https://img.nickpic.host/qDilQQ.jpg',
'https://img.nickpic.host/qDigAO.jpg',
'https://img.nickpic.host/qDiq7m.jpg',
'https://img.nickpic.host/qDiuZ8.jpg',
'https://img.nickpic.host/qDiE5q.jpg',
'https://img.nickpic.host/qDiOMd.jpg',
'https://img.nickpic.host/qDihkD.jpg',
'https://img.nickpic.host/qDiCs5.jpg',
'https://img.nickpic.host/qDiQQP.jpg',
'https://img.nickpic.host/qDiipF.jpg',
'https://img.nickpic.host/qDiUVM.jpg',
'https://img.nickpic.host/qDinAe.jpg',
'https://img.nickpic.host/qDit7X.jpg',
'https://img.nickpic.host/qDiMdb.jpg',
'https://img.nickpic.host/qDi4R6.jpg',
'https://img.nickpic.host/qDi15f.jpg',
'https://img.nickpic.host/qDiDJp.jpg',
'https://img.nickpic.host/qDizsY.jpg',
'https://img.nickpic.host/qDi7UA.jpg',
'https://img.nickpic.host/qDiYpz.jpg',
'https://img.nickpic.host/qDi8fG.jpg',
'https://img.nickpic.host/qDiHEc.jpg',
'https://img.nickpic.host/qDiN7W.jpg',
'https://img.nickpic.host/qDiVd1.jpg',
'https://img.nickpic.host/qDi2RJ.jpg',
'https://img.nickpic.host/qDi0Sj.jpg',
'https://img.nickpic.host/qDi9Jn.jpg',
'https://img.nickpic.host/qDik3s.jpg',
'https://img.nickpic.host/qDiJU2.jpg',
'https://img.nickpic.host/qDiLfQ.jpg',
'https://img.nickpic.host/qDiTvx.jpg',
'https://img.nickpic.host/qDiWEN.jpg',
'https://img.nickpic.host/qDnI1q.jpg',
'https://img.nickpic.host/qDiZ8O.jpg',
'https://img.nickpic.host/qDidym.jpg',
'https://img.nickpic.host/qDnGS8.jpg',
'https://img.nickpic.host/qDnmJd.jpg',
'https://img.nickpic.host/qDnp3D.jpg',
'https://img.nickpic.host/qDns8e.jpg',
'https://img.nickpic.host/qDnvX5.jpg',
'https://img.nickpic.host/qDnbvM.jpg',
'https://img.nickpic.host/qDnxfP.jpg',
'https://img.nickpic.host/qDnrOF.jpg',
'https://img.nickpic.host/qDn3yX.jpg',
'https://img.nickpic.host/qDnacb.jpg',
'https://img.nickpic.host/qDnj1f.jpg',
'https://img.nickpic.host/qDnlL6.jpg',
'https://img.nickpic.host/qDnSFp.jpg',
'https://img.nickpic.host/qDng0A.jpg',
'https://img.nickpic.host/qDncXY.jpg',
'https://img.nickpic.host/qDnuxG.jpg',
'https://img.nickpic.host/qDnAOz.jpg',
'https://img.nickpic.host/qDnEKc.jpg',
'https://img.nickpic.host/qDnOyW.jpg',
'https://img.nickpic.host/qDn6c1.jpg',
'https://img.nickpic.host/qDnQLJ.jpg',
'https://img.nickpic.host/qDnC4j.jpg',
'https://img.nickpic.host/qDniis.jpg',
'https://img.nickpic.host/qDnXFn.jpg',
'https://img.nickpic.host/qDnn02.jpg',
'https://img.nickpic.host/qDnMxQ.jpg',
'https://img.nickpic.host/qDn1KN.jpg',
'https://img.nickpic.host/qDnRhx.jpg',
'https://img.nickpic.host/qDnwgm.jpg',
'https://img.nickpic.host/qDnDGO.jpg',
'https://img.nickpic.host/qDnz48.jpg',
'https://img.nickpic.host/qDn7Pq.jpg',
'https://img.nickpic.host/qDnKFd.jpg',
'https://img.nickpic.host/qDnH25.jpg',
'https://img.nickpic.host/qDnYiD.jpg',
'https://img.nickpic.host/qDnfhM.jpg',
'https://img.nickpic.host/qDnVxP.jpg',
'https://img.nickpic.host/qDn9Ge.jpg',
'https://img.nickpic.host/qDn0YF.jpg',
'https://img.nickpic.host/qDnegX.jpg',
'https://img.nickpic.host/qDnJPf.jpg',
'https://img.nickpic.host/qDnkDb.jpg',
'https://img.nickpic.host/qDnPa6.jpg',
'https://img.nickpic.host/qDnTnp.jpg',
'https://img.nickpic.host/qDnW2Y.jpg',
'https://img.nickpic.host/qDndBA.jpg',
'https://img.nickpic.host/qDtGYz.jpg',
'https://img.nickpic.host/qDny6G.jpg',
'https://img.nickpic.host/qDtmIc.jpg',
'https://img.nickpic.host/qDtogW.jpg',
'https://img.nickpic.host/qDtpD1.jpg',
'https://img.nickpic.host/qDtvTj.jpg',
'https://img.nickpic.host/qDtBaJ.jpg',
'https://img.nickpic.host/qDtbnn.jpg',
'https://img.nickpic.host/qDtr9s.jpg',
'https://img.nickpic.host/qDt3B2.jpg',
'https://img.nickpic.host/qDtF6Q.jpg',
'https://img.nickpic.host/qDtaHx.jpg',
'https://img.nickpic.host/qDtlIN.jpg',
'https://img.nickpic.host/qDt5qO.jpg',
'https://img.nickpic.host/qDtSwm.jpg',
'https://img.nickpic.host/qDtcT8.jpg',
'https://img.nickpic.host/qDtqjq.jpg',
'https://img.nickpic.host/qDtund.jpg',
'https://img.nickpic.host/qDtA9D.jpg',
'https://img.nickpic.host/qDtOb5.jpg',
'https://img.nickpic.host/qDth6P.jpg',
'https://img.nickpic.host/qDtUqe.jpg',
'https://img.nickpic.host/qDt6HM.jpg',
'https://img.nickpic.host/qDtQmF.jpg',
'https://img.nickpic.host/qDtXwX.jpg',
'https://img.nickpic.host/qDtiWb.jpg',
'https://img.nickpic.host/qDtMt6.jpg',
'https://img.nickpic.host/qDttjf.jpg',
'https://img.nickpic.host/qDtRep.jpg',
'https://img.nickpic.host/qDt4bY.jpg',
'https://img.nickpic.host/qDtDCA.jpg',
'https://img.nickpic.host/qDtwNG.jpg',
'https://img.nickpic.host/qDt7mz.jpg',
'https://img.nickpic.host/qDt8uc.jpg',
'https://img.nickpic.host/qDtKwW.jpg',
'https://img.nickpic.host/qDtYW1.jpg',
'https://img.nickpic.host/qDtNlj.jpg',
'https://img.nickpic.host/qDtVtJ.jpg',
'https://img.nickpic.host/qDtfen.jpg',
'https://img.nickpic.host/qDt2rs.jpg',
'https://img.nickpic.host/qDt9C2.jpg',
'https://img.nickpic.host/qDteNQ.jpg',
'https://img.nickpic.host/qDtJox.jpg',
'https://img.nickpic.host/qDtLuN.jpg',
'https://img.nickpic.host/qDtPzO.jpg',
'https://img.nickpic.host/qDtTZm.jpg',
'https://img.nickpic.host/qDtZl8.jpg',
'https://img.nickpic.host/qDtdMq.jpg',
'https://img.nickpic.host/qDMIrD.jpg',
'https://img.nickpic.host/qDtyed.jpg',
'https://img.nickpic.host/qDMmQ5.jpg',
'https://img.nickpic.host/qDMoNP.jpg',
'https://img.nickpic.host/qDMvoM.jpg',
'https://img.nickpic.host/qDMxAF.jpg',
'https://img.nickpic.host/qDMBze.jpg',
'https://img.nickpic.host/qDMbZX.jpg',
'https://img.nickpic.host/qDMs5b.jpg',
'https://img.nickpic.host/qDM3Mf.jpg',
'https://img.nickpic.host/qDMFk6.jpg',
'https://img.nickpic.host/qDMjsp.jpg',
'https://img.nickpic.host/qDMlQY.jpg',
'https://img.nickpic.host/qDM5VA.jpg',
'https://img.nickpic.host/qDMcpG.jpg',
'https://img.nickpic.host/qDMgAz.jpg',
'https://img.nickpic.host/qDMq7c.jpg',
'https://img.nickpic.host/qDMuZW.jpg',
'https://img.nickpic.host/qDME51.jpg',
'https://img.nickpic.host/qDMORj.jpg',
'https://img.nickpic.host/qDMCsn.jpg',
'https://img.nickpic.host/qDMhkJ.jpg',
'https://img.nickpic.host/qDMQUs.jpg',
'https://img.nickpic.host/qDMUV2.jpg',
'https://img.nickpic.host/qDMipQ.jpg',
'https://img.nickpic.host/qDMt7N.jpg',
'https://img.nickpic.host/qDMnEx.jpg',
'https://img.nickpic.host/qDMMdO.jpg',
'https://img.nickpic.host/qDM1Sm.jpg',
'https://img.nickpic.host/qDM4R8.jpg',
'https://img.nickpic.host/qDMzsd.jpg',
'https://img.nickpic.host/qDMDJq.jpg',
'https://img.nickpic.host/qDM8f5.jpg',
'https://img.nickpic.host/qDM7UD.jpg',
'https://img.nickpic.host/qDMYpP.jpg',
'https://img.nickpic.host/qDMHEM.jpg',
'https://img.nickpic.host/qDMN8F.jpg',
'https://img.nickpic.host/qDMVde.jpg',
'https://img.nickpic.host/qDM0SX.jpg',
'https://img.nickpic.host/qDM21b.jpg',
'https://img.nickpic.host/qDM9Jf.jpg',
'https://img.nickpic.host/qDMk36.jpg',
'https://img.nickpic.host/qDMJXp.jpg',
'https://img.nickpic.host/qDMLfY.jpg',
'https://img.nickpic.host/qDMTvA.jpg',
'https://img.nickpic.host/qDMWOG.jpg',
'https://img.nickpic.host/qDMdyc.jpg',
'https://img.nickpic.host/qDMZ8z.jpg',
'https://img.nickpic.host/qDRGSW.jpg',
'https://img.nickpic.host/qDRI11.jpg',
'https://img.nickpic.host/qDRmLj.jpg',
'https://img.nickpic.host/qDRp3J.jpg',
'https://img.nickpic.host/qDRvXn.jpg',
'https://img.nickpic.host/qDRx0s.jpg',
'https://img.nickpic.host/qDRbv2.jpg',
'https://img.nickpic.host/qDRrOQ.jpg',
'https://img.nickpic.host/qDRsKx.jpg',
'https://img.nickpic.host/qDR3yN.jpg',
'https://img.nickpic.host/qDRacO.jpg',
'https://img.nickpic.host/qDRj4m.jpg',
'https://img.nickpic.host/qDRlL8.jpg',
'https://img.nickpic.host/qDRSFq.jpg',
'https://img.nickpic.host/qDRcXd.jpg',
'https://img.nickpic.host/qDRg0D.jpg',
'https://img.nickpic.host/qDRux5.jpg',
'https://img.nickpic.host/qDRAOP.jpg',
'https://img.nickpic.host/qDREKM.jpg',
'https://img.nickpic.host/qDR6ce.jpg',
'https://img.nickpic.host/qDRhGF.jpg',
'https://img.nickpic.host/qDRC4X.jpg',
'https://img.nickpic.host/qDRQPb.jpg',
'https://img.nickpic.host/qDRii6.jpg',
'https://img.nickpic.host/qDRXFf.jpg',
'https://img.nickpic.host/qDRn2p.jpg',
'https://img.nickpic.host/qDRRhA.jpg',
'https://img.nickpic.host/qDRMxY.jpg',
'https://img.nickpic.host/qDRDGz.jpg',
'https://img.nickpic.host/qDR1YG.jpg',
'https://img.nickpic.host/qDRz4W.jpg',
'https://img.nickpic.host/qDRwgc.jpg',
'https://img.nickpic.host/qDR7P1.jpg',
'https://img.nickpic.host/qDRKaj.jpg',
'https://img.nickpic.host/qDRYiJ.jpg',
'https://img.nickpic.host/qDRVBs.jpg',
'https://img.nickpic.host/qDRH2n.jpg',
'https://img.nickpic.host/qDR0YQ.jpg',
'https://img.nickpic.host/qDRfh2.jpg',
'https://img.nickpic.host/qDRegN.jpg',
'https://img.nickpic.host/qDR9Ix.jpg',
'https://img.nickpic.host/qDRkDO.jpg',
'https://img.nickpic.host/qDRPa8.jpg',
'https://img.nickpic.host/qDRJTm.jpg',
'https://img.nickpic.host/qDRW2d.jpg',
'https://img.nickpic.host/qDRTnq.jpg',
'https://img.nickpic.host/qDRy65.jpg',
'https://img.nickpic.host/qDRdBD.jpg',
'https://img.nickpic.host/qD1GYP.jpg',
'https://img.nickpic.host/qD1oqF.jpg',
'https://img.nickpic.host/qD1mIM.jpg',
'https://img.nickpic.host/qD1vTX.jpg',
'https://img.nickpic.host/qD1pDe.jpg',
'https://img.nickpic.host/qD1Bjb.jpg',
'https://img.nickpic.host/qD1bnf.jpg',
'https://img.nickpic.host/qD1r96.jpg',
'https://img.nickpic.host/qD1F6Y.jpg',
'https://img.nickpic.host/qD13bp.jpg',
'https://img.nickpic.host/qD1lmG.jpg',
'https://img.nickpic.host/qD1aHA.jpg',
'https://img.nickpic.host/qD1Swc.jpg',
'https://img.nickpic.host/qD15qz.jpg',
'https://img.nickpic.host/qD1cTW.jpg',
'https://img.nickpic.host/qD1utj.jpg',
'https://img.nickpic.host/qD1qj1.jpg',
'https://img.nickpic.host/qD1Obn.jpg',
'https://img.nickpic.host/qD1A9J.jpg',
'https://img.nickpic.host/qD16H2.jpg',
'https://img.nickpic.host/qD1hCs.jpg',
'https://img.nickpic.host/qD1QmQ.jpg',
'https://img.nickpic.host/qD1XwN.jpg',
'https://img.nickpic.host/qD1Uux.jpg',
'https://img.nickpic.host/qD1iWO.jpg',
'https://img.nickpic.host/qD1tlm.jpg',
'https://img.nickpic.host/qD1Req.jpg',
'https://img.nickpic.host/qD1Mt8.jpg',
'https://img.nickpic.host/qD14bd.jpg',
'https://img.nickpic.host/qD1DCD.jpg',
'https://img.nickpic.host/qD18uM.jpg',
'https://img.nickpic.host/qD1wN5.jpg',
'https://img.nickpic.host/qD17mP.jpg',
'https://img.nickpic.host/qD1KzF.jpg',
'https://img.nickpic.host/qD1YWe.jpg',
'https://img.nickpic.host/qD1VMb.jpg',
'https://img.nickpic.host/qD1NlX.jpg',
'https://img.nickpic.host/qD1fef.jpg',
'https://img.nickpic.host/qD12r6.jpg',
'https://img.nickpic.host/qD19Qp.jpg',
'https://img.nickpic.host/qD1eNY.jpg',
'https://img.nickpic.host/qD1LAG.jpg',
'https://img.nickpic.host/qD1JoA.jpg',
'https://img.nickpic.host/qD1dM1.jpg',
'https://img.nickpic.host/qD1Pzz.jpg',
'https://img.nickpic.host/qD1TZc.jpg',
'https://img.nickpic.host/qD1ZlW.jpg',
'https://img.nickpic.host/qD1ykj.jpg',
'https://img.nickpic.host/qD4oVs.jpg',
'https://img.nickpic.host/qD4IrJ.jpg',
'https://img.nickpic.host/qD4mQn.jpg',
'https://img.nickpic.host/qD4vo2.jpg',
'https://img.nickpic.host/qD4xAQ.jpg',
'https://img.nickpic.host/qD4bZN.jpg',
'https://img.nickpic.host/qD4B7x.jpg',
'https://img.nickpic.host/qD4Fk8.jpg',
'https://img.nickpic.host/qD4s5O.jpg',
'https://img.nickpic.host/qD43Rm.jpg',
'https://img.nickpic.host/qD4jsq.jpg',
'https://img.nickpic.host/qD4lQd.jpg',
'https://img.nickpic.host/qD4cp5.jpg',
'https://img.nickpic.host/qD45VD.jpg',
'https://img.nickpic.host/qD4gAP.jpg',
'https://img.nickpic.host/qD4udF.jpg',
'https://img.nickpic.host/qD4q7M.jpg',
'https://img.nickpic.host/qD4ORX.jpg',
'https://img.nickpic.host/qD4E5e.jpg',
'https://img.nickpic.host/qD4Csf.jpg',
'https://img.nickpic.host/qD4hJb.jpg',
'https://img.nickpic.host/qD4QU6.jpg',
'https://img.nickpic.host/qD4Ufp.jpg',
'https://img.nickpic.host/qD4ipY.jpg',
'https://img.nickpic.host/qD4t8G.jpg',
'https://img.nickpic.host/qD4nEA.jpg',
'https://img.nickpic.host/qD41Sc.jpg',
'https://img.nickpic.host/qD4Mdz.jpg',
'https://img.nickpic.host/qD4DJ1.jpg',
'https://img.nickpic.host/qD44RW.jpg',
'https://img.nickpic.host/qD4z3j.jpg',
'https://img.nickpic.host/qD47UJ.jpg',
'https://img.nickpic.host/qD48fn.jpg',
'https://img.nickpic.host/qD4HE2.jpg',
'https://img.nickpic.host/qD4Yvs.jpg',
'https://img.nickpic.host/qD40SN.jpg',
'https://img.nickpic.host/qD4N8Q.jpg',
'https://img.nickpic.host/qD4Vyx.jpg',
'https://img.nickpic.host/qD421O.jpg',
'https://img.nickpic.host/qD49Lm.jpg',
'https://img.nickpic.host/qD4k38.jpg',
'https://img.nickpic.host/qD4JXq.jpg',
'https://img.nickpic.host/qD4Lfd.jpg',
'https://img.nickpic.host/qD4Z8P.jpg',
'https://img.nickpic.host/qD4TvD.jpg',
'https://img.nickpic.host/qD4WO5.jpg',
'https://img.nickpic.host/qD4dyM.jpg',
'https://img.nickpic.host/qDDGcF.jpg',
'https://img.nickpic.host/qDDI1e.jpg',
'https://img.nickpic.host/qDDmLX.jpg',
'https://img.nickpic.host/qDDpFb.jpg',
'https://img.nickpic.host/qDDx06.jpg',
'https://img.nickpic.host/qDDsKA.jpg',
'https://img.nickpic.host/qDDbxp.jpg',
'https://img.nickpic.host/qDDrOY.jpg',
'https://img.nickpic.host/qDDFGG.jpg',
'https://img.nickpic.host/qDDacz.jpg']
let im = cosp1[Math.floor(Math.random() * cosp1.length)]
cosplay = await getBuffer(im)
const cosdecir =['Aquí tienes 💕🦈','¿Linda foto no?','Pedido entregado 🕊','¿Qué tal está?','¿Te gusta?','Tengo muchas más 😽']
const cosfrase = cosdecir[Math.floor(Math.random() * cosdecir.length)]
let buttons = [
                    {buttonId: `cosplay`, buttonText: {displayText: 'Siguiente'}, type: 1}
                ]
                let buttonMessage = {
                    image: (cosplay),
                    caption: (cosfrase),
                    buttons: buttons,
                    headerType: 4
                }
                GojoMdNx.sendMessage(m.chat, buttonMessage)
            }
break

case 'genshin': {
const gen1 =['https://img.nickpic.host/q4pOJF.jpg',
'https://img.nickpic.host/q4pERM.jpg',
'https://img.nickpic.host/q4pA5P.jpg',
'https://img.nickpic.host/q4pg7D.jpg',
'https://img.nickpic.host/q4pqd5.jpg',
'https://img.nickpic.host/q4pSpq.jpg',
'https://img.nickpic.host/q4plV8.jpg',
'https://img.nickpic.host/q4pjUm.jpg',
'https://img.nickpic.host/q4pcAd.jpg',
'https://img.nickpic.host/q4pasO.jpg',
'https://img.nickpic.host/q4p6se.jpg',
'https://img.nickpic.host/q4pRSA.jpg',
'https://img.nickpic.host/q4pCUX.jpg',
'https://img.nickpic.host/q4pQfb.jpg',
'https://img.nickpic.host/q4pXpf.jpg',
'https://img.nickpic.host/q4piE6.jpg',
'https://img.nickpic.host/q4pn8p.jpg',
'https://img.nickpic.host/q4ptdY.jpg',
'https://img.nickpic.host/q4p11G.jpg',
'https://img.nickpic.host/q4p4Jz.jpg',
'https://img.nickpic.host/q4pw3c.jpg',
'https://img.nickpic.host/q4pzUW.jpg',
'https://img.nickpic.host/q4p7f1.jpg',
'https://img.nickpic.host/q4p2Lx.jpg',
'https://img.nickpic.host/q4pKvj.jpg',
'https://img.nickpic.host/q4pYEJ.jpg',
'https://img.nickpic.host/q4pH8n.jpg',
'https://img.nickpic.host/q4pNys.jpg',
'https://img.nickpic.host/q4pfS2.jpg',
'https://img.nickpic.host/q4p01Q.jpg',
'https://img.nickpic.host/q4pe3N.jpg',
'https://img.nickpic.host/q4pkXO.jpg',
'https://img.nickpic.host/q4pJ0m.jpg',
'https://img.nickpic.host/q4pPv8.jpg',
'https://img.nickpic.host/q4pTOq.jpg',
'https://img.nickpic.host/q4voFF.jpg',
'https://img.nickpic.host/q4pW8d.jpg',
'https://img.nickpic.host/q4pZyD.jpg',
'https://img.nickpic.host/q4pyc5.jpg',
'https://img.nickpic.host/q4vG1P.jpg',
'https://img.nickpic.host/q4vILM.jpg',
'https://img.nickpic.host/q4vpXe.jpg',
'https://img.nickpic.host/q4vv0X.jpg',
'https://img.nickpic.host/q4vBxb.jpg',
'https://img.nickpic.host/q4vbOf.jpg',
'https://img.nickpic.host/q4vrK6.jpg',
'https://img.nickpic.host/q4vc0W.jpg',
'https://img.nickpic.host/q4v3Gp.jpg',
'https://img.nickpic.host/q4vFcY.jpg',
'https://img.nickpic.host/q4va4A.jpg',
'https://img.nickpic.host/q4vjPG.jpg',
'https://img.nickpic.host/q4v5Fz.jpg',
'https://img.nickpic.host/q4vSic.jpg',
'https://img.nickpic.host/q4vqx1.jpg',
'https://img.nickpic.host/q4vuhj.jpg',
'https://img.nickpic.host/q4vAKJ.jpg',
'https://img.nickpic.host/q4vOGn.jpg',
'https://img.nickpic.host/q4vhgs.jpg',
'https://img.nickpic.host/q4vtBm.jpg',
'https://img.nickpic.host/q4v642.jpg',
'https://img.nickpic.host/q4vCPQ.jpg',
'https://img.nickpic.host/q4vUax.jpg',
'https://img.nickpic.host/q4vi2O.jpg',
'https://img.nickpic.host/q4vXiN.jpg',
'https://img.nickpic.host/q4vMh8.jpg',
'https://img.nickpic.host/q4vRYq.jpg',
'https://img.nickpic.host/q4v4Gd.jpg',
'https://img.nickpic.host/q4vDgD.jpg',
'https://img.nickpic.host/q4vwD5.jpg',
'https://img.nickpic.host/q4vNBX.jpg',
'https://img.nickpic.host/q4vzPP.jpg',
'https://img.nickpic.host/q4v8aM.jpg',
'https://img.nickpic.host/q4vKnF.jpg',
'https://img.nickpic.host/q4vY2e.jpg',
'https://img.nickpic.host/q4vV6b.jpg',
'https://img.nickpic.host/q4vfYf.jpg',
'https://img.nickpic.host/q4v2I6.jpg',
'https://img.nickpic.host/q4v9qp.jpg',
'https://img.nickpic.host/q4veDY.jpg',
'https://img.nickpic.host/q4vZBW.jpg',
'https://img.nickpic.host/q4vkTA.jpg',
'https://img.nickpic.host/q4vLjG.jpg',
'https://img.nickpic.host/q4vPnz.jpg',
'https://img.nickpic.host/q4vT9c.jpg',
'https://img.nickpic.host/q4vd61.jpg',
'https://img.nickpic.host/q4vyHj.jpg',
'https://img.nickpic.host/q4xIIJ.jpg',
'https://img.nickpic.host/q4xmqn.jpg',
'https://img.nickpic.host/q4xows.jpg',
'https://img.nickpic.host/q4xsbO.jpg',
'https://img.nickpic.host/q4xpT2.jpg',
'https://img.nickpic.host/q4xxjQ.jpg',
'https://img.nickpic.host/q4xb9N.jpg',
'https://img.nickpic.host/q4xBtx.jpg',
'https://img.nickpic.host/q4x3Cm.jpg',
'https://img.nickpic.host/q4xFH8.jpg',
'https://img.nickpic.host/q4xjmq.jpg',
'https://img.nickpic.host/q4xlqd.jpg',
'https://img.nickpic.host/q4x5wD.jpg',
'https://img.nickpic.host/q4xEbe.jpg',
'https://img.nickpic.host/q4xSW5.jpg',
'https://img.nickpic.host/q4xgjP.jpg',
'https://img.nickpic.host/q4xqtM.jpg',
'https://img.nickpic.host/q4xueF.jpg',
'https://img.nickpic.host/q4xOCX.jpg',
'https://img.nickpic.host/q4xhNb.jpg',
'https://img.nickpic.host/q4xQu6.jpg',
'https://img.nickpic.host/q4xCmf.jpg',
'https://img.nickpic.host/q4xUzp.jpg',
'https://img.nickpic.host/q4x4CW.jpg',
'https://img.nickpic.host/q4xXWY.jpg',
'https://img.nickpic.host/q4xnlA.jpg',
'https://img.nickpic.host/q4xtMG.jpg',
'https://img.nickpic.host/q4xMez.jpg',
'https://img.nickpic.host/q4x1rc.jpg',
'https://img.nickpic.host/q4xDN1.jpg',
'https://img.nickpic.host/q4xzoj.jpg',
'https://img.nickpic.host/q4x7uJ.jpg',
'https://img.nickpic.host/q4x8zn.jpg',
'https://img.nickpic.host/q4xKZs.jpg',
'https://img.nickpic.host/q4x2QO.jpg',
'https://img.nickpic.host/q4xHl2.jpg',
'https://img.nickpic.host/q4xNMQ.jpg',
'https://img.nickpic.host/q4xVkx.jpg',
'https://img.nickpic.host/q4x0rN.jpg',
'https://img.nickpic.host/q4x9Vm.jpg',
'https://img.nickpic.host/q4xko8.jpg',
'https://img.nickpic.host/q4xJAq.jpg',
'https://img.nickpic.host/q4xLzd.jpg',
'https://img.nickpic.host/q4BIQe.jpg',
'https://img.nickpic.host/q4xW55.jpg',
'https://img.nickpic.host/q4xPZD.jpg',
'https://img.nickpic.host/q4xZMP.jpg',
'https://img.nickpic.host/q4BGsF.jpg',
'https://img.nickpic.host/q4xdkM.jpg',
'https://img.nickpic.host/q4BmVX.jpg',
'https://img.nickpic.host/q4Bx76.jpg',
'https://img.nickpic.host/q4Bppb.jpg',
'https://img.nickpic.host/q4BvAf.jpg',
'https://img.nickpic.host/q4BBdp.jpg',
'https://img.nickpic.host/q4Basz.jpg',
'https://img.nickpic.host/q4Br5Y.jpg',
'https://img.nickpic.host/q4BsRA.jpg',
'https://img.nickpic.host/q4B3JG.jpg',
'https://img.nickpic.host/q4BjUc.jpg',
'https://img.nickpic.host/q4BlVW.jpg',
'https://img.nickpic.host/q4BcEj.jpg',
'https://img.nickpic.host/q4BSp1.jpg',
'https://img.nickpic.host/q4Bg7J.jpg',
'https://img.nickpic.host/q4B63x.jpg',
'https://img.nickpic.host/q4Bqdn.jpg',
'https://img.nickpic.host/q4BASs.jpg',
'https://img.nickpic.host/q4BER2.jpg',
'https://img.nickpic.host/q4BOJQ.jpg',
'https://img.nickpic.host/q4BCUN.jpg',
'https://img.nickpic.host/q4BXvm.jpg',
'https://img.nickpic.host/q4BQfO.jpg',
'https://img.nickpic.host/q4BiE8.jpg',
'https://img.nickpic.host/q4BRSD.jpg',
'https://img.nickpic.host/q4Bn8q.jpg',
'https://img.nickpic.host/q4B115.jpg',
'https://img.nickpic.host/q4Btdd.jpg',
'https://img.nickpic.host/q4B4JP.jpg',
'https://img.nickpic.host/q4Bw3M.jpg',
'https://img.nickpic.host/q4BzXF.jpg',
'https://img.nickpic.host/q4BH8f.jpg',
'https://img.nickpic.host/q4BKvX.jpg',
'https://img.nickpic.host/q4BYOb.jpg',
'https://img.nickpic.host/q4B7fe.jpg',
'https://img.nickpic.host/q4Bfcp.jpg',
'https://img.nickpic.host/q4BNy6.jpg',
'https://img.nickpic.host/q4B01Y.jpg',
'https://img.nickpic.host/q4B2LA.jpg',
'https://img.nickpic.host/q4BkXz.jpg',
'https://img.nickpic.host/q4BeFG.jpg',
'https://img.nickpic.host/q4BJ0c.jpg',
'https://img.nickpic.host/q4BPvW.jpg',
'https://img.nickpic.host/q4bG4s.jpg',
'https://img.nickpic.host/q4BTO1.jpg',
'https://img.nickpic.host/q4BWKj.jpg',
'https://img.nickpic.host/q4bIL2.jpg',
'https://img.nickpic.host/q4BZyJ.jpg',
'https://img.nickpic.host/q4Bycn.jpg',
'https://img.nickpic.host/q4boFQ.jpg',
'https://img.nickpic.host/q4bv0N.jpg',
'https://img.nickpic.host/q4bpix.jpg',
'https://img.nickpic.host/q4bBxO.jpg',
'https://img.nickpic.host/q4bFcd.jpg',
'https://img.nickpic.host/q4bbhm.jpg',
'https://img.nickpic.host/q4brK8.jpg',
'https://img.nickpic.host/q4b3Gq.jpg',
'https://img.nickpic.host/q4ba4D.jpg',
'https://img.nickpic.host/q4bjP5.jpg',
'https://img.nickpic.host/q4b5FP.jpg',
'https://img.nickpic.host/q4bSiM.jpg',
'https://img.nickpic.host/q4bqxe.jpg',
'https://img.nickpic.host/q4bc2F.jpg',
'https://img.nickpic.host/q4bAYb.jpg',
'https://img.nickpic.host/q4buhX.jpg',
'https://img.nickpic.host/q4bhg6.jpg',
'https://img.nickpic.host/q4b6Dp.jpg',
'https://img.nickpic.host/q4bOGf.jpg',
'https://img.nickpic.host/q4bi2z.jpg',
'https://img.nickpic.host/q4bCPY.jpg',
'https://img.nickpic.host/q4bXnG.jpg',
'https://img.nickpic.host/q4bUaA.jpg',
'https://img.nickpic.host/q4btBc.jpg',
'https://img.nickpic.host/q4bMhW.jpg',
'https://img.nickpic.host/q4b4Ij.jpg',
'https://img.nickpic.host/q4bRY1.jpg',
'https://img.nickpic.host/q4bDgJ.jpg',
'https://img.nickpic.host/q4bwDn.jpg',
'https://img.nickpic.host/q4bzTs.jpg',
'https://img.nickpic.host/q4bKnQ.jpg',
'https://img.nickpic.host/q4b8a2.jpg',
'https://img.nickpic.host/q4bfHm.jpg',
'https://img.nickpic.host/q4bY9x.jpg',
'https://img.nickpic.host/q4bNBN.jpg',
'https://img.nickpic.host/q4bV6O.jpg',
'https://img.nickpic.host/q4b9qq.jpg',
'https://img.nickpic.host/q4b2I8.jpg',
'https://img.nickpic.host/q4beDd.jpg',
'https://img.nickpic.host/q4bkTD.jpg',
'https://img.nickpic.host/q4bLj5.jpg',
'https://img.nickpic.host/q4bPnP.jpg',
'https://img.nickpic.host/q4bT9M.jpg',
'https://img.nickpic.host/q4bZbF.jpg',
'https://img.nickpic.host/q4bd6e.jpg',
'https://img.nickpic.host/q4row6.jpg',
'https://img.nickpic.host/q4byHX.jpg',
'https://img.nickpic.host/q4rmqf.jpg',
'https://img.nickpic.host/q4rImb.jpg',
'https://img.nickpic.host/q4rpWp.jpg',
'https://img.nickpic.host/q4rxjY.jpg',
'https://img.nickpic.host/q4rBtA.jpg',
'https://img.nickpic.host/q4rbeG.jpg',
'https://img.nickpic.host/q4rsbz.jpg',
'https://img.nickpic.host/q4rluj.jpg',
'https://img.nickpic.host/q4r3Cc.jpg',
'https://img.nickpic.host/q4rjm1.jpg',
'https://img.nickpic.host/q4rFHW.jpg',
'https://img.nickpic.host/q4r5wJ.jpg',
'https://img.nickpic.host/q4rgls.jpg',
'https://img.nickpic.host/q4rSWn.jpg',
'https://img.nickpic.host/q4rqt2.jpg',
'https://img.nickpic.host/q4rOCN.jpg',
'https://img.nickpic.host/q4rueQ.jpg',
'https://img.nickpic.host/q4rErx.jpg',
'https://img.nickpic.host/q4rhNO.jpg',
'https://img.nickpic.host/q4rCom.jpg',
'https://img.nickpic.host/q4rUzq.jpg',
'https://img.nickpic.host/q4rQu8.jpg',
'https://img.nickpic.host/q4rMeP.jpg',
'https://img.nickpic.host/q4r1rM.jpg',
'https://img.nickpic.host/q4rXWd.jpg',
'https://img.nickpic.host/q4rtM5.jpg',
'https://img.nickpic.host/q4rnlD.jpg',
'https://img.nickpic.host/q4r4QF.jpg',
'https://img.nickpic.host/q4rDNe.jpg',
'https://img.nickpic.host/q4r7Ab.jpg',
'https://img.nickpic.host/q4r8zf.jpg',
'https://img.nickpic.host/q4rKZ6.jpg',
'https://img.nickpic.host/q4rzoX.jpg',
'https://img.nickpic.host/q4rH5p.jpg',
'https://img.nickpic.host/q4rNMY.jpg',
'https://img.nickpic.host/q4rVkA.jpg',
'https://img.nickpic.host/q4r0sG.jpg',
'https://img.nickpic.host/q4r2Qz.jpg',
'https://img.nickpic.host/q4r9Vc.jpg',
'https://img.nickpic.host/q4rkoW.jpg',
'https://img.nickpic.host/q4rJA1.jpg',
'https://img.nickpic.host/q4rL7j.jpg',
'https://img.nickpic.host/q4rPZJ.jpg',
'https://img.nickpic.host/q4rW5n.jpg',
'https://img.nickpic.host/q4rZRs.jpg',
'https://img.nickpic.host/q4sGsQ.jpg',
'https://img.nickpic.host/q4rdk2.jpg',
'https://img.nickpic.host/q4sIUx.jpg',
'https://img.nickpic.host/q4smVN.jpg',
'https://img.nickpic.host/q4sBdq.jpg',
'https://img.nickpic.host/q4sppO.jpg',
'https://img.nickpic.host/q4sx78.jpg',
'https://img.nickpic.host/q4svEm.jpg',
'https://img.nickpic.host/q4sr5d.jpg',
'https://img.nickpic.host/q4ssRD.jpg',
'https://img.nickpic.host/q4s3J5.jpg',
'https://img.nickpic.host/q4sasP.jpg',
'https://img.nickpic.host/q4sjUM.jpg',
'https://img.nickpic.host/q4sSpe.jpg',
'https://img.nickpic.host/q4slfF.jpg',
'https://img.nickpic.host/q4sAS6.jpg',
'https://img.nickpic.host/q4scEX.jpg',
'https://img.nickpic.host/q4sg8b.jpg',
'https://img.nickpic.host/q4sqdf.jpg',
'https://img.nickpic.host/q4sOJY.jpg',
'https://img.nickpic.host/q4sE1p.jpg',
'https://img.nickpic.host/q4s63A.jpg',
'https://img.nickpic.host/q4sCXG.jpg',
'https://img.nickpic.host/q4sQfz.jpg',
'https://img.nickpic.host/q4sXvc.jpg',
'https://img.nickpic.host/q4sn81.jpg',
'https://img.nickpic.host/q4styj.jpg',
'https://img.nickpic.host/q4siEW.jpg',
'https://img.nickpic.host/q4sRSJ.jpg',
'https://img.nickpic.host/q4s11n.jpg',
'https://img.nickpic.host/q4sw32.jpg',
'https://img.nickpic.host/q4s4Ls.jpg',
'https://img.nickpic.host/q4szXQ.jpg',
'https://img.nickpic.host/q4s70x.jpg',
'https://img.nickpic.host/q4sKvN.jpg',
'https://img.nickpic.host/q4sYOO.jpg',
'https://img.nickpic.host/q4sHKm.jpg',
'https://img.nickpic.host/q4s2LD.jpg',
'https://img.nickpic.host/q4sfcq.jpg',
'https://img.nickpic.host/q4sNy8.jpg',
'https://img.nickpic.host/q4seF5.jpg',
'https://img.nickpic.host/q4s01d.jpg',
'https://img.nickpic.host/q4sJ0M.jpg',
'https://img.nickpic.host/q4skXP.jpg',
'https://img.nickpic.host/q4sPxF.jpg',
'https://img.nickpic.host/q4sTOe.jpg',
'https://img.nickpic.host/q4sdGb.jpg',
'https://img.nickpic.host/q4sWKX.jpg',
'https://img.nickpic.host/q4sycf.jpg',
'https://img.nickpic.host/q43IPp.jpg',
'https://img.nickpic.host/q43G46.jpg',
'https://img.nickpic.host/q43oFY.jpg',
'https://img.nickpic.host/q43bhc.jpg',
'https://img.nickpic.host/q43v2G.jpg',
'https://img.nickpic.host/q43piA.jpg',
'https://img.nickpic.host/q43Bxz.jpg',
'https://img.nickpic.host/q43rKW.jpg',
'https://img.nickpic.host/q43Fgj.jpg',
'https://img.nickpic.host/q433G1.jpg',
'https://img.nickpic.host/q43a4J.jpg',
'https://img.nickpic.host/q43jPn.jpg',
'https://img.nickpic.host/q435as.jpg',
'https://img.nickpic.host/q43uhN.jpg',
'https://img.nickpic.host/q43Si2.jpg',
'https://img.nickpic.host/q43qBx.jpg',
'https://img.nickpic.host/q43c2Q.jpg',
'https://img.nickpic.host/q43AYO.jpg',
'https://img.nickpic.host/q43OIm.jpg',
'https://img.nickpic.host/q43hg8.jpg',
'https://img.nickpic.host/q436Dq.jpg',
'https://img.nickpic.host/q43CPd.jpg',
'https://img.nickpic.host/q43M6F.jpg',
'https://img.nickpic.host/q43UaD.jpg',
'https://img.nickpic.host/q43RYe.jpg',
'https://img.nickpic.host/q43Xn5.jpg',
'https://img.nickpic.host/q43tBM.jpg',
'https://img.nickpic.host/q434IX.jpg',
'https://img.nickpic.host/q43Dqb.jpg',
'https://img.nickpic.host/q43wDf.jpg',
'https://img.nickpic.host/q43zT6.jpg',
'https://img.nickpic.host/q43KnY.jpg',
'https://img.nickpic.host/q438jp.jpg',
'https://img.nickpic.host/q43Y9A.jpg',
'https://img.nickpic.host/q43V6z.jpg',
'https://img.nickpic.host/q43fHc.jpg',
'https://img.nickpic.host/q43NbG.jpg',
'https://img.nickpic.host/q432IW.jpg',
'https://img.nickpic.host/q439q1.jpg',
'https://img.nickpic.host/q43ewj.jpg',
'https://img.nickpic.host/q43kTJ.jpg',
'https://img.nickpic.host/q43Ljn.jpg',
'https://img.nickpic.host/q43Pts.jpg',
'https://img.nickpic.host/q43T92.jpg',
'https://img.nickpic.host/q43dCx.jpg',
'https://img.nickpic.host/q43ZbQ.jpg',
'https://img.nickpic.host/q43yHN.jpg',
'https://img.nickpic.host/q4FImO.jpg',
'https://img.nickpic.host/q4FpWq.jpg',
'https://img.nickpic.host/q4Fmum.jpg',
'https://img.nickpic.host/q4Fow8.jpg',
'https://img.nickpic.host/q4Fxjd.jpg',
'https://img.nickpic.host/q4FBtD.jpg',
'https://img.nickpic.host/q4Fbe5.jpg',
'https://img.nickpic.host/q4FsbP.jpg',
'https://img.nickpic.host/q4F3CM.jpg',
'https://img.nickpic.host/q4Fjme.jpg',
'https://img.nickpic.host/q4FFNF.jpg',
'https://img.nickpic.host/q4FSWf.jpg',
'https://img.nickpic.host/q4F5zb.jpg',
'https://img.nickpic.host/q4FluX.jpg',
'https://img.nickpic.host/q4FqMp.jpg',
'https://img.nickpic.host/q4Fgl6.jpg',
'https://img.nickpic.host/q4FErA.jpg',
'https://img.nickpic.host/q4FueY.jpg',
'https://img.nickpic.host/q4FOQG.jpg',
'https://img.nickpic.host/q4FCoc.jpg',
'https://img.nickpic.host/q4FhNz.jpg',
'https://img.nickpic.host/q4FQuW.jpg',
'https://img.nickpic.host/q4FUz1.jpg',
'https://img.nickpic.host/q4FXZj.jpg',
'https://img.nickpic.host/q4FnlJ.jpg',
'https://img.nickpic.host/q4FMks.jpg',
'https://img.nickpic.host/q4FtMn.jpg',
'https://img.nickpic.host/q4F4QQ.jpg',
'https://img.nickpic.host/q4F1r2.jpg',
'https://img.nickpic.host/q4FDVx.jpg',
'https://img.nickpic.host/q4FzoN.jpg',
'https://img.nickpic.host/q4F7AO.jpg',
'https://img.nickpic.host/q4FKZ8.jpg',
'https://img.nickpic.host/q4F87m.jpg',
'https://img.nickpic.host/q4FH5q.jpg',
'https://img.nickpic.host/q4FNMd.jpg',
'https://img.nickpic.host/q4F0s5.jpg',
'https://img.nickpic.host/q4FVkD.jpg',
'https://img.nickpic.host/q4F2QP.jpg',
'https://img.nickpic.host/q4F9VM.jpg',
'https://img.nickpic.host/q4FPdb.jpg',
'https://img.nickpic.host/q4FJAe.jpg',
'https://img.nickpic.host/q4FkpF.jpg',
'https://img.nickpic.host/q4FL7X.jpg',
'https://img.nickpic.host/q4FW5f.jpg',
'https://img.nickpic.host/q4FdJp.jpg',
'https://img.nickpic.host/q4FZR6.jpg',
'https://img.nickpic.host/q4aIUA.jpg',
'https://img.nickpic.host/q4aGsY.jpg',
'https://img.nickpic.host/q4avEc.jpg',
'https://img.nickpic.host/q4amfG.jpg',
'https://img.nickpic.host/q4appz.jpg',
'https://img.nickpic.host/q4ax7W.jpg',
'https://img.nickpic.host/q4arSj.jpg',
'https://img.nickpic.host/q4asRJ.jpg',
'https://img.nickpic.host/q4aBd1.jpg',
'https://img.nickpic.host/q4a3Jn.jpg',
'https://img.nickpic.host/q4aa3s.jpg',
'https://img.nickpic.host/q4ajU2.jpg',
'https://img.nickpic.host/q4alfQ.jpg',
'https://img.nickpic.host/q4acEN.jpg',
'https://img.nickpic.host/q4aE1q.jpg',
'https://img.nickpic.host/q4aqym.jpg',
'https://img.nickpic.host/q4aAS8.jpg',
'https://img.nickpic.host/q4aOJd.jpg',
'https://img.nickpic.host/q4aCX5.jpg',
'https://img.nickpic.host/q4a63D.jpg',
'https://img.nickpic.host/q4aQfP.jpg',
'https://img.nickpic.host/q4aXvM.jpg',
'https://img.nickpic.host/q4an8e.jpg',
'https://img.nickpic.host/q4aiOF.jpg',
'https://img.nickpic.host/q4atyX.jpg',
'https://img.nickpic.host/q4a11f.jpg',
'https://img.nickpic.host/q4aRcb.jpg',
'https://img.nickpic.host/q4a4L6.jpg',
'https://img.nickpic.host/q4awFp.jpg',
'https://img.nickpic.host/q4azXY.jpg',
'https://img.nickpic.host/q4aYOz.jpg',
'https://img.nickpic.host/q4a70A.jpg',
'https://img.nickpic.host/q4aKxG.jpg',
'https://img.nickpic.host/q4aHKc.jpg',
'https://img.nickpic.host/q4afc1.jpg',
'https://img.nickpic.host/q4a04j.jpg',
'https://img.nickpic.host/q4aNyW.jpg',
'https://img.nickpic.host/q4a2LJ.jpg',
'https://img.nickpic.host/q4aeFn.jpg',
'https://img.nickpic.host/q4akis.jpg',
'https://img.nickpic.host/q4aJ02.jpg',
'https://img.nickpic.host/q4aWKN.jpg',
'https://img.nickpic.host/q4aThx.jpg',
'https://img.nickpic.host/q4aPxQ.jpg',
'https://img.nickpic.host/q4adGO.jpg',
'https://img.nickpic.host/q4jG48.jpg',
'https://img.nickpic.host/q4aygm.jpg',
'https://img.nickpic.host/q4jIPq.jpg',
'https://img.nickpic.host/q4joFd.jpg',
'https://img.nickpic.host/q4jpiD.jpg',
'https://img.nickpic.host/q4jBxP.jpg',
'https://img.nickpic.host/q4jv25.jpg',
'https://img.nickpic.host/q4jbhM.jpg',
'https://img.nickpic.host/q4jrYF.jpg',
'https://img.nickpic.host/q4jFgX.jpg',
'https://img.nickpic.host/q4jaDb.jpg',
'https://img.nickpic.host/q4j3Ge.jpg',
'https://img.nickpic.host/q4jjPf.jpg',
'https://img.nickpic.host/q4j5a6.jpg',
'https://img.nickpic.host/q4jSnp.jpg',
'https://img.nickpic.host/q4jc2Y.jpg',
'https://img.nickpic.host/q4jqBA.jpg',
'https://img.nickpic.host/q4ju6G.jpg',
'https://img.nickpic.host/q4jAYz.jpg',
'https://img.nickpic.host/q4jOIc.jpg',
'https://img.nickpic.host/q4j6D1.jpg',
'https://img.nickpic.host/q4jhgW.jpg',
'https://img.nickpic.host/q4jCTj.jpg',
'https://img.nickpic.host/q4jUaJ.jpg',
'https://img.nickpic.host/q4jXnn.jpg',
'https://img.nickpic.host/q4ji9s.jpg',
'https://img.nickpic.host/q4jtB2.jpg',
'https://img.nickpic.host/q4jRHx.jpg',
'https://img.nickpic.host/q4jM6Q.jpg',
'https://img.nickpic.host/q4j4IN.jpg',
'https://img.nickpic.host/q4jDqO.jpg',
'https://img.nickpic.host/q4jwwm.jpg',
'https://img.nickpic.host/q4j8jq.jpg',
'https://img.nickpic.host/q4jzT8.jpg',
'https://img.nickpic.host/q4jKnd.jpg',
'https://img.nickpic.host/q4jY9D.jpg',
'https://img.nickpic.host/q4jNb5.jpg',
'https://img.nickpic.host/q4jV6P.jpg',
'https://img.nickpic.host/q4jfHM.jpg',
'https://img.nickpic.host/q4j2mF.jpg',
'https://img.nickpic.host/q4j9qe.jpg',
'https://img.nickpic.host/q4jewX.jpg',
'https://img.nickpic.host/q4jLjf.jpg',
'https://img.nickpic.host/q4jkWb.jpg',
'https://img.nickpic.host/q4jPt6.jpg',
'https://img.nickpic.host/q4jTep.jpg',
'https://img.nickpic.host/q4jZbY.jpg',
'https://img.nickpic.host/q4jyNG.jpg',
'https://img.nickpic.host/q4jdCA.jpg',
'https://img.nickpic.host/q4lImz.jpg',
'https://img.nickpic.host/q4lmuc.jpg',
'https://img.nickpic.host/q4lpW1.jpg',
'https://img.nickpic.host/q4lxlj.jpg',
'https://img.nickpic.host/q4lowW.jpg',
'https://img.nickpic.host/q4lBtJ.jpg',
'https://img.nickpic.host/q4lben.jpg',
'https://img.nickpic.host/q4lsrs.jpg',
'https://img.nickpic.host/q4l3C2.jpg',
'https://img.nickpic.host/q4lFNQ.jpg',
'https://img.nickpic.host/q4ljox.jpg',
'https://img.nickpic.host/q4lluN.jpg',
'https://img.nickpic.host/q4l5zO.jpg',
'https://img.nickpic.host/q4lSZm.jpg',
'https://img.nickpic.host/q4lgl8.jpg',
'https://img.nickpic.host/q4lqMq.jpg',
'https://img.nickpic.host/q4lued.jpg',
'https://img.nickpic.host/q4lErD.jpg',
'https://img.nickpic.host/q4lOQ5.jpg',
'https://img.nickpic.host/q4lhNP.jpg',
'https://img.nickpic.host/q4lCoM.jpg',
'https://img.nickpic.host/q4lQAF.jpg',
'https://img.nickpic.host/q4lUze.jpg',
'https://img.nickpic.host/q4lXZX.jpg',
'https://img.nickpic.host/q4ln5b.jpg',
'https://img.nickpic.host/q4ltMf.jpg',
'https://img.nickpic.host/q4lMk6.jpg',
'https://img.nickpic.host/q4l1sp.jpg',
'https://img.nickpic.host/q4l4QY.jpg',
'https://img.nickpic.host/q4lDVA.jpg',
'https://img.nickpic.host/q4lzpG.jpg',
'https://img.nickpic.host/q4l7Az.jpg',
'https://img.nickpic.host/q4l87c.jpg',
'https://img.nickpic.host/q4lKZW.jpg',
'https://img.nickpic.host/q4lH51.jpg',
'https://img.nickpic.host/q4lNRj.jpg',
'https://img.nickpic.host/q4lVkJ.jpg',
'https://img.nickpic.host/q4l0sn.jpg',
'https://img.nickpic.host/q4l2Us.jpg',
'https://img.nickpic.host/q4l9V2.jpg',
'https://img.nickpic.host/q4lkpQ.jpg',
'https://img.nickpic.host/q4lJEx.jpg',
'https://img.nickpic.host/q4lPdO.jpg',
'https://img.nickpic.host/q4lWSm.jpg',
'https://img.nickpic.host/q4lZR8.jpg',
'https://img.nickpic.host/q4ldJq.jpg',
'https://img.nickpic.host/q45Gsd.jpg',
'https://img.nickpic.host/q45ppP.jpg',
'https://img.nickpic.host/q45IUD.jpg',
'https://img.nickpic.host/q45mf5.jpg',
'https://img.nickpic.host/q45vEM.jpg',
'https://img.nickpic.host/q45x8F.jpg',
'https://img.nickpic.host/q45Bde.jpg',
'https://img.nickpic.host/q45rSX.jpg',
'https://img.nickpic.host/q45s1b.jpg',
'https://img.nickpic.host/q453Jf.jpg',
'https://img.nickpic.host/q45a36.jpg',
'https://img.nickpic.host/q45jXp.jpg',
'https://img.nickpic.host/q45cOG.jpg',
'https://img.nickpic.host/q45lfY.jpg',
'https://img.nickpic.host/q45SvA.jpg',
'https://img.nickpic.host/q45g8z.jpg',
'https://img.nickpic.host/q45qyc.jpg',
'https://img.nickpic.host/q45E11.jpg',
'https://img.nickpic.host/q45ASW.jpg',
'https://img.nickpic.host/q45OLj.jpg',
'https://img.nickpic.host/q4563J.jpg',
'https://img.nickpic.host/q45Xv2.jpg',
'https://img.nickpic.host/q45Q0s.jpg',
'https://img.nickpic.host/q45CXn.jpg',
'https://img.nickpic.host/q45nKx.jpg',
'https://img.nickpic.host/q45iOQ.jpg',
'https://img.nickpic.host/q45tyN.jpg',
'https://img.nickpic.host/q45RcO.jpg',
'https://img.nickpic.host/q454L8.jpg',
'https://img.nickpic.host/q4514m.jpg',
'https://img.nickpic.host/q4570D.jpg',
'https://img.nickpic.host/q45zXd.jpg',
'https://img.nickpic.host/q45wFq.jpg',
'https://img.nickpic.host/q45VGF.jpg',
'https://img.nickpic.host/q45Kx5.jpg',
'https://img.nickpic.host/q45HKM.jpg',
'https://img.nickpic.host/q45YOP.jpg',
'https://img.nickpic.host/q45fce.jpg',
'https://img.nickpic.host/q452Pb.jpg',
'https://img.nickpic.host/q4504X.jpg',
'https://img.nickpic.host/q45eFf.jpg',
'https://img.nickpic.host/q45ki6.jpg',
'https://img.nickpic.host/q45J2p.jpg',
'https://img.nickpic.host/q45ThA.jpg',
'https://img.nickpic.host/q45PxY.jpg',
'https://img.nickpic.host/q45dGz.jpg',
'https://img.nickpic.host/q45WYG.jpg',
'https://img.nickpic.host/q45ygc.jpg',
'https://img.nickpic.host/q4SIP1.jpg',
'https://img.nickpic.host/q4SG4W.jpg',
'https://img.nickpic.host/q4Soaj.jpg',
'https://img.nickpic.host/q4SpiJ.jpg']
let imp = gen1[Math.floor(Math.random() * gen1.length)]
genshin = await getBuffer(imp)
const gedecir =['Aquí tienes 💕🦈','¿Linda foto no?','Pedido entregado 🕊','¿Qué tal está?','¿Te gusta?','Tengo muchas más 😽']
const gefrase = gedecir[Math.floor(Math.random() * gedecir.length)]
let buttons = [
                    {buttonId: `genshin`, buttonText: {displayText: 'Siguiente'}, type: 1}
                ]
                let buttonMessage = {
                    image: (genshin),
                    caption: (gefrase),
                    buttons: buttons,
                    headerType: 4
                }
                GojoMdNx.sendMessage(m.chat, buttonMessage)
            }
break

case 'naruto': {
const naru =['https://img.nickpic.host/q4Si96.jpg',
'https://img.nickpic.host/q4SXnf.jpg',
'https://img.nickpic.host/q4SUjb.jpg',
'https://img.nickpic.host/q4SCTX.jpg',
'https://img.nickpic.host/q4S6De.jpg',
'https://img.nickpic.host/q4ShqF.jpg',
'https://img.nickpic.host/q4SOIM.jpg',
'https://img.nickpic.host/q4Su65.jpg',
'https://img.nickpic.host/q4SAYP.jpg',
'https://img.nickpic.host/q4SqBD.jpg',
'https://img.nickpic.host/q4Stbp.jpg',
'https://img.nickpic.host/q4SM6Y.jpg',
'https://img.nickpic.host/q4SRHA.jpg',
'https://img.nickpic.host/q4S4mG.jpg',
'https://img.nickpic.host/q4SDqz.jpg',
'https://img.nickpic.host/q4SzTW.jpg',
'https://img.nickpic.host/q4Swwc.jpg',
'https://img.nickpic.host/q4S8j1.jpg',
'https://img.nickpic.host/q4SKtj.jpg',
'https://img.nickpic.host/q4SY9J.jpg',
'https://img.nickpic.host/q4SNbn.jpg',
'https://img.nickpic.host/q4SVCs.jpg',
'https://img.nickpic.host/q4SfH2.jpg',
'https://img.nickpic.host/q4S2mQ.jpg',
'https://img.nickpic.host/q4S9ux.jpg',
'https://img.nickpic.host/q4SewN.jpg',
'https://img.nickpic.host/q4SkWO.jpg',
'https://img.nickpic.host/q4SLlm.jpg',
'https://img.nickpic.host/q4SPt8.jpg',
'https://img.nickpic.host/q4STeq.jpg',
'https://img.nickpic.host/q4SZbd.jpg',
'https://img.nickpic.host/q4SdCD.jpg',
'https://img.nickpic.host/q4SyN5.jpg',
'https://img.nickpic.host/q4cImP.jpg',
'https://img.nickpic.host/q4cmuM.jpg',
'https://img.nickpic.host/q4cozF.jpg',
'https://img.nickpic.host/q4cpWe.jpg',
'https://img.nickpic.host/q4cxlX.jpg',
'https://img.nickpic.host/q4cBMb.jpg',
'https://img.nickpic.host/q4cbef.jpg',
'https://img.nickpic.host/q4csr6.jpg',
'https://img.nickpic.host/q4cFNY.jpg',
'https://img.nickpic.host/q4c3Qp.jpg',
'https://img.nickpic.host/q4cjoA.jpg',
'https://img.nickpic.host/q4clAG.jpg',
'https://img.nickpic.host/q4c5zz.jpg',
'https://img.nickpic.host/q4cglW.jpg',
'https://img.nickpic.host/q4cSZc.jpg',
'https://img.nickpic.host/q4cqM1.jpg',
'https://img.nickpic.host/q4cukj.jpg',
'https://img.nickpic.host/q4cErJ.jpg',
'https://img.nickpic.host/q4cOQn.jpg',
'https://img.nickpic.host/q4chVs.jpg',
'https://img.nickpic.host/q4cCo2.jpg',
'https://img.nickpic.host/q4cQAQ.jpg',
'https://img.nickpic.host/q4cU7x.jpg',
'https://img.nickpic.host/q4cXZN.jpg',
'https://img.nickpic.host/q4cn5O.jpg',
'https://img.nickpic.host/q4ctRm.jpg',
'https://img.nickpic.host/q4cMk8.jpg',
'https://img.nickpic.host/q4c1sq.jpg',
'https://img.nickpic.host/q4cDVD.jpg',
'https://img.nickpic.host/q4c4Qd.jpg',
'https://img.nickpic.host/q4czp5.jpg',
'https://img.nickpic.host/q4c7AP.jpg',
'https://img.nickpic.host/q4c87M.jpg',
'https://img.nickpic.host/q4cKdF.jpg',
'https://img.nickpic.host/q4cH5e.jpg',
'https://img.nickpic.host/q4cVJb.jpg',
'https://img.nickpic.host/q4cNRX.jpg',
'https://img.nickpic.host/q4c0sf.jpg',
'https://img.nickpic.host/q4c2U6.jpg',
'https://img.nickpic.host/q4ckpY.jpg',
'https://img.nickpic.host/q4cJEA.jpg',
'https://img.nickpic.host/q4c9fp.jpg',
'https://img.nickpic.host/q4cL8G.jpg',
'https://img.nickpic.host/q4cPdz.jpg',
'https://img.nickpic.host/q4cWSc.jpg',
'https://img.nickpic.host/q4cZRW.jpg',
'https://img.nickpic.host/q4cdJ1.jpg',
'https://img.nickpic.host/q4gG3j.jpg',
'https://img.nickpic.host/q4gIUJ.jpg',
'https://img.nickpic.host/q4gmfn.jpg',
'https://img.nickpic.host/q4gpvs.jpg',
'https://img.nickpic.host/q4gvE2.jpg',
'https://img.nickpic.host/q4gx8Q.jpg',
'https://img.nickpic.host/q4gByx.jpg',
'https://img.nickpic.host/q4gs1O.jpg',
'https://img.nickpic.host/q4grSN.jpg',
'https://img.nickpic.host/q4g3Lm.jpg',
'https://img.nickpic.host/q4ga38.jpg',
'https://img.nickpic.host/q4gjXq.jpg',
'https://img.nickpic.host/q4gSvD.jpg',
'https://img.nickpic.host/q4glfd.jpg',
'https://img.nickpic.host/q4gcO5.jpg',
'https://img.nickpic.host/q4gg8P.jpg',
'https://img.nickpic.host/q4gqyM.jpg',
'https://img.nickpic.host/q4gAcF.jpg',
'https://img.nickpic.host/q4gE1e.jpg',
'https://img.nickpic.host/q4gOLX.jpg',
'https://img.nickpic.host/q4g6Fb.jpg',
'https://img.nickpic.host/q4gCXf.jpg',
'https://img.nickpic.host/q4gQ06.jpg',
'https://img.nickpic.host/q4gXxp.jpg',
'https://img.nickpic.host/q4giOY.jpg',
'https://img.nickpic.host/q4gnKA.jpg',
'https://img.nickpic.host/q4gMGG.jpg',
'https://img.nickpic.host/q4gRcz.jpg',
'https://img.nickpic.host/q4g14c.jpg',
'https://img.nickpic.host/q4g4LW.jpg',
'https://img.nickpic.host/q4gwF1.jpg',
'https://img.nickpic.host/q4gzij.jpg',
'https://img.nickpic.host/q4g70J.jpg',
'https://img.nickpic.host/q4gYhs.jpg',
'https://img.nickpic.host/q4gKxn.jpg',
'https://img.nickpic.host/q4gHK2.jpg',
'https://img.nickpic.host/q4gVGQ.jpg',
'https://img.nickpic.host/q4gfgx.jpg',
'https://img.nickpic.host/q4g04N.jpg',
'https://img.nickpic.host/q4g2PO.jpg',
'https://img.nickpic.host/q4geam.jpg',
'https://img.nickpic.host/q4gki8.jpg',
'https://img.nickpic.host/q4gJ2q.jpg',
'https://img.nickpic.host/q4gPxd.jpg',
'https://img.nickpic.host/q4gThD.jpg',
'https://img.nickpic.host/q4gWY5.jpg',
'https://img.nickpic.host/q4gdGP.jpg',
'https://img.nickpic.host/q4qGDF.jpg',
'https://img.nickpic.host/q4gygM.jpg',
'https://img.nickpic.host/q4qIPe.jpg',
'https://img.nickpic.host/q4qoaX.jpg',
'https://img.nickpic.host/q4qpnb.jpg',
'https://img.nickpic.host/q4qBB6.jpg',
'https://img.nickpic.host/q4qv2f.jpg',
'https://img.nickpic.host/q4qb6p.jpg',
'https://img.nickpic.host/q4qrYY.jpg',
'https://img.nickpic.host/q4q3IA.jpg',
'https://img.nickpic.host/q4qFqG.jpg',
'https://img.nickpic.host/q4qaDz.jpg',
'https://img.nickpic.host/q4qjTc.jpg',
'https://img.nickpic.host/q4qSn1.jpg',
'https://img.nickpic.host/q4q5aW.jpg',
'https://img.nickpic.host/q4qc9j.jpg',
'https://img.nickpic.host/q4qqBJ.jpg',
'https://img.nickpic.host/q4qu6n.jpg',
'https://img.nickpic.host/q4qAHs.jpg',
'https://img.nickpic.host/q4qOI2.jpg',
'https://img.nickpic.host/q4qhqQ.jpg',
'https://img.nickpic.host/q4q6wx.jpg',
'https://img.nickpic.host/q4qCTN.jpg',
'https://img.nickpic.host/q4qUjO.jpg',
'https://img.nickpic.host/q4qXtm.jpg',
'https://img.nickpic.host/q4qi98.jpg',
'https://img.nickpic.host/q4qtbq.jpg',
'https://img.nickpic.host/q4qM6d.jpg',
'https://img.nickpic.host/q4qRHD.jpg',
'https://img.nickpic.host/q4q4m5.jpg',
'https://img.nickpic.host/q4qDqP.jpg',
'https://img.nickpic.host/q4qwwM.jpg',
'https://img.nickpic.host/q4qzWF.jpg',
'https://img.nickpic.host/q4q8je.jpg',
'https://img.nickpic.host/q4qKtX.jpg',
'https://img.nickpic.host/q4qYeb.jpg',
'https://img.nickpic.host/q4qNbf.jpg',
'https://img.nickpic.host/q4qVC6.jpg',
'https://img.nickpic.host/q4qfNp.jpg',
'https://img.nickpic.host/q4q2mY.jpg',
'https://img.nickpic.host/q4q9uA.jpg',
'https://img.nickpic.host/q4qezG.jpg',
'https://img.nickpic.host/q4qLlc.jpg',
'https://img.nickpic.host/q4qkWz.jpg',
'https://img.nickpic.host/q4qPtW.jpg',
'https://img.nickpic.host/q4qTe1.jpg',
'https://img.nickpic.host/q4qZrj.jpg',
'https://img.nickpic.host/q4qdCJ.jpg',
'https://img.nickpic.host/q4qyNn.jpg',
'https://img.nickpic.host/q4uIos.jpg',
'https://img.nickpic.host/q4umu2.jpg',
'https://img.nickpic.host/q4uozQ.jpg',
'https://img.nickpic.host/q4upZx.jpg',
'https://img.nickpic.host/q4uxlN.jpg',
'https://img.nickpic.host/q4uBMO.jpg',
'https://img.nickpic.host/q4usr8.jpg',
'https://img.nickpic.host/q4ubkm.jpg',
'https://img.nickpic.host/q4u3Qq.jpg',
'https://img.nickpic.host/q4uFNd.jpg',
'https://img.nickpic.host/q4ujoD.jpg',
'https://img.nickpic.host/q4ulA5.jpg',
'https://img.nickpic.host/q4u5zP.jpg',
'https://img.nickpic.host/q4uSZM.jpg',
'https://img.nickpic.host/q4ug5F.jpg',
'https://img.nickpic.host/q4uqMe.jpg',
'https://img.nickpic.host/q4uukX.jpg',
'https://img.nickpic.host/q4uEsb.jpg',
'https://img.nickpic.host/q4uOQf.jpg',
'https://img.nickpic.host/q4uhV6.jpg',
'https://img.nickpic.host/q4uCpp.jpg',
'https://img.nickpic.host/q4uQAY.jpg',
'https://img.nickpic.host/q4uU7A.jpg',
'https://img.nickpic.host/q4uXdG.jpg',
'https://img.nickpic.host/q4un5z.jpg',
'https://img.nickpic.host/q4u1s1.jpg',
'https://img.nickpic.host/q4utRc.jpg',
'https://img.nickpic.host/q4uMkW.jpg',
'https://img.nickpic.host/q4u4Uj.jpg',
'https://img.nickpic.host/q4uzpn.jpg',
'https://img.nickpic.host/q4uDVJ.jpg',
'https://img.nickpic.host/q4u7Es.jpg',
'https://img.nickpic.host/q4u872.jpg',
'https://img.nickpic.host/q4uKdQ.jpg',
'https://img.nickpic.host/q4uNRN.jpg',
'https://img.nickpic.host/q4uHSx.jpg',
'https://img.nickpic.host/q4u03m.jpg',
'https://img.nickpic.host/q4uVJO.jpg',
'https://img.nickpic.host/q4u2U8.jpg',
'https://img.nickpic.host/q4u9fq.jpg',
'https://img.nickpic.host/q4ukpd.jpg',
'https://img.nickpic.host/q4uJED.jpg',
'https://img.nickpic.host/q4uL85.jpg',
'https://img.nickpic.host/q4uPdP.jpg',
'https://img.nickpic.host/q4uWSM.jpg',
'https://img.nickpic.host/q4uZ1F.jpg',
'https://img.nickpic.host/q4udJe.jpg',
'https://img.nickpic.host/q4AG3X.jpg',
'https://img.nickpic.host/q4AIXb.jpg',
'https://img.nickpic.host/q4Amff.jpg',
'https://img.nickpic.host/q4Apv6.jpg',
'https://img.nickpic.host/q4AvOp.jpg',
'https://img.nickpic.host/q4Ax8Y.jpg',
'https://img.nickpic.host/q4AByA.jpg',
'https://img.nickpic.host/q4ArcG.jpg',
'https://img.nickpic.host/q4As1z.jpg',
'https://img.nickpic.host/q4A3Lc.jpg',
'https://img.nickpic.host/q4Aa3W.jpg',
'https://img.nickpic.host/q4AjX1.jpg',
'https://img.nickpic.host/q4Al0j.jpg',
'https://img.nickpic.host/q4ASvJ.jpg',
'https://img.nickpic.host/q4AcOn.jpg',
'https://img.nickpic.host/q4AgKs.jpg',
'https://img.nickpic.host/q4Aqy2.jpg',
'https://img.nickpic.host/q4AE4x.jpg',
'https://img.nickpic.host/q4AAcQ.jpg',
'https://img.nickpic.host/q4AOLN.jpg',
'https://img.nickpic.host/q4A6FO.jpg',
'https://img.nickpic.host/q4ACim.jpg',
'https://img.nickpic.host/q4AQ08.jpg',
'https://img.nickpic.host/q4AXxq.jpg',
'https://img.nickpic.host/q4AiOd.jpg',
'https://img.nickpic.host/q4AnKD.jpg',
'https://img.nickpic.host/q4AMG5.jpg']
let ruto = naru[Math.floor(Math.random() * naru.length)]
naruto = await getBuffer(ruto)
const nadecir =['Aquí tienes 💕🦈','¿Linda foto no?','Pedido entregado 🕊','¿Qué tal está?','¿Te gusta?','Tengo muchas más 😽']
const nafrase = nadecir[Math.floor(Math.random() * nadecir.length)]
let buttons = [
                    {buttonId: `naruto`, buttonText: {displayText: 'Siguiente'}, type: 1}
                ]
                let buttonMessage = {
                    image: (naruto),
                    caption: (nafrase),
                    buttons: buttons,
                    headerType: 4
                }
                GojoMdNx.sendMessage(m.chat, buttonMessage)
            }
break

case 'pokemon': {
const pokemss = ['https://img.nickpic.host/qDInq5.jpg',
'https://img.nickpic.host/qDIUYd.jpg',
'https://img.nickpic.host/qDIiID.jpg',
'https://img.nickpic.host/qDItDP.jpg',
'https://img.nickpic.host/qDIQ6q.jpg',
'https://img.nickpic.host/qDICB8.jpg',
'https://img.nickpic.host/qDIh9m.jpg',
'https://img.nickpic.host/qDIEaN.jpg',
'https://img.nickpic.host/qDIuTx.jpg',
'https://img.nickpic.host/qDIOnO.jpg',
'https://img.nickpic.host/qDI4ne.jpg',
'https://img.nickpic.host/qDI1jF.jpg',
'https://img.nickpic.host/qDIMTM.jpg',
'https://img.nickpic.host/qDID9X.jpg',
'https://img.nickpic.host/qDIzbb.jpg',
'https://img.nickpic.host/qDI76f.jpg',
'https://img.nickpic.host/qDI8H6.jpg',
'https://img.nickpic.host/qDIYmp.jpg',
'https://img.nickpic.host/qDIHqY.jpg',
'https://img.nickpic.host/qDINwA.jpg',
'https://img.nickpic.host/qDIVWG.jpg',
'https://img.nickpic.host/qDI0jz.jpg',
'https://img.nickpic.host/qDI2tc.jpg',
'https://img.nickpic.host/qDI99W.jpg',
'https://img.nickpic.host/qDIkb1.jpg',
'https://img.nickpic.host/qDIJCj.jpg',
'https://img.nickpic.host/qDILHJ.jpg',
'https://img.nickpic.host/qDITmn.jpg',
'https://img.nickpic.host/qDIZw2.jpg',
'https://img.nickpic.host/qDIWus.jpg',
'https://img.nickpic.host/qDIdWQ.jpg',
'https://img.nickpic.host/qDmGlx.jpg',
'https://img.nickpic.host/qDmItN.jpg',
'https://img.nickpic.host/qDmmeO.jpg',
'https://img.nickpic.host/qDmprm.jpg',
'https://img.nickpic.host/qDmxNq.jpg',
'https://img.nickpic.host/qDmvC8.jpg',
'https://img.nickpic.host/qDmbmd.jpg',
'https://img.nickpic.host/qDmruD.jpg',
'https://img.nickpic.host/qDmsz5.jpg',
'https://img.nickpic.host/qDm3WP.jpg',
'https://img.nickpic.host/qDmalM.jpg',
'https://img.nickpic.host/qDmlee.jpg',
'https://img.nickpic.host/qDmjMF.jpg',
'https://img.nickpic.host/qDmSrX.jpg',
'https://img.nickpic.host/qDmcQb.jpg',
'https://img.nickpic.host/qDmuo6.jpg',
'https://img.nickpic.host/qDmgNf.jpg',
'https://img.nickpic.host/qDmEzY.jpg',
'https://img.nickpic.host/qDmAAp.jpg',
'https://img.nickpic.host/qDmOZA.jpg',
'https://img.nickpic.host/qDm65G.jpg',
'https://img.nickpic.host/qDmCMz.jpg',
'https://img.nickpic.host/qDmQkc.jpg',
'https://img.nickpic.host/qDmXrW.jpg',
'https://img.nickpic.host/qDmnVj.jpg',
'https://img.nickpic.host/qDmiQ1.jpg',
'https://img.nickpic.host/qDmRAn.jpg',
'https://img.nickpic.host/qDmMoJ.jpg',
'https://img.nickpic.host/qDm17s.jpg',
'https://img.nickpic.host/qDm4Z2.jpg',
'https://img.nickpic.host/qDmw5Q.jpg',
'https://img.nickpic.host/qDmzRx.jpg',
'https://img.nickpic.host/qDm7kN.jpg',
'https://img.nickpic.host/qDmKsO.jpg',
'https://img.nickpic.host/qDmYUm.jpg',
'https://img.nickpic.host/qDmHV8.jpg',
'https://img.nickpic.host/qDmfAd.jpg',
'https://img.nickpic.host/qDmVpq.jpg',
'https://img.nickpic.host/qDm07D.jpg',
'https://img.nickpic.host/qDmkRM.jpg',
'https://img.nickpic.host/qDm2d5.jpg',
'https://img.nickpic.host/qDme5P.jpg',
'https://img.nickpic.host/qDmPse.jpg',
'https://img.nickpic.host/qDmJJF.jpg',
'https://img.nickpic.host/qDmTUX.jpg',
'https://img.nickpic.host/qDmWfb.jpg',
'https://img.nickpic.host/qDmdpf.jpg',
'https://img.nickpic.host/qDoG8p.jpg',
'https://img.nickpic.host/qDmyE6.jpg',
'https://img.nickpic.host/qDoIdY.jpg',
'https://img.nickpic.host/qDooSA.jpg',
'https://img.nickpic.host/qDop1G.jpg',
'https://img.nickpic.host/qDovJz.jpg',
'https://img.nickpic.host/qDoB3c.jpg',
'https://img.nickpic.host/qDobUW.jpg',
'https://img.nickpic.host/qDo3vj.jpg',
'https://img.nickpic.host/qDoFEJ.jpg',
'https://img.nickpic.host/qDorf1.jpg',
'https://img.nickpic.host/qDoa8n.jpg',
'https://img.nickpic.host/qDojys.jpg',
'https://img.nickpic.host/qDoS1Q.jpg',
'https://img.nickpic.host/qDo5S2.jpg',
'https://img.nickpic.host/qDocLx.jpg',
'https://img.nickpic.host/qDoq3N.jpg',
'https://img.nickpic.host/qDoA0m.jpg',
'https://img.nickpic.host/qDouXO.jpg',
'https://img.nickpic.host/qDoOv8.jpg',
'https://img.nickpic.host/qDohOq.jpg',
'https://img.nickpic.host/qDoX1P.jpg',
'https://img.nickpic.host/qDoUc5.jpg',
'https://img.nickpic.host/qDo68d.jpg',
'https://img.nickpic.host/qDoCyD.jpg',
'https://img.nickpic.host/qDoiLM.jpg',
'https://img.nickpic.host/qDotFF.jpg',
'https://img.nickpic.host/qDoMXe.jpg',
'https://img.nickpic.host/qDoR0X.jpg',
'https://img.nickpic.host/qDo4xb.jpg',
'https://img.nickpic.host/qDoDOf.jpg',
'https://img.nickpic.host/qDowK6.jpg',
'https://img.nickpic.host/qDo7Gp.jpg',
'https://img.nickpic.host/qDo8cY.jpg',
'https://img.nickpic.host/qDoK4A.jpg',
'https://img.nickpic.host/qDoYPG.jpg',
'https://img.nickpic.host/qDoVic.jpg',
'https://img.nickpic.host/qDoNFz.jpg',
'https://img.nickpic.host/qDo2x1.jpg',
'https://img.nickpic.host/qDof0W.jpg',
'https://img.nickpic.host/qDo9hj.jpg',
'https://img.nickpic.host/qDoeKJ.jpg',
'https://img.nickpic.host/qDoLgs.jpg',
'https://img.nickpic.host/qDoJGn.jpg',
'https://img.nickpic.host/qDoP42.jpg',
'https://img.nickpic.host/qDoZax.jpg',
'https://img.nickpic.host/qDoTPQ.jpg',
'https://img.nickpic.host/qDoy2O.jpg',
'https://img.nickpic.host/qDodiN.jpg',
'https://img.nickpic.host/qDpoYq.jpg',
'https://img.nickpic.host/qDpIBm.jpg',
'https://img.nickpic.host/qDpmh8.jpg',
'https://img.nickpic.host/qDpxgD.jpg',
'https://img.nickpic.host/qDpvGd.jpg',
'https://img.nickpic.host/qDpBD5.jpg',
'https://img.nickpic.host/qDpbPP.jpg',
'https://img.nickpic.host/qDpsaM.jpg',
'https://img.nickpic.host/qDp3nF.jpg',
'https://img.nickpic.host/qDpF2e.jpg',
'https://img.nickpic.host/qDpjBX.jpg',
'https://img.nickpic.host/qDpl6b.jpg',
'https://img.nickpic.host/qDp5Yf.jpg',
'https://img.nickpic.host/qDpcI6.jpg',
'https://img.nickpic.host/qDpgqp.jpg',
'https://img.nickpic.host/qDpqDY.jpg',
'https://img.nickpic.host/qDpEjG.jpg',
'https://img.nickpic.host/qDpuTA.jpg',
'https://img.nickpic.host/qDph9c.jpg',
'https://img.nickpic.host/qDpOnz.jpg',
'https://img.nickpic.host/qDpCBW.jpg',
'https://img.nickpic.host/qDpQ61.jpg',
'https://img.nickpic.host/qDpUHj.jpg',
'https://img.nickpic.host/qDpnqn.jpg',
'https://img.nickpic.host/qDpiIJ.jpg',
'https://img.nickpic.host/qDptws.jpg',
'https://img.nickpic.host/qDp1jQ.jpg',
'https://img.nickpic.host/qDpMT2.jpg',
'https://img.nickpic.host/qDp4tx.jpg',
'https://img.nickpic.host/qDpD9N.jpg',
'https://img.nickpic.host/qDp7Cm.jpg',
'https://img.nickpic.host/qDpzbO.jpg',
'https://img.nickpic.host/qDp8H8.jpg',
'https://img.nickpic.host/qDpNwD.jpg',
'https://img.nickpic.host/qDpYmq.jpg',
'https://img.nickpic.host/qDpHqd.jpg',
'https://img.nickpic.host/qDpVW5.jpg',
'https://img.nickpic.host/qDp2tM.jpg',
'https://img.nickpic.host/qDp0jP.jpg',
'https://img.nickpic.host/qDp9eF.jpg',
'https://img.nickpic.host/qDpkbe.jpg',
'https://img.nickpic.host/qDpJCX.jpg',
'https://img.nickpic.host/qDpLNb.jpg',
'https://img.nickpic.host/qDpTmf.jpg',
'https://img.nickpic.host/qDpWu6.jpg',
'https://img.nickpic.host/qDpZzp.jpg',
'https://img.nickpic.host/qDvGlA.jpg',
'https://img.nickpic.host/qDpdWY.jpg',
'https://img.nickpic.host/qDvIMG.jpg',
'https://img.nickpic.host/qDvmez.jpg',
'https://img.nickpic.host/qDvprc.jpg',
'https://img.nickpic.host/qDvvCW.jpg',
'https://img.nickpic.host/qDvboj.jpg',
'https://img.nickpic.host/qDvruJ.jpg',
'https://img.nickpic.host/qDvxN1.jpg',
'https://img.nickpic.host/qDvszn.jpg',
'https://img.nickpic.host/qDv3Zs.jpg',
'https://img.nickpic.host/qDval2.jpg',
'https://img.nickpic.host/qDvjMQ.jpg',
'https://img.nickpic.host/qDvlkx.jpg',
'https://img.nickpic.host/qDvSrN.jpg',
'https://img.nickpic.host/qDvcQO.jpg',
'https://img.nickpic.host/qDvuo8.jpg',
'https://img.nickpic.host/qDvgVm.jpg',
'https://img.nickpic.host/qDvAAq.jpg',
'https://img.nickpic.host/qDvEzd.jpg',
'https://img.nickpic.host/qDvCMP.jpg',
'https://img.nickpic.host/qDv655.jpg',
'https://img.nickpic.host/qDvOZD.jpg',
'https://img.nickpic.host/qDvQkM.jpg',
'https://img.nickpic.host/qDvXsF.jpg',
'https://img.nickpic.host/qDviQe.jpg',
'https://img.nickpic.host/qDvnVX.jpg',
'https://img.nickpic.host/qDvMpb.jpg',
'https://img.nickpic.host/qDvRAf.jpg',
'https://img.nickpic.host/qDv176.jpg',
'https://img.nickpic.host/qDv4dp.jpg',
'https://img.nickpic.host/qDvzRA.jpg',
'https://img.nickpic.host/qDvw5Y.jpg',
'https://img.nickpic.host/qDv7JG.jpg',
'https://img.nickpic.host/qDvKsz.jpg',
'https://img.nickpic.host/qDvYUc.jpg',
'https://img.nickpic.host/qDvHVW.jpg',
'https://img.nickpic.host/qDveSs.jpg',
'https://img.nickpic.host/qDvVp1.jpg',
'https://img.nickpic.host/qDvfEj.jpg',
'https://img.nickpic.host/qDv07J.jpg',
'https://img.nickpic.host/qDv2dn.jpg',
'https://img.nickpic.host/qDvkR2.jpg',
'https://img.nickpic.host/qDvJJQ.jpg',
'https://img.nickpic.host/qDvP3x.jpg',
'https://img.nickpic.host/qDvTUN.jpg',
'https://img.nickpic.host/qDvWfO.jpg',
'https://img.nickpic.host/qDxG8q.jpg',
'https://img.nickpic.host/qDvdvm.jpg',
'https://img.nickpic.host/qDvyE8.jpg',
'https://img.nickpic.host/qDxIdd.jpg',
'https://img.nickpic.host/qDxoSD.jpg',
'https://img.nickpic.host/qDxp15.jpg',
'https://img.nickpic.host/qDxB3M.jpg',
'https://img.nickpic.host/qDxvJP.jpg',
'https://img.nickpic.host/qDxa8f.jpg',
'https://img.nickpic.host/qDxbXF.jpg',
'https://img.nickpic.host/qDxrfe.jpg',
'https://img.nickpic.host/qDxFOb.jpg',
'https://img.nickpic.host/qDx3vX.jpg',
'https://img.nickpic.host/qDxjy6.jpg',
'https://img.nickpic.host/qDx5cp.jpg',
'https://img.nickpic.host/qDxS1Y.jpg',
'https://img.nickpic.host/qDxcLA.jpg',
'https://img.nickpic.host/qDxuXz.jpg',
'https://img.nickpic.host/qDxA0c.jpg',
'https://img.nickpic.host/qDxqFG.jpg',
'https://img.nickpic.host/qDxCyJ.jpg',
'https://img.nickpic.host/qDxOvW.jpg',
'https://img.nickpic.host/qDxhO1.jpg',
'https://img.nickpic.host/qDx6Kj.jpg',
'https://img.nickpic.host/qDxUcn.jpg',
'https://img.nickpic.host/qDxR0N.jpg',
'https://img.nickpic.host/qDxX4s.jpg',
'https://img.nickpic.host/qDxtFQ.jpg',
'https://img.nickpic.host/qDxiL2.jpg',
'https://img.nickpic.host/qDxMix.jpg',
'https://img.nickpic.host/qDx4xO.jpg',
'https://img.nickpic.host/qDxDhm.jpg',
'https://img.nickpic.host/qDxwK8.jpg',
'https://img.nickpic.host/qDx7Gq.jpg',
'https://img.nickpic.host/qDx8cd.jpg',
'https://img.nickpic.host/qDxNFP.jpg',
'https://img.nickpic.host/qDxK4D.jpg',
'https://img.nickpic.host/qDxYP5.jpg',
'https://img.nickpic.host/qDxViM.jpg',
'https://img.nickpic.host/qDxf2F.jpg',
'https://img.nickpic.host/qDx2xe.jpg',
'https://img.nickpic.host/qDx9hX.jpg',
'https://img.nickpic.host/qDxeYb.jpg',
'https://img.nickpic.host/qDxTPY.jpg',
'https://img.nickpic.host/qDxLg6.jpg',
'https://img.nickpic.host/qDxJGf.jpg',
'https://img.nickpic.host/qDxPDp.jpg',
'https://img.nickpic.host/qDxZaA.jpg',
'https://img.nickpic.host/qDxdnG.jpg',
'https://img.nickpic.host/qDxy2z.jpg',
'https://img.nickpic.host/qDBIBc.jpg',
'https://img.nickpic.host/qDBmhW.jpg',
'https://img.nickpic.host/qDBxgJ.jpg',
'https://img.nickpic.host/qDBoY1.jpg',
'https://img.nickpic.host/qDBvIj.jpg',
'https://img.nickpic.host/qDBbTs.jpg',
'https://img.nickpic.host/qDBBDn.jpg',
'https://img.nickpic.host/qDBsa2.jpg',
'https://img.nickpic.host/qDB3nQ.jpg',
'https://img.nickpic.host/qDBF9x.jpg',
'https://img.nickpic.host/qDBcI8.jpg',
'https://img.nickpic.host/qDBjBN.jpg',
'https://img.nickpic.host/qDBl6O.jpg',
'https://img.nickpic.host/qDB5Hm.jpg',
'https://img.nickpic.host/qDBqDd.jpg',
'https://img.nickpic.host/qDBgqq.jpg',
'https://img.nickpic.host/qDBuTD.jpg',
'https://img.nickpic.host/qDBEj5.jpg',
'https://img.nickpic.host/qDBOnP.jpg',
'https://img.nickpic.host/qDBnqf.jpg',
'https://img.nickpic.host/qDBh9M.jpg',
'https://img.nickpic.host/qDBQ6e.jpg',
'https://img.nickpic.host/qDBCbF.jpg',
'https://img.nickpic.host/qDBUHX.jpg',
'https://img.nickpic.host/qDBimb.jpg',
'https://img.nickpic.host/qDBtw6.jpg',
'https://img.nickpic.host/qDBMWp.jpg',
'https://img.nickpic.host/qDB1jY.jpg',
'https://img.nickpic.host/qDB4tA.jpg',
'https://img.nickpic.host/qDBDeG.jpg',
'https://img.nickpic.host/qDB7Cc.jpg',
'https://img.nickpic.host/qDBzbz.jpg',
'https://img.nickpic.host/qDBYm1.jpg',
'https://img.nickpic.host/qDB8HW.jpg',
'https://img.nickpic.host/qDBHuj.jpg',
'https://img.nickpic.host/qDBNwJ.jpg',
'https://img.nickpic.host/qDBVWn.jpg',
'https://img.nickpic.host/qDBJCN.jpg',
'https://img.nickpic.host/qDB0ls.jpg',
'https://img.nickpic.host/qDB9eQ.jpg',
'https://img.nickpic.host/qDB2t2.jpg',
'https://img.nickpic.host/qDBkrx.jpg',
'https://img.nickpic.host/qDBLNO.jpg',
'https://img.nickpic.host/qDBTom.jpg',
'https://img.nickpic.host/qDBWu8.jpg',
'https://img.nickpic.host/qDBdWd.jpg',
'https://img.nickpic.host/qDBZzq.jpg',
'https://img.nickpic.host/qDbprM.jpg',
'https://img.nickpic.host/qDbGlD.jpg',
'https://img.nickpic.host/qDbIM5.jpg',
'https://img.nickpic.host/qDbmeP.jpg',
'https://img.nickpic.host/qDbvQF.jpg',
'https://img.nickpic.host/qDbxNe.jpg',
'https://img.nickpic.host/qDbboX.jpg',
'https://img.nickpic.host/qDbrAb.jpg',
'https://img.nickpic.host/qDbszf.jpg',
'https://img.nickpic.host/qDblkA.jpg',
'https://img.nickpic.host/qDbjMY.jpg',
'https://img.nickpic.host/qDba5p.jpg',
'https://img.nickpic.host/qDb3Z6.jpg',
'https://img.nickpic.host/qDbSsG.jpg',
'https://img.nickpic.host/qDbcQz.jpg',
'https://img.nickpic.host/qDbgVc.jpg',
'https://img.nickpic.host/qDbuoW.jpg',
'https://img.nickpic.host/qDbAA1.jpg',
'https://img.nickpic.host/qDb65n.jpg',
'https://img.nickpic.host/qDbE7j.jpg',
'https://img.nickpic.host/qDbOZJ.jpg',
'https://img.nickpic.host/qDbCRs.jpg',
'https://img.nickpic.host/qDbXsQ.jpg',
'https://img.nickpic.host/qDbQk2.jpg',
'https://img.nickpic.host/qDbnVN.jpg',
'https://img.nickpic.host/qDbiUx.jpg',
'https://img.nickpic.host/qDb178.jpg',
'https://img.nickpic.host/qDbMpO.jpg',
'https://img.nickpic.host/qDbREm.jpg',
'https://img.nickpic.host/qDb4dq.jpg',
'https://img.nickpic.host/qDbw5d.jpg',
'https://img.nickpic.host/qDb7J5.jpg',
'https://img.nickpic.host/qDbzRD.jpg',
'https://img.nickpic.host/qDbKsP.jpg',
'https://img.nickpic.host/qDbHfF.jpg',
'https://img.nickpic.host/qDbYUM.jpg',
'https://img.nickpic.host/qDbVpe.jpg',
'https://img.nickpic.host/qDbfEX.jpg',
'https://img.nickpic.host/qDb2df.jpg',
'https://img.nickpic.host/qDb08b.jpg',
'https://img.nickpic.host/qDbeS6.jpg',
'https://img.nickpic.host/qDbP3A.jpg',
'https://img.nickpic.host/qDbk1p.jpg',
'https://img.nickpic.host/qDbdvc.jpg',
'https://img.nickpic.host/qDbJJY.jpg',
'https://img.nickpic.host/qDbTXG.jpg',
'https://img.nickpic.host/qDbWfz.jpg',
'https://img.nickpic.host/qDbyEW.jpg',
'https://img.nickpic.host/qDrG81.jpg',
'https://img.nickpic.host/qDrp1n.jpg',
'https://img.nickpic.host/qDrIyj.jpg',
'https://img.nickpic.host/qDroSJ.jpg',
'https://img.nickpic.host/qDrvLs.jpg',
'https://img.nickpic.host/qDrbXQ.jpg',
'https://img.nickpic.host/qDrB32.jpg',
'https://img.nickpic.host/qDrr0x.jpg',
'https://img.nickpic.host/qDr3vN.jpg',
'https://img.nickpic.host/qDr5cq.jpg',
'https://img.nickpic.host/qDrjy8.jpg',
'https://img.nickpic.host/qDrFOO.jpg',
'https://img.nickpic.host/qDrS1d.jpg',
'https://img.nickpic.host/qDraKm.jpg',
'https://img.nickpic.host/qDrcLD.jpg',
'https://img.nickpic.host/qDrqF5.jpg',
'https://img.nickpic.host/qDruXP.jpg',
'https://img.nickpic.host/qDrOxF.jpg',
'https://img.nickpic.host/qDrQGb.jpg',
'https://img.nickpic.host/qDr6KX.jpg',
'https://img.nickpic.host/qDrA0M.jpg',
'https://img.nickpic.host/qDrhOe.jpg',
'https://img.nickpic.host/qDrUcf.jpg',
'https://img.nickpic.host/qDrX46.jpg',
'https://img.nickpic.host/qDrtFY.jpg',
'https://img.nickpic.host/qDriPp.jpg',
'https://img.nickpic.host/qDrMiA.jpg',
'https://img.nickpic.host/qDrDhc.jpg',
'https://img.nickpic.host/qDrR2G.jpg',
'https://img.nickpic.host/qDr4xz.jpg',
'https://img.nickpic.host/qDrwKW.jpg',
'https://img.nickpic.host/qDr8gj.jpg',
'https://img.nickpic.host/qDrK4J.jpg',
'https://img.nickpic.host/qDr7G1.jpg',
'https://img.nickpic.host/qDrYPn.jpg',
'https://img.nickpic.host/qDrVi2.jpg',
'https://img.nickpic.host/qDrNas.jpg',
'https://img.nickpic.host/qDrf2Q.jpg',
'https://img.nickpic.host/qDrJIm.jpg',
'https://img.nickpic.host/qDr2Bx.jpg',
'https://img.nickpic.host/qDr9hN.jpg',
'https://img.nickpic.host/qDreYO.jpg',
'https://img.nickpic.host/qDrZaD.jpg',
'https://img.nickpic.host/qDrLg8.jpg',
'https://img.nickpic.host/qDrPDq.jpg',
'https://img.nickpic.host/qDrTPd.jpg',
'https://img.nickpic.host/qDrdn5.jpg',
'https://img.nickpic.host/qDsm6F.jpg',
'https://img.nickpic.host/qDry2P.jpg',
'https://img.nickpic.host/qDsIBM.jpg',
'https://img.nickpic.host/qDsoYe.jpg',
'https://img.nickpic.host/qDsxqb.jpg',
'https://img.nickpic.host/qDsvIX.jpg',
'https://img.nickpic.host/qDsbT6.jpg',
'https://img.nickpic.host/qDsBDf.jpg',
'https://img.nickpic.host/qDs3nY.jpg',
'https://img.nickpic.host/qDssjp.jpg',
'https://img.nickpic.host/qDsF9A.jpg',
'https://img.nickpic.host/qDs5Hc.jpg',
'https://img.nickpic.host/qDsjbG.jpg',
'https://img.nickpic.host/qDsl6z.jpg',
'https://img.nickpic.host/qDscIW.jpg',
'https://img.nickpic.host/qDsuTJ.jpg',
'https://img.nickpic.host/qDsgq1.jpg',
'https://img.nickpic.host/qDsqwj.jpg',
'https://img.nickpic.host/qDsEjn.jpg',
'https://img.nickpic.host/qDsQCx.jpg',
'https://img.nickpic.host/qDsOts.jpg',
'https://img.nickpic.host/qDsh92.jpg',
'https://img.nickpic.host/qDsCbQ.jpg',
'https://img.nickpic.host/qDsimO.jpg',
'https://img.nickpic.host/qDsUHN.jpg',
'https://img.nickpic.host/qDsnum.jpg',
'https://img.nickpic.host/qDstw8.jpg',
'https://img.nickpic.host/qDsMWq.jpg',
'https://img.nickpic.host/qDs4tD.jpg',
'https://img.nickpic.host/qDs1jd.jpg',
'https://img.nickpic.host/qDs7CM.jpg',
'https://img.nickpic.host/qDsDe5.jpg',
'https://img.nickpic.host/qDszbP.jpg',
'https://img.nickpic.host/qDs8NF.jpg',
'https://img.nickpic.host/qDsYme.jpg',
'https://img.nickpic.host/qDsVWf.jpg',
'https://img.nickpic.host/qDsHuX.jpg',
'https://img.nickpic.host/qDsNzb.jpg',
'https://img.nickpic.host/qDs2Mp.jpg',
'https://img.nickpic.host/qDs9eY.jpg',
'https://img.nickpic.host/qDs0l6.jpg',
'https://img.nickpic.host/qDskrA.jpg',
'https://img.nickpic.host/qDsLNz.jpg',
'https://img.nickpic.host/qDsJQG.jpg',
'https://img.nickpic.host/qD3GlJ.jpg',
'https://img.nickpic.host/qDsToc.jpg',
'https://img.nickpic.host/qDsWuW.jpg',
'https://img.nickpic.host/qDsZz1.jpg',
'https://img.nickpic.host/qDsdZj.jpg',
'https://img.nickpic.host/qD3pr2.jpg',
'https://img.nickpic.host/qD3IMn.jpg',
'https://img.nickpic.host/qD3mks.jpg',
'https://img.nickpic.host/qD3vQQ.jpg',
'https://img.nickpic.host/qD3xVx.jpg',
'https://img.nickpic.host/qD3rAO.jpg',
'https://img.nickpic.host/qD3boN.jpg',
'https://img.nickpic.host/qD3s7m.jpg',
'https://img.nickpic.host/qD3jMd.jpg',
'https://img.nickpic.host/qD33Z8.jpg',
'https://img.nickpic.host/qD3a5q.jpg',
'https://img.nickpic.host/qD3lkD.jpg',
'https://img.nickpic.host/qD3upF.jpg',
'https://img.nickpic.host/qD3Ss5.jpg',
'https://img.nickpic.host/qD3cQP.jpg',
'https://img.nickpic.host/qD3gVM.jpg',
'https://img.nickpic.host/qD3E7X.jpg',
'https://img.nickpic.host/qD3AAe.jpg',
'https://img.nickpic.host/qD3Odb.jpg',
'https://img.nickpic.host/qD365f.jpg',
'https://img.nickpic.host/qD3CR6.jpg',
'https://img.nickpic.host/qD3XsY.jpg',
'https://img.nickpic.host/qD3QJp.jpg',
'https://img.nickpic.host/qD3nfG.jpg',
'https://img.nickpic.host/qD3iUA.jpg',
'https://img.nickpic.host/qD3Mpz.jpg',
'https://img.nickpic.host/qD3REc.jpg',
'https://img.nickpic.host/qD317W.jpg',
'https://img.nickpic.host/qD3wSj.jpg',
'https://img.nickpic.host/qD34d1.jpg',
'https://img.nickpic.host/qD3K3s.jpg',
'https://img.nickpic.host/qD3zRJ.jpg',
'https://img.nickpic.host/qD37Jn.jpg',
'https://img.nickpic.host/qD3YU2.jpg',
'https://img.nickpic.host/qD3fEN.jpg',
'https://img.nickpic.host/qD3HfQ.jpg',
'https://img.nickpic.host/qD3Vvx.jpg',
'https://img.nickpic.host/qD308O.jpg',
'https://img.nickpic.host/qD3eS8.jpg',
'https://img.nickpic.host/qD32ym.jpg',
'https://img.nickpic.host/qD3k1q.jpg',
'https://img.nickpic.host/qD3JJd.jpg',
'https://img.nickpic.host/qD3P3D.jpg',
'https://img.nickpic.host/qD3WfP.jpg',
'https://img.nickpic.host/qD3TX5.jpg',
'https://img.nickpic.host/qDFG8e.jpg',
'https://img.nickpic.host/qD3dvM.jpg',
'https://img.nickpic.host/qD3yOF.jpg',
'https://img.nickpic.host/qDFIyX.jpg',
'https://img.nickpic.host/qDFocb.jpg',
'https://img.nickpic.host/qDFBFp.jpg',
'https://img.nickpic.host/qDFp1f.jpg',
'https://img.nickpic.host/qDFvL6.jpg',
'https://img.nickpic.host/qDFr0A.jpg',
'https://img.nickpic.host/qDFbXY.jpg',
'https://img.nickpic.host/qDF3xG.jpg',
'https://img.nickpic.host/qDFFOz.jpg',
'https://img.nickpic.host/qDFaKc.jpg',
'https://img.nickpic.host/qDF5c1.jpg',
'https://img.nickpic.host/qDFjyW.jpg',
'https://img.nickpic.host/qDFuis.jpg',
'https://img.nickpic.host/qDFS4j.jpg',
'https://img.nickpic.host/qDFcLJ.jpg',
'https://img.nickpic.host/qDFA02.jpg',
'https://img.nickpic.host/qDFOxQ.jpg',
'https://img.nickpic.host/qDFQGO.jpg',
'https://img.nickpic.host/qDFhhx.jpg',
'https://img.nickpic.host/qDF6KN.jpg',
'https://img.nickpic.host/qDFiPq.jpg',
'https://img.nickpic.host/qDFUgm.jpg',
'https://img.nickpic.host/qDFX48.jpg',
'https://img.nickpic.host/qDFtFd.jpg',
'https://img.nickpic.host/qDFMiD.jpg',
'https://img.nickpic.host/qDF4xP.jpg',
'https://img.nickpic.host/qDFR25.jpg',
'https://img.nickpic.host/qDFDhM.jpg',
'https://img.nickpic.host/qDF8gX.jpg',
'https://img.nickpic.host/qDFwYF.jpg',
'https://img.nickpic.host/qDF7Ge.jpg',
'https://img.nickpic.host/qDFKDb.jpg',
'https://img.nickpic.host/qDFVnp.jpg',
'https://img.nickpic.host/qDFYPf.jpg',
'https://img.nickpic.host/qDFNa6.jpg',
'https://img.nickpic.host/qDFf2Y.jpg',
'https://img.nickpic.host/qDF96G.jpg',
'https://img.nickpic.host/qDF2BA.jpg',
'https://img.nickpic.host/qDFeYz.jpg',
'https://img.nickpic.host/qDFJIc.jpg',
'https://img.nickpic.host/qDFPD1.jpg',
'https://img.nickpic.host/qDFLgW.jpg',
'https://img.nickpic.host/qDFTTj.jpg',
'https://img.nickpic.host/qDFZaJ.jpg',
'https://img.nickpic.host/qDaIB2.jpg',
'https://img.nickpic.host/qDFy9s.jpg',
'https://img.nickpic.host/qDFdnn.jpg',
'https://img.nickpic.host/qDam6Q.jpg',
'https://img.nickpic.host/qDaoHx.jpg',
'https://img.nickpic.host/qDaxqO.jpg',
'https://img.nickpic.host/qDavIN.jpg',
'https://img.nickpic.host/qDaBwm.jpg',
'https://img.nickpic.host/qDasjq.jpg',
'https://img.nickpic.host/qDa3nd.jpg',
'https://img.nickpic.host/qDabT8.jpg',
'https://img.nickpic.host/qDaF9D.jpg',
'https://img.nickpic.host/qDajb5.jpg',
'https://img.nickpic.host/qDal6P.jpg',
'https://img.nickpic.host/qDa5HM.jpg',
'https://img.nickpic.host/qDacmF.jpg',
'https://img.nickpic.host/qDagqe.jpg',
'https://img.nickpic.host/qDaqwX.jpg',
'https://img.nickpic.host/qDauWb.jpg',
'https://img.nickpic.host/qDaEjf.jpg',
'https://img.nickpic.host/qDaOt6.jpg',
'https://img.nickpic.host/qDahep.jpg',
'https://img.nickpic.host/qDaCbY.jpg',
'https://img.nickpic.host/qDaUNG.jpg',
'https://img.nickpic.host/qDaQCA.jpg',
'https://img.nickpic.host/qDaimz.jpg',
'https://img.nickpic.host/qDanuc.jpg',
'https://img.nickpic.host/qDatwW.jpg',
'https://img.nickpic.host/qDaMW1.jpg',
'https://img.nickpic.host/qDa1lj.jpg',
'https://img.nickpic.host/qDa4tJ.jpg',
'https://img.nickpic.host/qDazrs.jpg',
'https://img.nickpic.host/qDaDen.jpg',
'https://img.nickpic.host/qDa7C2.jpg',
'https://img.nickpic.host/qDaYox.jpg',
'https://img.nickpic.host/qDa8NQ.jpg',
'https://img.nickpic.host/qDaHuN.jpg',
'https://img.nickpic.host/qDaNzO.jpg',
'https://img.nickpic.host/qDaVZm.jpg',
'https://img.nickpic.host/qDa2Mq.jpg',
'https://img.nickpic.host/qDa0l8.jpg',
'https://img.nickpic.host/qDa9ed.jpg',
'https://img.nickpic.host/qDakrD.jpg',
'https://img.nickpic.host/qDaJQ5.jpg',
'https://img.nickpic.host/qDaLNP.jpg',
'https://img.nickpic.host/qDaToM.jpg',
'https://img.nickpic.host/qDaWAF.jpg',
'https://img.nickpic.host/qDaZze.jpg',
'https://img.nickpic.host/qDjG5b.jpg',
'https://img.nickpic.host/qDadZX.jpg',
'https://img.nickpic.host/qDjIMf.jpg',
'https://img.nickpic.host/qDjmk6.jpg',
'https://img.nickpic.host/qDjvQY.jpg',
'https://img.nickpic.host/qDjpsp.jpg',
'https://img.nickpic.host/qDjbpG.jpg',
'https://img.nickpic.host/qDjrAz.jpg',
'https://img.nickpic.host/qDjxVA.jpg',
'https://img.nickpic.host/qDjs7c.jpg',
'https://img.nickpic.host/qDj3ZW.jpg',
'https://img.nickpic.host/qDjjRj.jpg',
'https://img.nickpic.host/qDja51.jpg',
'https://img.nickpic.host/qDjlkJ.jpg',
'https://img.nickpic.host/qDjgV2.jpg',
'https://img.nickpic.host/qDjSsn.jpg',
'https://img.nickpic.host/qDjcUs.jpg',
'https://img.nickpic.host/qDjupQ.jpg',
'https://img.nickpic.host/qDjAEx.jpg',
'https://img.nickpic.host/qDjOdO.jpg',
'https://img.nickpic.host/qDjE7N.jpg',
'https://img.nickpic.host/qDj6Sm.jpg',
'https://img.nickpic.host/qDjQJq.jpg',
'https://img.nickpic.host/qDjCR8.jpg',
'https://img.nickpic.host/u6MZaD.jpg',
'https://img.nickpic.host/u6My2P.jpg',
'https://img.nickpic.host/u6Mdn5.jpg',
'https://img.nickpic.host/u6Rm6F.jpg',
'https://img.nickpic.host/u6RIBM.jpg',
'https://img.nickpic.host/u6RoYe.jpg',
'https://img.nickpic.host/u6RvIX.jpg',
'https://img.nickpic.host/u6Rxqb.jpg',
'https://img.nickpic.host/u6RBDf.jpg',
'https://img.nickpic.host/u6RbT6.jpg',
'https://img.nickpic.host/u6Rsjp.jpg',
'https://img.nickpic.host/u6R3nY.jpg',
'https://img.nickpic.host/u6RF9A.jpg',
'https://img.nickpic.host/u6RjbG.jpg',
'https://img.nickpic.host/u6Rl6z.jpg',
'https://img.nickpic.host/u6R5Hc.jpg',
'https://img.nickpic.host/u6RcIW.jpg',
'https://img.nickpic.host/u6Rqwj.jpg',
'https://img.nickpic.host/u6Rgq1.jpg',
'https://img.nickpic.host/u6RuTJ.jpg',
'https://img.nickpic.host/u6REjn.jpg',
'https://img.nickpic.host/u6ROts.jpg',
'https://img.nickpic.host/u6Rh92.jpg',
'https://img.nickpic.host/u6RCbQ.jpg',
'https://img.nickpic.host/u6RQCx.jpg',
'https://img.nickpic.host/u6RUHN.jpg',
'https://img.nickpic.host/u6RimO.jpg',
'https://img.nickpic.host/u6Rnum.jpg',
'https://img.nickpic.host/u6Rtw8.jpg',
'https://img.nickpic.host/u6RMWq.jpg',
'https://img.nickpic.host/u6R4tD.jpg',
'https://img.nickpic.host/u6R1jd.jpg',
'https://img.nickpic.host/u6RDe5.jpg',
'https://img.nickpic.host/u6R7CM.jpg',
'https://img.nickpic.host/u6RzbP.jpg',
'https://img.nickpic.host/u6R8NF.jpg',
'https://img.nickpic.host/u6RYme.jpg',
'https://img.nickpic.host/u6RHuX.jpg',
'https://img.nickpic.host/u6RNzb.jpg',
'https://img.nickpic.host/u6RVWf.jpg',
'https://img.nickpic.host/u6R0l6.jpg',
'https://img.nickpic.host/u6R2Mp.jpg',
'https://img.nickpic.host/u6R9eY.jpg',
'https://img.nickpic.host/u6RkrA.jpg',
'https://img.nickpic.host/u6RLNz.jpg',
'https://img.nickpic.host/u6RJQG.jpg',
'https://img.nickpic.host/u6RWuW.jpg',
'https://img.nickpic.host/u6RToc.jpg',
'https://img.nickpic.host/u6RZz1.jpg',
'https://img.nickpic.host/u6RdZj.jpg',
'https://img.nickpic.host/u61IMn.jpg',
'https://img.nickpic.host/u61GlJ.jpg',
'https://img.nickpic.host/u61mks.jpg',
'https://img.nickpic.host/u61pr2.jpg',
'https://img.nickpic.host/u61vQQ.jpg',
'https://img.nickpic.host/u61xVx.jpg',
'https://img.nickpic.host/u61boN.jpg',
'https://img.nickpic.host/u61rAO.jpg',
'https://img.nickpic.host/u61s7m.jpg',
'https://img.nickpic.host/u613Z8.jpg',
'https://img.nickpic.host/u61a5q.jpg',
'https://img.nickpic.host/u61jMd.jpg',
'https://img.nickpic.host/u61lkD.jpg',
'https://img.nickpic.host/u61Ss5.jpg',
'https://img.nickpic.host/u61cQP.jpg',
'https://img.nickpic.host/u61gVM.jpg',
'https://img.nickpic.host/u61upF.jpg',
'https://img.nickpic.host/u61AAe.jpg',
'https://img.nickpic.host/u61E7X.jpg',
'https://img.nickpic.host/u61Odb.jpg',
'https://img.nickpic.host/u6165f.jpg',
'https://img.nickpic.host/u61CR6.jpg',
'https://img.nickpic.host/u61QJp.jpg',
'https://img.nickpic.host/u61XsY.jpg',
'https://img.nickpic.host/u61iUA.jpg',
'https://img.nickpic.host/u61Mpz.jpg',
'https://img.nickpic.host/u61REc.jpg',
'https://img.nickpic.host/u6117W.jpg',
'https://img.nickpic.host/u614d1.jpg',
'https://img.nickpic.host/u61wSj.jpg',
'https://img.nickpic.host/u61zRJ.jpg',
'https://img.nickpic.host/u61K3s.jpg',
'https://img.nickpic.host/u617Jn.jpg',
'https://img.nickpic.host/u61YU2.jpg',
'https://img.nickpic.host/u61HfQ.jpg',
'https://img.nickpic.host/u61Vvx.jpg',
'https://img.nickpic.host/u61fEN.jpg',
'https://img.nickpic.host/u6108O.jpg',
'https://img.nickpic.host/u612ym.jpg',
'https://img.nickpic.host/u61eS8.jpg',
'https://img.nickpic.host/u61k1q.jpg',
'https://img.nickpic.host/u61JJd.jpg',
'https://img.nickpic.host/u61P3D.jpg',
'https://img.nickpic.host/u61WfP.jpg',
'https://img.nickpic.host/u61TX5.jpg',
'https://img.nickpic.host/u61yOF.jpg',
'https://img.nickpic.host/u61dvM.jpg',
'https://img.nickpic.host/u64G8e.jpg',
'https://img.nickpic.host/u64IyX.jpg',
'https://img.nickpic.host/u64ocb.jpg',
'https://img.nickpic.host/u64p1f.jpg',
'https://img.nickpic.host/u64vL6.jpg',
'https://img.nickpic.host/u64BFp.jpg',
'https://img.nickpic.host/u64bXY.jpg',
'https://img.nickpic.host/u64r0A.jpg',
'https://img.nickpic.host/u643xG.jpg',
'https://img.nickpic.host/u64FOz.jpg',
'https://img.nickpic.host/u64aKc.jpg',
'https://img.nickpic.host/u645c1.jpg',
'https://img.nickpic.host/u64jyW.jpg',
'https://img.nickpic.host/u64S4j.jpg',
'https://img.nickpic.host/u64cLJ.jpg',
'https://img.nickpic.host/u64qFn.jpg',
'https://img.nickpic.host/u64uis.jpg',
'https://img.nickpic.host/u64OxQ.jpg',
'https://img.nickpic.host/u64A02.jpg',
'https://img.nickpic.host/u64hhx.jpg',
'https://img.nickpic.host/u646KN.jpg']
let pokes = pokemss[Math.floor(Math.random() * pokemss.length)]
pokemon = await getBuffer(pokes)
const decir =['Aquí tienes 💕🦈','¿Linda foto no?','Pedido entregado 🕊','¿Qué tal está?','¿Te gusta?','Tengo muchas más 😽']
const frase = decir[Math.floor(Math.random() * decir.length)]
let buttons = [
                    {buttonId: `pokemon`, buttonText: {displayText: 'Siguiente'}, type: 1}
                ]
                let buttonMessage = {
                    image: (pokemon),
                    caption: (frase),
                    buttons: buttons,
                    headerType: 4
                }
                GojoMdNx.sendMessage(m.chat, buttonMessage)
            }
break

case 'toloveru': {
const loves = ['https://img.nickpic.host/q4APBj.jpg',
'https://img.nickpic.host/q4AJ21.jpg',
'https://img.nickpic.host/q4Aeac.jpg',
'https://img.nickpic.host/q4AkiW.jpg',
'https://img.nickpic.host/q4A2Pz.jpg',
'https://img.nickpic.host/q4AYh6.jpg',
'https://img.nickpic.host/q4AfgA.jpg',
'https://img.nickpic.host/q4A0DG.jpg',
'https://img.nickpic.host/q4AHYp.jpg',
'https://img.nickpic.host/q4AVGY.jpg',
'https://img.nickpic.host/q4AThJ.jpg',
'https://img.nickpic.host/q4AWYn.jpg',
'https://img.nickpic.host/q4AdIs.jpg',
'https://img.nickpic.host/q4Ayg2.jpg',
'https://img.nickpic.host/q4EGDQ.jpg',
'https://img.nickpic.host/q4EITx.jpg',
'https://img.nickpic.host/q4EoaN.jpg',
'https://img.nickpic.host/q4EpnO.jpg',
'https://img.nickpic.host/q4Ev9m.jpg',
'https://img.nickpic.host/q4EBB8.jpg',
'https://img.nickpic.host/q4Eb6q.jpg',
'https://img.nickpic.host/q4ErYd.jpg',
'https://img.nickpic.host/q4E3ID.jpg',
'https://img.nickpic.host/q4EFq5.jpg',
'https://img.nickpic.host/q4EaDP.jpg',
'https://img.nickpic.host/q4EjTM.jpg',
'https://img.nickpic.host/q4E5jF.jpg',
'https://img.nickpic.host/q4ESne.jpg',
'https://img.nickpic.host/q4Ec9X.jpg',
'https://img.nickpic.host/q4Eqbb.jpg',
'https://img.nickpic.host/q4Eu6f.jpg',
'https://img.nickpic.host/q4EAH6.jpg',
'https://img.nickpic.host/q4EOmp.jpg',
'https://img.nickpic.host/q4EhqY.jpg',
'https://img.nickpic.host/q4E6wA.jpg',
'https://img.nickpic.host/q4ECWG.jpg',
'https://img.nickpic.host/q4EUjz.jpg',
'https://img.nickpic.host/q4EXtc.jpg',
'https://img.nickpic.host/q4Ei9W.jpg',
'https://img.nickpic.host/q4Etb1.jpg',
'https://img.nickpic.host/q4EMCj.jpg',
'https://img.nickpic.host/q4ERHJ.jpg',
'https://img.nickpic.host/q4E4mn.jpg',
'https://img.nickpic.host/q4EDus.jpg',
'https://img.nickpic.host/q4Eww2.jpg',
'https://img.nickpic.host/q4EzWQ.jpg',
'https://img.nickpic.host/q4E8lx.jpg',
'https://img.nickpic.host/q4EKtN.jpg',
'https://img.nickpic.host/q4EYeO.jpg',
'https://img.nickpic.host/q4ENrm.jpg',
'https://img.nickpic.host/q4EVC8.jpg',
'https://img.nickpic.host/q4EfNq.jpg',
'https://img.nickpic.host/q4E2md.jpg',
'https://img.nickpic.host/q4E9uD.jpg',
'https://img.nickpic.host/q4Eez5.jpg',
'https://img.nickpic.host/q4EkWP.jpg',
'https://img.nickpic.host/q4EPMF.jpg',
'https://img.nickpic.host/q4ELlM.jpg',
'https://img.nickpic.host/q4EZrX.jpg',
'https://img.nickpic.host/q4ETee.jpg',
'https://img.nickpic.host/q4EdQb.jpg',
'https://img.nickpic.host/q4OIo6.jpg',
'https://img.nickpic.host/q4EyNf.jpg',
'https://img.nickpic.host/q4OmAp.jpg',
'https://img.nickpic.host/q4OozY.jpg',
'https://img.nickpic.host/q4OpZA.jpg',
'https://img.nickpic.host/q4Ox5G.jpg',
'https://img.nickpic.host/q4OBMz.jpg',
'https://img.nickpic.host/q4Obkc.jpg',
'https://img.nickpic.host/q4OsrW.jpg',
'https://img.nickpic.host/q4O3Q1.jpg',
'https://img.nickpic.host/q4OFVj.jpg',
'https://img.nickpic.host/q4OjoJ.jpg',
'https://img.nickpic.host/q4OlAn.jpg',
'https://img.nickpic.host/q4O57s.jpg',
'https://img.nickpic.host/q4OSZ2.jpg',
'https://img.nickpic.host/q4Og5Q.jpg',
'https://img.nickpic.host/q4OqRx.jpg',
'https://img.nickpic.host/q4OukN.jpg',
'https://img.nickpic.host/q4OEsO.jpg',
'https://img.nickpic.host/q4OOUm.jpg',
'https://img.nickpic.host/q4OhV8.jpg',
'https://img.nickpic.host/q4OCpq.jpg',
'https://img.nickpic.host/q4OQAd.jpg',
'https://img.nickpic.host/q4OU7D.jpg',
'https://img.nickpic.host/q4OXd5.jpg',
'https://img.nickpic.host/q4On5P.jpg',
'https://img.nickpic.host/q4OtRM.jpg',
'https://img.nickpic.host/q4OMJF.jpg',
'https://img.nickpic.host/q4O1se.jpg',
'https://img.nickpic.host/q4O4UX.jpg',
'https://img.nickpic.host/q4ODfb.jpg',
'https://img.nickpic.host/q4Ozpf.jpg',
'https://img.nickpic.host/q4O7E6.jpg',
'https://img.nickpic.host/q4O88p.jpg',
'https://img.nickpic.host/q4OHSA.jpg',
'https://img.nickpic.host/q4OKdY.jpg',
'https://img.nickpic.host/q4ON1G.jpg',
'https://img.nickpic.host/q4OVJz.jpg',
'https://img.nickpic.host/q4O03c.jpg',
'https://img.nickpic.host/q4O2UW.jpg',
'https://img.nickpic.host/q4O9f1.jpg',
'https://img.nickpic.host/q4Okvj.jpg',
'https://img.nickpic.host/q4OJEJ.jpg',
'https://img.nickpic.host/q4OL8n.jpg',
'https://img.nickpic.host/q4OPys.jpg',
'https://img.nickpic.host/q4OWS2.jpg',
'https://img.nickpic.host/q4OZ1Q.jpg',
'https://img.nickpic.host/q4hG3N.jpg',
'https://img.nickpic.host/q4hIXO.jpg',
'https://img.nickpic.host/q4hm0m.jpg',
'https://img.nickpic.host/q4hpv8.jpg',
'https://img.nickpic.host/q4hvOq.jpg',
'https://img.nickpic.host/q4hx8d.jpg',
'https://img.nickpic.host/q4hByD.jpg',
'https://img.nickpic.host/q4hrc5.jpg',
'https://img.nickpic.host/q4hs1P.jpg',
'https://img.nickpic.host/q4h3LM.jpg',
'https://img.nickpic.host/q4haFF.jpg',
'https://img.nickpic.host/q4hjXe.jpg',
'https://img.nickpic.host/q4hl0X.jpg',
'https://img.nickpic.host/q4hSxb.jpg',
'https://img.nickpic.host/q4hcOf.jpg',
'https://img.nickpic.host/q4hgK6.jpg',
'https://img.nickpic.host/q4huGp.jpg',
'https://img.nickpic.host/q4hAcY.jpg',
'https://img.nickpic.host/q4hE4A.jpg',
'https://img.nickpic.host/q4hOPG.jpg',
'https://img.nickpic.host/q4h6Fz.jpg',
'https://img.nickpic.host/q4hCic.jpg',
'https://img.nickpic.host/q4hQ0W.jpg',
'https://img.nickpic.host/q4hihj.jpg',
'https://img.nickpic.host/q4hXx1.jpg',
'https://img.nickpic.host/q4hnKJ.jpg',
'https://img.nickpic.host/q4hMGn.jpg',
'https://img.nickpic.host/q4hRgs.jpg',
'https://img.nickpic.host/q4h142.jpg',
'https://img.nickpic.host/q4h4PQ.jpg',
'https://img.nickpic.host/q4hziN.jpg',
'https://img.nickpic.host/q4hwax.jpg',
'https://img.nickpic.host/q4h72O.jpg',
'https://img.nickpic.host/q4hKBm.jpg',
'https://img.nickpic.host/q4hYh8.jpg',
'https://img.nickpic.host/q4hHYq.jpg',
'https://img.nickpic.host/q4hVGd.jpg',
'https://img.nickpic.host/q4hfgD.jpg',
'https://img.nickpic.host/q4h0D5.jpg',
'https://img.nickpic.host/q4h2PP.jpg',
'https://img.nickpic.host/q4heaM.jpg',
'https://img.nickpic.host/q4hknF.jpg',
'https://img.nickpic.host/q4hJ2e.jpg',
'https://img.nickpic.host/q4hPBX.jpg',
'https://img.nickpic.host/q4hT6b.jpg',
'https://img.nickpic.host/q4hWYf.jpg',
'https://img.nickpic.host/q4hdI6.jpg',
'https://img.nickpic.host/q4hyqp.jpg',
'https://img.nickpic.host/q46GDY.jpg',
'https://img.nickpic.host/q46ITA.jpg',
'https://img.nickpic.host/q46ojG.jpg',
'https://img.nickpic.host/q46pnz.jpg',
'https://img.nickpic.host/q46v9c.jpg',
'https://img.nickpic.host/q46b61.jpg',
'https://img.nickpic.host/q46BBW.jpg',
'https://img.nickpic.host/q463IJ.jpg',
'https://img.nickpic.host/q46rHj.jpg',
'https://img.nickpic.host/q46Fqn.jpg',
'https://img.nickpic.host/q46jT2.jpg',
'https://img.nickpic.host/q46aws.jpg',
'https://img.nickpic.host/q465jQ.jpg',
'https://img.nickpic.host/q46Stx.jpg',
'https://img.nickpic.host/q46c9N.jpg',
'https://img.nickpic.host/q46qbO.jpg',
'https://img.nickpic.host/q46uCm.jpg',
'https://img.nickpic.host/q46Omq.jpg',
'https://img.nickpic.host/q46AH8.jpg',
'https://img.nickpic.host/q46hqd.jpg',
'https://img.nickpic.host/q466wD.jpg',
'https://img.nickpic.host/q46UjP.jpg',
'https://img.nickpic.host/q46CW5.jpg',
'https://img.nickpic.host/q46XtM.jpg',
'https://img.nickpic.host/q46tbe.jpg',
'https://img.nickpic.host/q46ieF.jpg',
'https://img.nickpic.host/q46RNb.jpg',
'https://img.nickpic.host/q46MCX.jpg',
'https://img.nickpic.host/q464mf.jpg',
'https://img.nickpic.host/q46Du6.jpg',
'https://img.nickpic.host/q46wzp.jpg',
'https://img.nickpic.host/q46zWY.jpg',
'https://img.nickpic.host/q468lA.jpg',
'https://img.nickpic.host/q46KMG.jpg',
'https://img.nickpic.host/q46Nrc.jpg',
'https://img.nickpic.host/q46Yez.jpg',
'https://img.nickpic.host/q46VCW.jpg',
'https://img.nickpic.host/q46fN1.jpg',
'https://img.nickpic.host/q462oj.jpg',
'https://img.nickpic.host/q46ezn.jpg',
'https://img.nickpic.host/q469uJ.jpg',
'https://img.nickpic.host/q46kZs.jpg',
'https://img.nickpic.host/q46Ll2.jpg',
'https://img.nickpic.host/q46Tkx.jpg',
'https://img.nickpic.host/q46PMQ.jpg',
'https://img.nickpic.host/q46ZrN.jpg',
'https://img.nickpic.host/q46dQO.jpg',
'https://img.nickpic.host/q46yVm.jpg',
'https://img.nickpic.host/q4CIo8.jpg',
'https://img.nickpic.host/q4Cozd.jpg',
'https://img.nickpic.host/q4CpZD.jpg',
'https://img.nickpic.host/q4CmAq.jpg',
'https://img.nickpic.host/q4Cx55.jpg',
'https://img.nickpic.host/q4CBMP.jpg',
'https://img.nickpic.host/q4CssF.jpg',
'https://img.nickpic.host/q4CbkM.jpg',
'https://img.nickpic.host/q4C3Qe.jpg',
'https://img.nickpic.host/q4CFVX.jpg',
'https://img.nickpic.host/q4Cjpb.jpg',
'https://img.nickpic.host/q4ClAf.jpg',
'https://img.nickpic.host/q4C576.jpg',
'https://img.nickpic.host/q4CSdp.jpg',
'https://img.nickpic.host/q4Cg5Y.jpg',
'https://img.nickpic.host/q4CqRA.jpg',
'https://img.nickpic.host/q4CuJG.jpg',
'https://img.nickpic.host/q4CEsz.jpg',
'https://img.nickpic.host/q4COUc.jpg',
'https://img.nickpic.host/q4ChVW.jpg',
'https://img.nickpic.host/q4CCp1.jpg',
'https://img.nickpic.host/q4CQEj.jpg',
'https://img.nickpic.host/q4CU7J.jpg',
'https://img.nickpic.host/q4CXdn.jpg',
'https://img.nickpic.host/q4CnSs.jpg',
'https://img.nickpic.host/q4CtR2.jpg',
'https://img.nickpic.host/q4CMJQ.jpg',
'https://img.nickpic.host/q4C4UN.jpg',
'https://img.nickpic.host/q4C13x.jpg',
'https://img.nickpic.host/q4CDfO.jpg',
'https://img.nickpic.host/q4Czvm.jpg',
'https://img.nickpic.host/q4C7E8.jpg',
'https://img.nickpic.host/q4CKdd.jpg',
'https://img.nickpic.host/q4C88q.jpg',
'https://img.nickpic.host/q4CHSD.jpg',
'https://img.nickpic.host/q4CN15.jpg',
'https://img.nickpic.host/q4CVJP.jpg',
'https://img.nickpic.host/q4C03M.jpg',
'https://img.nickpic.host/q4C2XF.jpg',
'https://img.nickpic.host/q4C9fe.jpg',
'https://img.nickpic.host/q4CkvX.jpg',
'https://img.nickpic.host/q4CJOb.jpg',
'https://img.nickpic.host/q4CL8f.jpg',
'https://img.nickpic.host/q4CPy6.jpg',
'https://img.nickpic.host/q4CWcp.jpg',
'https://img.nickpic.host/q4CdLA.jpg',
'https://img.nickpic.host/q4CZ1Y.jpg',
'https://img.nickpic.host/q4QIXz.jpg',
'https://img.nickpic.host/q4QGFG.jpg',
'https://img.nickpic.host/q4Qm0c.jpg',
'https://img.nickpic.host/q4QpvW.jpg',
'https://img.nickpic.host/q4QvO1.jpg',
'https://img.nickpic.host/q4QByJ.jpg',
'https://img.nickpic.host/q4QxKj.jpg',
'https://img.nickpic.host/q4Qrcn.jpg',
'https://img.nickpic.host/q4Qs4s.jpg',
'https://img.nickpic.host/q4Q3L2.jpg',
'https://img.nickpic.host/q4Qjix.jpg',
'https://img.nickpic.host/q4QaFQ.jpg',
'https://img.nickpic.host/q4Ql0N.jpg',
'https://img.nickpic.host/q4QSxO.jpg',
'https://img.nickpic.host/q4Qchm.jpg',
'https://img.nickpic.host/q4QgK8.jpg',
'https://img.nickpic.host/q4QuGq.jpg',
'https://img.nickpic.host/q4QAcd.jpg',
'https://img.nickpic.host/q4QE4D.jpg',
'https://img.nickpic.host/q4QOP5.jpg',
'https://img.nickpic.host/q4Q6FP.jpg',
'https://img.nickpic.host/q4QQ2F.jpg',
'https://img.nickpic.host/q4QCiM.jpg',
'https://img.nickpic.host/q4QihX.jpg',
'https://img.nickpic.host/q4QXxe.jpg',
'https://img.nickpic.host/q4QnYb.jpg',
'https://img.nickpic.host/q4QMGf.jpg',
'https://img.nickpic.host/q4QRg6.jpg',
'https://img.nickpic.host/q4Q1Dp.jpg',
'https://img.nickpic.host/q4QznG.jpg',
'https://img.nickpic.host/q4QwaA.jpg',
'https://img.nickpic.host/q4Q4PY.jpg',
'https://img.nickpic.host/q4QKBc.jpg',
'https://img.nickpic.host/q4Q72z.jpg',
'https://img.nickpic.host/q4QYhW.jpg',
'https://img.nickpic.host/q4QHY1.jpg',
'https://img.nickpic.host/q4QVIj.jpg',
'https://img.nickpic.host/q4QfgJ.jpg',
'https://img.nickpic.host/q4Q0Dn.jpg',
'https://img.nickpic.host/q4Q2Ts.jpg',
'https://img.nickpic.host/q4Qea2.jpg',
'https://img.nickpic.host/q4QknQ.jpg',
'https://img.nickpic.host/q4QPBN.jpg',
'https://img.nickpic.host/q4QT6O.jpg',
'https://img.nickpic.host/q4QJ9x.jpg',
'https://img.nickpic.host/q4QWHm.jpg',
'https://img.nickpic.host/q4QdI8.jpg',
'https://img.nickpic.host/q4UGDd.jpg',
'https://img.nickpic.host/q4Qyqq.jpg',
'https://img.nickpic.host/q4UITD.jpg',
'https://img.nickpic.host/q4Uoj5.jpg',
'https://img.nickpic.host/q4UpnP.jpg',
'https://img.nickpic.host/q4UBbF.jpg',
'https://img.nickpic.host/q4Uv9M.jpg',
'https://img.nickpic.host/q4Ub6e.jpg',
'https://img.nickpic.host/q4UrHX.jpg',
'https://img.nickpic.host/q4U3mb.jpg',
'https://img.nickpic.host/q4Uaw6.jpg',
'https://img.nickpic.host/q4UFqf.jpg',
'https://img.nickpic.host/q4UjWp.jpg',
'https://img.nickpic.host/q4U5jY.jpg',
'https://img.nickpic.host/q4UStA.jpg',
'https://img.nickpic.host/q4Uqbz.jpg',
'https://img.nickpic.host/q4UceG.jpg',
'https://img.nickpic.host/q4UuCc.jpg',
'https://img.nickpic.host/q4UAHW.jpg',
'https://img.nickpic.host/q4UOm1.jpg',
'https://img.nickpic.host/q4Uhuj.jpg',
'https://img.nickpic.host/q4U6wJ.jpg',
'https://img.nickpic.host/q4UCWn.jpg',
'https://img.nickpic.host/q4UUls.jpg',
'https://img.nickpic.host/q4UXt2.jpg',
'https://img.nickpic.host/q4UieQ.jpg',
'https://img.nickpic.host/q4Utrx.jpg',
'https://img.nickpic.host/q4UMCN.jpg',
'https://img.nickpic.host/q4URNO.jpg',
'https://img.nickpic.host/q4U4om.jpg',
'https://img.nickpic.host/q4UDu8.jpg',
'https://img.nickpic.host/q4UzWd.jpg',
'https://img.nickpic.host/q4Uwzq.jpg',
'https://img.nickpic.host/q4U8lD.jpg',
'https://img.nickpic.host/q4UKM5.jpg',
'https://img.nickpic.host/q4UYeP.jpg',
'https://img.nickpic.host/q4UVQF.jpg',
'https://img.nickpic.host/q4UNrM.jpg',
'https://img.nickpic.host/q4UfNe.jpg',
'https://img.nickpic.host/q4U2oX.jpg',
'https://img.nickpic.host/q4U9Ab.jpg',
'https://img.nickpic.host/q4UkZ6.jpg',
'https://img.nickpic.host/q4Uezf.jpg',
'https://img.nickpic.host/q4UL5p.jpg',
'https://img.nickpic.host/q4UTkA.jpg',
'https://img.nickpic.host/q4UPMY.jpg',
'https://img.nickpic.host/q4UdQz.jpg',
'https://img.nickpic.host/q4UZsG.jpg',
'https://img.nickpic.host/q4UyVc.jpg',
'https://img.nickpic.host/q4XmA1.jpg',
'https://img.nickpic.host/q4XIoW.jpg',
'https://img.nickpic.host/q4XpZJ.jpg',
'https://img.nickpic.host/q4Xo7j.jpg',
'https://img.nickpic.host/q4Xx5n.jpg',
'https://img.nickpic.host/q4Xbk2.jpg',
'https://img.nickpic.host/q4XBRs.jpg',
'https://img.nickpic.host/q4X3Ux.jpg',
'https://img.nickpic.host/q4XssQ.jpg',
'https://img.nickpic.host/q4XFVN.jpg',
'https://img.nickpic.host/q4XlEm.jpg',
'https://img.nickpic.host/q4XjpO.jpg',
'https://img.nickpic.host/q4XSdq.jpg',
'https://img.nickpic.host/q4X578.jpg',
'https://img.nickpic.host/q4Xg5d.jpg',
'https://img.nickpic.host/q4XqRD.jpg',
'https://img.nickpic.host/q4XuJ5.jpg',
'https://img.nickpic.host/q4XOUM.jpg',
'https://img.nickpic.host/q4XEsP.jpg',
'https://img.nickpic.host/q4XhfF.jpg',
'https://img.nickpic.host/q4XCpe.jpg',
'https://img.nickpic.host/q4XU8b.jpg',
'https://img.nickpic.host/q4XQEX.jpg',
'https://img.nickpic.host/q4XXdf.jpg',
'https://img.nickpic.host/q4XnS6.jpg',
'https://img.nickpic.host/q4Xt1p.jpg',
'https://img.nickpic.host/q4X13A.jpg',
'https://img.nickpic.host/q4XMJY.jpg',
'https://img.nickpic.host/q4X4XG.jpg',
'https://img.nickpic.host/q4XDfz.jpg',
'https://img.nickpic.host/q4X7EW.jpg',
'https://img.nickpic.host/q4Xzvc.jpg',
'https://img.nickpic.host/q4X881.jpg',
'https://img.nickpic.host/q4XKyj.jpg',
'https://img.nickpic.host/q4XHSJ.jpg',
'https://img.nickpic.host/q4XN1n.jpg',
'https://img.nickpic.host/q4XVLs.jpg',
'https://img.nickpic.host/q4X032.jpg',
'https://img.nickpic.host/q4X2XQ.jpg',
'https://img.nickpic.host/q4X90x.jpg',
'https://img.nickpic.host/q4XkvN.jpg',
'https://img.nickpic.host/q4XJOO.jpg',
'https://img.nickpic.host/q4XLKm.jpg',
'https://img.nickpic.host/q4XPy8.jpg',
'https://img.nickpic.host/q4XWcq.jpg',
'https://img.nickpic.host/q4XZ1d.jpg',
'https://img.nickpic.host/q4XdLD.jpg',
'https://img.nickpic.host/q4iGF5.jpg',
'https://img.nickpic.host/q4iIXP.jpg',
'https://img.nickpic.host/q4im0M.jpg',
'https://img.nickpic.host/q4ipxF.jpg',
'https://img.nickpic.host/q4ibGb.jpg',
'https://img.nickpic.host/q4ixKX.jpg',
'https://img.nickpic.host/q4ivOe.jpg',
'https://img.nickpic.host/q4ircf.jpg',
'https://img.nickpic.host/q4is46.jpg',
'https://img.nickpic.host/q4iaFY.jpg',
'https://img.nickpic.host/q4i3Pp.jpg',
'https://img.nickpic.host/q4ijiA.jpg',
'https://img.nickpic.host/q4il2G.jpg',
'https://img.nickpic.host/q4iSxz.jpg',
'https://img.nickpic.host/q4ichc.jpg',
'https://img.nickpic.host/q4igKW.jpg',
'https://img.nickpic.host/q4iuG1.jpg',
'https://img.nickpic.host/q4iAgj.jpg',
'https://img.nickpic.host/q4iOPn.jpg',
'https://img.nickpic.host/q4iQ2Q.jpg',
'https://img.nickpic.host/q4iE4J.jpg',
'https://img.nickpic.host/q4i6as.jpg',
'https://img.nickpic.host/q4iCi2.jpg',
'https://img.nickpic.host/q4iXBx.jpg',
'https://img.nickpic.host/q4iihN.jpg',
'https://img.nickpic.host/q4iRg8.jpg',
'https://img.nickpic.host/q4inYO.jpg',
'https://img.nickpic.host/q4iMIm.jpg',
'https://img.nickpic.host/q4iwaD.jpg',
'https://img.nickpic.host/q4i1Dq.jpg',
'https://img.nickpic.host/q4i4Pd.jpg',
'https://img.nickpic.host/q4izn5.jpg',
'https://img.nickpic.host/q4i72P.jpg',
'https://img.nickpic.host/q4iKBM.jpg',
'https://img.nickpic.host/q4iHYe.jpg',
'https://img.nickpic.host/q4iY6F.jpg',
'https://img.nickpic.host/q4ifqb.jpg',
'https://img.nickpic.host/q4iVIX.jpg',
'https://img.nickpic.host/q4i0Df.jpg',
'https://img.nickpic.host/q4i2T6.jpg',
'https://img.nickpic.host/q4iejp.jpg',
'https://img.nickpic.host/q4iJ9A.jpg',
'https://img.nickpic.host/q4iknY.jpg',
'https://img.nickpic.host/q4iT6z.jpg',
'https://img.nickpic.host/q4iWHc.jpg',
'https://img.nickpic.host/q4iPbG.jpg',
'https://img.nickpic.host/q4idIW.jpg',
'https://img.nickpic.host/q4iyq1.jpg',
'https://img.nickpic.host/q4nITJ.jpg',
'https://img.nickpic.host/q4nGwj.jpg',
'https://img.nickpic.host/q4nojn.jpg',
'https://img.nickpic.host/q4npts.jpg',
'https://img.nickpic.host/q4nv92.jpg',
'https://img.nickpic.host/q4nbCx.jpg',
'https://img.nickpic.host/q4nBbQ.jpg',
'https://img.nickpic.host/q4nrHN.jpg',
'https://img.nickpic.host/q4n3mO.jpg',
'https://img.nickpic.host/q4nFum.jpg',
'https://img.nickpic.host/q4njWq.jpg',
'https://img.nickpic.host/q4naw8.jpg',
'https://img.nickpic.host/q4n5jd.jpg',
'https://img.nickpic.host/q4nStD.jpg',
'https://img.nickpic.host/q4nce5.jpg',
'https://img.nickpic.host/q4nuCM.jpg',
'https://img.nickpic.host/q4nqbP.jpg',
'https://img.nickpic.host/q4nANF.jpg',
'https://img.nickpic.host/q4nOme.jpg',
'https://img.nickpic.host/q4n6zb.jpg',
'https://img.nickpic.host/q4nhuX.jpg',
'https://img.nickpic.host/q4nCWf.jpg',
'https://img.nickpic.host/q4nUl6.jpg',
'https://img.nickpic.host/q4nXMp.jpg',
'https://img.nickpic.host/q4ntrA.jpg',
'https://img.nickpic.host/q4nieY.jpg',
'https://img.nickpic.host/q4nMQG.jpg',
'https://img.nickpic.host/q4nRNz.jpg',
'https://img.nickpic.host/q4n4oc.jpg',
'https://img.nickpic.host/q4nwz1.jpg',
'https://img.nickpic.host/q4nDuW.jpg',
'https://img.nickpic.host/q4nzZj.jpg',
'https://img.nickpic.host/q4n8lJ.jpg']
let tolo = loves[Math.floor(Math.random() * loves.length)]
loveru = await getBuffer(tolo)
const decirl =['Aquí tienes 💕🦈','¿Linda foto no?','Pedido entregado 🕊','¿Qué tal está?','¿Te gusta?','Tengo muchas más 😽']
const frasel = decirl[Math.floor(Math.random() * decirl.length)]
let buttons = [
                    {buttonId: `toloveru`, buttonText: {displayText: 'Siguiente'}, type: 1}
                ]
                let buttonMessage = {
                    image: (loveru),
                    caption: (frasel),
                    buttons: buttons,
                    headerType: 4
                }
                GojoMdNx.sendMessage(m.chat, buttonMessage)
            }
break

case 'hentai': {
const hent = ['https://img.nickpic.host/qw67M5.jpg',
'https://img.nickpic.host/qw6YrM.jpg',
'https://img.nickpic.host/qw6zlD.jpg',
'https://img.nickpic.host/qw68eP.jpg',
'https://img.nickpic.host/qw6DWd.jpg',
'https://img.nickpic.host/qw6tNO.jpg',
'https://img.nickpic.host/qw6Rom.jpg',
'https://img.nickpic.host/qw6nCN.jpg',
'https://img.nickpic.host/qw64zq.jpg',
'https://img.nickpic.host/qw61u8.jpg',
'https://img.nickpic.host/qw6HQF.jpg',
'https://img.nickpic.host/qw6NNe.jpg',
'https://img.nickpic.host/qw6foX.jpg',
'https://img.nickpic.host/qw60Ab.jpg',
'https://img.nickpic.host/qw62zf.jpg',
'https://img.nickpic.host/qw69Z6.jpg',
'https://img.nickpic.host/qw6JMY.jpg',
'https://img.nickpic.host/qw6k5p.jpg',
'https://img.nickpic.host/qw6LkA.jpg',
'https://img.nickpic.host/qw6TsG.jpg',
'https://img.nickpic.host/qw6WQz.jpg',
'https://img.nickpic.host/qw6ZVc.jpg',
'https://img.nickpic.host/qw6yoW.jpg',
'https://img.nickpic.host/qwCGA1.jpg',
'https://img.nickpic.host/qwCI7j.jpg',
'https://img.nickpic.host/qwCmZJ.jpg',
'https://img.nickpic.host/qwCp5n.jpg',
'https://img.nickpic.host/qwCvRs.jpg',
'https://img.nickpic.host/qwCxk2.jpg',
'https://img.nickpic.host/qwCrUx.jpg',
'https://img.nickpic.host/qwCbsQ.jpg',
'https://img.nickpic.host/qwCsVN.jpg',
'https://img.nickpic.host/qwCFpO.jpg',
'https://img.nickpic.host/qwCaEm.jpg',
'https://img.nickpic.host/qwCj78.jpg',
'https://img.nickpic.host/qwCldq.jpg',
'https://img.nickpic.host/qwCS5d.jpg',
'https://img.nickpic.host/qwCgJ5.jpg',
'https://img.nickpic.host/qwCcRD.jpg',
'https://img.nickpic.host/qwCusP.jpg',
'https://img.nickpic.host/qwCAUM.jpg',
'https://img.nickpic.host/qwCEfF.jpg',
'https://img.nickpic.host/qwChpe.jpg',
'https://img.nickpic.host/qwC6EX.jpg',
'https://img.nickpic.host/qwCC8b.jpg',
'https://img.nickpic.host/qwCQdf.jpg',
'https://img.nickpic.host/qwCXS6.jpg',
'https://img.nickpic.host/qwCi1p.jpg',
'https://img.nickpic.host/qwCnJY.jpg',
'https://img.nickpic.host/qwCM3A.jpg',
'https://img.nickpic.host/qwCRXG.jpg',
'https://img.nickpic.host/qwC1fz.jpg',
'https://img.nickpic.host/qwCDvc.jpg',
'https://img.nickpic.host/qwCz81.jpg',
'https://img.nickpic.host/qwCwEW.jpg',
'https://img.nickpic.host/qwC7yj.jpg',
'https://img.nickpic.host/qwCKSJ.jpg',
'https://img.nickpic.host/qwCY1n.jpg',
'https://img.nickpic.host/qwCHLs.jpg',
'https://img.nickpic.host/qwCV32.jpg',
'https://img.nickpic.host/qwCfXQ.jpg',
'https://img.nickpic.host/qwC00x.jpg',
'https://img.nickpic.host/qwC9vN.jpg',
'https://img.nickpic.host/qwCkKm.jpg',
'https://img.nickpic.host/qwCeOO.jpg',
'https://img.nickpic.host/qwCJy8.jpg',
'https://img.nickpic.host/qwCT1d.jpg',
'https://img.nickpic.host/qwCPcq.jpg',
'https://img.nickpic.host/qwCWLD.jpg',
'https://img.nickpic.host/qwCdF5.jpg',
'https://img.nickpic.host/qwCyXP.jpg',
'https://img.nickpic.host/qwQG0M.jpg',
'https://img.nickpic.host/qwQoOe.jpg',
'https://img.nickpic.host/qwQpKX.jpg',
'https://img.nickpic.host/qwQb46.jpg',
'https://img.nickpic.host/qwQxGb.jpg',
'https://img.nickpic.host/qwQBcf.jpg',
'https://img.nickpic.host/qwQrPp.jpg',
'https://img.nickpic.host/qwQ3FY.jpg',
'https://img.nickpic.host/qwQFiA.jpg',
'https://img.nickpic.host/qwQa2G.jpg',
'https://img.nickpic.host/qwQlxz.jpg',
'https://img.nickpic.host/qwQ5hc.jpg',
'https://img.nickpic.host/qwQSKW.jpg',
'https://img.nickpic.host/qwQqgj.jpg',
'https://img.nickpic.host/qwQgG1.jpg',
'https://img.nickpic.host/qwQAPn.jpg',
'https://img.nickpic.host/qwQu4J.jpg',
'https://img.nickpic.host/qwQOas.jpg',
'https://img.nickpic.host/qwQhi2.jpg',
'https://img.nickpic.host/qwQ62Q.jpg',
'https://img.nickpic.host/qwQQBx.jpg',
'https://img.nickpic.host/qwQUhN.jpg',
'https://img.nickpic.host/qwQXYO.jpg',
'https://img.nickpic.host/qwQnIm.jpg',
'https://img.nickpic.host/qwQtg8.jpg',
'https://img.nickpic.host/qwQMDq.jpg',
'https://img.nickpic.host/qwQRPd.jpg',
'https://img.nickpic.host/qwQ4aD.jpg',
'https://img.nickpic.host/qwQDn5.jpg',
'https://img.nickpic.host/qwQw2P.jpg',
'https://img.nickpic.host/qwQ7BM.jpg',
'https://img.nickpic.host/qwQ86F.jpg',
'https://img.nickpic.host/qwQKYe.jpg',
'https://img.nickpic.host/qwQHIX.jpg',
'https://img.nickpic.host/qwQVDf.jpg',
'https://img.nickpic.host/qwQ2jp.jpg',
'https://img.nickpic.host/qwQe9A.jpg',
'https://img.nickpic.host/qwQL6z.jpg',
'https://img.nickpic.host/qwQPHc.jpg',
'https://img.nickpic.host/qwQWIW.jpg',
'https://img.nickpic.host/qwQZq1.jpg',
'https://img.nickpic.host/qwQyTJ.jpg',
'https://img.nickpic.host/qwUIjn.jpg',
'https://img.nickpic.host/qwUvbQ.jpg',
'https://img.nickpic.host/qwUxCx.jpg',
'https://img.nickpic.host/qwUBHN.jpg',
'https://img.nickpic.host/qwUrmO.jpg',
'https://img.nickpic.host/qwUsum.jpg',
'https://img.nickpic.host/qwU3w8.jpg',
'https://img.nickpic.host/qwUFWq.jpg',
'https://img.nickpic.host/qwUjjd.jpg',
'https://img.nickpic.host/qwUltD.jpg',
'https://img.nickpic.host/qwUgCM.jpg',
'https://img.nickpic.host/qwUcbP.jpg',
'https://img.nickpic.host/qwUAme.jpg',
'https://img.nickpic.host/qwUqNF.jpg',
'https://img.nickpic.host/qwUOzb.jpg',
'https://img.nickpic.host/qwUhWf.jpg',
'https://img.nickpic.host/qwUCl6.jpg',
'https://img.nickpic.host/qwUQMp.jpg',
'https://img.nickpic.host/qwUUeY.jpg',
'https://img.nickpic.host/qwUirA.jpg',
'https://img.nickpic.host/qwUnQG.jpg',
'https://img.nickpic.host/qwUtNz.jpg',
'https://img.nickpic.host/qwURoc.jpg',
'https://img.nickpic.host/qwU1uW.jpg',
'https://img.nickpic.host/qwU4z1.jpg',
'https://img.nickpic.host/qwUDZj.jpg',
'https://img.nickpic.host/qwU7Mn.jpg',
'https://img.nickpic.host/qwU8ks.jpg',
'https://img.nickpic.host/qwUYr2.jpg',
'https://img.nickpic.host/qwUNVx.jpg',
'https://img.nickpic.host/qwUHQQ.jpg',
'https://img.nickpic.host/qwUfoN.jpg',
'https://img.nickpic.host/qwU0AO.jpg',
'https://img.nickpic.host/qwU27m.jpg',
'https://img.nickpic.host/qwU9Z8.jpg',
'https://img.nickpic.host/qwUk5q.jpg',
'https://img.nickpic.host/qwUJMd.jpg',
'https://img.nickpic.host/qwULkD.jpg',
'https://img.nickpic.host/qwUTs5.jpg',
'https://img.nickpic.host/qwUWQP.jpg',
'https://img.nickpic.host/qwUZVM.jpg',
'https://img.nickpic.host/qwUypF.jpg',
'https://img.nickpic.host/qwXGAe.jpg',
'https://img.nickpic.host/qwXI7X.jpg',
'https://img.nickpic.host/qwXvR6.jpg',
'https://img.nickpic.host/qwXmdb.jpg',
'https://img.nickpic.host/qwXp5f.jpg',
'https://img.nickpic.host/qwXxJp.jpg',
'https://img.nickpic.host/qwXbsY.jpg',
'https://img.nickpic.host/qwXrUA.jpg',
'https://img.nickpic.host/qwXsfG.jpg',
'https://img.nickpic.host/qwXFpz.jpg',
'https://img.nickpic.host/qwXaEc.jpg',
'https://img.nickpic.host/qwXj7W.jpg',
'https://img.nickpic.host/qwXSSj.jpg',
'https://img.nickpic.host/qwXld1.jpg',
'https://img.nickpic.host/qwXcRJ.jpg',
'https://img.nickpic.host/qwXgJn.jpg',
'https://img.nickpic.host/qwXu3s.jpg',
'https://img.nickpic.host/qwXAU2.jpg',
'https://img.nickpic.host/qwXEfQ.jpg',
'https://img.nickpic.host/qwX6EN.jpg',
'https://img.nickpic.host/qwXhvx.jpg',
'https://img.nickpic.host/qwXC8O.jpg',
'https://img.nickpic.host/qwXQym.jpg',
'https://img.nickpic.host/qwXXS8.jpg',
'https://img.nickpic.host/qwXi1q.jpg',
'https://img.nickpic.host/qwXnJd.jpg',
'https://img.nickpic.host/qwXM3D.jpg',
'https://img.nickpic.host/qwXRX5.jpg',
'https://img.nickpic.host/qwX1fP.jpg',
'https://img.nickpic.host/qwXDvM.jpg',
'https://img.nickpic.host/qwXwOF.jpg',
'https://img.nickpic.host/qwXz8e.jpg',
'https://img.nickpic.host/qwX7yX.jpg',
'https://img.nickpic.host/qwXKcb.jpg',
'https://img.nickpic.host/qwXY1f.jpg',
'https://img.nickpic.host/qwXHL6.jpg',
'https://img.nickpic.host/qwXVFp.jpg',
'https://img.nickpic.host/qwXfXY.jpg',
'https://img.nickpic.host/qwX00A.jpg',
'https://img.nickpic.host/qwXeOz.jpg',
'https://img.nickpic.host/qwX9xG.jpg',
'https://img.nickpic.host/qwXkKc.jpg',
'https://img.nickpic.host/qwXJyW.jpg',
'https://img.nickpic.host/qwXPc1.jpg',
'https://img.nickpic.host/qwXT4j.jpg',
'https://img.nickpic.host/qwXWLJ.jpg',
'https://img.nickpic.host/qwXdFn.jpg',
'https://img.nickpic.host/qwXyis.jpg',
'https://img.nickpic.host/qwiG02.jpg',
'https://img.nickpic.host/qwimxQ.jpg',
'https://img.nickpic.host/qwiohx.jpg',
'https://img.nickpic.host/qwipKN.jpg',
'https://img.nickpic.host/qwiBgm.jpg',
'https://img.nickpic.host/qwixGO.jpg',
'https://img.nickpic.host/qwib48.jpg',
'https://img.nickpic.host/qwirPq.jpg',
'https://img.nickpic.host/qwi3Fd.jpg',
'https://img.nickpic.host/qwiFiD.jpg',
'https://img.nickpic.host/qwia25.jpg',
'https://img.nickpic.host/qwilxP.jpg',
'https://img.nickpic.host/qwi5hM.jpg',
'https://img.nickpic.host/qwiSYF.jpg',
'https://img.nickpic.host/qwiqgX.jpg',
'https://img.nickpic.host/qwigGe.jpg',
'https://img.nickpic.host/qwiuDb.jpg',
'https://img.nickpic.host/qwiAPf.jpg',
'https://img.nickpic.host/qwiOa6.jpg',
'https://img.nickpic.host/qwihnp.jpg',
'https://img.nickpic.host/qwiQBA.jpg',
'https://img.nickpic.host/qwi62Y.jpg',
'https://img.nickpic.host/qwiU6G.jpg',
'https://img.nickpic.host/qwinIc.jpg',
'https://img.nickpic.host/qwiXYz.jpg',
'https://img.nickpic.host/qwitgW.jpg',
'https://img.nickpic.host/qwiRTj.jpg',
'https://img.nickpic.host/qwiDnn.jpg',
'https://img.nickpic.host/qwi4aJ.jpg',
'https://img.nickpic.host/qwiw9s.jpg',
'https://img.nickpic.host/qwi86Q.jpg',
'https://img.nickpic.host/qwi7B2.jpg',
'https://img.nickpic.host/qwiKHx.jpg',
'https://img.nickpic.host/qwiHIN.jpg',
'https://img.nickpic.host/qwiNqO.jpg',
'https://img.nickpic.host/qwiVwm.jpg',
'https://img.nickpic.host/qwifT8.jpg',
'https://img.nickpic.host/qwi2jq.jpg',
'https://img.nickpic.host/qwi9nd.jpg',
'https://img.nickpic.host/qwie9D.jpg',
'https://img.nickpic.host/qwiJb5.jpg',
'https://img.nickpic.host/qwiL6P.jpg',
'https://img.nickpic.host/qwiPHM.jpg',
'https://img.nickpic.host/qwiWmF.jpg',
'https://img.nickpic.host/qwiZqe.jpg',
'https://img.nickpic.host/qwidwX.jpg',
'https://img.nickpic.host/qwiyWb.jpg',
'https://img.nickpic.host/qwnIjf.jpg',
'https://img.nickpic.host/qwnmt6.jpg',
'https://img.nickpic.host/qwnoep.jpg',
'https://img.nickpic.host/qwnvbY.jpg',
'https://img.nickpic.host/qwnxCA.jpg',
'https://img.nickpic.host/qwnBNG.jpg',
'https://img.nickpic.host/qwnrmz.jpg',
'https://img.nickpic.host/qwnsuc.jpg',
'https://img.nickpic.host/qwn3wW.jpg',
'https://img.nickpic.host/qwnFW1.jpg',
'https://img.nickpic.host/qwnjlj.jpg',
'https://img.nickpic.host/qwnltJ.jpg',
'https://img.nickpic.host/qwn5en.jpg',
'https://img.nickpic.host/qwngC2.jpg',
'https://img.nickpic.host/qwncrs.jpg',
'https://img.nickpic.host/qwnqNQ.jpg',
'https://img.nickpic.host/qwnEuN.jpg',
'https://img.nickpic.host/qwnAox.jpg',
'https://img.nickpic.host/qwnOzO.jpg',
'https://img.nickpic.host/qwnhZm.jpg',
'https://img.nickpic.host/qwnCl8.jpg',
'https://img.nickpic.host/qwnQMq.jpg',
'https://img.nickpic.host/qwnirD.jpg',
'https://img.nickpic.host/qwnUed.jpg',
'https://img.nickpic.host/qwnnQ5.jpg',
'https://img.nickpic.host/qwntNP.jpg',
'https://img.nickpic.host/qwn1AF.jpg',
'https://img.nickpic.host/qwnRoM.jpg',
'https://img.nickpic.host/qwn4ze.jpg',
'https://img.nickpic.host/qwnDZX.jpg',
'https://img.nickpic.host/qwnz5b.jpg',
'https://img.nickpic.host/qwn7Mf.jpg',
'https://img.nickpic.host/qwn8k6.jpg',
'https://img.nickpic.host/qwnYsp.jpg',
'https://img.nickpic.host/qwnHQY.jpg',
'https://img.nickpic.host/qwnNVA.jpg',
'https://img.nickpic.host/qwnfpG.jpg',
'https://img.nickpic.host/qwn0Az.jpg',
'https://img.nickpic.host/qwn27c.jpg',
'https://img.nickpic.host/qwn9ZW.jpg',
'https://img.nickpic.host/qwnk51.jpg',
'https://img.nickpic.host/qwnJRj.jpg',
'https://img.nickpic.host/qwnLkJ.jpg',
'https://img.nickpic.host/qwnTsn.jpg',
'https://img.nickpic.host/qwnWUs.jpg',
'https://img.nickpic.host/qwnZV2.jpg',
'https://img.nickpic.host/qwnypQ.jpg',
'https://img.nickpic.host/qwtGEx.jpg',
'https://img.nickpic.host/qwtI7N.jpg',
'https://img.nickpic.host/qwtmdO.jpg',
'https://img.nickpic.host/qwtpSm.jpg',
'https://img.nickpic.host/qwtvR8.jpg',
'https://img.nickpic.host/qwtxJq.jpg',
'https://img.nickpic.host/qwtbsd.jpg',
'https://img.nickpic.host/qwtrUD.jpg',
'https://img.nickpic.host/qwtsf5.jpg',
'https://img.nickpic.host/qwtFpP.jpg',
'https://img.nickpic.host/qwtaEM.jpg',
'https://img.nickpic.host/qwtj8F.jpg',
'https://img.nickpic.host/qwtlde.jpg',
'https://img.nickpic.host/qwtSSX.jpg',
'https://img.nickpic.host/qwtc1b.jpg',
'https://img.nickpic.host/qwtgJf.jpg',
'https://img.nickpic.host/qwtAXp.jpg',
'https://img.nickpic.host/qwtu36.jpg',
'https://img.nickpic.host/qwtEfY.jpg',
'https://img.nickpic.host/qwthvA.jpg',
'https://img.nickpic.host/qwtC8z.jpg',
'https://img.nickpic.host/qwt6OG.jpg',
'https://img.nickpic.host/qwtQyc.jpg',
'https://img.nickpic.host/qwtXSW.jpg',
'https://img.nickpic.host/qwti11.jpg',
'https://img.nickpic.host/qwtnLj.jpg',
'https://img.nickpic.host/qwtM3J.jpg',
'https://img.nickpic.host/qwtRXn.jpg',
'https://img.nickpic.host/qwt10s.jpg',
'https://img.nickpic.host/qwtDv2.jpg',
'https://img.nickpic.host/qwtwOQ.jpg',
'https://img.nickpic.host/qwtzKx.jpg',
'https://img.nickpic.host/qwt7yN.jpg',
'https://img.nickpic.host/qwtKcO.jpg',
'https://img.nickpic.host/qwtY4m.jpg',
'https://img.nickpic.host/qwtHL8.jpg',
'https://img.nickpic.host/qwtVFq.jpg',
'https://img.nickpic.host/qwtfXd.jpg',
'https://img.nickpic.host/qwt00D.jpg',
'https://img.nickpic.host/qwt9x5.jpg',
'https://img.nickpic.host/qwteOP.jpg',
'https://img.nickpic.host/qwtkKM.jpg',
'https://img.nickpic.host/qwtLGF.jpg',
'https://img.nickpic.host/qwtPce.jpg',
'https://img.nickpic.host/qwtT4X.jpg',
'https://img.nickpic.host/qwtWPb.jpg',
'https://img.nickpic.host/qwtdFf.jpg',
'https://img.nickpic.host/qwtyi6.jpg',
'https://img.nickpic.host/qwMG2p.jpg',
'https://img.nickpic.host/qwMmxY.jpg',
'https://img.nickpic.host/qwMohA.jpg',
'https://img.nickpic.host/qwMpYG.jpg',
'https://img.nickpic.host/qwMxGz.jpg',
'https://img.nickpic.host/qwMBgc.jpg',
'https://img.nickpic.host/qwMb4W.jpg',
'https://img.nickpic.host/qwMrP1.jpg',
'https://img.nickpic.host/qwM3aj.jpg',
'https://img.nickpic.host/qwMFiJ.jpg',
'https://img.nickpic.host/qwMa2n.jpg',
'https://img.nickpic.host/qwMlBs.jpg',
'https://img.nickpic.host/qwM5h2.jpg',
'https://img.nickpic.host/qwMgIx.jpg',
'https://img.nickpic.host/qwMSYQ.jpg',
'https://img.nickpic.host/qwMuDO.jpg',
'https://img.nickpic.host/qwMqgN.jpg',
'https://img.nickpic.host/qwMATm.jpg',
'https://img.nickpic.host/qwMOa8.jpg',
'https://img.nickpic.host/qwMhnq.jpg',
'https://img.nickpic.host/qwMQBD.jpg',
'https://img.nickpic.host/qwM62d.jpg',
'https://img.nickpic.host/qwMU65.jpg',
'https://img.nickpic.host/qwMXYP.jpg',
'https://img.nickpic.host/qwMnIM.jpg',
'https://img.nickpic.host/qwMMDe.jpg',
'https://img.nickpic.host/qwMtqF.jpg',
'https://img.nickpic.host/qwMRTX.jpg',
'https://img.nickpic.host/qwM4jb.jpg',
'https://img.nickpic.host/qwMDnf.jpg',
'https://img.nickpic.host/qwMw96.jpg',
'https://img.nickpic.host/qwM86Y.jpg',
'https://img.nickpic.host/qwM7bp.jpg',
'https://img.nickpic.host/qwMKHA.jpg',
'https://img.nickpic.host/qwMHmG.jpg',
'https://img.nickpic.host/qwMNqz.jpg',
'https://img.nickpic.host/qwMVwc.jpg',
'https://img.nickpic.host/qwMfTW.jpg',
'https://img.nickpic.host/qwM2j1.jpg',
'https://img.nickpic.host/qwM9tj.jpg',
'https://img.nickpic.host/qwMe9J.jpg',
'https://img.nickpic.host/qwMJbn.jpg',
'https://img.nickpic.host/qwMLCs.jpg',
'https://img.nickpic.host/qwMPH2.jpg',
'https://img.nickpic.host/qwMZux.jpg',
'https://img.nickpic.host/qwMWmQ.jpg',
'https://img.nickpic.host/qwMdwN.jpg',
'https://img.nickpic.host/qwMyWO.jpg',
'https://img.nickpic.host/qwRmt8.jpg',
'https://img.nickpic.host/qwRIlm.jpg',
'https://img.nickpic.host/qwRoeq.jpg',
'https://img.nickpic.host/qwRvbd.jpg',
'https://img.nickpic.host/qwRxCD.jpg',
'https://img.nickpic.host/qwRBN5.jpg',
'https://img.nickpic.host/qwRrmP.jpg',
'https://img.nickpic.host/qwR3zF.jpg',
'https://img.nickpic.host/qwRsuM.jpg',
'https://img.nickpic.host/qwRFWe.jpg',
'https://img.nickpic.host/qwRjlX.jpg',
'https://img.nickpic.host/qwRlMb.jpg',
'https://img.nickpic.host/qwR5ef.jpg',
'https://img.nickpic.host/qwRcr6.jpg',
'https://img.nickpic.host/qwRgQp.jpg',
'https://img.nickpic.host/qwRqNY.jpg',
'https://img.nickpic.host/qwRAoA.jpg',
'https://img.nickpic.host/qwROzz.jpg',
'https://img.nickpic.host/qwREAG.jpg',
'https://img.nickpic.host/qwRClW.jpg',
'https://img.nickpic.host/qwRQM1.jpg',
'https://img.nickpic.host/qwRUkj.jpg',
'https://img.nickpic.host/qwRirJ.jpg',
'https://img.nickpic.host/qwRnQn.jpg',
'https://img.nickpic.host/qwRtVs.jpg',
'https://img.nickpic.host/qwRRo2.jpg',
'https://img.nickpic.host/qwR1AQ.jpg',
'https://img.nickpic.host/qwR47x.jpg',
'https://img.nickpic.host/qwRDZN.jpg',
'https://img.nickpic.host/qwRz5O.jpg',
'https://img.nickpic.host/qwR7Rm.jpg',
'https://img.nickpic.host/qwR8k8.jpg',
'https://img.nickpic.host/qwRYsq.jpg',
'https://img.nickpic.host/qwRNVD.jpg',
'https://img.nickpic.host/qwRHQd.jpg',
'https://img.nickpic.host/qwRfp5.jpg',
'https://img.nickpic.host/qwR0AP.jpg',
'https://img.nickpic.host/qwR27M.jpg',
'https://img.nickpic.host/qwR9dF.jpg',
'https://img.nickpic.host/qwRk5e.jpg',
'https://img.nickpic.host/qwRJRX.jpg',
'https://img.nickpic.host/qwRLJb.jpg',
'https://img.nickpic.host/qwRTsf.jpg',
'https://img.nickpic.host/qwRWU6.jpg',
'https://img.nickpic.host/qwRZfp.jpg',
'https://img.nickpic.host/qwRypY.jpg',
'https://img.nickpic.host/qw1GEA.jpg',
'https://img.nickpic.host/qw1I8G.jpg',
'https://img.nickpic.host/qw1mdz.jpg',
'https://img.nickpic.host/qw1pSc.jpg',
'https://img.nickpic.host/qw1vRW.jpg',
'https://img.nickpic.host/qw1xJ1.jpg',
'https://img.nickpic.host/qw1b3j.jpg',
'https://img.nickpic.host/qw1rUJ.jpg',
'https://img.nickpic.host/qw1sfn.jpg',
'https://img.nickpic.host/qw1Fvs.jpg',
'https://img.nickpic.host/qw1j8Q.jpg',
'https://img.nickpic.host/qw1aE2.jpg',
'https://img.nickpic.host/qw1lyx.jpg',
'https://img.nickpic.host/qw1SSN.jpg',
'https://img.nickpic.host/qw1gLm.jpg',
'https://img.nickpic.host/qw1c1O.jpg',
'https://img.nickpic.host/qw1u38.jpg',
'https://img.nickpic.host/qw1AXq.jpg',
'https://img.nickpic.host/qw1Efd.jpg',
'https://img.nickpic.host/qw1hvD.jpg',
'https://img.nickpic.host/qw1C8P.jpg',
'https://img.nickpic.host/qw1QyM.jpg',
'https://img.nickpic.host/qw1XcF.jpg',
'https://img.nickpic.host/qw1i1e.jpg',
'https://img.nickpic.host/qw1nLX.jpg',
'https://img.nickpic.host/qw1MFb.jpg',
'https://img.nickpic.host/qw1RXf.jpg',
'https://img.nickpic.host/qw1106.jpg',
'https://img.nickpic.host/qw1Dxp.jpg',
'https://img.nickpic.host/qw1wOY.jpg',
'https://img.nickpic.host/qw18GG.jpg',
'https://img.nickpic.host/qw1zKA.jpg',
'https://img.nickpic.host/qw1Kcz.jpg',
'https://img.nickpic.host/qw1Y4c.jpg',
'https://img.nickpic.host/qw1fij.jpg',
'https://img.nickpic.host/qw1HLW.jpg',
'https://img.nickpic.host/qw1VF1.jpg',
'https://img.nickpic.host/qw100J.jpg',
'https://img.nickpic.host/qw19xn.jpg',
'https://img.nickpic.host/qw1ehs.jpg',
'https://img.nickpic.host/qw1kK2.jpg',
'https://img.nickpic.host/qw1Pgx.jpg',
'https://img.nickpic.host/qw1LGQ.jpg',
'https://img.nickpic.host/qw1T4N.jpg',
'https://img.nickpic.host/qw1dam.jpg',
'https://img.nickpic.host/qw4G2q.jpg',
'https://img.nickpic.host/qw1WPO.jpg',
'https://img.nickpic.host/qw1yi8.jpg',
'https://img.nickpic.host/qw4ohD.jpg',
'https://img.nickpic.host/qw4mxd.jpg',
'https://img.nickpic.host/qw4pY5.jpg',
'https://img.nickpic.host/qw4xGP.jpg',
'https://img.nickpic.host/qw4BgM.jpg',
'https://img.nickpic.host/qw4rPe.jpg',
'https://img.nickpic.host/qw4bDF.jpg',
'https://img.nickpic.host/qw43aX.jpg',
'https://img.nickpic.host/qw4Fnb.jpg',
'https://img.nickpic.host/qw4a2f.jpg',
'https://img.nickpic.host/qw456p.jpg',
'https://img.nickpic.host/qw4lB6.jpg',
'https://img.nickpic.host/qw4SYY.jpg',
'https://img.nickpic.host/qw4gIA.jpg',
'https://img.nickpic.host/qw4qqG.jpg',
'https://img.nickpic.host/qw4hn1.jpg',
'https://img.nickpic.host/qw4ATc.jpg',
'https://img.nickpic.host/qw4uDz.jpg',
'https://img.nickpic.host/qw4OaW.jpg',
'https://img.nickpic.host/qw469j.jpg',
'https://img.nickpic.host/qw4QBJ.jpg',
'https://img.nickpic.host/qw4U6n.jpg',
'https://img.nickpic.host/qw4XHs.jpg',
'https://img.nickpic.host/qw4tqQ.jpg',
'https://img.nickpic.host/qw4nI2.jpg',
'https://img.nickpic.host/qw4Mwx.jpg',
'https://img.nickpic.host/qw4RTN.jpg',
'https://img.nickpic.host/qw44jO.jpg',
'https://img.nickpic.host/qw4Dtm.jpg',
'https://img.nickpic.host/qw4w98.jpg',
'https://img.nickpic.host/qw47bq.jpg',
'https://img.nickpic.host/qw4KHD.jpg',
'https://img.nickpic.host/qw4NqP.jpg',
'https://img.nickpic.host/qw4Hm5.jpg',
'https://img.nickpic.host/qw486d.jpg',
'https://img.nickpic.host/qw4VwM.jpg',
'https://img.nickpic.host/qw4fWF.jpg',
'https://img.nickpic.host/qw42je.jpg',
'https://img.nickpic.host/qw49tX.jpg',
'https://img.nickpic.host/qw4eeb.jpg',
'https://img.nickpic.host/qw4Jbf.jpg',
'https://img.nickpic.host/qw4LC6.jpg',
'https://img.nickpic.host/qw4PNp.jpg',
'https://img.nickpic.host/qw4ZuA.jpg',
'https://img.nickpic.host/qw4WmY.jpg',
'https://img.nickpic.host/qw4dzG.jpg',
'https://img.nickpic.host/qwDxCJ.jpg',
'https://img.nickpic.host/qwDmtW.jpg',
'https://img.nickpic.host/qwDIlc.jpg',
'https://img.nickpic.host/qw4yWz.jpg',
'https://img.nickpic.host/qwDoe1.jpg',
'https://img.nickpic.host/qwDvrj.jpg',
'https://img.nickpic.host/qwDBNn.jpg',
'https://img.nickpic.host/qwDros.jpg',
'https://img.nickpic.host/qwDsu2.jpg',
'https://img.nickpic.host/qwD3zQ.jpg',
'https://img.nickpic.host/qwDFZx.jpg',
'https://img.nickpic.host/qwDjlN.jpg',
'https://img.nickpic.host/qwDlMO.jpg',
'https://img.nickpic.host/qwD5km.jpg',
'https://img.nickpic.host/qwDcr8.jpg',
'https://img.nickpic.host/qwDgQq.jpg',
'https://img.nickpic.host/qwDqNd.jpg',
'https://img.nickpic.host/qwDAoD.jpg',
'https://img.nickpic.host/qwDEA5.jpg',
'https://img.nickpic.host/qwDOzP.jpg',
'https://img.nickpic.host/qwDhZM.jpg',
'https://img.nickpic.host/qwDC5F.jpg',
'https://img.nickpic.host/qwDQMe.jpg',
'https://img.nickpic.host/qwDUkX.jpg',
'https://img.nickpic.host/qwDisb.jpg',
'https://img.nickpic.host/qwDnQf.jpg',
'https://img.nickpic.host/qwDtV6.jpg',
'https://img.nickpic.host/qwDRpp.jpg',
'https://img.nickpic.host/qwD1AY.jpg',
'https://img.nickpic.host/qwD47A.jpg',
'https://img.nickpic.host/qwDDdG.jpg',
'https://img.nickpic.host/qwDz5z.jpg',
'https://img.nickpic.host/qwD7Rc.jpg',
'https://img.nickpic.host/qwD8kW.jpg',
'https://img.nickpic.host/qwDYs1.jpg',
'https://img.nickpic.host/qwDNVJ.jpg',
'https://img.nickpic.host/qwDHUj.jpg',
'https://img.nickpic.host/qwDfpn.jpg',
'https://img.nickpic.host/qwD0Es.jpg',
'https://img.nickpic.host/qwD272.jpg',
'https://img.nickpic.host/qwD9dQ.jpg',
'https://img.nickpic.host/qwDJRN.jpg',
'https://img.nickpic.host/qwDkSx.jpg',
'https://img.nickpic.host/qwDLJO.jpg',
'https://img.nickpic.host/qwDT3m.jpg',
'https://img.nickpic.host/qwDWU8.jpg',
'https://img.nickpic.host/qwDZfq.jpg',
'https://img.nickpic.host/qwDypd.jpg',
'https://img.nickpic.host/qwwGED.jpg',
'https://img.nickpic.host/qwwI85.jpg',
'https://img.nickpic.host/qwwmdP.jpg',
'https://img.nickpic.host/qwwpSM.jpg',
'https://img.nickpic.host/qwwv1F.jpg',
'https://img.nickpic.host/qwwxJe.jpg',
'https://img.nickpic.host/qwwb3X.jpg',
'https://img.nickpic.host/qwwrXb.jpg',
'https://img.nickpic.host/qwwsff.jpg',
'https://img.nickpic.host/qwwFv6.jpg',
'https://img.nickpic.host/qwwaOp.jpg',
'https://img.nickpic.host/qwwj8Y.jpg',
'https://img.nickpic.host/qwwlyA.jpg',
'https://img.nickpic.host/qwwScG.jpg',
'https://img.nickpic.host/qwwc1z.jpg',
'https://img.nickpic.host/qwwgLc.jpg',
'https://img.nickpic.host/qwwu3W.jpg',
'https://img.nickpic.host/qwwAX1.jpg',
'https://img.nickpic.host/qwwE0j.jpg',
'https://img.nickpic.host/qwwhvJ.jpg',
'https://img.nickpic.host/qww6On.jpg',
'https://img.nickpic.host/qwwCKs.jpg',
'https://img.nickpic.host/qwwQy2.jpg',
'https://img.nickpic.host/qwwXcQ.jpg',
'https://img.nickpic.host/qwwi4x.jpg',
'https://img.nickpic.host/qwwMFO.jpg',
'https://img.nickpic.host/qwwnLN.jpg',
'https://img.nickpic.host/qwwRim.jpg',
'https://img.nickpic.host/qww108.jpg',
'https://img.nickpic.host/qwwDxq.jpg',
'https://img.nickpic.host/qwwwOd.jpg',
'https://img.nickpic.host/qww8G5.jpg',
'https://img.nickpic.host/qwwzKD.jpg',
'https://img.nickpic.host/qwwKcP.jpg',
'https://img.nickpic.host/qwwY4M.jpg',
'https://img.nickpic.host/qwwHPF.jpg',
'https://img.nickpic.host/qwwfiX.jpg',
'https://img.nickpic.host/qwwVFe.jpg',
'https://img.nickpic.host/qww02b.jpg',
'https://img.nickpic.host/qww9xf.jpg',
'https://img.nickpic.host/qwweh6.jpg',
'https://img.nickpic.host/qwwkYp.jpg',
'https://img.nickpic.host/qwwLGY.jpg',
'https://img.nickpic.host/qwwPgA.jpg',
'https://img.nickpic.host/qwwTDG.jpg',
'https://img.nickpic.host/qwwdac.jpg',
'https://img.nickpic.host/qwwWPz.jpg',
'https://img.nickpic.host/qwwyiW.jpg',
'https://img.nickpic.host/qwzmBj.jpg',
'https://img.nickpic.host/qwzG21.jpg',
'https://img.nickpic.host/qwzohJ.jpg',
'https://img.nickpic.host/qwzpYn.jpg',
'https://img.nickpic.host/qwzxIs.jpg',
'https://img.nickpic.host/qwzBg2.jpg',
'https://img.nickpic.host/qwzbDQ.jpg',
'https://img.nickpic.host/qwzrTx.jpg',
'https://img.nickpic.host/qwz3aN.jpg',
'https://img.nickpic.host/qwzFnO.jpg',
'https://img.nickpic.host/qwza9m.jpg',
'https://img.nickpic.host/qwzlB8.jpg',
'https://img.nickpic.host/qwz56q.jpg',
'https://img.nickpic.host/qwzSYd.jpg',
'https://img.nickpic.host/qwzgID.jpg',
'https://img.nickpic.host/qwzqq5.jpg',
'https://img.nickpic.host/qwzOjF.jpg',
'https://img.nickpic.host/qwzuDP.jpg',
'https://img.nickpic.host/qwzhne.jpg',
'https://img.nickpic.host/qwzATM.jpg',
'https://img.nickpic.host/qwzQbb.jpg',
'https://img.nickpic.host/qwz69X.jpg',
'https://img.nickpic.host/qwzU6f.jpg',
'https://img.nickpic.host/qwzXH6.jpg',
'https://img.nickpic.host/qwznmp.jpg',
'https://img.nickpic.host/qwztqY.jpg',
'https://img.nickpic.host/qwzMwA.jpg',
'https://img.nickpic.host/qwzRWG.jpg',
'https://img.nickpic.host/qwz4jz.jpg',
'https://img.nickpic.host/qwzDtc.jpg',
'https://img.nickpic.host/qwz7b1.jpg',
'https://img.nickpic.host/qwzw9W.jpg',
'https://img.nickpic.host/qwz8Cj.jpg',
'https://img.nickpic.host/qwzHmn.jpg',
'https://img.nickpic.host/qwzKHJ.jpg',
'https://img.nickpic.host/qwzNus.jpg',
'https://img.nickpic.host/qwzVw2.jpg',
'https://img.nickpic.host/qwzfWQ.jpg',
'https://img.nickpic.host/qwz2lx.jpg',
'https://img.nickpic.host/qwz9tN.jpg',
'https://img.nickpic.host/qwzeeO.jpg',
'https://img.nickpic.host/qwzJrm.jpg',
'https://img.nickpic.host/qwzLC8.jpg',
'https://img.nickpic.host/qwzPNq.jpg',
'https://img.nickpic.host/qwzWmd.jpg',
'https://img.nickpic.host/qwzZuD.jpg',
'https://img.nickpic.host/qwzdz5.jpg',
'https://img.nickpic.host/qwzyWP.jpg',
'https://img.nickpic.host/qw7IlM.jpg',
'https://img.nickpic.host/qw7mMF.jpg',
'https://img.nickpic.host/qw7oee.jpg',
'https://img.nickpic.host/qw7vrX.jpg',
'https://img.nickpic.host/qw7xQb.jpg',
'https://img.nickpic.host/qw7BNf.jpg',
'https://img.nickpic.host/qw7ro6.jpg',
'https://img.nickpic.host/qw7sAp.jpg',
'https://img.nickpic.host/qw73zY.jpg',
'https://img.nickpic.host/qw7FZA.jpg',
'https://img.nickpic.host/qw7j5G.jpg',
'https://img.nickpic.host/qw7lMz.jpg',
'https://img.nickpic.host/qw75kc.jpg',
'https://img.nickpic.host/qw7crW.jpg',
'https://img.nickpic.host/qw7gQ1.jpg',
'https://img.nickpic.host/qw7AoJ.jpg',
'https://img.nickpic.host/qw7qVj.jpg',
'https://img.nickpic.host/qw7EAn.jpg',
'https://img.nickpic.host/qw7O7s.jpg',
'https://img.nickpic.host/qw7hZ2.jpg',
'https://img.nickpic.host/qw7C5Q.jpg',
'https://img.nickpic.host/qw7QRx.jpg',
'https://img.nickpic.host/qw7UkN.jpg',
'https://img.nickpic.host/qw7isO.jpg',
'https://img.nickpic.host/qw7nUm.jpg',
'https://img.nickpic.host/qw7tV8.jpg',
'https://img.nickpic.host/qw7Rpq.jpg',
'https://img.nickpic.host/qw71Ad.jpg',
'https://img.nickpic.host/qw747D.jpg',
'https://img.nickpic.host/qw7Dd5.jpg',
'https://img.nickpic.host/qw7z5P.jpg',
'https://img.nickpic.host/qw77RM.jpg',
'https://img.nickpic.host/qw78JF.jpg',
'https://img.nickpic.host/qw7Yse.jpg',
'https://img.nickpic.host/qw7HUX.jpg',
'https://img.nickpic.host/qw7Nfb.jpg',
'https://img.nickpic.host/qw7fpf.jpg',
'https://img.nickpic.host/qw728p.jpg',
'https://img.nickpic.host/qw79dY.jpg',
'https://img.nickpic.host/qw7kSA.jpg',
'https://img.nickpic.host/qw7LJz.jpg',
'https://img.nickpic.host/qw7J1G.jpg',
'https://img.nickpic.host/qw7T3c.jpg',
'https://img.nickpic.host/qw7WUW.jpg',
'https://img.nickpic.host/qw7Zf1.jpg',
'https://img.nickpic.host/qw7yvj.jpg',
'https://img.nickpic.host/qw8GEJ.jpg',
'https://img.nickpic.host/qw8I8n.jpg',
'https://img.nickpic.host/qw8mys.jpg',
'https://img.nickpic.host/qw8pS2.jpg',
'https://img.nickpic.host/qw8v1Q.jpg',
'https://img.nickpic.host/qw8xLx.jpg',
'https://img.nickpic.host/qw8b3N.jpg',
'https://img.nickpic.host/qw8rXO.jpg',
'https://img.nickpic.host/qw8s0m.jpg',
'https://img.nickpic.host/qw8Fv8.jpg',
'https://img.nickpic.host/qw8aOq.jpg',
'https://img.nickpic.host/qw8j8d.jpg',
'https://img.nickpic.host/qw8lyD.jpg',
'https://img.nickpic.host/qw8Sc5.jpg',
'https://img.nickpic.host/qw8c1P.jpg',
'https://img.nickpic.host/qw8gLM.jpg',
'https://img.nickpic.host/qw8uFF.jpg',
'https://img.nickpic.host/qw8AXe.jpg',
'https://img.nickpic.host/qw8E0X.jpg',
'https://img.nickpic.host/qw8hxb.jpg',
'https://img.nickpic.host/qw86Of.jpg',
'https://img.nickpic.host/qw8CK6.jpg',
'https://img.nickpic.host/qw8UGp.jpg',
'https://img.nickpic.host/qw8XcY.jpg',
'https://img.nickpic.host/qw8i4A.jpg',
'https://img.nickpic.host/qw8nPG.jpg',
'https://img.nickpic.host/qw8MFz.jpg',
'https://img.nickpic.host/qw8Ric.jpg',
'https://img.nickpic.host/qw8Dx1.jpg',
'https://img.nickpic.host/qw810W.jpg',
'https://img.nickpic.host/qw8whj.jpg',
'https://img.nickpic.host/qw88Gn.jpg',
'https://img.nickpic.host/qw8zKJ.jpg',
'https://img.nickpic.host/qw8Kgs.jpg',
'https://img.nickpic.host/qw8HPQ.jpg',
'https://img.nickpic.host/qw8Y42.jpg',
'https://img.nickpic.host/qw8Vax.jpg',
'https://img.nickpic.host/qw8fiN.jpg',
'https://img.nickpic.host/qw802O.jpg',
'https://img.nickpic.host/qw8eh8.jpg',
'https://img.nickpic.host/qw8kYq.jpg',
'https://img.nickpic.host/qw8LGd.jpg',
'https://img.nickpic.host/qw8PgD.jpg',
'https://img.nickpic.host/qw8TD5.jpg',
'https://img.nickpic.host/qw8WPP.jpg',
'https://img.nickpic.host/qw8daM.jpg',
'https://img.nickpic.host/qw8ynF.jpg',
'https://img.nickpic.host/qwKG2e.jpg',
'https://img.nickpic.host/qwKmBX.jpg',
'https://img.nickpic.host/qwKpYf.jpg',
'https://img.nickpic.host/qwKxI6.jpg',
'https://img.nickpic.host/qwKBqp.jpg',
'https://img.nickpic.host/qwKbDY.jpg',
'https://img.nickpic.host/qwKrTA.jpg',
'https://img.nickpic.host/qwK3jG.jpg',
'https://img.nickpic.host/qwKFnz.jpg',
'https://img.nickpic.host/qwKa9c.jpg',
'https://img.nickpic.host/qwKlBW.jpg',
'https://img.nickpic.host/qwK561.jpg',
'https://img.nickpic.host/qwKSHj.jpg',
'https://img.nickpic.host/qwKgIJ.jpg',
'https://img.nickpic.host/qwKqqn.jpg',
'https://img.nickpic.host/qwKuws.jpg',
'https://img.nickpic.host/qwKAT2.jpg',
'https://img.nickpic.host/qwKOjQ.jpg',
'https://img.nickpic.host/qwKhtx.jpg',
'https://img.nickpic.host/qwK69N.jpg',
'https://img.nickpic.host/qwKQbO.jpg',
'https://img.nickpic.host/qwKUCm.jpg',
'https://img.nickpic.host/qwKXH8.jpg',
'https://img.nickpic.host/qwKnmq.jpg',
'https://img.nickpic.host/qwKtqd.jpg',
'https://img.nickpic.host/qwKMwD.jpg',
'https://img.nickpic.host/qwKRW5.jpg',
'https://img.nickpic.host/qwK4jP.jpg',
'https://img.nickpic.host/qwKDtM.jpg',
'https://img.nickpic.host/qwKweF.jpg',
'https://img.nickpic.host/qwK7be.jpg',
'https://img.nickpic.host/qwK8CX.jpg',
'https://img.nickpic.host/qwKKNb.jpg',
'https://img.nickpic.host/qwKHmf.jpg',
'https://img.nickpic.host/qwKNu6.jpg',
'https://img.nickpic.host/qwKVzp.jpg',
'https://img.nickpic.host/qwKfWY.jpg',
'https://img.nickpic.host/qwK2lA.jpg',
'https://img.nickpic.host/qwK9MG.jpg',
'https://img.nickpic.host/qwKeez.jpg',
'https://img.nickpic.host/qwKJrc.jpg',
'https://img.nickpic.host/qwKLCW.jpg',
'https://img.nickpic.host/qwKPN1.jpg',
'https://img.nickpic.host/qwKWoj.jpg',
'https://img.nickpic.host/qwKZuJ.jpg',
'https://img.nickpic.host/qwKdzn.jpg',
'https://img.nickpic.host/qwKyZs.jpg',
'https://img.nickpic.host/qwYIl2.jpg',
'https://img.nickpic.host/qwYmMQ.jpg',
'https://img.nickpic.host/qwYokx.jpg',
'https://img.nickpic.host/qwYvrN.jpg',
'https://img.nickpic.host/qwYxQO.jpg',
'https://img.nickpic.host/qwYBVm.jpg',
'https://img.nickpic.host/qwYro8.jpg',
'https://img.nickpic.host/qwYsAq.jpg',
'https://img.nickpic.host/qwY3zd.jpg',
'https://img.nickpic.host/qwYFZD.jpg',
'https://img.nickpic.host/qwYj55.jpg',
'https://img.nickpic.host/qwYlMP.jpg',
'https://img.nickpic.host/qwY5kM.jpg',
'https://img.nickpic.host/qwYcsF.jpg',
'https://img.nickpic.host/qwYgQe.jpg',
'https://img.nickpic.host/qwYqVX.jpg',
'https://img.nickpic.host/qwYEAf.jpg',
'https://img.nickpic.host/qwYApb.jpg',
'https://img.nickpic.host/qwYO76.jpg',
'https://img.nickpic.host/qwYhdp.jpg',
'https://img.nickpic.host/qwYC5Y.jpg',
'https://img.nickpic.host/qwYQRA.jpg',
'https://img.nickpic.host/qwYUJG.jpg',
'https://img.nickpic.host/qwYisz.jpg',
'https://img.nickpic.host/qwYnUc.jpg',
'https://img.nickpic.host/qwYtVW.jpg',
'https://img.nickpic.host/qwYRp1.jpg',
'https://img.nickpic.host/qwY1Ej.jpg',
'https://img.nickpic.host/qwY47J.jpg',
'https://img.nickpic.host/qwYDdn.jpg',
'https://img.nickpic.host/qwYzSs.jpg',
'https://img.nickpic.host/qwY7R2.jpg',
'https://img.nickpic.host/qwY8JQ.jpg',
'https://img.nickpic.host/qwYY3x.jpg',
'https://img.nickpic.host/qwYHUN.jpg',
'https://img.nickpic.host/qwYNfO.jpg',
'https://img.nickpic.host/qwY0E8.jpg',
'https://img.nickpic.host/qwY28q.jpg',
'https://img.nickpic.host/qwYfvm.jpg',
'https://img.nickpic.host/qwY9dd.jpg',
'https://img.nickpic.host/qwYkSD.jpg',
'https://img.nickpic.host/qwYJ15.jpg',
'https://img.nickpic.host/qwYLJP.jpg',
'https://img.nickpic.host/qwYT3M.jpg',
'https://img.nickpic.host/qwYWXF.jpg',
'https://img.nickpic.host/qwYZfe.jpg',
'https://img.nickpic.host/qwYyvX.jpg',
'https://img.nickpic.host/qwHGOb.jpg',
'https://img.nickpic.host/qwHI8f.jpg',
'https://img.nickpic.host/qwHpcp.jpg',
'https://img.nickpic.host/qwHmy6.jpg',
'https://img.nickpic.host/qwHv1Y.jpg',
'https://img.nickpic.host/qwHxLA.jpg',
'https://img.nickpic.host/qwHbFG.jpg',
'https://img.nickpic.host/qwHrXz.jpg',
'https://img.nickpic.host/qwHFvW.jpg',
'https://img.nickpic.host/qwHs0c.jpg',
'https://img.nickpic.host/qwHaO1.jpg',
'https://img.nickpic.host/qwHjKj.jpg',
'https://img.nickpic.host/qwHlyJ.jpg',
'https://img.nickpic.host/qwHScn.jpg',
'https://img.nickpic.host/qwHc4s.jpg',
'https://img.nickpic.host/qwHgL2.jpg',
'https://img.nickpic.host/qwHAix.jpg',
'https://img.nickpic.host/qwHuFQ.jpg',
'https://img.nickpic.host/qwHE0N.jpg',
'https://img.nickpic.host/qwHhxO.jpg',
'https://img.nickpic.host/qwH6hm.jpg',
'https://img.nickpic.host/qwHCK8.jpg',
'https://img.nickpic.host/qwHUGq.jpg',
'https://img.nickpic.host/qwHXcd.jpg',
'https://img.nickpic.host/qwHi4D.jpg',
'https://img.nickpic.host/qwHnP5.jpg',
'https://img.nickpic.host/qwHMFP.jpg',
'https://img.nickpic.host/qwHRiM.jpg',
'https://img.nickpic.host/qwH12F.jpg',
'https://img.nickpic.host/qwHDxe.jpg',
'https://img.nickpic.host/qwHwhX.jpg',
'https://img.nickpic.host/qwHzYb.jpg',
'https://img.nickpic.host/qwH8Gf.jpg',
'https://img.nickpic.host/qwHKg6.jpg',
'https://img.nickpic.host/qwHYDp.jpg',
'https://img.nickpic.host/qwHHPY.jpg',
'https://img.nickpic.host/qwHVaA.jpg',
'https://img.nickpic.host/qwHfnG.jpg',
'https://img.nickpic.host/qwH02z.jpg',
'https://img.nickpic.host/qwH9Bc.jpg',
'https://img.nickpic.host/qwHehW.jpg',
'https://img.nickpic.host/qwHkY1.jpg',
'https://img.nickpic.host/qwHLIj.jpg',
'https://img.nickpic.host/qwHPgJ.jpg',
'https://img.nickpic.host/qwHTDn.jpg',
'https://img.nickpic.host/qwHWTs.jpg',
'https://img.nickpic.host/qwHda2.jpg',
'https://img.nickpic.host/qwHynQ.jpg',
'https://img.nickpic.host/qwNG9x.jpg',
'https://img.nickpic.host/qwNmBN.jpg',
'https://img.nickpic.host/qwNo6O.jpg',
'https://img.nickpic.host/qwNpHm.jpg',
'https://img.nickpic.host/qwNxI8.jpg',
'https://img.nickpic.host/qwNBqq.jpg',
'https://img.nickpic.host/qwNbDd.jpg',
'https://img.nickpic.host/qwNrTD.jpg',
'https://img.nickpic.host/qwN3j5.jpg',
'https://img.nickpic.host/qwNa9M.jpg',
'https://img.nickpic.host/qwN56e.jpg',
'https://img.nickpic.host/qwNgmb.jpg',
'https://img.nickpic.host/qwNqqf.jpg',
'https://img.nickpic.host/qwNuw6.jpg',
'https://img.nickpic.host/qwNAWp.jpg',
'https://img.nickpic.host/qwNOjY.jpg',
'https://img.nickpic.host/qwNhtA.jpg',
'https://img.nickpic.host/qwN6eG.jpg',
'https://img.nickpic.host/qwNQbz.jpg',
'https://img.nickpic.host/qwNUCc.jpg',
'https://img.nickpic.host/qwNXHW.jpg',
'https://img.nickpic.host/qwNnm1.jpg',
'https://img.nickpic.host/qwNtuj.jpg',
'https://img.nickpic.host/qwNMwJ.jpg',
'https://img.nickpic.host/qwNRWn.jpg',
'https://img.nickpic.host/qwN4ls.jpg',
'https://img.nickpic.host/qwNDt2.jpg',
'https://img.nickpic.host/qwNweQ.jpg',
'https://img.nickpic.host/qwN8CN.jpg',
'https://img.nickpic.host/qwN7rx.jpg',
'https://img.nickpic.host/qwNKNO.jpg',
'https://img.nickpic.host/qwNHom.jpg',
'https://img.nickpic.host/qwNNu8.jpg',
'https://img.nickpic.host/qwNVzq.jpg',
'https://img.nickpic.host/qwNfWd.jpg',
'https://img.nickpic.host/qwN2lD.jpg',
'https://img.nickpic.host/qwNeeP.jpg',
'https://img.nickpic.host/qwN9M5.jpg',
'https://img.nickpic.host/qwNJrM.jpg',
'https://img.nickpic.host/qwNLQF.jpg',
'https://img.nickpic.host/qwNPNe.jpg',
'https://img.nickpic.host/qwNWoX.jpg',
'https://img.nickpic.host/qwNZAb.jpg',
'https://img.nickpic.host/qwNdzf.jpg',
'https://img.nickpic.host/qwNyZ6.jpg',
'https://img.nickpic.host/qwVI5p.jpg',
'https://img.nickpic.host/qwVmMY.jpg',
'https://img.nickpic.host/qwVokA.jpg',
'https://img.nickpic.host/qwVvsG.jpg',
'https://img.nickpic.host/qwVxQz.jpg',
'https://img.nickpic.host/qwVBVc.jpg',
'https://img.nickpic.host/qwVroW.jpg',
'https://img.nickpic.host/qwVsA1.jpg',
'https://img.nickpic.host/qwV37j.jpg',
'https://img.nickpic.host/qwVFZJ.jpg',
'https://img.nickpic.host/qwVj5n.jpg',
'https://img.nickpic.host/qwVlRs.jpg',
'https://img.nickpic.host/qwV5k2.jpg',
'https://img.nickpic.host/qwVcsQ.jpg',
'https://img.nickpic.host/qwVqVN.jpg',
'https://img.nickpic.host/qwVgUx.jpg',
'https://img.nickpic.host/qwVEEm.jpg',
'https://img.nickpic.host/qwVhdq.jpg',
'https://img.nickpic.host/qwVisP.jpg',
'https://img.nickpic.host/qwVnUM.jpg',
'https://img.nickpic.host/qwVtfF.jpg',
'https://img.nickpic.host/qwVRpe.jpg',
'https://img.nickpic.host/qwV1EX.jpg',
'https://img.nickpic.host/qwV48b.jpg',
'https://img.nickpic.host/qwVDdf.jpg',
'https://img.nickpic.host/qwVzS6.jpg',
'https://img.nickpic.host/qwV71p.jpg',
'https://img.nickpic.host/qwV8JY.jpg',
'https://img.nickpic.host/qwVY3A.jpg',
'https://img.nickpic.host/qwVHXG.jpg',
'https://img.nickpic.host/qwVNfz.jpg',
'https://img.nickpic.host/qwVfvc.jpg',
'https://img.nickpic.host/qwV0EW.jpg',
'https://img.nickpic.host/qwV281.jpg',
'https://img.nickpic.host/qwV9yj.jpg',
'https://img.nickpic.host/qwVJ1n.jpg',
'https://img.nickpic.host/qwVkSJ.jpg',
'https://img.nickpic.host/qwVLLs.jpg',
'https://img.nickpic.host/qwVWXQ.jpg',
'https://img.nickpic.host/qwVT32.jpg',
'https://img.nickpic.host/qwVZ0x.jpg',
'https://img.nickpic.host/qwVyvN.jpg',
'https://img.nickpic.host/qwfGOO.jpg',
'https://img.nickpic.host/qwfIKm.jpg',
'https://img.nickpic.host/qwfmy8.jpg',
'https://img.nickpic.host/qwfpcq.jpg',
'https://img.nickpic.host/qwfxLD.jpg',
'https://img.nickpic.host/qwfv1d.jpg',
'https://img.nickpic.host/qwfbF5.jpg',
'https://img.nickpic.host/qwfrXP.jpg',
'https://img.nickpic.host/qwfs0M.jpg',
'https://img.nickpic.host/qwfFxF.jpg',
'https://img.nickpic.host/qwfaOe.jpg',
'https://img.nickpic.host/qwfjKX.jpg',
'https://img.nickpic.host/qwf5Gb.jpg',
'https://img.nickpic.host/qwfc46.jpg',
'https://img.nickpic.host/qwfuFY.jpg',
'https://img.nickpic.host/qwfgPp.jpg',
'https://img.nickpic.host/qwfE2G.jpg',
'https://img.nickpic.host/qwfAiA.jpg',
'https://img.nickpic.host/qwfhxz.jpg',
'https://img.nickpic.host/qwf6hc.jpg',
'https://img.nickpic.host/qwfCKW.jpg',
'https://img.nickpic.host/qwfUG1.jpg',
'https://img.nickpic.host/qwfXgj.jpg',
'https://img.nickpic.host/qwfi4J.jpg',
'https://img.nickpic.host/qwfnPn.jpg',
'https://img.nickpic.host/qwfMas.jpg',
'https://img.nickpic.host/qwfRi2.jpg',
'https://img.nickpic.host/qwf12Q.jpg',
'https://img.nickpic.host/qwfDBx.jpg',
'https://img.nickpic.host/qwfwhN.jpg',
'https://img.nickpic.host/qwfzYO.jpg',
'https://img.nickpic.host/qwf8Im.jpg',
'https://img.nickpic.host/qwfKg8.jpg',
'https://img.nickpic.host/qwfYDq.jpg',
'https://img.nickpic.host/qwfHPd.jpg',
'https://img.nickpic.host/qwfVaD.jpg',
'https://img.nickpic.host/qwffn5.jpg',
'https://img.nickpic.host/qwf02P.jpg',
'https://img.nickpic.host/qwf9BM.jpg',
'https://img.nickpic.host/qwfe6F.jpg',
'https://img.nickpic.host/qwfkYe.jpg',
'https://img.nickpic.host/qwfPqb.jpg',
'https://img.nickpic.host/qwfLIX.jpg',
'https://img.nickpic.host/qwfTDf.jpg',
'https://img.nickpic.host/qwfWT6.jpg',
'https://img.nickpic.host/qwfdjp.jpg',
'https://img.nickpic.host/qwfynY.jpg',
'https://img.nickpic.host/qw0G9A.jpg',
'https://img.nickpic.host/qw0mbG.jpg',
'https://img.nickpic.host/qw0o6z.jpg',
'https://img.nickpic.host/qw0pHc.jpg',
'https://img.nickpic.host/qw0xIW.jpg',
'https://img.nickpic.host/qw0Bq1.jpg',
'https://img.nickpic.host/qw0bwj.jpg',
'https://img.nickpic.host/qw0rTJ.jpg',
'https://img.nickpic.host/qw03jn.jpg',
'https://img.nickpic.host/qw0Fts.jpg',
'https://img.nickpic.host/qw0a92.jpg',
'https://img.nickpic.host/qw0lbQ.jpg',
'https://img.nickpic.host/qw05Cx.jpg',
'https://img.nickpic.host/qw0SHN.jpg',
'https://img.nickpic.host/qw0gmO.jpg',
'https://img.nickpic.host/qw0uw8.jpg',
'https://img.nickpic.host/qw0qum.jpg',
'https://img.nickpic.host/qw0AWq.jpg',
'https://img.nickpic.host/qw0Ojd.jpg',
'https://img.nickpic.host/qw0htD.jpg',
'https://img.nickpic.host/qw06e5.jpg',
'https://img.nickpic.host/qw0QbP.jpg',
'https://img.nickpic.host/qw0UCM.jpg',
'https://img.nickpic.host/qw0XNF.jpg',
'https://img.nickpic.host/qw0Mzb.jpg',
'https://img.nickpic.host/qw0tuX.jpg',
'https://img.nickpic.host/qw0nme.jpg',
'https://img.nickpic.host/qw0RWf.jpg',
'https://img.nickpic.host/qw04l6.jpg',
'https://img.nickpic.host/qw0DMp.jpg',
'https://img.nickpic.host/qw0weY.jpg',
'https://img.nickpic.host/qw07rA.jpg',
'https://img.nickpic.host/qw0KNz.jpg',
'https://img.nickpic.host/qw08QG.jpg',
'https://img.nickpic.host/qw0Hoc.jpg',
'https://img.nickpic.host/qw0NuW.jpg',
'https://img.nickpic.host/qw0Vz1.jpg',
'https://img.nickpic.host/qw0fZj.jpg',
'https://img.nickpic.host/qw02lJ.jpg',
'https://img.nickpic.host/qw09Mn.jpg',
'https://img.nickpic.host/qw0eks.jpg',
'https://img.nickpic.host/qw0Jr2.jpg',
'https://img.nickpic.host/qw0LQQ.jpg',
'https://img.nickpic.host/qw0PVx.jpg',
'https://img.nickpic.host/qw0WoN.jpg',
'https://img.nickpic.host/qw0ZAO.jpg',
'https://img.nickpic.host/qw0d7m.jpg',
'https://img.nickpic.host/qw0yZ8.jpg',
'https://img.nickpic.host/qw2I5q.jpg',
'https://img.nickpic.host/qw2mMd.jpg',
'https://img.nickpic.host/qw2okD.jpg',
'https://img.nickpic.host/qw2vs5.jpg',
'https://img.nickpic.host/qw2xQP.jpg',
'https://img.nickpic.host/qw2BVM.jpg',
'https://img.nickpic.host/qw2rpF.jpg',
'https://img.nickpic.host/qw2sAe.jpg',
'https://img.nickpic.host/qw237X.jpg',
'https://img.nickpic.host/qw2Fdb.jpg',
'https://img.nickpic.host/qw2j5f.jpg',
'https://img.nickpic.host/qw2lR6.jpg',
'https://img.nickpic.host/qw25Jp.jpg',
'https://img.nickpic.host/qw2csY.jpg',
'https://img.nickpic.host/qw2gUA.jpg',
'https://img.nickpic.host/qw2qfG.jpg',
'https://img.nickpic.host/qw2Apz.jpg',
'https://img.nickpic.host/qw2O7W.jpg',
'https://img.nickpic.host/qw2EEc.jpg',
'https://img.nickpic.host/qw2hd1.jpg',
'https://img.nickpic.host/qw2CSj.jpg',
'https://img.nickpic.host/qw2QRJ.jpg',
'https://img.nickpic.host/qw2UJn.jpg',
'https://img.nickpic.host/qw2i3s.jpg',
'https://img.nickpic.host/qw2nU2.jpg',
'https://img.nickpic.host/qw2tfQ.jpg',
'https://img.nickpic.host/qw2Rvx.jpg',
'https://img.nickpic.host/qw21EN.jpg',
'https://img.nickpic.host/qw248O.jpg',
'https://img.nickpic.host/qw2Dym.jpg',
'https://img.nickpic.host/qw2zS8.jpg',
'https://img.nickpic.host/qw271q.jpg',
'https://img.nickpic.host/qw28Jd.jpg',
'https://img.nickpic.host/qw2Y3D.jpg',
'https://img.nickpic.host/qw2HX5.jpg',
'https://img.nickpic.host/qw2NfP.jpg',
'https://img.nickpic.host/qw2fvM.jpg',
'https://img.nickpic.host/qw20OF.jpg',
'https://img.nickpic.host/qw228e.jpg',
'https://img.nickpic.host/qw29yX.jpg',
'https://img.nickpic.host/qw2kcb.jpg',
'https://img.nickpic.host/qw2J1f.jpg',
'https://img.nickpic.host/qw2LL6.jpg',
'https://img.nickpic.host/qw2TFp.jpg',
'https://img.nickpic.host/qw2WXY.jpg',
'https://img.nickpic.host/qw2Z0A.jpg',
'https://img.nickpic.host/qw2yxG.jpg',
'https://img.nickpic.host/qw9IKc.jpg',
'https://img.nickpic.host/qw9GOz.jpg',
'https://img.nickpic.host/qw9myW.jpg',
'https://img.nickpic.host/qw9pc1.jpg',
'https://img.nickpic.host/qw9v4j.jpg',
'https://img.nickpic.host/qw9xLJ.jpg',
'https://img.nickpic.host/qw9bFn.jpg',
'https://img.nickpic.host/qw9ris.jpg',
'https://img.nickpic.host/qw9s02.jpg',
'https://img.nickpic.host/qw9FxQ.jpg',
'https://img.nickpic.host/qw9ahx.jpg',
'https://img.nickpic.host/qw9jKN.jpg',
'https://img.nickpic.host/qw95GO.jpg',
'https://img.nickpic.host/qw9Sgm.jpg',
'https://img.nickpic.host/qw9c48.jpg',
'https://img.nickpic.host/qw9gPq.jpg',
'https://img.nickpic.host/qw9uFd.jpg',
'https://img.nickpic.host/qw9AiD.jpg',
'https://img.nickpic.host/qw9E25.jpg',
'https://img.nickpic.host/qw9hxP.jpg',
'https://img.nickpic.host/qw96hM.jpg',
'https://img.nickpic.host/qw9UGe.jpg',
'https://img.nickpic.host/qw9CYF.jpg',
'https://img.nickpic.host/qw9XgX.jpg',
'https://img.nickpic.host/qw9iDb.jpg',
'https://img.nickpic.host/qw9Ma6.jpg',
'https://img.nickpic.host/qw9nPf.jpg',
'https://img.nickpic.host/qw9Rnp.jpg',
'https://img.nickpic.host/qw912Y.jpg',
'https://img.nickpic.host/qw9w6G.jpg',
'https://img.nickpic.host/qw9DBA.jpg',
'https://img.nickpic.host/qw9zYz.jpg',
'https://img.nickpic.host/qw9fnn.jpg',
'https://img.nickpic.host/qw9VaJ.jpg',
'https://img.nickpic.host/qw909s.jpg',
'https://img.nickpic.host/qw9kHx.jpg',
'https://img.nickpic.host/qw99B2.jpg',
'https://img.nickpic.host/qw9e6Q.jpg',
'https://img.nickpic.host/qw9LIN.jpg',
'https://img.nickpic.host/qw9PqO.jpg',
'https://img.nickpic.host/qw9Twm.jpg',
'https://img.nickpic.host/qw9WT8.jpg',
'https://img.nickpic.host/qw9djq.jpg',
'https://img.nickpic.host/qw9ynd.jpg',
'https://img.nickpic.host/qweG9D.jpg',
'https://img.nickpic.host/qwemb5.jpg',
'https://img.nickpic.host/qwepHM.jpg',
'https://img.nickpic.host/qweo6P.jpg',
'https://img.nickpic.host/qwexmF.jpg',
'https://img.nickpic.host/qweBqe.jpg',
'https://img.nickpic.host/qwerWb.jpg',
'https://img.nickpic.host/qwebwX.jpg',
'https://img.nickpic.host/qwe3jf.jpg',
'https://img.nickpic.host/qweFt6.jpg',
'https://img.nickpic.host/qweaep.jpg',
'https://img.nickpic.host/qwelbY.jpg',
'https://img.nickpic.host/qweSNG.jpg',
'https://img.nickpic.host/qwe5CA.jpg',
'https://img.nickpic.host/qwegmz.jpg',
'https://img.nickpic.host/qweuwW.jpg',
'https://img.nickpic.host/qwequc.jpg',
'https://img.nickpic.host/qweAW1.jpg',
'https://img.nickpic.host/qweOlj.jpg',
'https://img.nickpic.host/qwehtJ.jpg',
'https://img.nickpic.host/qwe6en.jpg',
'https://img.nickpic.host/qweQrs.jpg',
'https://img.nickpic.host/qweUC2.jpg',
'https://img.nickpic.host/qweXNQ.jpg',
'https://img.nickpic.host/qwetuN.jpg',
'https://img.nickpic.host/qwenox.jpg',
'https://img.nickpic.host/qweMzO.jpg',
'https://img.nickpic.host/qweRZm.jpg',
'https://img.nickpic.host/qwe4l8.jpg',
'https://img.nickpic.host/qweDMq.jpg',
'https://img.nickpic.host/qwewed.jpg',
'https://img.nickpic.host/qwe7rD.jpg',
'https://img.nickpic.host/qwe8Q5.jpg',
'https://img.nickpic.host/qweKNP.jpg',
'https://img.nickpic.host/qweHoM.jpg',
'https://img.nickpic.host/qweNAF.jpg',
'https://img.nickpic.host/qweVze.jpg',
'https://img.nickpic.host/qwefZX.jpg',
'https://img.nickpic.host/qwe25b.jpg',
'https://img.nickpic.host/qwe9Mf.jpg',
'https://img.nickpic.host/qweek6.jpg',
'https://img.nickpic.host/qweJsp.jpg',
'https://img.nickpic.host/qweLQY.jpg',
'https://img.nickpic.host/qwePVA.jpg',
'https://img.nickpic.host/qweWpG.jpg',
'https://img.nickpic.host/qweZAz.jpg',
'https://img.nickpic.host/qwed7c.jpg',
'https://img.nickpic.host/qweyZW.jpg',
'https://img.nickpic.host/qwkI51.jpg',
'https://img.nickpic.host/qwkmRj.jpg',
'https://img.nickpic.host/qwkokJ.jpg',
'https://img.nickpic.host/qwkvsn.jpg',
'https://img.nickpic.host/qwkxUs.jpg',
'https://img.nickpic.host/qwkBV2.jpg',
'https://img.nickpic.host/qwkrpQ.jpg',
'https://img.nickpic.host/qwksEx.jpg',
'https://img.nickpic.host/qwkFdO.jpg',
'https://img.nickpic.host/qwk37N.jpg',
'https://img.nickpic.host/qwkjSm.jpg',
'https://img.nickpic.host/qwklR8.jpg',
'https://img.nickpic.host/qwk5Jq.jpg',
'https://img.nickpic.host/qwkEEM.jpg',
'https://img.nickpic.host/qwkO8F.jpg',
'https://img.nickpic.host/qwkhde.jpg',
'https://img.nickpic.host/qwkCSX.jpg',
'https://img.nickpic.host/qwkQ1b.jpg',
'https://img.nickpic.host/qwki36.jpg',
'https://img.nickpic.host/qwknXp.jpg',
'https://img.nickpic.host/qwkRvA.jpg',
'https://img.nickpic.host/qwk48z.jpg',
'https://img.nickpic.host/qwkDyc.jpg',
'https://img.nickpic.host/qwkzSW.jpg',
'https://img.nickpic.host/qwk8Lj.jpg',
'https://img.nickpic.host/qwkHXn.jpg',
'https://img.nickpic.host/qwkN0s.jpg',
'https://img.nickpic.host/qwkfv2.jpg',
'https://img.nickpic.host/qwk0OQ.jpg',
'https://img.nickpic.host/qwk2Kx.jpg',
'https://img.nickpic.host/qwk9yN.jpg',
'https://img.nickpic.host/qwkkcO.jpg',
'https://img.nickpic.host/qwkJ4m.jpg',
'https://img.nickpic.host/qwkLL8.jpg',
'https://img.nickpic.host/qwkTFq.jpg',
'https://img.nickpic.host/qwkWXd.jpg',
'https://img.nickpic.host/qwJGOP.jpg',
'https://img.nickpic.host/qwkyx5.jpg',
'https://img.nickpic.host/qwJIKM.jpg',
'https://img.nickpic.host/qwJpce.jpg',
'https://img.nickpic.host/qwJoGF.jpg',
'https://img.nickpic.host/qwJv4X.jpg',
'https://img.nickpic.host/qwJbFf.jpg',
'https://img.nickpic.host/qwJxPb.jpg',
'https://img.nickpic.host/qwJri6.jpg',
'https://img.nickpic.host/qwJs2p.jpg',
'https://img.nickpic.host/qwJFxY.jpg',
'https://img.nickpic.host/qwJjYG.jpg',
'https://img.nickpic.host/qwJahA.jpg',
'https://img.nickpic.host/qwJ5Gz.jpg',
'https://img.nickpic.host/qwJc4W.jpg',
'https://img.nickpic.host/qwJSgc.jpg',
'https://img.nickpic.host/qwJgP1.jpg',
'https://img.nickpic.host/qwJuaj.jpg',
'https://img.nickpic.host/qwJAiJ.jpg',
'https://img.nickpic.host/qwJE2n.jpg',
'https://img.nickpic.host/qwJhBs.jpg',
'https://img.nickpic.host/qwJCYQ.jpg',
'https://img.nickpic.host/qwJ6h2.jpg',
'https://img.nickpic.host/qwJUIx.jpg',
'https://img.nickpic.host/qwJXgN.jpg',
'https://img.nickpic.host/qwJiDO.jpg',
'https://img.nickpic.host/qwJnTm.jpg',
'https://img.nickpic.host/qwJMa8.jpg',
'https://img.nickpic.host/qwJ12d.jpg',
'https://img.nickpic.host/qwJRnq.jpg',
'https://img.nickpic.host/qwJDBD.jpg',
'https://img.nickpic.host/qwJw65.jpg',
'https://img.nickpic.host/qwJzYP.jpg',
'https://img.nickpic.host/qwJKqF.jpg',
'https://img.nickpic.host/qwJ8IM.jpg',
'https://img.nickpic.host/qwJYDe.jpg',
'https://img.nickpic.host/qwJHTX.jpg',
'https://img.nickpic.host/qwJVjb.jpg',
'https://img.nickpic.host/qwJfnf.jpg',
'https://img.nickpic.host/qwJ096.jpg',
'https://img.nickpic.host/qwJ9bp.jpg',
'https://img.nickpic.host/qwJe6Y.jpg',
'https://img.nickpic.host/qwJkHA.jpg',
'https://img.nickpic.host/qwJLmG.jpg',
'https://img.nickpic.host/qwJPqz.jpg',
'https://img.nickpic.host/qwJTwc.jpg',
'https://img.nickpic.host/qwJWTW.jpg',
'https://img.nickpic.host/qwJdj1.jpg',
'https://img.nickpic.host/qwJytj.jpg',
'https://img.nickpic.host/qwLG9J.jpg',
'https://img.nickpic.host/qwLmbn.jpg',
'https://img.nickpic.host/qwLoCs.jpg',
'https://img.nickpic.host/qwLpH2.jpg',
'https://img.nickpic.host/qwLxmQ.jpg',
'https://img.nickpic.host/qwLBux.jpg',
'https://img.nickpic.host/qwLbwN.jpg',
'https://img.nickpic.host/qwLrWO.jpg',
'https://img.nickpic.host/qwL3lm.jpg',
'https://img.nickpic.host/qwLFt8.jpg',
'https://img.nickpic.host/qwLaeq.jpg',
'https://img.nickpic.host/qwLlbd.jpg',
'https://img.nickpic.host/qwL5CD.jpg',
'https://img.nickpic.host/qwLSN5.jpg',
'https://img.nickpic.host/qwLgmP.jpg',
'https://img.nickpic.host/qwLuzF.jpg',
'https://img.nickpic.host/qwLquM.jpg',
'https://img.nickpic.host/qwLAWe.jpg',
'https://img.nickpic.host/qwLhMb.jpg',
'https://img.nickpic.host/qwLOlX.jpg',
'https://img.nickpic.host/qwL6ef.jpg',
'https://img.nickpic.host/qwLQr6.jpg',
'https://img.nickpic.host/qwLUQp.jpg',
'https://img.nickpic.host/qwLXNY.jpg',
'https://img.nickpic.host/qwLnoA.jpg',
'https://img.nickpic.host/qwLtAG.jpg',
'https://img.nickpic.host/qwLRZc.jpg',
'https://img.nickpic.host/qwLMzz.jpg',
'https://img.nickpic.host/qwLDM1.jpg',
'https://img.nickpic.host/qwL4lW.jpg',
'https://img.nickpic.host/qwLwkj.jpg',
'https://img.nickpic.host/qwL7rJ.jpg',
'https://img.nickpic.host/qwL8Qn.jpg',
'https://img.nickpic.host/qwLKVs.jpg',
'https://img.nickpic.host/qwLHo2.jpg',
'https://img.nickpic.host/qwLNAQ.jpg',
'https://img.nickpic.host/qwLV7x.jpg',
'https://img.nickpic.host/qwLfZN.jpg',
'https://img.nickpic.host/qwL25O.jpg',
'https://img.nickpic.host/qwL9Rm.jpg',
'https://img.nickpic.host/qwLek8.jpg',
'https://img.nickpic.host/qwLLQd.jpg',
'https://img.nickpic.host/qwLJsq.jpg',
'https://img.nickpic.host/qwLPVD.jpg',
'https://img.nickpic.host/qwLWp5.jpg',
'https://img.nickpic.host/qwLZAP.jpg',
'https://img.nickpic.host/qwLd7M.jpg',
'https://img.nickpic.host/qwLydF.jpg',
'https://img.nickpic.host/qwPI5e.jpg',
'https://img.nickpic.host/qwPmRX.jpg',
'https://img.nickpic.host/qwPoJb.jpg',
'https://img.nickpic.host/qwPvsf.jpg',
'https://img.nickpic.host/qwPxU6.jpg',
'https://img.nickpic.host/qwPBfp.jpg',
'https://img.nickpic.host/qwPrpY.jpg',
'https://img.nickpic.host/qwPsEA.jpg',
'https://img.nickpic.host/qwP38G.jpg',
'https://img.nickpic.host/qwPFdz.jpg',
'https://img.nickpic.host/qwPjSc.jpg',
'https://img.nickpic.host/qwPlRW.jpg',
'https://img.nickpic.host/qwPgUJ.jpg',
'https://img.nickpic.host/qwP5J1.jpg',
'https://img.nickpic.host/qwPc3j.jpg',
'https://img.nickpic.host/qwPAvs.jpg',
'https://img.nickpic.host/qwPqfn.jpg',
'https://img.nickpic.host/qwPEE2.jpg',
'https://img.nickpic.host/qwPhyx.jpg',
'https://img.nickpic.host/qwPO8Q.jpg',
'https://img.nickpic.host/qwPCSN.jpg',
'https://img.nickpic.host/qwPULm.jpg',
'https://img.nickpic.host/qwPQ1O.jpg',
'https://img.nickpic.host/qwPi38.jpg',
'https://img.nickpic.host/qwPnXq.jpg',
'https://img.nickpic.host/qwPtfd.jpg',
'https://img.nickpic.host/qwP1O5.jpg',
'https://img.nickpic.host/qwPRvD.jpg',
'https://img.nickpic.host/qwP48P.jpg',
'https://img.nickpic.host/qwPDyM.jpg',
'https://img.nickpic.host/qwPzcF.jpg',
'https://img.nickpic.host/qwP71e.jpg',
'https://img.nickpic.host/qwP8LX.jpg',
'https://img.nickpic.host/qwPYFb.jpg',
'https://img.nickpic.host/qwPN06.jpg',
'https://img.nickpic.host/qwPHXf.jpg',
'https://img.nickpic.host/qwPfxp.jpg',
'https://img.nickpic.host/qwP0OY.jpg',
'https://img.nickpic.host/qwP2KA.jpg',
'https://img.nickpic.host/qwPeGG.jpg',
'https://img.nickpic.host/qwPkcz.jpg',
'https://img.nickpic.host/qwPJ4c.jpg',
'https://img.nickpic.host/qwPLLW.jpg',
'https://img.nickpic.host/qwPTF1.jpg',
'https://img.nickpic.host/qwPWij.jpg',
'https://img.nickpic.host/qwPZ0J.jpg',
'https://img.nickpic.host/qwPyxn.jpg',
'https://img.nickpic.host/qwTIK2.jpg',
'https://img.nickpic.host/qwTGhs.jpg',
'https://img.nickpic.host/qwToGQ.jpg',
'https://img.nickpic.host/qwTpgx.jpg',
'https://img.nickpic.host/qwTv4N.jpg',
'https://img.nickpic.host/qwTxPO.jpg',
'https://img.nickpic.host/qwTbam.jpg',
'https://img.nickpic.host/qwTri8.jpg',
'https://img.nickpic.host/qwTs2q.jpg',
'https://img.nickpic.host/qwTFxd.jpg',
'https://img.nickpic.host/qwTahD.jpg',
'https://img.nickpic.host/qwTjY5.jpg',
'https://img.nickpic.host/qwT5GP.jpg',
'https://img.nickpic.host/qwTSgM.jpg',
'https://img.nickpic.host/qwTcDF.jpg',
'https://img.nickpic.host/qwTgPe.jpg',
'https://img.nickpic.host/qwTuaX.jpg',
'https://img.nickpic.host/qwTAnb.jpg',
'https://img.nickpic.host/qwTE2f.jpg',
'https://img.nickpic.host/qwThB6.jpg',
'https://img.nickpic.host/qwT66p.jpg',
'https://img.nickpic.host/qwTCYY.jpg',
'https://img.nickpic.host/qwTUIA.jpg',
'https://img.nickpic.host/qwTiDz.jpg',
'https://img.nickpic.host/qwTXqG.jpg',
'https://img.nickpic.host/qwTnTc.jpg',
'https://img.nickpic.host/qwTMaW.jpg',
'https://img.nickpic.host/qwTRn1.jpg',
'https://img.nickpic.host/qwT19j.jpg',
'https://img.nickpic.host/qwTDBJ.jpg',
'https://img.nickpic.host/qwTzHs.jpg',
'https://img.nickpic.host/qwTw6n.jpg',
'https://img.nickpic.host/qwT8I2.jpg',
'https://img.nickpic.host/qwTKqQ.jpg',
'https://img.nickpic.host/qwTYwx.jpg',
'https://img.nickpic.host/qwTHTN.jpg',
'https://img.nickpic.host/qwTVjO.jpg',
'https://img.nickpic.host/qwTftm.jpg',
'https://img.nickpic.host/qwT098.jpg',
'https://img.nickpic.host/qwT9bq.jpg',
'https://img.nickpic.host/qwTe6d.jpg',
'https://img.nickpic.host/qwTkHD.jpg',
'https://img.nickpic.host/qwTLm5.jpg',
'https://img.nickpic.host/qwTTwM.jpg',
'https://img.nickpic.host/qwTPqP.jpg',
'https://img.nickpic.host/qwTWWF.jpg',
'https://img.nickpic.host/qwTdje.jpg',
'https://img.nickpic.host/qwTytX.jpg',
'https://img.nickpic.host/qwWGeb.jpg',
'https://img.nickpic.host/qwWmbf.jpg',
'https://img.nickpic.host/qwWoC6.jpg',
'https://img.nickpic.host/qwWpNp.jpg',
'https://img.nickpic.host/qwWxmY.jpg',
'https://img.nickpic.host/qwWBuA.jpg',
'https://img.nickpic.host/qwWbzG.jpg',
'https://img.nickpic.host/qwWrWz.jpg',
'https://img.nickpic.host/qwW3lc.jpg',
'https://img.nickpic.host/qwWFtW.jpg',
'https://img.nickpic.host/qwWae1.jpg',
'https://img.nickpic.host/qwWlrj.jpg',
'https://img.nickpic.host/qwW5CJ.jpg',
'https://img.nickpic.host/qwWgos.jpg',
'https://img.nickpic.host/qwWSNn.jpg',
'https://img.nickpic.host/qwWqu2.jpg',
'https://img.nickpic.host/qwWAZx.jpg',
'https://img.nickpic.host/qwWuzQ.jpg',
'https://img.nickpic.host/qwWhMO.jpg',
'https://img.nickpic.host/qwWOlN.jpg',
'https://img.nickpic.host/qwW6km.jpg',
'https://img.nickpic.host/qwWQr8.jpg',
'https://img.nickpic.host/qwWUQq.jpg',
'https://img.nickpic.host/qwWXNd.jpg',
'https://img.nickpic.host/qwWnoD.jpg',
'https://img.nickpic.host/qwWtA5.jpg',
'https://img.nickpic.host/qwWMzP.jpg',
'https://img.nickpic.host/qwWRZM.jpg',
'https://img.nickpic.host/qwW45F.jpg',
'https://img.nickpic.host/qwWDMe.jpg',
'https://img.nickpic.host/qwWwkX.jpg',
'https://img.nickpic.host/qwW7sb.jpg',
'https://img.nickpic.host/qwW8Qf.jpg',
'https://img.nickpic.host/qwWHpp.jpg',
'https://img.nickpic.host/qwWKV6.jpg',
'https://img.nickpic.host/qwWNAY.jpg',
'https://img.nickpic.host/qwWV7A.jpg',
'https://img.nickpic.host/qwWfdG.jpg',
'https://img.nickpic.host/qwW25z.jpg',
'https://img.nickpic.host/qwW9Rc.jpg',
'https://img.nickpic.host/qwWJs1.jpg',
'https://img.nickpic.host/qwWekW.jpg',
'https://img.nickpic.host/qwWLUj.jpg',
'https://img.nickpic.host/qwWPVJ.jpg',
'https://img.nickpic.host/qwWWpn.jpg',
'https://img.nickpic.host/qwWZEs.jpg',
'https://img.nickpic.host/qwWd72.jpg',
'https://img.nickpic.host/qwWydQ.jpg',
'https://img.nickpic.host/qwZISx.jpg',
'https://img.nickpic.host/qwZmRN.jpg',
'https://img.nickpic.host/qwZoJO.jpg',
'https://img.nickpic.host/qwZv3m.jpg',
'https://img.nickpic.host/qwZxU8.jpg',
'https://img.nickpic.host/qwZBfq.jpg',
'https://img.nickpic.host/qwZrpd.jpg',
'https://img.nickpic.host/qwZsED.jpg',
'https://img.nickpic.host/qwZ385.jpg',
'https://img.nickpic.host/qwZFdP.jpg',
'https://img.nickpic.host/qwZl1F.jpg',
'https://img.nickpic.host/qwZjSM.jpg',
'https://img.nickpic.host/qwZ5Je.jpg',
'https://img.nickpic.host/qwZc3X.jpg',
'https://img.nickpic.host/qwZgXb.jpg',
'https://img.nickpic.host/qwZAv6.jpg',
'https://img.nickpic.host/qwZqff.jpg',
'https://img.nickpic.host/qwZO8Y.jpg',
'https://img.nickpic.host/qwZEOp.jpg',
'https://img.nickpic.host/qwZhyA.jpg',
'https://img.nickpic.host/qwZCcG.jpg',
'https://img.nickpic.host/qwZQ1z.jpg',
'https://img.nickpic.host/qwZULc.jpg',
'https://img.nickpic.host/qwZi3W.jpg',
'https://img.nickpic.host/qwZnX1.jpg',
'https://img.nickpic.host/qwZt0j.jpg',
'https://img.nickpic.host/qwZRvJ.jpg',
'https://img.nickpic.host/qwZ1On.jpg',
'https://img.nickpic.host/qwZDy2.jpg',
'https://img.nickpic.host/qwZ4Ks.jpg',
'https://img.nickpic.host/qwZzcQ.jpg',
'https://img.nickpic.host/qwZ74x.jpg',
'https://img.nickpic.host/qwZ8LN.jpg',
'https://img.nickpic.host/qwZYFO.jpg',
'https://img.nickpic.host/qwZHim.jpg',
'https://img.nickpic.host/qwZN08.jpg',
'https://img.nickpic.host/qwZfxq.jpg',
'https://img.nickpic.host/qwZ0Od.jpg',
'https://img.nickpic.host/qwZ2KD.jpg',
'https://img.nickpic.host/qwZJ4M.jpg',
'https://img.nickpic.host/qwZeG5.jpg',
'https://img.nickpic.host/qwZkcP.jpg',
'https://img.nickpic.host/qwZLPF.jpg',
'https://img.nickpic.host/qwZTFe.jpg',
'https://img.nickpic.host/qwZWiX.jpg',
'https://img.nickpic.host/qwZZ2b.jpg',
'https://img.nickpic.host/qwZyxf.jpg',
'https://img.nickpic.host/qwdGh6.jpg',
'https://img.nickpic.host/qwdIYp.jpg',
'https://img.nickpic.host/qwdoGY.jpg',
'https://img.nickpic.host/qwdvDG.jpg',
'https://img.nickpic.host/qwdpgA.jpg',
'https://img.nickpic.host/qwdxPz.jpg',
'https://img.nickpic.host/qwdriW.jpg',
'https://img.nickpic.host/qwdbac.jpg',
'https://img.nickpic.host/qwds21.jpg',
'https://img.nickpic.host/qwdFBj.jpg',
'https://img.nickpic.host/qwdahJ.jpg',
'https://img.nickpic.host/qwdjYn.jpg',
'https://img.nickpic.host/qwd5Is.jpg',
'https://img.nickpic.host/qwdcDQ.jpg',
'https://img.nickpic.host/qwdSg2.jpg',
'https://img.nickpic.host/qwdgTx.jpg',
'https://img.nickpic.host/qwduaN.jpg',
'https://img.nickpic.host/qwdAnO.jpg',
'https://img.nickpic.host/qwdE9m.jpg',
'https://img.nickpic.host/qwdhB8.jpg',
'https://img.nickpic.host/qwd66q.jpg',
'https://img.nickpic.host/qwdCYd.jpg',
'https://img.nickpic.host/qwdUID.jpg',
'https://img.nickpic.host/qwdXq5.jpg',
'https://img.nickpic.host/qwdiDP.jpg',
'https://img.nickpic.host/qwdnTM.jpg',
'https://img.nickpic.host/qwdMjF.jpg',
'https://img.nickpic.host/qwdRne.jpg',
'https://img.nickpic.host/qwd19X.jpg',
'https://img.nickpic.host/qwdDbb.jpg',
'https://img.nickpic.host/qwdw6f.jpg',
'https://img.nickpic.host/qwdzH6.jpg',
'https://img.nickpic.host/qwd8mp.jpg',
'https://img.nickpic.host/qwdKqY.jpg',
'https://img.nickpic.host/qwdYwA.jpg',
'https://img.nickpic.host/qwdHWG.jpg',
'https://img.nickpic.host/qwdVjz.jpg',
'https://img.nickpic.host/qwdftc.jpg',
'https://img.nickpic.host/qwd09W.jpg',
'https://img.nickpic.host/qwd9b1.jpg',
'https://img.nickpic.host/qwdeCj.jpg',
'https://img.nickpic.host/qwdkHJ.jpg',
'https://img.nickpic.host/qwdLmn.jpg',
'https://img.nickpic.host/qwdPus.jpg',
'https://img.nickpic.host/qwdTw2.jpg',
'https://img.nickpic.host/qwdWWQ.jpg',
'https://img.nickpic.host/qwddlx.jpg',
'https://img.nickpic.host/qwdytN.jpg',
'https://img.nickpic.host/qwyGeO.jpg',
'https://img.nickpic.host/qwymrm.jpg',
'https://img.nickpic.host/qwyoC8.jpg',
'https://img.nickpic.host/qwypNq.jpg',
'https://img.nickpic.host/qwyxmd.jpg',
'https://img.nickpic.host/qwyBuD.jpg',
'https://img.nickpic.host/qwybz5.jpg',
'https://img.nickpic.host/qwyrWP.jpg',
'https://img.nickpic.host/qwy3lM.jpg',
'https://img.nickpic.host/qwyFMF.jpg',
'https://img.nickpic.host/qwylrX.jpg',
'https://img.nickpic.host/qwyaee.jpg',
'https://img.nickpic.host/qwy5Qb.jpg',
'https://img.nickpic.host/qwySNf.jpg',
'https://img.nickpic.host/qwygo6.jpg',
'https://img.nickpic.host/qwyqAp.jpg',
'https://img.nickpic.host/qwyuzY.jpg',
'https://img.nickpic.host/qwyAZA.jpg',
'https://img.nickpic.host/qwyO5G.jpg',
'https://img.nickpic.host/qwyhMz.jpg',
'https://img.nickpic.host/qwy6kc.jpg',
'https://img.nickpic.host/qwyQrW.jpg',
'https://img.nickpic.host/qwyUQ1.jpg',
'https://img.nickpic.host/qwyXVj.jpg',
'https://img.nickpic.host/qwynoJ.jpg',
'https://img.nickpic.host/qwytAn.jpg',
'https://img.nickpic.host/qwyRZ2.jpg',
'https://img.nickpic.host/qwyM7s.jpg',
'https://img.nickpic.host/qwy45Q.jpg',
'https://img.nickpic.host/qwyDRx.jpg',
'https://img.nickpic.host/qwywkN.jpg',
'https://img.nickpic.host/qwy7sO.jpg',
'https://img.nickpic.host/qwy8Um.jpg',
'https://img.nickpic.host/qwyKV8.jpg',
'https://img.nickpic.host/qwyHpq.jpg',
'https://img.nickpic.host/qwyNAd.jpg',
'https://img.nickpic.host/qwyV7D.jpg',
'https://img.nickpic.host/qwyfd5.jpg',
'https://img.nickpic.host/qwy25P.jpg',
'https://img.nickpic.host/qwy9RM.jpg',
'https://img.nickpic.host/qwyeJF.jpg',
'https://img.nickpic.host/qwyJse.jpg',
'https://img.nickpic.host/qwyPfb.jpg',
'https://img.nickpic.host/qwyLUX.jpg',
'https://img.nickpic.host/qwyWpf.jpg',
'https://img.nickpic.host/qwyZE6.jpg',
'https://img.nickpic.host/qwyd8p.jpg',
'https://img.nickpic.host/qwyydY.jpg',
'https://img.nickpic.host/qzGm1G.jpg',
'https://img.nickpic.host/qzGISA.jpg',
'https://img.nickpic.host/qzGoJz.jpg',
'https://img.nickpic.host/qzGv3c.jpg',
'https://img.nickpic.host/qzGxUW.jpg',
'https://img.nickpic.host/qzGBf1.jpg',
'https://img.nickpic.host/qzGrvj.jpg',
'https://img.nickpic.host/qzG38n.jpg',
'https://img.nickpic.host/qzGsEJ.jpg',
'https://img.nickpic.host/qzGjS2.jpg',
'https://img.nickpic.host/qzGFys.jpg',
'https://img.nickpic.host/qzGl1Q.jpg',
'https://img.nickpic.host/qzG5Lx.jpg',
'https://img.nickpic.host/qzGc3N.jpg',
'https://img.nickpic.host/qzGgXO.jpg',
'https://img.nickpic.host/qzGq0m.jpg',
'https://img.nickpic.host/qzGAv8.jpg',
'https://img.nickpic.host/qzGEOq.jpg',
'https://img.nickpic.host/qzGO8d.jpg',
'https://img.nickpic.host/qzGhyD.jpg',
'https://img.nickpic.host/qzGQ1P.jpg',
'https://img.nickpic.host/qzGCc5.jpg',
'https://img.nickpic.host/qzGULM.jpg',
'https://img.nickpic.host/qzGiFF.jpg',
'https://img.nickpic.host/qzGnXe.jpg',
'https://img.nickpic.host/qzGt0X.jpg',
'https://img.nickpic.host/qzG1Of.jpg',
'https://img.nickpic.host/qzGRxb.jpg',
'https://img.nickpic.host/qzG4K6.jpg',
'https://img.nickpic.host/qzGwGp.jpg',
'https://img.nickpic.host/qzGzcY.jpg',
'https://img.nickpic.host/qzG74A.jpg',
'https://img.nickpic.host/qzG8PG.jpg',
'https://img.nickpic.host/qzGYFz.jpg',
'https://img.nickpic.host/qzGHic.jpg',
'https://img.nickpic.host/qzGN0W.jpg',
'https://img.nickpic.host/qzGfx1.jpg',
'https://img.nickpic.host/qzG0hj.jpg',
'https://img.nickpic.host/qzG2KJ.jpg',
'https://img.nickpic.host/qzGeGn.jpg',
'https://img.nickpic.host/qzGkgs.jpg',
'https://img.nickpic.host/qzGJ42.jpg',
'https://img.nickpic.host/qzGLPQ.jpg',
'https://img.nickpic.host/qzGTax.jpg',
'https://img.nickpic.host/qzGZ2O.jpg',
'https://img.nickpic.host/qzGWiN.jpg',
'https://img.nickpic.host/qzGyBm.jpg',
'https://img.nickpic.host/qzIGh8.jpg',
'https://img.nickpic.host/qzIIYq.jpg',
'https://img.nickpic.host/qzIoGd.jpg',
'https://img.nickpic.host/qzIpgD.jpg',
'https://img.nickpic.host/qzIvD5.jpg',
'https://img.nickpic.host/qzIxPP.jpg',
'https://img.nickpic.host/qzIbaM.jpg',
'https://img.nickpic.host/qzIrnF.jpg',
'https://img.nickpic.host/qzIs2e.jpg',
'https://img.nickpic.host/qzIFBX.jpg',
'https://img.nickpic.host/qzIa6b.jpg',
'https://img.nickpic.host/qzI5I6.jpg',
'https://img.nickpic.host/qzIjYf.jpg',
'https://img.nickpic.host/qzISqp.jpg',
'https://img.nickpic.host/qzIcDY.jpg',
'https://img.nickpic.host/qzIgTA.jpg',
'https://img.nickpic.host/qzIujG.jpg',
'https://img.nickpic.host/qzIAnz.jpg',
'https://img.nickpic.host/qzIE9c.jpg',
'https://img.nickpic.host/qzICHj.jpg',
'https://img.nickpic.host/qzIhBW.jpg',
'https://img.nickpic.host/qzI661.jpg',
'https://img.nickpic.host/qzIXqn.jpg',
'https://img.nickpic.host/qzIUIJ.jpg',
'https://img.nickpic.host/qzIiws.jpg',
'https://img.nickpic.host/qzInT2.jpg',
'https://img.nickpic.host/qzIMjQ.jpg',
'https://img.nickpic.host/qzIRtx.jpg',
'https://img.nickpic.host/qzI19N.jpg',
'https://img.nickpic.host/qzIDbO.jpg',
'https://img.nickpic.host/qzIwCm.jpg',
'https://img.nickpic.host/qzIzH8.jpg',
'https://img.nickpic.host/qzIKqd.jpg',
'https://img.nickpic.host/qzI8mq.jpg',
'https://img.nickpic.host/qzIYwD.jpg',
'https://img.nickpic.host/qzIftM.jpg',
'https://img.nickpic.host/qzIHW5.jpg',
'https://img.nickpic.host/qzI0eF.jpg',
'https://img.nickpic.host/qzI9be.jpg',
'https://img.nickpic.host/qzIeCX.jpg',
'https://img.nickpic.host/qzIkNb.jpg',
'https://img.nickpic.host/qzILmf.jpg',
'https://img.nickpic.host/qzIPu6.jpg',
'https://img.nickpic.host/qzITzp.jpg',
'https://img.nickpic.host/qzIWWY.jpg',
'https://img.nickpic.host/qzIdlA.jpg',
'https://img.nickpic.host/qzIyMG.jpg',
'https://img.nickpic.host/qzmGez.jpg',
'https://img.nickpic.host/qzmoCW.jpg',
'https://img.nickpic.host/qzmmrc.jpg',
'https://img.nickpic.host/qzmpN1.jpg',
'https://img.nickpic.host/qzmxoj.jpg',
'https://img.nickpic.host/qzmBuJ.jpg',
'https://img.nickpic.host/qzmbzn.jpg',
'https://img.nickpic.host/qzm3l2.jpg',
'https://img.nickpic.host/qzmrZs.jpg',
'https://img.nickpic.host/qzmFMQ.jpg',
'https://img.nickpic.host/qzmakx.jpg',
'https://img.nickpic.host/qzm5QO.jpg',
'https://img.nickpic.host/qzmSVm.jpg',
'https://img.nickpic.host/qzmgo8.jpg',
'https://img.nickpic.host/qzmqAq.jpg',
'https://img.nickpic.host/qzmuzd.jpg',
'https://img.nickpic.host/qzmAZD.jpg',
'https://img.nickpic.host/qzmO55.jpg',
'https://img.nickpic.host/qzmhMP.jpg',
'https://img.nickpic.host/qzm6kM.jpg',
'https://img.nickpic.host/qzmQsF.jpg',
'https://img.nickpic.host/qzmUQe.jpg',
'https://img.nickpic.host/qzmXVX.jpg',
'https://img.nickpic.host/qzmnpb.jpg',
'https://img.nickpic.host/qzmtAf.jpg',
'https://img.nickpic.host/qzmM76.jpg',
'https://img.nickpic.host/qzmRdp.jpg',
'https://img.nickpic.host/qzm45Y.jpg',
'https://img.nickpic.host/qzmwJG.jpg',
'https://img.nickpic.host/qzmDRA.jpg',
'https://img.nickpic.host/qzm7sz.jpg',
'https://img.nickpic.host/qzm8Uc.jpg',
'https://img.nickpic.host/qzmKVW.jpg',
'https://img.nickpic.host/qzmHp1.jpg',
'https://img.nickpic.host/qzmNEj.jpg',
'https://img.nickpic.host/qzmV7J.jpg',
'https://img.nickpic.host/qzmfdn.jpg',
'https://img.nickpic.host/qzm2Ss.jpg',
'https://img.nickpic.host/qzm9R2.jpg',
'https://img.nickpic.host/qzmeJQ.jpg',
'https://img.nickpic.host/qzmJ3x.jpg',
'https://img.nickpic.host/qzmLUN.jpg',
'https://img.nickpic.host/qzmPfO.jpg',
'https://img.nickpic.host/qzmWvm.jpg',
'https://img.nickpic.host/qzmZE8.jpg',
'https://img.nickpic.host/qzmd8q.jpg',
'https://img.nickpic.host/qzmydd.jpg',
'https://img.nickpic.host/qzoISD.jpg',
'https://img.nickpic.host/qzom15.jpg',
'https://img.nickpic.host/qzooJP.jpg',
'https://img.nickpic.host/qzov3M.jpg',
'https://img.nickpic.host/qzoxXF.jpg',
'https://img.nickpic.host/qzoBfe.jpg',
'https://img.nickpic.host/qzorvX.jpg',
'https://img.nickpic.host/qzo38f.jpg',
'https://img.nickpic.host/qzosOb.jpg',
'https://img.nickpic.host/qzoFy6.jpg',
'https://img.nickpic.host/qzojcp.jpg',
'https://img.nickpic.host/qzol1Y.jpg',
'https://img.nickpic.host/qzo5LA.jpg',
'https://img.nickpic.host/qzocFG.jpg',
'https://img.nickpic.host/qzogXz.jpg',
'https://img.nickpic.host/qzoq0c.jpg',
'https://img.nickpic.host/qzoAvW.jpg',
'https://img.nickpic.host/qzoEO1.jpg',
'https://img.nickpic.host/qzohyJ.jpg',
'https://img.nickpic.host/qzoOKj.jpg',
'https://img.nickpic.host/qzoCcn.jpg',
'https://img.nickpic.host/qzoQ4s.jpg',
'https://img.nickpic.host/qzoUL2.jpg',
'https://img.nickpic.host/qzoiFQ.jpg',
'https://img.nickpic.host/qzot0N.jpg',
'https://img.nickpic.host/qzonix.jpg',
'https://img.nickpic.host/qzoRxO.jpg',
'https://img.nickpic.host/qzo4K8.jpg',
'https://img.nickpic.host/qzo1hm.jpg',
'https://img.nickpic.host/qzozcd.jpg',
'https://img.nickpic.host/qzowGq.jpg',
'https://img.nickpic.host/qzo74D.jpg',
'https://img.nickpic.host/qzoYFP.jpg',
'https://img.nickpic.host/qzo8P5.jpg',
'https://img.nickpic.host/qzoHiM.jpg',
'https://img.nickpic.host/qzoN2F.jpg',
'https://img.nickpic.host/qzofxe.jpg',
'https://img.nickpic.host/qzo2Yb.jpg',
'https://img.nickpic.host/qzo0hX.jpg',
'https://img.nickpic.host/qzoeGf.jpg',
'https://img.nickpic.host/qzokg6.jpg',
'https://img.nickpic.host/qzoJDp.jpg',
'https://img.nickpic.host/qzoLPY.jpg',
'https://img.nickpic.host/qzoWnG.jpg',
'https://img.nickpic.host/qzoTaA.jpg',
'https://img.nickpic.host/qzoZ2z.jpg',
'https://img.nickpic.host/qzoyBc.jpg',
'https://img.nickpic.host/qzpGhW.jpg',
'https://img.nickpic.host/qzpIY1.jpg',
'https://img.nickpic.host/qzpoIj.jpg',
'https://img.nickpic.host/qzppgJ.jpg',
'https://img.nickpic.host/qzpvDn.jpg',
'https://img.nickpic.host/qzpxTs.jpg',
'https://img.nickpic.host/qzpba2.jpg',
'https://img.nickpic.host/qzprnQ.jpg',
'https://img.nickpic.host/qzps9x.jpg',
'https://img.nickpic.host/qzpFBN.jpg',
'https://img.nickpic.host/qzpa6O.jpg',
'https://img.nickpic.host/qzpjHm.jpg',
'https://img.nickpic.host/qzp5I8.jpg',
'https://img.nickpic.host/qzpSqq.jpg',
'https://img.nickpic.host/qzpcDd.jpg',
'https://img.nickpic.host/qzpgTD.jpg',
'https://img.nickpic.host/qzpuj5.jpg',
'https://img.nickpic.host/qzpAnP.jpg',
'https://img.nickpic.host/qzphbF.jpg',
'https://img.nickpic.host/qzpE9M.jpg',
'https://img.nickpic.host/qzp66e.jpg',
'https://img.nickpic.host/qzpCHX.jpg',
'https://img.nickpic.host/qzpUmb.jpg',
'https://img.nickpic.host/qzpXqf.jpg',
'https://img.nickpic.host/qzpiw6.jpg',
'https://img.nickpic.host/qzpnWp.jpg',
'https://img.nickpic.host/qzpMjY.jpg',
'https://img.nickpic.host/qzpRtA.jpg',
'https://img.nickpic.host/qzpDbz.jpg',
'https://img.nickpic.host/qzp1eG.jpg',
'https://img.nickpic.host/qzpwCc.jpg',
'https://img.nickpic.host/qzpzHW.jpg',
'https://img.nickpic.host/qzp8m1.jpg',
'https://img.nickpic.host/qzpKuj.jpg',
'https://img.nickpic.host/qzpYwJ.jpg',
'https://img.nickpic.host/qzpHWn.jpg',
'https://img.nickpic.host/qzpVls.jpg',
'https://img.nickpic.host/qzpft2.jpg',
'https://img.nickpic.host/qzp0eQ.jpg',
'https://img.nickpic.host/qzp9rx.jpg',
'https://img.nickpic.host/qzpeCN.jpg',
'https://img.nickpic.host/qzpkNO.jpg',
'https://img.nickpic.host/qzpLom.jpg',
'https://img.nickpic.host/qzpPu8.jpg',
'https://img.nickpic.host/qzpTzq.jpg',
'https://img.nickpic.host/qzpWWd.jpg',
'https://img.nickpic.host/qzpdlD.jpg',
'https://img.nickpic.host/qzpyM5.jpg',
'https://img.nickpic.host/qzvGeP.jpg',
'https://img.nickpic.host/qzvmrM.jpg',
'https://img.nickpic.host/qzvoQF.jpg',
'https://img.nickpic.host/qzvpNe.jpg',
'https://img.nickpic.host/qzvxoX.jpg',
'https://img.nickpic.host/qzvBAb.jpg',
'https://img.nickpic.host/qzvrZ6.jpg',
'https://img.nickpic.host/qzvbzf.jpg',
'https://img.nickpic.host/qzv35p.jpg',
'https://img.nickpic.host/qzvFMY.jpg',
'https://img.nickpic.host/qzvakA.jpg',
'https://img.nickpic.host/qzvlsG.jpg',
'https://img.nickpic.host/qzv5Qz.jpg',
'https://img.nickpic.host/qzvSVc.jpg',
'https://img.nickpic.host/qzvgoW.jpg',
'https://img.nickpic.host/qzvqA1.jpg',
'https://img.nickpic.host/qzvu7j.jpg',
'https://img.nickpic.host/qzvAZJ.jpg',
'https://img.nickpic.host/qzvO5n.jpg',
'https://img.nickpic.host/qzvhRs.jpg',
'https://img.nickpic.host/qzv6k2.jpg',
'https://img.nickpic.host/qzvQsQ.jpg',
'https://img.nickpic.host/qzvUUx.jpg',
'https://img.nickpic.host/qzvXVN.jpg',
'https://img.nickpic.host/qzvnpO.jpg',
'https://img.nickpic.host/qzvtEm.jpg',
'https://img.nickpic.host/qzvM78.jpg',
'https://img.nickpic.host/qzvRdq.jpg',
'https://img.nickpic.host/qzv45d.jpg',
'https://img.nickpic.host/qzvwJ5.jpg',
'https://img.nickpic.host/qzvDRD.jpg',
'https://img.nickpic.host/qzv7sP.jpg',
'https://img.nickpic.host/qzv8UM.jpg',
'https://img.nickpic.host/qzvKfF.jpg',
'https://img.nickpic.host/qzvHpe.jpg',
'https://img.nickpic.host/qzvNEX.jpg',
'https://img.nickpic.host/qzvV8b.jpg',
'https://img.nickpic.host/qzvfdf.jpg',
'https://img.nickpic.host/qzv91p.jpg',
'https://img.nickpic.host/qzv2S6.jpg',
'https://img.nickpic.host/qzveJY.jpg',
'https://img.nickpic.host/qzvJ3A.jpg',
'https://img.nickpic.host/qzvLXG.jpg',
'https://img.nickpic.host/qzvPfz.jpg',
'https://img.nickpic.host/qzvWvc.jpg',
'https://img.nickpic.host/qzvZEW.jpg',
'https://img.nickpic.host/qzvd81.jpg',
'https://img.nickpic.host/qzvyyj.jpg',
'https://img.nickpic.host/qzxISJ.jpg',
'https://img.nickpic.host/qzxm1n.jpg',
'https://img.nickpic.host/qzxoLs.jpg',
'https://img.nickpic.host/qzxv32.jpg',
'https://img.nickpic.host/qzxxXQ.jpg',
'https://img.nickpic.host/qzxB0x.jpg',
'https://img.nickpic.host/qzxrvN.jpg',
'https://img.nickpic.host/qzxsOO.jpg',
'https://img.nickpic.host/qzx3Km.jpg',
'https://img.nickpic.host/qzxFy8.jpg',
'https://img.nickpic.host/qzxjcq.jpg',
'https://img.nickpic.host/qzxl1d.jpg',
'https://img.nickpic.host/qzx5LD.jpg',
'https://img.nickpic.host/qzxcF5.jpg',
'https://img.nickpic.host/qzxgXP.jpg',
'https://img.nickpic.host/qzxq0M.jpg',
'https://img.nickpic.host/qzxAxF.jpg',
'https://img.nickpic.host/qzxEOe.jpg',
'https://img.nickpic.host/qzxOKX.jpg',
'https://img.nickpic.host/qzx6Gb.jpg',
'https://img.nickpic.host/qzxCcf.jpg',
'https://img.nickpic.host/qzxQ46.jpg',
'https://img.nickpic.host/qzxUPp.jpg',
'https://img.nickpic.host/qzxiFY.jpg',
'https://img.nickpic.host/qzxniA.jpg',
'https://img.nickpic.host/qzxt2G.jpg',
'https://img.nickpic.host/qzx1hc.jpg',
'https://img.nickpic.host/qzxRxz.jpg',
'https://img.nickpic.host/qzx4KW.jpg',
'https://img.nickpic.host/qzxwG1.jpg',
'https://img.nickpic.host/qzx74J.jpg',
'https://img.nickpic.host/qzxzgj.jpg',
'https://img.nickpic.host/qzx8Pn.jpg',
'https://img.nickpic.host/qzxYas.jpg',
'https://img.nickpic.host/qzxHi2.jpg',
'https://img.nickpic.host/qzxN2Q.jpg',
'https://img.nickpic.host/qzxfBx.jpg',
'https://img.nickpic.host/qzx0hN.jpg',
'https://img.nickpic.host/qzx2YO.jpg',
'https://img.nickpic.host/qzxeIm.jpg',
'https://img.nickpic.host/qzxkg8.jpg',
'https://img.nickpic.host/qzxJDq.jpg',
'https://img.nickpic.host/qzxLPd.jpg',
'https://img.nickpic.host/qzxTaD.jpg',
'https://img.nickpic.host/qzxWn5.jpg',
'https://img.nickpic.host/qzxyBM.jpg',
'https://img.nickpic.host/qzxZ2P.jpg',
'https://img.nickpic.host/qzBG6F.jpg',
'https://img.nickpic.host/qzBIYe.jpg',
'https://img.nickpic.host/qzBoIX.jpg',
'https://img.nickpic.host/qzBpqb.jpg',
'https://img.nickpic.host/qzBvDf.jpg',
'https://img.nickpic.host/qzBxT6.jpg',
'https://img.nickpic.host/qzBbjp.jpg',
'https://img.nickpic.host/qzBrnY.jpg',
'https://img.nickpic.host/qzBs9A.jpg',
'https://img.nickpic.host/qzBFbG.jpg',
'https://img.nickpic.host/qzBa6z.jpg',
'https://img.nickpic.host/qzBjHc.jpg',
'https://img.nickpic.host/qzB5IW.jpg',
'https://img.nickpic.host/qzBSq1.jpg',
'https://img.nickpic.host/qzBcwj.jpg',
'https://img.nickpic.host/qzBgTJ.jpg',
'https://img.nickpic.host/qzBAts.jpg',
'https://img.nickpic.host/qzBujn.jpg',
'https://img.nickpic.host/qzBhbQ.jpg',
'https://img.nickpic.host/qzBE92.jpg',
'https://img.nickpic.host/qzB6Cx.jpg',
'https://img.nickpic.host/qzBCHN.jpg',
'https://img.nickpic.host/qzBUmO.jpg',
'https://img.nickpic.host/qzBXum.jpg',
'https://img.nickpic.host/qzBiw8.jpg',
'https://img.nickpic.host/qzBnWq.jpg',
'https://img.nickpic.host/qzBMjd.jpg',
'https://img.nickpic.host/qzBRtD.jpg',
'https://img.nickpic.host/qzB1e5.jpg',
'https://img.nickpic.host/qzBDbP.jpg',
'https://img.nickpic.host/qzBzNF.jpg',
'https://img.nickpic.host/qzBwCM.jpg',
'https://img.nickpic.host/qzB8me.jpg',
'https://img.nickpic.host/qzBKuX.jpg',
'https://img.nickpic.host/qzBYzb.jpg',
'https://img.nickpic.host/qzBVl6.jpg',
'https://img.nickpic.host/qzBHWf.jpg',
'https://img.nickpic.host/qzBfMp.jpg',
'https://img.nickpic.host/qzB0eY.jpg',
'https://img.nickpic.host/qzBeQG.jpg',
'https://img.nickpic.host/qzB9rA.jpg',
'https://img.nickpic.host/qzBkNz.jpg',
'https://img.nickpic.host/qzBLoc.jpg',
'https://img.nickpic.host/qzBPuW.jpg',
'https://img.nickpic.host/qzBTz1.jpg',
'https://img.nickpic.host/qzBWZj.jpg',
'https://img.nickpic.host/qzBdlJ.jpg',
'https://img.nickpic.host/qzByMn.jpg',
'https://img.nickpic.host/qzbGks.jpg',
'https://img.nickpic.host/qzbmr2.jpg',
'https://img.nickpic.host/qzboQQ.jpg',
'https://img.nickpic.host/qzbxoN.jpg',
'https://img.nickpic.host/qzbpVx.jpg',
'https://img.nickpic.host/qzbBAO.jpg',
'https://img.nickpic.host/qzbb7m.jpg',
'https://img.nickpic.host/qzbrZ8.jpg',
'https://img.nickpic.host/qzb35q.jpg',
'https://img.nickpic.host/qzbFMd.jpg',
'https://img.nickpic.host/qzbls5.jpg',
'https://img.nickpic.host/qzbakD.jpg',
'https://img.nickpic.host/qzb5QP.jpg',
'https://img.nickpic.host/qzbSVM.jpg',
'https://img.nickpic.host/qzbgpF.jpg',
'https://img.nickpic.host/qzbqAe.jpg',
'https://img.nickpic.host/qzbu7X.jpg',
'https://img.nickpic.host/qzbAdb.jpg',
'https://img.nickpic.host/qzbO5f.jpg',
'https://img.nickpic.host/qzbhR6.jpg',
'https://img.nickpic.host/qzb6Jp.jpg',
'https://img.nickpic.host/qzbUUA.jpg',
'https://img.nickpic.host/qzbQsY.jpg',
'https://img.nickpic.host/qzbXfG.jpg',
'https://img.nickpic.host/qzbnpz.jpg',
'https://img.nickpic.host/qzbtEc.jpg',
'https://img.nickpic.host/qzbM7W.jpg',
'https://img.nickpic.host/qzbRd1.jpg',
'https://img.nickpic.host/qzb4Sj.jpg',
'https://img.nickpic.host/qzbDRJ.jpg',
'https://img.nickpic.host/qzbwJn.jpg',
'https://img.nickpic.host/qzb73s.jpg',
'https://img.nickpic.host/qzb8U2.jpg',
'https://img.nickpic.host/qzbKfQ.jpg',
'https://img.nickpic.host/qzbHvx.jpg',
'https://img.nickpic.host/qzbNEN.jpg',
'https://img.nickpic.host/qzbV8O.jpg',
'https://img.nickpic.host/qzbfym.jpg',
'https://img.nickpic.host/qzb2S8.jpg',
'https://img.nickpic.host/qzb91q.jpg',
'https://img.nickpic.host/qzbeJd.jpg',
'https://img.nickpic.host/qzbJ3D.jpg',
'https://img.nickpic.host/qzbLX5.jpg',
'https://img.nickpic.host/qzbPfP.jpg',
'https://img.nickpic.host/qzbWvM.jpg',
'https://img.nickpic.host/qzbZOF.jpg',
'https://img.nickpic.host/qzbd8e.jpg',
'https://img.nickpic.host/qzbyyX.jpg',
'https://img.nickpic.host/qzrm1f.jpg',
'https://img.nickpic.host/qzrIcb.jpg',
'https://img.nickpic.host/qzroL6.jpg',
'https://img.nickpic.host/qzrvFp.jpg',
'https://img.nickpic.host/qzrxXY.jpg',
'https://img.nickpic.host/qzrsOz.jpg',
'https://img.nickpic.host/qzrB0A.jpg',
'https://img.nickpic.host/qzrrxG.jpg',
'https://img.nickpic.host/qzr3Kc.jpg',
'https://img.nickpic.host/qzrFyW.jpg',
'https://img.nickpic.host/qzrjc1.jpg',
'https://img.nickpic.host/qzrl4j.jpg',
'https://img.nickpic.host/qzr5LJ.jpg',
'https://img.nickpic.host/qzrcFn.jpg',
'https://img.nickpic.host/qzrgis.jpg',
'https://img.nickpic.host/qzrq02.jpg',
'https://img.nickpic.host/qzrAxQ.jpg',
'https://img.nickpic.host/qzrEhx.jpg',
'https://img.nickpic.host/qzr6GO.jpg',
'https://img.nickpic.host/qzrOKN.jpg',
'https://img.nickpic.host/qzrCgm.jpg',
'https://img.nickpic.host/qzrQ48.jpg',
'https://img.nickpic.host/qzrUPq.jpg',
'https://img.nickpic.host/qzriFd.jpg',
'https://img.nickpic.host/qzrniD.jpg',
'https://img.nickpic.host/qzrt25.jpg',
'https://img.nickpic.host/qzrRxP.jpg',
'https://img.nickpic.host/qzr1hM.jpg',
'https://img.nickpic.host/qzr4YF.jpg',
'https://img.nickpic.host/qzrwGe.jpg',
'https://img.nickpic.host/qzrzgX.jpg',
'https://img.nickpic.host/qzr7Db.jpg',
'https://img.nickpic.host/qzr8Pf.jpg',
'https://img.nickpic.host/qzrHnp.jpg',
'https://img.nickpic.host/qzrYa6.jpg',
'https://img.nickpic.host/qzrN2Y.jpg',
'https://img.nickpic.host/qzrfBA.jpg',
'https://img.nickpic.host/qzr06G.jpg',
'https://img.nickpic.host/qzr2Yz.jpg',
'https://img.nickpic.host/qzreIc.jpg',
'https://img.nickpic.host/qzrkgW.jpg',
'https://img.nickpic.host/qzrJD1.jpg',
'https://img.nickpic.host/qzrLTj.jpg',
'https://img.nickpic.host/qzrTaJ.jpg',
'https://img.nickpic.host/qzrWnn.jpg',
'https://img.nickpic.host/qzrZ9s.jpg',
'https://img.nickpic.host/qzryB2.jpg',
'https://img.nickpic.host/qzsG6Q.jpg',
'https://img.nickpic.host/qzsIHx.jpg',
'https://img.nickpic.host/qzspqO.jpg',
'https://img.nickpic.host/qzsoIN.jpg',
'https://img.nickpic.host/qzsxT8.jpg',
'https://img.nickpic.host/qzsvwm.jpg',
'https://img.nickpic.host/qzsbjq.jpg',
'https://img.nickpic.host/qzsrnd.jpg',
'https://img.nickpic.host/qzss9D.jpg',
'https://img.nickpic.host/qzsFb5.jpg',
'https://img.nickpic.host/qzsa6P.jpg',
'https://img.nickpic.host/qzsjHM.jpg',
'https://img.nickpic.host/qzs5mF.jpg',
'https://img.nickpic.host/qzsSqe.jpg',
'https://img.nickpic.host/qzscwX.jpg',
'https://img.nickpic.host/qzsgWb.jpg',
'https://img.nickpic.host/qzsujf.jpg',
'https://img.nickpic.host/qzsAt6.jpg',
'https://img.nickpic.host/qzsEep.jpg',
'https://img.nickpic.host/qzshbY.jpg',
'https://img.nickpic.host/qzs6CA.jpg',
'https://img.nickpic.host/qzsUmz.jpg',
'https://img.nickpic.host/qzsCNG.jpg',
'https://img.nickpic.host/qzsXuc.jpg',
'https://img.nickpic.host/qzsiwW.jpg',
'https://img.nickpic.host/qzsnW1.jpg',
'https://img.nickpic.host/qzsMlj.jpg',
'https://img.nickpic.host/qzsRtJ.jpg',
'https://img.nickpic.host/qzs1en.jpg',
'https://img.nickpic.host/qzsDrs.jpg',
'https://img.nickpic.host/qzswC2.jpg',
'https://img.nickpic.host/qzszNQ.jpg',
'https://img.nickpic.host/qzs8ox.jpg',
'https://img.nickpic.host/qzsKuN.jpg',
'https://img.nickpic.host/qzsYzO.jpg',
'https://img.nickpic.host/qzsHZm.jpg',
'https://img.nickpic.host/qzsVl8.jpg',
'https://img.nickpic.host/qzsfMq.jpg',
'https://img.nickpic.host/qzs9rD.jpg',
'https://img.nickpic.host/qzs0ed.jpg',
'https://img.nickpic.host/qzseQ5.jpg',
'https://img.nickpic.host/qzsLoM.jpg',
'https://img.nickpic.host/qzskNP.jpg',
'https://img.nickpic.host/qzsPAF.jpg',
'https://img.nickpic.host/qzsTze.jpg',
'https://img.nickpic.host/qzsWZX.jpg',
'https://img.nickpic.host/qzsd5b.jpg',
'https://img.nickpic.host/qzsyMf.jpg',
'https://img.nickpic.host/qz3Gk6.jpg',
'https://img.nickpic.host/qz3msp.jpg',
'https://img.nickpic.host/qz3oQY.jpg',
'https://img.nickpic.host/qz3pVA.jpg',
'https://img.nickpic.host/qz3xpG.jpg',
'https://img.nickpic.host/qz3BAz.jpg',
'https://img.nickpic.host/qz3b7c.jpg',
'https://img.nickpic.host/qz3rZW.jpg',
'https://img.nickpic.host/qz3351.jpg',
'https://img.nickpic.host/qz3FRj.jpg',
'https://img.nickpic.host/qz3akJ.jpg',
'https://img.nickpic.host/qz3lsn.jpg',
'https://img.nickpic.host/qz35Us.jpg',
'https://img.nickpic.host/qz3SV2.jpg',
'https://img.nickpic.host/qz3gpQ.jpg',
'https://img.nickpic.host/qz3qEx.jpg']
let henta = hent[Math.floor(Math.random() * hent.length)]
hentai = await getBuffer(henta)
const dicho =['Aquí tienes 💕🦈','¿Linda foto no?','Pedido entregado 🕊','¿Qué tal está?','¿Te gusta?','Tengo muchas más 😽']
const frc = dicho[Math.floor(Math.random() * dicho.length)]
let buttons = [
                    {buttonId: `hentai`, buttonText: {displayText: 'Siguiente'}, type: 1}
                ]
                let buttonMessage = {
                    image: (hentai),
                    caption: (frc),
                    buttons: buttons,
                    headerType: 4
                }
                GojoMdNx.sendMessage(m.chat, buttonMessage)
            }
break

case 'meme': {
const memess =['https://images2.imgbox.com/58/a7/pDTArwvo_o.jpg','https://images2.imgbox.com/b2/25/dFm0XuOs_o.jpg','https://images2.imgbox.com/79/13/Xv9JRrNf_o.jpg','https://images2.imgbox.com/2f/b9/6Lab2XYy_o.jpg','https://images2.imgbox.com/02/72/Qphe3Q9O_o.jpg','https://images2.imgbox.com/6c/89/pCe16kg9_o.jpg','https://images2.imgbox.com/c0/93/ZqOzI2kL_o.jpg','https://images2.imgbox.com/cf/de/nPTnouvP_o.jpg','https://images2.imgbox.com/7b/02/BMOYjnYB_o.jpg','https://images2.imgbox.com/d4/56/BSPgtLeR_o.jpg','https://images2.imgbox.com/3f/cd/oY57L08G_o.jpg','https://images2.imgbox.com/22/a6/o1B0q6Zw_o.jpg','https://images2.imgbox.com/57/66/QDQdacUN_o.jpg','https://images2.imgbox.com/e5/a8/eAxvSQPn_o.jpg','https://images2.imgbox.com/c7/74/GlDXvfAD_o.jpg','https://images2.imgbox.com/6d/a9/6tGGlKma_o.jpg','https://images2.imgbox.com/24/e7/GQCQrvW3_o.jpg','https://images2.imgbox.com/46/2d/arVqY5rD_o.jpg','https://images2.imgbox.com/7e/da/tiUG635l_o.jpg','https://images2.imgbox.com/f3/5b/9At6aRra_o.jpg','https://images2.imgbox.com/f9/21/81rjfGfn_o.jpg','https://images2.imgbox.com/58/3a/m5HN1a9q_o.jpg','https://images2.imgbox.com/51/7d/sfJ5MNT2_o.jpg','https://images2.imgbox.com/1b/91/RuuXEfnN_o.jpg','https://images2.imgbox.com/cb/0e/XXjDZ9xo_o.jpg','https://images2.imgbox.com/94/72/Mjd3iNze_o.jpg','https://images2.imgbox.com/55/21/WoUXj0rM_o.jpg','https://images2.imgbox.com/d2/4c/xIXE9Xc7_o.jpg','https://images2.imgbox.com/78/a5/eMLj1qXa_o.jpg','https://images2.imgbox.com/f4/bf/ENhS4GSD_o.jpg','https://images2.imgbox.com/4e/38/zNC8KX78_o.jpg','https://images2.imgbox.com/40/85/92YxL9pj_o.jpg','https://images2.imgbox.com/5b/76/LX7m2uC8_o.jpg','https://images2.imgbox.com/26/e1/LGa4PqOJ_o.jpg','https://images2.imgbox.com/3b/f4/uqU7Yxse_o.jpg','https://images2.imgbox.com/a4/a9/QR66ZII9_o.jpg','https://images2.imgbox.com/ec/35/xEodk122_o.jpg','https://images2.imgbox.com/46/3e/5ElNWmbS_o.jpg','https://images2.imgbox.com/17/df/SqZLlAVZ_o.jpg','https://images2.imgbox.com/16/05/73ELaTg4_o.jpg','https://images2.imgbox.com/88/00/sk1SxBpp_o.jpg','https://images2.imgbox.com/dc/a6/rMjLkauk_o.jpg','https://images2.imgbox.com/9d/2f/oy48zpfb_o.jpg','https://images2.imgbox.com/5d/74/kPwVtl2H_o.jpg','https://images2.imgbox.com/cb/6c/u3ATiVZ3_o.jpg','https://images2.imgbox.com/fe/3b/rqesp6YR_o.jpg','https://images2.imgbox.com/84/8b/OHUeRooQ_o.jpg','https://images2.imgbox.com/31/21/GMYX9mud_o.jpg','https://images2.imgbox.com/b7/01/Ix8C9gUb_o.jpg','https://images2.imgbox.com/43/78/JaB9Vt5t_o.jpg','https://images2.imgbox.com/05/1d/SIDpjtvM_o.jpg','https://images2.imgbox.com/da/ac/2pGXHgr4_o.jpg','https://images2.imgbox.com/bb/08/wWcihaBB_o.jpg','https://images2.imgbox.com/9f/8e/VmDSCPnB_o.jpg','https://images2.imgbox.com/7c/4d/b25OqAAS_o.jpg','https://images2.imgbox.com/bb/1e/8Icdogmw_o.jpg','https://images2.imgbox.com/3e/54/Lc1fx8w1_o.jpg','https://images2.imgbox.com/d9/f2/KYCJc4Yu_o.jpg','https://images2.imgbox.com/52/00/Y1dJRtdO_o.jpg','https://images2.imgbox.com/8e/8e/BxTTQIFf_o.jpg','https://images2.imgbox.com/c4/a6/AtEXTryy_o.jpg','https://images2.imgbox.com/27/15/oWDUapAw_o.jpg','https://images2.imgbox.com/bd/0c/SIEFrHC8_o.jpg','https://images2.imgbox.com/c0/78/Xt5lszIt_o.jpg','https://images2.imgbox.com/bc/e4/Kj8Gr05C_o.jpg','https://images2.imgbox.com/a5/1d/aUI5lD7D_o.jpg','https://images2.imgbox.com/3e/d9/XtOKMxYN_o.jpg','https://images2.imgbox.com/f2/5c/FQier7fk_o.jpg','https://images2.imgbox.com/5f/28/pOoZsRQf_o.jpg','https://images2.imgbox.com/cd/3c/Ovcox2sL_o.jpg','https://images2.imgbox.com/23/c8/QkJtsnQT_o.jpg','https://images2.imgbox.com/fd/3a/XeSh0cQm_o.jpg','https://images2.imgbox.com/be/88/DhFuRQWi_o.jpg','https://images2.imgbox.com/77/8d/EJ3JKVVv_o.jpg','https://images2.imgbox.com/d5/e5/JRrNpmFL_o.jpg','https://images2.imgbox.com/8a/e7/CgCGGoIn_o.jpg','https://images2.imgbox.com/9e/a6/XRJ6mG8h_o.jpg','https://images2.imgbox.com/93/0a/3hvw0lHW_o.jpg','https://images2.imgbox.com/1b/9d/0Yi9aFnl_o.jpg','https://images2.imgbox.com/f7/f7/KHAEKMgr_o.jpg','https://images2.imgbox.com/02/fb/YQKDdmxW_o.jpg','https://images2.imgbox.com/96/65/1AR0RwQG_o.jpg','https://images2.imgbox.com/75/c8/PaCtajZM_o.jpg','https://images2.imgbox.com/b8/7e/olGYQzib_o.jpg','https://images2.imgbox.com/48/c6/afjaffpk_o.jpg','https://images2.imgbox.com/77/a0/KY7SgrcA_o.jpg','https://images2.imgbox.com/e2/77/2vyXFQsy_o.jpg','https://images2.imgbox.com/35/7f/lUmWsX7s_o.jpg','https://images2.imgbox.com/b4/ad/L13NN6Vo_o.jpg','https://images2.imgbox.com/8f/ae/CHkISXVZ_o.jpg','https://images2.imgbox.com/f8/91/BCnU9kMe_o.jpg','https://images2.imgbox.com/c5/65/Q7P0Av4m_o.jpg','https://images2.imgbox.com/30/d7/jXis3KsS_o.jpg','https://images2.imgbox.com/2b/6c/tQ3Kez0s_o.jpg','https://images2.imgbox.com/c1/c8/wb6Lzx7M_o.jpg','https://images2.imgbox.com/25/4b/GwFATqnF_o.jpg','https://images2.imgbox.com/b7/6c/kR5T6t2Y_o.jpg','https://images2.imgbox.com/4c/e1/kqmFHf6Q_o.jpg','https://images2.imgbox.com/04/f0/AZ36tYu3_o.jpg','https://images2.imgbox.com/ed/07/Pz0BILqY_o.jpg','https://images2.imgbox.com/ef/48/AQSTMjyQ_o.jpg','https://images2.imgbox.com/b0/4a/QpZxbskR_o.jpg','https://images2.imgbox.com/0a/7b/7y0tbUCk_o.jpg','https://images2.imgbox.com/05/7d/Rz8TNttz_o.jpg','https://images2.imgbox.com/b7/73/CY7cBs1K_o.jpg','https://images2.imgbox.com/cf/f2/dl6gv5aW_o.jpg','https://images2.imgbox.com/16/e0/l7El4MU4_o.jpg','https://images2.imgbox.com/a1/c0/QHFvT8Dz_o.jpg','https://images2.imgbox.com/11/2f/LewEoLPz_o.jpg','https://images2.imgbox.com/d8/5d/PN1lLH0r_o.jpg','https://images2.imgbox.com/f0/b4/rZQsvfjY_o.jpg','https://images2.imgbox.com/bb/fe/F71uwPmL_o.jpg','https://images2.imgbox.com/27/58/lawCB9M1_o.jpg','https://images2.imgbox.com/59/a3/vwtNLJKR_o.jpg','https://images2.imgbox.com/ad/1a/THqZtQbC_o.jpg','https://images2.imgbox.com/70/b5/AsrB59o5_o.jpg','https://images2.imgbox.com/52/64/qflyj2Kl_o.jpg','https://images2.imgbox.com/51/6d/F7PbJ3m3_o.jpg','https://images2.imgbox.com/b7/aa/bZvGWrWQ_o.jpg','https://images2.imgbox.com/04/14/EROj4xBO_o.jpg','https://images2.imgbox.com/31/1f/8LcYN5GE_o.jpg','https://images2.imgbox.com/ed/20/x5sZYy7O_o.jpg','https://images2.imgbox.com/a1/65/gIB3ytHT_o.jpg','https://images2.imgbox.com/59/4e/pmmh50Ig_o.jpg','https://images2.imgbox.com/77/51/tA0kHiYy_o.jpg','https://images2.imgbox.com/3b/9d/lDaGlcYv_o.jpg','https://images2.imgbox.com/97/d5/61NeCbIe_o.jpg','https://images2.imgbox.com/14/b0/Krks9guu_o.jpg','https://images2.imgbox.com/1e/e7/0Jws6YIX_o.jpg','https://images2.imgbox.com/3a/49/p7AXifWt_o.jpg','https://images2.imgbox.com/e2/ee/uCJ5eUWb_o.jpg','https://images2.imgbox.com/ad/36/pRESLubh_o.jpg','https://images2.imgbox.com/00/40/OlH7GU8L_o.jpg','https://images2.imgbox.com/3f/3b/sQaPJ3no_o.jpg','https://images2.imgbox.com/6b/a6/43cTLFV4_o.jpg','https://images2.imgbox.com/4d/f1/lZekigwL_o.jpg','https://images2.imgbox.com/c5/e2/B2BHDbYI_o.jpg','https://images2.imgbox.com/d9/58/sRtbMXux_o.jpg','https://images2.imgbox.com/ed/a5/0lk0ILT2_o.jpg','https://images2.imgbox.com/75/5c/A5ONH73E_o.jpg','https://images2.imgbox.com/7e/50/YQXC3oAL_o.jpg','https://images2.imgbox.com/7c/c6/5h7RLZ4Q_o.jpg','https://images2.imgbox.com/1b/9e/HHKCa2Fh_o.jpg','https://images2.imgbox.com/0d/c3/FRfGRisu_o.jpg','https://images2.imgbox.com/58/5b/wmnXzjKf_o.jpg','https://images2.imgbox.com/99/84/BPohMs72_o.jpg','https://images2.imgbox.com/11/8a/mYI0E0ms_o.jpg','https://images2.imgbox.com/50/f0/OsDdKkyS_o.jpg','https://images2.imgbox.com/74/f2/DUjmPWBI_o.jpg','https://images2.imgbox.com/42/94/3F1KMSx9_o.jpg','https://images2.imgbox.com/69/4f/VxVUjbbZ_o.jpg','https://images2.imgbox.com/9d/48/sEWEOVnF_o.jpg','https://images2.imgbox.com/b7/4f/JMGtJRNz_o.jpg','https://images2.imgbox.com/10/04/XorCtwTJ_o.jpg','https://images2.imgbox.com/c8/d2/ZUCFZ47R_o.jpg','https://images2.imgbox.com/9d/0f/CivorCGz_o.jpg','https://images2.imgbox.com/81/28/ubC4Lqsz_o.jpg','https://images2.imgbox.com/d5/79/p42MLp7V_o.jpg','https://images2.imgbox.com/40/e2/7rdhjriX_o.jpg','https://images2.imgbox.com/12/1f/nI8g93r9_o.jpg','https://images2.imgbox.com/34/c3/ctDPdQAm_o.jpg','https://images2.imgbox.com/ce/5e/bcpyvkMS_o.jpg','https://images2.imgbox.com/22/a0/dUjQpeNy_o.jpg','https://images2.imgbox.com/01/8c/IQl8T7Ko_o.jpg','https://images2.imgbox.com/c9/b1/1pCgMx91_o.jpg','https://images2.imgbox.com/2d/78/iILWcxa1_o.jpg','https://images2.imgbox.com/0d/99/Xcc2mfHJ_o.jpg','https://images2.imgbox.com/d8/b6/QR0xgFxG_o.jpg','https://images2.imgbox.com/d3/cd/kvJEUqrD_o.jpg','https://images2.imgbox.com/a0/f2/jeeVREHL_o.jpg','https://images2.imgbox.com/2b/d4/XyPvel9y_o.jpg','https://images2.imgbox.com/ba/a9/ZHbbzCeP_o.jpg','https://images2.imgbox.com/c9/e9/LGchPb5m_o.jpg','https://images2.imgbox.com/fc/32/3Z2yy1Fs_o.jpg','https://images2.imgbox.com/d0/87/hazZBTsN_o.jpg','https://images2.imgbox.com/84/b1/bzvtMnrj_o.jpg','https://images2.imgbox.com/6c/12/MikR3uqd_o.jpg','https://images2.imgbox.com/a9/23/K5ZheaqJ_o.jpg','https://images2.imgbox.com/de/22/GnRLJyUA_o.jpg','https://images2.imgbox.com/77/89/SPhJf8yk_o.jpg','https://images2.imgbox.com/c8/ac/oXju9973_o.jpg','https://images2.imgbox.com/9b/98/pwDrgi2m_o.jpg','https://images2.imgbox.com/f8/da/YbUUjOd1_o.jpg','https://images2.imgbox.com/d7/c3/wFz55fIA_o.jpg','https://images2.imgbox.com/90/34/pnxfcA05_o.jpg','https://images2.imgbox.com/34/bf/jQ70s21m_o.jpg','https://images2.imgbox.com/54/7b/SJU3cG7y_o.jpg','https://images2.imgbox.com/dc/c6/KQzBZvV8_o.jpg','https://images2.imgbox.com/fe/ea/jKU1t3mU_o.jpg','https://images2.imgbox.com/fc/e2/m6SIeE3t_o.jpg','https://images2.imgbox.com/4a/b8/bQRsWbKH_o.jpg','https://images2.imgbox.com/53/5a/vUfzpMVq_o.jpg','https://images2.imgbox.com/a0/42/H7YO5BvB_o.jpg','https://images2.imgbox.com/a0/dd/c94JfWcg_o.jpg','https://images2.imgbox.com/d5/5d/A9AxmvmI_o.jpg','https://images2.imgbox.com/83/81/xCRzWXkG_o.jpg','https://images2.imgbox.com/db/97/nWxosZK0_o.jpg','https://images2.imgbox.com/6f/8e/FB1uCVGE_o.jpg','https://images2.imgbox.com/78/ea/6w8jLmWl_o.jpg',
	       'https://images2.imgbox.com/6e/36/wor7ijwQ_o.jpg','https://images2.imgbox.com/5e/bc/etsuJ52K_o.jpg','https://images2.imgbox.com/9e/43/tzo0pFMZ_o.jpg','https://images2.imgbox.com/09/bf/AggO1Jcr_o.jpg','https://images2.imgbox.com/23/f5/tvN140i8_o.jpg','https://images2.imgbox.com/78/42/m3MUmt6o_o.jpg','https://images2.imgbox.com/70/07/X7dN5fv9_o.jpg','https://images2.imgbox.com/09/48/HljZCqSP_o.jpg','https://images2.imgbox.com/8e/5c/XoeXlTSN_o.jpg','https://images2.imgbox.com/57/b3/mY9Fhk0u_o.jpg','https://images2.imgbox.com/d1/5b/UbsCzHzo_o.jpg','https://images2.imgbox.com/c1/ff/ZhGAodII_o.jpg','https://images2.imgbox.com/af/1f/utuEZmST_o.jpg','https://images2.imgbox.com/db/e2/0jDdAjep_o.jpg','https://images2.imgbox.com/fa/05/hAqTuIBa_o.jpg','https://images2.imgbox.com/9c/fc/Vjzq2TFf_o.jpg','https://images2.imgbox.com/66/65/81dUzEj0_o.jpg','https://images2.imgbox.com/ca/1c/E10nBzdz_o.jpg','https://images2.imgbox.com/bb/a4/4J5uHI3d_o.jpg','https://images2.imgbox.com/17/69/Bvb9StKx_o.jpg','https://images2.imgbox.com/9e/35/6Cju9ROR_o.jpg','https://images2.imgbox.com/79/1d/jYVn4z4s_o.jpg','https://images2.imgbox.com/3d/e0/aNpjpVxf_o.jpg','https://images2.imgbox.com/49/31/w0WRrOio_o.jpg','https://images2.imgbox.com/65/ee/jI4w8QX1_o.jpg','https://images2.imgbox.com/e7/be/R74miqGe_o.jpg','https://images2.imgbox.com/21/d3/SAav9xDL_o.jpg','https://images2.imgbox.com/60/c1/2aUxiCXq_o.jpg','https://images2.imgbox.com/54/a8/Ii2enRtw_o.jpg','https://images2.imgbox.com/c9/11/MLUG0g4w_o.jpg','https://images2.imgbox.com/0e/9e/AIHNcCNc_o.jpg','https://images2.imgbox.com/90/d9/VeRgJv4p_o.jpg','https://images2.imgbox.com/48/24/RX6IvILG_o.jpg','https://images2.imgbox.com/91/b2/wrXgWsFa_o.jpg','https://images2.imgbox.com/96/32/hxWbnEzf_o.jpg','https://images2.imgbox.com/dd/bf/FpXG6I6Z_o.jpg','https://images2.imgbox.com/b4/46/HE9aPJaZ_o.jpg','https://images2.imgbox.com/6e/33/BZr9pKft_o.jpg','https://images2.imgbox.com/b3/d1/bbWrpvjO_o.jpg','https://images2.imgbox.com/15/b1/5evUoukA_o.jpg','https://images2.imgbox.com/4d/0a/mtlP102g_o.jpg','https://images2.imgbox.com/06/4a/9dRAczNn_o.jpg','https://images2.imgbox.com/d3/47/3AxD0CJs_o.jpg','https://images2.imgbox.com/27/85/HkZAgNl4_o.jpg','https://images2.imgbox.com/4b/ca/rsU6obtZ_o.jpg','https://images2.imgbox.com/a1/64/esqBHrF0_o.jpg','https://images2.imgbox.com/83/98/K470b5KN_o.jpg','https://images2.imgbox.com/5f/6e/nZS9sdXz_o.jpg','https://images2.imgbox.com/66/94/ettUY2G4_o.jpg','https://images2.imgbox.com/c6/a5/yLaRF0uu_o.jpg','https://images2.imgbox.com/04/5f/UrZiNb7S_o.jpg','https://images2.imgbox.com/b0/3a/S97DcOWu_o.jpg','https://images2.imgbox.com/6b/19/B1IkMKy7_o.jpg','https://images2.imgbox.com/3c/60/9LT5WyQS_o.jpg','https://images2.imgbox.com/b7/e5/LHoWbvK3_o.jpg','https://images2.imgbox.com/2e/a8/TFGPuPNW_o.jpg','https://images2.imgbox.com/c5/c5/pTpK9imc_o.jpg','https://images2.imgbox.com/46/a2/keI2ebDN_o.jpg','https://images2.imgbox.com/66/d7/drCtp06y_o.jpg','https://images2.imgbox.com/a9/72/oFBSDrai_o.jpg','https://images2.imgbox.com/40/36/Kufpu1ba_o.jpg','https://images2.imgbox.com/b4/61/X0pO1lXE_o.jpg','https://images2.imgbox.com/eb/da/M80TqKuX_o.jpg','https://images2.imgbox.com/7b/61/8hwlOQOw_o.jpg','https://images2.imgbox.com/6c/f7/j6tdP0IX_o.jpg','https://images2.imgbox.com/c7/3e/VopIAbqE_o.jpg','https://images2.imgbox.com/52/29/o5LWlFhk_o.jpg','https://images2.imgbox.com/65/f5/WViZf2th_o.jpg','https://images2.imgbox.com/93/19/h7aUHCds_o.jpg','https://images2.imgbox.com/1e/8e/OSk0Rhto_o.jpg','https://images2.imgbox.com/58/98/zWWUN1pd_o.jpg','https://images2.imgbox.com/e9/da/N8n16psC_o.jpg','https://images2.imgbox.com/b2/75/Dr7h1CRR_o.jpg','https://images2.imgbox.com/68/38/a1WLt0Ke_o.jpg','https://images2.imgbox.com/15/9d/DF0BHya9_o.jpg','https://images2.imgbox.com/20/ef/1SjotcUs_o.jpg','https://images2.imgbox.com/b5/68/DakUmQDF_o.jpg','https://images2.imgbox.com/4b/87/wDbwoUk1_o.jpg','https://images2.imgbox.com/c9/1a/4hSebrEY_o.jpg','https://images2.imgbox.com/45/50/3NUAtofd_o.jpg','https://images2.imgbox.com/d7/31/7XjzjvLU_o.jpg','https://images2.imgbox.com/3e/99/K709jKU7_o.jpg','https://images2.imgbox.com/b2/5e/gYOlYEeQ_o.jpg','https://images2.imgbox.com/bf/94/Dm88bluP_o.jpg','https://images2.imgbox.com/9a/f8/snIm4Vv0_o.jpg','https://images2.imgbox.com/ff/fc/p1LVgzF7_o.jpg','https://images2.imgbox.com/a3/20/bgmEJAol_o.jpg','https://images2.imgbox.com/76/b1/FhqJg9pO_o.jpg','https://images2.imgbox.com/8d/42/Q4Zq7m3c_o.jpg','https://images2.imgbox.com/ca/da/9ZY11dIY_o.jpg','https://images2.imgbox.com/0b/63/IHLxfMQy_o.jpg','https://images2.imgbox.com/3d/3c/gxOoJB7v_o.jpg','https://images2.imgbox.com/ba/97/RXxEq9cS_o.jpg','https://images2.imgbox.com/6a/8d/8FZ6pxjv_o.jpg','https://images2.imgbox.com/1d/69/P0RRNZmU_o.jpg','https://images2.imgbox.com/83/3e/VPTKtvUO_o.jpg','https://images2.imgbox.com/76/b2/iOefSjKU_o.jpg','https://images2.imgbox.com/09/56/GXi2EqoI_o.jpg','https://images2.imgbox.com/a3/e9/BYftGrRL_o.jpg','https://images2.imgbox.com/8b/dc/fbEnzNkf_o.jpg','https://images2.imgbox.com/3f/0a/mRUo1JQV_o.jpg','https://images2.imgbox.com/ce/15/VAz25RWi_o.jpg','https://images2.imgbox.com/22/17/TcOudYCT_o.jpg','https://images2.imgbox.com/25/c9/Ep89vp4A_o.jpg','https://images2.imgbox.com/67/3f/vZljHGL8_o.jpg','https://images2.imgbox.com/12/de/ukqVFR7Q_o.jpg','https://images2.imgbox.com/ab/01/kifti8me_o.jpg','https://images2.imgbox.com/c7/cc/Zcb45Ful_o.jpg','https://images2.imgbox.com/f0/5c/uKZ4wAej_o.jpg','https://images2.imgbox.com/d5/a8/lyk7FmXM_o.jpg','https://images2.imgbox.com/77/ba/gngBJo7g_o.jpg','https://images2.imgbox.com/0a/6b/7onMmNFc_o.jpg','https://images2.imgbox.com/c1/e7/KEvhymdH_o.jpg','https://images2.imgbox.com/0c/4e/3wBSeR5X_o.jpg','https://images2.imgbox.com/62/60/UzdKE7eR_o.jpg','https://images2.imgbox.com/01/f6/ikPhrbhD_o.jpg','https://images2.imgbox.com/ba/e9/waHRtsks_o.jpg','https://images2.imgbox.com/58/e3/X7tmbwC3_o.jpg','https://images2.imgbox.com/57/58/b9d6FQm9_o.jpg','https://images2.imgbox.com/41/e4/72GfgUCj_o.jpg','https://images2.imgbox.com/10/bf/cKPiUUHE_o.jpg','https://images2.imgbox.com/50/d0/a9xBbYZb_o.jpg','https://images2.imgbox.com/5e/7e/teQAYCV7_o.jpg','https://images2.imgbox.com/dd/d0/RyjBrbWZ_o.jpg','https://images2.imgbox.com/e5/f7/3yXMckL1_o.jpg','https://images2.imgbox.com/97/5e/3oOoSxPJ_o.jpg','https://images2.imgbox.com/b2/8a/DfRuZuba_o.jpg','https://images2.imgbox.com/80/c0/Bx9dmlQB_o.jpg','https://images2.imgbox.com/18/7b/lzo917Z1_o.jpg','https://images2.imgbox.com/b2/a4/dnlUeZjh_o.jpg','https://images2.imgbox.com/4d/c7/wa81o77K_o.jpg','https://images2.imgbox.com/42/92/241ATvJK_o.jpg','https://images2.imgbox.com/88/03/fpyy4hs6_o.jpg','https://images2.imgbox.com/23/e6/vi6Rz5CA_o.jpg','https://images2.imgbox.com/77/3a/djDiVIjG_o.jpg','https://images2.imgbox.com/a6/f1/1BKyddVR_o.jpg','https://images2.imgbox.com/0c/80/dZkDbnDF_o.jpg','https://images2.imgbox.com/00/6f/DQWVO3Z6_o.jpg','https://images2.imgbox.com/60/93/TmeBp6vi_o.jpg','https://images2.imgbox.com/27/26/h2VKImIr_o.jpg','https://images2.imgbox.com/23/3f/H8ga0V8m_o.jpg','https://images2.imgbox.com/70/6f/BaHRjqrB_o.jpg','https://images2.imgbox.com/2c/4e/FeehXabr_o.jpg','https://images2.imgbox.com/da/33/xcYBvPcx_o.jpg','https://images2.imgbox.com/bb/1c/diIHZcKk_o.jpg','https://images2.imgbox.com/e7/80/3WHUJER8_o.jpg','https://images2.imgbox.com/02/f5/51teKDaw_o.jpg','https://images2.imgbox.com/56/85/eesRZtTj_o.jpg','https://images2.imgbox.com/39/5f/iwqqVesF_o.jpg','https://images2.imgbox.com/8e/8e/Ojd5om9i_o.jpg','https://images2.imgbox.com/e3/6f/mK7GIuxP_o.jpg','https://images2.imgbox.com/22/ab/CJKsVlnM_o.jpg','https://images2.imgbox.com/1e/c1/0sfqOTvu_o.jpg','https://images2.imgbox.com/59/07/okcP5YFl_o.jpg','https://images2.imgbox.com/eb/60/dkXi73B9_o.jpg','https://images2.imgbox.com/48/59/cjYVYG9y_o.jpg','https://images2.imgbox.com/74/ce/v7w3DMdu_o.jpg','https://images2.imgbox.com/7d/c1/IGXyIIGW_o.jpg','https://images2.imgbox.com/46/ac/utlE941Y_o.jpg','https://images2.imgbox.com/64/5c/FgonOEEv_o.jpg','https://images2.imgbox.com/11/e1/47zcckbs_o.jpg','https://images2.imgbox.com/67/84/v0SUVY6s_o.jpg','https://images2.imgbox.com/0f/ea/BgaUTiQN_o.jpg','https://images2.imgbox.com/e2/c1/23PQPp5e_o.jpg','https://images2.imgbox.com/72/8c/raen33Kr_o.jpg','https://images2.imgbox.com/18/7f/OngYdhY4_o.jpg','https://images2.imgbox.com/0b/ef/QNyiV1b7_o.jpg','https://images2.imgbox.com/bb/90/D3AekLB4_o.jpg','https://images2.imgbox.com/35/6b/Q0kiiBTe_o.jpg','https://images2.imgbox.com/e4/ec/rjKSYJE8_o.jpg','https://images2.imgbox.com/7e/04/090tz21I_o.jpg','https://images2.imgbox.com/9e/6c/TTrF5Pb5_o.jpg','https://images2.imgbox.com/9f/95/M6Xm3rJv_o.jpg','https://images2.imgbox.com/36/85/1VCzuKrK_o.jpg','https://images2.imgbox.com/76/85/4y6FEFnj_o.jpg','https://images2.imgbox.com/3e/f4/WaVQ8YGO_o.jpg','https://images2.imgbox.com/84/6a/8yOlcp2i_o.jpg','https://images2.imgbox.com/19/eb/l4Ks7Le0_o.jpg','https://images2.imgbox.com/b6/dc/BtOMlAWy_o.jpg','https://images2.imgbox.com/54/44/qjq128Yf_o.jpg','https://images2.imgbox.com/16/0a/ZSRVblh8_o.jpg','https://images2.imgbox.com/d2/cc/3Rfn8ZIE_o.jpg','https://images2.imgbox.com/a6/a0/aZYCuvlE_o.jpg','https://images2.imgbox.com/6c/7d/RV2QIQ1I_o.jpg','https://images2.imgbox.com/4c/f3/H399JQA6_o.jpg','https://images2.imgbox.com/45/ba/8IVNssIn_o.jpg','https://images2.imgbox.com/e2/93/mU54EfzR_o.jpg','https://images2.imgbox.com/49/d1/5ZFBCi3I_o.jpg','https://images2.imgbox.com/89/d9/hmBaENPu_o.jpg','https://images2.imgbox.com/da/f0/khyF5UHN_o.jpg','https://images2.imgbox.com/05/d3/TvwxJExr_o.jpg','https://images2.imgbox.com/24/75/JWc6s1c0_o.jpg','https://images2.imgbox.com/ee/fd/hbsPawYA_o.jpg','https://images2.imgbox.com/49/86/3wfPLDup_o.jpg','https://images2.imgbox.com/b5/6b/SbgkZDKa_o.jpg','https://images2.imgbox.com/04/5e/wAuUS7cr_o.jpg','https://images2.imgbox.com/f8/4a/O3OpuuID_o.jpg','https://images2.imgbox.com/83/fa/RylliQ4s_o.jpg','https://images2.imgbox.com/58/8c/rgDnNR5S_o.jpg',
	       'https://images2.imgbox.com/21/c5/hbJaURfe_o.jpg','https://images2.imgbox.com/60/8e/InNixy9d_o.jpg','https://images2.imgbox.com/42/4d/NKis3ygG_o.jpg','https://images2.imgbox.com/28/66/YaHpzjyC_o.jpg','https://images2.imgbox.com/dd/a5/oaG0FcFF_o.jpg','https://images2.imgbox.com/c0/3c/a7U00Hfk_o.jpg','https://images2.imgbox.com/2d/88/xidGt7rV_o.jpg','https://images2.imgbox.com/df/01/01vH5OMn_o.jpg','https://images2.imgbox.com/b7/fc/GHWHW2Fu_o.jpg','https://images2.imgbox.com/5f/32/natNZ7nH_o.jpg','https://images2.imgbox.com/37/20/QkJZl3wu_o.jpg','https://images2.imgbox.com/8c/64/352zRrVN_o.jpg','https://images2.imgbox.com/a3/a9/5UZgVObG_o.jpg','https://images2.imgbox.com/2e/6c/vM84nswq_o.jpg','https://images2.imgbox.com/d8/3f/CKRQF0Qi_o.jpg','https://images2.imgbox.com/c0/12/tYbap12z_o.jpg','https://images2.imgbox.com/2f/d2/ymr3EXVg_o.jpg','https://images2.imgbox.com/c2/77/ErG9JVGf_o.jpg','https://images2.imgbox.com/c3/b4/WI2nP3z4_o.jpg','https://images2.imgbox.com/d9/ba/N2t62Fgn_o.jpg','https://images2.imgbox.com/50/13/GSi2Aofw_o.jpg','https://images2.imgbox.com/3c/df/t8vpcu9U_o.jpg','https://images2.imgbox.com/95/ea/A1yqgLlH_o.jpg','https://images2.imgbox.com/3b/20/bDFopHsk_o.jpg','https://images2.imgbox.com/57/f9/yy09c6mp_o.jpg','https://images2.imgbox.com/e8/17/62qNSddW_o.jpg','https://images2.imgbox.com/80/37/MyvA9c9E_o.jpg','https://images2.imgbox.com/dc/45/4Kj1FiIW_o.jpg','https://images2.imgbox.com/ff/23/JqW1uAd4_o.jpg','https://images2.imgbox.com/e1/23/3qNHKFbw_o.jpg','https://images2.imgbox.com/a4/e9/KwgkqUAc_o.jpg','https://images2.imgbox.com/76/cd/tQ9cmj4U_o.jpg','https://images2.imgbox.com/40/60/BavUco4h_o.jpg','https://images2.imgbox.com/c3/77/iSbIGsCp_o.jpg','https://images2.imgbox.com/27/b3/pLxaZxAg_o.jpg','https://images2.imgbox.com/4a/89/20P53nUi_o.jpg','https://images2.imgbox.com/8f/c1/qnTJHSJn_o.jpg','https://images2.imgbox.com/7c/64/TYBDvHxD_o.jpg','https://images2.imgbox.com/d8/f7/qSWFBZEX_o.jpg','https://images2.imgbox.com/e6/37/JJznS9Qp_o.jpg','https://images2.imgbox.com/fd/a9/U9utdDH7_o.jpg','https://images2.imgbox.com/e9/eb/vlxKDO0e_o.jpg','https://images2.imgbox.com/0a/71/77MOq0Ar_o.jpg','https://images2.imgbox.com/96/ac/iXyFLMwa_o.jpg','https://images2.imgbox.com/8c/0d/PKzf2VDX_o.jpg','https://images2.imgbox.com/9a/fd/BMCauMv9_o.jpg','https://images2.imgbox.com/e3/bc/qpeANR8Q_o.jpg','https://images2.imgbox.com/d9/3f/TVTfevuJ_o.jpg','https://images2.imgbox.com/c7/43/UQmu07Yj_o.jpg','https://images2.imgbox.com/20/c3/dhGLjmWi_o.jpg','https://images2.imgbox.com/7f/cc/TYpbtsBH_o.jpg','https://images2.imgbox.com/8f/95/RNeyPjut_o.jpg','https://images2.imgbox.com/b3/30/QGiPSuxN_o.jpg','https://images2.imgbox.com/9b/95/08rgOjpZ_o.jpg','https://images2.imgbox.com/1b/04/5Ukfj3cB_o.jpg','https://images2.imgbox.com/55/9c/5JNj2U4X_o.jpg','https://images2.imgbox.com/c6/52/raXZuh88_o.jpg','https://images2.imgbox.com/10/eb/ef0bw8G1_o.jpg','https://images2.imgbox.com/6c/91/nRFXfLcR_o.jpg','https://images2.imgbox.com/5a/b3/xq3gfNkb_o.jpg','https://images2.imgbox.com/b8/73/pB5MlHhH_o.jpg','https://images2.imgbox.com/3c/e7/NBBeyYUc_o.jpg','https://images2.imgbox.com/60/32/nxrpCXpA_o.jpg','https://images2.imgbox.com/dd/90/nVSMoFNI_o.jpg']
let mems = memess[Math.floor(Math.random() * memess.length)]
memes = await getBuffer(mems)
const fdicho =['Aquí tienes 💕🦈','Pedido entregado 🕊','Tengo muchas más 😽']
const fmem = fdicho[Math.floor(Math.random() * fdicho.length)]
let buttons = [
                    {buttonId: `meme`, buttonText: {displayText: 'Siguiente'}, type: 1}
                ]
                let buttonMessage = {
                    image: (memes),
		    caption: (fmem),
                    buttons: buttons,
                    headerType: 4
                }
                GojoMdNx.sendMessage(m.chat, buttonMessage)
            }
break

//══════════════════════════════════════════//
//
//                 🌸WATAME🌸
//          LISTA DE COMANDOS HENTAI
//		      FIN
//
//══════════════════════════════════════════//

            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            reply(bang)
                    }
                    try {
                        reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await reply(evaled)
                    } catch (err) {
                        await reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return reply(err)
                        if (stdout) return reply(stdout)
                    })
                }

		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }

		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    GojoMdNx.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }


    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
