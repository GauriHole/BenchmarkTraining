INSERT INTO Patient (patient_id, user_id, blood_type, allergies) VALUES
(1, 1, 'B+', 'Dust, Pollen'),
(2, 2, 'O-', 'Peanuts'),
(3, 3, 'A+', 'Penicillin'),
(4, 4, 'AB-', 'Latex'),
(5, 5, 'B-', 'Seafood'),
(6, 6, 'O+', 'None'),
(7, 7, 'A-', 'Gluten'),
(8, 8, 'AB+', 'Dairy'),
(9, 9, 'B+', 'Shellfish'),
(10, 10, 'A+', 'Asthma');
INSERT INTO Patient (patient_id, user_id, blood_type, allergies) VALUES
(11, 11, 'B+', 'Dust'),
(12, 12, 'O-', 'None'),
(13, 13, 'AB+', 'Peanuts'),
(14, 14, 'A-', 'Pollen'),
(15, 15, 'B-', 'Shellfish'),
(16, 16, 'A+', 'None'),
(17, 17, 'O-', 'Penicillin'),
(18, 18, 'AB-', 'Peanuts'),
(19, 19, 'B+', 'Milk'),
(20, 20, 'A-', 'Soy');

INSERT INTO Doctor (doctor_id, user_id, specialty, hospital) VALUES
(1, 1, 'Cardiologist', 'Apollo Hospital'),
(2, null, 'Dermatologist', 'Fortis Hospital'),
(3, 2, 'Orthopedic', 'AIIMS Delhi'),
(4, 4, 'ENT Specialist', 'Kokilaben Hospital'),
(5, null, 'Neurologist', 'Max Hospital'),
(6, 3, 'Dentist', 'Sahyadri Hospital'),
(7, null, 'Oncologist', 'Tata Memorial Hospital'),
(8, 7, 'Pediatrician', 'Nanavati Hospital'),
(9, null, 'Urologist', 'Medanta Hospital'),
(10, null, 'Psychiatrist', 'Hinduja Hospital');
INSERT INTO Doctor (doctor_id, user_id, specialty, hospital) VALUES
(11, 11, 'Dermatology', 'Apollo Hospital, Mumbai'),
(12, null, 'Cardiology', 'Fortis Hospital, Delhi'),
(13, 13, 'Oncology', 'AIIMS, Bangalore'),
(14, null, 'Orthopedics', 'Manipal Hospital, Hyderabad'),
(15, null, 'Pediatrics', 'Kokilaben Hospital, Mumbai'),
(16, 16, 'Neurologist', 'Kokilaben Hospital'),
(17, 17, 'Dentist', 'Nanavati Hospital'),
(18, 18, 'Psychiatrist', 'Breach Candy Hospital'),
(19, 19, 'Ophthalmologist', 'Sahyadri Hospital'),
(20, 20, 'Gynecologist', 'Ruby Hall Clinic');

INSERT INTO Appointment (appointment_id, patient_id, doctor_id) VALUES
(1, 1, 3), (2, 2, 5), (3, 3, 2),
(4, 4, 7), (5, 5, 8), (6, 6, 1),
(7, 7, 4), (8, 8, 9), (9, 9, 6),
(10, 10, 10);
INSERT INTO Appointment (appointment_id, patient_id, doctor_id) VALUES
(11, 11, 11),
(12, 12, 12),
(13, 13, 13),
(14, 14, 14),
(15, 15, 15),
(16, 16, 16),
(17, 17, 17),
(18, 18, 18),
(19, 19, 19),
(20, 20, 20);

INSERT INTO Prescriptions (prescription_id, patient_id, doctor_id, dosage) VALUES
(1, 1, 3, 'Paracetamol 500mg, twice daily'),
(2, 2, 5, 'Cetirizine 10mg, once daily'),
(3, 3, 2, 'Amoxicillin 500mg, thrice daily'),
(4, 4, 7, 'Metformin 500mg, twice daily'),
(5, 5, 8, 'Ibuprofen 200mg, thrice daily'),
(6, 6, 1, 'Vitamin D 600 IU, once daily'),
(7, 7, 4, 'Omeprazole 20mg, once daily'),
(8, 8, 9, 'Atorvastatin 10mg, once daily'),
(9, 9, 6, 'Azithromycin 250mg, once daily'),
(10, 10, 10, 'Calcium 1000mg, once daily');
INSERT INTO Prescriptions (prescription_id, patient_id, doctor_id, dosage) VALUES
(11, 11, 11, 'Cetirizine 10mg once daily'),
(12, 12, 12, 'Aspirin 75mg once daily'),
(13, 13, 13, 'Omeprazole 20mg before meals'),
(14, 14, 14, 'Paracetamol 500mg when needed'),
(15, 15, 15, 'Cough Syrup 10ml three times a day'),
(16, 16, 16, 'Antacid before meals'),
(17, 17, 17, 'Painkillers as needed'),
(18, 18, 18, 'Anti-anxiety medication once daily'),
(19, 19, 19, 'Eye drops 3 times a day'),
(20, 20, 20, 'Iron supplements twice a day');
