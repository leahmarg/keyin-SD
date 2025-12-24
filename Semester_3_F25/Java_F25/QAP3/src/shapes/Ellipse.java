package shapes;

public class Ellipse extends Shape implements Scalable {
    private double majorAxis;
    private double minorAxis;

    public Ellipse(double majorAxis, double minorAxis) {
        super("Ellipse");
        if (majorAxis <= 0 || minorAxis <= 0) {
            throw new IllegalArgumentException("Axes must be positive values.");
        }
        if (minorAxis > majorAxis) {
            throw new IllegalArgumentException("Major axis must be greater than or equal to minor axis.");
        }
        this.majorAxis = majorAxis;
        this.minorAxis = minorAxis;
    }

    @Override
    public double getArea() {
        return Math.PI * majorAxis * minorAxis;
    }

    @Override
    public double getPerimeter() {
        return Math.PI *
        Math.sqrt(2 * (majorAxis * majorAxis + minorAxis * minorAxis) - ((majorAxis - minorAxis) * (majorAxis - minorAxis)) / 2);
    }

    @Override
    public void scale(double factor) {
        majorAxis *= factor;
        minorAxis *= factor;
    }

}
