"use client"

import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

const LinkToOrders = () => {
    
const router = useRouter();
const params = useParams();

const [loading, setLoading] = useState(false);

const gotoOrders = async () => {
    try {
        setLoading(true);
        router.refresh();
        router.push(`/${params.storeId}/orders`);
      } finally {
        setLoading(false);
      }
}
    return (
        <Button
            disabled={loading}
            variant="outline"
            size="smallericon"
            onClick={() => gotoOrders()}
        >
            <ArrowUpRight className="text-muted-foreground items-center"/>
        </Button>
    );
}
 
export default LinkToOrders;