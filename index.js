const TelegramBot=require('node-telegram-bot-api')
const TOKEN='654555427:AAHHyDDjZTrwb6oC0FXo0l446NRzhqDosMc'

const bot=new TelegramBot(TOKEN,{polling:true})

bot.onText(/бухло/,msg=>{
    bot.sendMessage(msg.chat.id,'пить')
    bot.sendPhoto(msg.chat.id,'https://avatanplus.com/files/resources/original/588dd50e40b89159ea083fb9.png')
})

require('http').createServer().listen(process.env.PORT || 5000).on('request', function(req, res){
    res.end('')
})

