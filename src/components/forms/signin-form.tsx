"use client";

import Link from "next/link";
import { useActionState } from "react";
import { loginUserAction } from "@/data/actions/auth-actions";

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
  zodErrors: null,
  strapiErrors: null,
  data: null,
  message: null,
};

export function SigninForm() {
  const [formState, formAction] = useActionState(loginUserAction, INITIAL_STATE);
  return (
    <div className="w-full max-w-md">
      <form action={formAction}>
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-3xl font-bold">Entrar</CardTitle>
            <CardDescription>
              Insira seus dados para acessar sua conta
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="identifier"
                name="identifier"
                type="text"
                placeholder="Nome de usuário ou e-mail"
              />
              <ZodErrors error={formState?.zodErrors?.identifier} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Senha"
              />
              <ZodErrors error={formState?.zodErrors?.password} />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col">
            <SubmitButton
              className="w-full"
              text="Entrar"
              loadingText="Carregando"
            />
            <StrapiErrors error={formState?.strapiErrors} />
          </CardFooter>
        </Card>
        <div className="mt-4 text-center text-sm">
          Ainda não tem uma conta?
          <Link className="underline ml-2" href="signup">
            Cadastre-se
          </Link>
        </div>
      </form>
    </div>
  );
}
