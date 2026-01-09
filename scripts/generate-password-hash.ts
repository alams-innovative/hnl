import bcrypt from "bcryptjs"

async function generateHash() {
  const password = "HNL@2026!"
  const hash = await bcrypt.hash(password, 10)
  console.log("Password:", password)
  console.log("Hash:", hash)
  console.log("\nUse this hash in your SQL script:")
  console.log(hash)
}

generateHash()
