# JSON Server starter

Starter project for a JSON Server fake REST API.

Check out [this blog post](https://peterrhodes.dev/blog/post/json-server-fake-rest-api) for more details.

## Get the code

Use one of the methods given below to get the project source code on your local machine.

### Clone

SSH:

```bash
git clone git@github.com:peterrhodesdev/json-server-starter.git
```

HTTPS:

```bash
git clone https://github.com/peterrhodesdev/json-server-starter.git
```

GitHub CLI:

```bash
gh repo clone peterrhodesdev/json-server-starter
```

### Fork and clone

```bash
gh repo fork peterrhodesdev/json-server-starter --clone=true
```

### Add a remote + pull

```bash
mkdir json-server-starter
cd json-server-starter
git init
git remote add json-server-starter git@github.com:peterrhodesdev/json-server-starter.git
git pull json-server-starter main
```

## Install dependencies

In the project root directory run

```bash
npm install
```

## Run

Run the following command to startup the server

```bash
node server.js
```

By default the server loads the data from `db.json` into memory so that the file isn't modified. To allow HTTP requests to be able to modify the contents of `db.json` then run as

```bash
node server.js db.json
```

To stop the server press `ctrl + C`.
