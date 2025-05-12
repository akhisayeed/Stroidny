import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import nodemailer from "nodemailer";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(10),
  email: z.string().email().optional().or(z.literal("")),
  message: z.string().min(10),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the form data
      const validatedData = contactSchema.parse(req.body);
      
      // Create a transporter using SMTP
      const transporter = nodemailer.createTransport({
        host: "smtp.yandex.ru",
        port: 465,
        secure: true,
        auth: {
          user: process.env.EMAIL_USER || "stroidny@yandex.ru",
          pass: process.env.EMAIL_PASSWORD || "",
        },
      });
      
      // Compose email content
      const mailOptions = {
        from: process.env.EMAIL_USER || "stroidny@yandex.ru",
        to: "stroidny@yandex.ru",
        subject: `Новая заявка с сайта от ${validatedData.name}`,
        html: `
          <h2>Новая заявка с сайта</h2>
          <p><strong>Имя:</strong> ${validatedData.name}</p>
          <p><strong>Телефон:</strong> ${validatedData.phone}</p>
          ${validatedData.email ? `<p><strong>Email:</strong> ${validatedData.email}</p>` : ''}
          <p><strong>Сообщение:</strong> ${validatedData.message}</p>
          <p><em>Отправлено с сайта СТРОИТЕЛЬНАЯ ИНДУСТРИЯ</em></p>
        `,
      };
      
      // Only send email if we have email credentials
      if (process.env.EMAIL_PASSWORD) {
        // Send email
        await transporter.sendMail(mailOptions);
      } else {
        console.log("Email would be sent with these details:", mailOptions);
      }
      
      // Return success response
      res.status(200).json({ 
        success: true, 
        message: "Заявка успешно отправлена" 
      });
    } catch (error) {
      console.error("Error in contact form submission:", error);
      // Return error response
      res.status(400).json({ 
        success: false, 
        message: "Ошибка при отправке заявки" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
