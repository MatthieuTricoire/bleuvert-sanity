import sendgrid from "@sendgrid/mail";
import { NextResponse } from "next/server";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string);

const msg = {
  to: "matthieutricoire@gmail.com",
  from: "matthieutricoire@gmail.com",
  subject: "Test email",
  text: `<div> Tis is a test email from sendgrid </div>`,
};

export async function POST(req: Request) {
  try {
    console.log("route post pour envoie de mail");
    const data = req.body;
    console.log(data);
    await sendgrid.send(msg);
    console.log("email envoyé");

    return NextResponse.json("Ok");
  } catch (error) {
    console.log(error);
    return NextResponse.json("NOk");
  }
}
