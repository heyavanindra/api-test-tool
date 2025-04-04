import mongoose, { Model, Mongoose } from "mongoose";
import dotenv from "dotenv"
dotenv.config()
mongoose.connect(process.env.MONGO_URI as string);

export interface testResultstypes extends Document {
  endPoint: string;
  statusCode: number;
  responseTime: number;
  passed: boolean;
}

const testResultsSchema = new mongoose.Schema<testResultstypes>({
  endPoint: { type: String, required: true },
  statusCode: { type: Number, required: true },
  responseTime: { type: Number, required: true },
  passed: { type: Boolean, required: true },
});

const testResultsModel: Model<testResultstypes> = mongoose.model<testResultstypes>("TestResult", testResultsSchema);

export default testResultsModel;
