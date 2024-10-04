---
title: Centrifuge SDK Documentation
language_tabs:
  - typescript
toc_footers:
  - <a href='#'>Sign Up for API Keys</a>
includes:
  - errors
search: true
---

# Introduction

Welcome to the Centrifuge SDK documentation. This SDK provides a comprehensive interface to interact with Centrifuge pools, assets, and investor-related functionality.

# Authentication

> To initialize the SDK:

```typescript
const centrifuge: CentrifugeSDK = {
  // SDK initialization
};
```

# SDK Overview

The Centrifuge SDK provides three main interfaces:
- Pools Management
- Asset Operations
- Investor Functions

# Pools

## Get All Pools

```typescript
const pools = centrifuge.getAllPools(true);
```

Returns an array of all active pools when `activeOnly` is set to true.

### Parameters

Parameter | Type | Description
--------- | ---- | -----------
activeOnly | boolean | Filter for active pools only

### Response

Returns an array of `PoolOverview` objects containing:
- poolName
- assetClass
- TVL
- APR
- status

## Get Single Pool

```typescript
const pool = centrifuge.pools("pool-id");
```

Returns detailed information about a specific pool.

### Parameters

Parameter | Type | Description
--------- | ---- | -----------
poolId | string | Unique identifier of the pool

### Pool Methods

Method | Return Type | Description
------ | ----------- | -----------
nav() | number | Current NAV of the pool
tokenInfo() | TokenInfo | Current token price and APY
navHistory(days) | HistoricalData[] | Historical NAV data
tokenPriceHistory(days) | HistoricalData[] | Historical token price data
keyMetrics() | KeyMetrics | Key performance metrics
getPoolStructure() | PoolStructure | Pool structure details
getFees() | PoolFees | Pool fee information
issuer() | IssuerInfo | Pool issuer information
reports(days) | Reports | Pool reports including cashflow
transactions(type?, days?) | Transactions | Pool transactions
assetSummary() | AssetSummary | Summary of pool assets
assets(status?, type?, maturityDate?) | Asset[] | List of pool assets
asset(assetId) | Asset | Single asset details

## Pool Operations

### Invest

```typescript
const result = pool.invest(1000, "controller", "ethereum", web3Provider);
```

Invest in a pool with the specified amount.

### Parameters

Parameter | Type | Description
--------- | ---- | -----------
amount | number | Investment amount
controller | string | Controller address
network | string | Network identifier
web3Provider | any | Web3 provider instance

### Claim Deposit

```typescript
const claim = pool.claimDeposit(1000, "controller", "ethereum", web3Provider);
```

Claim deposited funds from a pool.

### Redeem

```typescript
const redemption = pool.redeem(1000, "controller", "ethereum", web3Provider);
```

Redeem tokens from a pool.

# Assets

## Get Asset Details

```typescript
const asset = pool.asset("asset-id");
```

Get detailed information about a specific asset.

### Asset Methods

Method | Return Type | Description
------ | ----------- | -----------
metrics() | AssetMetrics | Asset metrics including maturity date
pricing() | AssetPricing | Asset pricing information
holdings() | AssetHoldings | Asset holdings details
history(filters?) | TransactionHistory[] | Asset transaction history

# Investor

## Check Whitelist Status

```typescript
const isWhitelisted = centrifuge.investor("address").isWhitelisted("wallet-address");
```

Check if a wallet address is whitelisted.

## Get Investor Position

```typescript
const position = centrifuge.investor("address").position("pool-id");
```

Get investor position in a specific pool.

## Get Transaction History

```typescript
const history = centrifuge.investor("address").transactionHistory(30);
```

Get investor transaction history for the specified number of days.

# Error Handling

The SDK uses standard error handling. All methods may throw exceptions that should be handled appropriately in your application.

```typescript
try {
  const pool = centrifuge.pools("pool-id");
} catch (error) {
  console.error("Error fetching pool:", error);
}
```
