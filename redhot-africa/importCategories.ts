import { createClient } from "@sanity/client"
import { v4 as uuidv4 } from "uuid"
import { categoriesData } from "./CategoriesData"

const client = createClient({
  projectId: "ict525lo",
  dataset: "production",
  token: "skb1hURnAUSeUQ3EAFNTBVUYQWDVSMiioYlLb1k6XJJ93vhst7hg21uJmJp9fenI4pEBYq7A0mc93SzDzmBj7eEsJ9wEwkiZNtFvkrgl5PYsCmqtBBkkyfjuiMnSuiElRAYDozYbnlehjKS26zvohiL2bEmrZStZG3Ev31YPkfeHAhgXZr0d", // from Sanity manage dashboard
  apiVersion: "2025-01-01",
  useCdn: false,
})

async function run() {
  for (const category of categoriesData) {
    try {
      const doc = {
        _id: uuidv4(),
        _type: "category",
        name: category.name,
        ageRange: category.ageRange,
      }

      await client.createIfNotExists(doc)
      console.log(`✅ Created: ${category.name}`)
    } catch (err) {
      if (err instanceof Error) {
    console.error(`❌ Error creating ${category.name}:`, err.message);
  } else {
    console.error(`❌ Unknown error creating ${category.name}:`, err);
  }
    }
  }

  console.log("🎉 Category import complete!")
}

run().catch(console.error)
