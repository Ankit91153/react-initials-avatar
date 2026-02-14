# React Initials Avatar Generator

A lightweight, customizable React component for generating beautiful initials-based avatars. Perfect for user profiles, contact lists, and any application that needs elegant placeholder avatars.

## Features

- 🎨 Fully customizable colors, sizes, and styles
- 🔤 Smart initials extraction from names
- 📦 Zero dependencies (except React)
- 🎯 Full TypeScript support with exported types
- ⚡ Lightweight and performant (~1.2KB gzipped)
- 🎭 Flexible styling options
- 📘 Complete type definitions included
- 🔧 Works with React 18+

## Installation

```bash
npm install react-intials-avatar-generator
```

or

```bash
yarn add react-intials-avatar-generator
```

or

```bash
pnpm add react-intials-avatar-generator
```

## Quick Start

```jsx
import { InitialsAvatar } from 'react-intials-avatar-generator';

function App() {
  return (
    <div>
      {/* Basic usage */}
      <InitialsAvatar name="John Doe" />
      
      {/* With custom styling */}
      <InitialsAvatar 
        name="Jane Smith"
        styles={{
          size: 80,
          bgColor: "#10b981",
          textColor: "#ffffff"
        }}
      />
    </div>
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

The package includes full TypeScript definitions with automatic type inference. No manual type definitions needed!

### Available Types

The package exports the following types:

- `InitialsAvatar` - The main component
- `StyleProps` - Type for styling configuration
- `InitialsAvatarProps` - Type for component props
- `InitialOptions` - Type for initials extraction options
- `getInitials` - Utility function for extracting initials

### TypeScript Usage

```typescript
import { InitialsAvatar } from 'react-intials-avatar-generator';
import type { 
  StyleProps, 
  InitialsAvatarProps, 
  InitialOptions 
} from 'react-intials-avatar-generator';

// Define styles with type safety
const styles: StyleProps = {
  size: 60,
  bgColor: "#3b82f6",
  textColor: "#ffffff",
  radius: "50%"
};

// Define options with type safety
const options: InitialOptions = {
  maxLength: 2,
  uppercase: true,
  fallback: "?"
};

// Use in your component
function MyAvatar() {
  return (
    <InitialsAvatar 
      name="John Doe"
      styles={styles}
      options={options}
    />
  );
}
```

### Type Definitions

All types are automatically included when you install the package. TypeScript will provide:
- ✅ Full autocomplete for all props
- ✅ Type checking for prop values
- ✅ IntelliSense documentation
- ✅ Error detection at compile time

No need to create separate `type.d.ts` files!

## API Reference

### Exported Components and Types

```typescript
// Component
export { InitialsAvatar }

// Types
export type { StyleProps, InitialsAvatarProps, InitialOptions }

// Utility
export { getInitials }
```

### Using the getInitials Utility

You can also use the `getInitials` function directly:

```typescript
import { getInitials } from 'react-intials-avatar-generator';

const initials = getInitials("John Doe", { 
  maxLength: 2, 
  uppercase: true 
});
// Returns: "JD"
```

## Browser Support

Works in all modern browsers that support React 18+:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Package Information

- **Size**: ~1.2KB (gzipped)
- **Dependencies**: React 18+ (peer dependency)
- **TypeScript**: Full type definitions included
- **Module Formats**: ESM and UMD

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT © Ankit Kumar Pandey

## Repository

- **GitHub**: [https://github.com/Ankit91153/react-initials-avatar](https://github.com/Ankit91153/react-initials-avatar)
- **Issues**: [https://github.com/Ankit91153/react-initials-avatar/issues](https://github.com/Ankit91153/react-initials-avatar/issues)

## Keywords

react, avatar, initials, react-avatar, profile-avatar, user-avatar, placeholder-avatar, avatar-component, typescript, react-component
