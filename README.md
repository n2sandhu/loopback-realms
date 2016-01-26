# My Application

The project is using postgresql as database. Running the automigrate file will create three organisations with two organisations having a user with same email address. Try creating a user with same email for third organisation and it fails
 throwing an error "The `organisationUser` instance is not valid. Details: `email` Email already exists (value: "john@gmail.com")."