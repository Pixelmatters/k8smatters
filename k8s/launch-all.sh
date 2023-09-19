#!/bin/sh

kubectl apply -f k8s/secrets.yaml
kubectl apply -f k8s/config-map.yaml
kubectl apply -f k8s/postgres/
kubectl apply -f k8s/django/job.yaml
kubectl apply -f k8s/django/deployment.yaml
kubectl apply -f k8s/django/service.yaml
kubectl apply -f k8s/react/
kubectl apply -f k8s/nginx/ingress.yaml 