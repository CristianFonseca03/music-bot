module.exports = class Fav extends Interaction {
  constructor() {
    super({
      name: 'tako',
      description: '🌯 JuarJuar!',
    });
  }

  async exec(int, data) {
    let channel = int.member.voice.channel;
    if (!channel)
      return int.reply({
        content: `${this.client.emotes.get(
          'nomic',
        )} You must be in a voice channel to use this command!`,
        ephemeral: true,
      });
    if (int.guild.members.me.voice.channel && channel !== int.guild.members.me.voice.channel)
      return int.reply({
        content: `${this.client.emotes.get(
          'nomic',
        )} You must be in the same voice channel as me to use this command!`,
        ephemeral: true,
      });
    await int.deferReply();
    await int.editReply({
      content: `🌯 Juar Juar 🌯`,
      ephemeral: false,
    });
    const url = 'https://youtu.be/0-Jfeox4gCs';
    return this.client.play(this.client, int, data, url, 'youtube', false, true, false, false);
  }
};
