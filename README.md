# V K Harish Bodapati — DevOps Portfolio V1

Modern React + TypeScript portfolio for a DevOps Engineer, designed as the sample application for the wider AI DevSecOps project.

## Stack

- React + TypeScript + Vite
- Tailwind CSS
- Framer Motion
- Lucide React
- FastAPI
- Docker / Docker Compose

## Run locally

### Frontend
```bash
cd frontend
npm install
npm run dev
```

Open http://localhost:5173

### Backend
```bash
cd backend
python -m venv .venv
# activate the venv
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

Health: http://localhost:8000/health

### Docker Compose
```bash
docker compose up --build
```

Open http://localhost:8080

## Next project phases

1. GitHub repository
2. CI with tests and linting
3. DevSecOps gates: Gitleaks, Semgrep/SonarQube, Trivy, SBOM
4. Terraform AWS infrastructure
5. ECR
6. EKS
7. Helm deployment
8. Prometheus/Grafana/Loki
9. DEV → PROD promotion
10. AI pipeline analysis
11. MCP tools + human-approved remediation
