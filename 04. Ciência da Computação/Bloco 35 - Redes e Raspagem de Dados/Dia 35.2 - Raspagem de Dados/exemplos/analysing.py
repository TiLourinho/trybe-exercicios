from parsel import Selector
from rich import print
import requests


URL_BASE = 'http://books.toscrape.com/catalogue/'
next_page_url = 'page-1.html'

while next_page_url:
    response = requests.get(URL_BASE + next_page_url)
    selector = Selector(text=response.text)

    for index, product in enumerate(selector.css('.product_pod')):
        title = product.css('h3 a::attr(title)').get()
        price = product.css('.price_color::text').re(r'£\d+\.\d{2}')[0]

        detail_href = product.css('h3 a::attr(href)').get()
        detail_page_url = URL_BASE + detail_href
        detail_response = requests.get(detail_page_url)
        detail_selector = Selector(text=detail_response.text)
        description = detail_selector.css("#product_description ~ p::text").get()  # noqa

        suffix = "...more"
        if description.endswith(suffix):
            description = description[:-len(suffix)]

        print(f'Book {index + 1}:')
        print(f'    - Title: "{title}"')
        print(f'    - Price: {price}')
        print(f'    - Description: {description}')

    next_page_url = selector.css('.next a::attr(href)').get()
