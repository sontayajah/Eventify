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
      username: "",
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
        ยินดีต้อนรับกลับมา!
      </h1>
      <p className="text-center text-sm text-muted-foreground">
        กรอกชื่อผู้ใช้และรหัสผ่านของคุณเพื่อเข้าสู่ระบบ
      </p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8 space-y-5">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ชื่อผู้ใช้</FormLabel>
                <FormControl>
                  <Input
                    placeholder="กรอกชื่อผู้ใช้ของคุณ"
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
                <FormLabel>รหัสผ่าน</FormLabel>
                <FormControl>
                  <Input
                    placeholder="กรอกรหัสผ่านของคุณ"
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
            เข้าสู่ระบบ
          </Button>
        </form>
      </Form>

      <div className="mt-6 flex items-center justify-center gap-2">
        <p className="text-sm text-muted-foreground">
          คุณยังไม่ได้เป็นสมาชิกใช่หรือไม่ ?
        </p>
        <Link
          href="/register"
          className="text-sm font-semibold text-primary hover:text-primary/90"
        >
          สมัครสมาชิก
        </Link>
      </div>
    </div>
  );
}
