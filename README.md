docker build -t my-api .
docker run -d -p 3000:3000 --name my-api-container --link some-mongo:mongo my-api
docker run -d --name some-mongo -p 27017:27017 mongo:latest
docker stop my-api-container some-mongo
docker rm my-api-container some-mongo


docker-compose up
docker-compose down

docker-compose up --build

pushing
# Build the Docker image
docker build -t bharath7898/my-api .

# Log in to Docker Hub
docker login

# Push the Docker image to Docker Hub
docker push bharath7898/my-api

# Pull the Docker image from Docker Hub
docker pull bharath7898/my-api

# Run MongoDB container (if not already running)
docker run -d --name some-mongo -p 27017:27017 mongo:latest

# Run the Docker container for your application
docker run -d -p 3000:3000 --name my-api-container --link some-mongo:mongo bharath7898/my-api



tag
docker build -t bharath7898/my-api:v1.0.0 .

now only one comamd so modify code
# Log in to Docker Hub
docker login

# Build the Docker image with a specific tag
docker build -t bharath7898/my-api:v1.0.0 .

# Push the Docker image to Docker Hub
docker push bharath7898/my-api:v1.0.0



docker-compose pull



http://54.183.163.85/api/data