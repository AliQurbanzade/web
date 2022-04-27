let router = {};
const methods = ['GET'];
router.handle = function (req, res) {
    console.log(req);
    console.log(this.path);
    for (const method in methods) {
        console.log(methods[method],this._method);
        if (methods[method] != this._method) {
            throw new Error("Method is not supported")
        }
    }
    switch (this.method) {
        case "GET":
            return this.getMethod(callback);    
        default:
            break;
    }

}
router.getMethod = function (req,res) {
    const {method,path} = req;
    if (method == "GET" && path == this.path) {
        callback(req,res)
    }
}

module.exports = router;