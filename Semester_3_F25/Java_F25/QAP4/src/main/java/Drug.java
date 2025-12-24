package main.java;
public class Drug {

    private int drugId;
    private String drugName;
    private double drugCost;
    private String dosage;

    public Drug(int drugId, String drugName, double drugCost, String dosage) {
        this.drugId = drugId;
        this.drugName = drugName;
        this.drugCost = drugCost;
        this.dosage = dosage;
    }

    // Getters
    public int getDrugId() {
        return drugId;
    }

    public String getDrugName() {
        return drugName;
    }

    public double getDrugCost() {
        return drugCost;
    }

    public String getDosage() {
        return dosage;
    }

    // Setters
    public void setDrugId(int drugId) {
        this.drugId = drugId;
    }

    public void setDrugName(String drugName) {
        this.drugName = drugName;
    }

    public void setDrugCost(double drugCost) {
        this.drugCost = drugCost;
    }

    public void setDosage(String dosage) {
        this.dosage = dosage;
    }

    public String toString() {
        return "Drug ID: " + drugId + "\nDrug Name: " + drugName + "\nDrug Cost: " + drugCost + "\nDosage: " + dosage;
    }
}