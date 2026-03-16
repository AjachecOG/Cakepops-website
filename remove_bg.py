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

brain_dir = r"C:\Users\Adam\.gemini\antigravity\brain\58e3dcc9-7ce8-4628-a9ed-cd50e2540be7"
output_dir = r"C:\Users\Adam\Desktop\Antigravity\website-builder\public"

media_files = [
    "media__1773690551049.jpg",
    "media__1773690551649.png",
    "media__1773690551656.jpg"
]

for i, filename in enumerate(media_files):
    input_path = os.path.join(brain_dir, filename)
    output_path = os.path.join(output_dir, f"user_cakepop_{i+1}.png")
    print(f"Removing background for {filename}...")
    try:
        with open(input_path, "rb") as f:
            input_data = f.read()
        output_data = rembg.remove(input_data)
        with open(output_path, "wb") as o:
            o.write(output_data)
        print(f"Saved {output_path}")
    except Exception as e:
        print(f"Error for {filename}: {e}")

