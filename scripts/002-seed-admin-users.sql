-- Seed admin users with bcrypt hashed passwords
-- Default password for all: "HNL@2026!" (change after first login)
-- Password hash generated with bcrypt rounds=10

-- Senior Management Users
INSERT INTO admin_users (email, password_hash, name, role) VALUES
('talha@hnl.com.pk', '$2b$10$vI8aWBnW3fID.ZQ4/zo1G.q1lRsVPh3.X3JZ0XbXp5dLvZYv4rLIO', 'Talha', 'senior_management'),
('admin@hnl.com.pk', '$2b$10$vI8aWBnW3fID.ZQ4/zo1G.q1lRsVPh3.X3JZ0XbXp5dLvZYv4rLIO', 'Senior Admin', 'senior_management');

-- HR Manager
INSERT INTO admin_users (email, password_hash, name, role) VALUES
('hr@hnl.com.pk', '$2b$10$vI8aWBnW3fID.ZQ4/zo1G.q1lRsVPh3.X3JZ0XbXp5dLvZYv4rLIO', 'HR Manager', 'hr_manager');

-- Marketing & Sales
INSERT INTO admin_users (email, password_hash, name, role) VALUES
('sales@hnl.com.pk', '$2b$10$vI8aWBnW3fID.ZQ4/zo1G.q1lRsVPh3.X3JZ0XbXp5dLvZYv4rLIO', 'Sales Team', 'marketing_sales');
