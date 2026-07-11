import os
import json

cartella = "immagini"

# Estensioni consentite
estensioni = (".jpg", ".jpeg", ".png", ".webp", ".gif")

immagini = sorted([
    file
    for file in os.listdir(cartella)
    if file.lower().endswith(estensioni)
])

with open("immagini.json", "w", encoding="utf-8") as f:
    json.dump(immagini, f, ensure_ascii=False, indent=4)

print(f"Trovate {len(immagini)} immagini.")
print("Creato immagini.json")
