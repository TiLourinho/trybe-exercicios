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
    def dispara_log(self, message):
        return message


class BaseLog:
    def __init__(self, log):
        self.log = log


class LogError(BaseLog):
    def dispara_log(self, message):
        phrase = f'{VERMELHO}{self.log.dispara_log(message)}{RESET}'
        return phrase


class LogWarning(BaseLog):
    def dispara_log(self, message):
        phrase = f'{LARANJA}{self.log.dispara_log(message)}{RESET}'
        return phrase


class LogSuccess(BaseLog):
    def dispara_log(self, message):
        phrase = f'{VERDE}{self.log.dispara_log(message)}{RESET}'
        return phrase


log = Log()
log_error = LogError(log)
print(log_error.dispara_log('O sistema está com erros'))

log_warning = LogWarning(log)
print(log_warning.dispara_log('O sistema está lento'))

log_success = LogSuccess(log)
print(log_success.dispara_log('O sistema está funcionando'))
