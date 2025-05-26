globalThis.log = (data) => console.log(data);
globalThis.clearLog = () => console.clear();
globalThis.logError = (errorData) => {
    if (!errorData) {
        console.error(`❌ Error!`);
    } else {
        console.error(`❌ ${errorData}`)
    }
}
globalThis.logWarn = (warnData) => {
    if (!warnData) {
        console.warn(`⚠️ Warn!`);
    } else {
        console.warn(`⚠️ ${warnData}`)
    }
}
globalThis.logSuccess = (data) => {
    if (!data) {
        console.log(`✅ Success!`);
    } else {
        console.log(`✅ ${data}`);
    }
}
globalThis.logInfo = (infoData) => {
    if (!infoData) {
        console.info(`ℹ️ Info`);
    } else {
        console.info(`ℹ️ ${infoData}`);
    }
}
globalThis.logDebug = (debugData) => {
    if (!debugData) {
        console.debug(`🐞 Debug`);
    } else {
        console.debug(`🐞 ${debugData}`);
    }
}
globalThis.sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))
globalThis.logWithTime = (data) => {
    const now = new Date().toLocaleTimeString();
    if (!data) {
        console.log(`🕒 [${now}] Log`);
    } else {
        console.log(`🕒 [${now}] ${data}`);
    }
}
globalThis.pickRandom = (arr) => {
    if (!Array.isArray(arr) || arr.length === 0) return null;
    return arr[Math.floor(Math.random() * arr.length)];
}
globalThis.randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default {};
