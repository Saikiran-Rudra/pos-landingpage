import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Create transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD
    }
});

// Verify transporter connection
transporter.verify((error, success) => {
    if (error) {
        console.error('SMTP connection error:', error);
    } else {
        console.log('SMTP server ready to send emails');
    }
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, phone, businessType, message } = req.body;

        // Validate required fields
        if (!name || !email || !phone || !businessType) {
            return res.status(400).json({
                success: false,
                message: 'Missing required fields'
            });
        }

        // 1. Send confirmation email to user
        const userMailOptions = {
            from: process.env.EMAIL_FROM,
            to: email,
            subject: 'Thank you for contacting SyncServe POS!',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <div style="background: linear-gradient(135deg, #f97316, #ea580c); padding: 30px; text-align: center;">
                        <h1 style="color: white; margin: 0;">SyncServe POS</h1>
                    </div>
                    <div style="padding: 30px; background: #f9fafb;">
                        <h2 style="color: #1f2937;">Hello ${name}!</h2>
                        <p style="color: #4b5563; font-size: 16px; line-height: 1.6;">
                            Thank you for your interest in SyncServe POS. We have received your demo request and our team will get back to you within 24 hours.
                        </p>
                        <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
                            <h3 style="color: #1f2937; margin-top: 0;">Your Submission Details:</h3>
                            <p style="color: #4b5563; margin: 5px 0;"><strong>Name:</strong> ${name}</p>
                            <p style="color: #4b5563; margin: 5px 0;"><strong>Email:</strong> ${email}</p>
                            <p style="color: #4b5563; margin: 5px 0;"><strong>Phone:</strong> ${phone}</p>
                            <p style="color: #4b5563; margin: 5px 0;"><strong>Business Type:</strong> ${businessType}</p>
                            ${message ? `<p style="color: #4b5563; margin: 5px 0;"><strong>Message:</strong> ${message}</p>` : ''}
                        </div>
                        <p style="color: #4b5563; font-size: 14px;">
                            If you have any immediate questions, feel free to reply to this email.
                        </p>
                    </div>
                    <div style="background: #1f2937; padding: 20px; text-align: center;">
                        <p style="color: #9ca3af; font-size: 12px; margin: 0;">
                            © 2024 SyncServe POS by TechSonance InfoTech LLP
                        </p>
                    </div>
                </div>
            `
        };

        // 2. Send form data to admin
        const adminMailOptions = {
            from: process.env.EMAIL_FROM,
            to: process.env.ADMIN_EMAIL,
            subject: `New Demo Request from ${name}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <div style="background: #1f2937; padding: 20px;">
                        <h2 style="color: white; margin: 0;">New Demo Request</h2>
                    </div>
                    <div style="padding: 20px; background: #f9fafb;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="border-bottom: 1px solid #e5e7eb;">
                                <td style="padding: 12px; font-weight: bold; color: #374151;">Name</td>
                                <td style="padding: 12px; color: #4b5563;">${name}</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #e5e7eb;">
                                <td style="padding: 12px; font-weight: bold; color: #374151;">Email</td>
                                <td style="padding: 12px; color: #4b5563;">${email}</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #e5e7eb;">
                                <td style="padding: 12px; font-weight: bold; color: #374151;">Phone</td>
                                <td style="padding: 12px; color: #4b5563;">${phone}</td>
                            </tr>
                            <tr style="border-bottom: 1px solid #e5e7eb;">
                                <td style="padding: 12px; font-weight: bold; color: #374151;">Business Type</td>
                                <td style="padding: 12px; color: #4b5563;">${businessType}</td>
                            </tr>
                            <tr>
                                <td style="padding: 12px; font-weight: bold; color: #374151;">Message</td>
                                <td style="padding: 12px; color: #4b5563;">${message || 'No message provided'}</td>
                            </tr>
                        </table>
                        <p style="color: #6b7280; font-size: 12px; margin-top: 20px;">
                            Submitted on: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
                        </p>
                    </div>
                </div>
            `
        };

        // Send both emails
        await Promise.all([
            transporter.sendMail(userMailOptions),
            transporter.sendMail(adminMailOptions)
        ]);

        res.json({ success: true, message: 'Emails sent successfully' });

    } catch (error) {
        console.error('Email error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to send email. Please try again.'
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
