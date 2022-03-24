# Exercícios

**03. Baixe a imagem utilizando a tag:stable-slim, que é uma versão reduzida da distribuição**

docker pull debian:stable-slim

**04. Após baixar a imagem para seu computador local, crie e execute um container no modo interativo utilizando essa imagem como referência (não esqueça referenciar a tag)**

docker container run -it debian:stable-slim

**05. No terminal, você deve conseguir rodar o comando cat /etc/*-release , que vai retornar os dados da distribuição Debian que está sendo rodada dentro do container**

cat /etc/*-release

**06. Encerre o terminal**

exit

**07. Verifique na sua lista de containers , qual o container é referente ao exercício que acabou de praticar**

docker container ls -l (último) / -a (todos)

**08. Inicie o mesmo container novamente, sem criar outro. Valide se ele está ativo na lista de containers**

docker start (container id or name)

**09. Retome o container que foi criado anteriormente nesse exercício**

docker attach (container id or name)

**10. Rode o comando cat /etc/debian_version que deve retornar a versão atual do sistema do container**

cat /etc/debian_version

**11. Encerre o terminal**

exit

**12. Remova somente o container criado para esse exercício**

docker container rm (container id or name)
