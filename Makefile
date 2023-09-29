.PHONY: go-protos
go-protos:
	protoc *.proto \
		--go_out=go/freshcloud \
		--go-grpc_out=require_unimplemented_servers=false:go/freshcloud \
		--go_opt=paths=source_relative \
		--go-grpc_opt=paths=source_relative \
		--proto_path=.

.PHONY: ts-protos
ts-protos:
	protoc *.proto \
		--plugin=./node_modules/.bin/protoc-gen-ts_proto \
		--ts_proto_opt=outputClientImpl=grpc-web \
		--ts_proto_out=ts/freshcloud \
		--proto_path=.