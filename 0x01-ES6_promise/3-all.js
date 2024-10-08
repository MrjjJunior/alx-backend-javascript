#!/usr/bin/node

import { uploadPhoto, createUser } from './utils.js';

function handleProfileSignup() {
    return Promise.all([uploadPhoto(), createUser()])
        .then((values) => {
            const [photo, user] = values;
            console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
        })
        .catch(() => {
            console.log('Signup system offline');
        });
}

export default handleProfileSignup;
