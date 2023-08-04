
import { SignOutButton, auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import StoreSwitcher from "@/components/store-switcher";
import { MainNav } from "@/components/main-nav";
import prismadb from "@/lib/prismadb";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";


const Navbar = async () => {
  const { userId } = auth();

  if (!userId) {
    redirect('/sign-in');
  }

  const stores = await prismadb.store.findMany({
    where: {
      userId,
    }
  });

  return ( 
    <div className="border-r px-4 h-full items-start justify-center hidden md:block">
      <div className=" relative justify-start py-8 sm:px-3">
        <div className="mb-8 items-center flex justify-center">
          <StoreSwitcher items={stores} />
        </div>
        <Separator />
        <div className="my-8">
          <MainNav className="mx-6" />
        </div>
        <Separator />
        <div className="flex justify-start items-center my-8 px-8 w-full">
            {/* <ThemeToggle /> */}
            <SignOutButton> 
              <Button
                size="switcher"
                variant="outline">
                  <div className=" flex items-center text-base font-medium transition-colors text-muted-foreground active:text-black dark:active:text-white hover:text-primary"> 
                    <LogOut className="lg:mr-6 sm:mr-3 h-5 w-5" />
                    Log out 
                  </div>
                </Button>
            </SignOutButton>  
        </div>
      </div>
    </div>
    
  );
};
 
export default Navbar;
