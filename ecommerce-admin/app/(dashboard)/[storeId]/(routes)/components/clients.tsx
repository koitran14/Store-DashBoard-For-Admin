"use client";

import { DataTable } from "@/components/ui/data-table";

import { columns, OrdersColumn } from "./columns";

interface OrderClientProps {
  data: OrdersColumn[];
}

export const OrderClient: React.FC<OrderClientProps> = ({
  data
}) => {
  return (
    <>
      <DataTable searchKey="phone" columns={columns} data={data} pageLimit={3}/>
    </>
  );
};
