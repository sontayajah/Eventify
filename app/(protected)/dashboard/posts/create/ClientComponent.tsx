"use client";

import Tiptap from "@/components/TextEditor/Tiptap";
import { Button } from "@/components/ui/button";
import { ChangeEvent, useRef, useState } from "react";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";
import { Category, User } from "@/types";
import { toast } from "react-toastify";
import { ImagePlusIcon } from "lucide-react";
import CategorySelection from "./CategorySelection";
import ImageUploader from "./ImageUploader";

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

  const [saveFileRef, setSaveFileRef] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  return (
    <>
      <main className="m-auto mt-10">
        {editor && (
          <ImageUploader
            previewUrl={previewUrl}
            setPreviewUrl={setPreviewUrl}
            setSaveFileRef={setSaveFileRef}
          />
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
                      if (!saveFileRef) {
                        return toast.error("กรุณาอัปโหลดรูปภาพ");
                      }

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

                      const formData = new FormData();
                      formData.append("title", title);
                      formData.append(
                        "content",
                        JSON.stringify(editor.getJSON()),
                      );
                      formData.append("authorId", user.id);
                      formData.append("file", saveFileRef);

                      // Add categories as individual form fields
                      selectedCategories.forEach((category, index) => {
                        formData.append(`category[${index}]`, category.id);
                      });

                      const createPostResponse = await toast.promise(
                        fetch("/api/post/create", {
                          method: "POST",
                          body: formData,
                        }),
                        {
                          pending: "กำลังโพสต์...",
                          success: "โพสต์สำเร็จ 👌",
                          error: "โพสต์ไม่สำเร็จ 🤯",
                        },
                      );

                      const createPostResult = await createPostResponse.json();

                      if (createPostResult?.success) {
                        router.replace(createPostResult?.redirect);
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
