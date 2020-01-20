# MyEVent

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Setup](#setup)
  - [Run Application](#run-application)
- [Built With](#built-with)
- [Author](#author)

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

### Run Application

For the run application, first, open command prompt for windows or terminal for linux in your project folder.
Then, run the project by typing the command

```
npm start
```
Second, test all endpoints in your project using the postman application.
#### 1. Create Location ( method : POST ) -> Endpoint `http://localhost:5000/api/v1/location/create`
example :
```
{ 
	"city":"Jakarta",
	"detail_location":"Jalan Taman Soka, Kalideres",
	"url":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.943345211913!2d106.70709561476876!3d-6.138313995555604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a02a7e9312fdf%3A0x6b712179d2899023!2sJl.%20Taman%20Soka%2C%20Pegadungan%2C%20Kec.%20Kalideres%2C%20Kota%20Jakarta%20Barat%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2011830!5e0!3m2!1sid!2sid!4v1579530682245!5m2!1sid!2sid"
}
```
#### 2. Create Event ( method : POST ) -> Endpoint `http://localhost:5000/api/v1/event/create`
example :
```
{ 
	"location_id":19,
	"name_event":"Red Dynasty Paintball Park",
	"description":"Mau liburan tapi males kena macet? Yuk habiskan waktu akhir pekan ini di jakarta dengan berolahraga paintball. Yuk buruan booking tempat sebelum penuh. (wa 0812 1212 3822)",
	"image":"https://home.eventeventapp.com/photo_event/5c88c23f0f8a4_avatar.jpg" 
}
```

## Built With

- [Express JS](https://expressjs.com) - Back-end
- [MySQL](https://www.mysql.com) - Database
- [Sequelize](https://sequelize.org) - ORM

## Author

**Achmad Wahyudi** - (https://github.com/aw12051996)
