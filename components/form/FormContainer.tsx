'use client'

import { useToast } from "@/hooks/use-toast"
import { actionFunction } from "@/utils/types"
import React, { useActionState, useEffect } from "react"

const initialState = {
    message: ''
}



const FormContainer = ({action, children}:{action:actionFunction, children:React.ReactNode}) => {
  
    const [state, formAction] = useActionState(action, initialState)
    const { toast } = useToast()
    // console.log('useActionState => ', state)

    useEffect(() => {
        if(state.message){
            toast({description:state.message})
        }
    },[state])
  
    return (
    <form action={formAction}>
        {children}
    </form>
  )
}
export default FormContainer