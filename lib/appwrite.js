import { Account, Avatars, Client, Databases, ID } from 'react-native-appwrite';



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

// client
//     .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
//     .setProject(appwriteConfig.projectId) // Your project ID
//     .setPlatform(appwriteConfig.platform) // Your application ID or bundle ID.
//     ;


//     // Register user
// const account = new Account(client);
// const avatars = new Avatars(client);
// const databases = new Databases(client);

// export const createUser = async (email, password, username) => {
//     try {
//         const newAccount = await account.create(
//             ID.unique(),
//             email,
//             password,
//             username
//         )

//         if (!newAccount) throw Error

//         const avatarUrl = avatars.getInitials(username);

//         await signIn(email, password);

//         const newUser = await databases.createDocument(
//             appwriteConfig.databaseId,
//             appwriteConfig.userCollectionId,
//             ID.unique(),
//             {
//                 accountId: newAccount.$id,
//                 email,
//                 username,
//                 avatar: avatarUrl
//             }
//         );

//         return newUser;
//     } catch (error) {
//         console.log(error);
//         throw new Error(error);
//     }
// };


// sign in user
// export async function signIn(email, password) {
//     try {
//         const session = await account.createEmailPasswordSession(email, password);

//         return session;
//     } catch (error) {
//         throw new Error(error);
//     }
// };


const account = new Account(client);
// const storage = new Storage(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

// Register user
export async function createUser(email, password, username) {
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    );

    if (!newAccount) throw Error;

    const avatarUrl = avatars.getInitials(username);

    await signIn(email, password);

    const newUser = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email: email,
        username: username,
        avatar: avatarUrl,
      }
    );

    return newUser;
  } catch (error) {
    throw new Error(error);
  }
}

// Sign In
export async function signIn(email, password) {
  try {
    const session = await account.createEmailSession(email, password);

    return session;
  } catch (error) {
    throw new Error(error);
  }
}