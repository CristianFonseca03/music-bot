module.exports = class Fav extends Interaction {
  constructor() {
    super({
      name: 'mandamiento',
      description: 'Responde con una verdad absoluta.',
    });
  }

  async exec(int) {
    return int.reply({
      content: `Persona non grata para nuestra comunidad, racista, sexista, homofobo y xenofobo, me insulto a mi y a todos mis familiares, textualmente dijo. Me defeco en los olivos que produjeron el aceite que engrasa los ataúdes de todos tus putisimos muertos.`,
      ephemeral: false,
    });
  }
};
