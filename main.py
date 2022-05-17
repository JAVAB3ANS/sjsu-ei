from flask import Flask, render_template
from selenium import webdriver   
from selenium.webdriver.common.by import By 
import time   
# import requests
# import geopy.distance

app = Flask(__name__, static_url_path="/static")

@app.route("/")
def index():  
    options = webdriver.ChromeOptions()
    options.add_argument("headless")
    options.add_experimental_option("excludeSwitches", ["enable-logging"])
    driver = webdriver.Chrome(options=options) 
    driver.get("https://www.sjsu.edu/admissions/impaction/freshmen-impaction-results/index.php") 

    time.sleep(2)

    table_data = driver.find_element(By.XPATH, "//*[@id=\"sjsu-maincontent\"]/table").get_attribute("innerHTML")

    # location_lookup()
 
    return render_template("./index.html", columns=table_data)   

"""
def location_lookup():
    location = requests.get("http://ip-api.com/json/").json()  

    # would calculate depending on current user's distance relative to the school
    user_cords = (location["lat"], location["lon"])
    school_cords = (37.3352, -121.8811) 
    final_distance = round(geopy.distance.distance(user_cords, school_cords).miles) 

    return render_template("./index.html", mileage=final_distance)   
"""
 
if __name__ == "__main__": 
    app.run(debug=True, host="0.0.0.0")