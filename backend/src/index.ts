import { Hono } from 'hono'
import { Prisma, PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import {verify, sign} from "hono/jwt"
import { createBlogInputs, signupInputs, updateBlogInputs } from 'rushikesh1-fast-common'

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string
    JWT_SECRET: string
  },
  Variables: {
    id: string
  }
}>()

app.use("/api/v1/blog/*", async (c, next) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

  let token = c.req.header("Authorization") || '';
  //token = token.split(' ')[1]

  //console.log(token);
  

  if(!token){
    return c.json({error: 'Unauthorized'})
  }

  const response = await verify(token, c.env.JWT_SECRET);

  //console.log(response);
  

  if(!response.id){
    return c.json({error: 'Unauthorized'})
  }

  c.set('id', response.id)
  await next()
})

app.post('/api/v1/signup', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const body = await c.req.json();
    
    if(!body){
      throw new Error('Invalid request')
    }
    
    const {success} = signupInputs.safeParse(body)
    
    if(!success){
      return c.json({error: 'Invalid request'})
    }

    const user = await prisma.user.create({
      data: {
        email : body.email,
        password: body.password,
        name: body.name
      }
    })

    if(!user){
      return c.json({error: 'Something went wrong while creating user!'})
    }

    return c.json({user})
})

app.post('/api/v1/signin', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const body = await c.req.json();

    if(!body){
      return c.json({error: 'Invalid request'})
    }

    const {success} = signupInputs.safeParse(body)

    //console.log(success);
    

    if(!success){
      return c.json({error: 'Invalid request'})
    }

    const user = await prisma.user.findUnique({
      where: {
        email: body.email,
        password: body.password
      }
    })

    if(!user){
      return c.json({error: 'Invalid email'})
    }

    if(user.password !== body.password){
      return c.json({error: 'Invalid password'})
    }

    const jwt = await sign({id: user.id}, c.env.JWT_SECRET)
    return c.json({jwt})


})

app.post('/api/v1/blog',async  (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const body = await c.req.json();
    const userId = c.get('id')

    const {success} = createBlogInputs.safeParse(body)
    
    if(!success){
      return c.json({error: 'Invalid request'})
    }


    const post = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: userId,
        published: true
      }
    });
    return c.json({
      id: post.id
    });
})

app.put('/api/v1/blog/:id',async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

  const postId = c.req.param('id');
  
  if(!postId){
    return c.json({error: 'Invalid request'})
  }
  
  let body = await c.req.json()
  body.id = postId

  const {success} = updateBlogInputs.safeParse(body)

  if(!success){
    return c.json({error: 'Invalid request'})
  }


  try{
    const post = await prisma.post.update({
      where: {
        id: postId
      },
      data: {
        title: body.title,
        content: body.content
      }
    })

    if(!post){
      return c.json({error: 'Something went wrong while updating post!'})
    }

    return c.json({post})

  } catch(e){
    return c.json({error: e})
  }

})

app.get('/api/v1/blog/:id',async (c) => {

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

  const postId = c.req.param('id');

  if(!postId){
    return c.json({error: 'Invalid request'})
  }

  const post = await prisma.post.findUnique({
    where: {
      id: postId
    }
  })

  if(!post){
    return c.json({error: 'No post found'})
  }

  return c.json({post})
})

app.get('/api/v1/blog-bulk', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const data = await prisma.post.findMany({})

    console.log(data, "posts");

    return c.json(data)
})

app.get("/", (c) => {
  return c.text('Hello Hono!')
})



export default app
