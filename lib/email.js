import nodemailer from "nodemailer";

export async function sendEmail({ to, subject, html }) {
    console.log("📧 sendEmail CALLED:", to);

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "ExpenseTrackerSATI@gmail.com",
            pass: process.env.GMAIL_APP_PASSWORD,
        },
    });

    try {
        const info = await transporter.sendMail({
            from: `"Finance App" <ExpenseTrackerSATI@gmail.com>`,
            to,
            subject,
            html,
        });

        console.log("✅ Email sent:", info.messageId);
        return { success: true };
    } catch (error) {
        console.error("❌ Failed:", error);
        return { success: false };
    }
}