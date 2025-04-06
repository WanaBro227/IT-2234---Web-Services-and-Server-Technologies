
# 📁 File Reading with Callbacks, Promises, and Async/Await in Node.js

This project demonstrates three different ways of reading files in **Node.js**:

1. **Callbacks** – Traditional approach.
2. **Promises** – Modern, cleaner syntax.
3. **Async/Await** – Syntactic sugar for working with promises.

---

## 📄 File Overview

### 1. `asynpro.js` – Using Callbacks
Reads a file (`file.txt`) using the `fs.readFile` method with a callback function.

### 2. `promiseapp.js` – Using Promises
Wraps `fs.readFile` in a promise to handle file reading more cleanly with `.then()` and `.catch()`.

### 3. `asynawait.js` – Using Async/Await and `Promise.allSettled`
Reads two files (`file.txt` and `data.txt`) simultaneously using async/await and `Promise.allSettled`.

---

## 🚀 How to Run

### Prerequisites
- Node.js installed on your system
- Two text files in the same directory:
  - `file.txt`
  - `data.txt` (only needed for `asynawait.js`)

### Steps

```bash
# Run the callback version
node asynpro.js

# Run the promise version
node promiseapp.js

# Run the async/await version
node asynawait.js
```

Make sure `file.txt` and `data.txt` contain some sample text.

---

## 🖥️ Expected Output

### `asynpro.js`
```
File reading completed
<contents of file.txt>
```

If the file is missing:
```
[Error: ENOENT: no such file or directory, open 'file.txt'] ...
No such file founded...
```

---

### `promiseapp.js`
```
<contents of file.txt>
```

If file doesn't exist:
```
[Error: ENOENT: no such file or directory, open 'file.txt'] ...
```

---

### `asynawait.js`
Logs the results of both file reads as objects from `Promise.allSettled`:
```
[
  { status: 'fulfilled', value: '<contents of file.txt>' },
  { status: 'fulfilled', value: '<contents of data.txt>' }
]
<contents of file.txt>
fulfilled
```

If either file fails, you'll get:
```
[
  { status: 'rejected', reason: [Error: ...] },
  ...
]
undefined
rejected
```

---

## ✅ Summary

This small project is perfect for understanding different styles of asynchronous programming in Node.js. Swap out `file.txt` and `data.txt` contents or filenames to experiment with error handling!
