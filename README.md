<a href="https://sharefile-frontend.vercel.app/">
  <img alt="ShareMe - File Sharing App" src="/public/screenshot.png">
    <h1 align="center">ShareMe</h1>
</a>

<p align="center">
   A File Sharing web app with the ability to share files by generating links.
</p>

<p align="center">
  <a href="https://twitter.com/anchit1909" target="_blank">
    <img src="https://img.shields.io/twitter/follow/anchit1909?style=flat&label=anchit1909&logo=twitter&color=0bf&logoColor=fff" alt="Anchit Sinha Twitter follower count" />
  </a>
  <a href="https://github.com/Anchit1909/ShareMe-Frontend" target="_blank">
    <img src="https://img.shields.io/github/stars/Anchit1909/ShareMe-Frontend?label=Anchit1909%2FShareMe" alt="ShareMe repo star count" />
  </a>
</p>

<p align="center">
  <a href="#introduction"><strong>Introduction</strong></a> ·
  <a href="#how-it-works"><strong>How It Works</strong></a> ·
  <a href="#tech-stack"><strong>Tech Stack</strong></a> ·
  <a href="#running-locally"><strong>Running Locally</strong></a> ·
  <a href="#author"><strong>Author</strong></a>
</p>
<br/>

> This is the frontend part of this application. To access the backend part, please go to this repo[ShareMe-Backend](https://github.com/Anchit1909/ShareMe-Backend)

## Introduction

ShareMe is a file sharing web app that generates links to share files of multiple formats among different users without any need to create an account.

## How it works

- This app can be used to share multiple formats of files.
- The Files uploaded by the user is stored in Cloudinary storage.

## Tech Stack

- [Typescript](https://www.typescriptlang.org/)
- [NextJS](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Cloudinary Storage](https://cloudinary.com/)
- [NodeJS](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)

## Running Locally

### Cloning the repository to the local machine.

```bash
git clone
```

### Creating an account on Cloudinary to get an API key.

1. Go to [Cloudinary](https://cloudinary.com/) to make an account.
2. Get the API key from the API Keys section.

### Storing API key in .env file.

Create a file in root directory of project named **.env.local**. And store your API key in it, as shown in the .example.env file.

### Installing the dependencies.

```bash
npm install
```

### Running the application.

Then, run the application in the command line and it will be available at `http://localhost:3000`.

```bash
npm run dev
```

## Author

- Anchit Sinha ([@anchit1909](https://twitter.com/anchit1909))
