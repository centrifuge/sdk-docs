
## Type: InvestorTransactionsReport

> **InvestorTransactionsReport**: `object`

Defined in: [src/types/reports.ts:139](https://github.com/centrifuge/sdk/blob/fb803645c34c4d8e009e46398bb7c2e3dad2d94f/src/types/reports.ts#L139)

### Type declaration

#### account

> **account**: `string`

#### chainId

> **chainId**: `number` \| `"centrifuge"`

#### currencyAmount

> **currencyAmount**: [`Currency`](#class-currency)

#### epoch

> **epoch**: `string`

#### price

> **price**: [`Price`](#class-price)

#### timestamp

> **timestamp**: `string`

#### trancheTokenAmount

> **trancheTokenAmount**: [`Currency`](#class-currency)

#### trancheTokenId

> **trancheTokenId**: `string`

#### transactionHash

> **transactionHash**: `string`

#### transactionType

> **transactionType**: `SubqueryInvestorTransactionType`

#### type

> **type**: `"investorTransactions"`
