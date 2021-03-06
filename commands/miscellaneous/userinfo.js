const { RichEmbed } = require("discord.js")
const { pink } = require("../../colours.json");

module.exports = {
    config: {
        name: "userinfo",
        description: "Pulls the userinfo of yourself or a user!",
        usage: "!userinfo (@mention)",
        category: "miscellaneous",
        accessableby: "Members",
        aliases: ["ui"]
    },
    run: async (bot, message, args) => {
    let uEmbed = new RichEmbed()
        .setColor(pink)
        .setTitle("User Info")
        .setThumbnail(message.guild.iconURL)
        .setAuthor(`${message.author.username} Info`, message.author.displayAvatarURL)
        .addField("**Username:**", `${message.author.username}`, true)
        .addField("**Discriminator:**", `${message.author.discriminator}`, true)
        .addField("**ID:**", `${message.author.id}`, true)
        .addField("**Status:**", `${message.author.presence.status}`, true)
        .addField("**Created At:**", `${message.author.createdAt}`, true)
        .setFooter("Chloe, your Android hostess.");

    message.channel.send(uEmbed);
    }
}
