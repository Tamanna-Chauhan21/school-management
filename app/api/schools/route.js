import { NextResponse } from 'next/server';
import { createConnection } from '@/lib/db';
import { writeFile } from 'fs/promises';
import path from 'path';

export async function GET() {
  try {
    const db = await createConnection();
    const sql = 'SELECT * FROM schools';
    const [rows] = await db.query(sql);
    return NextResponse.json(rows);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const data = await request.formData();
    const file = data.get('image'); // Getting the image file

    if (!file) {
      return NextResponse.json({ error: "No image uploaded" }, { status: 400 });
    }

    // 1. Save Image to the 'public/schoolImages' folder
    const byteData = await file.arrayBuffer();
    const buffer = Buffer.from(byteData);
    const fileName = `${Date.now()}-${file.name}`;
    const filePath = path.join(process.cwd(), 'public', 'schoolImages', fileName);
    
    await writeFile(filePath, buffer);
    
    // This is the path we store in the database (e.g., /schoolImages/123-pic.jpg)
    const imgUrl = `/schoolImages/${fileName}`;

    // 2. Insert Data into MySQL
    const db = await createConnection();
    const sql = 'INSERT INTO schools (name, address, city, state, contact, email_id, image) VALUES (?, ?, ?, ?, ?, ?, ?)';
    const values = [
      data.get('name'),
      data.get('address'),
      data.get('city'),
      data.get('state'),
      data.get('contact'),
      data.get('email_id'),
      imgUrl
    ];

    await db.query(sql, values);

    return NextResponse.json({ message: "School added successfully" });
  } catch (error) {
    console.error("Error saving school:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}