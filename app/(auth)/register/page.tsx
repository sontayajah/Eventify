"use client";

// External libraries
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { signIn } from "next-auth/react";

// Project UI components
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

// Local components
import FormError from "@/components/FormError";
import FormSuccess from "@/components/FormSuccess";

// Local validation schema
import { RegisterSchema } from "@/lib/validator";
import { register } from "@/lib/actions/register.actions";

export default function RegisterPage() {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, setIsPending] = useState<boolean>(false);

  const router = useRouter();

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(values: z.infer<typeof RegisterSchema>) {
    try {
      setError("");
      setIsPending(true);

      const validatedFields = RegisterSchema.safeParse(values);

      if (!validatedFields.success) {
        return setError(error);
      }

      const data = await register(values);

      if (!data.success) {
        setIsPending(false);
        return setError(data.message);
      }

      await signIn("credentials", {
        username: values.username,
        password: values.password,
        redirect: false,
      });

      router.push("/");
      router.refresh();
    } catch (error) {
      setIsPending(false);
      console.log(error);
    }
  }

  return (
    <div className="mx-auto my-6 max-w-md px-8 sm:px-0">
      <h1 className="scroll-m-20 pb-2 text-center text-2xl font-semibold tracking-tight first:mt-0 sm:text-3xl">
        สมัครสมาชิกบัญชีใหม่
      </h1>
      <p className="text-center text-sm text-muted-foreground">
        กรอกชื่อผู้ใช้และรหัสผ่านของคุณเพื่อสมัครสมาชิก
      </p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8 space-y-5">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>อีเมล</FormLabel>
                <FormControl>
                  <Input
                    placeholder="กรอกอีเมลของคุณ"
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
                {/* <FormDescription>
              This is your public display name.
            </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ยืนยันรหัสผ่าน</FormLabel>
                <FormControl>
                  <Input
                    placeholder="กรอกรหัสผ่านของคุณอีกครั้ง"
                    {...field}
                    type="password"
                    disabled={isPending}
                  />
                </FormControl>
                {/* <FormDescription>
              This is your public display name.
            </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />

          <FormError message={error} />
          <FormSuccess message={success} />

          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending ? "กำลังโหลด..." : "สมัครสมาชิก"}
          </Button>
        </form>
      </Form>

      <div className="mt-6 flex items-center justify-center gap-2">
        <p className="text-sm text-muted-foreground">
          คุณมีบัญชีอยู่แล้วใช่หรือไม่?
        </p>
        <Link
          href="/login"
          className="text-sm font-semibold text-primary hover:text-primary/90"
        >
          เข้าสู่ระบบ
        </Link>
      </div>
    </div>
  );
}
