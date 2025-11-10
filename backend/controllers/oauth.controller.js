import userModal from "../models/user.modal.js";

export const oAuth = async (accessToken, refreshToken, profile, done) => {
    try {
        let user = await userModal.findOne({googleId : profile.id});
        if(!user){
            user = new userModal({
                googleId : profile.id,
                name : profile.displayName,
                email : profile.emails[0].value,
                profilePic : profile.photos[0].value,
                provider : 'google'
            });
            await user.save(null, );
        };
        return done(null, user)
    } catch (err) {
        console.log('Error in oAuth : ',err);
        return done(err, null)
    }
}