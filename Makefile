.PHONY: go-protos
go-protos:
	protoc *.proto \
		--go_out=go/freshcloud \
		--go-grpc_out=require_unimplemented_servers=false:go/freshcloud \
		--go_opt=paths=source_relative \
		--go-grpc_opt=paths=source_relative \
		--proto_path=.

# Path to this plugin
PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts"

# Directory to write generated code to (.js and .d.ts files)
OUT_DIR="ts/freshcloud"

.PHONY: ts-protos
ts-protos:	
	npx proto-loader-gen-types --longs=String --enums=String \
		--defaults --oneofs --grpcLib=@grpc/grpc-js \
		--outDir=${OUT_DIR} *.proto

	protoc *.proto --js_out="import_style=commonjs,binary:${OUT_DIR}" --grpc-web_out=import_style=typescript,mode=grpcwebtext:${OUT_DIR}    	