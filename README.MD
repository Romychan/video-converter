<h2 align="center">
  Video Converter
</h2>

<p align="center">
  <a href="#overview">Overview</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#features">Features</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#getting-started">Getting Started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#screenshots">Screenshots</a>
</p>

## Overview

<h1 align="center">
	<img src="https://user-images.githubusercontent.com/60140867/233802248-a416dcba-d4a7-4e4e-b80d-b0856c49d4ae.gif" alt="Video Converter Demo" />
</h1>

This is a web application for convert video. The web application provides the ability to select the duration, format, quality, fps and audio format for the video.

## Features

- Video uploading
- Video converter
- Selection of various video settings options
- Displaying the progress of video processing
- Unit and snapshot testing of components
- Using docker

## Technologies

### Frontend

- [Vite](https://vitejs.dev/)
- [Vitest](https://vitest.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [React](https://react.dev/)
- [React Router](https://reactrouter.com/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Socket.IO](https://socket.io/)

### Backend

- [Node.js](https://nodejs.org/)
- [Express](http://expressjs.com/)
- [Fluent-Ffmpeg](https://www.npmjs.com/package/fluent-ffmpeg)
- [Multer](https://www.npmjs.com/package/multer)
- [Socket.IO](https://socket.io/)

## Getting Started

### Usage with Docker

Requirements if you want to run the application using Docker:

- [Docker](https://www.docker.com/)
- [Docker-Compose](https://docs.docker.com/compose/install/)

1. Clone the project and access the folder

   ```sh
   # Clone this repository
   git clone https://github.com/Romychan/video-converter.git

   # Go into the repository
   cd video-converter
   ```

2. Create an `.env` file for client and server

   In `client/.env`:

   ```sh
   VITE_API_URL=http://localhost:5000
   VITE_SOCKET_URL=http://localhost:5000
   ```

   In `server/.env`:

   ```
   PORT=5000
   BASE_URL=http://localhost:5000
   CLIENT_URL=http://localhost:3000
   UPLOAD_PATH=./temp/
   ```

3. Run `docker-compose`

   ```sh
   docker-compose up --build
   ```

### Usage without Docker

Requirements if you want to run the application without Docker:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [FFmpeg](https://ffmpeg.org/)

1. Clone the project and access the folder

   ```sh
   # Clone this repository
   git clone https://github.com/Romychan/video-converter.git

   # Go into the repository
   cd video-converter
   ```

2. Create an `.env` file for client and server

   In `client/.env`:

   ```sh
   VITE_API_URL=http://localhost:5000
   VITE_SOCKET_URL=http://localhost:5000
   ```

   In `server/.env`:

   ```
   PORT=5000
   BASE_URL=http://localhost:5000
   CLIENT_URL=http://localhost:3000
   UPLOAD_PATH=./temp/
   ```

3. Install server and client dependencies

   ```sh
   # Go into client
   cd client

   # Install client dependencies
   npm install

   # Go into server
   cd ../server

   # Install server dependencies
   npm install
   ```

4. Run the app from `server` directory

   ```sh
   npm run dev
   ```

## Screenshots

**Upload File**

<img src="https://user-images.githubusercontent.com/60140867/233801964-b27ec95f-9089-4088-80a4-73a4e9f8225d.png" alt="Upload Video Page" />

**Converter Settings**

<img src="https://user-images.githubusercontent.com/60140867/233801958-0ecf0982-a921-4380-ac22-4037cb5e6c36.png" alt="Converter Settings Video Page" />

**Converter Processing Progress**

<img src="https://user-images.githubusercontent.com/60140867/233801957-6faccbb1-7e53-4e91-8e0e-6f6b3d4ece65.png" alt="Converter Processing Page" />

**Converter Processing Status**

<img src="https://user-images.githubusercontent.com/60140867/233801962-6e2e7417-8aea-44b0-8fd5-2cede827688d.png" alt="Converter Processing Status" />

<img src="https://user-images.githubusercontent.com/60140867/233801965-e69fb132-b401-491c-8bfe-b979238b77fa.png" alt="Converter Processing Status" />
