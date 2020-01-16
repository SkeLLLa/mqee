[mqee](../README.md) › [EmitterListener](emitterlistener.md)

# Class: EmitterListener <**TContext**>

## Type parameters

▪ **TContext**

## Hierarchy

* **EmitterListener**

## Index

### Constructors

* [constructor](emitterlistener.md#constructor)

### Accessors

* [context](emitterlistener.md#context)
* [fn](emitterlistener.md#fn)
* [id](emitterlistener.md#id)
* [once](emitterlistener.md#once)
* [topic](emitterlistener.md#topic)

### Methods

* [isValid](emitterlistener.md#static-isvalid)

## Constructors

###  constructor

\+ **new EmitterListener**(`topic`: string, `fn`: [HandlerFunction](../README.md#handlerfunction)‹TContext›, `context`: TContext, `once`: boolean): *[EmitterListener](emitterlistener.md)*

Defined in emitterListener.ts:24

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`topic` | string | - |
`fn` | [HandlerFunction](../README.md#handlerfunction)‹TContext› | - |
`context` | TContext | - |
`once` | boolean | false |

**Returns:** *[EmitterListener](emitterlistener.md)*

## Accessors

###  context

• **get context**(): *any*

Defined in emitterListener.ts:46

**Returns:** *any*

___

###  fn

• **get fn**(): *[HandlerFunction](../README.md#handlerfunction)‹TContext›*

Defined in emitterListener.ts:42

**Returns:** *[HandlerFunction](../README.md#handlerfunction)‹TContext›*

___

###  id

• **get id**(): *string*

Defined in emitterListener.ts:38

**Returns:** *string*

___

###  once

• **get once**(): *boolean*

Defined in emitterListener.ts:50

**Returns:** *boolean*

___

###  topic

• **get topic**(): *string*

Defined in emitterListener.ts:54

**Returns:** *string*

## Methods

### `Static` isValid

▸ **isValid**(`id`: string): *boolean*

Defined in emitterListener.ts:34

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |

**Returns:** *boolean*
