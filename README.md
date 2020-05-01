
 # Twilio Hackathon Submission

## About

This is a GitHub repo for Twilio Hackathon Submission. It is a application which allows the user send a messages to large number of clients by their phone numbers provided.

### How it works

This is a full-stack application which `Express.js` is used for the backend. The source code of the backend can be found at the `server` folder , while the frontend is written in `React.js` via `create-react-app`. The application is styled by `Bootstrap 4`.

## Features

- Node.js web server using [Express.js](https://npm.im/express)
- Web user interface using [React.js](https://reactjs.org/) for templating and Bootstrap for UI
- User interface to send a SMS message to many targeted clients.
- Project specific environment variables using `.env`.

## Set up

### Requirements

- [Node.js](https://nodejs.org/)
- A Twilio account - [sign up](https://www.twilio.com/try-twilio)

### Twilio Account Settings

This application should give you a ready-made starting point for writing your
own appointment reminder application. Before we begin, we need to collect
all the config values we need to run the application:

| Config&nbsp;Value | Description                                                                                                                                                  |
| :---------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Account&nbsp;Sid  | Your primary Twilio account identifier - find this [in the Console](https://www.twilio.com/console).                                                         |
| Auth&nbsp;Token   | Used to authenticate - [just like the above, you'll find this here](https://www.twilio.com/console).                                                         |
| Phone&nbsp;number | A Twilio phone number in [E.164 format](https://en.wikipedia.org/wiki/E.164) - you can [get one here](https://www.twilio.com/console/phone-numbers/incoming) |

### Local development

After the above requirements have been met:

1. Clone this repository and `cd` into it

```bash
git clone <url>
cd twilio-hackathon
```

2. Install dependencies

```bash
yarn
```

3. Set your environment variables

You may setup the .env file or manually update the environment variables at `server/index.js`, which is the only file consumes environment variables in this application.

See [Twilio Account Settings](#twilio-account-settings) to locate the necessary environment variables.

4. Run the application

```bash
yarn dev
```

5. Navigate to [http://localhost:3000](http://localhost:3000)

That's it!
                                                             |
## Contributing

This template is open source and welcomes contributions. All contributions are subject to our [Code of Conduct](https://github.com/twilio-labs/.github/blob/master/CODE_OF_CONDUCT.md).

## License

[MIT](http://www.opensource.org/licenses/mit-license.html)

## Disclaimer

No warranty expressed or implied. Software is as is.