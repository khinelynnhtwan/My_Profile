import { Link } from "react-router-dom"
import UseButton from "../Component/Button"



export const Error = () => {
  return (
    <section className="flex w-full  items-center justify-center h-screen">
        <div className="text-center">
            <h1 className="text-3xl font-bold">404 Not Found</h1>
            <p className="w-80 pb-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem ullam atque numquam sit amet labore.</p>
            <Link to={"/"}>
              <UseButton text = "Go to Home" color="white"/>
            </Link>
        </div>
    </section>
  )
}
