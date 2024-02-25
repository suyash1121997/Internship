package com.internship.Internship.dto;

import com.internship.Internship.constants.LoginMode;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class SignupDto {
    @NotNull
    @NotBlank
    private String email;
    @NotNull
    @NotBlank
    private String password;
    @NotNull
    @NotBlank
    private String firstName;
    @NotNull
    @NotBlank
    private String middleName;
    @NotNull
    @NotBlank
    private String familyName;
    private LoginMode loginMode;
}
