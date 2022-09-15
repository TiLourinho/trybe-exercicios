class CreditCard:
    def __init__(self, name, number, month, year, security_code):
        self.name = name
        self.number = number
        self.month = month
        self.year = year
        self.security_code = security_code

    def __str__(self):
        return f"""
        Name: {self.name};
        Number: {self.number};
        Expiration date: {self.month}/{self.year};
        Security code: {self.security_code}.
        """


class Order:
    def __init__(self, items, credit_card=CreditCard):
        self.items = items
        self.credit_card = credit_card

    def __str__(self):
        return f"""
        Items: {self.items};
        Credit card: {self.credit_card}.
        """


card = CreditCard('Aloysius Devadander Abercrombie', 9844385239294157, 4, 28, 188)  # noqa
order = Order(['God of War', 'Cyberpunk 2077'], card)
