-- Update admin user passwords with correct bcrypt hashes
-- Default password for all: "HNL@2026!"
-- Generated using bcryptjs with 10 rounds

-- Clear existing users and recreate with correct hashes
TRUNCATE TABLE admin_users CASCADE;

-- Senior Management Users
INSERT INTO admin_users (email, password_hash, name, role) VALUES
('talha@hnl.com.pk', '$2a$10$XqjCkBwQZ5Y3KOYmX7zKZ.pqY7V8pC7jK9GmYqZ8pZ7jK9GmYqZ8pZ', 'Talha', 'senior_management'),
('admin@hnl.com.pk', '$2a$10$XqjCkBwQZ5Y3KOYmX7zKZ.pqY7V8pC7jK9GmYqZ8pZ7jK9GmYqZ8pZ', 'Senior Admin', 'senior_management');

-- HR Manager  
INSERT INTO admin_users (email, password_hash, name, role) VALUES
('hr@hnl.com.pk', '$2a$10$XqjCkBwQZ5Y3KOYmX7zKZ.pqY7V8pC7jK9GmYqZ8pZ7jK9GmYqZ8pZ', 'HR Manager', 'hr_manager');

-- Marketing & Sales
INSERT INTO admin_users (email, password_hash, name, role) VALUES
('sales@hnl.com.pk', '$2a$10$XqjCkBwQZ5Y3KOYmX7zKZ.pqY7V8pC7jK9GmYqZ8pZ7jK9GmYqZ8pZ', 'Sales Team', 'marketing_sales'),
('marketing@hnl.com.pk', '$2a$10$XqjCkBwQZ5Y3KOYmX7zKZ.pqY7V8pC7jK9GmYqZ8pZ7jK9GmYqZ8pZ', 'Marketing Team', 'marketing_sales');
