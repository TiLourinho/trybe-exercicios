from src.exercise_02 import string_to_phone_number
import pytest


def test_string_to_phone_number_01():
    """ When string is 'MY-LOVE' returns '69-5683' """
    assert string_to_phone_number('MY-LOVE') == '69-5683'


def test_string_to_phone_number_02():
    """ When string is 'THE-QUICK-BROWN-FOX' returns '843-78425-27696-369' """
    assert string_to_phone_number('THE-QUICK-BROWN-FOX') == '843-78425-27696-369'  # noqa


def test_string_to_phone_number_03():
    """ When string is 'JUMPS-OVER-THE-LAZY-DOG' returns '58677-6837-843-5299-364' """  # noqa
    assert string_to_phone_number('JUMPS-OVER-THE-LAZY-DOG') == '58677-6837-843-5299-364'  # noqa


def test_string_to_phone_number_04():
    """ When string is empty raises an exception """
    with pytest.raises(ValueError, match='The expression has an invalid length'):  # noqa
        string_to_phone_number('')


def test_string_to_phone_number_05():
    """ When string length is over 30 characters raises an exception """
    with pytest.raises(ValueError, match='The expression has an invalid length'):  # noqa
        string_to_phone_number('THE-QUICK-BROWN-FOX-JUMPS-OVER-THE-LAZY-DOG')


def test_string_to_phone_number_06():
    """ When string has characters different than digits and hyphens raises an exception """  # noqa
    with pytest.raises(ValueError, match='The expression has invalid characters'):  # noqa
        string_to_phone_number('DOESN\'T WORK?!')
