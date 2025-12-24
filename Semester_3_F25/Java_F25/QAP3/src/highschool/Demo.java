package highschool;

public class Demo {
    public static void main(String[] args) {

        // Person demo
        Person bob = new Person("Coach Bob", 27, "M"); 
        System.out.println(bob); 

        // Student demo
        Student lynne = new Student("Lynne Brooke", 16, "F", "HS95129", 3.5); 
        System.out.println(lynne); 

        // Teacher demo
        Teacher mrJava = new Teacher("Duke Java", 34, "M", "Computer Science", 50000);
        System.out.println(mrJava); 

        // CollegeStudent demo
        CollegeStudent ima = new CollegeStudent("Ima Frosh", 18, "F", "UCB123", 4.0, "English", 1); 
        System.out.println(ima);
    }
    
}
