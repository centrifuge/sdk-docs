---
title: Centrifuge SDK Documentation
language_tabs:
  - typescript
toc_footers:
  - <a href='#'>Sign Up for API Keys</a>
includes:
  - pools
  - reports
  - bigint-wrappers
search: true
---

# Welcome

Welcome to the Centrifuge SDK documentation. The Centrifuge SDK is a JavaScript client for interacting with the [Centrifuge](https://centrifuge.io) ecosystem. It provides a comprehensive, fully typed library to integrate investments and redemptions, generate financial reports, manage pools, and much more.

# Installation

```bash
npm install @centrifuge/sdk viem

# or

yarn add @centrifuge/sdk viem
```

The SDK is available as an npm package. It it is built to run both client-side and server-side. The SDK uses [viem](https://viem.sh/) under the hood and is required as a peer dependency.

# Initialization

```typescript
import { Centrifuge } from "@centrifuge/sdk";

const centrifuge = new Centrifuge();
```

The SDK can be initialized with or without a config object. If no config is provided, the SDK will use the default values.

## Config

```typescript
type Config = {
  environment: "mainnet" | "demo" | "dev";
  rpcUrls?: Record<number | string, string>;
  indexerUrl: string;
  ipfsUrl: string;
};
```

### Mainnet

```typescript
const centrifuge = new Centrifuge({
  environment: "mainnet",
  rpcUrls: {
    1: "https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID",
  },
  indexerUrl: "https://indexer.centrifuge.io",
  ipfsUrl: "https://ipfs.centrifuge.io",
});
```

Mainnet is the default environment if no config is provided. Any configurations can be overridden in the config object.

### Demo

```typescript
const centrifuge = new Centrifuge({
  environment: "demo",
});
```

By setting the environment to `demo`, the SDK will connect to Sepolia testnet.

# SDK Overview

The Centrifuge SDK provides the following interfaces (more will be added soon):

- Pools
- Reports
- Account

## Queries

```ts
try {
  const pool = await centrifuge.pools();
} catch (error) {
  console.error(error);
}
```

```js
const subscription = centrifuge.pools().subscribe(
  (pool) => console.log(pool),
  (error) => console.error(error)
);
subscription.unsubscribe();
```

Queries return Promise-like [Observables](https://rxjs.dev/guide/observable). They can be either awaited to get a single value, or subscribed to to get fresh data whenever on-chain data changes.

The returned results are either immutable values, or entities that can be further queried.

## Transactions

```js
centrifuge.setSigner(signer);
```

To perform transactions, you need to set a signer on the `centrifuge` instance.

```ts
const pool = await centrifuge.pool("1");
try {
  const status = await pool.closeEpoch();
  console.log(status);
} catch (error) {
  console.error(error);
}
```

```js
const pool = await centrifuge.pool("1");
const subscription = pool.closeEpoch().subscribe(
  (status) => console.log(pool),
  (error) => console.error(error),
  () => console.log("complete")
);
```

`signer` can be a [EIP1193](https://eips.ethereum.org/EIPS/eip-1193)-compatible provider or a Viem [LocalAccount](https://viem.sh/docs/accounts/local).

With this you can call transaction methods. Similar to queries they can be awaited to get their final result, or subscribed to get get status updates.

<!--  ## Get All Pools

```typescript
const pools = centrifuge.getAllPools(true);
```

Returns an array of all active pools when `activeOnly` is set to true.

### Parameters

| Parameter  | Type    | Description                  |
| ---------- | ------- | ---------------------------- |
| activeOnly | boolean | Filter for active pools only |

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

| Parameter | Type   | Description                   |
| --------- | ------ | ----------------------------- |
| poolId    | string | Unique identifier of the pool |

### Pool Methods

| Method                                | Return Type      | Description                     |
| ------------------------------------- | ---------------- | ------------------------------- |
| nav()                                 | number           | Current NAV of the pool         |
| tokenInfo()                           | TokenInfo        | Current token price and APY     |
| navHistory(days)                      | HistoricalData[] | Historical NAV data             |
| tokenPriceHistory(days)               | HistoricalData[] | Historical token price data     |
| keyMetrics()                          | KeyMetrics       | Key performance metrics         |
| getPoolStructure()                    | PoolStructure    | Pool structure details          |
| getFees()                             | PoolFees         | Pool fee information            |
| issuer()                              | IssuerInfo       | Pool issuer information         |
| reports(days)                         | Reports          | Pool reports including cashflow |
| transactions(type?, days?)            | Transactions     | Pool transactions               |
| assetSummary()                        | AssetSummary     | Summary of pool assets          |
| assets(status?, type?, maturityDate?) | Asset[]          | List of pool assets             |
| asset(assetId)                        | Asset            | Single asset details            |

## Pool Operations

### Invest

```typescript
const result = pool.invest(1000, "controller", "ethereum", web3Provider);
```

Invest in a pool with the specified amount.

### Parameters

| Parameter    | Type   | Description            |
| ------------ | ------ | ---------------------- |
| amount       | number | Investment amount      |
| controller   | string | Controller address     |
| network      | string | Network identifier     |
| web3Provider | any    | Web3 provider instance |

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

| Method            | Return Type          | Description                           |
| ----------------- | -------------------- | ------------------------------------- |
| metrics()         | AssetMetrics         | Asset metrics including maturity date |
| pricing()         | AssetPricing         | Asset pricing information             |
| holdings()        | AssetHoldings        | Asset holdings details                |
| history(filters?) | TransactionHistory[] | Asset transaction history             |

# Investor

## Check Whitelist Status

```typescript
const isWhitelisted = centrifuge
  .investor("address")
  .isWhitelisted("wallet-address");
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
``` -->
