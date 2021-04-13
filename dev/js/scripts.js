import { gsap } from "gsap";

gsap.to("#red-circle", { duration: 4, x: 200, repeat: -1, yoyo: true });

//gsap.to("#pink-circle", { duration: 4, x: 200 });
gsap.from("#pink-circle", { duration: 4, scale: 2, alpha: 0, delay: 0, repeat: -1, yoyo: true });

gsap.to("#purple-circle", { duration: 4, x: 200, repeat: -1, yoyo: true });
//gsap.to("#green-circle", { duration: 4, scale: 0.5 });
gsap.to("#green-circle", { duration: 4, scale: -1.5, repeat: -1, yoyo: true });

//gsap.to("#pink-circle", {x: (i) => 6 * i, repeat: -1, yoyo: true, duration: 1});