import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import db from "@/lib/prisma";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatTimeAgo(date: Date): string {
  const now = new Date();
  const millisecondsDifference = now.getTime() - date.getTime();
  const seconds = Math.floor(millisecondsDifference / 1000);

  let interval = Math.floor(seconds / 31536000);
  if (interval >= 1) {
    return interval === 1 ? "1 year ago" : `${interval} years ago`;
  }

  interval = Math.floor(seconds / 2592000);
  if (interval >= 1) {
    return interval === 1 ? "1 month ago" : `${interval} months ago`;
  }

  interval = Math.floor(seconds / 86400);
  if (interval >= 1) {
    return interval === 1 ? "1 day ago" : `${interval} days ago`;
  }

  interval = Math.floor(seconds / 3600);
  if (interval >= 1) {
    return interval === 1 ? "1 hour ago" : `${interval} hours ago`;
  }

  interval = Math.floor(seconds / 60);
  if (interval >= 1) {
    return interval === 1 ? "1 minute ago" : `${interval} minutes ago`;
  }

  return seconds === 1 ? "1 second ago" : `${seconds} seconds ago`;
}

export const formatDateTime = (dateString: Date) => {
  const dateTimeOptions: Intl.DateTimeFormatOptions = {
    weekday: "short", // abbreviated weekday name (e.g., 'Mon')
    month: "short", // abbreviated month name (e.g., 'Oct')
    year: "numeric",
    day: "numeric", // numeric day of the month (e.g., '25')
    hour: "numeric", // numeric hour (e.g., '8')
    minute: "numeric", // numeric minute (e.g., '30')
    hour12: false, // use 12-hour clock (true) or 24-hour clock (false)
  };

  const dateOptions: Intl.DateTimeFormatOptions = {
    weekday: "short", // abbreviated weekday name (e.g., 'Mon')
    month: "short", // abbreviated month name (e.g., 'Oct')
    year: "numeric", // numeric year (e.g., '2023')
    day: "numeric", // numeric day of the month (e.g., '25')
  };

  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: "numeric", // numeric hour (e.g., '8')
    minute: "numeric", // numeric minute (e.g., '30')
    hour12: false, // use 12-hour clock (true) or 24-hour clock (false)
  };

  const formattedDateTime: string = new Date(dateString).toLocaleString(
    "th-TH",
    dateTimeOptions,
  );

  const formattedDate: string = new Date(dateString).toLocaleString(
    "th-TH",
    dateOptions,
  );

  const formattedTime: string = new Date(dateString).toLocaleString(
    "th-TH",
    timeOptions,
  );

  return {
    dateTime: formattedDateTime,
    dateOnly: formattedDate,
    timeOnly: formattedTime,
  };
};

export const formatNumberAbbr = (num: string | number): string => {
  if (typeof num === "string") {
    num = parseFloat(num);
  }

  if (isNaN(num)) {
    return "Invalid number";
  }

  if (num >= 1e9) {
    return (num / 1e9).toFixed(1).replace(/\.0$/, "") + "B";
  }
  if (num >= 1e6) {
    return (num / 1e6).toFixed(1).replace(/\.0$/, "") + "M";
  }
  if (num >= 1e3) {
    return (num / 1e3).toFixed(1).replace(/\.0$/, "") + "k";
  }
  return num.toString();
};

export const handleError = (error: unknown) => {
  console.error(error);
  throw new Error(typeof error === "string" ? error : JSON.stringify(error));
};

export const generateSlug = async (title: string) => {
  const baseSlug = title
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w\u0E00-\u0E7F-]+/g, "") // Remove non-word characters except Thai characters and -
    .replace(/-+/g, "-") // Replace multiple - with single -
    .replace(/^-+|-+$/g, ""); // Remove leading/trailing -

  let slug = baseSlug;
  let attempt = 1;

  while (true) {
    const existingPost = await db.post.findUnique({
      where: { slug },
    });

    if (!existingPost) {
      return slug; // Return the slug if it's unique
    }

    // If slug already exists, append a random number
    slug = `${baseSlug}-${attempt}`;

    attempt++;

    // Add additional logic to limit attempts or modify the slug as needed
    if (attempt > 10) {
      // Example: Limit to 10 attempts
      throw new Error("Failed to generate a unique slug after 10 attempts.");
    }
  }
};
