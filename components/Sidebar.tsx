'use client'
import Link from "next/link";
import Image from "next/image";
import { sidebarLinks } from "../constants";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
const Sidebar = ({ user }: SiderbarProps) => {
  const pathname = usePathname();
  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link
          href="http://"
          className="flex mb-12 cursor-pointer items-center gap-2"
        >
          <Image
            src="/icons/logo.svg"
            alt="Bankey logo"
            width={35}
            height={35}
            className="size-[24] max-xl:size-14"
          />
          <h1 className="sidebar-logo">Bankey</h1>
        </Link>
        {sidebarLinks.map((link) => {
          const isActive = pathname === link.route || pathname.startsWith(`${link.route}/active`)
          return (
            <Link 
                key={link.label} 
                href={link.route} 
                className={
                            cn("sidebar-link", {"bg-bank-gradient": isActive})
                }
            >
                <div className="relative size-6">
                    <Image
                        src={link.imgURL}
                        alt={link.label}
                        fill
                        className={cn({"brightness-[3] invert-0":isActive})}
                    />
                </div>
                <p className={cn("sidebar-label", {"!text-white":isActive})}>{link.label}</p>
              
            </Link>
          );
        })}
      </nav>
    </section>
  );
};

export default Sidebar;
