# 🚀 Azure Microservices Lab

This project demonstrates a simple **cloud-native microservices architecture** deployed on **Microsoft Azure**, including frontend hosting, backend API gateway, containerization, and cloud deployment.

---

## 📌 Project Overview

This lab implements:

- 🌐 Frontend → Azure Static Web Apps  
- 🚪 API Gateway → Node.js (Express)  
- 🐳 Containerization → Docker  
- ☁️ Deployment → Azure Container Apps + Azure Container Registry  

The system allows users to interact with backend services through a web interface.

---

## 🏗️ Architecture
```
Frontend (Static Web App)  
        ↓  
API Gateway (Container App)  
        ↓  
Backend APIs  
```
---

## ⚙️ Technology Stack

| Layer              | Technology                          |
|-------------------|----------------------------------|
| Frontend          | HTML, CSS, JavaScript            |
| Backend           | Node.js + Express                |
| Containerization  | Docker                           |
| Cloud Platform    | Microsoft Azure                  |
| Registry          | Azure Container Registry (ACR)   |
| Frontend Hosting  | Azure Static Web Apps            |
| Backend Hosting   | Azure Container Apps             |

---

## 📂 Project Structure

```
azure-microservices-lab/
│
├── frontend/
│ └── index.html
│
├── gateway/
│ ├── server.js
│ ├── package.json
│ └── Dockerfile
│
└── README.md
```

---

## 🚀 Features

- ✔ Frontend deployed using Azure Static Web Apps  
- ✔ Backend containerized using Docker  
- ✔ Image stored in Azure Container Registry  
- ✔ Backend deployed using Azure Container Apps  
- ✔ Frontend ↔ Backend communication  
- ✔ Health check endpoint  
- ✔ Sample API endpoint  

---

## 🔌 API Endpoints

### 🔹 Health Check
```
GET /health
```
Response:
```
{ "status": "ok" }
```
🔹 Get Items
```
GET /api/items
```
Response:
```
[
  { "id": 1, "name": "Item One" },
  { "id": 2, "name": "Item Two" }
]
```

## 🐳 Docker Commands

Build Image
```
docker build -t <acr-name>.azurecr.io/gateway:v1 ./gateway
```
Push Image
```
docker push <acr-name>.azurecr.io/gateway:v1
```

## ☁️ Azure Deployment Steps

1️⃣ Create Azure Container Registry
```
az acr create --name <acr-name> --resource-group <rg> --sku Basic
```
2️⃣ Login to ACR
```
az acr login --name <acr-name>
```
3️⃣ Deploy Container App
```
az containerapp create \
  --name gateway \
  --resource-group <rg> \
  --image <acr-name>.azurecr.io/gateway:v1 \
  --target-port 3000 \
  --ingress external
```
4️⃣ Update Container App
```
az containerapp update \
  --name gateway \
  --resource-group <rg> \
  --image <acr-name>.azurecr.io/gateway:v2
```

## 🌐 Frontend Deployment

Frontend is deployed using Azure Static Web Apps:

- Connected to GitHub repository
- Auto-deploys on every push
- Accessible via public URL
 
## 🔐 Security

- CORS configured for frontend access
- HTTPS enabled
- Azure-managed infrastructure
  
## ⚠️ Challenges Faced

- ❌ CORS issues between frontend and backend
- ❌ Azure region restrictions
- ❌ Docker image build errors
- ❌ ACR authentication issues
- ❌ Container App deployment failures

## ✅ Solutions Implemented

- ✔ Enabled CORS in Express backend
- ✔ Used supported Azure regions (e.g., Central US, East Asia)
- ✔ Fixed Dockerfile path issues
- ✔ Used ACR credentials for authentication
- ✔ Updated container app with correct image

## 🎯 Learning Outcomes

- Understanding microservices architecture
- Deploying containerized applications
- Working with Azure cloud services
- Managing CI/CD via GitHub integration
- Debugging cloud deployment issues

## 📸 Demo

Frontend successfully communicates with backend:
```
HTTP 200
Response: {"status":"ok"}
```
## 👨‍💻 Author

AMBEGODA A L A S K

Sri Lanka Institute of Information Technology (SLIIT)

