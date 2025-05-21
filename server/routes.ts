import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Create a new inquiry
  app.post("/api/inquiries", async (req: Request, res: Response) => {
    try {
      const validatedData = contactFormSchema.parse(req.body);
      const inquiry = await storage.createInquiry(validatedData);
      
      return res.status(201).json({
        success: true,
        data: inquiry
      });
    } catch (error) {
      if (error instanceof Error) {
        const validationError = fromZodError(error);
        
        return res.status(400).json({
          success: false,
          message: validationError.message
        });
      }
      
      return res.status(500).json({
        success: false,
        message: "An unexpected error occurred"
      });
    }
  });

  // Get all inquiries (admin only, in a real app would be protected)
  app.get("/api/inquiries", async (_req: Request, res: Response) => {
    try {
      const inquiries = await storage.getInquiries();
      return res.status(200).json({
        success: true,
        data: inquiries
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Failed to retrieve inquiries"
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
