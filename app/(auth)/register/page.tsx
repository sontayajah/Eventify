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

import { RegisterSchema } from "@/lib/validator";

export default function RegisterPage() {
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      fullname: "",
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof RegisterSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="mx-auto my-6 max-w-md px-8 sm:px-0">
      <h1 className="scroll-m-20 pb-2 text-center text-2xl font-semibold tracking-tight first:mt-0 sm:text-3xl">
        Create your own account
      </h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-4 space-y-4">
          <FormField
            control={form.control}
            name="fullname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your full name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your email address" {...field} />
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
                  />
                </FormControl>
                {/* <FormDescription>
              This is your public display name.
            </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Confirm your password"
                    {...field}
                    type="password"
                  />
                </FormControl>
                {/* <FormDescription>
              This is your public display name.
            </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </Form>

      <div className="mt-6 flex items-center justify-center gap-2">
        <p className="text-sm text-muted-foreground">
          {`Already have an account ?`}
        </p>
        <Link
          href="/login"
          className="text-sm font-semibold text-primary hover:text-primary/90"
        >
          Sign in
        </Link>
      </div>
    </div>
  );
}
