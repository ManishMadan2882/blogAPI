## REGISTER
### HTTP Request
```
POST /api/v1/auth/register HTTP/1.1
Host: localhost:5400
Content-Type: application/json
Content-Length: 106

{
    "username":"manishmadan",
    "email":"manishmadan321@gmail.com",
    "password":"iwriteblogs@123"
}
```
On succesfully registeration, the following JSON response is received
### HTTP Response
```
{
    "success": true,
    "msg": "authenticated",
    "username": "manishmadan",
    "userId": "6586ae13e41823f68758aaf0",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hbmlzaG1hZGFuMzIxQGdtYWlsLmNvbSIsImlkIjoiNjU4NmFlMTNlNDE4MjNmNjg3NThhYWYwIiwiaXBfYWRkcmVzcyI6Ijo6MSIsImlhdCI6MTcwMzMyNTIwNCwiZXhwIjoxNzA1OTE3MjA0fQ.4kHfbZTvvLfF6IcOCvs7LJYhwAJ0zm9vVAYmfOOWo58"
}
```
## LOGIN
### HTTP Request
```
POST /api/v1/auth/login HTTP/1.1
Host: localhost:5400
Content-Type: application/json
Content-Length: 53

{
    "email":"ant@gen.io",
    "password":"123456"
}
```
On successfull authentication the HTTP Response is 
### HTTP Request

```
{
    "success": true,
    "msg": "authenticated",
    "username": "antonio",
    "userId": "6586aaa535caa2862fd5defa",
    "token": "<JWT>"
}
```
## Route to Get Authenticated User 

### HTTP Request
```
GET /api/v1/auth/user HTTP/1.1
Host: localhost:5400
Authorization: bearer <JSON_WEB_TOKEN>
Content-Type: application/json
Content-Length: 106

{
    "username":"manishmadan",
    "email":"manishmadan321@gmail.com",
    "password":"iwriteblogs@123"
}
```
### HTTP Response
```
{
    "_id": "6586ae13e41823f68758aaf0",
    "username": "manishmadan",
    "password": "$2b$10$0rf.qD8lmyO4CqM6p8VKiuEGhnqYbKf8Zw.XC71/Ex6nZ2lGovqgm",
    "imgUrl": "https://icons.iconarchive.com/icons/papirus-team/papirus-status/512/avatar-default-icon.png",
    "email": "manishmadan321@gmail.com",
    "blogs": [],
    "__v": 0
}
```

# BLOG POSTS

## CREATE FUNCTIONALITY
This route can only be accessed by authorised users
* HTTP Request 
```
POST /api/v1/blog/create HTTP/1.1
Host: localhost:5400
Authorization: bearer <JSON_WEB_TOKEN>
Content-Type: application/json
Content-Length: 612

{
    "title":"How can i perform Cascade in mongoDb? If i delete parent the child table also deleted",
    "content":"As of September 2018, MongoDB does not support cascade delete......"
}
```
* HTTP Response
```
{
    "msg": "saved",
    "id": "6586b8130807b971b4944cae"
}
```
## UPDATE FUNCTIONALITY

* HTTP Request
```
PUT /api/v1/blog/update/6586b8130807b971b4944cae HTTP/1.1
Host: localhost:5400
Authorization: bearer <JSON_WEB_TOKEN>
Content-Type: application/json
Content-Length: 594

{
    "title":"Is cascading possible in MongoDb? If I delete parent the Child table also deleted ",
    "content":"As of September 2018, MongoDB does not support casade delete...."
}
```
* HTTP Response on Success
```
{
    "msg": "Updated",
    "id": "6586b8130807b971b4944cae"
}
```

## DELETE FUNCTIONALITY

* HTTP REQUEST
```
DELETE /api/v1/blog/delete/6586b8130807b971b4944cae HTTP/1.1
Host: localhost:5400
Authorization: bearer <JSON_WEB_TOKEN>
```
* HTTP RESPONSE

```
{
    msg : 'Deleted'
}
```
## READ BLOGS

### Get Blog by ID
* HTTP REQUEST

```
GET /api/v1/blog/6586cd8bcb2c67076d9c3041 HTTP/1.1
Host: localhost:5400
Authorization: bearer <JSON_WEB_TOKEN>
```
### Get Blogs (with Pagination query)
* HTTP REQUEST
Pass the Page index and limit per page in query
```
GET /api/v1/blog?page=2&limit=2 HTTP/1.1
Host: localhost:5400
Authorization: bearer <JSON_WEB_TOKEN>
```