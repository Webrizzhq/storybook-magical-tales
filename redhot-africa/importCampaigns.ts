import { createClient } from "@sanity/client"
import { v4 as uuidv4 } from "uuid"
import { campaignData } from "../src/data/campaignData"

const client = createClient({
  projectId: "ict525lo",
  dataset: "production",
  token: "skb1hURnAUSeUQ3EAFNTBVUYQWDVSMiioYlLb1k6XJJ93vhst7hg21uJmJp9fenI4pEBYq7A0mc93SzDzmBj7eEsJ9wEwkiZNtFvkrgl5PYsCmqtBBkkyfjuiMnSuiElRAYDozYbnlehjKS26zvohiL2bEmrZStZG3Ev31YPkfeHAhgXZr0d", // from Sanity manage dashboard
  apiVersion: "2025-01-01",
  useCdn: false,
})


const importCampaigns = async () => {
  for (const c of campaignData) {
    try {
      await client.create({
        _type: "campaign",
        title: c.title,
        description: c.description,
        impact: c.impact,
        image: c.image ? { _type: "image", asset: { _type: "reference", _ref: c.image } } : undefined,
        featured: c.featured,
        color: c.color,
        goal: c.goal,
        learnMore: c.learnMore?.map((s) => ({ _type: "block", children: [{ _type: "span", text: s }] })),
        getInvolved: c.getInvolved?.map((s) => ({ _type: "block", children: [{ _type: "span", text: s }] })),
      });
      console.log(`Imported: ${c.title}`);
    } catch (err) {
      console.error(`Error importing ${c.title}:`, err);
    }
  }
};

importCampaigns();
