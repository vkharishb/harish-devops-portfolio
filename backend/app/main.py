from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from datetime import datetime

app = FastAPI(title="Harish DevOps Portfolio API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:8080"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/health")
def health():
    return {"status": "ok", "service": "portfolio-api", "timestamp": datetime.utcnow().isoformat()}

@app.get("/api/profile")
def profile():
    return {
        "name": "V K Harish Bodapati",
        "title": "DevOps Engineer",
        "location": "Hyderabad, India",
        "focus": ["AWS", "Kubernetes", "Terraform", "CI/CD", "DevSecOps", "Observability"],
    }
