const express = require('express');
const post = 8000
const app = express();

const userRouter = require('./route/user.route.js');
const productRouter = require('./route/product.route.js');

app.use('/v1/api/auth', userRouter);
app.use('/v1/api/data', productRouter);


app.listen(post, function(){
	console.log(`server is Running on http://localhost:${post}`)
});