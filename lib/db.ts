import { neon } from "@neondatabase/serverless"

/**
 * DB client is initialized lazily so the dev server can boot without a DB.
 * Any route that actually queries the DB will throw a clear error if DATABASE_URL is missing.
 */
let _sql: any = null

function getClient() {
  const url = process.env.DATABASE_URL
  if (!url) {
    throw new Error("DATABASE_URL environment variable is not set (required for DB-backed routes)")
  }

  if (!_sql) {
    _sql = neon(url)
  }

  return _sql
}

/**
 * Tagged-template SQL helper:
 *   await sql`SELECT * FROM table WHERE id = ${id}`
 */
export const sql: any = (...args: any[]) => {
  return getClient()(...args)
}

export async function executeQuery<T = any>(queryText: string, params?: any[]): Promise<T[]> {
  try {
    const client = getClient()
    const result = await client.query(queryText, params)
    const rows = result?.rows ?? result
    return rows as T[]
  } catch (error) {
    console.error("[v0] Database query error:", error)
    throw new Error("Database operation failed")
  }
}

export async function query<T = any>(queryText: string, params?: any[]): Promise<{ rows: T[] }> {
  try {
    const client = getClient()
    const result = await client.query(queryText, params)
    const rows = (result?.rows ?? result) as T[]
    return { rows }
  } catch (error) {
    console.error("[v0] Database query error:", error)
    throw new Error("Database operation failed")
  }
}
