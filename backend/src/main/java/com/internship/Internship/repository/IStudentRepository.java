package com.internship.Internship.repository;

import com.internship.Internship.constants.Status;
import com.internship.Internship.model.StudentInternship;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IStudentRepository extends JpaRepository<StudentInternship, Integer> {
    StudentInternship findByStudentEmailAndInternshipId(String email, String id);

    List<StudentInternship> findByInternshipId(String internshipId);

    List<StudentInternship> findByStudentEmailAndStatusNotIn(String studentEmail, List<String> pendingForApproval);

    List<StudentInternship> findByStudentEmailAndStatusIn(String studentEmail, List<String> name);
}
