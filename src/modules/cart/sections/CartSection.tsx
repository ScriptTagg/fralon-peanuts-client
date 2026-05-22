import SectionWrapper from "@/shared/components/shared/SectionWrapper";
import { Button } from "@/shared/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/components/ui/table";
import { ChevronLeft, Trash2, X } from "lucide-react";
import productImage from "../../../../public/images/product_img.png";
import Image from "next/image";
import { P } from "@/shared/components/ui/Typography";
import NavButton from "@/shared/components/ui/NavButton";

export const cartItems = [
  {
    id: 1,
    name: "Peanut Butter",
    variant: "smooth",
    size: "800g",
    price: "ksh 550",
    quantity: 2,
    subTotal: "Ksh 1100",
  },
  {
    id: 2,
    name: "Peanut Butter",
    variant: "smooth",
    size: "400g",
    price: "ksh 250",
    quantity: 4,
    subTotal: "Ksh 1000",
  },
  {
    id: 3,
    name: "Peanut Flour",
    variant: "smooth",
    size: "500g",
    price: "ksh 350",
    quantity: 2,
    subTotal: "Ksh 700",
  },
  {
    id: 4,
    name: "Peanut Butter",
    variant: "crunchy",
    size: "800g",
    price: "ksh 600",
    quantity: 1,
    subTotal: "Ksh 600",
  },
];

export default function CartSection() {
  return (
    <SectionWrapper className="hidden md:block">
      <Table className="max-w-198 mx-auto">
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow className="py-4 border border-foreground-border rounded-lg text-primary text-base font-semibold">
            <TableHead className="w-25">Action</TableHead>
            <TableHead>Product</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead className="text-right">Sub Total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cartItems.map((cartItem) => (
            <TableRow key={cartItem.id}>
              <TableCell className="">
                <Button variant="ghost" className="p-2 rounded-sm">
                  <X className="text-destructive" />
                </Button>
              </TableCell>
              <TableCell className="flex items-center gap-4">
                <div className="w-20 h-25 rounded-sm relative">
                  <Image src={productImage} alt="peanut butter" className="" />
                </div>
                <div className="flex flex-col justify-center">
                  <P>{cartItem.name}</P>
                  <small className="text-caption-base text-foreground-caption">
                    {cartItem.variant} | {cartItem.size}
                  </small>
                </div>
              </TableCell>
              <TableCell>{cartItem.price}</TableCell>
              <TableCell className="text-center">{cartItem.quantity}</TableCell>
              <TableCell className="text-right font-semibold text-base">{cartItem.subTotal}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={4}>
              <NavButton variant="ghost" path="/products" className="py-2 px-3 rounded-sm">
                <ChevronLeft />
                Continue shopping
              </NavButton>
            </TableCell>
            <TableCell className="text-right">
              <Button variant="ghost" className="py-2 px-3 rounded-sm text-destructive">
                <Trash2 />
                clear cart
              </Button>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </SectionWrapper>
  );
}
