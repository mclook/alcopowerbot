const TelegramBot=require('node-telegram-bot-api')
const TOKEN='654555427:AAHHyDDjZTrwb6oC0FXo0l446NRzhqDosMc'

const bot=new TelegramBot(TOKEN,{polling:true})

bot.polling(none_stop = True)





bot.onText(/whatdrink/,msg=>{
    var randomNumber=Math.random() * (10 - 1) + 1;
    randomNumber = Math.round(randomNumber);
    bot.sendMessage(msg.chat.id,'пить')

    bot.sendMessage(msg.chat.id,randomNumber)
    switch(randomNumber) {
        case 1: bot.sendPhoto(msg.chat.id,'https://avatanplus.com/files/resources/original/588dd50e40b89159ea083fb9.png');
            break;
        case 2: bot.sendPhoto(msg.chat.id,'http://www.buhlo.info/images/stories/virtuemart/product/vodka-nemiroff-osobaya-nemirov-05.png');
            break;
        case 3: bot.sendPhoto(msg.chat.id,'https://images.ua.prom.st/359446842_w640_h640_cid2316135_pid248416928-13565226.png');
            break;
        case 4: bot.sendPhoto(msg.chat.id,'http://byxlo.com.ua/upload/iblock/a0d/a0d06b684294762ecb914f523cac1ecb.png');
            break;
        case 5: bot.sendPhoto(msg.chat.id,'http://www.buxlo.com.ua/upload/iblock/f26/f26228e4849478b482750abe134bea62.png');
            break;
        case 6: bot.sendPhoto(msg.chat.id,'http://i.otzovik.com/objects/b/220000/215799.png');
            break;
        case 7: bot.sendPhoto(msg.chat.id,'http://byxlo.com.ua/upload/iblock/a95/a9536d026935f80f7a8ee3475742db99.png');
            break;
        case 8: bot.sendPhoto(msg.chat.id,'https://cs8.pikabu.ru/images/big_size_comm/2016-01_4/1452983203184410279.jpg');
            break;
        case 9: bot.sendPhoto(msg.chat.id,'https://avatanplus.com/files/resources/original/57838a5264fad155d9d451ee.png');
            break;
        case 10: bot.sendPhoto(msg.chat.id,'https://avatanplus.com/files/resources/mid/578b87b031c32155f90a084c.png');
            break;
        default:
            break;
    }

   // bot.sendPhoto(msg.chat.id,'https://avatanplus.com/files/resources/original/588dd50e40b89159ea083fb9.png')

})
bot.onText(/whatkolicheva/,msg=>{
    bot.sendMessage(msg.chat.id,'pidoraska')
})
require('http').createServer().listen(process.env.PORT || 5000).on('request', function(req, res){
    res.end('')
})

