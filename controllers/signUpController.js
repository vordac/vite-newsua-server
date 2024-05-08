const admin = require('../services/firebase-admin.js');
const User = require('../models/userModel.js');

const signup = async (req, res) => {
    const { email, password, username } = req.body;

    try {
        const userRecord = await admin.auth().createUser({
            email,
            password,
        });

        const user = new User({
            email,
            isBlocked: false,
            password,
            role: 'author',
            uid: userRecord.uid,
            username,
        });

        await user.save();

        res.status(201).send({
            message: 'User created successfully',
            uid: userRecord.uid,
        });
    } catch (error) {
        res.status(500).send({
            error: error.message,
        });
    }
};

exports.signup = signup;