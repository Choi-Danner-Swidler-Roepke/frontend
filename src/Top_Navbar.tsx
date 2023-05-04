import { Link } from "react-router-dom"

export const Top_Navbar: React.FC = () => {
  const Menus = [ 
    // title: What you want the button to be labeled as
    // link: Where you want the button to take you
    { title: "Home",                        link: "/"},
    { title: "Classes",                     link: "/browse-classes" },
    { title: "Majors",                      link: "/major-requirements" },
    { title: "Schedule",                    link: "/my-schedule"},
    { title: "Registration",                link: "/registration-information" },
  ];
  return (
    <div className='flex justify-between items-center h-24 w-full mx-auto px-4 bg-gray-700 text-white dropshadow-md'>
      <img src="/assets/new_logo.png"/>
      <h1 className='w-full px-2 text-3xl font-bold text-cyan-600'>REGISTRATION APPLICATION.</h1>
      <ul className='hidden md:flex'>
        {Menus.map((Menu, index) => (
          <li
           key={index}
           className="p-4 rounded-md hover:bg-gray-600">
           <span>
              <Link to={Menu.link}>{Menu.title}</Link>
           </span>
          </li>
        ))}
      </ul>
    </div>
  );
}