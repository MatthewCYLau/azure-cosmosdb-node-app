output "CosmosDB_account_endpoint" {
  value = azurerm_cosmosdb_account.acc.endpoint
}

output "CosmosDB_account_primary_key" {
  value = azurerm_cosmosdb_account.acc.primary_key
}