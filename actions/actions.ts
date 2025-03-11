import { Landmark } from './../node_modules/.prisma/client/index.d';
'use server'

import { imageSchema, landmarkSchema, mySchema, validateWithZod } from "@/utils/schemas"
import { clerkClient, currentUser } from "@clerk/nextjs/server"
//การเชื่อม db
import db from '@/utils/db';
import { redirect } from "next/navigation";

//check การ login
const getAuthUser = async () => {
    //ดึงข้อมูลจาก clerk
    const user = await currentUser()

    //ถ้าไม่มี user หรือไม่ได้ login เข้ามา
    if(!user){
        throw new Error('You must login early')
    }
    if(!user.privateMetadata.hasProfile){
        redirect('/profile/create')
    }

    //ถ้า login เข้ามาแล้ว
    return user
}

const renderError = (error: unknown):{ message: string } => {

    return {
        message: error instanceof Error ? error.message : 'An Error!!!'
    }
}

export const createProfileAction = async (previousState:any, formData:FormData) => {
    try{

        const user = await currentUser()
        if(!user) throw new Error('Please Login!!!')

        const rawData = Object.fromEntries(formData)
        //การเรียกใช้งาน
        const validateField = validateWithZod(mySchema, rawData)
        // console.log(validateField)

        //ทำการ create profile
        await db.profile.create({
            data:{
                clerkId: user.id,
                email: user.emailAddresses[0].emailAddress,
                profileImage: user.imageUrl ?? '',
                ...validateField
            }
        })

        //set private metadata
        const client = await clerkClient()
        await client.users.updateUserMetadata(user.id, {
            privateMetadata:{
                hasProfile: true
            },
        })

        // return { message : 'Create Profile Success' }

    }catch(error){
        // console.log(error)
        return renderError(error)
    }

    redirect('/')
}


export const createLandmarkAction = async (previousState:any, formData:FormData) => {
    try{

        const user = await getAuthUser()

        const rawData = Object.fromEntries(formData)

        const file = formData.get('image') as File
        

        //step 1 validated data
        //การเรียกใช้งาน
        // เช็คการ validate file
        const validateFile = validateWithZod(imageSchema, {image: file})
        console.log('step 1 validated data ', validateFile)

        // เช็คการ validate field
        const validateField = validateWithZod(landmarkSchema, rawData)
        console.log('step 1 validated data ', validateField)


        
        //step 2 upload image to supabase
        //step 3 insert to DB
        



        return { message : 'Create Landmark Success' }

    }catch(error){
        // console.log(error)
        return renderError(error)
    }

    // redirect('/')
}