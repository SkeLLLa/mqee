[mqee](README.md)

# mqee

## Index

### Classes

* [Emitter](classes/emitter.md)
* [EmitterListener](classes/emitterlistener.md)

### Interfaces

* [ConstructorOptions](interfaces/constructoroptions.md)
* [EmitMessage](interfaces/emitmessage.md)
* [EmittedMessage](interfaces/emittedmessage.md)
* [Iterator](interfaces/iterator.md)
* [IteratorEmittedMessage](interfaces/iteratoremittedmessage.md)
* [IteratorResult](interfaces/iteratorresult.md)

### Type aliases

* [HandlerFunction](README.md#handlerfunction)

### Variables

* [PREFIX](README.md#const-prefix)

### Functions

* [defaultReject](README.md#defaultreject)
* [defaultResolve](README.md#defaultresolve)
* [generateId](README.md#generateid)
* [isValid](README.md#isvalid)

## Type aliases

###  HandlerFunction

Ƭ **HandlerFunction**: *function*

Defined in emitterListener.ts:12

#### Type declaration:

▸ (`this`: [EmitterListener](classes/emitterlistener.md)‹TContext›, `message`: [EmittedMessage](interfaces/emittedmessage.md), `context?`: TContext): *Promise‹void›*

**Parameters:**

Name | Type |
------ | ------ |
`this` | [EmitterListener](classes/emitterlistener.md)‹TContext› |
`message` | [EmittedMessage](interfaces/emittedmessage.md) |
`context?` | TContext |

## Variables

### `Const` PREFIX

• **PREFIX**: *"__mqee__"* = "__mqee__"

Defined in idGenerator.ts:3

## Functions

###  defaultReject

▸ **defaultReject**(): *boolean*

Defined in index.ts:8

**Returns:** *boolean*

___

###  defaultResolve

▸ **defaultResolve**(): *boolean*

Defined in index.ts:4

**Returns:** *boolean*

___

###  generateId

▸ **generateId**(): *string*

Defined in idGenerator.ts:5

**Returns:** *string*

___

###  isValid

▸ **isValid**(`id`: string): *boolean*

Defined in idGenerator.ts:9

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |

**Returns:** *boolean*
