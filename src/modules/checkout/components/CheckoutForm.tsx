"use client";
import SectionWrapper from "@/shared/components/shared/SectionWrapper";
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel, FieldSet } from "@/shared/components/ui/field";
import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import { checkoutSchema, type CheckoutInput } from "../checkout.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { RadioGroup, RadioGroupItem } from "@/shared/components/ui/radio-group";
import { Label } from "@/shared/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/components/ui/select";
import { Textarea } from "@/shared/components/ui/textarea";
import { H3 } from "@/shared/components/ui/Typography";
import { Input } from "@/shared/components/ui/input";
import CheckoutOrderSummary from "@/modules/cart/components/CheckoutOrderSummary";
import { deliveryFee, subTotal } from "@/modules/cart/sections/CartSection";
import { Button } from "@/shared/components/ui/button";
import RadioBtnWrapper from "./RadioBtnWrapper";

export default function CheckoutForm() {
  const { handleSubmit, control, watch } = useForm<CheckoutInput>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      fulfillmentMethod: undefined,
      constituency: "",
      ward: "",
      street: "",
      paymentMethod: undefined,
      mpesaPhone: "",
    },
  });

  const fulfillmentMethodSelection = watch("fulfillmentMethod");
  const paymentMethodSelection = watch("paymentMethod");

  const handleCheckout: SubmitHandler<CheckoutInput> = (data) => {
    console.log("checkout data :", data);
  };

  return (
    <SectionWrapper>
      <form onSubmit={handleSubmit(handleCheckout)} className="max-w-198 flex flex-col gap-8">
        <FieldSet className="border border-foreground-border radius-card p-6">
          <div className="flex gap-4 flex-col">
            <H3 className="py-0">Choose your prefered option</H3>
            <FieldGroup>
              <Controller
                name="fulfillmentMethod"
                control={control}
                render={({ field, fieldState }) => (
                  <RadioGroup
                    data-invalid={fieldState.invalid}
                    aria-invalid={fieldState.invalid}
                    value={field.value}
                    onValueChange={field.onChange}
                    className="grid gap-4 grid-cols-1 sm:grid-cols-2"
                  >
                    <RadioBtnWrapper htmlFor="pickup" active={fulfillmentMethodSelection === "pickup"}>
                      <RadioGroupItem value="pickup" id="pickup" />
                      <span>Pickup</span>
                    </RadioBtnWrapper>
                    <RadioBtnWrapper htmlFor="delivery" active={fulfillmentMethodSelection === "delivery"}>
                      <RadioGroupItem value="delivery" id="delivery" />
                      <span>Delivery</span>
                    </RadioBtnWrapper>
                  </RadioGroup>
                )}
              />
            </FieldGroup>
          </div>
          <div className="flex gap-4 flex-col">
            <H3 className="py-0">Delivery address</H3>
            <FieldGroup className="grid gap-y-2 gap-x-3 grid-cols-1 md:grid-cols-2">
              <Controller
                name="constituency"
                control={control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel>Constituency / Sub County</FieldLabel>
                    <Select name={field.name} value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your constituency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="kasarani">Kasarani</SelectItem>
                        <SelectItem value="starehe">Starehe</SelectItem>
                        <SelectItem value="embakasiWest">Embakasi West</SelectItem>
                        <SelectItem value="dagoretti">Dagoretti</SelectItem>
                        <SelectItem value="westlands">Westlands</SelectItem>
                      </SelectContent>
                    </Select>
                  </Field>
                )}
              />
              <Controller
                name="ward"
                control={control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel>Ward</FieldLabel>
                    <Select name={field.name} value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger aria-invalid={fieldState.invalid}>
                        <SelectValue placeholder="Select your ward" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="njiru">Njiru</SelectItem>
                        <SelectItem value="dandora">Dandora</SelectItem>
                        <SelectItem value="mathare">Mathare</SelectItem>
                        <SelectItem value="kibra">Kibra</SelectItem>
                      </SelectContent>
                    </Select>
                  </Field>
                )}
              />
              <Controller
                name="street"
                control={control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid} className="md:col-span-2">
                    <FieldLabel htmlFor="street">Area / Street</FieldLabel>
                    <Textarea
                      {...field}
                      id="street"
                      aria-invalid={fieldState.invalid}
                      placeholder="Describe your area"
                      className="min-h-14"
                    />
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </Field>
                )}
              />
            </FieldGroup>
          </div>
        </FieldSet>

        <FieldSet className="border border-foreground-border radius-card p-6">
          <div className="flex gap-4 flex-col">
            <H3 className="py-0">Choose payment option</H3>
            <FieldGroup>
              <Controller
                name="paymentMethod"
                control={control}
                render={({ field, fieldState }) => (
                  <RadioGroup
                    data-invalid={fieldState.invalid}
                    aria-invalid={fieldState.invalid}
                    value={field.value}
                    onValueChange={field.onChange}
                    className="grid gap-4 grid-cols-1 sm:grid-cols-2"
                  >
                    <RadioBtnWrapper htmlFor="cash" active={paymentMethodSelection === "cash"}>
                      <RadioGroupItem value="cash" id="cash" />
                      <span>Cash on Delivery</span>
                    </RadioBtnWrapper>
                    <RadioBtnWrapper htmlFor="mpesa" active={paymentMethodSelection === "mpesa"}>
                      <RadioGroupItem value="mpesa" id="mpesa" />
                      <span>Mpesa</span>
                    </RadioBtnWrapper>
                  </RadioGroup>
                )}
              />
            </FieldGroup>
          </div>
          <div className="flex gap-4 flex-col">
            <H3 className="py-0">Pay easily with mpesa</H3>
            <FieldGroup>
              <Controller
                name="mpesaPhone"
                control={control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="mpesaPhone">Enter Mpesa Phone Number</FieldLabel>
                    <Input
                      {...field}
                      id="mpesaPhone"
                      type="tel"
                      aria-invalid={fieldState.invalid}
                      placeholder="07xxxxxxxx"
                    />
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                    <FieldDescription>You'll receive a payment prompt on your phone</FieldDescription>
                  </Field>
                )}
              />
            </FieldGroup>
          </div>
        </FieldSet>
        <CheckoutOrderSummary deliveryFee={deliveryFee} subTotal={subTotal} />
        <Button type="submit" className="w-full sticky bottom-3 sm:hidden -mt-4">
          Confirm Order
        </Button>
      </form>
    </SectionWrapper>
  );
}
