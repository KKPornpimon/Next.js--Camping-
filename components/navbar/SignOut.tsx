'use client'

import { useToast } from "@/hooks/use-toast"
import { SignOutButton } from "@clerk/nextjs"

const SignOut = () => {

    const { toast } = useToast()

    const handleLogout = () => {
        toast({
            description: "Logout Successfully",
            variant: 'default'
          })
    }

  return (
    <SignOutButton redirectUrl="/">
        <button type="submit" onClick={handleLogout} > Logout </button> 
    </SignOutButton>
  )
}
export default SignOut