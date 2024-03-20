from flask import Flask, render_template
from selenium import webdriver
from selenium.webdriver.common.by import By
import time
import requests
from geopy.geocoders import Nominatim
from geopy.distance import geodesic

app = Flask(__name__, static_url_path="/static")

def scrape_admission_data():
    try:
        options = webdriver.ChromeOptions()
        options.add_argument("headless")
        options.add_experimental_option("excludeSwitches", ["enable-logging"])
        driver = webdriver.Chrome(options=options)
        driver.get("https://www.sjsu.edu/admissions/impaction/freshmen-impaction-results/index.php")
        time.sleep(2)
        program_data = driver.find_element(By.XPATH, "//*[@id=\"sjsu-maincontent\"]/table").get_attribute("innerHTML")
        driver.quit()
        return program_data
    except Exception as e:
        print(f"Error occurred while scraping admission data: {e}")
        return None

def get_user_location():
    try:
        response = requests.get("http://ip-api.com/json/")
        location = response.json()
        if response.status_code == 200 and location.get("status") == "success":
            user_coords = (location["lat"], location["lon"])
            return user_coords
        else:
            return None
    except Exception as e:
        print(f"Error occurred while getting user location: {e}")
        return None

@app.route("/")
def index():
    program_data = scrape_admission_data()
    if program_data is None:
        return "Error: Unable to retrieve admission data. Please try again later."

    user_coords = get_user_location()
    if user_coords is None:
        return "Error: Unable to retrieve user location. Please try again later."

    school_coords = (37.3352, -121.8811)
    final_distance = round(geodesic(user_coords, school_coords).miles)

    return render_template("./index.html", program_columns=program_data, mileage=final_distance)

if __name__ == "__main__":
    app.run(debug=False, host="0.0.0.0")
