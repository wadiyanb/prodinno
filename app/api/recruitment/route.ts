import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';
import { sendRecruitmentNotification } from '@/lib/email';

// Initialize Google Sheets client
const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  },
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });
const SPREADSHEET_ID = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;

export async function POST(request: NextRequest) {
  try {
    // Log that we're starting the request
    console.log('Starting recruitment form processing...');
    
    const formData = await request.json();
    console.log('Form data received:', { ...formData, mobileNumber: '[REDACTED]' });
    
    // Validate required fields
    const requiredFields = ['name', 'vitMailId', 'registrationNumber', 'mobileNumber', 'whyJoin', 'department', 'whyDepartment', 'secondPreference', 'otherClubs'];
    const missingFields = requiredFields.filter(field => !formData[field]);
    
    // Add conditional required fields based on department
    if (formData.department === 'Technical') {
      const technicalFields = ['arduinoExperience', 'aiExperience'];
      const missingTechnicalFields = technicalFields.filter(field => !formData[field]);
      missingFields.push(...missingTechnicalFields);
    }
    
    if (formData.department === 'Design') {
      const designFields = ['portfolioLink', 'designExperience'];
      const missingDesignFields = designFields.filter(field => !formData[field]);
      missingFields.push(...missingDesignFields);
    }
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400 }
      );
    }

    const submissionDate = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });

    // Prepare row data for Google Sheets
    const rowData = [
      formData.name,
      formData.vitMailId,
      formData.registrationNumber,
      formData.mobileNumber,
      formData.whyJoin,
      formData.department,
      formData.whyDepartment,
      formData.secondPreference || '',
      formData.otherClubs || '',
      formData.otherInfo || '',
      formData.arduinoExperience || '',
      formData.aiExperience || '',
      formData.portfolioLink || '',
      formData.designExperience || '',
      submissionDate
    ];

    // Log before Google Sheets operation
    console.log('Attempting to write to Google Sheets...');
    console.log('Spreadsheet ID:', SPREADSHEET_ID ? 'Present' : 'Missing');
    
    // Append data to Google Sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: 'Form Responses!A:O', // Adjust range based on your sheet name
      valueInputOption: 'RAW',
      requestBody: {
        values: [rowData],
      },
    });
    
    console.log('Successfully wrote to Google Sheets');

    // Log the application data
    console.log('=== NEW RECRUITMENT APPLICATION ===');
    console.log('Name:', formData.name);
    console.log('VIT Mail ID:', formData.vitMailId);
    console.log('Registration Number:', formData.registrationNumber);
    console.log('Mobile Number:', formData.mobileNumber);
    console.log('Department (1st):', formData.department);
    console.log('Department (2nd):', formData.secondPreference);
    console.log('Why Join ProdInno:', formData.whyJoin);
    console.log('Why This Department:', formData.whyDepartment);
    console.log('Other Clubs:', formData.otherClubs);
    console.log('Other Information:', formData.otherInfo);
    
    if (formData.department === 'Technical') {
      console.log('Arduino/Hardware Experience:', formData.arduinoExperience);
      console.log('AI/ML Experience:', formData.aiExperience);
    }
    
    if (formData.department === 'Design') {
      console.log('Portfolio Link:', formData.portfolioLink);
      console.log('Design Experience:', formData.designExperience);
    }
    
    console.log('Submission Date:', submissionDate);
    console.log('Application ID:', `APP-${Date.now()}`);
    console.log('=====================================');

    // Send email notification (optional)
    try {
      await sendRecruitmentNotification({
        name: formData.name,
        vitMailId: formData.vitMailId,
        registrationNumber: formData.registrationNumber,
        mobileNumber: formData.mobileNumber,
        department: formData.department,
        secondPreference: formData.secondPreference,
        submissionDate: submissionDate,
        whyJoin: formData.whyJoin,
        whyDepartment: formData.whyDepartment,
        otherClubs: formData.otherClubs,
        otherInfo: formData.otherInfo || '',
        arduinoExperience: formData.arduinoExperience || '',
        aiExperience: formData.aiExperience || '',
        portfolioLink: formData.portfolioLink || '',
        designExperience: formData.designExperience || ''
      });
    } catch (emailError) {
      console.log('Email notification failed (this is optional):', emailError);
    }

    return NextResponse.json(
      { 
        message: 'Application submitted successfully!',
        applicationId: `APP-${Date.now()}`,
        timestamp: new Date().toISOString(),
        submittedData: {
          name: formData.name,
          department: formData.department,
          submissionDate: submissionDate
        }
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing recruitment form:', error);
    
    // Log environment variables (excluding sensitive data)
    console.error('Environment check:', {
      hasClientEmail: !!process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      hasPrivateKey: !!process.env.GOOGLE_SHEETS_PRIVATE_KEY,
      hasSpreadsheetId: !!process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
    });

    if (error instanceof Error) {
      console.error('Error details:', {
        message: error.message,
        stack: error.stack,
        name: error.name
      });
    }

    // Enhanced error response
    return NextResponse.json(
      {
        error: 'Failed to process application. Please try again.',
        details: process.env.NODE_ENV === 'development' 
          ? {
              message: error instanceof Error ? error.message : 'Unknown error',
              type: error instanceof Error ? error.name : 'Unknown',
              missingEnv: !process.env.GOOGLE_SHEETS_CLIENT_EMAIL || 
                         !process.env.GOOGLE_SHEETS_PRIVATE_KEY || 
                         !process.env.GOOGLE_SHEETS_SPREADSHEET_ID
            }
          : undefined
      },
      { status: 500 }
    );
  }
}
