# 🎬 Lottie Animation Integration Guide

## ✅ **Current Setup**

Your app now uses Lottie animations instead of static components! Here's what's been added:

### **📦 Installed Packages:**

```bash
npm install lottie-react
```

### **📁 File Structure:**

```
public/
├── animations/
│   ├── phone-camera.json      # Step 1 animation
│   ├── data-analysis.json     # Step 2 animation
│   └── insights.json          # Step 3 animation
src/
├── components/
│   └── LottieStep.js          # Lottie animation component
```

## 🎨 **How to Get Better Lottie Animations**

### **1. Free Lottie Sources:**

- **LottieFiles**: https://lottiefiles.com/featured (Free & Premium)
- **Lordicon**: https://lordicon.com/ (Animated icons)
- **IconScout**: https://iconscout.com/lottie-animations
- **Flaticon**: https://www.flaticon.com/animated-icons

### **2. Search Keywords for Your App:**

- "phone camera animation"
- "data analysis chart"
- "food scanning"
- "insights bulb"
- "eco friendly"
- "nutrition analysis"

### **3. How to Replace Animations:**

#### **Step 1:** Download Lottie JSON from LottieFiles

1. Go to https://lottiefiles.com/
2. Search for "phone camera" or "food scan"
3. Download the `.json` file
4. Replace the files in `/public/animations/`

#### **Step 2:** Update Your Code

```javascript
// In page.js, the animations are automatically loaded:
import phoneCameraAnimation from "../../public/animations/phone-camera.json";
```

## 🎯 **Recommended Animations for Your App:**

### **Step 1 - Take a Photo:**

- Search: "phone camera", "scanning", "mobile photo"
- Example: Camera with scanning beam animation

### **Step 2 - Data Analysis:**

- Search: "data processing", "chart analysis", "loading bars"
- Example: Charts growing, data flowing animation

### **Step 3 - Insights:**

- Search: "lightbulb", "ideas", "recommendations"
- Example: Bulb lighting up, stars appearing

## ⚙️ **Customization Options**

### **LottieStep Component Props:**

```javascript
<LottieStep
  stepNumber={1} // Step number (1, 2, 3)
  title="Your Title" // Step title
  description="Your description" // Step description
  animationData={yourAnimation} // Lottie JSON data
  bgColor="bg-green-100" // Background color
  width={300} // Animation width
  height={250} // Animation height
/>
```

### **Animation Controls:**

- **loop={true}** - Animation repeats
- **autoplay={true}** - Starts automatically
- **Speed control** - Can be added to control playback speed

## 🚀 **Advanced Features You Can Add:**

### **1. Interactive Animations:**

```javascript
// Play animation on hover
const [isHovered, setIsHovered] = useState(false);

<div
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
>
  <Lottie animationData={animation} loop={isHovered} />
</div>;
```

### **2. Scroll-triggered Animations:**

```javascript
// Play animation when scrolled into view
import { useInView } from "react-intersection-observer";

const { ref, inView } = useInView();
<Lottie play={inView} />;
```

## 🎨 **Color Customization:**

Some Lottie animations allow color changes through CSS or props. Check the animation properties on LottieFiles.

## 📱 **Performance Tips:**

- Keep animations under 100KB for better performance
- Use compressed/optimized Lottie files
- Consider lazy loading for animations below the fold

## 🔄 **Current Animation Placeholders:**

The current animations are simple placeholders. Replace them with professional animations from LottieFiles for the best results!

Ready to make your app more engaging! 🎉
