import { createClient } from "@sanity/client"
import { v4 as uuidv4 } from "uuid"
import {allBooks} from "../src/data/books"

const client = createClient({
  projectId: "ict525lo",
  dataset: "production",
  token: "skb1hURnAUSeUQ3EAFNTBVUYQWDVSMiioYlLb1k6XJJ93vhst7hg21uJmJp9fenI4pEBYq7A0mc93SzDzmBj7eEsJ9wEwkiZNtFvkrgl5PYsCmqtBBkkyfjuiMnSuiElRAYDozYbnlehjKS26zvohiL2bEmrZStZG3Ev31YPkfeHAhgXZr0d",
  apiVersion: "2025-01-01",
  useCdn: false,
})

async function run() {
  // 1️⃣ Fetch categories from Sanity
  const categories = await client.fetch(`*[_type == "category"]{_id, name}`)
  const categoryMap = Object.fromEntries(
    categories.map((c: any) => [c.name, c._id])
  )

  console.log("🗂 Found categories:", Object.keys(categoryMap))

  // 2️⃣ Import books
  for (const book of allBooks) {
    try {
      const categoryId = categoryMap[book.category]

      if (!categoryId) {
        console.warn(`⚠️ Skipping ${book.title}: Category not found (${book.category})`)
        continue
      }

      const doc = {
        _id: book.id,
        _type: "book",
        title: book.title,
        author: book.author,
        category: { _type: "reference", _ref: categoryId },
        ageRange: book.ageRange,
        language: book.language || "English",
        synopsis: book.synopsis,
        coverImage: book.coverImage,
        featured: book.featured || false,
        comingSoon: book.comingSoon || false,
        purchaseLink: book.purchaseLink || "",
      }

      await client.createOrReplace(doc)
      console.log(`✅ Imported: ${book.title}`)
    } catch (err) {
        if (err instanceof Error) {
    
      console.error(`❌ Error importing ${book.title}:`, err.message)
        }
    }
  }

  console.log("🎉 Book import complete!")
}

run().catch(console.error)
