"use client"

import { ColumnDef } from "@tanstack/react-table"

export type OrdersColumn = {
  id: string;
  phone: string;
  address: string;
  isPaid: boolean;
  totalPrice: string;
  products: string;
  createdAt: string;
}

export const columns: ColumnDef<OrdersColumn>[] = [
    {
        accessorKey: "createdAt",
        header: "Date",
    },
    {
        accessorKey: "phone",
        header: "Phone",
    },
    {
        accessorKey: "products",
        header: "Products",
    },
    {
        accessorKey: "totalPrice",
        header: "Total price",
    },
    
];
