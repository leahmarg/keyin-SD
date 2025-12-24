package shapes;

import java.util.ArrayList;
import java.util.List;

public class Demo {

    public static void main(String[] args) {

        List<Shape> shapes = new ArrayList<>();

        // Creating shapes
        System.out.println("----- Creating Shapes -----");
        System.out.println("Creating Circle with radius 5");
        shapes.add(new Circle(5));
        System.out.println("Creating Triangle with sides 3, 4, 5");
        shapes.add(new Triangle(3, 4, 5));
        System.out.println("Creating Ellipse with major axis 3 and minor axis 2");
        shapes.add(new Ellipse(3, 2));
        System.out.println("Creating EquilateralTriangle with side 4");
        shapes.add(new EquilateralTriangle(4));


        // Shape printing loop
        System.out.println("\n----- Shapes Output (Before Scaling) -----");
        for (Shape s : shapes) {
            System.out.printf("Shape: %s\n", s.name);
            System.out.printf("Area: %.2f\n", s.getArea());
            System.out.printf("Perimeter: %.2f\n\n", s.getPerimeter());
        }

        // Scaling demo
        System.out.println("\nScaling all shapes by a factor of 2...\n");
        for (Shape s : shapes) {
            if (s instanceof Scalable) {
                ((Scalable) s).scale(2);
            }
        }
        // Post-scaling output
        System.out.println("\n----- Shapes Output (After Scaling) -----");
        for (Shape s : shapes) {
            System.out.printf("Shape: %s\n", s.name);
            System.out.printf("Area: %.2f\n", s.getArea());
            System.out.printf("Perimeter: %.2f\n\n", s.getPerimeter());
        }
    }
}