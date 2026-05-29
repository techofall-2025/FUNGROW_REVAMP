import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { companyName, contactName, email, phone, projectType, description } = body;

    // Strict validation
    const errors: Record<string, string> = {};

    if (!companyName || typeof companyName !== "string" || !companyName.trim()) {
      errors.companyName = "Company Name is required.";
    }

    if (!contactName || typeof contactName !== "string" || !contactName.trim()) {
      errors.contactName = "Contact Name is required.";
    }

    // Email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !email.trim()) {
      errors.email = "Email is required.";
    } else if (!emailRegex.test(email)) {
      errors.email = "Please provide a valid corporate email.";
    }

    // Phone format validation (Indian format standard +91)
    const phoneClean = (phone || "").toString().replace(/\s+/g, "");
    const phoneRegex = /^(\+91)?[6-9]\d{9}$/;
    if (!phone || typeof phone !== "string" || !phone.trim()) {
      errors.phone = "Phone number is required.";
    } else if (!phoneRegex.test(phoneClean)) {
      errors.phone = "Provide a valid 10-digit Indian phone (starting 6-9).";
    }

    if (!projectType || typeof projectType !== "string" || !projectType.trim()) {
      errors.projectType = "Please select a valid Project Type.";
    }

    if (!description || typeof description !== "string" || !description.trim()) {
      errors.description = "Project description brief is required.";
    } else if (description.length < 20) {
      errors.description = "Brief must be at least 20 characters.";
    } else if (description.length > 500) {
      errors.description = "Brief must not exceed 500 characters.";
    }

    // Return 400 Bad request on invalid parameters
    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    // SUCCESS LEAD RECORDING ACTION
    // In production: Integrate CRM pipelines, Slack hooks, or Resend Email dispatch services.
    // e.g., await resend.emails.send({...})
    console.log("💼 [CRM LEAD CAPTURE - SUCCESS STATE]:", {
      companyName,
      contactName,
      email,
      phone,
      projectType,
      description,
      ip: request.headers.get("x-forwarded-for") || "Local dev env"
    });

    return NextResponse.json(
      {
        success: true,
        message: "Your project brief has been received. Our team will contact you within 24 hours!"
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ [API CONTACT INTERNAL ERROR]:", error);
    return NextResponse.json(
      { success: false, message: "An internal server error occurred." },
      { status: 500 }
    );
  }
}

// Method restriction check handler (Safety guard)
export async function GET() {
  return new NextResponse("Method Not Allowed", {
    status: 405,
    headers: { Allow: "POST" }
  });
}
export async function PUT() {
  return new NextResponse("Method Not Allowed", {
    status: 405,
    headers: { Allow: "POST" }
  });
}
export async function DELETE() {
  return new NextResponse("Method Not Allowed", {
    status: 405,
    headers: { Allow: "POST" }
  });
}
