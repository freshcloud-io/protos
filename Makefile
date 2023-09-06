.PHONY: protos
protos:
	protoc *.proto \
		--go_out=go \
		--go-grpc_out=require_unimplemented_servers=false:go \
		--go_opt=paths=source_relative \
		--go-grpc_opt=paths=source_relative \
		--proto_path=.