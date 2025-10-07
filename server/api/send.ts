import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default defineEventHandler(async (event) => {
  try {
    // ambil data dari form
    const body = await readBody<{
      name: string;
      email: string;
      phone: string;
      subject: string;
      message: string;
    }>(event);

    // kirim email
    const data = await resend.emails.send({
      from: "Website Contact <onboarding@resend.dev>",
      to: ["info.primajasa@primajasagroup.com"], // email tujuan tetap (admin)
      reply_to: body.email, // bisa ditambah supaya mudah reply ke pengirim
      subject: `Pesan Baru: ${body.subject}`,
      html: `
        <h2>Pesan Baru dari Website</h2>
        <p><strong>Nama:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Telepon:</strong> ${body.phone}</p>
        <p><strong>Subjek:</strong> ${body.subject}</p>
        <p><strong>Pesan:</strong></p>
        <p>${body.message}</p>
      `,
    });

    return { success: true, data };
  } catch (error: any) {
    return { success: false, error: error.message || error };
  }
});
