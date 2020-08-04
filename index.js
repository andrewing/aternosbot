require('dotenv').config()
const Discord = require('discord.js')

const client = new Discord.Client()

const token = process.env.TOKEN
const prefix = process.env.PREFIX

client.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  
  const args = message.content.slice(prefix.length).trim().split(' ');
  const command = args.shift().toLowerCase();

  
})

client.on('ready', ()=>{
  console.log("UP!")
})

client.login(token)