import z from 'zod';


//===========signupInputs================

export const signupInputs = z.object({
    email : z.string().email(),
    password: z.string().min(6),
    name: z.string().optional()
})


export type SignupInputs = z.infer<typeof signupInputs>  

//===========signinInputs================

export const signinInputs = z.object({
    email : z.string().email(),
    password: z.string().min(6)
})

export type SigninInputs = z.infer<typeof signinInputs>

//===========createBlogInputs================

export const createBlogInputs = z.object({
    title: z.string(),
    content: z.string(),
})

export type CreateBlogInputs = z.infer<typeof createBlogInputs>

//===========updateBlogInputs================

export const updateBlogInputs = z.object({
    title: z.string().optional(),
    content: z.string().optional(),
    id: z.string()
})

export type UpdateBlogInputs = z.infer<typeof updateBlogInputs>