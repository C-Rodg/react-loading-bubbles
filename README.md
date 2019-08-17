# React Loading Bubbles

A loading modal component using React portals.

## Implementation Guide

##### 1. Installation

- Yarn:

  `yarn add react-loading-bubbles`

- NPM:

  `npm install react-loading-bubbles --save`

##### 2. Use

```javascript
import React from 'react';

// Import the component
import LoadingModal from 'react-loading-bubbles';

function MyComponent(props) {
	// Use the component
	return (
		<>
			<p>Loading bubbles!</p>

			{props.isLoading && <LoadingModal size={128} color="#2c7594" />}
		</>
	);
}
```

## API

| Name    | Type     | Default | Description                       |
| :------ | :------- | :------ | :-------------------------------- |
| `size`  | `number` | 128     | Size of the loading SVG.          |
| `color` | `string` | #2c7594 | The color of the loading bubbles. |

## Creator

[Curtis](https://curtisrodgers.com/)
