from rich import print
from abc import ABC, abstractmethod


class Alarm:
    def __init__(self):
        self.chores = []

    def add_chore(self, chore):
        self.chores.append(chore)

    def start_all_chores(self):
        for chore in self.chores:
            chore.start()

    def wake_up(self):
        print('WAAAAAKE UUUUUP!\n')
        self.start_all_chores()


class Starter(ABC):
    def __init__(self, alarm):
        self.alarm = alarm
        self.alarm.add_chore(self)

    @abstractmethod
    def start(self):
        raise NotImplementedError


class StartLights(Starter):
    def start(self):
        message = 'The lights are on'
        print(message)


class StartCoffee(Starter):
    def start(self):
        message = 'Coffee is being made'
        print(message)


class StartPC(Starter):
    def start(self):
        message = 'The PC is on'
        print(message)


morning_alarm = Alarm()
StartLights(morning_alarm)
StartCoffee(morning_alarm)
StartPC(morning_alarm)

morning_alarm.wake_up()
