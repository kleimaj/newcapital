#!/usr/bin/env bash
docker system prune -f
docker-compose build
docker-compose up -d