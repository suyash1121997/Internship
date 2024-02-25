package com.internship.Internship.service.impl;
import com.internship.Internship.constants.LoginMode;
import com.internship.Internship.constants.Status;
import com.internship.Internship.dto.Internship;
import com.internship.Internship.dto.ResponseModel;
import com.internship.Internship.exception.InternshipException;
import com.internship.Internship.model.InternshipModel;
import com.internship.Internship.model.StudentInternship;
import com.internship.Internship.repository.IAddInternshipRepository;
import com.internship.Internship.repository.ISignUpRepository;
import com.internship.Internship.repository.IStudentRepository;
import com.internship.Internship.service.IAddInternshipService;
import com.internship.Internship.util.LoginValidator;
import jakarta.transaction.Transactional;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Random;

@Service
@Transactional
public class AddInternshipServiceImpl implements IAddInternshipService {
    @Autowired
    IAddInternshipRepository addInternshipRepository;
    @Autowired
    ISignUpRepository signUpRepository;
    @Autowired
    IStudentRepository studentRepository;

    Random random = new Random();
    @Override
    public ResponseModel<Internship> addInternship(Internship internship) throws InternshipException {
        LoginValidator.validateUserWithProfile(signUpRepository, internship.getMentorEmail(), LoginMode.MENTOR);
        InternshipModel internshipModel = InternshipModel.builder().build();
        BeanUtils.copyProperties(internship, internshipModel);
        internshipModel.setInternshipId(internship.getId());
        addInternshipRepository.save(internshipModel);
        return ResponseModel.<Internship>builder().message("Internship added successfully")
                .isUserExist(true).statusCode(200).details(internship).build();
    }

    @Override
    public List<Internship> getAllInternship(String studentEmail) {
        List<InternshipModel> internshipModelList = addInternshipRepository.findAllBySeatsNot(0);
        var byEmailAndStatusIn = studentRepository.findByStudentEmailAndStatusIn(studentEmail, List.of(Status.PENDING_FOR_APPROVAL.name(), Status.ACCEPTED.name()));
        List<String> list = byEmailAndStatusIn.stream().map(StudentInternship::getInternshipId).toList();
        internshipModelList = internshipModelList.stream().filter(e -> !list.contains(e.getInternshipId())).toList();
        return internshipModelList.stream()
                .map(internshipModel -> Internship.builder()
                        .seats(internshipModel.getSeats()).mentorEmail(internshipModel.getMentorEmail())
                        .price(internshipModel.getPrice()).title(internshipModel.getTitle())
                        .id(internshipModel.getInternshipId()).duration(internshipModel.getDuration())
                        .requirements(internshipModel.getRequirements())
                        .description(internshipModel.getDescription()).location(internshipModel.getLocation())
                        .build()
                )
                .toList();
    }
}
