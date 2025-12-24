-- SQL schema for Patients table
CREATE TABLE Patients (
    patient_id INT PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    date_of_birth VARCHAR(100) NOT NULL
);