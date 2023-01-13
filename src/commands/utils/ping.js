export default class Ping extends Interaction {
    constructor() {
      super({
        name: 'ping',
        description: 'Test the bots response time.',
      });
    }
  
    async exec(int) {
      return int.reply({
        content: `🏓 Pong!\n 📡 Ping: ${int.client.ws.ping}ms latency`,
        ephemeral: false,
      });
    }
  };