# Azure Cosmos DB Node app

A reference project to build, and deploy a Node app on Azure

A todo app writing, and reading data from Azure Cosmos DB

## Pre-requisite

- Make sure you have installed [Terraform](https://learn.hashicorp.com/tutorials/terraform/install-cli), [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli)

```bash
terraform -help # prints Terraform options
az --version # prints azure-cli verion
az login # logins to Azure
```

## Deploy Azure Cosmos DB

```bash
cd deploy # change to deploy directory
terraform init # initialises Terraform
terraform apply # deploys Azure stack
terraform destroy # destroys Azure stack
```

## Configuration

- In `src/config/config.js` update the values for `HOST`, and `AUTH_KEY`. See Azure documentations [here](https://docs.microsoft.com/en-us/azure/cosmos-db/sql-api-nodejs-application#add-configjs)

## Run App Locally

```bash
npm i # installs node dependencies
npm start # app listens at local host port 3000
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
