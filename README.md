# 🪄 AI Background Remover

An AI-powered web app that removes backgrounds from images instantly using deep learning.


## 🧠 Features

- One-click AI-powered background removal
- Drag & drop upload UI
- Real-time upload & processing indicators
- Transparent PNG output
- Fully responsive design

## 🛠️ Tech Stack

- Flask (Python)
- rembg (U²-Net / ONNX)
- HTML, CSS, JS (Frontend)
- Pillow for image handling

## 🔧 Local Setup

```bash
git clone https://github.com/amriteshdas/background-remover.git
cd background-remover
python -m venv venv
source venv/bin/activate  # Or venv\Scripts\activate on Windows
pip install -r requirements.txt
python app.py
```

Visit `http://127.0.0.1:5000`

## 🌐 Deploy on Render

1. Connect repo to Render
2. Make sure `render.yaml` is present
3. Add env var: `PYTHON_VERSION = 3.10`

## 🙋‍♂️ Author

**Amritesh Das**  
🔗 [LinkedIn](https://linkedin.com/in/amriteshdas)
