.PHONY: go-protos
go-protos:
	protoc *.proto \
		--go_out=go/freshcloud \
		--go-grpc_out=require_unimplemented_servers=false:go/freshcloud \
		--go_opt=paths=source_relative \
		--go-grpc_opt=paths=source_relative \
		--grpc-gateway_out=go/freshcloud \
		--grpc-gateway_opt=paths=source_relative \
		--proto_path=. 	