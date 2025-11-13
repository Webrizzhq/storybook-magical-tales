import fs from "fs";
import path from "path";
import { createClient } from "@sanity/client";

const client = createClient({
 projectId: "ict525lo",
  dataset: "production",
  token: "skb1hURnAUSeUQ3EAFNTBVUYQWDVSMiioYlLb1k6XJJ93vhst7hg21uJmJp9fenI4pEBYq7A0mc93SzDzmBj7eEsJ9wEwkiZNtFvkrgl5PYsCmqtBBkkyfjuiMnSuiElRAYDozYbnlehjKS26zvohiL2bEmrZStZG3Ev31YPkfeHAhgXZr0d",
  apiVersion: "2025-01-01",
  useCdn: false,
});



// 👇 Full absolute path to your campaign images folder
const campaignsDir = "/home/sj/development/Websites/storybook-magical-tales/public/Latest";

async function uploadCampaignImages() {
  console.log("🚀 Starting upload of local campaign images...");

  // 1️⃣ Fetch all campaigns with string-based image paths
  const campaigns = await client.fetch(
    `*[_type == "campaign" && defined(image) && image match "/Latest/*"]`
  );
  console.log(`Found ${campaigns.length} campaigns with local image paths`);

  for (const campaign of campaigns) {
    const filename = path.basename(campaign.image);
    const localPath = path.join(campaignsDir, filename);

    if (!fs.existsSync(localPath)) {
      console.warn(`⚠️ File not found: ${localPath}`);
      continue;
    }

    try {
      // 2️⃣ Upload image to Sanity
      const imageAsset = await client.assets.upload(
        "image",
        fs.createReadStream(localPath),
        { filename }
      );

      // 3️⃣ Patch campaign to reference uploaded image
      await client
        .patch(campaign._id)
        .set({
          image: {
            _type: "image",
            asset: {
              _type: "reference",
              _ref: imageAsset._id,
            },
          },
        })
        .commit();

      console.log(`✅ Uploaded & updated: ${campaign.title}`);
    } catch (err: any) {
      console.error(`❌ Failed for ${campaign.title}:`, err.message);
    }
  }

  console.log("🎉 Done uploading all campaign images!");
}

uploadCampaignImages().catch(console.error);
