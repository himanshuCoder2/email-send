import mongoose from "mongoose";

const CampaignSchema = new mongoose.Schema({
  subject: String,
  content: String,
  recipients: [String],
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Campaign ||
  mongoose.model("Campaign", CampaignSchema);