# strapi-nanobox-starter

## Prerequisites

Create a new app on [your nanobox dashboard](https://dashboard.nanobox.io/apps) with Digital Ocean as the provider.

## Installation

##### Clone the repository

`git clone git@github.com:jeppe-smith/strapi-nanobox-starter.git`

##### Install dependencies

`cd strapi-nanobox-starter && yarn`

##### Connect codebase

If you haven't already you have to install nanobox on your machine.

`nanobox remote add <app-name>`

##### Set environment variables

We wan't Strapi to run in production when we deploy. To run it in production when we deploy go to your apps "Environment Variables" under config and set a new environment variable with key `NODE_ENV` and value `production`.

To run in production on [dry-runs](https://docs.nanobox.io/workflow/dry-run/) set the environment variables like this `nanobox evar add dry-run NODE_ENV=production`.

## Development

Because of environment variables this starter can only run in a nanobox container. The `dev` script starts up nginx and the server, so you can use the IP of the container without the port.

`nanobox run yarn dev`

## Deploying

Before deploying to production or [dry-run](https://docs.nanobox.io/workflow/dry-run/) `scripts/beforeDeploy.js` should be run to ensure caching of plugin node_modules. If a plugins node_modules is not in `cache_dirs` it will probably not work correctly. To make this easier there are two scripts that does this for us.

##### Deploying to Nanobox

`yarn deploy`

##### Deploying to dry-run

`yarn dry-run`
