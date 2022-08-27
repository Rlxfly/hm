const axios = require('axios');
const ch = require('cheerio');

axios({
  method: "GET",
  url: "http://ngarang.com/link-grup-wa/daftar-link-grup-wa.php?search=bot+wa&searchby=name",
headers: {
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36"
}}).then(res => {
  const $ = ch.load(res.data);
  let arr = [];
  $("div.wa-chat").each((i, el) => {
    arr.push({
      grupName: $(el).find("div.wa-chat-body > div.wa-chat-title-container > a > div.wa-chat-title > div.wa-chat-title-text").text().split('.')[1].trim().replace("*", ''),
      grupLink: $(el).find("div.wa-chat-body > div.wa-chat-title-container > a").attr("href").split("?grup")[0]
    })
  })
  console.log(arr)
}).catch(err => {
  console.log(err)
})
