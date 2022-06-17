# React Client Server Monorepo - Example

This is a ClientServer monorepo built with React and Hapi for personal experiments.

## Features

- Full TypeScript support
- Shared project for common models/functionality
- Prettifying on commit with prettier
- Linting on commit with EsLint
- Testing on push with Jest with pre setup threshold
- Build on pull request within GitHub Actions

### Client

- Latest version of React - V18
- Vite for better development experience

### Server

- [Hapi](https://github.com/hapijs/hapi) as a server
- [Swagger](https://swagger.io/) support with [hapi-swagger](https://github.com/hapi-swagger/hapi-swagger)
- Validation with [Joi](https://joi.dev/api/)
- Hot updates with nodemon

## Setup

- Clone the current repo: `git clone https://github.com/Drag13/react-client-server-example.git`
- Install dependencies using `npm i` or `npm ci` for older NPM which doesn't respect package.lock file

## Development

To start experiments execute `npm run dev:server` and `npm run dev:client`. Then visit:

- Client: http://localhost:3000/
- Server: http://localhost:5000/documentation
