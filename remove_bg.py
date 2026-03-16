import sys
import subprocess
import os

try:
    import rembg
    from PIL import Image
except ImportError:
    print("Installing requirements...")
    subprocess.check_call([sys.executable, "-m", "pip", "install", "rembg", "Pillow", "onnxruntime"])
    import rembg
    from PIL import Image

input_path = r"C:\Users\Adam\.gemini\antigravity\brain\13c66185-2ecb-4d14-a174-2e85a275a5c1\media__1773611610537.png"
output_path = r"C:\Users\Adam\Desktop\Antigravity\website-builder\public\hero_cakepop.png"

print("Removing background...")
try:
    with open(input_path, "rb") as i:
        input_data = i.read()

    output_data = rembg.remove(input_data)

    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    with open(output_path, "wb") as o:
        o.write(output_data)

    print("Success!")
except Exception as e:
    print(f"Error: {e}")
