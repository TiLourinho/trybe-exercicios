"""
Exercício: Baseando-se em uma página contendo detalhes sobre um livro
(http://books.toscrape.com/catalogue/the-grand-design_405/index.html), faça a
extração dos campos título, preço, descrição e url contendo a imagem de
capa do livro.
"""

from parsel import Selector
from rich import print
import requests

URL_BASE = 'http://books.toscrape.com/'
response = requests.get('http://books.toscrape.com/catalogue/the-grand-design_405/index.html')  # noqa
selector = Selector(text=response.text)

title = selector.css('.product_page h1::text').get()
print(f'Title: "{title}"')

price = selector.css('.price_color::text').get().replace('Â£', '')  # noqa
print(f'Price: £ {price}')

suffix = ' ...more'
description = selector.css('#product_description ~ p::text').get()[:-len(suffix)]  # noqa
print(f'Description: "{description}"')

img_url = URL_BASE + selector.css('#product_gallery img::attr(src)').get()  # noqa
print(f'Image URL: {img_url}')
