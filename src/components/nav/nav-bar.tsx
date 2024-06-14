"use client"

import { Button } from "@/components/ui/button"
import { NavigationMenu, NavigationMenuList } from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { JSX, SVGProps } from "react"
import Logo from "@/components/ui/logo"

export default function NavBar() {

  const links = [
    {
      name: "Home",
      onClick: () => {
        console.log("Home goo")
      },
      route: '/'
    },
    {
      name: "Get Sponsored 🤑",
      onClick: () => {
        console.log("Contact")
      },
      route: '/get-sponsored'
    },
    {
      name: "Contact",
      onClick: () => {
        console.log("Contact")
      },
      route: '/contact'
    }
  ]

  


  return (
    <header className="flex h-18 w-full shrink-0 items-center px-0  bg-black
    border-main border-dashed border-b-[1px]">
      <Sheet>
        <SheetTrigger asChild>
          <Button className="lg:hidden w-20 mr-4 ml-4 border-x-2" size="icon">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent className="bg-white" side="left">
         <Logo className ="flex border-x-0 h-[76px] justify-center 
        text-4xl lg:px-16 sm:px-5 px-6 text-white border-r-[1px] border-main " />
          <div className="grid gap-4 py-6">
            {links.map((key, index) => (
              <Button className="justify-start w-full text-left px-4"
                onClick={links[index].onClick}
                variant='link' key={index}>{links[index].name}</Button>
            ))}
          </div>
        </SheetContent>
      </Sheet>

      <Logo className ="flex border-x-0 h-[76px] justify-center 
        text-4xl lg:px-16 sm:px-5 px-6 text-white border-r-[1px] border-main border-dashed" />
          <div className="grid gap-4 py-6"/>

      <div className="flex-1 hidden lg:flex justify-end">
        <NavigationMenu>
          <NavigationMenuList>

            {links.map((link, index) => (
              <Button
                variant='link'
                className={`text-xl h-[72px] px-10 text-white border-r-[1px] border-main border-dashed`}
                onClick={link.onClick}
                key={index}
              >
                {link.name}
              </Button>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex justify-end">
        
        <Button className="mx-10 lg:size-lg sm:size-sm" 
         >
         <a href="#bookingform"> Book Now!</a>
        </Button>
      </div>
    </header>
  )
}

function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}

