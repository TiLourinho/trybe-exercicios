ROSA = "\033[95m"
ROXO = "\033[94m"
AZUL = "\033[96m"
VERDE = "\033[92m"
LARANJA = "\033[93m"
VERMELHO = "\033[91m"
NEGRITO = "\033[1m"
SUBLINHADO = "\033[4m"
RESET = "\033[0m"


class Log:
    def dispara_log(message):
        return message


class BaseLog:
    def __init__(self, log):
        self.log = log


class LogError(BaseLog):
    def dispara(self):
        message = f'{VERMELHO}O sistema está com erros{RESET}'
        return self.log.dispara_log(message)


class LogWarning(BaseLog):
    def dispara(self):
        message = f'{LARANJA}O sistema está lento{RESET}'
        return self.log.dispara_log(message)


class LogSuccess(BaseLog):
    def dispara(self):
        message = f'{VERDE}O sistema está funcionando{RESET}'
        return self.log.dispara_log(message)


log_error = LogError(Log)
print(log_error.dispara())

log_warning = LogWarning(Log)
print(log_warning.dispara())

log_success = LogSuccess(Log)
print(log_success.dispara())
