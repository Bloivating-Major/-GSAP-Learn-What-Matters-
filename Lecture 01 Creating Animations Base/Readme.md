# GSAP Documentation: Lecture 1 Notes

## What is GSAP?
GSAP (GreenSock Animation Platform) is a powerful JavaScript animation library designed to create stunning animations with minimal code. Its primary purpose is to:

- Create smooth motion transitions and complex 3D visual effects.
- Enhance website aesthetics with animations.
- Simplify the animation process by reducing the amount of code needed.

---

## Getting Started with GSAP

### Setting Up Your Project
To begin using GSAP, follow these steps:

1. **Create Basic Files**:
   - Set up an HTML file, a CSS file, and a JavaScript file.
   - Link these files together in your HTML.

2. **Include the GSAP CDN**:
   - Add the GSAP library to your project by including its CDN link in the HTML file:

```html
<script
  src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"
  integrity="sha512-7eHRwcbYkK4d9g/6tD/mhkf++eoTHwpNM9woBxtPUBWm67zeAfFC+HrdoE2GanKeocly/VxeLvIqwvCdk7qScg=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
></script>
```

3. **Using GSAP Methods**:
   - GSAP provides multiple methods to animate elements. The most common are:
     - `gsap.to`
     - `gsap.from`

### Basic Animation Example
#### Using `gsap.to`
```javascript
gsap.to("#box1", {
  x: 1000,
  duration: 2,
  delay: 1,
});
```
- **Element**: Targets an element with the specified ID or class.
- **Options**: Defines animation properties such as `x` (horizontal position), `duration`, and `delay`.

#### Using `gsap.from`
```javascript
gsap.from("#box2", {
  x: 1000,
  duration: 2,
  delay: 1,
});
```
- Animates the element from its final position back to its initial position.

### Comparison of Methods
| Method      | Direction                 |
|-------------|---------------------------|
| `gsap.to`   | Initial ➔ Final Position |
| `gsap.from` | Final ➔ Initial Position |

---

## Box Animations
Enhance animations with additional CSS properties:

```javascript
gsap.to("#box1", {
  x: 1000,
  duration: 2,
  delay: 1,
  rotate: 360,
  backgroundColor: "royalblue",
  borderRadius: "20%",
});

gsap.from("#box2", {
  x: 1000,
  duration: 2,
  delay: 1,
  rotate: 360,
  backgroundColor: "crimson",
  scale: 0.5,
});
```
---

## Text Animations with Stagger
When animating multiple elements (e.g., `<h1>` tags), the `stagger` property creates a sequential effect.

### Staggering Animations
- **Positive Values**: Top-to-bottom animation.
- **Negative Values**: Bottom-to-top animation.

```javascript
gsap.from("h1", {
  opacity: 0,
  color: "crimson",
  duration: 2,
  delay: 1,
  y: 30,
  stagger: 0.3,
});
```
---

## Repeat and Yoyo Animations
### Repeat Property
- **Repeat Once**: `repeat: 1` (animation runs twice: initial + one repeat).
- **Infinite Repeat**: `repeat: -1`.

### Yoyo Property
- Animates forward and then reverses back, like a yoyo spin.

```javascript
gsap.from("#box1", {
  x: 1000,
  duration: 2,
  rotate: 360,
  borderRadius: "20%",
  yoyo: true,
  repeat: -1,
});
```
---

## Timeline in GSAP
A `timeline` synchronizes animations, creating a sequence that plays step-by-step.

### Creating a Timeline
```javascript
let timeLine = gsap.timeline();

timeLine.to("#box1", {
  x: 1500,
  duration: 1.5,
  backgroundColor: "royalblue",
});

timeLine.to("#box2", {
  x: 1500,
  rotate: 360,
  backgroundColor: "yellow",
  duration: 1.5,
});

timeLine.to("#box3", {
  x: 1500,
  rotate: 360,
  backgroundColor: "crimson",
  duration: 1.5,
});
```
---

## Summary
1. GSAP simplifies animations with intuitive methods.
2. Use `gsap.to` and `gsap.from` for basic animations.
3. Enhance animations with properties like `rotate`, `scale`, `backgroundColor`, and `stagger`.
4. Leverage `repeat`, `yoyo`, and `timeline` for advanced effects.

Explore GSAP to create visually captivating web experiences!

