Kubernetes architecture

                         Internet
                            │
                            ▼
                    NGINX Ingress
                    employee.local
                       /        \
                      /          \
                     ▼            ▼
              Frontend Service  Backend Service
                  :80              :5000
                    │                │
                    ▼                ▼
              Frontend Pod      Backend Pod(s)
                                     │
                              ┌──────┴──────┐
                              │             │
                           HPA          NetworkPolicy
                              │             │
                              ▼             ▼
                         1–3 Pods      MySQL Service
                                            │
                                            ▼
                                       MySQL Pod
                                            │
                                            ▼
                                           PVC


kubernetes-mini-project/
│
├── 00-namespace
│     └── namespace.yaml
│
├── 01-frontend
│     ├── deployment.yaml
│     └── service.yaml
│
├── 02-backend
│     ├── deployment.yaml
│     └── service.yaml
│
├── 03-mysql
│     ├── statefulset.yaml
│     ├── service.yaml
│     ├── pvc.yaml
│     └── secret.yaml
│
├── 04-configmap
├── 05-ingress
├── 06-hpa
├── 07-networkpolicy
├── screenshots
└── README.md
