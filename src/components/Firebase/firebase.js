import app from 'firebase/app';

class Firebase {
    constructor(){
        app.initializeApp()
    }
}

export default Firebase;