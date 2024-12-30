
---

# 📚 GSAP Documentation : Lecture 2 Notes - Using Scroll Trigger

## 🌟 Why Use Scroll Trigger?

1. **Challenge with Delays**  
   - Animating based on delays is unreliable as user behavior is unpredictable.  
   - If a user stays on Section 1 for a long time, the animation for Section 2 may play and stop before they scroll to it.

2. **Solution: Trigger Animations on Scroll**  
   - Use `ScrollTrigger` to play animations dynamically based on user scroll actions.  
   - Ensures animations occur only when the user reaches the relevant section.

---

## 📑 HTML Structure

```html
<div id="page1">
  <div id="box"></div>
</div>
<div id="page2">
  <div id="box"></div>
</div>
<div id="page3">
  <div id="box"></div>
</div>
```

---

## 🎨 CSS Styles

```css
#page1,
#page2,
#page3 {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

#page1 {
  background-color: black;
}

#page2 {
  background-color: crimson;
}

#page3 {
  background-color: greenyellow;
}

#box {
  height: 250px;
  width: 250px;
  background-color: blueviolet;
  border-radius: 30px;
}
```

---

## ⚡ Initial Animation Setup (Without ScrollTrigger)

```javascript
gsap.from("#page1 #box", {
  scale: 0,
  delay: 1,
  duration: 2,
  rotate: 360,
});

gsap.from("#page2 #box", {
  scale: 0,
  delay: 1,
  duration: 2,
  rotate: 360,
});
```

---

## ✨ Adding ScrollTrigger

1. **Include Required CDNs**  
   Add GSAP and ScrollTrigger plugins to your HTML:  
   ```html
   <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
   <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
   ```

2. **Update Animation for ScrollTrigger**  
   ```javascript
   gsap.from("#page2 #box", {
     scale: 0,
     duration: 2,
     rotate: 360,
     scrollTrigger: "#page2 #box",
   });
   ```

---

## 🔍 Exploring ScrollTrigger Properties

```javascript
gsap.from("#page2 #heading1", {
  scale: 0,
  duration: 1,
  x: 500,
  scrollTrigger: {
    trigger: "#page2 #heading1",
    scroller: "body",
    markers: true,
    start: "top 80%",
    end: "top 30%",
    scrub: 3,
  },
});
```

### Key Properties:
1. **`trigger`**: Defines the element to activate the animation.  
2. **`scroller`**: Specifies the scrolling element (`body` by default).  
3. **`markers`**: Adds visual markers to debug start and end points.  
4. **`start` & `end`**: Set animation boundaries relative to the viewport.  
5. **`scrub`**: Smoothens the animation over the scroll range. Higher values slow it down.

---

## 📌 Using the Pin Property

- The **`pin`** property locks a parent element in place while animations play.

```javascript
gsap.to("#page2 h1", {
  transform: "translateX(-150%)",
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    start: "top 0%",
    end: "top -150%",
    pin: true,
    scrub: 3,
  },
});
```

---
Explore GSAP to create visually captivating web experiences!