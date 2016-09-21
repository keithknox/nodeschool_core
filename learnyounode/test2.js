url = require('url');
http = require('http');
var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    var urlQuery = url.parse(req.url, true);
    if (urlQuery.pathname === '/api/parsetime' && urlQuery.query.iso) {
        var timeToParse = new Date(urlQuery.query.iso);
        var returnValue = {
            'hour': timeToParse.getHours(),
            'minute': timeToParse.getMinutes(),
            'second': timeToParse.getSeconds()
        };
        res.end(JSON.stringify(returnValue));
    }
    else if (urlQuery.pathname === '/api/unixtime') {
        res.end(JSON.stringify({'unixtime': Date.now()}));
    }
    else {
        res.end('Nothing to see here');
    }

});
server.listen(process.argv[2]);
