#!/bin/bash
make stop
docker rmi $(docker images -qa)
make run

