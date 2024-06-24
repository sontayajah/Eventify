import { StaticImageData } from "next/image";

export interface CreateUserParams {
  clerkId: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  photo: string;
}

export interface carouselImageProps {
  src: StaticImageData;
  alt: string;
}

export interface User {
  id: string; // cuid
  email: string;
  username: string;
  password: string; // Text

  createdAt?: Date; // DateTime with default value
  updatedAt?: Date; // DateTime with updatedAt behavior

  profile?: Profile; // Optional relation to Profile
  posts: Post[]; // One-to-many relation to Post
}

export interface Profile {
  id: string; // cuid
  userId: string; // Unique
  displayName: string;
  isVerified: boolean; // Default false
  verifyTypeId: string; // Default "0"
  imageUrl?: string; // Optional with VarChar(255)

  createdAt?: Date; // DateTime with default value
  updatedAt?: Date; // DateTime with updatedAt behavior

  user: User; // Relation to User
  verifyType: VerifyType; // Relation to VerifyType
}

export interface VerifyType {
  id: string; // cuid
  verifyId: string; // Unique
  type: string;

  createdAt?: Date; // DateTime with default value
  updatedAt?: Date; // DateTime with updatedAt behavior

  profiles: Profile[]; // One-to-many relation to Profile
}

export interface Post {
  id: string; // cuid
  title: string; // VarChar(255)
  content: string; // Text
  authorId: string;
  imageUrl: string; // VarChar(255)
  imageAlt: string; // VarChar(255)
  likes: number; // Default 0
  shares: number; // Default 0
  slug: string; // Unique VarChar(255)
  isPublished: boolean; // Default false
  isDeleted: boolean;
  url: string; // Unique VarChar(255)
  publishedDate?: Date;

  deletedAt?: Date;
  createdAt?: Date; // DateTime with default value
  updatedAt?: Date; // DateTime with updatedAt behavior

  author: User; // Relation to User
  tags: Tag[]; // Many-to-many relation to Tag
  categories: Category[]; // Many-to-many relation to Category
}

export interface Tag {
  id: string; // cuid
  tagId: string; // Unique
  tagName: string;
  tagColor: string;
  tagUrl: string; // Default "/"

  posts: Post[]; // Many-to-many relation to Post
}

export interface Category {
  id: string; // cuid
  categoryId: string; // Unique
  categoryName: string;
  categoryColor: string;
  categoryUrl: string; // Default "/"

  posts: Post[]; // Many-to-many relation to Post
}
