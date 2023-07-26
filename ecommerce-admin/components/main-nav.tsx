"use client";

import Link from "next/link"
import { useParams, usePathname } from "next/navigation";

import { cn } from "@/lib/utils"
import { BaggageClaim, Database, LayoutGridIcon, Move, Package, Palette, Settings, Store } from "lucide-react";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();
  const params = useParams();

  const routes = [
    {
      href: `/${params.storeId}`,
      label:  'Overview',
      icon: <LayoutGridIcon size={25}/>,
      active: pathname === `/${params.storeId}`,
    },
    {
      href: `/${params.storeId}/billboards`,
      label: 'Billboards',
      icon: <Store  size={25} />,
      active: pathname === `/${params.storeId}/billboards`,
    },
    {
      href: `/${params.storeId}/categories`,
      label: 'Categories',
      icon: <Database size={25} />,
      active: pathname === `/${params.storeId}/categories`,
    },
    {
      href: `/${params.storeId}/sizes`,
      label: 'Sizes',
      icon: <Move size={25} />,
      active: pathname === `/${params.storeId}/sizes`,
    },
    {
      href: `/${params.storeId}/colors`,
      label: 'Colors',
      icon: <Palette size={25} />,
      active: pathname === `/${params.storeId}/colors`,
    },
    {
      href: `/${params.storeId}/products`,
      label: 'Products',
      icon: <Package   size={25} />,
      active: pathname === `/${params.storeId}/products`,
    },
    {
      href: `/${params.storeId}/orders`,
      label: 'Orders',
      icon: <BaggageClaim  size={25} />,
      active: pathname === `/${params.storeId}/orders`,
    },
    {
      href: `/${params.storeId}/settings`,
      label: 'Settings',
      icon: <Settings  size={25} />,
      active: pathname === `/${params.storeId}/settings`,
    },
  ]

  return (
    <nav
      className={cn("flex items-start flex-col space-y-8", className)}
      {...props}
    >
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            'text-xl font-medium transition-colors hover:text-primary',
            route.active ? 'text-black dark:text-white' : 'text-muted-foreground'
          )}
        > 
        <div className="flex items-center justify-between hover:translate-x-3 hover:transition-all">
          <div className="mr-4">
            {route.icon}
          </div>
          <div>
            {route.label}
          </div>
        </div>
      </Link>
      ))}
    </nav>
  )
};
