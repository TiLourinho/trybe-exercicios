from src.exercise_04 import filter_invalid_emails


def test_filter_invalid_emails_01():
    """ When list is empty returns an empty list """
    expected = []
    assert filter_invalid_emails('') == expected


def test_filter_invalid_emails_02(mock_list_01):
    """ When the list has all valid emails, it returns a list with all these emails """  # noqa
    expected = ['test1@xablau.com', 'test2@xablau.com', 'test3@xablau.com']
    assert filter_invalid_emails(mock_list_01) == expected


def test_filter_invalid_emails_03(mock_list_02):
    """ When list has 2 valid emails and 1 invalid, returns 2 valid emails """  # noqa
    expected = ['test1@xablau.com', 'test3@xablau.com']
    assert filter_invalid_emails(mock_list_02) == expected


def test_filter_invalid_emails_04(mock_list_03):
    """ When the list has all invalid emails, it returns an empty list """  # noqa
    expected = []
    assert filter_invalid_emails(mock_list_03) == expected
