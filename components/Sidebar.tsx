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
        
      </nav>
    </section>
  );
};

export default Sidebar;
