import { Client } from 'react-native-appwrite';



export const appwriteConfig = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.masud.aora',
    projectId: '6639b7f50004d89e842e',
    databaseId: '6639ba700030e9cc5f1a',
    userCollectionId: '6639ba700030e9cc5f1a',
    videoCollectionId: '6639baf5002d8f61d856',
    storageId: '6639bc7b002a6f0d3766',
}

// from react native appwrite sdk 

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
    .setProject(appwriteConfig.projectId) // Your project ID
    .setPlatform(appwriteConfig.platform) // Your application ID or bundle ID.
    ;


const account = new Account(client);


const createUser = () => {
    // Register User
    account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
        .then(function (response) {
                console.log(response);
            }, function (error) {
                console.log(error);
        });
}
