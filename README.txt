AGROSTAR LOGISTICS - Mobile app (PWA) install kaise karein
============================================================

Sabse aasaan (GitHub Pages - free, permanent, mobile pe bhi ho jaata hai):

1. github.com pe account banao / login karo.
2. New repository -> naam: agrostar-logistics -> Public -> Create repository.
3. "uploading an existing file" pe tap -> is folder ki saari files upload karo:
   index.html, manifest.webmanifest, sw.js, icon-192.png, icon-512.png, roadmap.html
   -> Commit changes. (roadmap.html bada file hai ~6.5MB, upload me thoda time lagega)
4. Settings -> Pages -> Branch: main, folder: / (root) -> Save.
5. 1-2 minute baad link milega: https://<username>.github.io/agrostar-logistics/
6. Wo link Chrome me kholo -> menu (3 dot) -> "Add to Home screen" / "Install app".
   -> Ab home screen pe app icon aa jaayega. Tap karke app ki tarah khulega,
      offline bhi chalega, aur upload kiya hua data phone me hi save rahega.

Alternative (computer available ho to 30 second me):
- app.netlify.com/drop kholo -> is "agrostar-logistics" folder ko drag-drop karo
  -> turant link milega -> Chrome me kholo -> Add to Home screen.

Login: Mohit.goyal / Mohit@123 (pehle se bhara hua hai, bas Log In dabana hai)

Zaroori baatein:
- Pehli baar link kholte waqt internet chahiye. Uske baad app offline bhi chalega.
- Aapka upload kiya hua data (Balance/LP List/FC/DVS/PDD/remarks) isi phone ke
  browser storage me save hota hai - kisi server pe nahi jaata.
- Naya CSV/XLSX upload karoge to sirf usi cheez ka purana data replace hoga,
  baaki sab (dusre uploads + saare remarks) waise hi rahenge.
- Agar kabhi app "reload" mange (koi error dikhaye), to Reload button dabao -
  data delete nahi hota, bas app dobara load hoti hai.
