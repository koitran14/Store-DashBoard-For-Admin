import { CreditCard, DollarSign, Package } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { Overview } from "@/components/overview";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { getTotalRevenue } from "@/actions/get-total-revenue";
import { getSalesCount } from "@/actions/get-sales-count";
import { getGraphRevenue } from "@/actions/get-graph-revenue";
import { getStockCount } from "@/actions/get-stock-count";
import { formatter } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";
import OrderPartPage from "./components/orders-part";
import { UserButton } from "@clerk/nextjs";
import LinkToOrders from "./components/linktoorders";

interface DashboardPageProps {
  params: {
    storeId: string;
  };
};

const DashboardPage: React.FC<DashboardPageProps> = async ({ 
  params
}) => {
  const totalRevenue = await getTotalRevenue(params.storeId);
  const graphRevenue = await getGraphRevenue(params.storeId);
  const salesCount = await getSalesCount(params.storeId);
  const stockCount = await getStockCount(params.storeId);

  

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 px-3 pt-4">
        <div className="flex justify-between items-center mr-2">
          <Heading title="Dashboard" description="Overview of your store" />
          <div className="flex-row flex gap-2 justify-center items-center border border-input rounded-md">
            <div>
              <ThemeToggle />
            </div>
            <div className="mr-2">
              <UserButton />
            </div>
          </div>
        </div>
        <Separator />
        <div className="xl:grid xl:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="grid sm:gap-6 xl:grid-cols-3 lg:grid-rows">
              <Card className="overflow-hidden">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 dark:bg-slate-800">
                  <CardTitle className="text-base">
                    Total Revenue
                  </CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <Separator />
                <CardContent>
                  <div className="text-xl font-bold mt-8">{formatter.format(totalRevenue)}</div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 dark:bg-slate-800">
                  <CardTitle className="text-base">Sales</CardTitle>
                  <CreditCard className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <Separator />
                <CardContent>
                  <div className="text-xl font-bold mt-8">+{salesCount}</div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 dark:bg-slate-800">
                  <CardTitle className="text-base ">Products In Stock</CardTitle>
                  <Package className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <Separator />
                <CardContent>
                  <div className="text-xl font-bold mt-8">{stockCount}</div>
                </CardContent>
              </Card>
              <Card className="xl:col-span-3 h-full">
                <CardHeader>
                  <CardTitle className="text-xl ml-2 mt-2 mb-2">Overview</CardTitle>
                </CardHeader>
                <CardContent className="pl-2 mt-6">
                  <Overview data={graphRevenue} />
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="sm:mt-6 xl:mt-0 h-full">
            <Card className="col-span-4">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-xl items-center">Orders</CardTitle>
                <div>
                  <LinkToOrders />
                </div>
              </CardHeader>
              <Separator />
              <CardContent className="mt-2">
                <OrderPartPage params={{ storeId: params.storeId }} />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
