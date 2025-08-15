gsap.from(".header", { duration: 1.5, x: -200, ease: "power1" });
gsap.from("li", { delay: 1.5, opacity: 0, x: -100, stagger: 0.1 });
gsap.from(".text", {
  delay: 2,
  duration: 1,
  y: 200,
  ease: "power1.in",
  opacity: 0,
});
gsap.from(".line1", { delay: 2.5, height: 0, ease: "power2.in" });
gsap.from(".line2", { delay: 3, height: 0, ease: "power2.in" });
gsap.from(".img", {
  duration: 1.5,
  delay: 3.4,
  y: "-200%",
  opacity: 0,
  ease: "power2.in",
});
//gsap.from(".social", { delay: 4.5, y: 200, duration: 1.5, ease: "power2.in" });
gsap.from(".social", { delay: 4.5, y: 200, stagger: 1.4 });
