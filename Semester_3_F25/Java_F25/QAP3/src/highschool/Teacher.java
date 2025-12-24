package highschool;

class Teacher extends Person {
    protected String mySubject; // subject taught by the teacher
    protected double mySalary; // teacher's salary

    public Teacher(String name, int age, String gender, String subject, double salary) {
        // use the super class’ constructor
        super(name, age, gender);
        // initialize what’s new to Teacher
        mySubject = subject;
        mySalary = salary;
    }

    // Getters and Setters
    public String getSubject() {
        return mySubject;
    }

    public double getSalary() {
        return mySalary;
    }

    public void setSubject(String subject) {
        mySubject = subject;
    }

    public void setSalary(double salary) {
        mySalary = salary;
    }

    // To String method
    @Override
    public String toString() {
        return super.toString() +
               ", Subject: " + mySubject +
               ", Salary: " + mySalary;
    }
}