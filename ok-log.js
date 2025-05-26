const g = typeof window !== 'undefined' ? window : globalThis;

g.log = (data) => console.log(data);
g.clearLog = () => console.clear();
g.logError = (errorData) => {
    console.error(errorData ? `❌ ${errorData}` : '❌ Error!');
};
g.logWarn = (warnData) => {
    console.warn(warnData ? `⚠️ ${warnData}` : '⚠️ Warn!');
};
g.logSuccess = (data) => {
    console.log(data ? `✅ ${data}` : '✅ Success!');
};
g.logInfo = (infoData) => {
    console.info(infoData ? `ℹ️ ${infoData}` : 'ℹ️ Info');
};
g.logDebug = (debugData) => {
    console.debug(debugData ? `🐞 ${debugData}` : '🐞 Debug');
};
g.sleep = (ms) => new Promise((res) => setTimeout(res, ms));
g.logWithTime = (data) => {
    const now = new Date().toLocaleTimeString();
    console.log(`🕒 [${now}] ${data ?? 'Log'}`);
};
g.pickRandom = (arr) => {
    if (!Array.isArray(arr) || arr.length === 0) return null;
    return arr[Math.floor(Math.random() * arr.length)];
};
g.randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default {};
