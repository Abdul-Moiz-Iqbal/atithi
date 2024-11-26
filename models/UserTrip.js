import { Schema, model, models } from "mongoose";

// Valid values for months and years
const validMonths = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const validYears = [2024, 2025, 2026];

// Plan fields
const PlanSchema = new Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },

});

// UserTrip Schema
const UserTripSchema = new Schema(
  {
    paymentDetails: { type: Object, required: false },
    pay: { type: Boolean, required: true },
    user_name: { type: String, required: true },
    email: { type: String, required: true },
    country: { type: String, required: true },
    regions: [{ type: String, required: true }], // Array of strings
    month: { type: String, enum: validMonths, required: true }, // Month must be from the predefined list
    year: { type: Number, enum: validYears, required: true }, // Year must be from the predefined list
    comment: { type: String, required: false }, // Optional comment field
    days:{type: Number, required: true},
    planDetails: {
      type: PlanSchema, // Embed the Plan schema directly
      required: false,  // Make this optional if not always needed
    },
    totalPrice: { type: Number, required: true }, // Total price field
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

// Ensure we don’t recompile the model if already defined
const UserTrip = models.UserTrip || model("UserTrip", UserTripSchema);
delete models.UserTrip;
export default UserTrip;
