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
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFudEBnZW4uaW8iLCJpZCI6IjY1ODZhYWE1MzVjYWEyODYyZmQ1ZGVmYSIsImlwX2FkZHJlc3MiOiI6OjEiLCJpYXQiOjE3MDMzMjQ5MTgsImV4cCI6MTcwNTkxNjkxOH0.Qm32AeMvuZdRqlJUTZs23YBYbIU1bgJZLGeKisgy2cA"
}
```
## Route to Get Authenticated User 

### HTTP Request
```
GET /api/v1/auth/user HTTP/1.1
Host: localhost:5400
Authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hbmlzaG1hZGFuMzIxQGdtYWlsLmNvbSIsImlkIjoiNjU4NmFlMTNlNDE4MjNmNjg3NThhYWYwIiwiaXBfYWRkcmVzcyI6Ijo6MSIsImlhdCI6MTcwMzMyNTIwNCwiZXhwIjoxNzA1OTE3MjA0fQ.4kHfbZTvvLfF6IcOCvs7LJYhwAJ0zm9vVAYmfOOWo58
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