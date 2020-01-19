# MyEVent

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Setup](#server-setup)
  - [Run Aplication](#run-application)
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
| Chrome                  | [Link](https://www.google.co.id/chrome/)                                            |
| Postman                 | [Link](https://www.getpostman.com/downloads/)                                       |

### Installation

First, install all applications listed on prerequisites.

Second, clone this repository into your system.

```
git clone https://github.com/aw12051996/myEvent_API.git
```

Then, install all the packages that described in `package.json` of project directories.

```
npm install
```

### Setup

For the setup, first, running Xampp and make sure your MySQL and Apache services is running fine. Open your browser, then type the command `http://localhost/phpmyadmin/`, then create database for your project. then import the database dump inside `database` folder in your project.

Second, In project directory, you'll find `config.json` inside `config` folder. Open and edit the `development` configuration to match your database setup.

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

### Run Apllication

For the run application, first, open command prompt for windows or terminal for linux in your project folder.
Then, run the project by typing the command

```
npm start
```
Second, test all endpoints in your project using the postman application.

## Built With

- [Express JS](https://expressjs.com) - Back-end
- [MySQL](https://www.mysql.com) - Database
- [Sequelize](https://sequelize.org) - ORM

## Author

**Achmad Wahyudi** - (https://github.com/aw12051996)

## License

This project is licensed under the GNU General Public v3.0 License - see the [LICENSE](LICENSE) file for details
