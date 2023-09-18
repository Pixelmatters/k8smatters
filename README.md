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
- Run `minikube start`
- Run `kubectl apply -f .`
- Run `kubectl get pods`
- Run `kubectl get services`
- Run `minikube dashboard`

## Cleanup

### Part 1

- Run `docker-compose down`

### Part 2

- Run `kubectl delete -f .`
- Run `minikube stop`
- Run `minikube delete`
