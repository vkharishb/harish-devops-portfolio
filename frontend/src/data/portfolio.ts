export const portfolio = {
  name: "V K Harish Bodapati",
  title: "DevOps Engineer",
  location: "Hyderabad, India",
  email: "vkharishbodapati@gmail.com",
  linkedin: "https://www.linkedin.com/in/vkharishbdevops/",
  github: "https://github.com/vkharishb",
  summary:
    "DevOps Engineer with 8+ years of overall IT experience, including 6+ years focused on DevOps and cloud engineering, with hands-on experience across AWS, Kubernetes/EKS, Terraform, CI/CD, DevSecOps, observability, production releases and RCA.",
  stats: [
    ["8+", "Years IT Experience"],
    ["6+", "Years DevOps & Cloud"],
    ["25%", "Faster Deployments at Accenture"],
    ["10+", "Applications Automated"],
    ["3", "Environments Managed"],
  ],
  skills: [
    "AWS", "Kubernetes", "Terraform", "Docker", "Jenkins",
    "GitHub Actions", "Helm", "Argo CD", "Prometheus", "Grafana",
    "SonarQube", "Trivy", "Nexus", "Python", "Linux", "Git"
  ],
  experience: [
    {
      company: "MANIERE SOFTWARE & TECHNOLOGIES",
      role: "DevOps Engineer",
      dates: "Apr 2024 – Present",
      bullets: [
        "Design, provision and maintain AWS infrastructure using Terraform across 3 environments.",
        "Deploy containerized applications on Kubernetes and Amazon EKS using Docker and Helm.",
        "Build CI/CD pipelines using Jenkins and GitHub Actions across 10+ applications.",
        "Implement secure AWS networking, IAM, Secrets Manager and Parameter Store.",
        "Operate Grafana, Prometheus, CloudWatch and ELK for production visibility and incident response."
      ]
    },
    {
      company: "ACCENTURE SOLUTIONS PVT. LTD.",
      role: "DevOps Engineer / Senior Analyst",
      dates: "Sep 2022 – Feb 2024",
      bullets: [
        "Engineered GitHub Actions and Jenkins pipelines, contributing to an approximately 25% reduction in deployment time.",
        "Built reusable Terraform modules for multi-environment infrastructure automation.",
        "Designed and operated production-grade AWS EKS workloads for 10+ microservices.",
        "Managed controlled Kubernetes deployments using Argo CD.",
        "Integrated SonarQube and Black Duck for code quality and security controls."
      ]
    },
    {
      company: "LINCE SOFT SOLUTIONS PVT. LTD.",
      role: "Software Engineer",
      dates: "Jun 2018 – Sep 2022",
      bullets: [
        "Progressed from production/support responsibilities into DevOps and cloud automation.",
        "Built Jenkins pipelines for build, testing, artifact publishing and deployments.",
        "Containerized applications using Docker and supported AWS EC2, S3, IAM and VPC.",
        "Automated artifact publishing and versioning using Nexus.",
        "Participated in production support, release coordination, troubleshooting and RCA."
      ]
    }
  ],
  projects: [
    {
      title: "AI DevOps Platform",
      status: "Currently Building",
      description: "AI-powered DevSecOps platform for intelligent analysis, RCA, remediation recommendations and human-approved operational actions using MCP and LLMs.",
      tags: ["Python", "FastAPI", "LangGraph", "MCP"]
    },
    {
      title: "CODAP",
      status: "Personal Project",
      description: "Centralized Observability & Deployment Analytics Platform combining Kubernetes observability, deployment analytics, DevSecOps and operational visibility.",
      tags: ["EKS", "Prometheus", "Grafana", "Terraform", "Argo CD"]
    },
    {
      title: "EKS Production Platform",
      status: "Personal Project",
      description: "Production-oriented AWS EKS platform with Terraform, secure networking, IAM, Helm, Kubernetes policies, HPA and GitHub Actions.",
      tags: ["Terraform", "EKS", "Helm", "AWS"]
    },
    {
      title: "Secure CI/CD DevSecOps Pipeline",
      status: "Personal Project",
      description: "End-to-end CI/CD pipeline integrating build, testing, security validation, artifact management and deployment workflows.",
      tags: ["GitHub Actions", "Jenkins", "SonarQube", "Trivy", "Nexus"]
    },
    {
      title: "Reusable Terraform AWS Modules",
      status: "Personal Project",
      description: "Reusable Terraform modules for VPC, EKS, IAM, EC2 and S3 to standardize repeatable AWS infrastructure provisioning.",
      tags: ["Terraform", "AWS", "VPC", "EKS"]
    }
  ],
  certifications: [
    "AWS Certified Cloud Practitioner (CLF-C02)",
    "Databricks Academy Accreditation – Generative AI Fundamentals"
  ]
};