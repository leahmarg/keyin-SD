package main.java;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
import java.io.IOException;
import java.io.FileWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.io.BufferedReader;
import java.io.FileReader;

public class Menu {

    private static List<Drug> drugs = new ArrayList<>();
    private static Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {

        int choice;

        do {
            System.out.println("\nWelcome to QAP4 Menu System!");
            System.out.println("1. Save Drugs to Text File");
            System.out.println("2. Save Patient to Database");
            System.out.println("3. Read Drugs from File");
            System.out.println("4. Read Patients from Database");
            System.out.println("5. Exit");
            System.out.print("Enter menu choice: ");

            choice = scanner.nextInt();
            scanner.nextLine();

            switch (choice) {
                case 1:
                    createDrug();
                    saveDataToTextFile();
                    break;

                case 2:
                    createPatient();
                    break;

                case 3:
                    readTextFile();
                    break;

                case 4:
                    readDatabase();
                    break;

                case 5:
                    System.out.println("Exiting program... Merry Christmas!");
                    break;

                default:
                    System.out.println("Invalid choice. Please try again.");
            }

        } while (choice != 5);
    }

    // DRUG
    private static void createDrug() {
        System.out.print("Enter Drug ID: ");
        int id = scanner.nextInt();
        scanner.nextLine();
        System.out.print("Enter Drug Name: ");
        String name = scanner.nextLine();
        System.out.print("Enter Drug Cost: ");
        double cost = scanner.nextDouble();
        scanner.nextLine();
        System.out.print("Enter Dosage: ");
        String dosage = scanner.nextLine();

        Drug newDrug = new Drug(id, name, cost, dosage);
        drugs.add(newDrug);
        System.out.println("Drug created: " + newDrug);
    }

    private static void saveDataToTextFile() {
        try (FileWriter writer = new FileWriter("drugs.txt", true)) {
            for (Drug drug : drugs) {
                writer.write(drug.toString() + System.lineSeparator());
            }
            System.out.println("Drug saved to drugs.txt.");
            drugs.clear(); // prevent duplicates on next save
        } catch (IOException e) {
            System.out.println("Error writing to text file: " + e.getMessage());
        }
    }

    private static void readTextFile() {
    System.out.println("\nReading drugs from text file...");

    try (BufferedReader reader = new BufferedReader(new FileReader("drugs.txt"))) {
        String line;
        while ((line = reader.readLine()) != null) {
            System.out.println(line);
        }
    } catch (IOException e) {
        System.out.println("Error reading from text file: " + e.getMessage());
    }
}

    // PATIENT
    private static void createPatient() {
        System.out.print("Enter Patient ID: ");
        int id = scanner.nextInt();
        scanner.nextLine();
        System.out.print("Enter First Name: ");
        String firstName = scanner.nextLine();
        System.out.print("Enter Last Name: ");
        String lastName = scanner.nextLine();
        System.out.print("Enter Date of Birth (YYYY-MM-DD): ");
        String dob = scanner.nextLine();

        try {
            saveToDatabase(id, firstName, lastName, dob);
            System.out.println("Patient saved to database successfully.");
        } catch (SQLException e) {
            System.out.println("Error saving patient to database: " + e.getMessage());
        }
    }

    private static void saveToDatabase(int id, String firstName, String lastName, String dob)
            throws SQLException {
        String url = "jdbc:postgresql://localhost:5432/qap4db";
        String user = "postgres";
        String password = "password";

        String sql = "INSERT INTO patients (patient_id, first_name, last_name, date_of_birth) VALUES (?, ?, ?, ?)";

        try (Connection conn = DriverManager.getConnection(url, user, password);
                PreparedStatement stmt = conn.prepareStatement(sql)) {

            stmt.setInt(1, id);
            stmt.setString(2, firstName);
            stmt.setString(3, lastName);
            stmt.setString(4, dob);

            stmt.executeUpdate();
        }
    }

    private static void readDatabase() {
        String url = "jdbc:postgresql://localhost:5432/qap4db";
        String user = "postgres";
        String password = "password";

        String sql = "SELECT patient_id, first_name, last_name, date_of_birth FROM patients";

        try (Connection conn = DriverManager.getConnection(url, user, password);
                PreparedStatement stmt = conn.prepareStatement(sql);
                ResultSet rs = stmt.executeQuery()) {

            System.out.println("Patients in database:");
            while (rs.next()) {
                int id = rs.getInt("patient_id");
                String firstName = rs.getString("first_name");
                String lastName = rs.getString("last_name");
                String dob = rs.getString("date_of_birth");

                System.out.println(id + ": " + firstName + " " + lastName + ", DOB: " + dob);
            }

        } catch (SQLException e) {
            System.out.println("Error reading from database: " + e.getMessage());
        }
    }
}
