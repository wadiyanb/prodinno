import { NextRequest, NextResponse } from 'next/server';
import ExcelJS from 'exceljs';
import { mkdir } from 'fs/promises';
import { join } from 'path';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();
    
    // Validate required fields
    const requiredFields = ['name', 'vitMailId', 'registrationNumber', 'mobileNumber', 'whyJoin', 'department', 'whyDepartment'];
    const missingFields = requiredFields.filter(field => !formData[field]);
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400 }
      );
    }

    // Create Excel workbook
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Recruitment Applications');

    // Define columns
    worksheet.columns = [
      { header: 'Name', key: 'name', width: 20 },
      { header: 'VIT Mail ID', key: 'vitMailId', width: 25 },
      { header: 'Registration Number', key: 'registrationNumber', width: 20 },
      { header: 'Mobile Number', key: 'mobileNumber', width: 15 },
      { header: 'Why Join ProdInno', key: 'whyJoin', width: 40 },
      { header: 'Department (1st Preference)', key: 'department', width: 25 },
      { header: 'Why This Department', key: 'whyDepartment', width: 40 },
      { header: 'Submission Date', key: 'submissionDate', width: 20 }
    ];

    // Style the header row
    worksheet.getRow(1).font = { bold: true, color: { argb: 'FFFFFFFF' } };
    worksheet.getRow(1).fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'FFD700' }
    };

    // Add the new application data
    const newRow = {
      name: formData.name,
      vitMailId: formData.vitMailId,
      registrationNumber: formData.registrationNumber,
      mobileNumber: formData.mobileNumber,
      whyJoin: formData.whyJoin,
      department: formData.department,
      whyDepartment: formData.whyDepartment,
      submissionDate: new Date().toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
      })
    };

    worksheet.addRow(newRow);

    // Create data directory if it doesn't exist
    const dataDir = join(process.cwd(), 'data');
    try {
      await mkdir(dataDir, { recursive: true });
    } catch {
      // Directory might already exist, ignore error
    }

    // Save the Excel file
    const fileName = `recruitment_applications_${new Date().toISOString().split('T')[0]}.xlsx`;
    const filePath = join(dataDir, fileName);
    
    await workbook.xlsx.writeFile(filePath);

    return NextResponse.json(
      { 
        message: 'Application submitted successfully!',
        fileName: fileName
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing recruitment form:', error);
    return NextResponse.json(
      { error: 'Failed to process application. Please try again.' },
      { status: 500 }
    );
  }
}
