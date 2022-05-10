var axios = require('axios');
var cheerio = require('cheerio');

function Reptile() { };

Reptile.prototype.getData = async function (url, rute) {
    const ret = await axios.get(url);
    const list = [];
    if (ret.status == 200) {
        const $ = cheerio.load(ret.data);
        $(rute).each(function () {
            const tmp = {
                name: $(this).html(),
                href: $(this)[0].attribs.href
            };
            list.push(tmp);
        });
    }
    return list;
}

module.exports = new Reptile();
