
## Type: InvestorListReport

> **InvestorListReport**: `object`

Defined in: [src/types/reports.ts:279](https://github.com/centrifuge/sdk/blob/89e29cfd91c249c6d0dc7754dc9ba4bee482214a/src/types/reports.ts#L279)

### Type declaration

#### accountId

> **accountId**: `string`

#### chainId

> **chainId**: `number` \| `"centrifuge"` \| `"all"`

#### evmAddress?

> `optional` **evmAddress**: `string`

#### pendingInvest

> **pendingInvest**: [`Currency`](#class-currency)

#### pendingRedeem

> **pendingRedeem**: [`Currency`](#class-currency)

#### poolPercentage

> **poolPercentage**: [`Rate`](#class-rate)

#### position

> **position**: [`Currency`](#class-currency)

#### type

> **type**: `"investorList"`
