const { zokou } = require("../framework/zokou");  
const { getAllSudoNumbers, isSudoTableNotEmpty } = require("../bdd/sudo");  
const conf = require("../set");  
  
zokou({ nomCom: "owner", categorie: "General", reaction: "⭐" }, async (dest, zk, commandeOptions) => {  
    const { ms, mybotpic } = commandeOptions;  
  
    const thsudo = await isSudoTableNotEmpty();  
  
    if (thsudo) {  
        let msg = `*My Super-User*\n  
     *Owner Number*\n :  
- 🌟 @${conf.NUMERO_OWNER}  
  
------ *other sudos* -----\n`;  
  
        let sudos = await getAllSudoNumbers();  
  
        for (const sudo of sudos) {  
            if (sudo) {  
                sudonumero = sudo.replace(/[^0-9]/g, '');  
                msg += `- 💼 @${sudonumero}\n`;  
            } else {  
                return;  
            }  
        }  
  
        const ownerjid = conf.NUMERO_OWNER.replace(/[^0-9]/g, '') + "@s.whatsapp.net";  
        const mentionedJid = sudos.concat([ownerjid]);  
        console.log(sudos);  
        console.log(mentionedJid);  
  
        zk.sendMessage(  
            dest,  
            {  
                image: { url: mybotpic() },  
                caption: msg,  
                mentions: mentionedJid  
            }  
        );  
    } else {  
        const vcard =  
            'BEGIN:VCARD\n' +  
            'VERSION:3.0\n' +  
            'FN:' + conf.OWNER_NAME + '\n' +  
            'ORG:undefined;\n' +  
            'TEL;type=CELL;type=VOICE;waid=' + conf.NUMERO_OWNER + ':+' + conf.NUMERO_OWNER + '\n' +  
            'END:VCARD';  
        zk.sendMessage(dest, {  
            contacts: {  
                displayName: conf.OWNER_NAME,  
                contacts: [{ vcard }],  
            },  
        }, { quoted: ms });  
    }  
});  
  
zokou({ nomCom: "dev", categorie: "General", reaction: "⭐" }, async (dest, zk, commandeOptions) => {  
    const { ms, mybotpic } = commandeOptions;  
  
    const devs = [  
        { nom: "dev 𝐃𝚰𝐋 𝐊𝚫𝚴𝚯", numero: "255699155695" }  
    ];  
  
    let message = "WELCOME TO 𝐃𝚰𝐋 𝐊𝚫𝚴𝚯 HELP CENTER! ASK FOR HELP FROM THE DEVELOPER BELOW:\n\n";  
    for (const dev of devs) {  
        message += `----------------\n• ${dev.nom} : https://wa.me/${dev.numero}\n`;  
    }  
  
    var lien = mybotpic();  
    if (lien.match(/\.(mp4|gif)$/i)) {  
        try {  
            zk.sendMessage(dest, { video: { url: lien }, caption: message }, { quoted: ms });  
        } catch (e) {  
            console.log("🥵🥵 Menu error " + e);  
            repondre("🥵🥵 Menu error " + e);  
        }  
    }  
    else if (lien.match(/\.(jpeg|png|jpg)$/i)) {  
        try {  
            zk.sendMessage(dest, { image: { url: lien }, caption: message }, { quoted: ms });  
        } catch (e) {  
            console.log("🥵🥵 Menu error " + e);  
            repondre("🥵🥵 Menu error " + e);  
        }  
    } else {  
        repondre(lien);  
        repondre("link error");  
    }  
});  
  
zokou({ nomCom: "support", categorie: "General" }, async (dest, zk, commandeOptions) => {  
    const { ms, repondre, auteurMessage } = commandeOptions;  
  
    repondre("THANK YOU FOR CHOOSING 𝐃𝚰𝐋 𝐊𝚫𝚴𝚯, HERE ARE OUR SUPPORTIVE LINKS\n\n ☉ CHANNEL LINK IS HERE ☉\n\n❒⁠⁠⁠⁠[https://whatsapp.com/channel/0029Vb5vW8yLikgAkyNxnY1H] \n\n ☉ GITHUB LINK IS HERE ☉\n\n❒⁠⁠⁠⁠[https://github.com/next55x/DILI_KANO_-] \n\n\nmade by dil kano");  
    await zk.sendMessage(auteurMessage, { text: `THANK YOU FOR CHOOSING 𝐃𝚰𝐋 𝐊𝚫𝚴𝚯, MAKE SURE YOU FOLLOW THESE LINKS.` }, { quoted: ms });  
});
