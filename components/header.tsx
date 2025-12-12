import Image from "next/image";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import favicon from "../app/favicon.svg";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";

export function Header() {
  return (
    <header className="sticky top-0 backdrop-blur-xl border-b dark:border-zinc-800 border-zinc-200 h-14 w-full flex items-center p-2 gap-x-2">
      <div className="flex items-center justify-center">
        <Button variant="ghost" size="icon" asChild>
          <Link draggable={false} href="/" aria-label="Go home">
            <Image
              draggable={false}
              src={favicon}
              alt="Logo"
              width={32}
              height={32}
            />
          </Link>
        </Button>
      </div>
      <Separator orientation="vertical" className="mx-2" />
      <nav className="flex items-center gap-0.5">
        <Button variant="ghost" size="sm" asChild>
          <Link draggable={false} href="/news">
            News
          </Link>
        </Button>
        <Button variant="ghost" size="sm" asChild>
          <Link draggable={false} href="/products">
            Products
          </Link>
        </Button>
      </nav>
      <div className="flex items-center w-full justify-end-safe">
        <div className="flex items-center gap-2">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
