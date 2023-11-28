function runCallbacks(callbacks) {
   return callbacks.forEach(el => el());
}
function firstCallback() {
    console.log("I'm the first callback");
}
function secondCallback() {
    console.log("I'm the second callback");
}

function thirdCallback() {
    console.log("I'm the third callback");
}

const callbackArray = [firstCallback, secondCallback, thirdCallback];
runCallbacks(callbackArray);