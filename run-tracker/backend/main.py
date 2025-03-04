import psycopg2
from psycopg2.extras import RealDictCursor
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware



app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Tillater Next.js frontend
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

try:
    conn = psycopg2.connect(
        dbname="run_tracker",
        user="postgres",
        password="DITT_PASSORD",  # Sett inn passordet ditt her
        host="localhost"
    )
    cur = conn.cursor(cursor_factory=RealDictCursor)
    print("✅ Databasekobling OK!")
except Exception as e:
    print("⚠️ Feil ved tilkobling til databasen:", e)

@app.get("/workouts")
def get_workouts():
    cur.execute("SELECT * FROM workouts;")
    workouts = cur.fetchall()
    return workouts
