package shapes;

public class EquilateralTriangle extends Shape implements Scalable {
    private double side;

    public EquilateralTriangle(double side) {
        super("Equilateral Triangle");
        this.side = side;
    }

    @Override
    public double getArea() {
        double s = (3 * side) / 2;
        return Math.sqrt(s * (s - side) * (s - side) * (s - side));
    }

    @Override
    public double getPerimeter() {
        return 3 * side;
    }

    @Override
    public void scale(double factor) {
        side *= factor;
    }
}