const TelegramBot=require('node-telegram-bot-api')
const TOKEN='654555427:AAHHyDDjZTrwb6oC0FXo0l446NRzhqDosMc'

const bot=new TelegramBot(TOKEN,{polling:true})

bot.on('message',msg=>{
    bot.sendMessage(msg.chat.id,'Privet')
})
