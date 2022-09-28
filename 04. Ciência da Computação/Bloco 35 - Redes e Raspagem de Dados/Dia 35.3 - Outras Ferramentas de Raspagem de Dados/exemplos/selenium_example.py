from selenium import webdriver


chrome = webdriver.Chrome()
response = chrome.get('https://www.google.com.br/')

search_input = chrome.find_element_by_tag_name('input')
search_input.send_keys('selenium')
