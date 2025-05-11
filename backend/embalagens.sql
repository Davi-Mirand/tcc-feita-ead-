-- Criação do banco de dados 'embalagens' (caso não exista)
CREATE DATABASE IF NOT EXISTS embalagens;

-- Seleciona o banco de dados 'embalagens' para uso
USE embalagens;

-- Criação da tabela 'tipos_embalagem' (caso não exista)
CREATE TABLE IF NOT EXISTS tipos_embalagem (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    quantidade INT NOT NULL,
    descricao TEXT,
    tipo_embalagem VARCHAR(100),
    material VARCHAR(100),
    urlimg VARCHAR(255) -- Adicionando o campo urlimg
);

-- Exemplo de inserção de dados na tabela (com a URL da imagem)
INSERT INTO tipos_embalagem (nome, quantidade, descricao, tipo_embalagem, material, urlimg) VALUES
('Pote de Vidro Pequeno', 100, 'Pote de vidro transparente para geleias e conservas.', 'Alimentícia', 'Vidro', '/assets/img/pote-vidro-pequeno.jpg'),
('Frasco Plástico com Pump', 50, 'Frasco plástico branco com pump dosador para loções.', 'Cosmético', 'Plástico PET', '/assets/img/frasco-plastico-pump.jpg'),
('Caixa de Papelão Ondulado', 200, 'Caixa de papelão resistente para transporte de produtos.', 'Geral', 'Papelão', '/assets/img/caixa-papelao.avif'),
('Saco Metalizado  para Alimentos', 150, 'Saco metalizado com fecho zip para embalar alimentos', 'Alimentícia', 'Metalizado', '/assets/img/saco-metalizado.jpg'),
('Tubo de Alumínio Flexível', 75, 'Tubo de alumínio para cremes e pomadas.', 'Alimenticia', 'Alumínio', '/assets/img/saco-de-plastico.jpg');

