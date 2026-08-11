git config --global user.name "Seu Nome"        # Define o nome do usuário
git config --global user.email "email@exemplo.com" # Define o e-mail do usuário

git init                       # Inicializa um novo repositório
git clone <url>                # Clona um repositório remoto

git status                     # Mostra o estado atual do repositório
git log --oneline              # Exibe o histórico resumido de commits
git diff                       # Mostra as alterações ainda não adicionadas

git add .                      # Adiciona todos os arquivos ao staging
git add <arquivo>              # Adiciona um arquivo específico
git commit -m "Mensagem"       # Cria um commit com uma mensagem

git branch                     # Lista as branches
git switch -c nova-branch      # Cria e troca para uma nova branch
git switch nome-branch         # Troca para outra branch
git merge nome-branch          # Mescla outra branch na atual

git remote -v                  # Lista os repositórios remotos
git pull                       # Baixa e aplica alterações do remoto
git push                       # Envia os commits para o remoto

git restore <arquivo>          # Descarta alterações de um arquivo
git reset --soft HEAD~1        # Desfaz o último commit mantendo as alterações
git reset --hard HEAD~1        # Remove o último commit e as alterações (CUIDADO)

git stash                      # Salva alterações temporariamente
git stash pop                  # Recupera as alterações salvas