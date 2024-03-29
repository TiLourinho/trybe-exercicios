from parsel import Selector
from rich import print
import requests


URL_BASE = 'http://books.toscrape.com/catalogue/'
response = requests.get(URL_BASE + 'page-1.html')
selector = Selector(text=response.text)

href = selector.css('.product_pod h3 a::attr(href)').get()
detail_page_url = URL_BASE + href

detail_response = requests.get(detail_page_url)
detail_selector = Selector(text=detail_response.text)

description = detail_selector.css('#product_description ~ p::text').get()
print(description)
