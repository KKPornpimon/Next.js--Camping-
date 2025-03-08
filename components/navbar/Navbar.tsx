import DarkMode from "./DarkMode"
import DropdownListMemu from "./DropdownListMemu"
import Logo from "./Logo"
import Search from "./Search"

const Navbar = () => {
  return (
    <>
        <div className="container flex justify-between py-8 flex-col sm:flex-row gap-4">
           {/* Logo */}
            <Logo />
            {/* Search */}
            <Search />
            {/* DarkMode */}
            <div className="flex gap-4">
               <DropdownListMemu />
                <DarkMode /> 
            </div>
             
        </div>
        
    </>
  )
}
export default Navbar