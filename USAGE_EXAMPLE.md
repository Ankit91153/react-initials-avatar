# TypeScript Usage Example

After building and publishing this package, users can import it with full TypeScript support:

```typescript
import { InitialsAvatar } from 'react-intials-avatar-generator';
import type { StyleProps, InitialsAvatarProps, InitialOptions } from 'react-intials-avatar-generator';

// Basic usage
function MyComponent() {
  return <InitialsAvatar name="John Doe" />;
}

// With typed props
function CustomAvatar() {
  const styles: StyleProps = {
    size: 80,
    bgColor: "#10b981",
    textColor: "#ffffff",
    radius: "50%"
  };

  const options: InitialOptions = {
    maxLength: 2,
    uppercase: true
  };

  return (
    <InitialsAvatar 
      name="Jane Smith"
      styles={styles}
      options={options}
    />
  );
}

// TypeScript will provide autocomplete and type checking
// No need to manually define types in your project!
```

## What's Included

The package now exports:
- `InitialsAvatar` - The main component
- `StyleProps` - Type for styling options
- `InitialsAvatarProps` - Type for component props
- `InitialOptions` - Type for initials extraction options
- `getInitials` - Utility function for extracting initials

All types are automatically available when you install the package.
