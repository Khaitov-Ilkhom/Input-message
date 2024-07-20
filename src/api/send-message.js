const { Telegraf } = require('telegraf');

const bot = new Telegraf(import.meta.env.BOT_TOKEN);

module.exports = async (req, res) => {
  if (req.method === 'POST') {
    const message = req.body.message;
    try {
      await bot.telegram.sendMessage(import.meta.env.CHAT_ID, message);
      res.status(200).send('Message sent successfully!');
    } catch (err) {
      res.status(500).send('Error sending message: ' + err.message);
    }
  } else {
    res.status(405).send('Method not allowed');
  }
};
