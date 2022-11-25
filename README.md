# Social-Network-API

![img](main/assets/Screen%20Shot%202022-11-25%20at%2012.59.22%20PM.png)
![img](main/assets/Screen%20Shot%202022-11-25%20at%2012.59.32%20PM.png)


Walk-through video:
https://drive.google.com/file/d/1MSqVCuTfmQuHV4Hm9V3_CIKvqEdUZdIB/view?usp=sharing

## Description
For this assignment, I had to crreate an API for a social network that uses a NoSQL database. When the server is started, my Mongoose models are synced to the MongoDB database. When I open API GET routes in Insomnia for users and thoughts, the data is displayed in JSON format. When I tets API POST, PUT, and DELETE routes in Insomnia, I can create, update and delete users and thoughts in my database/ I can also create and delete reactions to other users' thoughts.


## Installation
I began this project by creating my models first, where I assigned properties to each object I used. Some objects, such as username, or email, were required. Next, I create my controllers, where the functions/operations of the API are. I next created the routes, which hold the paths of the API. The User and Thought files were similar in design. I have a separate Reaction model for the thought reactions, however, it did not need its own api route, I just included it in the thought-routes.

## Usage
This is a greate way forf social networks to take advantage of mongoDB and store large amounts of instructured data. As you notice in the video, it is not necessary to have all criteria when posting new information.

## License

MIT License

Copyright (c) [year] [fullname]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
