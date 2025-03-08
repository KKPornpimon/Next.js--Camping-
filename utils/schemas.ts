
//schema
import {z,ZodSchema} from 'zod';

// const mySchema = z.string().min(2, 'string must contain at least 2 character')
export const mySchema = z.object({
    firstname: z.string().min(2, 'firstname must contain at least 2 character'),
    lastname: z.string().min(2, 'lastname must contain at least 2 character'),
    username: z.string().min(2, 'username must contain at least 2 character'),
})


// const tam: string = 'tam'

export const validateWithZod = <T>(schema: ZodSchema<T>, data: unknown): T => {
    const result = schema.safeParse(data)
    if(!result.success){
        //code
        const errors = result.error?.errors.map((error) => error.message)
        throw new Error(errors.join(','))
    }
    return result.data
}