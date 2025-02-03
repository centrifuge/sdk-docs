
## Type: InvestorListReport

> **InvestorListReport**: `object`

Defined in: [src/types/reports.ts:306](https://github.com/centrifuge/sdk/blob/fb803645c34c4d8e009e46398bb7c2e3dad2d94f/src/types/reports.ts#L306)

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

#### trancheId

> **trancheId**: `string`

#### type

> **type**: `"investorList"`
