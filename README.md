# Kubernetes 101 Codematters

## Overview

This repository contains the code for the Kubernetes 101 Codematters course. The first part is designed to be run on a local machine using Docker Desktop.
The second part is designed to be run on a Kubernetes cluster.

The main branch contains the code for the "un-k8s" Kubernetes 101 Codematters talk.
The "k8s" branch contains the code for the "k8s" Kubernetes 101 Codematters talk.

## Prerequisites

- Docker Desktop
- Kubernetes cluster (for the k8s branch)
- MiniKube (for the k8s branch)

## Running the code

### Part 1

- Clone the repository
- Checkout the main branch
- Run `docker-compose up`
- Open a browser and navigate to http://127.0.0.1
- Check Docker Desktop for the running containers

### Part 2

- Clone the repository
- Checkout the k8s branch
- Build the Docker image for Django with `docker build -t <your_docker_hub_user>/django_backend:latest ./django`
- Push the tagged image with `docker push <your_docker_hub_user>/django-backend:latest`
- Build the Docker image for React with `docker build -t <your_docker_hub_user>/react_frontend:latest ./react`
- Push the tagged image with `docker push <your_docker_hub_user>/react_frontend:latest`
- Run `minikube start`
- Run `minikube addons enable ingress`
- Run `minikube addons enable ingress-dns`
- Run `kubectl apply -f k8s/`
- Run `kubectl get pods`
- Run `kubectl get services`
- Run `kubectl get ingress`
- Run `minikube tunnel`
- Run `minikube dashboard`

## Cleanup

### Part 1

- Run `docker-compose down`

### Part 2

- Run `kubectl delete -f k8s/`
- Run `minikube stop`
- Run `minikube delete`
