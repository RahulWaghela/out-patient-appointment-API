<--------------------create doctor start-------------------->

Step 1: Open Postman
Step 2: Set Up the Request 
 - Select Request Type: post
 - Enter Request URL:
 - URL would be http://localhost:6545/api/doctors
 
Step 3: Set Request Body
 - Select Body Tab: >> Click on the Body
 - Select Request Type: >> Choose raw
 - Select Data Format: >> JSON
 - Enter Request Body: >> Enter the doctor details in JSON format
 - for example
 {
    "name": "Dr. Jane Doe",
    "specialty": "Pediatrics",
    "max_patients": 6,
    "availability": ["10:00 - 11:00", "11:00 - 12:00"]
}
Step 4: Send Request


<----------------------Book Appointment Start----------------->

Step 1:
 - same as above just change URL to http://localhost:6545/api/appointments/book
 - json data
 {
    "doctor_id": "replace_with_doctor_id", // replace with doctor created doctor id
    "patient_name": "John Doe",
    "time_slot": "10:00 - 11:00",
    "date": "2024-05-01"
}


<--------------------List All The Doctor -------------------->

- use this URL http://localhost:6545/api/doctors


<-----------------get the specific doctor detail--------------->

 - use this URL  http://localhost:6545/api/doctors/:id


