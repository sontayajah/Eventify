"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { LoginSchema } from "@/lib/validator";
import FormError from "@/components/FormError";
import FormSuccess from "@/components/FormSuccess";

import { login } from "@/lib/actions/login.actions";

import { useState, useTransition } from "react";

export default function LoginPage() {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof LoginSchema>) {
    setError("");
    setSuccess("");

    startTransition(() => {
      login(values).then((data) => {
        setError(data.error);
        setSuccess(data.success);
      });
    });
  }

  return (
    <div className="mx-auto my-6 max-w-md px-8 sm:px-0">
      <h1 className="scroll-m-20 pb-2 text-center text-3xl font-semibold tracking-tight first:mt-0">
        Welcome Back!
      </h1>
      <p className="text-center text-sm text-muted-foreground">
        Enter your email and password to sign in.
      </p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8 space-y-5">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your email address"
                    {...field}
                    disabled={isPending}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your password"
                    {...field}
                    type="password"
                    disabled={isPending}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormError message={error} />
          <FormSuccess message={success} />

          <Button type="submit" className="w-full" disabled={isPending}>
            Submit
          </Button>
        </form>
      </Form>

      <div className="mt-6 flex items-center justify-center gap-2">
        <p className="text-sm text-muted-foreground">
          {`Don't have an account ?`}
        </p>
        <Link
          href="/register"
          className="text-sm font-semibold text-primary hover:text-primary/90"
        >
          Sign up
        </Link>
      </div>
    </div>
  );
}
