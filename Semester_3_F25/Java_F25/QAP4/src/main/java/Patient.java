package main.java;
public class Patient {

    private int patientId;
    private String patientFirstname;
    private String patientLastname;
    private String patientDob;

    public Patient(int patientId, String patientFirstname, String patientLastname, String patientDob) {
        this.patientId = patientId;
        this.patientFirstname = patientFirstname;
        this.patientLastname = patientLastname;
        this.patientDob = patientDob;
    }

    // Getters
    public int getPatientId() {
        return patientId;
    }

    public String getPatientFirstname() {
        return patientFirstname;
    }

    public String getPatientLastname() {
        return patientLastname;
    }

    public String getPatientDob() {
        return patientDob;
    }

    // Setters
    public void setPatientId(int patientId) {
        this.patientId = patientId;
    }

    public void setPatientFirstname(String patientFirstname) {
        this.patientFirstname = patientFirstname;
    }

    public void setPatientLastname(String patientLastname) {
        this.patientLastname = patientLastname;
    }

    public void setPatientDob(String patientDob) {
        this.patientDob = patientDob;
    }

}