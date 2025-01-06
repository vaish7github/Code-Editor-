import { httpRouter } from "convex/server";
import { httpAction } from "./_generated/server";
import { Webhook } from "svix";
import { WebhookEvent } from "@clerk/nextjs/server";
import { api } from "./_generated/api";

const http = httpRouter();

http.route({
  path: "/clerk-webhook",
  method: "POST",
  handler: httpAction(async (ctx, request) => {
    const webhookSecret = process.env.CLERK_WEBHOOK_SECRET;

    if (!webhookSecret) {
      console.error("Webhook secret not found");
      throw new Error("CLERK_WEBHOOK_SECRET is missing");
    }

    // Retrieve Svix headers
    const svixId = request.headers.get("svix-id");
    const svixSignature = request.headers.get("svix-signature");
    const svixTimestamp = request.headers.get("svix-timestamp");

    if (!svixId || !svixSignature || !svixTimestamp) {
      console.error("Missing required Svix headers");
      return new Response("Missing Svix headers", { status: 400 });
    }

    // Parse payload
    const payload = await request.json();
    const body = JSON.stringify(payload);

    // Verify webhook signature
    const wh = new Webhook(webhookSecret);
    let evt: WebhookEvent;

    try {
      evt = wh.verify(body, {
        "svix-id": svixId,
        "svix-timestamp": svixTimestamp,
        "svix-signature": svixSignature,
      }) as WebhookEvent;
    } catch (err) {
      console.error("Error verifying webhook:", err);
      return new Response("Invalid signature", { status: 400 });
    }

    // Process the event
    const eventType = evt.type;
    if (eventType === "user.created") {
      const { id, email_addresses, first_name, last_name } = evt.data;
      const email = email_addresses[0].email_address;
      const name = `${first_name || ""} ${last_name || ""}`.trim();

      try {
        // Call the Convex mutation to sync the user
        await ctx.runMutation(api.users.syncUser, {
          userId : id,
          email,
          name,
        });
      } catch (error) {
        console.error("Error syncing user:", error);
        return new Response("Error creating user", { status: 500 });
      }
    }

    return new Response("Webhook processed successfully", { status: 200 });
  }),
});

export default http;
