mkdir -p dist
babel src -d dist --source-maps
rsync -avz --exclude *.js --exclude __tests__ --exclude node_modules src/ dist/
