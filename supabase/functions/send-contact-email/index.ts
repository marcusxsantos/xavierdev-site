const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const formData: ContactFormData = await req.json();

    if (!formData.name || !formData.email || !formData.message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    console.log("Contact form submission received:", {
      name: formData.name,
      email: formData.email,
      phone: formData.phone || "N/A",
      message: formData.message.substring(0, 50) + "...",
    });

    const emailContent = `
      Nova mensagem de contato do site Xavier Dev
      
      Nome: ${formData.name}
      Email: ${formData.email}
      Telefone: ${formData.phone || "Não informado"}
      
      Mensagem:
      ${formData.message}
      
      ---
      Enviado através do formulário de contato do site
    `;

    console.log("Email would be sent to: [email protected]");
    console.log("Email content:", emailContent);

    return new Response(
      JSON.stringify({
        success: true,
        message: "Contact form submitted successfully",
      }),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});