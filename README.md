# My Application

The project is generated by [LoopBack](http://loopback.io).


# Mongodb Connector : 
npm install loopback-connector-mongodb --save

# Create DataSource
lb datasource

# Create Model
lb model 
campground , reservation

# lb realtion
Campground can have zero or more reservations hasMany realtion with reservation

lb relation

# All endpoints are public so we are restricting the access: secuity of API access
we are allowing three types of User
  1. Anonymous : who can access all campgrounds API's
  2. Customer : Who can registered then they can make reservation ans they can see there own reservation
  3. Administration : Who can see anything and do anything.
# Create Customer Model
lb model
customer

# Create Relation Customer can zero or more reseveration : hasMany

lb relation

# Restrict API's END point
lb acl

? Select the model to apply the ACL entry to: (all existing models)

? Select the ACL scope: All methods and properties

? Select the access type: All (match all types)

? Select the role All users

? Select the permission to apply Explicitly deny access

# allow to access campground API's
lb acl

? Select the model to apply the ACL entry to: campground

? Select the ACL scope: All methods and properties

? Select the access type: Read

? Select the role All users

? Select the permission to apply Explicitly grant access

# Allow To Customer API's
lb acl

? Select the model to apply the ACL entry to: customer

? Select the ACL scope: All methods and properties

? Select the access type: All (match all types)

? Select the role The user owning the object

? Select the permission to apply Explicitly grant access

# Allow administrators  to do all

lb acl

? Select the model to apply the ACL entry to: (all existing models)

? Select the ACL scope: All methods and properties

? Select the access type: All (match all types)

? Select the role other

? Enter the role name: admin

? Select the permission to apply Explicitly grant access

# To confirmed Reservation send email

Email connector : Create Datasource and configured the SMTP and add one entry in model config


# Export Mongodb Collections command

mongoexport --host=localhost --port=27017 --db=reservationDB --collection=campground --out=campground.json


