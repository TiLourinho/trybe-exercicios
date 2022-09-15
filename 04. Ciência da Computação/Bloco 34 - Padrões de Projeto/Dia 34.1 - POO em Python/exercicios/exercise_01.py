class TV:
    def __init__(self, tamanho):
        self.__tamanho = tamanho
        self.__volume = 50
        self.__canal = 1
        self.__ligada = False

    @property
    def tamanho(self):
        return self.__tamanho

    @property
    def volume(self):
        return self.__volume

    @property
    def canal(self):
        return self.__canal

    @property
    def ligada(self):
        return self.__ligada

    def aumentar_volume(self):
        if self.__volume == 99:
            self.__volume
        else:
            self.__volume += 1

    def diminuir_volume(self):
        if self.__volume == 0:
            self.__volume
        else:
            self.__volume -= 1

    def modificar_canal(self, novo_canal):
        if 1 <= novo_canal <= 99:
            self.__canal = novo_canal
        else:
            raise ValueError('Canal inválido!')

    def ligar_desligar(self):
        if not self.__ligada:
            self.__ligada = True
        else:
            self.__ligada = False


new_tv = TV(42)
new_tv.aumentar_volume()
new_tv.aumentar_volume()
new_tv.diminuir_volume()
new_tv.modificar_canal(10)
new_tv.ligar_desligar()

condicao = 'ligada' if new_tv.ligada else 'desligada'
print(f'\nA {new_tv.__class__.__name__} está com o volume no {new_tv.volume}.')
print(f'A {new_tv.__class__.__name__} está no canal {new_tv.canal}.')
print(f'A {new_tv.__class__.__name__} está {condicao}.')
