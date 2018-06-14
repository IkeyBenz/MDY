var config = {
    apiKey: "AIzaSyDo33Z_m3kikJRajo6MHFeSiaeFEA2RjKg",
    authDomain: "mdy-tips-db.firebaseapp.com",
    databaseURL: "https://mdy-tips-db.firebaseio.com",
    projectId: "mdy-tips-db",
    storageBucket: "mdy-tips-db.appspot.com",
    messagingSenderId: "612211417506"
  };
firebase.initializeApp(config);
const database = firebase.database();
document.onload = loadStaff();

async function loadStaff() {
    let staff = await new Promise(function(resolve, reject) {
        database.ref('Staff').once('value', snapshot => {
            resolve(snapshot.val());
        });
    });
    for (category in staff) {
        console.log(category);
    }
}