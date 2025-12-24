package diagram;

class MovablePoint extends Point {
    private int xspeed;
    private int yspeed;

    public MovablePoint(int x, int y, int xspeed, int yspeed) {
        super(x, y);
        this.xspeed = xspeed;
        this.yspeed = yspeed;
    }

    public MovablePoint() {
        super();
        this.xspeed = 2;
        this.yspeed = 2;
    }

    public int getXspeed() {
        return xspeed;
    }
    public void setXspeed(int xspeed) {
        this.xspeed = xspeed;
    }
    public int getYspeed() {
        return yspeed;
    }
    public void setYspeed(int yspeed) {
        this.yspeed = yspeed;
    }
    public void setSpeed(int xspeed, int yspeed) {
        this.xspeed = xspeed;
        this.yspeed = yspeed;
    }
    public int[] getSpeed() {
        return new int[] { xspeed, yspeed };
    }
    
    @Override
    public String toString() {
        return super.toString() + ", speed=(" + xspeed + ", " + yspeed + ")";
    }

    public MovablePoint move() {
        setX(getX() + xspeed);
        setY(getY() + yspeed);
        return this;
    }
}
