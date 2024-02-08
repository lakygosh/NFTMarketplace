//require('dotenv').config();
import axios from 'axios'
const key = process.env.REACT_APP_PINATA_KEY;
const secret = process.env.REACT_APP_PINATA_SECRET;

//const axios = require('axios');
const FormData = require('form-data');

export const uploadJSONToIPFS = async(JSONBody) => {
    const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;
    //making axios POST request to Pinata ⬇️
    return axios 
        .post(url, JSONBody, {
            headers: {
                pinata_api_key: "64ff4ee46b6d952fc87b",
                pinata_secret_api_key: "8ac2f19cb0734d8e46ec4d764d8442df25a2759ca96c8fb5eed212d5c17e0fd6",
            }
        })
        .then(function (response) {
           return {
               success: true,
               pinataURL: "https://red-top-seahorse-583.mypinata.cloud/" + response.data.IpfsHash
           };
        })
        .catch(function (error) {
            console.log(error)
            return {
                success: false,
                message: error.message,
            }

    });
};

export const uploadFileToIPFS = async(file) => {

    const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
    let data = new FormData();
    data.append('file', file);

    const metadata = JSON.stringify({
        name: 'testname',
        keyvalues: {
            exampleKey: 'exampleValue'
        }
    });
    data.append('pinataMetadata', metadata);

    //pinataOptions are optional
    const pinataOptions = JSON.stringify({
        cidVersion: 0,
        customPinPolicy: {
            regions: [
                {
                    id: 'FRA1',
                    desiredReplicationCount: 1
                },
                {
                    id: 'NYC1',
                    desiredReplicationCount: 2
                }
            ]
        }
    });
    data.append('pinataOptions', pinataOptions);
    try {
        const response = await axios.post(url, data, {
            maxBodyLength: 'Infinity',
            headers: {
                'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
                'pinata_api_key': "64ff4ee46b6d952fc87b",
                'pinata_secret_api_key': "8ac2f19cb0734d8e46ec4d764d8442df25a2759ca96c8fb5eed212d5c17e0fd6",
            }
        });

        console.log("Image uploaded successfully:", response.data.IpfsHash);

        return {
            success: true,
            pinataURL: "https://red-top-seahorse-583.mypinata.cloud/ipfs/" + response.data.IpfsHash
        };
    } catch (error) {
        console.error("Error uploading image:", error.message);
        return {
            success: false,
            message: error.message,
        };
    } finally {
        console.log("After try-catch block");
    }
    
};
