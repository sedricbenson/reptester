import { pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const inquiries = pgTable("inquiries", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  interest: text("interest").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertInquirySchema = createInsertSchema(inquiries).omit({
  id: true,
  createdAt: true,
});

export type InsertInquiry = z.infer<typeof insertInquirySchema>;
export type Inquiry = typeof inquiries.$inferSelect;

export const contactFormSchema = insertInquirySchema.extend({
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  interest: z.enum(["dedicated-desk", "private-office", "tour", "other"], {
    required_error: "Please select your interest",
  }),
  message: z.string().min(5, "Message must be at least 5 characters"),
});
