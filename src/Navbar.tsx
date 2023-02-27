import { useState } from "react"
import { Link } from "react-router-dom"

export const Navbar: React.FC = () => {
    const [open, setOpen] = useState(false);
    const Menus = [ 
        // title: What you want the button to be labeled as
        // src: Name of the image you want as the icon. Must be in the assets folder
        // gap: Creates a gap above the item
        // link: Where you want the button to take you
        { title: "Home",                        src: "User",        link: "/"},
        { title: "Browse Classes",              src: "Calendar",    link: "/browse-classes" },
        { title: "Registration Information",    src: "Folder",      link: "/",                    gap: true },
        { title: "Major Requirements ",         src: "Chart_fill",  link: "/major-requirements" },
      ];
    return (

    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-gray-600 h-screen p-5 pt-8 fixed top-0 left-0 right-0 duration-300`}
      >


        <img
          src="./src/assets/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-blue-700
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
            <img
                src="./src/assets/logo.png"
                className={`duration-500 ${
                    open && "rotate-[360deg]"
                }`}
            />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Tank Engine Boys
          </h1>
        </div>


        <ul className="pt-8">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex rounded-md p-3 cursor-pointer hover:bg-gray-500 text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-gray-600"
              } `}
            >
              <img src={`./src/assets/${Menu.src}.png`} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                <Link to={Menu.link}>{Menu.title}</Link>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
    )
}