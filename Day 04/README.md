# Node.js Server Project

This repository contains a Node.js project demonstrating both basic HTTP server setup and Express.js server implementation.

## Project Structure

### 1. Core Server Files

#### `Server.js`
- Sets up a basic HTTP server using Node.js's built-in `http` module.
- Listens on `127.0.0.1:3000`.
- Responds to all requests with `"Hello Node JS"` (plain text).

#### `app.js`
- Demonstrates an Express.js server implementation.
- Listens on port `3001`.
- Contains two route handlers for the root path (`/`):
  - First handler responds with `"Hello Express JS"`.
  - **Note:** The second handler has a typo (`app/get/` instead of `app.get/`) and needs correction.

### 2. Configuration Files

#### `package.json`
- Defines project metadata:
  - **Name:** `app`
  - **Version:** `1.0.0`
  - **Main entry point:** `index.js` (currently unused; consider updating to `app.js` or `Server.js`).
- Lists `express@4.21.2` as a dependency.

#### `package-lock.json`
- Auto-generated lock file for dependency version consistency.

---

## Installation and Usage

### Prerequisites
- Node.js (v14+ recommended).

### Setup
1. Clone the repository.
2. Install dependencies:
   ```sh
   npm install