const admin = require('../services/firebase-admin.js');

const logout = function (req, res) {
    admin.auth().signOut().then(() => {
        res.redirect('/login');
    }).catch((error) => {
        // An error happened.
    });
}

exports.logout = logout;