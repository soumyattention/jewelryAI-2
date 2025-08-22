import { neon } from '@neondatabase/serverless';

// Database connection
const DATABASE_URL = import.meta.env.VITE_DATABASE_URL;
const sql = DATABASE_URL && DATABASE_URL !== 'your_neon_database_url_here' ? neon(DATABASE_URL) : null;

// Helper function to check if database is available
const isDatabaseAvailable = () => {
  return sql !== null;
};

// Types
export interface RunRecord {
  id: number;
  user_name: string;
  selected_images: number[];
  submission_time: string;
}

export interface CreateRunRecordData {
  user_name: string;
  selected_images: number[];
}

// Initialize database tables
export async function initializeDatabase() {
  if (!isDatabaseAvailable()) {
    console.warn('Database not available - please configure VITE_DATABASE_URL');
    return;
  }
  
  try {
    await sql!`
      CREATE TABLE IF NOT EXISTS run_records (
        id SERIAL PRIMARY KEY,
        user_name VARCHAR(255) NOT NULL,
        selected_images INTEGER[] NOT NULL,
        submitted_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
      )
    `;
    console.log('Database initialized successfully');
  } catch (error) {
    console.error('Error initializing database:', error);
    throw error;
  }
}

// Create a new run record
export async function createRunRecord(data: CreateRunRecordData): Promise<RunRecord> {
  if (!isDatabaseAvailable()) {
    throw new Error('Database not available - please configure VITE_DATABASE_URL');
  }
  
  try {
    const result = await sql!`
      INSERT INTO run_records (user_name, selected_images)
      VALUES (${data.user_name}, ${data.selected_images})
      RETURNING *
    `;
    
    return result[0] as RunRecord;
  } catch (error) {
    console.error('Error creating run record:', error);
    throw error;
  }
}

// Get all run records (for admin panel)
export async function getAllRunRecords(): Promise<RunRecord[]> {
  if (!isDatabaseAvailable()) {
    console.warn('Database not available - returning mock data');
    return [];
  }
  
  try {
    const result = await sql!`
      SELECT * FROM run_records
      ORDER BY submission_time DESC
    `;
    
    return result as RunRecord[];
  } catch (error) {
    console.error('Error fetching run records:', error);
    throw error;
  }
}

// Get a specific run record by ID
export async function getRunRecordById(id: number): Promise<RunRecord | null> {
  if (!isDatabaseAvailable()) {
    return null;
  }
  
  try {
    const result = await sql!`
      SELECT * FROM run_records
      WHERE id = ${id}
    `;
    
    return result[0] as RunRecord || null;
  } catch (error) {
    console.error('Error fetching run record:', error);
    throw error;
  }
}

// Delete a run record (optional admin function)
export async function deleteRunRecord(id: number): Promise<boolean> {
  if (!isDatabaseAvailable()) {
    return false;
  }
  
  try {
    const result = await sql!`
      DELETE FROM run_records
      WHERE id = ${id}
    `;
    
    return result.length > 0;
  } catch (error) {
    console.error('Error deleting run record:', error);
    throw error;
  }
}