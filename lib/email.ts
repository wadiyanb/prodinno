import nodemailer from 'nodemailer';

interface RecruitmentData {
  name: string;
  vitMailId: string;
  registrationNumber: string;
  mobileNumber: string;
  whyJoin: string;
  department: string;
  whyDepartment: string;
  secondPreference: string;
  otherClubs: string;
  otherInfo: string;
  arduinoExperience: string;
  aiExperience: string;
  portfolioLink: string;
  designExperience: string;
  submissionDate: string;
}

export async function sendRecruitmentNotification(data: RecruitmentData) {
  try {
    // Create transporter using environment variables
    // For production, you'll need to set these environment variables in Netlify
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or use your preferred email service
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your app password
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL || 'admin@prodinno.com', // Admin email to receive notifications
      subject: `New Recruitment Application - ${data.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #FFD700; background: #000; padding: 20px; text-align: center; margin: 0;">
            New Recruitment Application
          </h2>
          
          <div style="background: #f5f5f5; padding: 20px;">
            <h3 style="color: #333; margin-top: 0;">Application Details:</h3>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr style="background: #fff;">
                <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Name:</td>
                <td style="padding: 10px; border: 1px solid #ddd;">${data.name}</td>
              </tr>
              <tr style="background: #f9f9f9;">
                <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">VIT Mail ID:</td>
                <td style="padding: 10px; border: 1px solid #ddd;">${data.vitMailId}</td>
              </tr>
              <tr style="background: #fff;">
                <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Registration Number:</td>
                <td style="padding: 10px; border: 1px solid #ddd;">${data.registrationNumber}</td>
              </tr>
              <tr style="background: #f9f9f9;">
                <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Mobile Number:</td>
                <td style="padding: 10px; border: 1px solid #ddd;">${data.mobileNumber}</td>
              </tr>
              <tr style="background: #fff;">
                <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Department (1st):</td>
                <td style="padding: 10px; border: 1px solid #ddd;">${data.department}</td>
              </tr>
              <tr style="background: #f9f9f9;">
                <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Department (2nd):</td>
                <td style="padding: 10px; border: 1px solid #ddd;">${data.secondPreference}</td>
              </tr>
              <tr style="background: #fff;">
                <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Other Clubs:</td>
                <td style="padding: 10px; border: 1px solid #ddd;">${data.otherClubs}</td>
              </tr>
              <tr style="background: #f9f9f9;">
                <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Submission Date:</td>
                <td style="padding: 10px; border: 1px solid #ddd;">${data.submissionDate}</td>
              </tr>
            </table>
            
            <h3 style="color: #333; margin-top: 20px;">Why Join ProdInno:</h3>
            <p style="background: #fff; padding: 15px; border-left: 4px solid #FFD700; margin: 0;">
              ${data.whyJoin}
            </p>
            
            <h3 style="color: #333; margin-top: 20px;">Why This Department:</h3>
            <p style="background: #fff; padding: 15px; border-left: 4px solid #FFD700; margin: 0;">
              ${data.whyDepartment}
            </p>
            
            ${data.otherInfo ? `
            <h3 style="color: #333; margin-top: 20px;">Other Information:</h3>
            <p style="background: #fff; padding: 15px; border-left: 4px solid #FFD700; margin: 0;">
              ${data.otherInfo}
            </p>
            ` : ''}
            
            ${data.department === 'Technical' ? `
            <h3 style="color: #333; margin-top: 20px;">Technical Experience:</h3>
            <div style="background: #fff; padding: 15px; border-left: 4px solid #FFD700; margin: 0;">
              <p><strong>Arduino/Hardware Experience:</strong></p>
              <p>${data.arduinoExperience}</p>
              <p><strong>AI/ML Experience:</strong></p>
              <p>${data.aiExperience}</p>
            </div>
            ` : ''}
            
            ${data.department === 'Design' ? `
            <h3 style="color: #333; margin-top: 20px;">Design Experience:</h3>
            <div style="background: #fff; padding: 15px; border-left: 4px solid #FFD700; margin: 0;">
              <p><strong>Portfolio Link:</strong> <a href="${data.portfolioLink}" style="color: #FFD700;">${data.portfolioLink}</a></p>
              <p><strong>Design Experience:</strong></p>
              <p>${data.designExperience}</p>
            </div>
            ` : ''}
          </div>
          
          <div style="background: #000; color: #FFD700; padding: 15px; text-align: center; font-size: 12px;">
            This application was submitted through the ProdInno recruitment form.
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log('Email notification sent successfully');
    return true;
  } catch (error) {
    console.error('Failed to send email notification:', error);
    return false;
  }
}
