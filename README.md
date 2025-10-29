# Bug Hunt ipt x ICU 2025

Being lightweight, fast, and scalable, Node.js is becoming a widely adopted platform for developing web applications. This project provides an environment to learn how OWASP Top 10 security risks apply to web applications developed using Node.js and how to effectively address them.

## Getting Started
The repo includes the Dockerfile and docker-compose.yml necessary to set up the app and db instance, then connect them together.

- Install [docker](https://docs.docker.com/installation/) ([Windows](https://apps.microsoft.com/detail/xp8cbj40xlbwkx?hl=en-GB&gl=GB), [Mac](https://docs.docker.com/desktop/setup/install/mac-install/), [Linux](https://docs.docker.com/desktop/setup/install/linux/))
- Install [docker compose](https://docs.docker.com/compose/install/)
- Clone this repository
- Go to the downloaded directory
- Start Docker Desktop App
- Build the images:
   ```
   docker-compose build
   ```
- Run the app, this starts the RetireEasy application at http://localhost:4000/:
   ```
   docker-compose up
   ```
### Know it!

Once the application is running, you can access the tutorial page at [http://localhost:4000](http://localhost:4000)

##### Default user accounts

The database comes pre-populated with these user accounts created as part of the seed data -
* Admin Account - u:`admin` p:`Admin_123`
* User Accounts (u:`user1` p:`User1_123`), (u:`user2` p:`User2_123`)
* New users can also be added using the sign-up page.


## License

Code licensed under the [Apache License v2.0.](http://www.apache.org/licenses/LICENSE-2.0)
