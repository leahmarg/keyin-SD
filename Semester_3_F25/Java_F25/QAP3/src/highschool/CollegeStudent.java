package highschool;

class CollegeStudent extends Student {
    protected String myMajor; // major field of study
    protected int myYear; // year in college (1-4)

    public CollegeStudent(String name, int age, String gender, String idNum, double gpa, String major, int year) {
        // use the super class’ constructor
        super(name, age, gender, idNum, gpa);
        // initialize what’s new to CollegeStudent
        myMajor = major;
        myYear = year;
    }

    // Getters and Setters
    public String getMajor() {
        return myMajor;
    }

    public int getYear() {
        return myYear;
    }

    public void setMajor(String major) {
        myMajor = major;
    }

    public void setYear(int year) {
        myYear = year;
    }

    // To String method
    @Override
    public String toString() {
        return super.toString() +
                ", Major: " + myMajor +
                ", Year: " + myYear;
    }
}
