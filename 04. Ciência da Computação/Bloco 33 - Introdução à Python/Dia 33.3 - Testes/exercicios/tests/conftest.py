import pytest


@pytest.fixture
def mock_list_01():
    return ['test1@xablau.com', 'test2@xablau.com', 'test3@xablau.com']


@pytest.fixture
def mock_list_02():
    return ['test1@xablau.com', 'test*@xablau.com', 'test3@xablau.com']


@pytest.fixture
def mock_list_03():
    return ['****1@xablau.com', 'test*@*****.com', 'test3@xablau.comm']
