const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'minezindoshomi.minefort.com', // IP do seu servidor
  port: 25565,                         // Porta padrão
  username: 'BotDoThiago'             // Nome do bot
});

bot.on('spawn', () => {
  console.log('Bot entrou no servidor!');
});

bot.on('error', err => console.log('Erro:', err));
bot.on('end', () => {
  console.log('Bot foi desconectado. Reconectando...');
  setTimeout(() => {
    process.exit(1); // Railway reinicia automaticamente
  }, 3000);
});
