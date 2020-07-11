const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');

for (var i = 1; i <= 10; i++) {
    var url = 'https://dantri.com.vn/xa-hoi.htm'

    if (i == 1) {
        var url = 'https://dantri.com.vn/xa-hoi.htm'

        console.log(url)
    } else {
        url = url.replace(/.htm/, '/trang-' + i + '.htm')
        console.log(url)
    }

    request(url, (err, res, body) => {
        if (!err && res.statusCode == 200) {
            const $ = cheerio.load(body);
            $('.mt3').each((index, item) => {
                const title = $(item).find('.mr1 h2 a').text();
                console.log(`Title trang ${i} :  ${title}`)
            })
        }
    })

}