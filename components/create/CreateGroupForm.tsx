"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import debounce from "debounce";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import CrossIcon from "@/components/shared/icons/CrossIcon";
import ImageUpload from "@/components/shared/uploadthing/ImageUpload";
import ProfileImageUpload from "@/components/shared/uploadthing/ProfileImageUpload";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
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
import { Textarea } from "@/components/ui/textarea";
import { CreateGroupSchema } from "@/lib/validations";
import { createGroup } from "@/utils/methods";

const CreateGroupForm: React.FC<CreateGroupFormProps> = ({ creatorId }) => {
  const [adminInputValue, setAdminInputValue] = useState<string>("");
  const [usersFoundAdmin, setUsersFoundAdmin] = useState<UserProfile[]>([]);
  const [memberInputValue, setMemberInputValue] = useState<string>("");
  const [usersFoundMember, setUsersFoundMember] = useState<UserProfile[]>([]);
  const [disableSubmit, setDisableSubmit] = useState<boolean>(false);
  const router = useRouter();
  const form = useForm<CreateGroupSchema>({
    resolver: zodResolver(CreateGroupSchema),
    defaultValues: {
      name: "",
      bio: "",
      coverImage: "",
      profileImage: "",
      admins: [],
      members: [],
    },
  });

  const onSearchAdmin = async (value: string) => {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/user?search=${value}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await result.json();
    setUsersFoundAdmin(data);
  };

  const onSearchMember = async (value: string) => {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/user?search=${value}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await result.json();
    setUsersFoundMember(data);
  };
  const handleAdminSearch = debounce(onSearchAdmin, 500);
  const handleMemberSearch = debounce(onSearchMember, 500);

  async function onSubmit(values: z.infer<typeof CreateGroupSchema>) {
    try {
      if (creatorId) {
        const res = await createGroup(values, creatorId);
        const newPost = await res.json();
        setDisableSubmit(true);
        if (res.ok) {
          router.push(`${newPost.id}?postType=standard`);
        }
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="p-8 md:w-[840px]">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 text-dark-800 dark:text-white-200"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Group name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Write the name of the group"
                    {...field}
                    className="input-form border-white-border focus-visible:ring-transparent focus-visible:ring-offset-transparent
                       dark:border-dark-border dark:bg-dark-800 dark:text-white-300"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="profileImage"
            render={({ field }) => (
              <FormItem className="mt-6 md:mt-8">
                <FormLabel className="paragraph-3-medium text-dark-800 dark:text-white-200">
                  Profile a cover image
                </FormLabel>
                <FormControl>
                  <ProfileImageUpload
                    value={field.value}
                    setValue={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="coverImage"
            render={({ field }) => (
              <FormItem className="mt-6 md:mt-8">
                <FormLabel className="paragraph-3-medium text-dark-800 dark:text-white-200">
                  Upload a cover image
                </FormLabel>
                <FormControl>
                  <ImageUpload value={field.value} setValue={field.onChange} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="bio"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Group bio</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Write a short description of the group..."
                    className="input-form h-[130px] border-white-border dark:border-dark-border"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />{" "}
          <FormField
            control={form.control}
            name="admins"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Add admins</FormLabel>
                <FormControl>
                  <div className="input-form flex min-h-10 flex-row gap-2 rounded-md border border-white-border p-1 dark:border-dark-border">
                    <div className="input-form flex flex-row  gap-2 rounded-md border-white-border p-1 dark:border-dark-border">
                      {field.value &&
                        field.value.map((userFieldValue, index) => (
                          <Badge
                            key={`${userFieldValue}-${index}`}
                            className="caption-cap-10 flex items-center gap-1 rounded-full border-none bg-white-200 text-dark-700 dark:bg-dark-700 dark:text-white-300"
                            variant="outline"
                          >
                            <Avatar className="size-[12px]">
                              <AvatarImage src={userFieldValue.imageURL} />
                              <AvatarFallback>user image</AvatarFallback>
                            </Avatar>
                            {userFieldValue.username}
                            <span
                              className="cursor-pointer"
                              onClick={() =>
                                field.onChange(
                                  field.value.filter(
                                    (user) =>
                                      user.username !== userFieldValue.username
                                  )
                                )
                              }
                            >
                              <CrossIcon />
                            </span>
                          </Badge>
                        ))}

                      <Input
                        value={adminInputValue}
                        placeholder="Search users..."
                        className="input-form m-0 size-full shrink-0 border border-none bg-transparent p-1 focus-visible:ring-transparent
                       focus-visible:ring-offset-transparent dark:border-none dark:bg-dark-800 dark:text-white-300"
                        onChange={async (e) => {
                          const target = e.target as HTMLInputElement;
                          const inputValue = target.value;
                          setAdminInputValue(inputValue);

                          await handleAdminSearch(inputValue);
                        }}
                      />
                    </div>
                  </div>
                </FormControl>
                <div className="relative">
                  {usersFoundAdmin.length ? (
                    <div className="input-form absolute inset-x-0 flex flex-col gap-2 rounded-b-lg p-2">
                      {usersFoundAdmin.map((userFound, index) => {
                        return (
                          <div
                            key={index}
                            className="flex cursor-pointer items-center gap-2 hover:opacity-85"
                            onClick={() => {
                              const values = form.getValues();

                              if (
                                !values.members.find(
                                  (user) => user.username === userFound.username
                                ) &&
                                !field.value.find(
                                  (user) => user.username === userFound.username
                                )
                              ) {
                                field.onChange([
                                  ...field.value,
                                  {
                                    userId: userFound.id,
                                    username: userFound.username,
                                    imageURL: userFound.image,
                                  },
                                ]);
                                setUsersFoundAdmin([]);
                                setAdminInputValue("");
                              }
                            }}
                          >
                            <Avatar className="size-[17px]">
                              <AvatarImage src={userFound?.image || ""} />
                              <AvatarFallback>user image</AvatarFallback>
                            </Avatar>
                            <span>{userFound.username}</span>
                          </div>
                        );
                      })}
                    </div>
                  ) : null}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="members"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Add members</FormLabel>
                <FormControl>
                  <div className="input-form flex min-h-10 flex-row gap-2 rounded-md border border-white-border p-1 dark:border-dark-border">
                    <div className="input-form flex flex-row  gap-2 rounded-md border-white-border p-1 dark:border-dark-border">
                      {field.value &&
                        field.value.map((userFieldValue, index) => (
                          <Badge
                            key={`${userFieldValue}-${index}`}
                            className="caption-cap-10 flex items-center gap-1 rounded-full border-none bg-white-200 text-dark-700 dark:bg-dark-700 dark:text-white-300"
                            variant="outline"
                          >
                            <Avatar className="size-[12px]">
                              <AvatarImage src={userFieldValue.imageURL} />
                              <AvatarFallback>user image</AvatarFallback>
                            </Avatar>
                            {userFieldValue.username}
                            <span
                              className="cursor-pointer"
                              onClick={() =>
                                field.onChange(
                                  field.value.filter(
                                    (user) =>
                                      user.username !== userFieldValue.username
                                  )
                                )
                              }
                            >
                              <CrossIcon />
                            </span>
                          </Badge>
                        ))}
                      <Input
                        value={memberInputValue}
                        placeholder="Search users..."
                        className="input-form m-0 size-full shrink-0 border border-none bg-transparent p-1 focus-visible:ring-transparent
                       focus-visible:ring-offset-transparent dark:border-none dark:bg-dark-800 dark:text-white-300"
                        onChange={async (e) => {
                          const target = e.target as HTMLInputElement;
                          const inputValue = target.value;
                          setMemberInputValue(inputValue);

                          await handleMemberSearch(inputValue);
                        }}
                      />
                    </div>
                  </div>
                </FormControl>
                <div className="relative">
                  {usersFoundMember.length ? (
                    <div className="input-form absolute inset-x-0 flex flex-col gap-2 rounded-b-lg p-2">
                      {usersFoundMember.map((userFound, index) => {
                        return (
                          <div
                            key={index}
                            className="flex cursor-pointer items-center gap-2 hover:opacity-85"
                            onClick={() => {
                              const values = form.getValues();

                              if (
                                !values.admins.find(
                                  (user) => user.username === userFound.username
                                ) &&
                                !field.value.find(
                                  (user) => user.username === userFound.username
                                )
                              ) {
                                field.onChange([
                                  ...field.value,
                                  {
                                    userId: userFound.id,
                                    username: userFound.username,
                                    imageURL: userFound.image,
                                  },
                                ]);
                                setUsersFoundMember([]);
                                setMemberInputValue("");
                              }
                            }}
                          >
                            <Avatar className="size-[17px]">
                              <AvatarImage src={userFound?.image || ""} />
                              <AvatarFallback>user image</AvatarFallback>
                            </Avatar>
                            <span>{userFound.username}</span>
                          </div>
                        );
                      })}
                    </div>
                  ) : null}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid grid-cols-2 gap-5">
            <Link className="link-button secondary-button" href="/groups">
              Cancel
            </Link>
            <Button
              type="submit"
              className="bg-primary1-500"
              disabled={disableSubmit}
            >
              {disableSubmit ? <Loader2 /> : "Create Group"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export { CreateGroupForm };
