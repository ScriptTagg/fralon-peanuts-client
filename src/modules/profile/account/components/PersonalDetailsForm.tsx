"use client";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/shared/components/ui/field";
import { Input } from "@/shared/components/ui/input";
import { H4 } from "@/shared/components/ui/Typography";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { personalDetailsSchema, type PersonalDetailsInput } from "../schemas/personal-details.schema";
import { Activity, useEffect, useState } from "react";
import { Button } from "@/shared/components/ui/button";
import { Pencil, Save } from "lucide-react";
import { useUpdateProfile } from "../me/update-profile/useUpdateProfile";
import type { ProfileWithAddresses } from "../me/update-profile/update-profile.types";
import FormError from "@/shared/components/shared/FormError";

export default function PersonalDetailsForm({ user }: { user: ProfileWithAddresses | null }) {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const { mutateAsync, isPending } = useUpdateProfile();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, dirtyFields },
  } = useForm<PersonalDetailsInput>({
    resolver: zodResolver(personalDetailsSchema),
    defaultValues: {
      full_name: user?.full_name ?? "",
      email: user?.email ?? "",
      phone: user?.phone ?? "",
    },
  });

  useEffect(() => {
    if (user) {
      reset({
        full_name: user.full_name,
        email: user.email,
        phone: user.phone ?? "",
      });
    }
  }, [reset, user]);

  const handleUpdatePersonalDetails: SubmitHandler<PersonalDetailsInput> = async (data) => {
    const updates = Object.keys(dirtyFields).reduce((acc, key) => {
      acc[key as keyof PersonalDetailsInput] = data[key as keyof PersonalDetailsInput];
      return acc;
    }, {} as Partial<PersonalDetailsInput>);

    try {
      const newProfile = await mutateAsync(updates);
      reset({
        full_name: newProfile.full_name,
        email: newProfile.email,
        phone: newProfile.phone ?? "",
      });
      setIsEditing(false);
    } catch (err) {
      console.log("updating error :", err);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleUpdatePersonalDetails)} className="max-w-150 mx-0">
      <FieldSet className="gap-6">
        <div className="flex items-center gap-4 justify-between">
          <div className="">
            <FieldLegend className="">
              <H4>Personal Infomation</H4>
            </FieldLegend>
            <FieldDescription>Update your personal info.</FieldDescription>
          </div>
          <div className="flex items-center gap-2">
            <Button type="button" onClick={() => setIsEditing(true)} size="sm" variant="ghost">
              <Pencil />
              Edit
            </Button>
            <Button type="submit" disabled={!isDirty} size="sm">
              <Save />
              {isPending ? "Saving..." : "Save"}
            </Button>
          </div>
        </div>
        <Activity mode={errors.root ? "visible" : "hidden"}>
          <FormError>{errors.root?.message}</FormError>
        </Activity>
        <FieldGroup className="gap-4 grid grid-cols-1 sm:grid-cols-2">
          <Field className="sm:col-span-2">
            <FieldLabel htmlFor="full_name">Full Name</FieldLabel>
            <Input disabled={!isEditing} id="full_name" type="text" {...register("full_name")} />
            {errors.full_name && <FieldError>{errors.full_name.message}</FieldError>}
          </Field>

          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input disabled={!isEditing} id="email" type="email" {...register("email")} />
            {errors.email && <FieldError>{errors.email.message}</FieldError>}
          </Field>

          <Field>
            <FieldLabel htmlFor="phone">Phone</FieldLabel>
            <Input disabled={!isEditing} id="phone" type="tel" {...register("phone")} />
            {errors.phone && <FieldError>{errors.phone.message}</FieldError>}
          </Field>
        </FieldGroup>
      </FieldSet>
    </form>
  );
}
