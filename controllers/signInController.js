const admin = require('../services/firebase-admin.js');
const User = require('../models/userModel.js');


const signin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const userRecord = await admin.auth().getUserByEmail(email);
        const user = await User.findByUid(userRecord.uid);

        if (!user) {
            return res.status(404).send({
                error: 'User not found',
            });
        }

        const isValidPassword = await user.comparePassword(password);

        if (!isValidPassword) {
            return res.status(401).send({
                error: 'Invalid password',
            });
        }

        res.json({ user });

    } catch (error) {
        res.status(500).send({
            error: error.message,
        });
    }
};

exports.signin = signin;
