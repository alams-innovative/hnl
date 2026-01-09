-- Admin users table with role-based access
CREATE TABLE IF NOT EXISTS admin_users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  name VARCHAR(255) NOT NULL,
  role VARCHAR(50) NOT NULL CHECK (role IN ('senior_management', 'hr_manager', 'marketing_sales')),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  last_login TIMESTAMP,
  is_active BOOLEAN DEFAULT true
);

-- Partnership applications (Certifications page)
CREATE TABLE IF NOT EXISTS partnership_applications (
  id SERIAL PRIMARY KEY,
  company_name VARCHAR(255) NOT NULL,
  company_registration VARCHAR(255),
  years_in_business INTEGER,
  industry VARCHAR(100),
  website VARCHAR(255),
  headquarters_country VARCHAR(100),
  headquarters_city VARCHAR(100),
  operating_cities TEXT,
  team_size VARCHAR(50),
  partnership_types TEXT, -- JSON array
  interest_areas TEXT, -- JSON array
  annual_revenue VARCHAR(50),
  credit_requirements VARCHAR(50),
  opportunity_status VARCHAR(50),
  active_tender BOOLEAN DEFAULT false,
  tender_details TEXT,
  contact_name VARCHAR(255) NOT NULL,
  contact_email VARCHAR(255) NOT NULL,
  contact_phone VARCHAR(50),
  leadership_name VARCHAR(255),
  leadership_phone VARCHAR(50),
  consent_background_check BOOLEAN DEFAULT false,
  consent_terms BOOLEAN DEFAULT false,
  submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  status VARCHAR(50) DEFAULT 'pending'
);

-- Career applications (Subject Matter Expert)
CREATE TABLE IF NOT EXISTS career_applications (
  id SERIAL PRIMARY KEY,
  application_type VARCHAR(50) DEFAULT 'expert',
  position_layer VARCHAR(50),
  position_title VARCHAR(255),
  full_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  linkedin_url VARCHAR(255),
  current_location VARCHAR(255),
  willing_to_relocate BOOLEAN,
  years_of_experience INTEGER,
  current_company VARCHAR(255),
  -- Renamed current_role to current_position (current_role is a PostgreSQL reserved keyword)
  current_position VARCHAR(255),
  education_level VARCHAR(100),
  education_field VARCHAR(255),
  certifications TEXT,
  technical_skills TEXT, -- JSON array
  leadership_experience TEXT,
  budget_management_experience VARCHAR(50),
  team_size_managed VARCHAR(50),
  availability VARCHAR(50),
  salary_expectation VARCHAR(50),
  motivation TEXT,
  portfolio_url VARCHAR(255),
  cv_file_url TEXT,
  cv_file_name VARCHAR(255),
  internal_employee BOOLEAN DEFAULT false,
  employee_id VARCHAR(50),
  submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  status VARCHAR(50) DEFAULT 'pending',
  hr_notes TEXT
);

-- Internship applications
CREATE TABLE IF NOT EXISTS internship_applications (
  id SERIAL PRIMARY KEY,
  track VARCHAR(100) NOT NULL,
  full_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  city VARCHAR(100),
  education_level VARCHAR(100),
  institution VARCHAR(255),
  field_of_study VARCHAR(255),
  graduation_year INTEGER,
  gpa DECIMAL(3,2),
  linkedin_url VARCHAR(255),
  portfolio_url VARCHAR(255),
  skills TEXT, -- JSON array
  previous_internships TEXT,
  why_hnl TEXT,
  availability_quarter VARCHAR(50),
  availability_duration VARCHAR(50),
  cv_file_url TEXT,
  cv_file_name VARCHAR(255),
  submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  status VARCHAR(50) DEFAULT 'pending',
  hr_notes TEXT
);

-- General inquiries
CREATE TABLE IF NOT EXISTS inquiries (
  id SERIAL PRIMARY KEY,
  interest_type VARCHAR(100) NOT NULL,
  full_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  company_name VARCHAR(255),
  company_industry VARCHAR(100),
  job_title VARCHAR(255),
  message TEXT NOT NULL,
  preferred_contact_method VARCHAR(50),
  submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  status VARCHAR(50) DEFAULT 'pending',
  assigned_to VARCHAR(255),
  notes TEXT
);

-- Distributor applications
CREATE TABLE IF NOT EXISTS distributor_applications (
  id SERIAL PRIMARY KEY,
  partnership_type VARCHAR(100) NOT NULL,
  company_name VARCHAR(255) NOT NULL,
  company_registration VARCHAR(255),
  years_in_business INTEGER,
  industry VARCHAR(100),
  website VARCHAR(255),
  headquarters_country VARCHAR(100),
  headquarters_city VARCHAR(100),
  operating_cities TEXT,
  team_composition TEXT, -- JSON
  annual_revenue VARCHAR(50),
  credit_line_required VARCHAR(50),
  existing_distributorships TEXT,
  opportunity_status VARCHAR(50),
  tender_urgent BOOLEAN DEFAULT false,
  tender_details TEXT,
  pipeline_details TEXT,
  contact_name VARCHAR(255) NOT NULL,
  contact_email VARCHAR(255) NOT NULL,
  contact_phone VARCHAR(50),
  leadership_name VARCHAR(255),
  leadership_title VARCHAR(255),
  leadership_phone VARCHAR(50),
  consent_background_check BOOLEAN DEFAULT false,
  consent_terms BOOLEAN DEFAULT false,
  submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  status VARCHAR(50) DEFAULT 'pending',
  sales_notes TEXT
);

-- Quote requests
CREATE TABLE IF NOT EXISTS quote_requests (
  id SERIAL PRIMARY KEY,
  solution_category VARCHAR(100) NOT NULL,
  specific_services TEXT, -- JSON array
  quantity_specs TEXT,
  project_location VARCHAR(255),
  location_details TEXT,
  timeline_urgency VARCHAR(50),
  expected_response_days INTEGER,
  budget_range VARCHAR(50),
  budget_flexibility VARCHAR(50),
  payment_terms VARCHAR(100),
  uploaded_documents TEXT, -- JSON array of file URLs
  opportunity_type VARCHAR(50),
  competitors_count INTEGER,
  decision_timeline VARCHAR(100),
  contact_name VARCHAR(255) NOT NULL,
  contact_email VARCHAR(255) NOT NULL,
  contact_phone VARCHAR(50),
  company_name VARCHAR(255),
  preferred_contact VARCHAR(50),
  submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  status VARCHAR(50) DEFAULT 'pending',
  assigned_to VARCHAR(255),
  sales_notes TEXT
);

-- Chatbot conversations
CREATE TABLE IF NOT EXISTS chatbot_conversations (
  id SERIAL PRIMARY KEY,
  session_id VARCHAR(255) UNIQUE NOT NULL,
  language VARCHAR(10) NOT NULL,
  user_name VARCHAR(255),
  user_email VARCHAR(255),
  messages TEXT NOT NULL, -- JSON array of messages
  feedback_rating INTEGER CHECK (feedback_rating >= 1 AND feedback_rating <= 5),
  feedback_email_requested BOOLEAN DEFAULT false,
  started_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  ended_at TIMESTAMP,
  total_messages INTEGER DEFAULT 0
);

-- Create indexes for better query performance
CREATE INDEX idx_partnership_status ON partnership_applications(status);
CREATE INDEX idx_partnership_submitted ON partnership_applications(submitted_at DESC);
CREATE INDEX idx_career_status ON career_applications(status);
CREATE INDEX idx_career_submitted ON career_applications(submitted_at DESC);
CREATE INDEX idx_internship_status ON internship_applications(status);
CREATE INDEX idx_internship_submitted ON internship_applications(submitted_at DESC);
CREATE INDEX idx_inquiry_status ON inquiries(status);
CREATE INDEX idx_inquiry_submitted ON inquiries(submitted_at DESC);
CREATE INDEX idx_distributor_status ON distributor_applications(status);
CREATE INDEX idx_distributor_submitted ON distributor_applications(submitted_at DESC);
CREATE INDEX idx_quote_status ON quote_requests(status);
CREATE INDEX idx_quote_submitted ON quote_requests(submitted_at DESC);
CREATE INDEX idx_chatbot_session ON chatbot_conversations(session_id);
CREATE INDEX idx_chatbot_started ON chatbot_conversations(started_at DESC);
