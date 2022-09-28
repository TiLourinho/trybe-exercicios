from selenium import webdriver
from selenium.webdriver.common.by import By
from rich import print


chrome = webdriver.Chrome()

chrome.get('https://books.toscrape.com/')


def scrape(url):
    chrome.get(url)

    for book in chrome.find_elements(By.CLASS_NAME, 'product_pod'):
        new_item = {}

        new_item['title'] = (
            book.find_element(By.TAG_NAME, 'h3')
            .find_element(By.TAG_NAME, 'a')
            .get_attribute('innerHTML')
        )

        new_item["price"] = book.find_element(
            By.CLASS_NAME, "price_color"
        ).get_attribute('innerHTML')

        new_item["link"] = (
            book.find_element(By.CLASS_NAME, "image_container")
            .find_element(By.TAG_NAME, "a")
            .get_attribute('href')
        )

        print(new_item)


scrape("https://books.toscrape.com/")
