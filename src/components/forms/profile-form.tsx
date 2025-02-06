"use client";
import React from "react";
import { cn } from "@/lib/utils";

import { useActionState } from "react";
import { updateProfileAction } from "@/data/actions/profile-actions";

import { SubmitButton } from "@/components/custom/submit-button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { StrapiErrors } from "@/components/custom/strapi-errors";

const INITIAL_STATE = {
  data: null,
  strapiErrors: null,
  message: null,
};

interface ProfileFormProps {
  id: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  bio: string;
  credits: number;
}

function CountBox({ text }: { readonly text: number }) {
  const style = "font-bold text-md mx-1";
  const color = text > 0 ? "text-primary" : "text-red-500";
  return (
    <div className="flex items-center justify-center h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none">
      Você tem<span className={cn(style, color)}>{text}</span>crédito(s)
    </div>
  );
}

export function ProfileForm({
  data,
  className,
}: {
  readonly data: ProfileFormProps;
  readonly className?: string;
}) {
  const updateProfileWithId = updateProfileAction.bind(null, data.id);

  const [formState, formAction] = useActionState(
    updateProfileWithId,
    INITIAL_STATE
  );


  return (
    <form className={cn("space-y-4", className)} action={formAction}>
      <div className="space-y-4 grid">
        <div className="grid grid-cols-3 gap-4">
          <Input
            id="username"
            name="username"
            placeholder="Nome de usuário"
            defaultValue={data?.username || ""}
            disabled
          />
          <input type="hidden" name="id" value={data.id} />
          <Input
            id="email"
            name="email"
            placeholder="E-mail"
            defaultValue={data?.email || ""}
            disabled
          />
          <CountBox text={data?.credits} />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Input
            id="firstName"
            name="firstName"
            placeholder="Primeiro Nome"
            defaultValue={data?.firstName || ""}
          />
          <Input
            id="lastName"
            name="lastName"
            placeholder="Sobrenome"
            defaultValue={data?.lastName || ""}
          />
        </div>
        <Textarea
          id="bio"
          name="bio"
          placeholder="Escreva sua biografia aqui..."
          className="resize-none border rounded-md w-full h-[224px] p-2"
          defaultValue={data?.bio || ""}
          required
        />
      </div>
      <div className="flex justify-end">
        <SubmitButton text="Atualizar Perfil" loadingText="Salvando Perfil" />
      </div>
      <StrapiErrors error={formState?.strapiErrors} />
    </form>
  );
}
