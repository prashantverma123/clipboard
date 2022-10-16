const crypto = require("crypto");


exports.createSha3512Hash = (data)=>{
    let d = data
    if (!data){
        throw 'data should be provided'
    }
    if (typeof d !== "string"){
        d = JSON.stringify(data)
    }
    return crypto.createHash("sha3-512").update(d).digest("hex");
}