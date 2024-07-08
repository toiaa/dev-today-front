"use client";

import { ImageIcon, Loader2, XCircle } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import UploadFileIcon from "@/components/shared/icons/UploadFileIcon";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { handleFileDelete } from "@/utils/fileUtils";
import { UploadButton } from "@/utils/uploadthing";

const ProfileImageUpload = ({ value, setValue }: AudioUploadProps) => {
  const { toast } = useToast();
  const [profileImage, setProfileImage] = useState("");
  const [fileIsDeleting, setFileIsDeleting] = useState(false);

  const deleteFile = (value: string) => {
    handleFileDelete(value, setFileIsDeleting, setValue, toast);
  };

  return (
    <>
      {value?.length ? (
        <div className="flex items-center gap-3">
          <div className="flex size-[60px] items-center justify-center rounded-full bg-white-100 text-white-400 dark:bg-dark-800 dark:text-white-300">
            <Image
              src={value}
              alt="my profile image"
              width={60}
              height={60}
              style={{ borderRadius: "50%", height: "60px", width: "60px" }}
            />
          </div>
          <Button
            onClick={() => deleteFile(value)}
            type="button"
            className=" paragraph-3-regular bg-white-100 text-white-400 hover:bg-white-100 dark:bg-dark-800  dark:text-white-300 hover:dark:bg-dark-800"
          >
            {fileIsDeleting ? (
              <Loader2 />
            ) : (
              <div className="flex items-center justify-center gap-1.5">
                {profileImage} <XCircle />
              </div>
            )}
          </Button>
        </div>
      ) : (
        <div className="flex gap-3">
          <div className="flex size-[60px] items-center justify-center rounded-full bg-white-100 text-white-400 dark:bg-dark-800 dark:text-white-300">
            <ImageIcon />
          </div>
          <UploadButton
            appearance={{
              button:
                "dark:bg-dark-800 ut-ready:bg-white-100 ut-uploading:cursor-not-allowed py-3 px-5 text-white-400 w-[250px] bg-white-100 paragraph-3-regular ml-2.5",
              container: "flex flex-row justify-start",
              allowedContent:
                "flex h-8 flex-col items-center justify-center px-2 text-white",
            }}
            content={{
              button({ ready }) {
                if (ready)
                  return (
                    <div className="flex gap-2">
                      <UploadFileIcon />
                      Set a group profile photo
                    </div>
                  );

                return "Getting ready...";
              },
            }}
            endpoint="imageUploader"
            onClientUploadComplete={(res) => {
              setValue(res[0].url);
              setProfileImage(res[0].name);
              toast({
                variant: "success",
                description: "🎉 Upload Completed",
              });
            }}
            onUploadError={(error: Error) => {
              toast({
                variant: "destructive",
                description: `ERROR! ${error.message}`,
              });
            }}
          />
        </div>
      )}
    </>
  );
};

export default ProfileImageUpload;
