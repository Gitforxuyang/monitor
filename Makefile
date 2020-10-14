
pro-create:
	kubectl create -f prometheus/prometheus-deployment.yml

pro-update:
	kubectl apply -f prometheus/prometheus-deployment.yml

pro-del:
	kubectl delete -f prometheus/prometheus-deployment.yml

build:
	docker build -t xy/prometheus:v1 -f prometheus/Dockerfile .

prome:
	make build
	kubectl apply -f prometheus/prometheus-deployment.yml

hello:
	docker build -t hello:v1 -f demo/Dockerfile .
	kubectl delete -f demo/hello.yaml
	kubectl create -f demo/hello.yaml