import 'dotenv/config';

const testFn = () => {
    console.log("email.js ::: ", process.env.TEST_ID);
    console.log("email.js ::: ", process.env.TEST_PWD);
    console.log("email.js ::: ", process.env.TEST_KEYCODE);
}

export default testFn;