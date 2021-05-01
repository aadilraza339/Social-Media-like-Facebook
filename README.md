# Node.Js Social media
The task for Backend dev:

Social Media Application :
Design and develop REST APIs using node.js for a mini social media app which including the following ( Frontend is not required ):
1. Refresh token for authentication.
2. Relational database (Postgres is a plus)
3. Cache
4. Logging
5. Documentation

## Design DB and API endpoints based on the following features :
1. Authentication - Login / Register / Forgot Password / Profile Update with profile pic
2. Friends - Send a friend request / Accept & Reject friend request / Remove Friend / View My Friends / View Friends of Friends / View Mutual Friends
3. Posts - Add post / Delete post
4. Chat ( Optional and is a plus )

## HOW TO **RUN** 🏃‍ PROJECT <br>
```
git clone https://github.com/aadilraza339/Social-Media-like-Facebook.git
```<br>
```cd Social-Media-like-Facebook
```<br>
``npm intall``<br>
<span>For caching I used redis, if you want to know about  </span><a href="https://livecodestream.dev/post/beginners-guide-to-redis-and-caching-with-nodejs/">click here</a><br>
``mkdir redis && cd redis<br>``
``curl -O http://download.redis.io/redis-stable.tar.gz tar xzvf redis-stable.tar.gz ``<br>
``cd redis-stable``<br>
``make``<br>
``make test``<br>
``redis-server``<br>
import code.sql in your **MySql DB**
Now is time to run it 🥳 In the **root directory**👇 <br>
``nodemon app.js``
<br>
I used these things to make this project. <br>
Express JWT bcrypt knex mysql nodemailer redis
 <br>
These are the endpoints Below you Can run them using postman, here is the link for download<a href="https://www.postman.com/downloads/">click here</a>
 <br>
 ```javascript
router.post('/signup', userControllers.userRegister);
router.post('/login', userControllers.userLogin);
router.get('/home', checkAuth, userControllers.get_post);
router.get('/user/:username', checkAuth, userControllers.getMe);
router.post('/forgotpassword', userControllers.forgotP);
router.post('/reset',userControllers.resetP)
router.post('/newpost', checkAuth, userControllers.newpost);
router.delete('/deletePost/:post_id', checkAuth, userControllers.deletePost)
router.put('/editprofile', checkAuth, userControllers.updateProfile)
router.post('/sendReq/:fId', checkAuth, friendControllers.sendReq);
router.get('/friendlist', checkAuth, friendControllers.friendlist);
```

 <br>
this endpoint Below, you want to run, so then you have to tell **Action** and **friend_id** , what could be Action  <br>
addfriend/{fId}  <br>
reject/{fId} <br>
block/{fId} 
<br>

 ```javascript
 router.post('/:Action/:fId', checkAuth, friendControllers.Frirequest);
```
