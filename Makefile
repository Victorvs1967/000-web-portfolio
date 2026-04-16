build_b:
	docker build -t victorvsm/portfolio_backend:v01 ./backend
	docker push victorvsm/portfolio_backend:v01

build_f:
	docker build -t victorvsm/portfolio_frontend:v01 ./frontend
	docker push victorvsm/portfolio_frontend:v01

build:
	docker build -t victorvsm/portfolio_backend:v01 ./backend
	docker push victorvsm/portfolio_backend:v01
	docker build -t victorvsm/portfolio_frontend:v01 ./frontend
	docker push victorvsm/portfolio_frontend:v01

run:
	docker-compose -f docker-compose.yml up -d --build

stop:
	docker-compose -f docker-compose.yml downf