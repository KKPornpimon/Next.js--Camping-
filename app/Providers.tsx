import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "./theme-provider"

const Providers = ({children}:{children: React.ReactNode}) => {
  return (
    <>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            {children}
            <Toaster />
        </ThemeProvider>
    </>
  )
}
export default Providers