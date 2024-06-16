"use client";

import Tiptap from "@/components/TextEditor/Tiptap";
import { Button } from "@/components/ui/button";
import { ChangeEvent, useState } from "react";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";
import { Post, User } from "@/types";
import { toast } from "react-toastify";

export default function EditPost({
  user,
  postData,
}: {
  user: User;
  postData: Post;
}) {
  const [editor, setEditor] = useState<any>();
  const [title, setTitle] = useState<string>(postData.title);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  return (
    <>
      <main className="m-auto mt-10">
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
                disabled={isLoading}
                className="px-16"
                onClick={() => {
                  const savePostData = async () => {
                    try {
                      if (title.length === 0) {
                        return console.log("Title is empty");
                      }

                      setIsLoading(true);

                      const postUpdateData = {
                        title: title,
                        content: JSON.stringify(editor.getJSON()),
                        postId: postData.id,
                      };

                      const editPostResponse = await toast.promise(
                        fetch("/api/post/edit", {
                          method: "POST",
                          headers: {
                            "Content-Type": "application/json",
                          },
                          body: JSON.stringify(postUpdateData),
                        }),
                        {
                          pending: "กำลังแก้ไขโพสต์...",
                          success: "แก้ไขโพสต์สำเร็จ 👌",
                          error: "แก้ไขโพสต์ไม่สำเร็จ 🤯",
                        },
                      );

                      const editPostResult = await editPostResponse.json();

                      if (editPostResult?.success) {
                        router.push(editPostResult?.data.post.url);
                        router.refresh();
                      }
                    } catch (error) {
                      setIsLoading(false);
                      console.log(error);
                    }
                  };

                  savePostData();
                }}
              >
                {isLoading ? <>กำลังแก้ไขโพสต์...</> : <>แก้ไขโพสต์</>}
              </Button>
              <Button
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
                      router.push(createPostResult?.data.post.url);
                      router.refresh();
                    }
                  };

                  savePostData();
                }}
              >
                {isLoading ? <>กำลังบันทึก...</> : <>บันทึกร่าง</>}
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
