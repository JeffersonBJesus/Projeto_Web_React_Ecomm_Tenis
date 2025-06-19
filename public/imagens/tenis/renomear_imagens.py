import os
import re

def renomear_imagens_com_espacos(diretorio):
    """
    Lê todos os arquivos de imagem em um diretório e renomeia aqueles que contêm
    espaços no nome, substituindo os espaços por sublinhados.

    Args:
        diretorio (str): O caminho do diretório contendo as imagens.
    """
    if not os.path.isdir(diretorio):
        print(f"Erro: O diretório '{diretorio}' não existe.")
        return

    print(f"Verificando imagens no diretório: {diretorio}")

    for nome_arquivo in os.listdir(diretorio):
        caminho_completo_antigo = os.path.join(diretorio, nome_arquivo)

        # Verifica se é um arquivo e se é uma imagem (você pode adicionar mais extensões)
        if os.path.isfile(caminho_completo_antigo) and \
           nome_arquivo.lower().endswith(('.png', '.jpg', '.jpeg', '.gif', '.bmp', '.tiff')):
            
            # Substitui espaços por sublinhados
            novo_nome_arquivo = re.sub(r'\s', '_', nome_arquivo)

            if novo_nome_arquivo != nome_arquivo:
                caminho_completo_novo = os.path.join(diretorio, novo_nome_arquivo)
                try:
                    os.rename(caminho_completo_antigo, caminho_completo_novo)
                    print(f"Renomeado: '{nome_arquivo}' para '{novo_nome_arquivo}'")
                except OSError as e:
                    print(f"Erro ao renomear '{nome_arquivo}': {e}")
            else:
                print(f"'{nome_arquivo}' já está no formato correto (sem espaços).")
        elif os.path.isfile(caminho_completo_antigo):
            print(f"Ignorando arquivo '{nome_arquivo}' (não é uma imagem suportada ou já está renomeado).")
        else:
            print(f"Ignorando '{nome_arquivo}' (não é um arquivo).")


if __name__ == "__main__":
    caminho_da_pasta = input("Por favor, digite o caminho completo da pasta com as imagens: ")
    renomear_imagens_com_espacos(caminho_da_pasta)
    print("\nProcesso concluído.")