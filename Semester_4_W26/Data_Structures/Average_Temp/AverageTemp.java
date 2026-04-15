import java.util.Scanner;

public class AverageTemp {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.println("Average Temperature Calculator");
        System.out.println("-----------------------------");

        System.out.print("How many values do you wish to enter? ");
        int n = scanner.nextInt();

        // initialize an array to store temperature values
        double[] temps = new double[n];
        double sum = 0;

        for (int i = 0; i < n; i++) {
            System.out.print("Enter temperature value: " + (i + 1) + ": ");
            temps[i] = scanner.nextDouble();
            sum += temps[i];
        }

        // calculate the average temperature
        double average = sum / n;
        System.out.println("\nAverage temperature: " + String.format("%.1f", average));

        // count the number of days above average
        int aboveCount = 0;
        for (int i = 0; i < n; i++) {
            if (temps[i] > average) {
                aboveCount++;
            }
        }

        // print the number of days above average
        if (aboveCount == 0) {
            System.out.println("No days above average.");
        } else {
            System.out.println("Number of days above average: " + aboveCount);
            System.out.println("Temperatures above average:");
            for (int i = 0; i < n; i++) {
                if (temps[i] > average) {
                    System.out.println("Day " + (i + 1) + ": " + temps[i]);
                }
            }
        }

        scanner.close();
    }
}