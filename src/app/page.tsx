import Image from "next/image";
import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
        <div>URPALI</div>
        <div>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 shrink-0 rounded-full"
          >
            <Minus className="h-4 w-4" />
            <span className="sr-only">Decrease</span>
          </Button>
          <span className="mx-4">1</span>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 shrink-0 rounded-full"
          >
            <Plus className="h-4 w-4" />
            <span className="sr-only">Increase</span>
          </Button>
        </div>
    </main>
  );
}
