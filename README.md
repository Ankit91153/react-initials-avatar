# React Initials Avatar

A lightweight, customizable React component for generating beautiful initials-based avatars. Perfect for user profiles, contact lists, and any application that needs elegant placeholder avatars.

## Features

- 🎨 Fully customizable colors, sizes, and styles
- 🔤 Smart initials extraction from names
- 📦 Zero dependencies (except React)
- 🎯 TypeScript support
- ⚡ Lightweight and performant
- 🎭 Flexible styling options

## Installation

```bash
npm install react-initials-avatar
```

or

```bash
yarn add react-initials-avatar
```

or

```bash
pnpm add react-initials-avatar
```

## Basic Usage

```jsx
import { InitialsAvatar } from 'react-initials-avatar';

function App() {
  return (
    <InitialsAvatar name="John Doe" />
  );
}
```

## Props

### Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `string` | **required** | The full name to extract initials from |
| `styles` | `StyleProps` | `{}` | Styling configuration object |
| `options` | `InitialOptions` | `{}` | Options for initials extraction |

### StyleProps

Configure the visual appearance of the avatar:

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `size` | `number` | `50` | Avatar size in pixels (width and height) |
| `radius` | `number \| string` | `"50%"` | Border radius (use "50%" for circle, number for rounded square) |
| `bgColor` | `string` | `"#4f46e5"` | Background color (any valid CSS color) |
| `textColor` | `string` | `"#ffffff"` | Text color for initials |
| `fontFamily` | `string` | `"inherit"` | Font family for the initials |
| `fontSize` | `number` | `size * 0.4` | Font size in pixels (auto-calculated if not provided) |
| `fontWeight` | `number \| string` | `600` | Font weight (100-900 or CSS keywords) |
| `lineHeight` | `number \| string` | `size + "px"` | Line height for vertical centering |
| `letterSpacing` | `number \| string` | `0` | Letter spacing in pixels or CSS units |

### InitialOptions

Control how initials are extracted from names:

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `maxLength` | `number` | `Infinity` | Maximum number of initials to display |
| `uppercase` | `boolean` | `true` | Convert initials to uppercase |
| `fallback` | `string` | `""` | Fallback text when name is empty or invalid |

## Examples

### Basic Avatar

```jsx
<InitialsAvatar name="John Doe" />
```

### Custom Size and Colors

```jsx
<InitialsAvatar 
  name="Jane Smith"
  styles={{
    size: 80,
    bgColor: "#10b981",
    textColor: "#ffffff"
  }}
/>
```

### Square Avatar with Rounded Corners

```jsx
<InitialsAvatar 
  name="Alice Johnson"
  styles={{
    size: 60,
    radius: 8,
    bgColor: "#f59e0b"
  }}
/>
```

### Custom Font Styling

```jsx
<InitialsAvatar 
  name="Bob Wilson"
  styles={{
    size: 100,
    fontFamily: "Arial, sans-serif",
    fontSize: 45,
    fontWeight: 700,
    letterSpacing: 2
  }}
/>
```

### Limit Initials Length

```jsx
<InitialsAvatar 
  name="Christopher Alexander Montgomery"
  options={{
    maxLength: 2  // Will show "CA" instead of "CAM"
  }}
/>
```

### Lowercase Initials

```jsx
<InitialsAvatar 
  name="David Brown"
  options={{
    uppercase: false
  }}
/>
```

### With Fallback

```jsx
<InitialsAvatar 
  name=""
  options={{
    fallback: "?"
  }}
  styles={{
    bgColor: "#6b7280"
  }}
/>
```

### Complete Custom Example

```jsx
<InitialsAvatar 
  name="Emily Rose Parker"
  styles={{
    size: 120,
    radius: "20%",
    bgColor: "#8b5cf6",
    textColor: "#fef3c7",
    fontFamily: "Georgia, serif",
    fontSize: 50,
    fontWeight: 500,
    letterSpacing: 3
  }}
  options={{
    maxLength: 2,
    uppercase: true
  }}
/>
```

## How Initials Are Extracted

The component intelligently extracts initials from names:

1. Removes special characters like hyphens, periods, and apostrophes
2. Splits the name by spaces
3. Takes the first letter of each word
4. Applies the `maxLength` limit if specified
5. Converts to uppercase by default (unless `uppercase: false`)

**Examples:**
- `"John Doe"` → `"JD"`
- `"Mary-Jane Watson"` → `"MJW"`
- `"Dr. James Smith Jr."` → `"DJSJ"`
- `"Anne O'Brien"` → `"AOB"`

## TypeScript Support

The package includes full TypeScript definitions:

```typescript
import { InitialsAvatar } from 'react-initials-avatar';
import type { StyleProps, InitialOptions } from 'react-initials-avatar';

const styles: StyleProps = {
  size: 60,
  bgColor: "#3b82f6"
};

const options: InitialOptions = {
  maxLength: 2,
  uppercase: true
};
```

## Browser Support

Works in all modern browsers that support React 18+:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT © Ankit Kumar Pandey

## Keywords

react, avatar, initials, react-avatar, profile-avatar, user-avatar, placeholder-avatar, avatar-component
