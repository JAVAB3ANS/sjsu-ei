from flask import Flask, render_template
from selenium import webdriver   
from selenium.webdriver.common.by import By 
import time   
import requests
import geopy.distance

app = Flask(__name__, static_url_path="/static")

@app.route("/")
def index():  
    # set options for selenium webdriver, instantiate, and deploy to scrape from school's admission site
    options = webdriver.ChromeOptions()
    options.add_argument("headless")
    options.add_experimental_option("excludeSwitches", ["enable-logging"])
    driver = webdriver.Chrome(options=options)
    driver.get("https://www.sjsu.edu/admissions/impaction/freshmen-impaction-results/index.php")  
    
    # sleep to avoid overdoing server limits and extracting xpath value to get innerhtml attributes
    time.sleep(2) 
    program_data = driver.find_element(By.XPATH, "//*[@id=\"sjsu-maincontent\"]/table").get_attribute("innerHTML")
    
    # would calculate depending on current user's distance relative to the school
    location = requests.get("http://ip-api.com/json/").json()  
    user_cords = (location["lat"], location["lon"])
    school_cords = (37.3352, -121.8811) 
    final_distance = round(geopy.distance.distance(user_cords, school_cords).miles) 
 
    return render_template("./index.html", program_columns=program_data, mileage=final_distance)   
  
if __name__ == "__main__": 
    app.run(debug=False, host="0.0.0.0")
    # Running the application in debug mode (debug flag is set to True in run) is a security risk if the application is accessible by untrusted parties.