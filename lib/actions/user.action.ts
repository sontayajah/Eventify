import db from "@/lib/prisma";

export async function getUserProfile(id: string) {
  try {
    const userProfile = await db.profile.findUnique({
      where: { userId: id },
      include: {
        user: true,
        verifyType: true,
      },
    });

    return userProfile;
  } catch (error) {
    console.error(error);
  }
}
