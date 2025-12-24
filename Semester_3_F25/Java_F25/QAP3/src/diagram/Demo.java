package diagram;

public class Demo {

    public static void main(String[] args) {

    // Point class demo
    Point p1 = new Point(5, 10);
    System.out.println("Point: " + p1);

    // MovablePoint class demo
    MovablePoint mp1 = new MovablePoint(1, 2, 3, 4); 
    System.out.println("MovablePoint before move: " + mp1);
    mp1.move();
    System.out.println("MovablePoint after move: " + mp1);
    }
}
