"use client";

import { ChangeEvent, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import Tiptap from "@/components/TextEditor/Tiptap";
import EditorCategorySelection from "@/components/EditorCategorySelection";
import EditorEditImageUploader from "@/components/EditorEditImageUploader";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { toast } from "react-toastify";

import { Category, Post, User } from "@/types";
import { PencilIcon } from "lucide-react";

export default function EditPost({
  user,
  postData,
  categories,
}: {
  user: User;
  postData: Post;
  categories: Category[];
}) {
  const router = useRouter();

  const [editor, setEditor] = useState<any>();
  const [title, setTitle] = useState<string>(postData.title);
  const [isEditLoading, setIsEditLoading] = useState<boolean>(false);

  const [selectedCategories, setSelectedCategories] = useState<Category[]>(
    postData.categories,
  );

  const [saveFileRef, setSaveFileRef] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  return (
    <>
      <main className="m-auto mt-10">
        {/* {editor && (
          <EditorEditImageUploader
            previewUrl={previewUrl}
            setPreviewUrl={setPreviewUrl}
            setSaveFileRef={setSaveFileRef}
          />
        )} */}

        {editor && (
          <div className="mx-auto mb-2 mt-8 px-4 sm:container">
            <div className="relative mt-3 h-48 overflow-hidden rounded-md sm:h-60 md:h-72 lg:h-96">
              <Image
                src={postData.imageUrl}
                width={1920}
                height={1082}
                alt={postData.imageAlt}
                className="h-full w-full object-cover"
              />

              {/* <Button variant="secondary" className="absolute right-4 top-4">
                <PencilIcon className="mr-2" /> แก้ไข
              </Button> */}
            </div>
          </div>
        )}

        {editor && (
          <EditorCategorySelection
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
            categories={categories}
          />
        )}

        {editor && (
          <>
            <div className="mx-auto mb-2 mt-8 px-4 sm:container">
              <textarea
                className="block w-full resize-none bg-transparent py-4 text-3xl font-semibold leading-loose focus-visible:outline-none lg:text-4xl"
                placeholder="เพิ่มหัวข้อโพสต์ ..."
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
                  setTitle(e.target.value);
                }}
                defaultValue={title}
              />
            </div>
          </>
        )}
        <Tiptap setEditor={setEditor} postData={postData} />
        {editor && (
          <>
            <Separator className="mt-12" />

            <div className="mx-auto my-6 flex gap-8 px-4 sm:container">
              <Button
                size="lg"
                disabled={isEditLoading}
                className="px-16"
                onClick={() => {
                  const savePostData = async () => {
                    try {
                      // if (!saveFileRef) {
                      //   return toast.error("กรุณาอัปโหลดรูปภาพ");
                      // }

                      if (selectedCategories.length === 0) {
                        return toast.error("กรุณาเลือกอย่างน้อย 1 หมวดหมู่");
                      }

                      if (title.length === 0) {
                        return toast.error("กรุณาเพิ่มหัวข้อโพสต์");
                      }

                      if (editor.isEmpty) {
                        return toast.error("กรุณาเพิ่มเนื้อหาโพสต์");
                      }

                      setIsEditLoading(true);

                      const formData = new FormData();
                      formData.append("title", title);
                      formData.append(
                        "content",
                        JSON.stringify(editor.getJSON()),
                      );
                      formData.append("authorId", user.id);
                      formData.append("postId", postData.id);
                      // formData.append("file", saveFileRef);

                      // Add categories as individual form fields
                      selectedCategories.forEach((category) => {
                        formData.append("category", category.id);
                      });

                      const editPostResponse = await toast.promise(
                        fetch("/api/post/edit", {
                          method: "POST",
                          body: formData,
                        }),
                        {
                          pending: "กำลังแก้ไขโพสต์...",
                          success: "แก้ไขโพสต์สำเร็จ 👌",
                          error: "แก้ไขโพสต์ไม่สำเร็จ 🤯",
                        },
                      );

                      const editPostResult = await editPostResponse.json();

                      if (editPostResult?.success) {
                        router.replace(editPostResult?.redirect);
                        router.refresh();
                      }
                    } catch (error) {
                      console.log(error);
                    } finally {
                      setIsEditLoading(false);
                    }
                  };

                  savePostData();
                }}
              >
                {isEditLoading ? <>กำลังแก้ไขโพสต์...</> : <>แก้ไขโพสต์</>}
              </Button>
              {/* <Button
                size="lg"
                variant="outline"
                disabled={isLoading}
                className="px-16"
                onClick={() => {
                  const savePostData = async () => {
                    if (title.length === 0) {
                      return console.log("Title is empty");
                    }

                    setIsLoading(true);

                    const postData = {
                      title: title,
                      content: JSON.stringify(editor.getJSON()),
                      authorId: user.id,
                    };

                    const createPostResponse = await fetch("/api/post/create", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify(postData),
                    });

                    const createPostResult = await createPostResponse.json();

                    if (createPostResult?.success) {
                      router.replace(createPostResult?.data.post.url);
                      router.refresh();
                    }
                  };

                  savePostData();
                }}
              >
                {isLoading ? <>กำลังบันทึก...</> : <>บันทึกร่าง</>}
              </Button> */}
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
