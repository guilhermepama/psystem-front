"use client";

import Link from "next/link";

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

export function SignupForm() {
  return (
    <div className="w-full max-w-md">
      <form>
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-3xl font-bold">Cadastrar</CardTitle>
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
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="seunome@email.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="crie uma senha..."
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col">
            <button className="w-full">Cadastrar</button>
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