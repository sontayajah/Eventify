/*
  Warnings:

  - Made the column `verify_type_id` on table `user_accounts` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "user_accounts" DROP CONSTRAINT "user_accounts_verify_type_id_fkey";

-- AlterTable
ALTER TABLE "user_accounts" ALTER COLUMN "verify_type_id" SET NOT NULL,
ALTER COLUMN "verify_type_id" SET DEFAULT 0;

-- AddForeignKey
ALTER TABLE "user_accounts" ADD CONSTRAINT "user_accounts_verify_type_id_fkey" FOREIGN KEY ("verify_type_id") REFERENCES "verify_types"("verifyId") ON DELETE RESTRICT ON UPDATE CASCADE;
