package highschool;

class Student extends Person {
    protected String myIdNum; // Student Id Number
    protected double myGPA; // grade point average

    public Student(String name, int age, String gender, String idNum, double gpa) {
        // use the super class’ constructor
        super(name, age, gender);
        // initialize what’s new to Student
        myIdNum = idNum;
        myGPA = gpa;
    }

    // Getters and Setters
    public String getIdNum() {
        return myIdNum;
    }

    public double getGPA() {
        return myGPA;
    }

    public void setIdNum(String idNum) {
        myIdNum = idNum;
    }

    public void setGPA(double gpa) {
        myGPA = gpa;
    }

    // To String method
    @Override
    public String toString() {
        return super.toString() +
               ", ID: " + myIdNum +
               ", GPA: " + myGPA;
    }
}
