'use client';


import Link from "next/link";
import {usePathname} from "next/navigation";
import {cn} from "@/lib/utils";

const navitems = [
    { label: 'Home', href: '/' },
    { label: 'Companions', href: '/companions' },
    { label: 'My journey', href: '/my-journey' },
]







const Navitems  = () => {
    const pathname = usePathname();
  return (
      <nav className="flex items-center gap-4">
          {navitems.map(({ label, href})=> (
              <Link
                  href={href}
                  key={label}
                  className={cn(pathname === href && 'text-primary font-semibold')}
              >
                  {label}

              </Link>
          ))}

      </nav>
  );
};

export default Navitems;
