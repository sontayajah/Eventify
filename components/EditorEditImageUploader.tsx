import { ImagePlusIcon, PencilIcon, XIcon } from "lucide-react";
import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import EditorUploadWithURL from "@/components/EditorUploadWithURL";
import Image from "next/image";

interface EditorEditImageUploaderProps {
  previewUrl: string | null;
  setPreviewUrl: Dispatch<SetStateAction<string | null>>;
  setSaveFileRef: Dispatch<SetStateAction<File | null>>;
}
export default function EditorEditImageUploader({
  previewUrl,
  setPreviewUrl,
  setSaveFileRef,
}: EditorEditImageUploaderProps) {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [previewUrlEditor, setPreviewUrlEditor] = useState<string | null>(null);
  const [inputRefValue, setInputRefValue] = useState<File | null>(null);

  const handleUploadChange = () => {
    if (inputFileRef.current?.files && inputFileRef.current.files[0]) {
      const file = inputFileRef.current.files[0];
      setInputRefValue(file);

      const reader = new FileReader();

      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };

      reader.readAsDataURL(file);
    }

    if (!inputFileRef.current?.files) {
      setInputRefValue(null);
      setPreviewUrl(null);
    }
  };

  const handleConfirmImage = () => {
    if (!previewUrl) {
      setSaveFileRef(null);
      setPreviewUrlEditor(null);
    } else {
      setPreviewUrlEditor(previewUrl);
      setSaveFileRef(inputRefValue);
    }
  };

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <div className="mx-auto mb-2 mt-8 px-4 sm:container">
            <p className="text-lg font-semibold">รูปภาพหน้าปก</p>
            {!previewUrlEditor && (
              <>
                <div className="mt-3 cursor-pointer rounded-md border border-slate-300 py-16 transition-colors hover:border-slate-400 dark:border-slate-800 dark:hover:border-slate-600">
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
              </>
            )}

            {previewUrlEditor && (
              <div className="relative mt-3 h-48 overflow-hidden rounded-md sm:h-60 md:h-72 lg:h-96">
                <Image
                  src={previewUrlEditor}
                  width={1920}
                  height={1082}
                  alt="preview"
                  className="h-full w-full object-cover"
                />

                <Button variant="secondary" className="absolute right-4 top-4">
                  <PencilIcon className="mr-2" /> แก้ไข
                </Button>
              </div>
            )}
          </div>
        </DialogTrigger>
        <DialogContent className="max-h-[90vh] max-w-3xl overflow-auto">
          <DialogHeader>
            <DialogTitle className="text-center text-xl">
              เพิ่มรูปภาพ
            </DialogTitle>
          </DialogHeader>
          <DialogDescription></DialogDescription>
          <Tabs defaultValue="upload">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="upload">อัปโหลดรูปภาพ</TabsTrigger>
              <TabsTrigger value="url">อัปโหลดด้วย URL</TabsTrigger>
            </TabsList>
            <TabsContent value="upload">
              <div className="mt-4">
                {!previewUrl && (
                  <>
                    <div className="relative mt-3 cursor-pointer rounded-md border border-slate-300 py-10 transition-colors hover:border-slate-400 dark:border-slate-800 dark:hover:border-slate-600">
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

                      <input
                        id="file-upload"
                        ref={inputFileRef}
                        type="file"
                        className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                        accept="image/*"
                        onChange={handleUploadChange}
                      />
                    </div>
                  </>
                )}

                {previewUrl && (
                  <div className="relative">
                    <Image
                      src={previewUrl}
                      width={1920}
                      height={1082}
                      alt="preview"
                    />

                    <Button
                      size="icon"
                      variant="secondary"
                      className="absolute right-4 top-4"
                      onClick={() => {
                        setPreviewUrl(null);
                        // if (inputFileRef.current) {
                        //   inputFileRef.current = undefined;
                        // }
                      }}
                    >
                      <XIcon />
                    </Button>
                  </div>
                )}
              </div>
              <DialogFooter className="flex gap-3 sm:justify-between">
                <DialogClose asChild>
                  <Button
                    type="reset"
                    variant="secondary"
                    className="mt-8 px-10"
                  >
                    ยกเลิก
                  </Button>
                </DialogClose>
                <DialogClose asChild>
                  <Button
                    type="submit"
                    className="mt-8 px-10"
                    onClick={handleConfirmImage}
                  >
                    ยืนยัน
                  </Button>
                </DialogClose>
              </DialogFooter>
            </TabsContent>
            <TabsContent value="url">
              <EditorUploadWithURL />
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>
    </>
  );
}
