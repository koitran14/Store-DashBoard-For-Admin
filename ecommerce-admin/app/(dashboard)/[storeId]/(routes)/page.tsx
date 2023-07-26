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
      <div className="flex-1 space-y-4 px-8 pt-4">
        <div className="flex justify-between items-center">
          <Heading title="Dashboard" description="Overview of your store" />
          <div className="flex-row flex gap-3 justify-center items-center border border-input rounded-md">
            <div>
              <ThemeToggle />
            </div>
            <div className="mr-2">
              <UserButton/>
            </div>
          </div>
        </div>
        <Separator />
        <div className="xl:grid xl:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="grid xl:gap-4 lg:gap-6 xl:grid-cols-3 lg:grid-rows">
              <Card className="overflow-hidden">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 dark:bg-slate-800">
                  <CardTitle className="text-xl">
                    Total Revenue
                  </CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <Separator />
                <CardContent>
                  <div className="text-2xl font-bold mt-8">{formatter.format(totalRevenue)}</div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 dark:bg-slate-800">
                  <CardTitle className="text-xl">Sales</CardTitle>
                  <CreditCard className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <Separator />
                <CardContent>
                  <div className="text-2xl font-bold mt-8">+{salesCount}</div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 dark:bg-slate-800">
                  <CardTitle className="text-xl ">Products In Stock</CardTitle>
                  <Package className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <Separator />
                <CardContent>
                  <div className="text-2xl font-bold mt-8">{stockCount}</div>
                </CardContent>
              </Card>
            </div>
            <Card className="col-span-4 mt-6">
              <CardHeader>
                <CardTitle className="text-2xl">Overview</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <Overview data={graphRevenue} />
              </CardContent>
            </Card>
          </div>
          <div className="lg:mt-6 xl:mt-0">
            <Card className="col-span-4">
                <CardHeader >
                  <CardTitle className="text-2xl">Orders</CardTitle>
                </CardHeader>
                <CardContent>
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
