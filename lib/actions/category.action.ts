"use server";

import db from "@/lib/prisma";
import { Category } from "@/types";

interface GetAllCategoriesProps {}
export async function getAllCategories() {
  const categories = await db.category.findMany({
    select: {
      id: true,
      categoryId: true,
      categoryName: true,
      categoryColor: true,
      categoryUrl: true,
    },
  });

  return categories as Category[];
}
