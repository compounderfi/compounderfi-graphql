// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Approval extends ethereum.Event {
  get params(): Approval__Params {
    return new Approval__Params(this);
  }
}

export class Approval__Params {
  _event: Approval;

  constructor(event: Approval) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get approved(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class ApprovalForAll extends ethereum.Event {
  get params(): ApprovalForAll__Params {
    return new ApprovalForAll__Params(this);
  }
}

export class ApprovalForAll__Params {
  _event: ApprovalForAll;

  constructor(event: ApprovalForAll) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get operator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get approved(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class Collect extends ethereum.Event {
  get params(): Collect__Params {
    return new Collect__Params(this);
  }
}

export class Collect__Params {
  _event: Collect;

  constructor(event: Collect) {
    this._event = event;
  }

  get tokenId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get recipient(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount0(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get amount1(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class DecreaseLiquidity extends ethereum.Event {
  get params(): DecreaseLiquidity__Params {
    return new DecreaseLiquidity__Params(this);
  }
}

export class DecreaseLiquidity__Params {
  _event: DecreaseLiquidity;

  constructor(event: DecreaseLiquidity) {
    this._event = event;
  }

  get tokenId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get liquidity(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get amount0(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get amount1(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class IncreaseLiquidity extends ethereum.Event {
  get params(): IncreaseLiquidity__Params {
    return new IncreaseLiquidity__Params(this);
  }
}

export class IncreaseLiquidity__Params {
  _event: IncreaseLiquidity;

  constructor(event: IncreaseLiquidity) {
    this._event = event;
  }

  get tokenId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get liquidity(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get amount0(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get amount1(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class Transfer extends ethereum.Event {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class NonFungiblePositionManager__positionsResult {
  value0: BigInt;
  value1: Address;
  value2: Address;
  value3: Address;
  value4: i32;
  value5: i32;
  value6: i32;
  value7: BigInt;
  value8: BigInt;
  value9: BigInt;
  value10: BigInt;
  value11: BigInt;

  constructor(
    value0: BigInt,
    value1: Address,
    value2: Address,
    value3: Address,
    value4: i32,
    value5: i32,
    value6: i32,
    value7: BigInt,
    value8: BigInt,
    value9: BigInt,
    value10: BigInt,
    value11: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
    this.value8 = value8;
    this.value9 = value9;
    this.value10 = value10;
    this.value11 = value11;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromAddress(this.value2));
    map.set("value3", ethereum.Value.fromAddress(this.value3));
    map.set(
      "value4",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value4))
    );
    map.set("value5", ethereum.Value.fromI32(this.value5));
    map.set("value6", ethereum.Value.fromI32(this.value6));
    map.set("value7", ethereum.Value.fromUnsignedBigInt(this.value7));
    map.set("value8", ethereum.Value.fromUnsignedBigInt(this.value8));
    map.set("value9", ethereum.Value.fromUnsignedBigInt(this.value9));
    map.set("value10", ethereum.Value.fromUnsignedBigInt(this.value10));
    map.set("value11", ethereum.Value.fromUnsignedBigInt(this.value11));
    return map;
  }

  getNonce(): BigInt {
    return this.value0;
  }

  getOperator(): Address {
    return this.value1;
  }

  getToken0(): Address {
    return this.value2;
  }

  getToken1(): Address {
    return this.value3;
  }

  getFee(): i32 {
    return this.value4;
  }

  getTickLower(): i32 {
    return this.value5;
  }

  getTickUpper(): i32 {
    return this.value6;
  }

  getLiquidity(): BigInt {
    return this.value7;
  }

  getFeeGrowthInside0LastX128(): BigInt {
    return this.value8;
  }

  getFeeGrowthInside1LastX128(): BigInt {
    return this.value9;
  }

  getTokensOwed0(): BigInt {
    return this.value10;
  }

  getTokensOwed1(): BigInt {
    return this.value11;
  }
}

export class NonFungiblePositionManager extends ethereum.SmartContract {
  static bind(address: Address): NonFungiblePositionManager {
    return new NonFungiblePositionManager(
      "NonFungiblePositionManager",
      address
    );
  }

  DOMAIN_SEPARATOR(): Bytes {
    let result = super.call(
      "DOMAIN_SEPARATOR",
      "DOMAIN_SEPARATOR():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_DOMAIN_SEPARATOR(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "DOMAIN_SEPARATOR",
      "DOMAIN_SEPARATOR():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  PERMIT_TYPEHASH(): Bytes {
    let result = super.call(
      "PERMIT_TYPEHASH",
      "PERMIT_TYPEHASH():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_PERMIT_TYPEHASH(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "PERMIT_TYPEHASH",
      "PERMIT_TYPEHASH():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  WETH9(): Address {
    let result = super.call("WETH9", "WETH9():(address)", []);

    return result[0].toAddress();
  }

  try_WETH9(): ethereum.CallResult<Address> {
    let result = super.tryCall("WETH9", "WETH9():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  balanceOf(owner: Address): BigInt {
    let result = super.call("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(owner)
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf(owner: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(owner)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  baseURI(): string {
    let result = super.call("baseURI", "baseURI():(string)", []);

    return result[0].toString();
  }

  try_baseURI(): ethereum.CallResult<string> {
    let result = super.tryCall("baseURI", "baseURI():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  factory(): Address {
    let result = super.call("factory", "factory():(address)", []);

    return result[0].toAddress();
  }

  try_factory(): ethereum.CallResult<Address> {
    let result = super.tryCall("factory", "factory():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getApproved(tokenId: BigInt): Address {
    let result = super.call("getApproved", "getApproved(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toAddress();
  }

  try_getApproved(tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getApproved",
      "getApproved(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  isApprovedForAll(owner: Address, operator: Address): boolean {
    let result = super.call(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(operator)]
    );

    return result[0].toBoolean();
  }

  try_isApprovedForAll(
    owner: Address,
    operator: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(operator)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  ownerOf(tokenId: BigInt): Address {
    let result = super.call("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toAddress();
  }

  try_ownerOf(tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  positions(tokenId: BigInt): NonFungiblePositionManager__positionsResult {
    let result = super.call(
      "positions",
      "positions(uint256):(uint96,address,address,address,uint24,int24,int24,uint128,uint256,uint256,uint128,uint128)",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );

    return new NonFungiblePositionManager__positionsResult(
      result[0].toBigInt(),
      result[1].toAddress(),
      result[2].toAddress(),
      result[3].toAddress(),
      result[4].toI32(),
      result[5].toI32(),
      result[6].toI32(),
      result[7].toBigInt(),
      result[8].toBigInt(),
      result[9].toBigInt(),
      result[10].toBigInt(),
      result[11].toBigInt()
    );
  }

  try_positions(
    tokenId: BigInt
  ): ethereum.CallResult<NonFungiblePositionManager__positionsResult> {
    let result = super.tryCall(
      "positions",
      "positions(uint256):(uint96,address,address,address,uint24,int24,int24,uint128,uint256,uint256,uint128,uint128)",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new NonFungiblePositionManager__positionsResult(
        value[0].toBigInt(),
        value[1].toAddress(),
        value[2].toAddress(),
        value[3].toAddress(),
        value[4].toI32(),
        value[5].toI32(),
        value[6].toI32(),
        value[7].toBigInt(),
        value[8].toBigInt(),
        value[9].toBigInt(),
        value[10].toBigInt(),
        value[11].toBigInt()
      )
    );
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  symbol(): string {
    let result = super.call("symbol", "symbol():(string)", []);

    return result[0].toString();
  }

  try_symbol(): ethereum.CallResult<string> {
    let result = super.tryCall("symbol", "symbol():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  tokenByIndex(index: BigInt): BigInt {
    let result = super.call("tokenByIndex", "tokenByIndex(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(index)
    ]);

    return result[0].toBigInt();
  }

  try_tokenByIndex(index: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "tokenByIndex",
      "tokenByIndex(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(index)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  tokenOfOwnerByIndex(owner: Address, index: BigInt): BigInt {
    let result = super.call(
      "tokenOfOwnerByIndex",
      "tokenOfOwnerByIndex(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(owner),
        ethereum.Value.fromUnsignedBigInt(index)
      ]
    );

    return result[0].toBigInt();
  }

  try_tokenOfOwnerByIndex(
    owner: Address,
    index: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "tokenOfOwnerByIndex",
      "tokenOfOwnerByIndex(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(owner),
        ethereum.Value.fromUnsignedBigInt(index)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  tokenURI(tokenId: BigInt): string {
    let result = super.call("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toString();
  }

  try_tokenURI(tokenId: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  totalSupply(): BigInt {
    let result = super.call("totalSupply", "totalSupply():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalSupply", "totalSupply():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _factory(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _WETH9(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _tokenDescriptor_(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ApproveCall extends ethereum.Call {
  get inputs(): ApproveCall__Inputs {
    return new ApproveCall__Inputs(this);
  }

  get outputs(): ApproveCall__Outputs {
    return new ApproveCall__Outputs(this);
  }
}

export class ApproveCall__Inputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ApproveCall__Outputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }
}

export class BurnCall extends ethereum.Call {
  get inputs(): BurnCall__Inputs {
    return new BurnCall__Inputs(this);
  }

  get outputs(): BurnCall__Outputs {
    return new BurnCall__Outputs(this);
  }
}

export class BurnCall__Inputs {
  _call: BurnCall;

  constructor(call: BurnCall) {
    this._call = call;
  }

  get tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class BurnCall__Outputs {
  _call: BurnCall;

  constructor(call: BurnCall) {
    this._call = call;
  }
}

export class CollectCall extends ethereum.Call {
  get inputs(): CollectCall__Inputs {
    return new CollectCall__Inputs(this);
  }

  get outputs(): CollectCall__Outputs {
    return new CollectCall__Outputs(this);
  }
}

export class CollectCall__Inputs {
  _call: CollectCall;

  constructor(call: CollectCall) {
    this._call = call;
  }

  get params(): CollectCallParamsStruct {
    return changetype<CollectCallParamsStruct>(
      this._call.inputValues[0].value.toTuple()
    );
  }
}

export class CollectCall__Outputs {
  _call: CollectCall;

  constructor(call: CollectCall) {
    this._call = call;
  }

  get amount0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }

  get amount1(): BigInt {
    return this._call.outputValues[1].value.toBigInt();
  }
}

export class CollectCallParamsStruct extends ethereum.Tuple {
  get tokenId(): BigInt {
    return this[0].toBigInt();
  }

  get recipient(): Address {
    return this[1].toAddress();
  }

  get amount0Max(): BigInt {
    return this[2].toBigInt();
  }

  get amount1Max(): BigInt {
    return this[3].toBigInt();
  }
}

export class CreateAndInitializePoolIfNecessaryCall extends ethereum.Call {
  get inputs(): CreateAndInitializePoolIfNecessaryCall__Inputs {
    return new CreateAndInitializePoolIfNecessaryCall__Inputs(this);
  }

  get outputs(): CreateAndInitializePoolIfNecessaryCall__Outputs {
    return new CreateAndInitializePoolIfNecessaryCall__Outputs(this);
  }
}

export class CreateAndInitializePoolIfNecessaryCall__Inputs {
  _call: CreateAndInitializePoolIfNecessaryCall;

  constructor(call: CreateAndInitializePoolIfNecessaryCall) {
    this._call = call;
  }

  get token0(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get token1(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get fee(): i32 {
    return this._call.inputValues[2].value.toI32();
  }

  get sqrtPriceX96(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class CreateAndInitializePoolIfNecessaryCall__Outputs {
  _call: CreateAndInitializePoolIfNecessaryCall;

  constructor(call: CreateAndInitializePoolIfNecessaryCall) {
    this._call = call;
  }

  get pool(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class DecreaseLiquidityCall extends ethereum.Call {
  get inputs(): DecreaseLiquidityCall__Inputs {
    return new DecreaseLiquidityCall__Inputs(this);
  }

  get outputs(): DecreaseLiquidityCall__Outputs {
    return new DecreaseLiquidityCall__Outputs(this);
  }
}

export class DecreaseLiquidityCall__Inputs {
  _call: DecreaseLiquidityCall;

  constructor(call: DecreaseLiquidityCall) {
    this._call = call;
  }

  get params(): DecreaseLiquidityCallParamsStruct {
    return changetype<DecreaseLiquidityCallParamsStruct>(
      this._call.inputValues[0].value.toTuple()
    );
  }
}

export class DecreaseLiquidityCall__Outputs {
  _call: DecreaseLiquidityCall;

  constructor(call: DecreaseLiquidityCall) {
    this._call = call;
  }

  get amount0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }

  get amount1(): BigInt {
    return this._call.outputValues[1].value.toBigInt();
  }
}

export class DecreaseLiquidityCallParamsStruct extends ethereum.Tuple {
  get tokenId(): BigInt {
    return this[0].toBigInt();
  }

  get liquidity(): BigInt {
    return this[1].toBigInt();
  }

  get amount0Min(): BigInt {
    return this[2].toBigInt();
  }

  get amount1Min(): BigInt {
    return this[3].toBigInt();
  }

  get deadline(): BigInt {
    return this[4].toBigInt();
  }
}

export class IncreaseLiquidityCall extends ethereum.Call {
  get inputs(): IncreaseLiquidityCall__Inputs {
    return new IncreaseLiquidityCall__Inputs(this);
  }

  get outputs(): IncreaseLiquidityCall__Outputs {
    return new IncreaseLiquidityCall__Outputs(this);
  }
}

export class IncreaseLiquidityCall__Inputs {
  _call: IncreaseLiquidityCall;

  constructor(call: IncreaseLiquidityCall) {
    this._call = call;
  }

  get params(): IncreaseLiquidityCallParamsStruct {
    return changetype<IncreaseLiquidityCallParamsStruct>(
      this._call.inputValues[0].value.toTuple()
    );
  }
}

export class IncreaseLiquidityCall__Outputs {
  _call: IncreaseLiquidityCall;

  constructor(call: IncreaseLiquidityCall) {
    this._call = call;
  }

  get liquidity(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }

  get amount0(): BigInt {
    return this._call.outputValues[1].value.toBigInt();
  }

  get amount1(): BigInt {
    return this._call.outputValues[2].value.toBigInt();
  }
}

export class IncreaseLiquidityCallParamsStruct extends ethereum.Tuple {
  get tokenId(): BigInt {
    return this[0].toBigInt();
  }

  get amount0Desired(): BigInt {
    return this[1].toBigInt();
  }

  get amount1Desired(): BigInt {
    return this[2].toBigInt();
  }

  get amount0Min(): BigInt {
    return this[3].toBigInt();
  }

  get amount1Min(): BigInt {
    return this[4].toBigInt();
  }

  get deadline(): BigInt {
    return this[5].toBigInt();
  }
}

export class MintCall extends ethereum.Call {
  get inputs(): MintCall__Inputs {
    return new MintCall__Inputs(this);
  }

  get outputs(): MintCall__Outputs {
    return new MintCall__Outputs(this);
  }
}

export class MintCall__Inputs {
  _call: MintCall;

  constructor(call: MintCall) {
    this._call = call;
  }

  get params(): MintCallParamsStruct {
    return changetype<MintCallParamsStruct>(
      this._call.inputValues[0].value.toTuple()
    );
  }
}

export class MintCall__Outputs {
  _call: MintCall;

  constructor(call: MintCall) {
    this._call = call;
  }

  get tokenId(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }

  get liquidity(): BigInt {
    return this._call.outputValues[1].value.toBigInt();
  }

  get amount0(): BigInt {
    return this._call.outputValues[2].value.toBigInt();
  }

  get amount1(): BigInt {
    return this._call.outputValues[3].value.toBigInt();
  }
}

export class MintCallParamsStruct extends ethereum.Tuple {
  get token0(): Address {
    return this[0].toAddress();
  }

  get token1(): Address {
    return this[1].toAddress();
  }

  get fee(): i32 {
    return this[2].toI32();
  }

  get tickLower(): i32 {
    return this[3].toI32();
  }

  get tickUpper(): i32 {
    return this[4].toI32();
  }

  get amount0Desired(): BigInt {
    return this[5].toBigInt();
  }

  get amount1Desired(): BigInt {
    return this[6].toBigInt();
  }

  get amount0Min(): BigInt {
    return this[7].toBigInt();
  }

  get amount1Min(): BigInt {
    return this[8].toBigInt();
  }

  get recipient(): Address {
    return this[9].toAddress();
  }

  get deadline(): BigInt {
    return this[10].toBigInt();
  }
}

export class MulticallCall extends ethereum.Call {
  get inputs(): MulticallCall__Inputs {
    return new MulticallCall__Inputs(this);
  }

  get outputs(): MulticallCall__Outputs {
    return new MulticallCall__Outputs(this);
  }
}

export class MulticallCall__Inputs {
  _call: MulticallCall;

  constructor(call: MulticallCall) {
    this._call = call;
  }

  get data(): Array<Bytes> {
    return this._call.inputValues[0].value.toBytesArray();
  }
}

export class MulticallCall__Outputs {
  _call: MulticallCall;

  constructor(call: MulticallCall) {
    this._call = call;
  }

  get results(): Array<Bytes> {
    return this._call.outputValues[0].value.toBytesArray();
  }
}

export class PermitCall extends ethereum.Call {
  get inputs(): PermitCall__Inputs {
    return new PermitCall__Inputs(this);
  }

  get outputs(): PermitCall__Outputs {
    return new PermitCall__Outputs(this);
  }
}

export class PermitCall__Inputs {
  _call: PermitCall;

  constructor(call: PermitCall) {
    this._call = call;
  }

  get spender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get deadline(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get v(): i32 {
    return this._call.inputValues[3].value.toI32();
  }

  get r(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }

  get s(): Bytes {
    return this._call.inputValues[5].value.toBytes();
  }
}

export class PermitCall__Outputs {
  _call: PermitCall;

  constructor(call: PermitCall) {
    this._call = call;
  }
}

export class RefundETHCall extends ethereum.Call {
  get inputs(): RefundETHCall__Inputs {
    return new RefundETHCall__Inputs(this);
  }

  get outputs(): RefundETHCall__Outputs {
    return new RefundETHCall__Outputs(this);
  }
}

export class RefundETHCall__Inputs {
  _call: RefundETHCall;

  constructor(call: RefundETHCall) {
    this._call = call;
  }
}

export class RefundETHCall__Outputs {
  _call: RefundETHCall;

  constructor(call: RefundETHCall) {
    this._call = call;
  }
}

export class SafeTransferFromCall extends ethereum.Call {
  get inputs(): SafeTransferFromCall__Inputs {
    return new SafeTransferFromCall__Inputs(this);
  }

  get outputs(): SafeTransferFromCall__Outputs {
    return new SafeTransferFromCall__Outputs(this);
  }
}

export class SafeTransferFromCall__Inputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class SafeTransferFromCall__Outputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }
}

export class SafeTransferFrom1Call extends ethereum.Call {
  get inputs(): SafeTransferFrom1Call__Inputs {
    return new SafeTransferFrom1Call__Inputs(this);
  }

  get outputs(): SafeTransferFrom1Call__Outputs {
    return new SafeTransferFrom1Call__Outputs(this);
  }
}

export class SafeTransferFrom1Call__Inputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _data(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class SafeTransferFrom1Call__Outputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }
}

export class SelfPermitCall extends ethereum.Call {
  get inputs(): SelfPermitCall__Inputs {
    return new SelfPermitCall__Inputs(this);
  }

  get outputs(): SelfPermitCall__Outputs {
    return new SelfPermitCall__Outputs(this);
  }
}

export class SelfPermitCall__Inputs {
  _call: SelfPermitCall;

  constructor(call: SelfPermitCall) {
    this._call = call;
  }

  get token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get value(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get deadline(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get v(): i32 {
    return this._call.inputValues[3].value.toI32();
  }

  get r(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }

  get s(): Bytes {
    return this._call.inputValues[5].value.toBytes();
  }
}

export class SelfPermitCall__Outputs {
  _call: SelfPermitCall;

  constructor(call: SelfPermitCall) {
    this._call = call;
  }
}

export class SelfPermitAllowedCall extends ethereum.Call {
  get inputs(): SelfPermitAllowedCall__Inputs {
    return new SelfPermitAllowedCall__Inputs(this);
  }

  get outputs(): SelfPermitAllowedCall__Outputs {
    return new SelfPermitAllowedCall__Outputs(this);
  }
}

export class SelfPermitAllowedCall__Inputs {
  _call: SelfPermitAllowedCall;

  constructor(call: SelfPermitAllowedCall) {
    this._call = call;
  }

  get token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get nonce(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get expiry(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get v(): i32 {
    return this._call.inputValues[3].value.toI32();
  }

  get r(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }

  get s(): Bytes {
    return this._call.inputValues[5].value.toBytes();
  }
}

export class SelfPermitAllowedCall__Outputs {
  _call: SelfPermitAllowedCall;

  constructor(call: SelfPermitAllowedCall) {
    this._call = call;
  }
}

export class SelfPermitAllowedIfNecessaryCall extends ethereum.Call {
  get inputs(): SelfPermitAllowedIfNecessaryCall__Inputs {
    return new SelfPermitAllowedIfNecessaryCall__Inputs(this);
  }

  get outputs(): SelfPermitAllowedIfNecessaryCall__Outputs {
    return new SelfPermitAllowedIfNecessaryCall__Outputs(this);
  }
}

export class SelfPermitAllowedIfNecessaryCall__Inputs {
  _call: SelfPermitAllowedIfNecessaryCall;

  constructor(call: SelfPermitAllowedIfNecessaryCall) {
    this._call = call;
  }

  get token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get nonce(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get expiry(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get v(): i32 {
    return this._call.inputValues[3].value.toI32();
  }

  get r(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }

  get s(): Bytes {
    return this._call.inputValues[5].value.toBytes();
  }
}

export class SelfPermitAllowedIfNecessaryCall__Outputs {
  _call: SelfPermitAllowedIfNecessaryCall;

  constructor(call: SelfPermitAllowedIfNecessaryCall) {
    this._call = call;
  }
}

export class SelfPermitIfNecessaryCall extends ethereum.Call {
  get inputs(): SelfPermitIfNecessaryCall__Inputs {
    return new SelfPermitIfNecessaryCall__Inputs(this);
  }

  get outputs(): SelfPermitIfNecessaryCall__Outputs {
    return new SelfPermitIfNecessaryCall__Outputs(this);
  }
}

export class SelfPermitIfNecessaryCall__Inputs {
  _call: SelfPermitIfNecessaryCall;

  constructor(call: SelfPermitIfNecessaryCall) {
    this._call = call;
  }

  get token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get value(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get deadline(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get v(): i32 {
    return this._call.inputValues[3].value.toI32();
  }

  get r(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }

  get s(): Bytes {
    return this._call.inputValues[5].value.toBytes();
  }
}

export class SelfPermitIfNecessaryCall__Outputs {
  _call: SelfPermitIfNecessaryCall;

  constructor(call: SelfPermitIfNecessaryCall) {
    this._call = call;
  }
}

export class SetApprovalForAllCall extends ethereum.Call {
  get inputs(): SetApprovalForAllCall__Inputs {
    return new SetApprovalForAllCall__Inputs(this);
  }

  get outputs(): SetApprovalForAllCall__Outputs {
    return new SetApprovalForAllCall__Outputs(this);
  }
}

export class SetApprovalForAllCall__Inputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }

  get operator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get approved(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetApprovalForAllCall__Outputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }
}

export class SweepTokenCall extends ethereum.Call {
  get inputs(): SweepTokenCall__Inputs {
    return new SweepTokenCall__Inputs(this);
  }

  get outputs(): SweepTokenCall__Outputs {
    return new SweepTokenCall__Outputs(this);
  }
}

export class SweepTokenCall__Inputs {
  _call: SweepTokenCall;

  constructor(call: SweepTokenCall) {
    this._call = call;
  }

  get token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amountMinimum(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get recipient(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class SweepTokenCall__Outputs {
  _call: SweepTokenCall;

  constructor(call: SweepTokenCall) {
    this._call = call;
  }
}

export class TransferFromCall extends ethereum.Call {
  get inputs(): TransferFromCall__Inputs {
    return new TransferFromCall__Inputs(this);
  }

  get outputs(): TransferFromCall__Outputs {
    return new TransferFromCall__Outputs(this);
  }
}

export class TransferFromCall__Inputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferFromCall__Outputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }
}

export class UniswapV3MintCallbackCall extends ethereum.Call {
  get inputs(): UniswapV3MintCallbackCall__Inputs {
    return new UniswapV3MintCallbackCall__Inputs(this);
  }

  get outputs(): UniswapV3MintCallbackCall__Outputs {
    return new UniswapV3MintCallbackCall__Outputs(this);
  }
}

export class UniswapV3MintCallbackCall__Inputs {
  _call: UniswapV3MintCallbackCall;

  constructor(call: UniswapV3MintCallbackCall) {
    this._call = call;
  }

  get amount0Owed(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get amount1Owed(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get data(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class UniswapV3MintCallbackCall__Outputs {
  _call: UniswapV3MintCallbackCall;

  constructor(call: UniswapV3MintCallbackCall) {
    this._call = call;
  }
}

export class UnwrapWETH9Call extends ethereum.Call {
  get inputs(): UnwrapWETH9Call__Inputs {
    return new UnwrapWETH9Call__Inputs(this);
  }

  get outputs(): UnwrapWETH9Call__Outputs {
    return new UnwrapWETH9Call__Outputs(this);
  }
}

export class UnwrapWETH9Call__Inputs {
  _call: UnwrapWETH9Call;

  constructor(call: UnwrapWETH9Call) {
    this._call = call;
  }

  get amountMinimum(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get recipient(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class UnwrapWETH9Call__Outputs {
  _call: UnwrapWETH9Call;

  constructor(call: UnwrapWETH9Call) {
    this._call = call;
  }
}
