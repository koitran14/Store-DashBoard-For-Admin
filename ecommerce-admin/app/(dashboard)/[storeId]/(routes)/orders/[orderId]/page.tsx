import prismadb from "@/lib/prismadb";
import { OrderForm } from "./components/order-form";

const OrdersPage = async ({
    params
} : {
    params: { billboardId: string}
}) => {
    
    const billboard = params.billboardId !== 'new' ? await prismadb.billboard.findUnique({
        where: {
            id: params.billboardId
        }
    }): null;

    return (  
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <OrderForm initialData={billboard}/>
            </div>
        </div>
    );
}
 
export default OrdersPage;