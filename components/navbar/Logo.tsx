import Link from "next/link"
import { Button } from "../ui/button"

const Logo = () => {
  return (
    <>
        <Button className="rounded">
            <Link href='/' className="text-2xl">KANOMWARN</Link>
        </Button>
    </>
  )
}
export default Logo