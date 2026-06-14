import rustplus from "@liamcottle/rustplus.js"
import sendRequest from "@liamcottle/rustplus.js"
rustplus.sendRequest({
    sendTeamMessage: {
        message: "Message for Team Chat",
    },
}, (message) => {
    console.log(message);
})