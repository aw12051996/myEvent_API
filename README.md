# MyEVent

A growing co-working space management application that will make the life easier. coHyPe has some features which able to manage everything a co-working space needed, such as checkin, checkout, room, customer, profile management. It's simple. It's awesome.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Setup](#server-setup)
- [Built With](#built-with)
- [Author](#author)
- [License](#license)

## Getting Started

Before starting to install the project, there're some things that need to be done first.

### Prerequisites

Make sure all of these are properly installed in your system.

| Application             | Download                                                                            |
| ----------------------- | ----------------------------------------------------------------------------------- |
| Git                     | [Windows](https://gitforwindows.org/) / [Linux](https://git-scm.com/download/linux) |
| Node.js                 | [Link](https://nodejs.org/en/download/)                                             |
| Xampp (apache & mysql)  | [Link](https://www.apachefriends.org/www.apachefriends.org)                         |

### Installation

First, clone this repository into your system.

```
git clone https://github.com/exneval/cohype.git
```

Then, install all the packages that described in `package.json` of both `client` and `server` directories.

```
npm install
```

### Setup

For the server setup, first, make sure your MySQL services is running fine. In `server` directory, you'll find `config.json` inside `config` folder. Open and edit the `development` configuration to match your database setup.

```
  "development": {
    "username": "root",
    "password": null,
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },
```

## Built With

- [Express JS](https://expressjs.com) - Back-end
- [MySQL](https://www.mysql.com) - Database
- [Sequelize](https://sequelize.org) - ORM

## Author

**Achmad Wahyudi** - (https://github.com/aw12051996)

## License

This project is licensed under the GNU General Public v3.0 License - see the [LICENSE](LICENSE) file for details
