# Wicked Works Design System

## Color Palette

### Dark Backgrounds
- `bg-dark-950` (#0a0a0a) - Pure black base for main background
- `bg-dark-900` (#121212) - Slightly elevated surfaces
- `bg-dark-800` (#1a1a1a) - Card backgrounds and containers
- `bg-dark-700` (#242424) - Hover states and interactive elements

### Red Accent System
- `text-red-500` (#ff2d3f) - Primary brand red
- `text-red-400` (#ff5c6a) - Lighter accent for highlights
- `text-red-600` (#ed1730) - Darker accent for depth
- `border-red-500/30` - Red borders at 30% opacity (subtle)
- `border-red-500/50` - Red borders at 50% opacity (active)

### Glass Colors
- `bg-glass-light` - rgba(255, 255, 255, 0.05) - Subtle glass overlay
- `bg-glass-medium` - rgba(255, 255, 255, 0.08) - Standard glass
- `bg-glass-strong` - rgba(255, 255, 255, 0.12) - Strong glass
- `bg-glass-red-subtle` - rgba(255, 45, 63, 0.08) - Red glass hint
- `bg-glass-red-medium` - rgba(255, 45, 63, 0.15) - Red glass active
- `bg-glass-red-strong` - rgba(255, 45, 63, 0.25) - Red glass strong

## Component Classes

### Buttons

#### Primary Button (Glass with Red Hints)
```jsx
<button className="btn-primary">
  Add to Cart
</button>
```
- Clear glass base with red border glow
- Hover: More red background, stronger glow
- Active: Even more red, scale down slightly

#### Secondary Button (Clear Glass)
```jsx
<button className="btn">
  Learn More
</button>
```
- Clear glass with white border
- Hover: Red hints appear
- Active: Red glow

#### Ghost Button
```jsx
<button className="btn-ghost">
  Cancel
</button>
```
- No background until hover
- Subtle glass on hover

### Cards

#### Standard Card
```jsx
<div className="card">
  Content here
</div>
```
- Glass background with blur
- White border (low opacity)
- Subtle shadow
- Hover: Border brightens, shadow grows

#### Red Accent Card
```jsx
<div className="card-red">
  Featured content
</div>
```
- Glass with red tint
- Red border glow
- Hover: Stronger red glow

### Interactive Elements

#### Subtle Interaction
```jsx
<div className="interactive">
  Clickable item
</div>
```
- Slight scale on hover (1.02)
- Subtle red glow

#### Strong Interaction
```jsx
<div className="interactive-strong">
  Product card
</div>
```
- Stronger scale on hover (1.05)
- Red glow appears
- Scale down on active (0.98)

### Form Inputs

```jsx
<input className="input" placeholder="Email address" />
```
- Glass background with blur
- White border (low opacity)
- Focus: Red border glow appears
- Placeholder: White at 40% opacity

### Navigation

#### Links
```jsx
<a className="nav-link">Products</a>
<a className="nav-link-active">Home</a>
```
- Default: White at 70% opacity
- Hover: Full white + red underline
- Active: Full white + red underline (permanent)

### Badges

```jsx
<span className="badge">New</span>
```
- Small glass pill with red tint
- Red border and text

### Dividers

```jsx
<hr className="divider" />
<hr className="divider-red" />
```
- Standard: White at 10% opacity
- Red: Red at 20% opacity

## Effects & Utilities

### Shadows
- `shadow-glow-red-sm` - Small red glow
- `shadow-glow-red` - Medium red glow
- `shadow-glow-red-lg` - Large red glow
- `shadow-glass` - Glass depth shadow
- `shadow-glass-lg` - Stronger glass shadow

### Text Effects
```jsx
<h1 className="text-glow-red">Wicked Works</h1>
<h2 className="gradient-text-red">Featured</h2>
```
- `text-glow-red` - Red glow around text
- `text-glow-red-strong` - Stronger red glow
- `gradient-text-red` - Red gradient text

### Animations
- `animate-pulse-red` - Pulsing red glow
- `animate-glow` - Breathing glow effect

## Design Principles

1. **Dark First**: Always start with dark backgrounds (`bg-dark-950` or `bg-dark-900`)
2. **Glass Everywhere**: Use `.glass` or `.glass-red` for all interactive surfaces
3. **Red Hints on Hover**: Default state is clear glass, hover adds red
4. **More Red When Active**: Active states intensify the red glow
5. **Subtle to Bold**: Start subtle, become bold on interaction
6. **Smooth Transitions**: All transitions are 300ms for consistency

## Example Layouts

### Product Card
```jsx
<div className="card interactive-strong">
  <img src="..." alt="Product" className="rounded-lg" />
  <h3 className="text-xl font-bold mt-4">Product Name</h3>
  <p className="text-white/60 mt-2">Description</p>
  <div className="flex items-center justify-between mt-4">
    <span className="text-2xl font-bold gradient-text-red">$99</span>
    <button className="btn-primary">Add to Cart</button>
  </div>
</div>
```

### Hero Section
```jsx
<section className="min-h-screen flex items-center justify-center bg-dark-950">
  <div className="text-center">
    <h1 className="text-6xl font-bold text-glow-red mb-4">
      Wicked Works
    </h1>
    <p className="text-xl text-white/70 mb-8">
      Premium products, wicked style
    </p>
    <button className="btn-primary text-lg px-8 py-4">
      Shop Now
    </button>
  </div>
</section>
```

### Navigation Header
```jsx
<header className="glass border-b border-white/10 sticky top-0 z-50">
  <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
    <h1 className="text-2xl font-bold gradient-text-red">Wicked Works</h1>
    <div className="flex gap-6">
      <a className="nav-link-active">Home</a>
      <a className="nav-link">Products</a>
      <a className="nav-link">Collections</a>
    </div>
    <button className="btn">Cart (0)</button>
  </nav>
</header>
```
