from exercise_01 import fizz_buzz


def test_fizz_buzz_01():
    """When number is 0 returns an empty list"""
    assert fizz_buzz(0) == []


def test_fizz_buzz_02():
    """ When number is 3 returns a list where the last element is a 'Fizz' """
    assert fizz_buzz(3)[-1] == 'Fizz'


def test_fizz_buzz_03():
    """ When number is 5 returns a list where the last element is 'Buzz' """
    assert fizz_buzz(5)[-1] == 'Buzz'


def test_fizz_buzz_04():
    """ When number is 15 returns a list where the last element is 'FizzBuzz """  # noqa
    assert fizz_buzz(15)[-1] == 'FizzBuzz'
