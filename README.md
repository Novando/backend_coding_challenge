# Backend Coding Challenge

## Prerequisite
1. [golang-migrate](https://github.com/golang-migrate/migrate/blob/master/cmd/migrate)

### DB Migration
For create a database versioning i used a bunch of files called migration files.
To make the migration agile and can be implements agnostically,
I am using library called [golang-migrate](https://github.com/golang-migrate/migrate/blob/master/cmd/migrate).
It is a apps that could do migration using `.sql` files and a CLI