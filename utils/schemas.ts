
//schema
import {string, z,ZodSchema} from 'zod';
import { provinces } from './provinces';

// const mySchema = z.string().min(2, 'string must contain at least 2 character')
export const mySchema = z.object({
    firstname: z.string().min(2, 'firstname must contain at least 2 character'),
    lastname: z.string().min(2, 'lastname must contain at least 2 character'),
    username: z.string().min(2, 'username must contain at least 2 character'),
})


// image validate
const validateImage = () => {
    // config ขนาดรูปภาพไม่เกิน 1 mb
    //.refile คือการกำหนดค่าเพิ่มเติมให้กับรูปภาพ
    const maxFileSize = 1024 * 1024
    return z.instanceof(File).refine((file) => {
        return file.size <= maxFileSize
    }, 'File image size must be less than 1MB')
}
export const imageSchema = z.object({
    image: validateImage()
})


export const landmarkSchema = z.object({
    name: z.string().min(2,{message: 'name must contain at least 2 character'})
        .max(30, {message: 'name must to <= 30 character'}),
    category: z.string(),
    description: z.string().min(2, {message: 'description must contain at least 2 character'})
        .max(200, {message: 'description must to <= character'}),
    price: z.coerce.number().int().min(0, {message: 'price have to more 0'}),
    province: z.string(),
    lat: z.coerce.number(),
    lng: z.coerce.number()
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