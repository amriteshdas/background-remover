from flask import Flask, render_template, request, send_file
from rembg import remove
from PIL import Image
import io
import os  # Needed for reading environment variable

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/remove-bg', methods=['POST'])
def remove_bg():
    if 'image' not in request.files:
        return 'No image uploaded', 400

    file = request.files['image']
    image = Image.open(file.stream)
    output = remove(image)

    img_io = io.BytesIO()
    output.save(img_io, 'PNG')
    img_io.seek(0)

    return send_file(img_io, mimetype='image/png', as_attachment=True, download_name='output.png')

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 10000))  # ✅ match Render’s default port
    app.run(host="0.0.0.0", port=port)         # ✅ expose app on all network interfaces
