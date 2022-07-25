const pinataSDK = require('@pinata/sdk');
const pinata = pinataSDK('5bc43b79514c37450473', '0631e02226c2c0f82b81eae6d61fae7c2b8da9c44103825a44386153ba6bdb3d');


module.exports.pinJSON = (body) => {
    const options = {
        pinataOptions: {
            cidVersion: 0
        }
    };
        pinata.pinJSONToIPFS(body, options).then((result) => {
            //handle results here
            console.log(result);

        }).catch((err) => {
            //handle error here
            console.log(err);

        });

    
}