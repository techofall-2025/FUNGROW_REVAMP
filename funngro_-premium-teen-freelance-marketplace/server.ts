import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Body parsing middleware
  app.use(express.json());

  // API router / routing logic for contact form submission
  app.post("/api/contact", (req, res) => {
    const { companyName, contactName, email, phone, projectType, description } = req.body;
    
    // Server-side robust validation (Do not trust client-only inputs)
    if (!companyName || !contactName || !email || !phone || !projectType || !description) {
      return res.status(400).json({ 
        success: false, 
        errors: { global: "All fields are required. Please fill in the whole form." } 
      });
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        success: false, 
        errors: { email: "Please provide a valid work email address." } 
      });
    }
    
    // Extract phone clean of whitespace
    const cleanPhone = phone.replace(/\s+/g, '');
    const phoneRegex = /^(\+91)?[6-9]\d{9}$/;
    if (!phoneRegex.test(cleanPhone)) {
      return res.status(400).json({ 
        success: false, 
        errors: { phone: "Please enter a valid 10-digit Indian phone number starting with 6-9." } 
      });
    }
    
    if (description.length < 20) {
      return res.status(400).json({ 
        success: false, 
        errors: { description: "Project details must be at least 20 characters long." } 
      });
    }
    if (description.length > 500) {
      return res.status(400).json({ 
        success: false, 
        errors: { description: "Project description exceeds the maximum length of 500 characters." } 
      });
    }
    
    // Log successfully received lead to container stdout
    console.log("-----------------------------------------");
    console.log("🔥 [NEW INBOUND LEAD RECEIVED - FUNNGRO] 🔥");
    console.log(`Company: ${companyName}`);
    console.log(`Contact: ${contactName}`);
    console.log(`Email:   ${email}`);
    console.log(`Phone:   ${phone}`);
    console.log(`Type:    ${projectType}`);
    console.log(`Details: ${description}`);
    console.log(`Time:    ${new Date().toISOString()}`);
    console.log("-----------------------------------------");
    
    return res.status(200).json({ 
      success: true, 
      message: "Lead successfully recorded. Our team will contact you within 24 hours!" 
    });
  });

  // Serve static files and mount Vite
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server launched successfully and listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
