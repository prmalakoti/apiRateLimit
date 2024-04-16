### Building and running your application

When you're ready, start your application by running:
`docker compose up --build`.

Your application will be available at http://localhost:8000.

### Deploying your application to the cloud

First, build your image, e.g.: `docker build -t myapp .`.
If your cloud uses a different CPU architecture than your development
machine (e.g., you are on a Mac M1 and your cloud provider is amd64),
you'll want to build the image for that platform, e.g.:
`docker build --platform=linux/amd64 -t myapp .`.

Then, push it to your registry, e.g. `docker push myregistry.com/myapp`.

Consult Docker's [getting started](https://docs.docker.com/go/get-started-sharing/)
docs for more detail on building and pushing.

### References

- [Docker's Node.js guide](https://docs.docker.com/language/nodejs/)

### Basic commands of docker

#### local system

`docker init`

A Dockerfile is a text document that contains all the commands a user could call on the command line to assemble an image

`docker compose up --build` (cmd)

yml file. It specifies what images are required, what ports they need to expose, whether they have access to the host filesystem, what commands should be run when they start up, and so on

`docker compose up --build -d` (background)

`docker compose down`

`docker images`

`docker ps`

#### create repo in hub.docker

create repo in docker hub

command line execute below commands

`docker push prashantmalakoti701/api-rate-limit`

    Using default tag: latest
    The push refers to repository [docker.io/prashantmalakoti701/api-rate-limit]
    An image does not exist locally with the tag: prashantmalakoti701/api-rate-limit

`docker login -u prashantmalakoti701`

`docker images`

`docker tag apiratelimit-server(local image name) prashantmalakoti701/api-rate-limit(hub created repo name)`

`docker push prashantmalakoti701/api-rate-limit`

Finally I have pushed my docker image download from `prashantmalakoti701/api-rate-limit`
