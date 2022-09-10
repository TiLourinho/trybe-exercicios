from src.exercise_03 import email_validation
import pytest


def test_email_validation_01():
    """ When email is 'xablau@xablau.com' returns True """
    assert email_validation('xablau@xablau.com') is True


def test_email_validation_02():
    """ When email is '1ablau@xablau.com' raises an exception """
    with pytest.raises(ValueError, match='Email prefix must start with letters only'):  # noqa
        email_validation('1ablau@xablau.com')


def test_email_validation_03():
    """ When email is 'x*bl**@xablau.com' raises an exception """
    with pytest.raises(ValueError, match='Email prefix should only contain letters, numbers, hyphens and underscores'):  # noqa
        email_validation('x*bl**@xablau.com')


def test_email_validation_04():
    """ When email is 'xablau@x*bl**.com' raises an exception """
    with pytest.raises(ValueError, match='Email domain should only contain letters and numbers'):  # noqa
        email_validation('xablau@x*bl**.com')


def test_email_validation_05():
    """ When email is 'xablau@xablau.comm' raises an exception """
    with pytest.raises(ValueError, match='Email domain suffix must be up to 3 characters'):  # noqa
        email_validation('xablau@xablau.comm')
