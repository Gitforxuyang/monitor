
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
	kubectl delete -f prometheus/prometheus-deployment.yml
	kubectl create -f prometheus/prometheus-deployment.yml

hello:
	docker build -t hello:v1 -f demo/Dockerfile .
	kubectl delete -f demo/hello.yaml
	kubectl create -f demo/hello.yaml

gra:
	docker build -t xy/grafana:v1 -f grafana/Dockerfile .
	kubectl delete -f grafana/grafana.yml || true
	kubectl create -f grafana/grafana.yml

.PHONY: prome