
## Type: AssetTransactionReport

> **AssetTransactionReport**: `object`

Defined in: [src/types/reports.ts:169](https://github.com/centrifuge/sdk/blob/fb803645c34c4d8e009e46398bb7c2e3dad2d94f/src/types/reports.ts#L169)

### Type declaration

#### amount

> **amount**: [`Currency`](#class-currency)

#### assetId

> **assetId**: `string`

#### epoch

> **epoch**: `string`

#### fromAsset?

> `optional` **fromAsset**: `object`

##### fromAsset.id

> **id**: `string`

##### fromAsset.name

> **name**: `string`

#### interestAmount

> **interestAmount**: [`Currency`](#class-currency) \| `null`

#### name

> **name**: `string`

#### principalAmount

> **principalAmount**: [`Currency`](#class-currency) \| `null`

#### timestamp

> **timestamp**: `string`

#### toAsset?

> `optional` **toAsset**: `object`

##### toAsset.id

> **id**: `string`

##### toAsset.name

> **name**: `string`

#### transactionHash

> **transactionHash**: `string`

#### transactionType

> **transactionType**: `AssetTransactionType`

#### type

> **type**: `"assetTransactions"`
