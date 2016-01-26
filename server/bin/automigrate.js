
var path = require('path');
var app = require(path.resolve(__dirname, '../server'));

var dataSource = app.dataSources.db;

var Organisation = app.models.organisation;

dataSource.automigrate(['User', 'AccessToken', 'ACL', 'RoleMapping', 'Role', 'organisationUser','organisation'],
    function(err) {
        if (err) throw err;
        Organisation.create({name: 'Melbourne Club'}, function(err, org) {

                org.OrgUsers.create(
                    {
                        "username": "john",
                        "lastName": "Smith",
                        "firstName": "John",
                        "email": "john@gmail.com",
                        "password": "123"
                    },
                    function(err, user) {
                      console.log(err, user);

                    }
                );

            }
        );


        Organisation.create({name: 'Sydney Club'}, function(err, org1) {

                org1.OrgUsers.create(
                    {
                        "username": "johnB",
                        "lastName": "Bajtos",
                        "firstName": "John",
                        "email": "john@gmail.com",
                        "password": "123"
                    },
                    function(err, user) {
                        console.log(err, user);

                    }
                );

            }
        );


        Organisation.create({name: 'Adelaide Club'}, function(err, org1) {

            }
        );
    });