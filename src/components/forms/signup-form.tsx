"use client";

import Link from "next/link";
import { useFormState } from "react-dom";
import { registerUserAction } from "@/data/actions/auth-actions";

import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import { ZodErrors } from "@/components/custom/zod-errors";
import { StrapiErrors } from "@/components/custom/strapi-errors";
import { SubmitButton } from "@/components/custom/submit-button";

const INITIAL_STATE = {
  data: null,
  zodErrors: null,
  message: null,
};


export function SignupForm() {
  const [formState, formAction] = useFormState(registerUserAction, INITIAL_STATE);
  
  console.log(formState, "client");
  
  return (
    <div className="w-full max-w-md">
      <form action={formAction}>
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-3xl font-bold">Cadastre-se</CardTitle>
            <CardDescription>
              Entre com seus dados para criar uma nova conta
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Nome</Label>
              <Input
                id="username"
                name="username"
                type="text"
                placeholder="digite seu nome..."
              />
              <ZodErrors error={formState?.zodErrors?.username} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="seunome@email.com"
              />
              <ZodErrors error={formState?.zodErrors?.email} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="crie uma senha..."
              />
              <ZodErrors error={formState?.zodErrors?.password} />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col">
            <SubmitButton className="w-full" text="Cadastrar" loadingText="Loading" />
            <StrapiErrors error={formState?.strapiErrors} />
          </CardFooter>
        </Card>
        <div className="mt-4 text-center text-sm">
            Já tem uma conta?
          <Link className="underline ml-2" href="signin">
            Entrar
          </Link>
        </div>
      </form>
    </div>
  );
}