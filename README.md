# Internship Application

## Overview

The Internship Application project is a web-based system developed using Angular and Spring Boot. It serves as a platform to connect students seeking internships with mentors offering internship opportunities. The system streamlines the internship application process by allowing mentors to publish new internships, which students can browse and apply for. Upon application, mentors have the ability to manage and respond to student requests.

## Features

- **Role-Based Access:** The system supports two roles: Student and Mentor. Each role has distinct permissions and functionalities tailored to their needs.

- **Internship Publication:** Mentors can publish new internship opportunities, providing comprehensive details such as position title, requirements, and duration.

- **Application Management:** Students can easily browse available internships and apply for positions they're interested in, simplifying the application process.

- **Request Handling:** Mentors receive requests from students who have applied for their internships. They can then review and respond to these requests, choosing to accept or reject them based on their preferences.

- **Notifications:** To keep all parties informed, both mentors and students receive notifications about the status of their internship applications and requests, ensuring transparent communication throughout the process.

## Technologies Used

- **Frontend:** Angular
- **Backend:** Spring Boot
- **Database:** Postgres

## Installation

1. Clone the repository.
2. Navigate to the `frontend` directory and run `npm install` to install frontend dependencies.
3. Navigate to the `backend` directory and run `./gradlew build` to build the backend.
4. Set up a PostgreSQL database and configure the connection details in the backend application properties.
5. Run the backend application using `./gradlew bootRun`.
6. Run the frontend application using `ng serve`.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature/your-feature`).
6. Create a new Pull Request.
