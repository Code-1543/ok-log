# 🟢 ok-log

**ok-log** is a cute and handy global logging utility for JavaScript that enhances your console output with emojis and useful helpers — no need to import individual functions!

> Just `import 'ok-log'` once and use `log()`, `logError()`, `logSuccess()` etc. anywhere globally.

## ✨ Features

- 📄 `log(data)` – Regular `console.log`
- ✅ `logSuccess(data)` – Green success log
- ❌ `logError(error)` – Error log with red alert
- ⚠️ `logWarn(warn)` – Warning messages
- ℹ️ `logInfo(info)` – Informational messages
- 🐞 `logDebug(debug)` – For debugging
- 🕒 `logWithTime(data)` – Log with current time
- 🔄 `clearLog()` – Clear console
- 😴 `sleep(ms)` – Delay execution
- 🎲 `pickRandom(arr)` – Pick a random element
- 🔢 `randomInt(min, max)` – Generate random integer

---

## 🚀 Installation

```bash
npm install ok-log
```

## 🚀 Usage

```js
import 'ok-log';

log('Hello!');
logSuccess('Operation complete!');
logError('Something went wrong');
logWarn('This is a warning');
logInfo('Some info for you');
logDebug('Debugging now...');
logWithTime('This happened now');

await sleep(1000);

log(pickRandom(['🍎', '🍌', '🍇']));
log(randomInt(1, 100));
```

## ➡️ Output

```bash
Hello!
✅ Operation complete!
❌ Something went wrong
⚠️ This is a warning
ℹ️ Some info for you
🐞 Debugging now...
🕒 [14:32:01] This happened now

//sleep 1 sec

🍇 //pickRandom (random fruit)
57 //randomInt (random number between 1 and 100)