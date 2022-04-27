const http = require('http');
const request = require('./request');
const response = require('./response');
const router = require('./router');
function createApp() {
    
    var app = function (req,res,next) {
        app.handle(req,res,next);
    }
    app.router = Object.create(router,{
        app:{
            configurable:true,
            enumerable:true,
            writable:true,
            value:app
        }
    });
    app.request = Object.create(request,{
        app:{
            configurable:true,
            enumerable:true,
            writable:true,
            value:app
        }
    });

    app.response = Object.create(response,{
        app:{
            configurable:true,
            enumerable:true,
            writable:true,
            value:app
        }
    });
    
    app.listen = function listen() {
        let server = http.createServer(this.handle);
        return server.listen.apply(server,arguments);
    }
    
    app.handle = function handle(req, res, callback, method) {
        this.callback = callback;
        router.method = req._method;
        router.handle(req, res, callback, method,this.path)
    }
    app.get = function (path,callback) {
        router.path = path;
        this.handle(this.request,this.response,callback,"GET")
    }

    return app;
}

module.exports = createApp;
