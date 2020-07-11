const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
var i = 1;
async function getMultiplePage() {
    while (i <= 10) {
        var url = 'https://dantri.com.vn/xa-hoi.htm'

        if (i == 1) {
            console.log(url)
        } else {
            url = url.replace(/.htm/, '/trang-' + i + '.htm')
            console.log(url)
        }

        await request(url, (err, res, body) => {
            if (!err && res.statusCode == 200) {
                const $ = cheerio.load(body);
                $('.mt3').each((index, item) => {
                    const title = $(item).find('.mr1 h2 a').text();
                    console.log(`Title trang ${i} :  ${title}`)
                })
            }
        })

        i++;
    }
}