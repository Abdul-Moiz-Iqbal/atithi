import { Schema,models , model } from "mongoose";

const PlanSchema = new Schema({
    title: { type: String, required: true },
    price: { type: Number, required: true },
    days: { type: Number, required: true },
   
});

const PLan = models.PlanSchema || model("Plan", PlanSchema);
export default PLan