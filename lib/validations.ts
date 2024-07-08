import { z } from "zod";

export const signUpSchema = z
  .object({
    username: z
      .string()
      .min(4, { message: "Username must be between 4 and 20 characters" })
      .max(20),
    email: z.string({ required_error: "is required" }).email("Must be valid"),
    password: z
      .string()
      .min(8, { message: "Must be at least 8 characters long." })
      .max(10),
    confirmPassword: z
      .string()
      .min(8, { message: "Must be at least 8 characters long." })
      .max(10),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type TSignUpSchema = z.infer<typeof signUpSchema>;

export const createPostSchema = z.object({
  title: z
    .string()
    .min(4, { message: "Title must be between 4 and 20 characters" })
    .max(120),
  createType: z.enum(["STANDARD", "MEETUP", "PODCAST"]),
  group: z.string(),
  coverImage: z.string().optional(),
  audioFile: z.string().optional(),
  audioTitle: z.string().optional(),
  meetupLocation: z.string().optional(),
  meetupDate: z
    .date({
      required_error: "A date for the meetup is required.",
    })
    .optional(),
  tinyContent: z.string(),
  interestTechTags: z
    .array(z.string())
    .max(7, { message: "You can only add 7 tags" }),
});

export type TCreatePostSchema = z.infer<typeof createPostSchema>;

export const CreateGroupSchema = z.object({
  name: z.string().min(6, {
    message: "Group name must be at least 6 characters.",
  }),
  profileImage: z.string().optional(),
  coverImage: z.string().optional(),
  bio: z.string().min(15, {
    message: "Group bio must be at least 15 characters.",
  }),
  admins: z
    .array(
      z.object({
        userId: z.string(),
        username: z.string(),
        imageURL: z.string(),
      }),
    )
    .max(5, "You can only add 5 admins when creating a group"),
  members: z
    .array(
      z.object({
        userId: z.string(),
        username: z.string(),
        imageURL: z.string(),
      }),
    )
    .max(10, "You can only add 10 members when creating a group"),
});
export type CreateGroupSchema = z.infer<typeof CreateGroupSchema>;

export const EditProfileSchema = z.object({
  name: z.string().min(4, {
    message: "Name must be at least 4 characters.",
  }),
  profileImage: z.string().optional().or(z.literal("")),
  username: z.string(),
  bio: z.string().min(10, {
    message: "Bio must be at least 10 characters.",
  }),
  interestTech: z
    .array(z.string())
    .max(12, { message: "You can only add 12 tags" }),
  linkedinLink: z.string().url().optional().or(z.literal("")),
  linkedinHandle: z.string().optional(),
  instagramLink: z.string().url().optional().or(z.literal("")),
  instagramHandle: z.string().optional(),
  githubLink: z.string().url().optional().or(z.literal("")),
  githubHandle: z.string().optional(),
  xProfileLink: z.string().url().optional().or(z.literal("")),
  xProfileHandle: z.string().optional(),
});
