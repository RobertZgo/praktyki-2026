const pool = require("./index");

async function testConnection() {
  try {
    const [rows] = await pool.query("SELECT NOW()");
    console.log("Połączenie działa! Czas z bazy:", rows[0]["NOW()"]);
  } catch (err) {
    console.error("Błąd połączenia:", err.message);
  } finally {
    await pool.end();
  }
}

testConnection();