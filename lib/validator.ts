import * as z from "zod";

export const LoginSchema = z.object({
  // email: z
  //   .string({
  //     invalid_type_error: "อีเมลไม่ถูกต้อง",
  //     required_error: "กรุณากรอกอีเมล",
  //   })
  //   .email(),
  username: z.string().min(1, { message: "กรุณากรอกชื่อผู้ใช้" }),
  password: z.string().min(1, { message: "กรุณากรอกรหัสผ่าน" }),
});

export const RegisterSchema = z
  .object({
    // displayName: z.string().min(1, { message: "Display Name is required" }),
    username: z.string().min(1, { message: "กรุณากรอกชื่อผู้ใช้" }),
    email: z
      .string({
        required_error: "กรุณากรอกอีเมล",
      })
      .email({
        message: "รูปแบบอีเมลไม่ถูกต้อง",
      }),
    password: z.string().min(1, { message: "กรุณากรอกรหัสผ่าน" }),
    confirmPassword: z.string().min(1, { message: "กรุณายืนยันรหัสผ่าน" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "รหัสผ่านไม่ตรงกัน",
  });
