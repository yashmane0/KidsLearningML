from flask import Flask, render_template, request, jsonify, session
import os
import random
import tensorflow as tf
from tensorflow.keras.preprocessing import image
import numpy as np
import json

app = Flask(__name__)
app.secret_key = '0256d206d436a7adbeb9c0f28fb16a34'

IMAGE_FOLDER = 'D:/KidsLearningML/static/examds'
CATEGORIES = ['apple', 'banana', 'bean', 'cabbage', 'carrot', 'cucumber', 'daisy', 'mango', 'orange', 'papaya', 'potato', 'rose', 'sunflower', 'tomato', 'tulip', 'watermelon']

model = tf.keras.models.load_model('D:/KidsLearningML/final_saved_model.h5')
image_index = 0
correct_count = 0   
question_number = 0
game_over = False
total_score = 0  # Initialize total score
    

@app.route('/')
def indexx():
    return render_template('index.html')
@app.route('/fruit.html')
def fruit():
    return render_template('fruit.html')
@app.route('/apple.html')
def apple():
    return render_template('apple.html')
@app.route('/banana.html')
def banana():
    return render_template('banana.html')
@app.route('/bottlegourd.html')
def bottlegourd():
    return render_template('bottlegourd.html')
@app.route('/cabbage.html')
def cabbage():
    return render_template('cabbage.html')
@app.route('/carrot.html')
def carrot():
    return render_template('carrot.html')
@app.route('/cauliflower.html')
def cauliflower():
    return render_template('cauliflower.html')
@app.route('/cherry.html')
def cherry():
    return render_template('cherry.html')
@app.route('/cucumber.html')
def cucumber():
    return render_template('cucumber.html')
@app.route('/daffodil.html')
def daffodil():
    return render_template('daffodil.html')
@app.route('/daisy.html')
def daisy():
    return render_template('daisy.html')
@app.route('/eggplant.html')
def eggplant():
    return render_template('eggplant.html')
@app.route('/first.html')
def first():
    return render_template('first.html')
@app.route('/flower.html')
def flower():
    return render_template('flower.html')



@app.route('/grape.html')
def grape():
    return render_template('grape.html')
@app.route('/indexxxx.html')
def indexxxx():
    return render_template('indexxxx.html')
@app.route('/jasmin.html')
def jasmin():
    return render_template('jasmin.html')
@app.route('/learn.html')
def learn():
    return render_template('learn.html')
@app.route('/lily.html')
def lily():
    return render_template('lily.html')
@app.route('/lotus.html')
def lotus():
    return render_template('lotus.html')
@app.route('/mango.html')
def mango():
    return render_template('mango.html')
@app.route('/marigold.html')
def marigold():
    return render_template('marigold.html')
@app.route('/mc.html')
def mc():
    return render_template('mc.html')
@app.route('/onion.html')
def onion():
    return render_template('onion.html')
@app.route('/orange.html')
def orange():
    return render_template('orange.html')
@app.route('/pineapple.html')
def pineapple():
    return render_template('pineapple.html')
@app.route('/potato.html')
def potato():
    return render_template('potato.html')
@app.route('/rose.html')
def rose():
    return render_template('rose.html')
@app.route('/second.html')
def second():
    return render_template('second.html')
@app.route('/spot-item.html')
def spotitem():
    return render_template('spot-item.html')
@app.route('/strawberry.html')
def strawberry():
    return render_template('strawberry.html')
@app.route('/sunflower.html')
def sunflower():
    return render_template('sunflower.html')
@app.route('/tomato.html')
def tomato():
    return render_template('tomato.html')
@app.route('/tulip.html')
def tulip():
    return render_template('tulip.html')
@app.route('/vegetables.html')
def vegetables():
    return render_template('vegetables.html')
@app.route('/match-word.html')
def matchword():
    return render_template('match-word.html')

@app.route('/watermellon.html')
def watermellons():
    return render_template('watermellon.html')


# @app.route('/cards')
# def get_cards():
#     # Read the JSON file and return its contents
#     with open('static/data/cards.json', 'r') as file:
#         data = json.load(file)
#     return jsonify(data)
@app.route('/frontend.html')
def index():
    global image_index, correct_count, session, question_number, game_over, total_score
    
    if game_over:
        return render_template('game_over.html', total_score=total_score)
    
    if question_number == 16:
        game_over = True
        return  render_template('game_over.html', total_score=total_score)
    
    if 'shown_images' not in session:
        session['shown_images'] = []
    
    image_files = [img for img in os.listdir(IMAGE_FOLDER) if img not in session['shown_images']]
    if not image_files:
        session['shown_images'] = []
        image_files = os.listdir(IMAGE_FOLDER)
    
    image_to_show = image_files[image_index]
    image_index = (image_index + 1) % len(image_files)
    session['shown_images'].append(image_to_show)
    
    correct_category = image_to_show.split('.')[0]
    predicted_category = predict_category(os.path.join(IMAGE_FOLDER, image_to_show))
    
    if predicted_category not in CATEGORIES:
        return "Error: Predicted category not found in available categories"
    
    options = [correct_category]
    incorrect_options = random.sample([cat for cat in CATEGORIES if cat != predicted_category], 3)
    options.extend(incorrect_options)
    random.shuffle(options)
    
    question_number += 1
    
    return render_template('frontend.html', session=session, image_to_show=image_to_show, 
                           correct_count=correct_count, options=options, correct_category=correct_category, 
                           predicted_category=predicted_category, question_number=question_number)

@app.route('/guess', methods=['POST'])
def guess():
    global correct_count, total_score
    
    selected_option = request.form['selected_option']
    predicted_category = request.form['predicted_category']
    correct_count = int(request.form['correct_count'])
    session['shown_images'] = request.form.getlist('shown_images')
    
    if len(session['shown_images']) == len(os.listdir(IMAGE_FOLDER)):
        total_score = correct_count  # Update total score
        
        print("Result:", correct_count)
        return jsonify({'feedback': 'Game Over', 'RESULT': correct_count, 'Total Score': total_score})
    
    if selected_option == predicted_category:
        feedback = "Correct!"
        correct_count += 1
        total_score += 1  # Update total score
    else:
        feedback = "Incorrect!"
    
    return jsonify({'feedback': feedback, 'RESULT': correct_count})

def predict_category(image_path):
    img = image.load_img(image_path, target_size=(224, 224))
    img_array = image.img_to_array(img)
    img_array = np.expand_dims(img_array, axis=0) / 255.0
    predictions = model.predict(img_array)
    predicted_category_index = np.argmax(predictions[0])
    return CATEGORIES[predicted_category_index]



if __name__ == '__main__':
    app.run(debug=True)