package com.example.studentapi.service;

import com.example.studentapi.model.Student;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class StudentService {

    private final List<Student> students = new ArrayList<>();

    public StudentService() {
        students.add(new Student(1, "Rahul", "Information Technology"));
        students.add(new Student(2, "Priya", "Computer Engineering"));
        students.add(new Student(3, "John", "Information Technology"));
    }

    public List<Student> getAllStudents() {
        return students;
    }

    public Student addStudent(Student student) {
        students.add(student);
        return student;
    }
}