"use client";
import RadioBtnWrapper from "@/modules/checkout/components/RadioBtnWrapper";
import SectionWrapper from "@/shared/components/shared/SectionWrapper";
import AppImage from "@/shared/components/ui/AppImage";
import { RadioGroup, RadioGroupItem } from "@/shared/components/ui/radio-group";
import { H3, H4, P } from "@/shared/components/ui/Typography";
import productImage from "../../../../public/images/product_img.png";
import AddToCartBtn from "../components/AddToCartBtn";
import { Button } from "@/shared/components/ui/button";

export default function SingleProductDetails() {
  return (
    <SectionWrapper className="flex flex-col gap-8 items-center lg:flex-row">
      <div className="max-w-126.25 w-full flex flex-col mx-auto gap-6">
        <div className="relative w-full h-120">
          <AppImage src="/images/product_img.png" alt="Peanut products" className="" />
        </div>
        <div className="flex justify-center gap-2 sm:gap-4 items-center">
          {[...Array(4)].map((img, index) => (
            <div key={index} className="w-25 h-20 bg-accent rounded-xs"></div>
          ))}
        </div>
      </div>

      <div className="flex flex-col mx-auto gap-6 max-w-125">
        <div className="space-y-2">
          <small className="text-accent">Butter</small>
          <H3>Peanut Butter (800g)</H3>
        </div>
        <div className="flex flex-col gap-4 py-4 border-y border-foreground-border">
          <H4 className="">Description</H4>
          <P className="max-w-100">
            Nicely roasted Smooth peanut Butter, easy to apply, high on plant protein and easy to spread. 100% natural
            with no additives or preservatives
          </P>

          <div className="space-y-1">
            <P className="font-semibold">Variant:</P>
            <RadioGroup
              value="smooth"
              /*  onValueChange={field.onChange} */
              className="grid gap-4 grid-cols-2"
            >
              <RadioBtnWrapper htmlFor="smooth">
                <RadioGroupItem value="smooth" id="smooth" />
                <span>Smooth</span>
              </RadioBtnWrapper>
              <RadioBtnWrapper htmlFor="crunchy">
                <RadioGroupItem value="crunchy" id="crunchy" />
                <span>Crunch</span>
              </RadioBtnWrapper>
            </RadioGroup>
          </div>

          <div className="space-y-1">
            <P className="font-semibold">Price:</P>
            <RadioGroup
              value="retail"
              /*  onValueChange={field.onChange} */
              className="grid gap-4 grid-cols-2"
            >
              <RadioBtnWrapper htmlFor="retail">
                <RadioGroupItem value="retail" id="retail" />
                <span>Retail</span>
              </RadioBtnWrapper>
              <RadioBtnWrapper htmlFor="wholesale">
                <RadioGroupItem value="wholesale" id="wholesale" />
                <span>Wholesale</span>
              </RadioBtnWrapper>
            </RadioGroup>
          </div>
        </div>
        <AddToCartBtn variant="default" className="w-full mt-1 sticky bottom-2 lg:static" />
      </div>
    </SectionWrapper>
  );
}
