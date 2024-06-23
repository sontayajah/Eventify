"use client";

// External libraries
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { z } from "zod";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

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
import { LoginSchema } from "@/lib/validator";

export default function LoginPage() {
  const router = useRouter();

  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, setIsPending] = useState<boolean>(false);

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof LoginSchema>) {
    try {
      setError("");
      setSuccess("");
      setIsPending(true);

      const validatedFields = LoginSchema.safeParse(values);

      if (!validatedFields.success) {
        return setError(error);
      }

      const signInPromise = new Promise(async (resolve, reject) => {
        const response = await signIn("credentials", {
          username: values.username,
          password: values.password,
          redirect: false,
        });

        if (!response?.ok) {
          reject(new Error("Promise rejected"));
          setIsPending(false);
          setError("Username or password incorrect.");
        } else {
          resolve("Promise resolved successfully");
          router.replace("/");
          router.refresh();
        }
      });

      await toast.promise(signInPromise, {
        pending: "กำลังเข้าสู่ระบบ...",
        success: "เข้าสู่ระบบสำเร็จ 👌",
        error: "เข้าสู่ระบบไม่สำเร็จ 🤯",
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="mx-auto my-6 max-w-md px-8 sm:px-0">
      <h1 className="scroll-m-20 pb-2 text-center text-2xl font-semibold tracking-tight first:mt-0 sm:text-3xl">
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
                    className="invalid:ring-black"
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
            {isPending ? "กำลังโหลด..." : "เข้าสู่ระบบ"}
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
