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

* [getId](README.md#const-getid)

### Functions

* [defaultReject](README.md#defaultreject)
* [defaultResolve](README.md#defaultresolve)

## Type aliases

###  HandlerFunction

Ƭ **HandlerFunction**: *function*

Defined in emitterListener.ts:14

#### Type declaration:

▸ (`this`: [EmitterListener](classes/emitterlistener.md)‹TContext›, `message`: [EmittedMessage](interfaces/emittedmessage.md), `context?`: TContext): *Promise‹void›*

**Parameters:**

Name | Type |
------ | ------ |
`this` | [EmitterListener](classes/emitterlistener.md)‹TContext› |
`message` | [EmittedMessage](interfaces/emittedmessage.md) |
`context?` | TContext |

## Variables

### `Const` getId

• **getId**: *Instance* = hyperid()

Defined in emitterListener.ts:3

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
