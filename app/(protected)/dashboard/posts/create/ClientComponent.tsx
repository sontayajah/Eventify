"use client";

import Tiptap from "@/components/TextEditor/Tiptap";
import { Button } from "@/components/ui/button";
import { ChangeEvent, useState } from "react";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";
import { Category, User } from "@/types";
import { toast } from "react-toastify";
import { ImagePlusIcon } from "lucide-react";
import CategorySelection from "./CategorySelection";

export default function NewPost({
  user,
  categories,
}: {
  user: User;
  categories: Category[];
}) {
  const router = useRouter();

  const [editor, setEditor] = useState<any>();
  const [title, setTitle] = useState<string>("");
  const [isPublishedLoading, setIsPublishedLoading] = useState<boolean>(false);
  const [isDraftLoading, setIsDraftLoading] = useState<boolean>(false);

  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);

  return (
    <>
      <main className="m-auto mt-10">
        {editor && (
          <>
            <div className="mx-auto mb-2 mt-8 px-4 sm:container">
              <p className="text-lg font-semibold">รูปภาพหน้าปก</p>
              <div className="mt-3 cursor-pointer rounded-md border border-slate-300 py-10 transition-colors hover:border-slate-400 dark:border-slate-800 dark:hover:border-slate-600">
                <ImagePlusIcon
                  className="mx-auto size-10"
                  strokeWidth={1}
                  color="hsl(var(--muted-foreground))"
                />
                <p className="mt-3 text-center text-base font-medium text-primary">
                  อัปโหลดรูปภาพ
                </p>
                <p className="mt-1 text-center text-xs font-medium text-muted-foreground">
                  PNG, JPG, WEBP ...
                </p>
              </div>
            </div>
          </>
        )}

        {editor && (
          <CategorySelection
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
            categories={categories}
          />
        )}

        {editor && (
          <>
            <div className="mx-auto mb-2 mt-5 px-4 sm:container">
              <textarea
                className="block w-full resize-none bg-transparent py-4 text-3xl font-semibold leading-loose focus-visible:outline-none lg:text-4xl"
                placeholder="เพิ่มหัวข้อโพสต์..."
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
                  setTitle(e.target.value);
                }}
              />
            </div>
          </>
        )}
        <Tiptap setEditor={setEditor} />
        {editor && (
          <>
            <Separator className="mt-12" />

            <div className="mx-auto my-6 flex gap-8 px-4 sm:container">
              <Button
                size="lg"
                disabled={isPublishedLoading || isDraftLoading}
                className="px-16"
                onClick={() => {
                  const savePostData = async () => {
                    try {
                      if (selectedCategories.length === 0) {
                        return toast.error("กรุณาเลือกอย่างน้อย 1 หมวดหมู่");
                      }

                      if (title.length === 0) {
                        return toast.error("กรุณาเพิ่มหัวข้อโพสต์");
                      }

                      if (editor.isEmpty) {
                        return toast.error("กรุณาเพิ่มเนื้อหาโพสต์");
                      }

                      setIsPublishedLoading(true);

                      const postData = {
                        title: title,
                        content: JSON.stringify(editor.getJSON()),
                        authorId: user.id,
                        category: selectedCategories.map((prev) => prev.id),
                      };

                      const createPostResponse = await toast.promise(
                        fetch("/api/post/create", {
                          method: "POST",
                          headers: {
                            "Content-Type": "application/json",
                          },
                          body: JSON.stringify(postData),
                        }),
                        {
                          pending: "กำลังโพสต์...",
                          success: "โพสต์สำเร็จ 👌",
                          error: "โพสต์ไม่สำเร็จ 🤯",
                        },
                      );

                      const createPostResult = await createPostResponse.json();

                      if (createPostResult?.success) {
                        router.replace(createPostResult?.data.post.url);
                        router.refresh();
                      }
                    } catch (error) {
                      setIsPublishedLoading(false);
                      console.log(error);
                    }
                  };

                  savePostData();
                }}
              >
                {isPublishedLoading ? <>กำลังโพสต์...</> : <>โพสต์</>}
              </Button>
              <Button
                size="lg"
                variant="outline"
                disabled={isDraftLoading || isPublishedLoading}
                className="px-16"
                onClick={() => {
                  const savePostData = async () => {
                    if (title.length === 0) {
                      return console.log("Title is empty");
                    }

                    setIsDraftLoading(true);

                    const postData = {
                      title: title,
                      content: JSON.stringify(editor.getJSON()),
                      authorId: user.id,
                    };

                    const createDraftPostResponse = await toast.promise(
                      fetch("/api/post/create-draft", {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json",
                        },
                        body: JSON.stringify(postData),
                      }),
                      {
                        pending: "กำลังบันทึกฉบับร่าง...",
                        success: "บันทึกฉบับร่างสำเร็จ 👌",
                        error: "บันทึกฉบับร่างไม่สำเร็จ 🤯",
                      },
                    );

                    const createDraftPostResult =
                      await createDraftPostResponse.json();

                    if (createDraftPostResult?.success) {
                      router.replace(createDraftPostResult?.data.post.url);
                      router.refresh();
                    }
                  };

                  savePostData();
                }}
              >
                {isDraftLoading ? <>กำลังบันทึก...</> : <>บันทึกร่าง</>}
              </Button>
            </div>
          </>
        )}

        {!editor && (
          <>
            <p className="text-center">กำลังโหลด...</p>
          </>
        )}
      </main>
    </>
  );
}
