'use strict';
module.exports = function(app) {
    const users = require('../controllers/userControllers');
    const { check } = require('express-validator');
    const auth = require('../controllers/auth');


    //user routes
    app.route('/api/users')
    .post(users.create_a_user);

    // user wallpaper data
    app.route('/api/user/wallpapers')
    .get(auth.verify, users.get_user_wallpapers);


    //verify login credentials
    app.route('/api/user/login')
    .post(
        [
            check("email", "Please Enter a Valid Email")
            .not()
            .isEmpty()
            .isEmail(),
            check("password", "Please enter a valid password").isLength({
                min: 4
            })
        ], users.login_user);

    //get user info
    app.route('/api/user/profile')
    .get(auth.verify, users.get_user_info)
    .put(auth.verify, users.update_user_info)
    .delete(auth.verify, users.delete_account)


    app.route('/api/user/favorite')
    .put(auth.verify, users.user_favorite)
    .get(auth.verify, users.user_get_favorites);

    
    app.route('/api/user/unfavorite')
    .put(auth.verify, users.user_unfavorite);
};