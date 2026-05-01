const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, apikey, Apikey",
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

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not set");
      return new Response(
        JSON.stringify({ error: "Email service not configured" }),
        {
          status: 500,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    const emailHtml = `
      <h2>Nova mensagem de contato do site Xavier Dev</h2>
      <p><strong>Nome:</strong> ${formData.name}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Telefone:</strong> ${formData.phone || "Não informado"}</p>
      <p><strong>Mensagem:</strong></p>
      <p>${formData.message.replace(/\n/g, "<br>")}</p>
      <hr>
      <p><small>Enviado através do formulário de contato do site xavierdev.com.br</small></p>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Xavier Dev <contato@xavierdev.com.br>",
        to: ["contato@xavierdev.com.br"],
        subject: `Nova mensagem: ${formData.name}`,
        html: emailHtml,
        reply_to: formData.email,
      }),
    });

    const resData = await res.json();

    if (!res.ok) {
      console.error("Resend API error:", resData);
      return new Response(
        JSON.stringify({ 
          error: "Resend API error", 
          details: resData 
        }),
        {
          status: res.status,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

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
      JSON.stringify({ 
        error: "Internal server error", 
        message: error.message 
      }),
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
