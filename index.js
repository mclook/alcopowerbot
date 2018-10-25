const TelegramBot=require('node-telegram-bot-api')
const TOKEN='654555427:AAHHyDDjZTrwb6oC0FXo0l446NRzhqDosMc'

const bot=new TelegramBot(TOKEN,{polling:true})
bot.onText(/привет/,msg=>{
    bot.sendMessage(msg.chat.id,'Привет')
})

bot.on('message',msg=>{

    bot.sendMessage(msg.chat.id,'Da')
})
require('http').createServer().listen(process.env.PORT || 5000).on('request', function(req, res){
    res.end('')
})

