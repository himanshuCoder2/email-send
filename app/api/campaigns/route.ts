import { NextResponse } from "next/server";
import { connectDB } from "../../../lib/db";
import Campaign from "../../../models/Campaign";

export async function POST(req: Request) {
  await connectDB();
  const body = await req.json();
  const campaign = await Campaign.create(body);
  return NextResponse.json(campaign);
}