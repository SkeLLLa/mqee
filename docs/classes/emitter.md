[mqee](../README.md) › [Emitter](emitter.md)

# Class: Emitter

## Hierarchy

* **Emitter**

## Index

### Constructors

* [constructor](emitter.md#constructor)

### Methods

* [addListener](emitter.md#addlistener)
* [emit](emitter.md#emit)
* [hasListener](emitter.md#haslistener)
* [off](emitter.md#off)
* [on](emitter.md#on)
* [once](emitter.md#once)
* [removeAllListeners](emitter.md#removealllisteners)
* [removeListener](emitter.md#removelistener)

## Constructors

###  constructor

\+ **new Emitter**(`__namedParameters`: object): *[Emitter](emitter.md)*

Defined in index.ts:38

**Parameters:**

▪`Default value`  **__namedParameters**: *object*= {}

Name | Type | Default |
------ | ------ | ------ |
`cacheAdds` | boolean | true |
`concurrency` | number | Infinity |
`separator` | string | "/" |
`wildcardOne` | string | "+" |
`wildcardSome` | string | "#" |

**Returns:** *[Emitter](emitter.md)*

## Methods

###  addListener

▸ **addListener**<**TContext**>(`topic`: string, `handler`: [HandlerFunction](../README.md#handlerfunction)‹TContext›, `context?`: TContext, `once`: boolean): *[EmitterListener](emitterlistener.md)*

Defined in index.ts:92

**Type parameters:**

▪ **TContext**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`topic` | string | - |
`handler` | [HandlerFunction](../README.md#handlerfunction)‹TContext› | - |
`context?` | TContext | - |
`once` | boolean | false |

**Returns:** *[EmitterListener](emitterlistener.md)*

___

###  emit

▸ **emit**(`options`: [EmitMessage](../interfaces/emitmessage.md)): *Promise‹void›*

Defined in index.ts:65

**Parameters:**

Name | Type |
------ | ------ |
`options` | [EmitMessage](../interfaces/emitmessage.md) |

**Returns:** *Promise‹void›*

___

###  hasListener

▸ **hasListener**<**TContext**>(`listenerId`: string): *boolean*

Defined in index.ts:104

**Type parameters:**

▪ **TContext**

**Parameters:**

Name | Type |
------ | ------ |
`listenerId` | string |

**Returns:** *boolean*

▸ **hasListener**<**TContext**>(`listener`: [EmitterListener](emitterlistener.md)): *boolean*

Defined in index.ts:105

**Type parameters:**

▪ **TContext**

**Parameters:**

Name | Type |
------ | ------ |
`listener` | [EmitterListener](emitterlistener.md) |

**Returns:** *boolean*

▸ **hasListener**<**TContext**>(`topic`: string, `handler`: [HandlerFunction](../README.md#handlerfunction)‹TContext›): *boolean*

Defined in index.ts:106

**Type parameters:**

▪ **TContext**

**Parameters:**

Name | Type |
------ | ------ |
`topic` | string |
`handler` | [HandlerFunction](../README.md#handlerfunction)‹TContext› |

**Returns:** *boolean*

▸ **hasListener**<**TContext**>(`topic`: string, `handler`: [HandlerFunction](../README.md#handlerfunction)‹TContext›, `context`: TContext): *boolean*

Defined in index.ts:107

**Type parameters:**

▪ **TContext**

**Parameters:**

Name | Type |
------ | ------ |
`topic` | string |
`handler` | [HandlerFunction](../README.md#handlerfunction)‹TContext› |
`context` | TContext |

**Returns:** *boolean*

___

###  off

▸ **off**<**TContext**>(`topic`: string, `handler`: [HandlerFunction](../README.md#handlerfunction)‹TContext›): *void*

Defined in index.ts:184

**Type parameters:**

▪ **TContext**

**Parameters:**

Name | Type |
------ | ------ |
`topic` | string |
`handler` | [HandlerFunction](../README.md#handlerfunction)‹TContext› |

**Returns:** *void*

▸ **off**<**TContext**>(`topic`: string, `handler`: [HandlerFunction](../README.md#handlerfunction)‹TContext›, `context`: TContext): *void*

Defined in index.ts:185

**Type parameters:**

▪ **TContext**

**Parameters:**

Name | Type |
------ | ------ |
`topic` | string |
`handler` | [HandlerFunction](../README.md#handlerfunction)‹TContext› |
`context` | TContext |

**Returns:** *void*

___

###  on

▸ **on**<**TContext**>(`topic`: string, `handler`: [HandlerFunction](../README.md#handlerfunction)‹TContext›, `context?`: TContext): *[EmitterListener](emitterlistener.md)*

Defined in index.ts:168

**Type parameters:**

▪ **TContext**

**Parameters:**

Name | Type |
------ | ------ |
`topic` | string |
`handler` | [HandlerFunction](../README.md#handlerfunction)‹TContext› |
`context?` | TContext |

**Returns:** *[EmitterListener](emitterlistener.md)*

___

###  once

▸ **once**<**TContext**>(`topic`: string, `handler`: [HandlerFunction](../README.md#handlerfunction)‹TContext›, `context?`: TContext): *[EmitterListener](emitterlistener.md)*

Defined in index.ts:176

**Type parameters:**

▪ **TContext**

**Parameters:**

Name | Type |
------ | ------ |
`topic` | string |
`handler` | [HandlerFunction](../README.md#handlerfunction)‹TContext› |
`context?` | TContext |

**Returns:** *[EmitterListener](emitterlistener.md)*

___

###  removeAllListeners

▸ **removeAllListeners**(`topic`: string): *void*

Defined in index.ts:159

**Parameters:**

Name | Type |
------ | ------ |
`topic` | string |

**Returns:** *void*

___

###  removeListener

▸ **removeListener**<**TContext**>(`listenerId`: string): *void*

Defined in index.ts:131

**Type parameters:**

▪ **TContext**

**Parameters:**

Name | Type |
------ | ------ |
`listenerId` | string |

**Returns:** *void*

▸ **removeListener**<**TContext**>(`listener`: [EmitterListener](emitterlistener.md)): *void*

Defined in index.ts:132

**Type parameters:**

▪ **TContext**

**Parameters:**

Name | Type |
------ | ------ |
`listener` | [EmitterListener](emitterlistener.md) |

**Returns:** *void*

▸ **removeListener**<**TContext**>(`topic`: string, `handler`: [HandlerFunction](../README.md#handlerfunction)‹TContext›): *void*

Defined in index.ts:133

**Type parameters:**

▪ **TContext**

**Parameters:**

Name | Type |
------ | ------ |
`topic` | string |
`handler` | [HandlerFunction](../README.md#handlerfunction)‹TContext› |

**Returns:** *void*

▸ **removeListener**<**TContext**>(`topic`: string, `handler`: [HandlerFunction](../README.md#handlerfunction)‹TContext›, `context`: TContext): *void*

Defined in index.ts:134

**Type parameters:**

▪ **TContext**

**Parameters:**

Name | Type |
------ | ------ |
`topic` | string |
`handler` | [HandlerFunction](../README.md#handlerfunction)‹TContext› |
`context` | TContext |

**Returns:** *void*
