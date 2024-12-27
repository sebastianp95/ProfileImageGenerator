from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
import requests
import os
from PIL import Image
import io
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

app = Flask(__name__)
CORS(app)

# Get API keys and URLs from environment variables
REMOVE_BG_API_KEY = os.getenv("BG_API_KEY")
GRADIENT_URL = os.getenv("GRADIENT_URL")

@app.route('/upload-image', methods=['POST'])
def upload_image():
    if 'image' not in request.files:
        return jsonify({"error": "No file uploaded"}), 400

    file = request.files['image']

    try:
        # Call Remove.bg API with gradient background URL
        response = requests.post(
            'https://api.remove.bg/v1.0/removebg',
            files={'image_file': file},
            data={
                'size': 'auto',
                'bg_image_url': GRADIENT_URL  # Use hosted URL for gradient
            },
            headers={'X-Api-Key': REMOVE_BG_API_KEY}
        )

        if response.status_code != 200:
            raise Exception(f"Remove.bg API error: {response.text}")

        # Return the processed image directly to the client
        processed_image = io.BytesIO(response.content)
        processed_image.seek(0)
        return send_file(processed_image, mimetype='image/png')

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    # Ensure the static directory exists
    if not os.path.exists("static"):
        os.makedirs("static")
    app.run(debug=True)
