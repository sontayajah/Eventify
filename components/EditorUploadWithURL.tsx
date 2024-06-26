import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DialogFooter, DialogClose } from "@/components/ui/dialog";

const formSchema = z.object({
  url: z.string().min(1, {
    message: "กรุณากรอก URL ของรูปภาพ",
  }),
});

export default function EditorUploadWithURL() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      url: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="mt-4">
      {/* <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="url"
            render={({ field }) => (
              <FormItem>
                <FormLabel>URL รูปภาพ</FormLabel>
                <FormControl>
                  <Input placeholder="กรอก URL ของรูปภาพที่จะแสดง" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <DialogFooter className="flex gap-3 sm:justify-between">
            <DialogClose asChild>
              <Button type="reset" variant="secondary" className="px-10">
                ยกเลิก
              </Button>
            </DialogClose>
            <Button type="submit" className="px-10">
              ยืนยัน
            </Button>
          </DialogFooter>
        </form>
      </Form> */}
      <p className="text-center">Coming Soon</p>
    </div>
  );
}
