package com.internship.Internship.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
@Entity
@Data
@Builder
@Table(name = "paymentDetails")
@NoArgsConstructor
@AllArgsConstructor
public class PaymentMethod {
    @Id
    private String cardNumber;
    private String date;
    private int cvv;
    private String name;
}
